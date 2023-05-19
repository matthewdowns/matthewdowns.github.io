import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Post from '@/components/Post'

function NEERDevelopers() {
  return (
    <Post
      navigation={[
        {
          id: 'overview',
          label: 'Overview'
        }
      ]}
    >
      <Head>
        <title>Twenty4 Tan Co.</title>
        <meta name="description" content="No-appointment mobile check-in application for a tanning salon." />
        <meta name="keywords" content="" />
      </Head>

      <h1 id="overview">
        Twenty4 Tan Co.
      </h1>
      <p>
        Developed a no-appointment mobile check-in application for a tanning salon in Moberly, Missouri.
      </p>
      <p>
        <Link href="https://twenty4tanco.com" target="_blank">https://twenty4tanco.com</Link>
        <br />
        <Link href="https://twenty4tanco.com/humans.txt" target="_blank">humans.txt</Link>
      </p>
    </Post>
  )
}

export default NEERDevelopers
