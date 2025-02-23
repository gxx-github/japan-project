import styles from "./index.less";
import { useEffect } from "react";
import font from '../../assets/img/Home/font.png';
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";

type Props = {
    type: number;
}

export default function EmptyDom(props: Props) {
    const {
        type
    } = props;

    return (
        <div
            className={classnames(
                !judgeIsMobile() ?  styles.emptyDom : styles.mobileemptyDom
              )}
        >
           {
            type === 0 && <>
            <div className={styles.text}>現在申し込み受付予定のプロジェクトはありません
            αU marketからのお知らせをお待ちください</div>
            <div className={styles.button}>αU marketをみる</div>
            </>
           }
           {
            type === 1 && <>
            <div className={styles.text}>現在申し込み受付が可能なプロジェクトはありません
           </div>
            <div className={styles.button1}>
                <img src={font} alt="" />
                </div></>
           }
           {
            type === 2 && <>
            <div className={styles.text}>申し込みが終了したプロジェクトはありません</div>
            <div className={styles.button1}>
            <img src={font} alt="" />
            </div>
            </>
           }
        </div>
    );
}
