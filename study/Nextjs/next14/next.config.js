/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "specials-images.forbesimg.com",
                port: "",
                pathname: "/imageserve/**",
            },
        ],
    },
};
