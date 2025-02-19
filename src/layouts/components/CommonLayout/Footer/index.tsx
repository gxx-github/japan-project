import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "../../../../utils/index";


export default function Footer() {

  return (
    <div
      className={classnames(
        styles.Footer,
        judgeIsMobile() ? styles.isMobile : ""
      )}
    >
      <div className={styles.footerContent}>
       
      </div>
    </div>
  );
}
