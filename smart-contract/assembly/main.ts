import { createEvent_Tier, NFTContract } from "./contract";
import { NFTContractMetadata, Token } from "./nft";

const contract = new NFTContract({
  spec: "nft-1.0.0",
  name: "EventsNEAR.us",
  symbol: "EVNS",
  icon: "",
  base_uri: "https://eventsnear.us/api/nft",
  reference: "",
  reference_hash: "",
});

// --- NEP-171

export function nft_transfer(
  receiverId: string,
  ticketId: string,
  approval_id: u32,
  memo: string | null
): void {
  contract.nft_transfer(receiverId, ticketId, approval_id, memo);
}

export function nft_transfer_call(
  receiver_id: string,
  token_id: string,
  approval_id: u32, // not used
  memo: string | null, // not used
  msg: string
): void {
  contract.nft_transfer_call(receiver_id, token_id, approval_id, memo, msg);
}

export function nft_token(token_id: string): Token | null {
  return contract.nft_token(token_id);
}

export function nft_resolve_transfer(
  owner_id: string,
  receiver_id: string,
  token_id: string,
  approved_account_ids: any
): boolean {
  return contract.nft_resolve_transfer(
    owner_id,
    receiver_id,
    token_id,
    approved_account_ids
  );
}

// --- NEP-177

export function nft_metadata(): NFTContractMetadata {
  return contract.nft_metadata();
}

// --- NEP-181
// TODO

// --- NEP-199
// TODO

// --- NEP-297
// TODO

// --- EventsNEAR.us APIs

export function createEvent(
  id: string,
  title: string,
  description: string,
  tickets: createEvent_Tier[]
): void {
  contract.createEvent(id, title, description, "", 0, "", tickets);
}

export function transfer(receiverId: string, ticketId: string): void {
  contract.nft_transfer(receiverId, ticketId, 0, "");
}

export function listForSale(ticketId: string): void {
  contract.listForSale(ticketId, 1);
}

export function unlistForSale(ticketId: string): void {
  contract.listForSale(ticketId, 0);
}

export function buy(ticketId: string): void {
  contract.buy(ticketId, 1);
}

export function scan(ticketId: string): void {
  contract.invalidate(ticketId);
}

export function unscan(ticketId: string): void {
  contract.reactivate(ticketId);
}

export function buyLotteryTicket(tierId: string): void {
  contract.buyLotteryTicket(tierId);
}

export function giveUpLottery(tierId: string): void {
  contract.giveUpLottery(tierId);
}
