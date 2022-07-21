import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from '../styles/utils.module.css'
import Contact from 'components/contact'
import Projects from 'components/projects'
import About from 'components/about'
import Work from 'components/work'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <About />
      <Work />
      <Projects />
      <Contact />
    </Layout>
  )
}