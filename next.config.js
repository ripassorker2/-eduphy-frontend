/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ["i.ibb.co", "example.com"],
        unoptimized: true,
    },
};

module.exports = nextConfig;
