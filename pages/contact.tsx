import Head from 'next/head'
import Layout from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import Date from 'components/date'

export default function Work() {
    return (
        <Layout>
            <Head>
                <title>Work</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Work</h2>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                        <Link href="/work/1">
                            <a>
                                <h3>
                                    asdf
                                </h3>
                            </a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString="2020-01-01" />
                        </small>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}