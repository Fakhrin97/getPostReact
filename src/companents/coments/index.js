import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { cartSevice } from "../APIs/services/Carts";
import "../home/index.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Coments() {
  const [{title,body},setComment] =useState([])
  const { state: cardId } = useLocation();
  const history = useHistory();

  const handleHistory = () => {
    history.push("/");
  };

  React.useEffect(() => {
    cartSevice.getPostById(cardId)
    .then(({ data }) => setComment(data));
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col className="mt-4" lg={4}>
            <Card className="cart">
              <Card.Body>
                <Card.Title className="cart-title">{title}</Card.Title>
                <Card.Text className="cart-body">{body}</Card.Text>
                <Button onClick={handleHistory} variant="primary">
                  Go to all posts
                </Button>
                <span className="mx-5">Comment Id:{cardId}</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Coments;
