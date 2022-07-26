import utilStyles from 'styles/utils.module.css'
import Image from 'next/image'
import ghosted from 'images/ghosted_thumbnail.png'

export default function Projects() {
    return (
        <>
            <section>
                <h2>Projects</h2>
                <p>
                    Here are some of my projects: 
                </p>
                <div className="card w-45 m-3 p-1 bg-dark d-flex" >
                    <Image src={ghosted} className="card-img-top" alt="Card" width={100} height={100}/>
                    <div className="card-body">
                        <h4 className="card-title black">Ghosted</h4>
                        <p className="card-text">2D platformer created in C# and Unity in 48 hours.</p>
                        <a href="#" className="btn btn-primary">Check it out!</a>
                    </div>
                </div>
                <div className="card w-45 m-3 p-1 bg-dark d-flex" >
                    <img src="" className="card-img-top" alt="Card" />
                    <div className="card-body">
                        <h4 className="card-title black">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </section>
        </>
    )
}