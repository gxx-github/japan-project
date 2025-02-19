import { history } from "umi";

export function onRouteChange({}) {
  //监听路由切换，每次回到顶部
  history.listen(({}) => {
    window.scrollTo(0, 0);
  });
}
