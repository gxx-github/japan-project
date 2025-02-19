import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";



const Claim = () => {
    const { address: account } = useAccount();




    return (
        <section
            className={classnames(
                styles.mainContent,
                !judgeIsMobile() ? "" : styles.mobile
            )}
        >
            <div className={styles.commonSection}>
                <div className={styles.innerTop}></div>
                <div className={styles.content}>
                    <div className={styles.showText}>エアドロップ対象</div>
                    <div className={styles.showText1}><span>保有NFT数</span><br/>
                        5個</div>
                    <div className={styles.showItem}>
                        <div className={styles.label}>エアドロップ
                        受け取りアドレス</div>
                        <div className={styles.inner}></div>
                    </div>
                    <div className={styles.showItem}>
                        <div className={styles.label}>チェーン</div>
                        <div className={styles.inner}></div>
                    </div>
                    <div className={styles.claimButton} onClick={() => console.log(account)}>申し込み</div>
                </div>
            </div>
        </section>
    );
};
export default Claim;
