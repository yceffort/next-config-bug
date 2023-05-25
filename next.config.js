/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        'hello': 'world'
    },
    publicRuntimeConfig: {
        'foo': 'bar'
    }
}

module.exports = nextConfig
