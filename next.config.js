const dedicatedEndPoint = "https://itsalexg87.infura-ipfs.io";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [dedicatedEndPoint, "itsalexg87.infura-ipfs.io", "itsalexg.infura-ipfs.io"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};
module.exports = nextConfig;
