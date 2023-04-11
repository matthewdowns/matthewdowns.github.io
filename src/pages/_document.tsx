import {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import Script from 'next/script'

function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=" />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {dataLayer.push(arguments); }
              gtag('js', new Date());

              gtag('config', 'G-');
            `
          }}
          strategy="afterInteractive"
        />

        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-Control" content="no-cache" />

        <meta name="keywords" content="matthewdowns,portfolio" />
        <meta name="description" content="Matthew Downs Portfolio" />

        <meta httpEquiv="x-dns-prefetch-control" content="off" />

        <meta name="og:site_name" content="Matthew Downs" />
        <meta name="og:url" content="https://matthewdowns.com" />
        <meta name="og:type" content="website" />
        <meta name="og:title" content="Matthew Downs" />
        <meta name="og:description" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@matthewdowns" />
        <meta name="twitter:url" content="https://matthewdowns.com" />
        <meta name="twitter:title" content="Matthew Downs" />
        <meta name="twitter:description" content="" />

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <link type="text/plain" rel="author" href="/humans.txt" />

        {/* Calendly style */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Calendly scripts */}
        <Script
          async={true}
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="beforeInteractive"
        />
        <Script
          id="calendly"
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = function() {
                Calendly.initBadgeWidget({
                  branding: undefined,
                  color: '#334155',
                  text: 'Schedule a chat',
                  textColor: '#ffffff',
                  url: 'https://calendly.com/matthew-downsc/chat'
                })
              }
            `
          }}
          strategy="afterInteractive"
        />

        {/* Theme script */}
        <Script
          id="theme"
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
              } else {
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
              }
            `
          }}
          strategy="afterInteractive"
        />
      </body>
    </Html>
  )
}

export default Document
