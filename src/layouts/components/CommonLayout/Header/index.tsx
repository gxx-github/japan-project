import styles from "./index.less";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { history } from "umi";
import WalletConnect from "@/components/WalletConnect";

export default function Header() {
  return (
    <div className={styles.galaxyHeader}>
      <div className={styles.headerContent}>
        <div className={styles.logo} onClick={() => history.push("/")}>
         LOGO
        </div>
        <div className={styles.action}>
          <div className={styles.actionMenu}>
            
          </div>
          <div className={styles.actionConnect}>
            <WalletConnect />
          </div>
        </div>
      </div>
    </div>
  );
}
