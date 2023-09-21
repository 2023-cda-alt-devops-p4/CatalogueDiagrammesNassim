/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['www.sparxsystems.fr', 'sparxsystems.fr'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.sparxsystems.fr',
                port: '',
                pathname: '/images/screenshots/**',
            },
        ],
    },
}

