import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TestTsSdk } from "../target/types/test_ts_sdk";
import { ClockworkProvider } from "@clockwork-xyz/sdk";

describe("test-ts-sdk", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.TestTsSdk as Program<TestTsSdk>;
  const clockworkProvider = new ClockworkProvider(provider.wallet, provider.connection);

  it("Is initialized!", async () => {
    const [thread] = clockworkProvider.getThreadPDA(provider.wallet.publicKey, "foo");
  });
});
