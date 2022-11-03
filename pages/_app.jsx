import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChainId, walletConnectors } from "@thirdweb-dev/react";
import Script from "next/script";
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  const connectors = [
    " metamask",
    "walletconnect",
    "walletLink",
    {
      name: "magic",
      options: {
        apiKey: "pk_live_5AFB98FAEA90DB6A",
      },
    },
  ];

  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      walletConnectors={connectors}
      authConfig={{
        domain: "http://localhost:3000",
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Script src="https://cdn.tailwindcss.com"> </Script>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
