import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider, createConfig, http } from "wagmi";
import {
  polygon,
  polygonAmoy,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

export const APP_NAME = "Website";
export const PROJECT_ID = "da06c4afa84d098dc0d1f3830700991d";

const prodChain = [ polygon];
const testChain = [polygonAmoy];

const config = getDefaultConfig({
  appName: APP_NAME,
  projectId: PROJECT_ID,
  chains: process.env.SHOW_TEST_NETWORK
    ? [ ...testChain]
    : [...prodChain],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

interface Props {
  children: any;
}


export default function RainbowKit(props: Props) {
  const { children } = props;
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          locale="en-US"
          theme={darkTheme({
            accentColor: "#7b3fe4",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
