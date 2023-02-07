/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// 追記
module.exports = {
  env: {
    STATIC_FORMS_ACCESS_KEY: process.env.STATIC_FORMS_ACCESS_KEY,
  },
};