import { ipfs, json } from "@graphprotocol/graph-ts";

import { Transfer as TransferEvent } from "../generated/IERC721/IERC721";
import { IERC721Metadata as MetaDataContract } from "../generated/IERC721/IERC721Metadata";
import { Account, Token, Collection } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  // Add user from existing graph-node
  let owner = Account.load(event.params.to.toHexString());
  if (!owner) {
    owner = new Account(event.params.to.toHexString());
    owner.save();
  }

  // add collection (contract address) from existing graph-node
  let collection = Collection.load(event.address.toHexString());
  if (!collection) {
    collection = new Collection(event.address.toHexString());
    collection.save();
  }

  // Load token from existing graph-node
  let token = Token.load(
    `${event.address.toHexString()}-${event.params.tokenId.toString()}`
  );
  if (!token) {
    token = new Token(
      `${event.address.toHexString()}-${event.params.tokenId.toString()}`
    );
    token.tokenId = event.params.tokenId;
    const tokenContract = MetaDataContract.bind(event.address);
    const tokenURI = tokenContract.try_tokenURI(event.params.tokenId);
    token.tokenURI = tokenURI.reverted ? "" : tokenURI.value;

    if (token.tokenURI !== "" && token.tokenURI.includes("ipfs://")) {
      let metadata = ipfs.cat(token.tokenURI.replace("ipfs://", "/"));
      if (metadata) {
        const value = json.fromBytes(metadata).toObject();
        if (value) {
          const image = value.get("image");
          if (image) {
            token.imageURI = image.toString();
          }
        }
      }
    }
  }
  token.owner = owner.id;
  token.collection = collection.id;
  token.save();
}
