const envPublicUrl =
  process.env.PUBLIC_URL && process.env.PUBLIC_URL !== '/' ? process.env.PUBLIC_URL : '';

export default {
  contextPath: envPublicUrl ? envPublicUrl : '/',
  url: (subUrl: string) => `${envPublicUrl}${subUrl}`,
  servers: {
    gateway: {
      enabled: true,
      url: '/eco-gateway',
    },
  },
};
