import Script from "next/script";

/** Tag do Google (gtag.js) — única tag de rastreamento do site. */
export const GOOGLE_TAG_ID = "G-BPXEV7ZTDV";

export function AnalyticsHead() {
  return (
    <>
      <Script
        id="google-tag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GOOGLE_TAG_ID}');`}
      </Script>
    </>
  );
}
