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
              <div className={styles.tit}>ウォレットを接続</div>
              <div className={styles.intro}>ウォレット接続には、対応するウォレットアプリのインストールが必要です。詳しくはこちら</div>
              <div className={styles.line}></div>
              <div className={styles.tit1}>◆ アプリ内ブラウザからアクセスしている方
              ウォレットを接続</div>
              <div className={styles.button}>ウォレットを接続</div>
              <div className={styles.line}></div>
              <div className={styles.tit1}>◆ PCからアクセスしている方</div>
              <div className={styles.intro}>お手持ちのスマートフォンのカメラで、以下の2次元のバーコードを読み込み、αU Walletと連携してください。</div>
              <div className={styles.imgShow}></div>
              <div className={styles.line}></div>
             <div className={styles.item3}>
             <div className={styles.tit1}>◆ ChromeやSafariなどブラウザからアクセスしている方</div>
              <div className={styles.intro}>アプリをインストール済みの方</div>
              <div className={styles.button}>アプリを開いて連携する</div>
              <div className={styles.intro1}>一部のブラウザやアプリではデジタルウォレットアプリを利用できない場合があります。連携処理を続けるには、端末の標準ブラウザを利用してください。
              </div>
             </div>

            </div>
        </section>
    );
};
export default Show;
