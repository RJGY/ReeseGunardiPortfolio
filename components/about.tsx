import { Col, Row } from 'react-bootstrap';
import Image from 'next/image'
import profile from 'images/profile_final.jpg';

export default function About() {
    return (
        <>
            <div className="normal-gap">
                
                <Row>
                    <Col sm={8}>
                        <p className="fs-1">Who am I?</p>
                        <p className="fs-5">
                            Hey, my name is Reese Gunardi and I am an aspiring fullstack developer and I build just about anything and everything. I started coding as a teenager aged 14 when I was interested in modding video games and creating my own games. Since then, I discovered my passion for developing and completed my Bachelors of Information Technology at Central Queensland Univeristy and a Certificate IV in Interactive Games at St Leonards TAFE. I have also undertaken hackathons and game jams to further hone my skills.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <Image src={profile} className="p-3 curved-border" alt="Profile"/>
                    </Col>
                </Row>
            </div>
        </>
    )
}