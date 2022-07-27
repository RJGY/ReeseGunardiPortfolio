
import Image from 'next/image'
import ghosted from 'images/ghosted_thumbnail.png'

export default function Projects() {
    return (
        <>
            <div className="normal-gap">
                <p className="fs-1">Projects</p>
                <div className="card w-45 m-2 p-1 bg-dark d-inline-flex" >
                    <Image src={ghosted} className="card-img-top p-3" alt="Card" layout="responsive" />
                    <div className="card-body">
                        <h4 className="card-title black">Ghosted</h4>
                        <p className="card-text">2D platformer with an <i>extra</i> twist created in C# and Unity in 48 hours for the 2020 Brackey's GameJam.</p>
                        <a href="#" className="btn btn-primary">Play it here!</a> <a href="#" className="btn btn-secondary ">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    )
}