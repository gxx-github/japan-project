import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";



const HomePage = () => {
 
  return (
    <section
      className={classnames(
        styles.mainContent,
        !judgeIsMobile() ? "" : styles.mobile
      )}
    >
        <div className={styles.commonSection}>
         <h1>test</h1>
       
        </div>
    </section>
  );
};
export default HomePage;
