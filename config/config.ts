import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  plugins: ["@umijs/plugins/dist/antd", "@umijs/plugins/dist/dva"],
  antd: {},
  dva: {},
  theme: {
    "@primary-theme-color": "#fff",
    "@primary-font-color": "#fff",
    "@primary-screen-width": "77vw",
    "@primary-screen-width-mobile": "100%",
    "@primary-screen-height": "77.8vh",
    "@primary-screen-height-mobile": "100vh",
    "@primary-active-color": "#18F195",
    "@primary-header-height": "100px",
  },
  //分享链接显示title
  title: "",
  metas: [
    //seo 关键词
    {
      name: "keywords",
      content:
        "",
    },
    //描述信息配置
    {
      name: "description",
      content:
        "",
    },
  ],
  jsMinifier: "terser",
  cssMinifier: "cssnano",
  npmClient: "npm",
  codeSplitting: { jsStrategy: "granularChunks" },
});
