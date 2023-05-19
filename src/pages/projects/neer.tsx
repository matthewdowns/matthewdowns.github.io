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
        },
        {
          id: 'developers',
          label: 'Developers',
        }
      ]}
    >
      <Head>
        <title>NEER</title>
        <meta name="description" content="NEER is a comprehensive intelligent real time water management platform that combines planning, design, real time hydraulic modeling and predictive asset management into a single cloud based platform." />
        <meta name="keywords" content="" />
      </Head>

      <h1 id="overview">
        NEER
      </h1>
      <p>
        NEER is a comprehensive intelligent real time water management platform that combines planning, design, real time hydraulic modeling and predictive asset management into a single cloud based platform.
      </p>
      <p>
        <Link href="https://neer.ai" target="_blank">https://neer.ai</Link>
      </p>

      <h2 id="developers">
        Developers
      </h2>
      <p>
        One Water API for Developers. Easily connect AMI, SCADA, and IOT Sensors. Simply create digital water, sewer, and stormwater models.
      </p>
      <p>
        <Link href="https://neer.dev" target="_blank">https://neer.dev</Link>
        <br />
        <Link href="https://neer.dev/humans.txt" target="_blank">humans.txt</Link>
      </p>
    </Post>
  )
}

export default NEERDevelopers
