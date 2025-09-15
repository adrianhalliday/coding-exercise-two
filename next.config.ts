import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./styles'],
    // prependData: `@import "variables.scss";`, // if you have global variables
  },
};

export default nextConfig;
