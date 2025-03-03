import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { history } from "umi";
import textImg from '../../assets/img/Home/text.png'


const ToConnect = () => {
    const { openConnectModal } = useConnectModal();
    const { address: account } = useAccount();


    const judgeIsWallect = () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            openConnectModal && openConnectModal()
        } else {
            console.log('MetaMask is not installed.');
            history.push('/toShow')
        }
    }
    useEffect(() => {
        if (account && window.ethereum) {
            history.push('/toClaim')
        }

        return () => {

        }
    }, [account])

    return (
        <section
            className={classnames(
                
                !judgeIsMobile() ? styles.mainContent : styles.mobile
            )}
        >
            <div className={styles.connectDom}>
                <div className={styles.text} >
                    <img src={textImg} alt="" />
                </div>
                <div className={styles.jumpButton} onClick={judgeIsWallect}>
                    WALLET CONNECT<br />
                    <div>ウォレットを接続</div>
                </div>
                <div className={styles.back} onClick={()=>{
                    history.push('/list')
                }} >
                {'<'} 戻る
                </div>

            </div>
        </section>
    );
};
export default ToConnect;
