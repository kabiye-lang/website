import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: {
    reactCompiler: true, // Enable the React compiler for better performance and compatibility with newer versions of React.
    inlineCss: true,
  },
  output: "export",
};

export default nextConfig;
