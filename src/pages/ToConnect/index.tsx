import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { history } from "umi";
import textImg from '../../assets/img/Home/text.png'
import img1 from '../../assets/img/Home/img1.png'
import img2 from '../../assets/img/Home/img2.png'


const ToConnect = () => {
    const { openConnectModal } = useConnectModal();
    const { address: account } = useAccount();


    const judgeIsWallect = () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            openConnectModal && openConnectModal()
        } 
        // else {
        //     console.log('MetaMask is not installed.');
        //     history.push('/toShow')
        // }
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
                <div className={styles.back} onClick={() => {
                    history.push('/list')
                }} >
                    {'<'} 戻る
                </div>
                <div className={styles.addDom} >
                    <div className={styles.text1} >アプリを未インストールの方</div>
                    <div className={styles.jumpButtonCon} >
                        <img src={img1} alt="" className={styles.img1} onClick={()=>{
                            window.open('https://apps.apple.com/jp/app/%CE%B1u-wallet/id6444401106')
                        }} />
                        <img src={img2} alt="" className={styles.img2} onClick={()=>{
                            window.open('https://play.google.com/store/apps/details?id=com.kddi.wallet')
                        }} />
                    </div>
                    <div className={styles.text2} >αU Walletアプリをインストールしてください。</div>
                </div>

            </div>
        </section>
    );
};
export default ToConnect;
