/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true, // allows initialization using instrumentation.ts
  },
};

module.exports = nextConfig;
