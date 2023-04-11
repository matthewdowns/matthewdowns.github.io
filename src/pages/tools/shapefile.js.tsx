import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import Head from 'next/head'
import Link from 'next/link'
import React, {
  useState
} from 'react'
import { Shapefile } from 'shapefile.js'
import Post from '@/components/Post'

function ShapefileJS() {
  const [shapefiles, setShapefiles] = useState<Record<string, Shapefile>>()
  const [shapefilesLoading, setShapefilesLoading] = useState<boolean>(false)

  return (
    <Post
      navigation={[
        {
          id: 'shapefile-input',
          label: 'Upload a shapefile',
        },
        ...(shapefiles != null ? Object.keys(shapefiles).map(key => ({
          id: key,
          label: key,
          items: ['SHP', 'SHX', 'DBF'].map(f => ({
            id: `${key}-${f.toLowerCase()}`,
            label: f
          }))
        })) : [])
      ]}
    >
      <Head>
        <title>Shapefile.js</title>
        <meta name="description" content="Easily read and parse Shapefiles from the browser. Shapefile.js allows you to load a .zip as a buffer, and parse each file individually." />
        <meta name="keywords" content="shape,shp,shapefile,dbf,esri,dbase,shapefiles,shx" />
      </Head>

      <h1 className="!mb-2">
        Shapefile.js
      </h1>
      <p className="!mb-2">
        Easily read and parse Shapefiles from the browser. Shapefile.js allows you to load a .zip as a
        buffer, and parse each file individually.
      </p>
      <p className="!mt-0">
        <Link
          href="https://github.com/matthewdowns/portfolio/tree/main/src/pages/tools/shapefile.js.jsx"
          target="_blank"
        >
          <small>View this code on GitHub</small>
        </Link>
      </p>
      <div className="not-prose">
        <div className="bg-orange-100 border-l-4 border-orange-500 rounded-r text-orange-700 px-3 py-2" role="alert">
          <p className="text-md font-bold">Warning</p>
          <p className="text-sm">Large shapefiles can cause your browser to lock up.</p>
        </div>
        <label
          className="relative mb-1 mt-2 inline-block text-neutral-700 dark:text-neutral-200"
          htmlFor="shapefile-input"
        >
          <span>Upload a Shapefile</span>
          <svg
            className={`absolute animate-spin -ml-1 mr-3 h-5 w-5${shapefilesLoading ? '' : ' hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            style={{
              bottom: '8px',
              right: 0
            }}
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <input
            id="shapefile-input"
            className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
            style={{ maxWidth: 'calc(100vw - 2rem)' }}
            type="file"
            aria-describedby="shapefile-input-help"
            onChange={e => {
              if (!shapefilesLoading && e.target.files != null && e.target.files.length > 0) {
                setShapefilesLoading(true)
                e.target.files[0].arrayBuffer()
                  .then(arrayBuffer => {
                    Shapefile.load(arrayBuffer)
                      .then(_shapefiles => {
                        setShapefiles(_shapefiles)
                        setShapefilesLoading(false)
                      })
                      .catch(() => {
                        setShapefilesLoading(false)
                      })
                  })
                  .catch(() => {
                    setShapefilesLoading(false)
                  })
              }
            }}
          />
        </label>
        <p
          id="shapefile-input-help"
          className="!mt-2 text-sm text-gray-500 dark:text-gray-300"
        >
          Archive (.zip, .rar, .7z)
        </p>
      </div>
      {shapefiles != null && (
        <>
          {Object.keys(shapefiles).sort().map(key => {
            const shapefile = shapefiles[key]
            //const shp = shapefile.parse('shp')
            const shx = shapefile.parse('shx')
            const dbf = shapefile.parse('dbf', { properties: false })

            return (
              <div key={key}>
                <h3 id={key}>{key}</h3>

                <h4 id={`${key}-shp`}>Shape (.shp)</h4>
                <div className="not-prose">

                </div>

                <h4 id={`${key}-shp`}>Shape Index (.shx)</h4>
                <h5>

                </h5>
                <div className="not-prose">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="bg-slate-200 dark:bg-slate-900 border-b dark:border-b-slate-700 font-medium dark:border-neutral-500">
                      <tr>
                        <th className="px-6 py-4" scope="col">Record</th>
                      </tr>
                    </thead>
                    <tbody className="bg-slate-100 dark:bg-slate-800">
                      {shx.records.map(record => (
                        <tr key={record.offset} className="border-b dark:border-b-slate-700">
                          <td className="whitespace-nowrap px-6 py-4">{record.offset}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h4 id={`${key}-dbf`}>DBase (.dbf)</h4>
                <div className="not-prose">
                  <p className="mb-0">Total records: {dbf.header.numberOfRecords}</p>
                  <p>Fields:</p>
                  <div className="max-h-96 overflow-auto rounded">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="bg-slate-200 dark:bg-slate-900 border-b dark:border-b-slate-700 font-medium dark:border-neutral-500">
                        <tr>
                          <th className="px-6 py-4" scope="col">Field</th>
                          <th className="px-6 py-4" scope="col">Type</th>
                          <th className="px-6 py-4" scope="col">Decimals</th>
                          <th className="px-6 py-4" scope="col">Length</th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-100 dark:bg-slate-800">
                        {dbf.fields.map(field => (
                          <tr key={field.name} className="border-b dark:border-b-slate-700">
                            <td className="whitespace-nowrap px-6 py-4">{field.name}</td>
                            <td className="whitespace-nowrap px-6 py-4">{field.type}</td>
                            <td className="whitespace-nowrap px-6 py-4">{field.decimals}</td>
                            <td className="whitespace-nowrap px-6 py-4">{field.length}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      )}
    </Post>
  )

  function download(bytes: Uint8Array, name: string, type = 'application/octet-stream') {
    const blob = new Blob([bytes], { type })
    var link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = name
    link.click()
  }
}

export default ShapefileJS
