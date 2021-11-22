import React from 'react'
import { Layout } from 'components/Layout'
import { Section1 } from 'components/sections/Section1'
import { TopBar } from '../components/TopBar'

export default function Home() {
  return (
    <Layout>
      <>
        <TopBar />
        <Section1 />
      </>
    </Layout>
  )
}
