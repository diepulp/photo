/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['graphql'],
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}
export default nextConfig
