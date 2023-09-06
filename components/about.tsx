import { Col, Row } from 'react-bootstrap';
import Image from 'next/image'
import profile from 'images/profile_final.jpg';

export default function About() {
    return (
        <>
            <div className="normal-gap">
                <a className="about-anchor" id="about"></a>
                <Row>
                    <Col sm={8}>
                        <p className="fs-1">Who am I?</p>
                        <p className="fs-5">
                            Hey, my name is Reese Gunardi and I am a fullstack developer currently working at Objective Corporation and I build 
                            just about anything and everything. I started coding as a teenager aged 14 when I was interested in modding video games 
                            and creating my own games. Since then, I have discovered my passion for programming and creating software, and have completed my 
                            Bachelors of Information Technology (Co-op) at Central Queensland Univeristy and a Certificate IV in Interactive Games 
                            at St Leonards TAFE. I have also undertaken hackathons and game jams to further hone my skills while continuing to mod 
                            and create games.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <Image src={profile} className="curved-border p-3" alt="Profile Picture" layout="responsive"/>
                    </Col>
                </Row>
            </div>
        </>
    )
}