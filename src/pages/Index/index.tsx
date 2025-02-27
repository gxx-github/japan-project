import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { history } from "umi";
import logo from '../../assets/img/Home/logo.svg'


const Index = () => {
    return (
        <section
            className={classnames(
                styles.mainContent,
                !judgeIsMobile() ? "" : styles.mobile
            )}
            onClick={()=>{
                history.push('/list')
            }}
        >
            <img src={logo} alt="" />
        </section>
    );
};
export default Index;
