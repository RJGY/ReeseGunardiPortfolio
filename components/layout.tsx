import Head from 'next/head'
import Link from 'next/link'
import TSParticles from './particles';

export const siteTitle = 'Reese Gunardi - Developer Portfolio'


export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className="container">
      <div>
        <TSParticles id="tsparticles"/>
      </div>
      <Head>
        <link rel="icon" href="/logo.png"/>
        <meta
          name="description"
          content="Reese Gunardi's Personal Developer Portfolio Website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="white">{children}</main>
      {!home && (
        <div>
          <Link legacyBehavior href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}