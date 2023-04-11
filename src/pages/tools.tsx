import Link from 'next/link'
import React, {
  useEffect,
  useState
} from 'react'

type ToolsInfo = Array<{
  slug: string
  title?: string
  description?: string
  keywords?: string[]
}>

const toolsInfoEmpty: ToolsInfo = [
  { slug: 'shapefile.js' }
]

function Tools() {
  const [toolsInfo, setToolsInfo] = useState<ToolsInfo>(toolsInfoEmpty)

  useEffect(() => {
    Promise.all(toolsInfoEmpty.map(async toolInfo => {
      try {
        const response = await fetch(`/tools/${toolInfo.slug}`, {
          method: 'GET'
        })
        if (response.ok) {
          const result = await response.text()
          toolInfo.title = result.match(/<title>(.*?)<\/title>/)?.at(1)
          toolInfo.description = result.match(/<meta name="description" content="(.*?)"\s?\/>/)?.at(1)
          toolInfo.keywords = result.match(/<meta name="keywords" content="(.*?)"\s?\/>/)?.at(1)?.split(',')
        }
      } catch { }
      return toolInfo
    })).then(setToolsInfo)
  }, [])

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-12 gap-4">
        {toolsInfo.map(toolInfo => (
          <div key={toolInfo.slug} className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-5">
              {toolInfo.title == null ? (
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[240px] mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[150px] mb-4"></div>
                  <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <div className="prose dark:prose-invert">
                  <Link className="no-underline decoration-1 hover:underline" href={`/tools/${toolInfo.slug}`}>
                    <h3 className="mt-0">
                      {toolInfo.title}
                    </h3>
                  </Link>
                  <div className="flex flex-row flex-wrap gap-2">
                    {toolInfo.keywords?.map(keyword => (
                      <small key={keyword} className="bg-slate-200 dark:bg-slate-500 dark:text-white px-2 rounded-full">
                        {keyword}
                      </small>
                    ))}
                  </div>
                  <p>
                    {toolInfo.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default Tools
