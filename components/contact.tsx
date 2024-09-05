import { Button, Form, Row, Col } from 'react-bootstrap';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const GET_FORM = "https://getform.io/f/7acaecab-c4d6-42d1-a804-b597412a1e1f";
const PUBLIC_RECAPTCHA_KEY = "6LfDjd4ZAAAAAMVtOGqUbrqD3t5tNu5cJ6zdQ-yb";

export default function Contact() {
    return (
        <>
            <div className="bottom-gap" id="contact">
                <p className="fs-1">Contact Me</p>
                <GoogleReCaptchaProvider reCaptchaKey={PUBLIC_RECAPTCHA_KEY}>
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
                                    <Form.Control type="email" placeholder="jamesbond@secretservice.com" name="email" required/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="SUP3R S3CR3T M3554G3!!!" name="message" rows={5} required/>
                        </Form.Group>
                        <input type="hidden" id="captchaResponse" name="g-recaptcha-response"></input>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </GoogleReCaptchaProvider>
            </div>
        </>
    )
}