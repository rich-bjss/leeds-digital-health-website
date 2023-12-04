/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"]
  },
  output: "standalone"
}
