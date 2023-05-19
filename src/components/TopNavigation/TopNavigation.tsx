//@ts-ignore
import { Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import PageContext from '@/context/Page'
import Page, { PageMap } from '@/types/Page'

const tabs: Record<Page, string> = {
  [Page.Home]: '/',
  [Page.About]: '/about',
  [Page.Blog]: '/blog',
  [Page.Tools]: '/tools',
  [Page.Projects]: '/projects'
}

function TopNavigation() {
  const page = useContext(PageContext)

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-900 dark:text-slate-100 hover:bg-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    alt="Matthew Downs"
                    className="w-auto h-9 w-9 border rounded-full lg:block"
                    src="/assets/img/md.png"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {Object.keys(tabs).map(tab => (
                      <Link
                        key={tab}
                        href={tabs[tab as Page]}
                        className={classNames(
                          tab === page.current ? 'bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900' : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 hover:dark:bg-slate-600 active:bg-slate-200 active:dark:bg-slate-700 hover:text-slate-900 hover:dark:text-slate-100',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={tab === page.current ? 'page' : undefined}
                      >
                        {PageMap[tab as Page]}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  className="theme-icon-light border bg-white hover:bg-slate-100 text-black dark:text-white shadow rounded-full p-1"
                  type="button"
                  onClick={() => {
                    localStorage.setItem('theme', 'dark')
                    document.documentElement.classList.remove('light')
                    document.documentElement.classList.add('dark')
                  }}
                >
                  <SunIcon width="1.5rem" height="1.5rem" />
                </button>
                <button
                  className="theme-icon-dark border bg-white hover:bg-slate-100 text-white dark:text-black shadow rounded-full p-1"
                  type="button"
                  onClick={() => {
                    localStorage.setItem('theme', 'light')
                    document.documentElement.classList.remove('dark')
                    document.documentElement.classList.add('light')
                  }}
                >
                  <MoonIcon width="1.5rem" height="1.5rem" />
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {Object.keys(tabs).map(tab => (
                <Disclosure.Button
                  key={tab}
                  as="a"
                  href={tabs[tab as Page]}
                  className={classNames(
                    tab === page.current ? 'bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900' : 'text-slate-900 dark:text-slate-100 hover:bg-slate-600 active:bg-slate-700 hover:text-slate-100',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={tab === page.current ? 'page' : undefined}
                >
                  {PageMap[tab as Page]}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default TopNavigation
