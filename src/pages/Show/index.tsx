import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import show from '../../assets/img/Home/show.png'
import show1 from '../../assets/img/Home/show1.png'
import show2 from '../../assets/img/Home/show2.png'


const Show = () => {
    const { address: account } = useAccount();




    return (
        <section
            className={classnames(
                
                !judgeIsMobile() ? styles.mainContent : styles.mobile
            )}
        >
            <div className={styles.commonSection}>
                <div className={styles.tit}>ウォレットを接続</div>
                <div className={styles.intro}>ウォレット接続には、対応するウォレットアプリのインストールが必要です。詳しくはこちら</div>
                <div className={styles.line}></div>
                <div className={styles.tit1}>◆ アプリ内ブラウザからアクセスしている方
                    ウォレットを接続</div>
                <div className={styles.button}>ウォレットを接続</div>
                <div className={styles.line}></div>
                <div className={styles.tit1}>◆ PCからアクセスしている方</div>
                <div className={styles.intro}>お手持ちのスマートフォンのカメラで、以下の2次元のバーコードを読み込み、αU Walletと連携してください。</div>
                <div className={styles.imgShow}>
                    <img src={show} alt="" />
                </div>
                <div className={styles.line}></div>
                <div className={styles.item3}>
                    <div className={styles.tit1}>◆ ChromeやSafariなどブラウザからアクセスしている方</div>
                    <div className={styles.intro}>アプリをインストール済みの方</div>
                    <div className={styles.button}>アプリを開いて連携する</div>
                    <div className={styles.intro1}>一部のブラウザやアプリではデジタルウォレットアプリを利用できない場合があります。連携処理を続けるには、端末の標準ブラウザを利用してください。
                    </div>
                    <div className={styles.item3Con}>
                    <div className={styles.intro}>アプリを未インストールの方</div>
                    <div className={styles.showImg}>
                    <img src={show2} alt="" className={styles.show2} />
                    <img src={show1} alt="" className={styles.show1} />

                    </div>
                    <div className={styles.intro1}>αU Walletアプリをインストールしてください。
                    </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default Show;
