import Head from 'next/head'
import Image from 'next/image'

function About() {
  return (
    <>
      <Head>
        <title>About - Matthew Downs</title>
      </Head>

      <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="mx-auto col-span-12 md:col-span-4" style={{ maxWidth: '300px' }}>
            <Image
              alt="Matthew Downs"
              className="rounded-lg shadow-lg"
              src="/assets/img/headshot.png"
              width={512}
              height={512}
            />
          </div>

          <div className="col-span-12 text-center overflow-hidden md:col-span-8 md:text-left">
            <h1 className="mb-5 text-3xl font-light">Thanks for visiting my website!</h1>
            <p className="mb-5 text-xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra maximus ultricies. Maecenas et turpis a sapien interdum mollis at vel lorem. Vivamus consectetur, leo at volutpat mollis, lectus turpis fringilla est, aliquet porttitor justo eros nec massa. Suspendisse in lacinia magna, ultricies hendrerit purus. Vivamus ornare laoreet mauris sed auctor. Duis metus velit, dapibus sit amet facilisis ullamcorper, varius et diam. Sed a auctor mauris. Proin ullamcorper consequat diam in eleifend. Etiam condimentum finibus facilisis. Suspendisse potenti.
            </p>
            <p className="text-xl font-light">
              Maecenas lorem eros, vulputate ut mattis sit amet, congue id velit. In venenatis semper leo, ac mollis est tincidunt ac. Vivamus non congue sem. Aenean quis ipsum faucibus, elementum dui eu, aliquam turpis.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
