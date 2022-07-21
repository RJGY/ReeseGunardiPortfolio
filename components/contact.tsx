import Head from 'next/head'
import Layout, {siteTitle} from 'components/layout'
import utilStyles from 'styles/utils.module.css'
import Link from 'next/link'
import Date from 'components/date'

export default function Contact() {
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Contact</h2>
            </section>
        </>
    )
}