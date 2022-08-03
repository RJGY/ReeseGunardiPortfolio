import { Col, Row, Nav, Tab, Tabs } from 'react-bootstrap';

export default function Work() {
    return (
        <>
            <div className="normal-gap">
                <p className="fs-1">Experience & Education</p>
                <Tabs
                    defaultActiveKey="work"
                    className="mb-3"
                    transition={false}
                >
                    <Tab eventKey="work" title="Work">
                        <Tab.Container defaultActiveKey="first">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">
                                                <p>ASX & Ampion</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">
                                                <p>Global Imaging</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">
                                                <p>Foxtel</p>
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <p>Test Automation Engineer & Junior Developer</p>
                                            <p></p>
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
                                            Bachelors of Information Technology
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            St Leonards Tafe
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">
                                            Ryde Secondary College
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
        </>
    )
}