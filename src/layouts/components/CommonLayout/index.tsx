import styles from "./index.less";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: any;
}
export default function GalaxyLayout(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div className={styles.galaxyContent}>{children}</div>
      <Footer />
    </>
  );
}
