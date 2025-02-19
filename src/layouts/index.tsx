import { Outlet } from "umi";
import styles from "./index.less";
import RainbowKit from "@/components/RainbowKit";
import { useLocation } from "umi";
import CommonLayout from "./components/CommonLayout";

const CoreModule = (children: any) => {

  return    <RainbowKit>
  <CommonLayout>{children}</CommonLayout>
</RainbowKit>
};

function Layout() {
  const location = useLocation();
  return (
    <>
      {CoreModule(<Outlet />)}
   
    </>
  );
}

export default Layout;
