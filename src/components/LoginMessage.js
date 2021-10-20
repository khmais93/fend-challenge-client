import React from "react";
import { Card } from "react-bootstrap";

function LoginMessage() {
  return (
    <Card className="text-center card" style={{ width: "50rem" }}>
      <Card.Img
        variant="top"
        src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/fa/6926005ea411e490ff8d4c5d4ff426/chemistry_logo.png?auto=format%2Ccompress&dpr=1"
      />
      <Card.Body>
        <Card.Text>
          Please Login in order to be display search patents results
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default LoginMessage;
