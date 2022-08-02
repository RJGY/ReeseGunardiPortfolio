import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import Contact from 'components/contact'
import Projects from 'components/projects'
import About from 'components/about'
import Intro from 'components/intro'
import Work from 'components/work'
import Header from 'components/header'
import Footer from 'components/footer'


export default function Home() {
  return (
    <>
      <Header />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Intro />
        <About />
        <Projects />
        <Work />
        <Contact />
      </Layout>
      <Footer />
    </>
  )
}