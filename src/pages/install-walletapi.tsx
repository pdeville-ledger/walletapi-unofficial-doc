const InstallWalletApi = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col gap-12 px-4 py-16">
        <h1 className="text-center text-3xl">Install wallet api</h1>
        <div>Install ledger wallet api to communicate with ledger live</div>
        <div className="mx-auto select-all rounded-lg bg-white/10 p-3">
          {" "}
          npm i @ledgerhq/wallet-api-client @ledgerhq/hw-transport
        </div>
        <div className="mt-5 text-sm text-neutral-70">
          In this repository because I like it I use react query to fetch data
          <br /> use it if you want
        </div>
        <h2 className="text-2xl">Connect wallet api</h2>
        <code> transport = new WindowMessageTransport();</code>
        <code> transport.connect();</code>
        <code> const sdk = new WalletAPIClient(transport);</code>
      </div>
    </div>
  );
};

export default InstallWalletApi;
