import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, {
  useEffect,
  useState
} from 'react'
import BottomNavigation from '@/components/BottomNavigation'
import TopNavigation from '@/components/TopNavigation'
import PageContext from '@/context/Page'
import '@/styles/globals.css'
import Page, { PageMap } from '@/types/Page'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState<Page>()
  const currentPageMapped = currentPage != null ? PageMap[currentPage] : undefined

  useEffect(() => {
    if (router.pathname === '' || router.pathname === '/' || router.pathname.startsWith('/?') || router.pathname.startsWith('/#')) setCurrentPage(Page.Home)
    else if (router.pathname.startsWith('/about')) setCurrentPage(Page.About)
    else if (router.pathname.startsWith('/blog')) setCurrentPage(Page.Blog)
    else if (router.pathname.startsWith('/tools')) setCurrentPage(Page.Tools)
    else if (router.pathname.startsWith('/projects')) setCurrentPage(Page.Projects)
  }, [router.pathname])

  return (
    <>
      <Head>
        <title>Matthew Downs</title>
      </Head>
      <PageContext.Provider
        value={{
          current: currentPage
        }}
      >
        <div className="app bg-white dark:bg-black text-black dark:text-white">
          <header className="app-header">
            <TopNavigation />
          </header>
          <main className="app-content">
            <Component {...pageProps} />
          </main>
          <footer className="app-footer">
            <BottomNavigation />
          </footer>
        </div>
      </PageContext.Provider>
    </>
  )
}

export default App
