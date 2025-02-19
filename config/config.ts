import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  plugins: ["@umijs/plugins/dist/antd", "@umijs/plugins/dist/dva"],
  antd: {},
  dva: {},
  theme: {
    "@primary-theme-color": "#000",
    "@primary-font-color": "#fff",
    "@primary-screen-width": "1240rem",
    "@primary-active-color": "#18F195",
    "@primary-header-height": "100rem",
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
