
import Image from 'next/image'
import ghosted from 'images/ghosted_thumbnail.png'
import litetech from 'images/litetech_thumbnail.png'
import discordplex from 'images/python_thumbnail_1.jpg'
import lolaccount from 'images/python_thumbnail_2.jpg'
import Link from 'next/link'
import { Card } from 'react-bootstrap';

export default function Projects() {
    return (
        <>
            <div className="normal-gap">
                <a className="projects-anchor" id="projects"></a>
                <p className="fs-1">Projects</p>
                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={ghosted} className="p-3 small-curve" alt="Card" layout="responsive"/>
                    <Card.Body className="card-text">
                        <Card.Title>Ghosted</Card.Title>
                        <Card.Text>
                            2D platformer with an <i>extra</i> twist created in C# and Unity in 48 hours for the 2020 Brackey's GameJam.
                        </Card.Text>
                        <Link href="https://rjgy.github.io/GhostedWebGL/" className="btn btn-primary m-1">Visit it here!</Link>
                        <Link href="https://github.com/RJGY/Ghosted" className="btn btn-secondary m-1">GitHub</Link>
                    </Card.Body>
                </Card>

                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={litetech} className="p-3 small-curve" alt="Card" layout="responsive" />
                    <Card.Body className="card-text">
                        <Card.Title>Litete.ch</Card.Title>
                        <Card.Text>
                            Website made with React and Gatsby for a Minecraft Server. Integrated with Discord API to retrieve members of a Discord server.
                        </Card.Text>
                        <Link href="https://litetechwebsite-rjgy.vercel.app/" className="btn btn-primary m-1">Visit it here!</Link>
                        <Link href="https://github.com/LiteTechMC/litetech-website" className="btn btn-secondary m-1">Github</Link>
                    </Card.Body>
                </Card>

                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={discordplex} className="p-3 small-curve" alt="Card" layout="responsive" />
                    <Card.Body className="card-text">
                        <Card.Title>Plex Media Manager</Card.Title>
                        <Card.Text>
                            Discord bot made with Python which uses a webscraper to browse torrents and YouTube to download music and videos into a Plex server.
                        </Card.Text>
                        <Link href="https://github.com/RJGY/PlexMediaManager" className="btn btn-secondary m-1">Github</Link>
                    </Card.Body>
                </Card>

                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={lolaccount} className="p-3 small-curve" alt="Card" layout="responsive" />
                    <Card.Body className="card-text">
                        <Card.Title>League of Legends Account Manager</Card.Title>
                        <Card.Text>
                            Discord bot made with Python which uses a webscraper to browse torrents and YouTube to download music and videos into a Plex server.
                        </Card.Text>
                        <Link href="https://github.com/RJGY/lol-account-manager" className="btn btn-secondary m-1">Github</Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}