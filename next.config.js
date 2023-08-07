/** @type {import('next').NextConfig} */
const path = require("path");
const { parsed: appEnv } = require("dotenv").config({
  path: path.resolve(__dirname, "configs/.env"),
});
const nextConfig = {
  output: "standalone",
  env: appEnv,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
