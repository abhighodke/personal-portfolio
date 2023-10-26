import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            Abhishek Ghodke
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div>
              <a href="https://www.linkedin.com/in/abhishek-ghodke-57809914b/" target="_blank">
                <p>LinkedIn</p>
              </a>
              <a href="https://www.instagram.com/theabhiway/" target="_blank">
                <p>Instagram</p>
              </a>
              <a href="https://github.com/abhighodke" target="_blank">
                <p>Github</p>
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </footer>
  );
};
