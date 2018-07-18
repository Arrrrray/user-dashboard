export default {

  /**
   * 配置 webpack-dev-server 的 proxy 属性。
   */
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api": "" }
    }
  },
}