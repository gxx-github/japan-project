export default {
  define: {
    BASE_API_URL: "/aaa",
    "process.env.SHOW_TEST_NETWORK": true,
  },
  proxy: {
    "/aaa": {
      target: "http://47.243.86.140:40071/api",
      pathRewrite: { "^/aaa": "" },
      secure: false,
    },
  },
};
