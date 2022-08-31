import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { cartSevice } from "../APIs/services/Carts";
import "./index.scss";

function Home() {
  const [getUsers, setUsers] = React.useState([]);

  React.useEffect(() => {
    cartSevice.getAllPost()
    .then(({ data }) => setUsers(data));
  }, []);

  const history = useHistory();

  const handleHistory = (id) => {
    history.push("/coments", id);
  };

  return (
    <>
      <Container>
        <Row>
          {getUsers.map(({ id, title, body }) => (
            <Col key={id} className="mt-4" lg={4}>
              <Card className="cart">
                <Card.Body>
                  <Card.Title className="cart-title">{title}</Card.Title>
                  <Card.Text className="cart-body">{body}</Card.Text>
                  <Button className="cart-btn" onClick={() => handleHistory(id)} variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
