import { PropsWithChildren } from "react";
import { Container, Col, Row } from "react-bootstrap";

function FormContainer({ children }: PropsWithChildren): JSX.Element {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
