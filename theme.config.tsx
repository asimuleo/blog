import React from 'react'
import Script from 'next/script'
import {DocsThemeConfig} from 'nextra-theme-docs'
import {useConfig} from 'nextra-theme-docs'
import {useRouter} from 'next/router'
import Image from 'next/image'

const logo = (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <Image
            src="/favicon.png"
            width={40}
            height={40}
            alt="Main Logo"
        />
        asimuleo
    </div>
)

const config: DocsThemeConfig = {
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Muleo'
            }
        }
    },
    head: function useHead() {
        const {title} = useConfig()
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
                    content="Muleo's Technology Blog"
                />
                <meta
                    name="og:description"
                    content="Muleo's Technology Blog."
                />
                <meta
                    name="og:title"
                    content={title ? title + ' – Muleo' : 'Muleo'}
                />
                <meta name="apple-mobile-web-app-title" content="Muleo"/>
                <link rel="icon" href="/favicon.png" type="image/png"/>
            </>
        )
    },
    logo,
    docsRepositoryBase: 'https://github.com/asimuleo/blog/tree/blog',
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
                    © {new Date().getFullYear()} The Muleo Project.
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
