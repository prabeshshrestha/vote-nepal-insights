/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'result.election.gov.np',
        pathname: '/Images/**',
      },
    ],
  },
};

module.exports = nextConfig;
