// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class ConsecutiveTransfer extends ethereum.Event {
  get params(): ConsecutiveTransfer__Params {
    return new ConsecutiveTransfer__Params(this);
  }
}

export class ConsecutiveTransfer__Params {
  _event: ConsecutiveTransfer;

  constructor(event: ConsecutiveTransfer) {
    this._event = event;
  }

  get fromTokenId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get toTokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Minted extends ethereum.Event {
  get params(): Minted__Params {
    return new Minted__Params(this);
  }
}

export class Minted__Params {
  _event: Minted;

  constructor(event: Minted) {
    this._event = event;
  }

  get receiver(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get quantity(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SaleStateChanged extends ethereum.Event {
  get params(): SaleStateChanged__Params {
    return new SaleStateChanged__Params(this);
  }
}

export class SaleStateChanged__Params {
  _event: SaleStateChanged;

  constructor(event: SaleStateChanged) {
    this._event = event;
  }

  get saleState(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class IsekaiMeta extends ethereum.SmartContract {
  static bind(address: Address): IsekaiMeta {
    return new IsekaiMeta("IsekaiMeta", address);
  }

  RESERVED_TOKENS(): BigInt {
    let result = super.call(
      "RESERVED_TOKENS",
      "RESERVED_TOKENS():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_RESERVED_TOKENS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "RESERVED_TOKENS",
      "RESERVED_TOKENS():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  WALLET_LIMIT(): BigInt {
    let result = super.call("WALLET_LIMIT", "WALLET_LIMIT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_WALLET_LIMIT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("WALLET_LIMIT", "WALLET_LIMIT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  numberMinted(account: Address): BigInt {
    let result = super.call("numberMinted", "numberMinted(address):(uint256)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_numberMinted(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numberMinted",
      "numberMinted(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  publicCost(): BigInt {
    let result = super.call("publicCost", "publicCost():(uint256)", []);

    return result[0].toBigInt();
  }

  try_publicCost(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("publicCost", "publicCost():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  raffleSupply(): BigInt {
    let result = super.call("raffleSupply", "raffleSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_raffleSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("raffleSupply", "raffleSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  saleState(): i32 {
    let result = super.call("saleState", "saleState():(uint8)", []);

    return result[0].toI32();
  }

  try_saleState(): ethereum.CallResult<i32> {
    let result = super.tryCall("saleState", "saleState():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  signer(): Address {
    let result = super.call("signer", "signer():(address)", []);

    return result[0].toAddress();
  }

  try_signer(): ethereum.CallResult<Address> {
    let result = super.tryCall("signer", "signer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  summonClaimed(account: Address): boolean {
    let result = super.call("summonClaimed", "summonClaimed(address):(bool)", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_summonClaimed(account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "summonClaimed",
      "summonClaimed(address):(bool)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  summonCost(): BigInt {
    let result = super.call("summonCost", "summonCost():(uint256)", []);

    return result[0].toBigInt();
  }

  try_summonCost(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("summonCost", "summonCost():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  teamClaim(param0: Address): BigInt {
    let result = super.call("teamClaim", "teamClaim(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_teamClaim(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("teamClaim", "teamClaim(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ChangePublicPriceCall extends ethereum.Call {
  get inputs(): ChangePublicPriceCall__Inputs {
    return new ChangePublicPriceCall__Inputs(this);
  }

  get outputs(): ChangePublicPriceCall__Outputs {
    return new ChangePublicPriceCall__Outputs(this);
  }
}

export class ChangePublicPriceCall__Inputs {
  _call: ChangePublicPriceCall;

  constructor(call: ChangePublicPriceCall) {
    this._call = call;
  }

  get newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangePublicPriceCall__Outputs {
  _call: ChangePublicPriceCall;

  constructor(call: ChangePublicPriceCall) {
    this._call = call;
  }
}

export class ChangeSummonPriceCall extends ethereum.Call {
  get inputs(): ChangeSummonPriceCall__Inputs {
    return new ChangeSummonPriceCall__Inputs(this);
  }

  get outputs(): ChangeSummonPriceCall__Outputs {
    return new ChangeSummonPriceCall__Outputs(this);
  }
}

export class ChangeSummonPriceCall__Inputs {
  _call: ChangeSummonPriceCall;

  constructor(call: ChangeSummonPriceCall) {
    this._call = call;
  }

  get newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeSummonPriceCall__Outputs {
  _call: ChangeSummonPriceCall;

  constructor(call: ChangeSummonPriceCall) {
    this._call = call;
  }
}

export class OwnerMintCall extends ethereum.Call {
  get inputs(): OwnerMintCall__Inputs {
    return new OwnerMintCall__Inputs(this);
  }

  get outputs(): OwnerMintCall__Outputs {
    return new OwnerMintCall__Outputs(this);
  }
}

export class OwnerMintCall__Inputs {
  _call: OwnerMintCall;

  constructor(call: OwnerMintCall) {
    this._call = call;
  }

  get receiver(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class OwnerMintCall__Outputs {
  _call: OwnerMintCall;

  constructor(call: OwnerMintCall) {
    this._call = call;
  }
}

export class PublicMintCall extends ethereum.Call {
  get inputs(): PublicMintCall__Inputs {
    return new PublicMintCall__Inputs(this);
  }

  get outputs(): PublicMintCall__Outputs {
    return new PublicMintCall__Outputs(this);
  }
}

export class PublicMintCall__Inputs {
  _call: PublicMintCall;

  constructor(call: PublicMintCall) {
    this._call = call;
  }

  get quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class PublicMintCall__Outputs {
  _call: PublicMintCall;

  constructor(call: PublicMintCall) {
    this._call = call;
  }
}

export class RaffleMintCall extends ethereum.Call {
  get inputs(): RaffleMintCall__Inputs {
    return new RaffleMintCall__Inputs(this);
  }

  get outputs(): RaffleMintCall__Outputs {
    return new RaffleMintCall__Outputs(this);
  }
}

export class RaffleMintCall__Inputs {
  _call: RaffleMintCall;

  constructor(call: RaffleMintCall) {
    this._call = call;
  }

  get quantity(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get signature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class RaffleMintCall__Outputs {
  _call: RaffleMintCall;

  constructor(call: RaffleMintCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get baseURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class SetMaxSupplyCall extends ethereum.Call {
  get inputs(): SetMaxSupplyCall__Inputs {
    return new SetMaxSupplyCall__Inputs(this);
  }

  get outputs(): SetMaxSupplyCall__Outputs {
    return new SetMaxSupplyCall__Outputs(this);
  }
}

export class SetMaxSupplyCall__Inputs {
  _call: SetMaxSupplyCall;

  constructor(call: SetMaxSupplyCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxSupplyCall__Outputs {
  _call: SetMaxSupplyCall;

  constructor(call: SetMaxSupplyCall) {
    this._call = call;
  }
}

export class SetRaffleSupplyCall extends ethereum.Call {
  get inputs(): SetRaffleSupplyCall__Inputs {
    return new SetRaffleSupplyCall__Inputs(this);
  }

  get outputs(): SetRaffleSupplyCall__Outputs {
    return new SetRaffleSupplyCall__Outputs(this);
  }
}

export class SetRaffleSupplyCall__Inputs {
  _call: SetRaffleSupplyCall;

  constructor(call: SetRaffleSupplyCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRaffleSupplyCall__Outputs {
  _call: SetRaffleSupplyCall;

  constructor(call: SetRaffleSupplyCall) {
    this._call = call;
  }
}

export class SetSaleStateCall extends ethereum.Call {
  get inputs(): SetSaleStateCall__Inputs {
    return new SetSaleStateCall__Inputs(this);
  }

  get outputs(): SetSaleStateCall__Outputs {
    return new SetSaleStateCall__Outputs(this);
  }
}

export class SetSaleStateCall__Inputs {
  _call: SetSaleStateCall;

  constructor(call: SetSaleStateCall) {
    this._call = call;
  }

  get newSaleState(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSaleStateCall__Outputs {
  _call: SetSaleStateCall;

  constructor(call: SetSaleStateCall) {
    this._call = call;
  }
}

export class SetSignerCall extends ethereum.Call {
  get inputs(): SetSignerCall__Inputs {
    return new SetSignerCall__Inputs(this);
  }

  get outputs(): SetSignerCall__Outputs {
    return new SetSignerCall__Outputs(this);
  }
}

export class SetSignerCall__Inputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }

  get newSigner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSignerCall__Outputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }
}

export class SetTeamClaimCall extends ethereum.Call {
  get inputs(): SetTeamClaimCall__Inputs {
    return new SetTeamClaimCall__Inputs(this);
  }

  get outputs(): SetTeamClaimCall__Outputs {
    return new SetTeamClaimCall__Outputs(this);
  }
}

export class SetTeamClaimCall__Inputs {
  _call: SetTeamClaimCall;

  constructor(call: SetTeamClaimCall) {
    this._call = call;
  }

  get members(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get quantitys(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class SetTeamClaimCall__Outputs {
  _call: SetTeamClaimCall;

  constructor(call: SetTeamClaimCall) {
    this._call = call;
  }
}

export class SummonMintCall extends ethereum.Call {
  get inputs(): SummonMintCall__Inputs {
    return new SummonMintCall__Inputs(this);
  }

  get outputs(): SummonMintCall__Outputs {
    return new SummonMintCall__Outputs(this);
  }
}

export class SummonMintCall__Inputs {
  _call: SummonMintCall;

  constructor(call: SummonMintCall) {
    this._call = call;
  }

  get signature(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SummonMintCall__Outputs {
  _call: SummonMintCall;

  constructor(call: SummonMintCall) {
    this._call = call;
  }
}

export class TeamMintCall extends ethereum.Call {
  get inputs(): TeamMintCall__Inputs {
    return new TeamMintCall__Inputs(this);
  }

  get outputs(): TeamMintCall__Outputs {
    return new TeamMintCall__Outputs(this);
  }
}

export class TeamMintCall__Inputs {
  _call: TeamMintCall;

  constructor(call: TeamMintCall) {
    this._call = call;
  }
}

export class TeamMintCall__Outputs {
  _call: TeamMintCall;

  constructor(call: TeamMintCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
