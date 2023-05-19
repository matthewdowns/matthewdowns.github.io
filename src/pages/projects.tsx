import Head from 'next/head'
import Link from 'next/link'
import React, {
  useEffect,
  useState
} from 'react'

type ProjectsInfo = Array<{
  slug: string
  title?: string
  description?: string
  keywords?: string[]
}>

const projectsInfoEmpty: ProjectsInfo = [
  { slug: 'neer' },
  { slug: 'twenty4tanco' }
]

function Projects() {
  const [projectsInfo, setProjectsInfo] = useState<ProjectsInfo>(projectsInfoEmpty)

  useEffect(() => {
    Promise.all(projectsInfoEmpty.map(async projectInfo => {
      try {
        const response = await fetch(`/projects/${projectInfo.slug}`, {
          method: 'GET'
        })
        if (response.ok) {
          const result = await response.text()
          projectInfo.title = result.match(/<title>(.*?)<\/title>/)?.at(1)
          projectInfo.description = result.match(/<meta name="description" content="(.*?)"\s?\/>/)?.at(1)
          projectInfo.keywords = result.match(/<meta name="keywords" content="(.*?)"\s?\/>/)?.at(1)?.split(',')
        }
      } catch { }
      return projectInfo
    })).then(setProjectsInfo)
  }, [])

  return (
    <>
      <Head>
        <title>Projects - Matthew Downs</title>
        <meta name="description" content="Discover a collection of interesting projects created by Matthew Downs." />
        <meta name="keywords" content="matthewdowns,matthew downs,matthew downs projects,projects" />
      </Head>

      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-12 gap-4">
          {projectsInfo.map(projectInfo => (
            <div key={projectInfo.slug} className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
              <div className="h-full bg-slate-100 dark:bg-slate-800 rounded-xl p-5">
                {projectInfo.title == null ? (
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
                    <Link className="no-underline decoration-1 hover:underline" href={`/projects/${projectInfo.slug}`}>
                      <h3 className="mt-0">
                        {projectInfo.title}
                      </h3>
                    </Link>
                    <div className="flex flex-row flex-wrap gap-2">
                      {projectInfo.keywords?.map(keyword => (
                        <small key={keyword} className="bg-slate-200 dark:bg-slate-500 dark:text-white px-2 rounded-full">
                          {keyword}
                        </small>
                      ))}
                    </div>
                    <p>
                      {projectInfo.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </>
  )
}

export default Projects
