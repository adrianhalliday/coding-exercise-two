import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // sassOptions: {
  //   includePaths: ['./src/css'],
  //   prependData: `@import "./src/css/variables.scss";`,
  // },
};

export default nextConfig;