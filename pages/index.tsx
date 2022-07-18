import Head from 'next/head'
import Layout, { siteTitle } from 'components/layout'
import icon from 'images/icon.png'
import PropTypes from 'prop-types'

const Home = props => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
          <span className="icon">
            <img src={icon.src} alt="" height="100%" width="100%"/>
          </span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>LiteTech</h1>
            <p>
              Welcome to the LiteTech Minecraft Server
            </p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <button
                className="transparent-button"
                onClick={() => {
                  props.onOpenArticle('about')
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="transparent-button"
                onClick={() => {
                  props.onOpenArticle('image')
                }}
              >
                Images
              </button>
            </li>
            <li>
              <button
                className="transparent-button"
                onClick={() => {
                  props.onOpenArticle('members')
                }}
              >
                Members
              </button>
            </li>
            <li>
              <button
                className="transparent-button"
                onClick={() => {
                  props.onOpenArticle('youtube')
                }}
              >
                Youtube
              </button>
            </li>
            <li>
              <button
                className="transparent-button"
                onClick={() => {
                  props.onOpenArticle('discord')
                }}
              >
                Discord
              </button>
            </li>
            <li>
              <a href="https://panel.litete.ch/" target="_blank"  rel="noreferrer">
                <button
                  className="transparent-button"
                  type="submit"
                >
                  Panel
                </button>
              </a>
            </li>
            <li>
              <a href="https://archives.litete.ch/" target="_blank"  rel="noreferrer">
                <button
                  className="transparent-button"
                  type="submit"
                >
                  Archive
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Layout>
  )
}

export default Home

Home.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}