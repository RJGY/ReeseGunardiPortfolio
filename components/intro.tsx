import utilStyles from 'styles/utils.module.css'

export default function Intro() {
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Hey, I'm Reese</h2>
                <p className={utilStyles.text}>I am an aspiring fullstack developer with a passion for learning and building things.</p>
                <p className={utilStyles.text}>Here are some of my projects:</p>
            </section>
        </>
    )
}