import { Col, Row, Nav, Tab, Tabs } from 'react-bootstrap';

export default function Work() {
    return (
        <>
            <div className="normal-gap">
            <a className="work-anchor" id="work"></a>
                <p className="fs-1">Experience & Education</p>
                <Tabs
                    defaultActiveKey="work"
                    className="mb-3 fs-3"
                    transition={false}
                >
                    <Tab eventKey="work" title="Experience">
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <p className="m-1 fs-4">Objective Corporation</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <p className="m-1 fs-4">ASX & Ampion</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <p className="m-1 fs-4">Global Imaging</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="forth">
                                                <p className="m-1 fs-4">Foxtel</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p className="fs-3">Fullstack Software Engineer</p>
                                            <p className="fs-5">I work as a full stack engineer on the Objective Keystone team which is developing an ever evolving web application which is used by thousands of customers. For the backend, I am tasked with creating the API endpoints as well as the architecture of the system. For the frontend, I am tasked with creating the modals and webpages which interacts with the API.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p className="fs-3">Test Automation Engineer & Junior Developer</p>
                                            <p className="fs-5">Created automated tests in Java with Spring Boot with Gherkin feature files which test the functional and performance capabilities of mutliple systems. I also worked part time as a junior developer where I developed new microservices which report the transactions which occur on the Australian Share Market. I also develop inhouse tools such as our testing framework and mapping document register which displays the relationship of all the microservices and how they interact with each other.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p className="fs-3">Office & Admin Support</p>
                                            <p className="fs-5">Performed basic maintenance of work equipment including photography and computer equipment. I also helped manage the inventory of equipment and cleaned the workplace.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="forth">
                                            <p className="fs-3">Contracted Support</p>
                                            <p className="fs-5">Organised preperation for equipment upgrades and assisted in workstation upgrade and set-up.</p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Tab>
                    <Tab eventKey="education" title="Education">
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <p className="m-1 fs-4">Central Queensland University</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <p className="m-1 fs-4">St Leonards Tafe</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <p className="m-1 fs-4">Ryde Secondary College</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p className="fs-3">Bachelors of Information Technology (Co-Op)</p>
                                            <p className="fs-5">I attended Central Queensland University from January 2019 to January 2022, majoring in Application Development (Software Development). I achieved a 6.6 GPA out of 7 and recieved multiple commendations from the Dean of Engineering and Technology for my academic achievements. I also participated in the university e-sports team where I competed in the annual Unisports League of Legends tournament.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p className="fs-3">Certificate IV in Digital & Interactive Games</p>
                                            <p className="fs-5">I attended St Leonards TAFE from June 2019 to Decemeber 2019 where I learnt about Game Design, programming in C#, and how to use Unity. I also learnt a multitude of media editting tools such as Adobe PhotoShop, After Effects and Premiere.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p className="fs-3">High School Certificate</p>
                                            <p className="fs-5">I attended Ryde Secondary College and achieved an 85 ATAR. </p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}