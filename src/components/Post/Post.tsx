import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { PostProps } from './Post.types'

function Post(props: PostProps) {
  const {
    className,
    navigation,
    children
  } = props

  const router = useRouter()

  return (
    <>
      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <Link className="inline-flex gap-2 items-center mb-10" href={router.pathname.substring(0, router.pathname.lastIndexOf('/'))}>
          <ArrowLeftIcon className="h-4 w-4" /> Browse
        </Link>
        <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 md:gap-8">
          <div className="flex-grow">
            <article className={classNames('prose lg:prose-lg dark:prose-invert', className)}>
              {children}
            </article>
          </div>
          <div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {navigation?.map(section => (
                <>
                  <li key={section.id} className="mb-4 ml-4 text-lg">
                    <Link href={`#${section.id}`}>
                      {section.label}
                    </Link>
                  </li>
                  {section.items?.map(item => (
                    <li key={`${section.id}-${item.id}`} className="mb-4 ml-8">
                      <Link href={`#${item.id}`}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
