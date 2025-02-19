import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider, createConfig, http } from "wagmi";
import {
  mainnet,
  sepolia,
  baseSepolia,
  arbitrum,
  bsc,
  polygon,
  bscTestnet,
  polygonAmoy,
  arbitrumSepolia
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();

export const APP_NAME = "Tusima-Website";
export const PROJECT_ID = "da06c4afa84d098dc0d1f3830700991d";

const prodChain = [mainnet, arbitrum, bsc, polygon];
const testChain = [sepolia, baseSepolia,bscTestnet,polygonAmoy,arbitrumSepolia];

const config = getDefaultConfig({
  appName: APP_NAME,
  projectId: PROJECT_ID,
  chains: process.env.SHOW_TEST_NETWORK
    ? [...prodChain, ...testChain]
    : [...prodChain],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

interface Props {
  children: any;
}
export const config1 = createConfig({
  chains: [mainnet, sepolia, baseSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [baseSepolia.id]: http(),
  },
});

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
