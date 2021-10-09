/** @type {import('next').NextConfig} */
module.exports = {
  basePath: process.env.APP_BASE_URL,
  reactStrictMode: true,

  publicRuntimeConfig: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    API_BASE_URL: process.env.API_BASE_URL,
  },
};
