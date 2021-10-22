import { Layout } from 'components/Layout'
import { Section1 } from 'components/Sections/Section1'
import React from 'react'
import { TopBar } from '../components/TopBar'

export default function Home() {
  return (
    <>
      <TopBar />
      <Layout>
        <Section1 />
      </Layout>
    </>
  )
}
