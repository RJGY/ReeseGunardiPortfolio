import { Button, Form, Row, Col } from 'react-bootstrap';

const GET_FORM = "https://getform.io/f/7acaecab-c4d6-42d1-a804-b597412a1e1f";

export default function Contact() {
    return (
        <>
            <div className="bottom-gap" id="contact">
                <p className="fs-1">Contact Me</p>
                <Form
                    action={GET_FORM}
                    method="POST"
                >
                    <Row>
                        <Col sm={6}>
                            <Form.Group className="mb-3 inline" controlId="formBasicName">
                                <Form.Label className="">Name</Form.Label>
                                <Form.Control type="name" placeholder="James Bond" name="name"/>
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3 inline" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="jamesbond@secretservice.com" name="email"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" placeholder="SUP3R S3CR3T M3554G3!!!" name="message" rows={5}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}