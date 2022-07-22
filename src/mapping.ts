import { Transfer as TransferEvent } from "../generated/IERC721/IERC721";
import { IERC721Metadata as MetaDataContract } from "../generated/IERC721/IERC721Metadata";
import { Account, Token } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  // Add user from existing graph-node
  let owner = Account.load(event.params.to.toHexString());
  if (!owner) {
    owner = new Account(event.params.to.toHexString());
    owner.save();
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
  }
  token.owner = owner.id
  token.save();
}
