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
                <h2 className={utilStyles.headingLg}>Projects</h2>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>
                        <Link href="/work/1">
                            <a>
                                <h3>

                                </h3>
                            </a>
                        </Link>
                        
                    </li>
                </ul>
            </section>
        </Layout>
    )
}