// @refresh reset
import React from 'react'
import Script from 'next/script'
import {DocsThemeConfig} from 'nextra-theme-docs'
import {useConfig} from 'nextra-theme-docs'
import {useRouter} from 'next/router'

const logo = (
    <svg height="20" viewBox="0 0 2872 590" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M149 565L149 75" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path d="M25 463.487L149.149 212.018" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path d="M25 212H276" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path d="M255 364L152.253 212.019" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path d="M459 565L459 75" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path d="M323 491L456.149 212" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path d="M335 212H586" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path d="M586 463.487L461.851 212.018" stroke="currentColor" strokeWidth="50" strokeLinecap="round"/>
        <path
            d="M1106.5 535H1062V368.5H893V535H848.5V178H893V329H1062V178H1106.5V535ZM1428.11 535L1389.11 424.5H1256.61L1218.11 535H1172.61L1302.61 176.5H1344.61L1474.11 535H1428.11ZM1339.11 276.5C1338.44 273.833 1336.94 269 1334.61 262C1332.61 255 1330.44 247.833 1328.11 240.5C1326.11 232.833 1324.44 227 1323.11 223C1321.44 229.667 1319.61 236.5 1317.61 243.5C1315.94 250.167 1314.28 256.333 1312.61 262C1310.94 267.667 1309.44 272.5 1308.11 276.5L1271.11 384.5H1376.11L1339.11 276.5ZM1600.54 353.5L1686.54 178H1734.54L1623.04 396.5V535H1578.54V398.5L1466.54 178H1515.04L1600.54 353.5ZM1982.27 535L1943.27 424.5H1810.77L1772.27 535H1726.77L1856.77 176.5H1898.77L2028.27 535H1982.27ZM1893.27 276.5C1892.6 273.833 1891.1 269 1888.77 262C1886.77 255 1884.6 247.833 1882.27 240.5C1880.27 232.833 1878.6 227 1877.27 223C1875.6 229.667 1873.77 236.5 1871.77 243.5C1870.1 250.167 1868.44 256.333 1866.77 262C1865.1 267.667 1863.6 272.5 1862.27 276.5L1825.27 384.5H1930.27L1893.27 276.5ZM2285.03 439.5C2285.03 460.833 2280.03 479 2270.03 494C2260.36 508.667 2246.53 520 2228.53 528C2210.86 536 2189.69 540 2165.03 540C2152.69 540 2140.69 539.333 2129.03 538C2117.69 536.667 2107.19 534.833 2097.53 532.5C2088.19 529.833 2079.86 526.667 2072.53 523V480C2084.19 485.333 2098.36 490.167 2115.03 494.5C2132.03 498.833 2149.36 501 2167.03 501C2183.36 501 2196.86 498.667 2207.53 494C2218.53 489.333 2226.69 482.667 2232.03 474C2237.69 465.333 2240.53 455.167 2240.53 443.5C2240.53 431.833 2238.03 422 2233.03 414C2228.36 406 2220.36 398.667 2209.03 392C2197.69 385 2182.19 377.667 2162.53 370C2148.53 364.333 2136.19 358.333 2125.53 352C2114.86 345.333 2105.86 337.833 2098.53 329.5C2091.19 321.167 2085.69 311.667 2082.03 301C2078.36 290.333 2076.53 278 2076.53 264C2076.53 245 2081.03 228.833 2090.03 215.5C2099.36 201.833 2112.03 191.333 2128.03 184C2144.36 176.667 2163.19 173 2184.53 173C2202.86 173 2219.69 174.833 2235.03 178.5C2250.36 182.167 2264.53 187 2277.53 193L2263.53 231.5C2251.53 226.167 2238.69 221.667 2225.03 218C2211.69 214.333 2197.86 212.5 2183.53 212.5C2169.86 212.5 2158.36 214.667 2149.03 219C2140.03 223.333 2133.19 229.5 2128.53 237.5C2123.86 245.167 2121.53 254.167 2121.53 264.5C2121.53 276.5 2123.86 286.5 2128.53 294.5C2133.19 302.5 2140.86 309.667 2151.53 316C2162.19 322.333 2176.36 329.167 2194.03 336.5C2213.69 344.167 2230.19 352.5 2243.53 361.5C2257.19 370.167 2267.53 380.667 2274.53 393C2281.53 405.333 2285.03 420.833 2285.03 439.5ZM2630.33 535H2585.83V368.5H2416.83V535H2372.33V178H2416.83V329H2585.83V178H2630.33V535ZM2838.44 535H2714.94V509L2754.44 499.5V214L2714.94 204V178H2838.44V204L2798.94 214V499.5L2838.44 509V535Z"
            fill="currentColor"/>
    </svg>

)

const config: DocsThemeConfig = {
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Hayashi'
            }
        }
    },
    head: function useHead() {
        const {title} = useConfig()
        const {route} = useRouter()
        const socialCard =
            route === '/' || !title
                ? process.env.HOST + `/api/og`
                : process.env.HOST + `/api/og?title=${title}`
        return (
            <>
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-5N79XNG4P3" strategy="beforeInteractive"/>
                <Script strategy="lazyOnload">
                    {
                        `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-5N79XNG4P3');`
                    }
                </Script>
                <meta name="msapplication-TileColor" content="#fff"/>
                <meta name="theme-color" content="#fff"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="Content-Language" content="ko"/>
                <meta
                    name="description"
                    content="Hayashi's Technology Blog"
                />
                <meta
                    name="og:description"
                    content="Hayashi's Technology Blog."
                />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content={socialCard}/>
                <meta name="twitter:site:domain" content={process.env.HOSTNAME}/>
                <meta name="twitter:url" content={process.env.HOST}/>
                <meta
                    name="og:title"
                    content={title ? title + ' – Hayashi' : 'Hayashi'}
                />
                <meta name="og:image" content={socialCard}/>
                <meta name="apple-mobile-web-app-title" content="Hayashi"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
                <link rel="icon" href="/favicon.png" type="image/png"/>
                <link
                    rel="icon"
                    href="/favicon-dark.svg"
                    type="image/svg+xml"
                    media="(prefers-color-scheme: dark)"
                />
                <link
                    rel="icon"
                    href="/favicon-dark.png"
                    type="image/png"
                    media="(prefers-color-scheme: dark)"
                />
            </>
        )
    },
    logo,
    docsRepositoryBase: 'https://github.com/asimuleo/blog/tree/main',
    project: {
        link: 'https://github.com/asimuleo',
    },
    editLink: {
        text: '같이 이 페이지를 편집! (Edit) →',
    },
    feedback: {
        content: '이게 이상해요! (Issues) →',
        labels: 'feedback'
    },
    search: {
        placeholder: "Search pool..."
    },
    footer: {
        text: (
            <div className="flex w-full flex-col items-center sm:items-start">
                <div>
                    <a
                        className="flex items-center gap-1 text-current"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="vercel.com homepage"
                        href="https://vercel.com?utm_source=muleo.site"
                    >
                        <span>Powered by</span>
                        <svg height={20} viewBox="0 0 283 64" fill="none">
                            <title>Vercel</title>
                            <path
                                fill="currentColor"
                                d="M141.04 16c  -11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                            />
                        </svg>
                    </a>
                </div>
                <p className="mt-6 text-xs">
                    © {new Date().getFullYear()} The Hayashi Project.
                </p>
            </div>
        )
    },
    toc: {
        backToTop: true,
        title: "목차",
    }
}

export default config
