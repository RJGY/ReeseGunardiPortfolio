
import Image from 'next/image'
import ghosted from 'images/ghosted_thumbnail.png'
import Link from 'next/link'

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
                        <Link href="https://rjgy.github.io/GhostedWebGL/" passHref><a className="btn btn-primary" target="_blank">Play it here!</a></Link> <Link href="https://github.com/RJGY/Ghosted" passHref><a className="btn btn-danger" target="_blank">GitHub</a></Link>
                    </div>
                </div>
                <div className="card w-45 m-2 p-1 bg-dark d-inline-flex" >
                    <Image src={ghosted} className="card-img-top p-3" alt="Card" layout="responsive" />
                    <div className="card-body">
                        <h4 className="card-title black">Discord Plex Server Manager</h4>
                        <p className="card-text">Discord bot made with Python which browses torrents and YouTube to download music and videos into a Plex server.</p>
                        <Link href="https://github.com/RJGY/DiscordSongDownloader" passHref><a className="btn btn-primary" target="_blank">Github</a></Link>
                    </div>
                </div>
                <div className="card w-45 m-2 p-1 bg-dark d-inline-flex" >
                    <Image src={ghosted} className="card-img-top p-3" alt="Card" layout="responsive" />
                    <div className="card-body">
                        <h4 className="card-title black">Ghosted</h4>
                        <p className="card-text">2D platformer with an <i>extra</i> twist created in C# and Unity in 48 hours for the 2020 Brackey's GameJam.</p>
                        <Link href="https://rjgy.github.io/GhostedWebGL/" passHref><a className="btn btn-primary" target="_blank">Play it here!</a></Link> <Link href="https://github.com/RJGY/Ghosted" passHref><a className="btn btn-danger" target="_blank">GitHub</a></Link>
                    </div>
                </div>
                <div className="card w-45 m-2 p-1 bg-dark d-inline-flex" >
                    <Image src={ghosted} className="card-img-top p-3" alt="Card" layout="responsive" />
                    <div className="card-body">
                        <h4 className="card-title black">Discord Plex Server Manager</h4>
                        <p className="card-text">Discord bot made with Python which browses torrents and YouTube to download music and videos into a Plex server.</p>
                        <Link href="https://rjgy.github.io/GhostedWebGL/" passHref><a className="btn btn-primary" target="_blank">Github</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}