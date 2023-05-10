import { useQuery } from "@tanstack/react-query";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import FetchAccount from "~/components/fetchAccount";
import useWalletApi from "~/services/useWalletApi";

interface StepProps {
  title: string;
  subtitle: string;
  link: string;
}
const Step = ({ link, subtitle, title }: StepProps) => (
  <Link
    className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
    href={link}
  >
    <h3 className="text-2xl font-bold">{title}</h3>
    <div className="text-lg">{subtitle}</div>
  </Link>
);

const Home: NextPage = () => {
  const { walletApiSdk } = useWalletApi();

  const { data: infoWalletApi } = useQuery({
    queryKey: ["info"],
    queryFn: () => walletApiSdk?.wallet.info(),
    enabled: !!walletApiSdk,
  });

  return (
    <>
      <Head>
        <title>Ledger Unoficial doc</title>
        <meta name="description" content="Generated by pierre-alexis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black text-white">
        <div className="container mx-auto flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Wallet Api{" "}
            <span className="text-[hsl(280,100%,70%)]">Unofficial</span> Doc
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Step
              link="/load-manifest"
              title="First Step →"
              subtitle="Load a manifest to see the app"
            />
            <Step
              link="install-walletapi"
              title="Install Wallet Api"
              subtitle="Install wallet Api"
            />
          </div>
        </div>
        <div className="container mx-auto mb-7 text-center">
          Clone me if you want to have the code
          <div>
            <Link
              className="text-orange-400"
              href="https://github.com/pdeville-ledger/walletapi-unofficial-docs"
              target="_blank"
            >
              https://github.com/pdeville-ledger/walletapi-unofficial-docs
            </Link>
          </div>
        </div>
        <div className="container mx-auto flex flex-col gap-4 pb-12">
          {!infoWalletApi ? (
            <div className="flex items-center justify-center gap-2">
              It look like you are not in ledger live
              <div className="h-4 w-4 rounded-full bg-error-60"></div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2">
                Connected to ledger Live
                <div className="h-4 w-4 rounded-full bg-sucess-60"></div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div>{infoWalletApi.wallet.name}</div>
                <div>{infoWalletApi.wallet.version}</div>
              </div>
            </>
          )}
          <FetchAccount inLedgerLive={!!infoWalletApi} />
        </div>
      </main>
    </>
  );
};

export default Home;
