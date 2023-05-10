import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useWalletApi from "~/services/useWalletApi";

interface FetchAccountProps {
  inLedgerLive: boolean;
}
const FetchAccount = ({ inLedgerLive }: FetchAccountProps) => {
  const { walletApiSdk } = useWalletApi();

  const [currencyIds, setCurrencyId] = useState(["bitcoin"]);
  const availableCurrencys = [
    ["bitcoin"],
    ["ethereum"],
    ["bitcoin", "ethereum"],
  ];

  const { data, refetch } = useQuery({
    queryKey: ["account", ...currencyIds],
    queryFn: async () => {
      const accountList = await walletApiSdk?.account?.list({
        currencyIds,
      });

      if (!accountList) throw new Error("Error Happen");

      // you can fetch other stuff here like nft or Idk what you want

      console.log("accountList", accountList);
      return accountList;
    },
    enabled: !!walletApiSdk,
  });

  return (
    <div className="rounded-lg bg-white/5 p-3">
      <div className="text-2xl">Fetch accounts</div>
      <div> Allow you to fetch an array of account by currency Id</div>
      <div className="my-2 w-fit rounded-lg bg-white/5 px-2 py-1">
        manifest permission : account.list
      </div>
      <div className="mb-4 text-sm text-neutral-70">
        {" "}
        note that you have to declare all currency you want to call in the
        currencies section of the manifest
      </div>
      <code className="rounded-lg bg-white/10 px-2 py-1">
        {`
        const accountList = await walletApiSdk?.account?.list({
          currencyIds,
        })`}
      </code>
      <div className="mt-3">accountList is of type Account[]</div>
      {inLedgerLive && (
        <div className="mt-6 flex gap-2">
          {availableCurrencys.map((availableCurrency) => (
            <div
              key={availableCurrency.toString()}
              className="cursor-pointer rounded-lg bg-white/10 px-3 py-2"
              onClick={() => {
                setCurrencyId(availableCurrency);
                refetch({ queryKey: ["account", ...currencyIds] }).catch(
                  console.log
                );
              }}
            >
              <div className="flex gap-2">
                {availableCurrency.map((c) => (
                  <div key={c}>{c}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-3 flex flex-col">
        {data?.map((account) => (
          <div key={account.address}>
            <div>{account.name}</div>
            <div className="text-neutral-70">{account.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchAccount;
