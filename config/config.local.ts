export default {
  define: {
    BASE_API_URL: "/api",
    "process.env.SHOW_TEST_NETWORK": true,
  },
  proxy: {
    "/api": {
      // target: "http://101.251.211.205:8055/",
      target: "http://43.155.152.249:8055/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
      secure: false,
    },
  },
};
