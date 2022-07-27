import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Contact from 'components/contact'
import Projects from 'components/projects'
import About from 'components/about'
import Intro from 'components/intro'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}