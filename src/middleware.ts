import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr"],

  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
