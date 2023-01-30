import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TestTsSdk } from "../target/types/test_ts_sdk";
import {SEED_QUEUE } from "@clockwork-xyz/sdk";

describe("test-ts-sdk", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const program = anchor.workspace.TestTsSdk as Program<TestTsSdk>;

  it("Is initialized!", async () => {
    console.log(SEED_QUEUE);
    
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
