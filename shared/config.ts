import devConfig from './config.dev';
import prodConfig from './config.prod';

interface Config {
  contextPath: string;
  url: (subUrl: string) => string;
  servers: {
    gateway: {
      enabled: boolean;
      url: string;
    };
  };
}
const config: Config = process.env.NODE_ENV === 'production' ? { ...prodConfig } : { ...devConfig };
export default config;
