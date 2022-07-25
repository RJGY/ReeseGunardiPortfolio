import utilStyles from 'styles/utils.module.css'


// TODO: need formating for this section and fonts
export default function Intro() {
    return (
        <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Hi, I'm Reese Gunardi</h2>
                <p className={utilStyles.text}>I am an aspiring backend developer with a passion for learning and building things. Currently, I work as an automation tester for the ASX.</p>
            </section>
        </>
    )
}