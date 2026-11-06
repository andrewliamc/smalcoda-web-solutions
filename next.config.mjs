/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/work/willow-and-pine",
        destination: "/work/willow-and-pine-tea-co",
        permanent: true,
      },
      {
        source: "/work/ember-and-loom",
        destination: "/work/houstons-restaurant-redesign",
        permanent: true,
      },
      {
        source: "/work/harvesthub",
        destination: "/work/harvesthub-meal-planner",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
