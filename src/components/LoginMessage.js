import React from "react";
import { Card } from "react-bootstrap";

function LoginMessage() {
  return (
    <Card className="text-center card" style={{ width: "50rem" }}>
      <Card.Img
        variant="top"
        src="https://i.pinimg.com/originals/7e/d6/1a/7ed61a337b0cccb1598fe5fd1b9724bf.jpg"
      />
      <Card.Body>
        <Card.Text>
          <strong>
            Please Login in order to be able to display search patents results.
          </strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LoginMessage;
