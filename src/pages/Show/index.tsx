import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";



const Show = () => {
    const { address: account } = useAccount();


   

    return (
        <section
            className={classnames(
                styles.mainContent,
                !judgeIsMobile() ? "" : styles.mobile
            )}
        >
            <div className={styles.commonSection}>
               {account}

            </div>
        </section>
    );
};
export default Show;
