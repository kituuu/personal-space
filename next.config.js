/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const coreConfig = {
    images:{
        remotePatterns: [
            {hostname: 'utfs.io'}
        ]
    },
    typescript: {
        ignoreBuildErrors:true,
    },
    eslint: {
        ignoreDuringBuilds:true
    },
    async rewrites() {
        return [
          {
            source: "/ingest/static/:path*",
            destination: "https://us-assets.i.posthog.com/static/:path*",
          },
          {
            source: "/ingest/:path*",
            destination: "https://us.i.posthog.com/:path*",
          },
        ];
      },
      // This is required to support PostHog trailing slash API requests
      skipTrailingSlashRedirect: true, 
};

import { withSentryConfig } from "@sentry/nextjs";

const config = withSentryConfig(
    coreConfig,
    {
        silent: true,
        org: "kituuus-playground",
        project: "t3-gallery",
        widenClientFileUpload: true,
        // transpileClientSDK: true,
        // Reroute traffic so that adblockers can't block it 
        tunnelRoute: '/monitoring',
        hideSourceMaps: true,
        disableLogger: true,
        automaticVercelMonitors: true,
      }
);

export default config;
