import {
  WalletAPIClient,
  WindowMessageTransport,
} from "@ledgerhq/wallet-api-client";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let transport: any;

if (typeof window === "undefined") {
  transport = {
    onMessage: undefined,
    send: () => null,
  };
} else {
  transport = new WindowMessageTransport();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  transport.connect();
}

const fetchAddressByCurrencyId = async (
  walletApiSdk: WalletAPIClient | undefined | null,
  currencyId: string
) => {
  const userAddress = await walletApiSdk?.account?.list({
    currencyIds: [currencyId],
  });

  if (!userAddress) throw new Error("Error Happen");

  if (userAddress.length > 0) return userAddress[0];

  if (userAddress.length === 0) {
    const requestUserAddress = await walletApiSdk?.account.request({
      currencyIds: [currencyId],
    });
    if (!requestUserAddress) throw new Error("Error Happen");
    return requestUserAddress;
  }
  return userAddress[0];
};

const useWalletApi = () => {
  const { data: walletApiSdk } = useQuery({
    queryKey: ["setUpSdk"],
    queryFn: () => {
      if (walletApiSdk) return null;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const sdk = new WalletAPIClient(transport);
      return sdk;
    },
    staleTime: Infinity,
  });

  //   const btcAddressQuery = useQuery({
  //     queryKey: [USER_BTC_ADDRESS_QUERY_KEY],
  //     queryFn: () => fetchAddressByCurrencyId(walletApiSdk, "bitcoin"),
  //     enabled: false && !walletApiSdk,
  //   });

  return {
    walletApiSdk,
  };
};

export default useWalletApi;
