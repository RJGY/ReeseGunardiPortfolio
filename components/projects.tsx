
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
                <p className="fs-1">Projects</p>
                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={ghosted} className="p-3 rounded" alt="Card"/>
                    <Card.Body>
                        <Card.Title>Ghosted</Card.Title>
                        <Card.Text>
                            2D platformer with an <i>extra</i> twist created in C# and Unity in 48 hours for the 2020 Brackey's GameJam.
                        </Card.Text>
                        <Link href="https://rjgy.github.io/GhostedWebGL/" passHref><a className="btn btn-primary m-1" target="_blank">Play it here!</a></Link>
                        <Link href="https://github.com/RJGY/Ghosted" passHref><a className="btn btn-secondary m-1" target="_blank">GitHub</a></Link>
                    </Card.Body>
                </Card>

                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={litetech} className="card-img-top p-3" alt="Card" layout="responsive" />
                    <Card.Body>
                        <Card.Title>Litete.ch</Card.Title>
                        <Card.Text>
                            <p className="card-text">Website made with React and Gatsby for a Minecraft Server. Integrated with Discord API to retrieve members of a Discord server. </p>
                        </Card.Text>
                        <Link href="https://litetechwebsite-rjgy.vercel.app/" passHref><a className="btn btn-primary m-1" target="_blank">Visit it here!</a></Link>
                        <Link href="https://github.com/LiteTechMC/litetech-website" passHref><a className="btn btn-secondary m-1" target="_blank">Github</a></Link>
                    </Card.Body>
                </Card>

                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={discordplex} className="card-img-top p-3" alt="Card" layout="responsive" />
                    <Card.Body>
                        <Card.Title>Discord Plex Server Manager</Card.Title>
                        <Card.Text>
                            <p className="card-text">Discord bot made with Python which uses a webscraper to browse torrents and YouTube to download music and videos into a Plex server.</p>
                        </Card.Text>
                        <Link href="https://github.com/RJGY/DiscordSongDownloader" passHref><a className="btn btn-secondary m-1" target="_blank">Github</a></Link>
                    </Card.Body>
                </Card>

                <Card className="w-45 m-2 p-1 d-inline-flex" bg="dark">
                    <Image src={lolaccount} className="card-img-top p-3" alt="Card" layout="responsive" />
                    <Card.Body>
                        <Card.Title>League of Legends Account Manager</Card.Title>
                        <Card.Text>
                            <p className="card-text">Discord bot made with Python which uses a webscraper to browse torrents and YouTube to download music and videos into a Plex server.</p>
                        </Card.Text>
                        <Link href="https://github.com/RJGY/lol-account-manager" passHref><a className="btn btn-secondary m-1" target="_blank">Github</a></Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}