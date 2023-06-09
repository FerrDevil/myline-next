/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
                loader: "@svgr/webpack",
                options: { icon: true },
          },
        ],
      });
      config.module.rules.push({
        test: /\.pdf$/i,
        type: 'asset/source',
        use: [
          {
            loader: 'file-loader',
          },
        ],
      })
      return config;
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/ru',
          permanent: false,
          has: [
            {
              type: 'cookie',
              key: 'MYLINE-LOCALE-COOKIE',
              value: "ru"
            },
          ],
        },
        {
          source: '/',
          destination: '/en',
          permanent: false,
          has: [
            {
              type: 'cookie',
              key: 'MYLINE-LOCALE-COOKIE',
              value: "en"
            },
          ],
        },
      ];
    },

    
    compiler: {
      styledComponents: true,
    },
};

module.exports = nextConfig;