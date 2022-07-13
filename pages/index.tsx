import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my website!</p>
      </section>
      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          <Link href="/blog">
            <a>
              <h3>
                Blog
              </h3>
            </a>
          </Link>
        </li>
        <li className={utilStyles.listItem}>
          <Link href="/about">
            <a>
              <h3>
                About
              </h3>
            </a>
          </Link>
        </li>
        <li className={utilStyles.listItem}>
          <Link href="/contact">
            <a>
              <h3>
                Contact
              </h3>
            </a>
          </Link>
        </li>
        <li className={utilStyles.listItem}>
          <Link href="/projects">
            <a>
              <h3>
                Projects
              </h3>
            </a>
          </Link>
        </li>
        <li className={utilStyles.listItem}>
          <Link href="/work">
            <a>
              <h3>
                Work
              </h3>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

