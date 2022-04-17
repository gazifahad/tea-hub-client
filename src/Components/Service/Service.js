import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <div className="col-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.description}
          </Card.Text>
          <div className="d-flex justify-content-between">
          <Link to='/checkout'><Button variant="danger">Order Now</Button></Link>
          <p className="text-danger fs-5">${service.price}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
