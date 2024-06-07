import "~/styles/globals.css";
import "@uploadthing/react/styles.css"; // uploadthing custom css
import { GeistSans } from "geist/font/sans";

import { ClerkProvider } from "@clerk/nextjs";
import { TopNav } from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "~/components/ui/sonner";
import { CSPostHogProvider } from "./_analytics/AnalyticsProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { METADATA } from "~/const";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  keywords: METADATA.keywords,
  authors: [{ name: METADATA.author }],
  manifest: METADATA.manifest,
  icons: [
    {
      url: METADATA.apple_touch_icon,
      type: "apple-touch-icon",
      sizes: "180x180",
      rel: "apple-touch-icon",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: METADATA.favicon_32x32,
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: METADATA.favicon_16x16,
    },
    { rel: "icon", url: METADATA.icon },
    { rel: "manifest", url: METADATA.web_manifest },
  ],
};

export default function RootLayout({
  children,
  modal, // make a @modal route first to dismiss this error
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body className={`dark font-sans`}>
            <div className="grid h-screen grid-rows-[auto,1fr]">
              <TopNav />
              <main className="overflow-y-scroll py-3">{children}</main>
            </div>
            {modal}
            <div id="modal-root" />
            <Toaster />
            <SpeedInsights />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
