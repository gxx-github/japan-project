import styles from "./index.less";
import { useContext, useEffect } from "react";
import font from '../../assets/img/Home/emptyFont.png';
import font1 from '../../assets/img/Home/font1.png';
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { InfoContext } from "../InfoProvider";


type Props = {
    type: number;
}

export default function EmptyDom(props: Props) {
    const {
        type
    } = props;
  const { setcurChooise }: any = useContext(InfoContext);

    return (
        <div
            className={classnames(
                !judgeIsMobile() ? styles.emptyDom : styles.mobileemptyDom
            )}
        >
            {
                type === 0 && <>
                    <div className={styles.text}>現在申し込み受付予定のプロジェクトはありません
                        αU marketからのお知らせをお待ちください</div>
                    <div className={styles.button} onClick={()=>{
                        window.open('https://market.alpha-u.io/')
                    }}>αU marketをみる</div>
                </>
            }
            {
                type === 1 && <>
                    <div className={styles.text}>現在申し込み受付が可能なプロジェクトはありません
                    </div>
                    <div className={styles.button1} onClick={()=>{
                        setcurChooise(0)
                    }}>
                        <img src={font} alt="" />
                    </div></>
            }
            {
                type === 2 && <>
                    <div className={styles.text}>申し込みが終了したプロジェクトはありません</div>
                    <div className={styles.button1} onClick={()=>{
                        setcurChooise(1)
                    }}>
                        <img src={font1} alt="" />
                    </div>
                </>
            }
        </div>
    );
}
