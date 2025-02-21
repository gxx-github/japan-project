import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { fetchUserClaimInfo } from "@/api/home";



const Claim = () => {
    const { address: account } = useAccount();
    const [claimAmount, setclaimAmount] = useState(0)
    const quertUserNftInfo = () => {
        const Params = {
            nft_id: 0,
            address: account
        }
        fetchUserClaimInfo(Params)
            .then((res) => {
                const data = res.data;
                const { amount } = data;
                if (amount) {
                    setclaimAmount(amount)
                } else {
                    setclaimAmount(0)
                }

            })
            .catch(() => {
                setclaimAmount(0)
            });
    }


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
                    <div className={styles.showText1}><span>保有NFT数</span><br />
                        5個</div>
                    <div className={styles.showItem}>
                        <div className={styles.label}>エアドロップ
                            受け取りアドレス</div>
                        <div className={styles.inner}>
                            {
                                account
                                    ? `${account.substring(0, 7)}******${account.substring(account.length - 4)}`
                                    : '--'
                            }
                        </div>
                    </div>
                    <div className={styles.showItem}>
                        <div className={styles.label}>チェーン</div>
                        <div className={styles.inner1}>Polygon</div>
                    </div>
                    <div className={styles.claimButton} onClick={() => console.log(account)}>申し込み</div>
                </div>
            </div>
        </section>
    );
};
export default Claim;
