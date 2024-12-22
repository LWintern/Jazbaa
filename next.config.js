/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
<<<<<<< HEAD
        domains: ['media.licdn.com', 'images.unsplash.com']

=======
        domains: ['media.licdn.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.aceternity.com',
              
            },
          ],
>>>>>>> 22dbdf2d087ac760794fb6ff73f34cb3f4a284b4
    }

    
}

module.exports = nextConfig
