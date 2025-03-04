export default {
  define: {
    BASE_API_URL: "/api",
    "process.env.SHOW_TEST_NETWORK": true,
  },
  proxy: {
    "/api": {
      // target: "http://47.243.86.140:40071/api",
      target: "https://api.crypato.com/api",
      pathRewrite: { "^/api": "" },
      secure: false,
    },
  },
};
