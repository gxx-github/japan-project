import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import styles from "./index.less";

const ConnectWalletButton = ({ children }: { children: any }) => {
  const { openConnectModal } = useConnectModal();

  return (
    <div onClick={openConnectModal} className={styles.connectBox}>
      {children}
    </div>
  );
};

const DisConnectWalletButton = ({ account }: { account: string }) => {
  const { disconnect } = useDisconnect();

  const accountEllipsis = account
    ? `${account.substring(0, 5)}...${account.substring(account.length - 6)}`
    : null;
  return (
    <div className={styles.accountBox}>
      <div className={styles.disconnectBox}>{accountEllipsis}</div>
      <div className={styles.disconnectDrown}>
        <div className={styles.drownQuitImg}></div>
        <div className={styles.drownQuitText} onClick={() => disconnect()}>
          Disconnect
        </div>
      </div>
    </div>
  );
};

export default function WalletConnect() {
  const { address: account } = useAccount();

  if (account) {
    return <DisConnectWalletButton account={account} />;
  }

  return <ConnectWalletButton>Connect Wallet</ConnectWalletButton>;
}
