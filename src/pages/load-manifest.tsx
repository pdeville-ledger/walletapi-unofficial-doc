import Link from "next/link";

const LoadManifest = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto flex flex-col gap-12 px-4 py-16">
        <h1 className="text-center text-3xl">Load manifet to see your app</h1>
        <div>
          Access ledger dev mode to see be able to see developer mode{" "}
          <Link
            className="text-orange-400"
            href="https://developers.ledger.com/docs/live-app/developer-mode/"
            target="_blank"
          >
            https://developers.ledger.com/docs/live-app/developer-mode/
          </Link>
        </div>
        <div>
          Load a manifest.json file to be able to see what you want{" "}
          <Link
            className="text-orange-400"
            href="https://developers.ledger.com/docs/live-app/developer-mode/"
            target="_blank"
          >
            https://developers.ledger.com/docs/dapp/manifest/
          </Link>
          <div className="text-neutral-70">
            {" "}
            You can also use the one from this repository awailable in the
            manifest folder
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadManifest;
