import styles from "./index.less";
import { useEffect } from "react";

type Props = {
    type: number;
}

export default function EmptyDom(props: Props) {
    const {
        type
    } = props;

    return (
        <div
            className={styles.emptyDom}
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
            <div className={styles.text}>現在申し込み受付予定のプロジェクトはありません
            αU marketからのお知らせをお待ちください</div>
            <div className={styles.button1}>αU marketをみる</div></>
           }
           {
            type === 2 && <>
            <div className={styles.text1}>現在申し込み受付が可能なプロジェクトはありません</div>
            <div className={styles.button1}>申し込み受付予定のプロジェクトを見る</div>
            </>
           }
        </div>
    );
}
