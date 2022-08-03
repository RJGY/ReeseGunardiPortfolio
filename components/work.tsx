import { Col, Row, Nav, Tab, Tabs } from 'react-bootstrap';

export default function Work() {
    return (
        <div className="normal-gap">
            <p className="fs-1">Experience & Education</p>
            <Tabs
                defaultActiveKey="work"
                className="mb-3"
                transition={false}
            >
                <Tab eventKey="work" title="Experience">
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            <p className="m-1 white">ASX & Ampion</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            <p className="m-1 white">Global Imaging</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            <p className="m-1 white">Foxtel</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <p>Test Automation Engineer & Junior Developer</p>
                                        <p>My current workplace. I create automated tests in Java and Spring Boot with Gherkin feature files to test other microservices. I also worked as a junior developer where I developed new microservices. </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>Admin</p>
                                        <p></p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>Admin</p>
                                        <p></p>
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
                                        <p className="m-1 white">Central Queensland University</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <p className="m-1 white">St Leonards Tafe</p>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        <p className="m-1 white">Ryde Secondary College</p>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    one
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    two
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    three
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Tab>
            </Tabs>
        </div>
    )
}