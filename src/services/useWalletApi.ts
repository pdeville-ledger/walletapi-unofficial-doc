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

  return {
    walletApiSdk,
  };
};

export default useWalletApi;
