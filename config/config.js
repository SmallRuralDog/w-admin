// ref: https://umijs.org/config/
import pageRoutes from './router.config';
import defaultSettings from '../src/defaultSettings';


const {
  pwa,
  primaryColor
} = defaultSettings;
const {
  NODE_ENV,
  APP_TYPE,
  TEST
} = process.env;
const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: true,
    dynamicImport: false,
    title: 'w-admin',
    dll: false,

    routes: {
      exclude: [
        /models\//,
        /services\//,
        /model\.(t|j)sx?$/,
        /service\.(t|j)sx?$/,
        /components\//,
      ],
    },
  }],
]

export default {
  plugins,
  define: {
    APP_TYPE: APP_TYPE || '',
  },
  treeShaking: true,
  targets: {
    ie: 11,
  },
  // 路由配置
  routes: pageRoutes,
  theme: {
    'primary-color': primaryColor,
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  manifest: {
    basePath: '/',
  },
}
