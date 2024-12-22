/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media.licdn.com', 'images.unsplash.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.aceternity.com',
              
            },
            {
              protocol: 'https',
              hostname: 'pbs.twimg.com',
            }
          ],
    }

    
}

module.exports = nextConfig
