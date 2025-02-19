import { Outlet } from "umi";
import RainbowKit from "@/components/RainbowKit";
const CoreModule = (children: any) => {
  return    <RainbowKit>
  <>{children}</>
</RainbowKit>
};

function Layout() {
  return (
    <>
      {CoreModule(<Outlet />)}
    </>
  );
}

export default Layout;
