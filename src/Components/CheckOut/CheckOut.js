import React from "react";
import { Button, Form } from "react-bootstrap";

const CheckOut = () => {
  return (
    <div className="mx-auto my-5 container">
      <div className="w-50  mx-auto">
        <div className="text-center mb-4">
          <h4>Payment Method</h4>
          <img
            className="w-50"
            src="https://www.citypng.com/public/uploads/preview/visa-mastercard-discover-american-express-icons-21635415958rgxaunvs7z.png"
            alt=""
          />
        </div>

        <div className="mt-3">
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-primary">Card Holder Name</Form.Label>
              <Form.Control type="text" placeholder="Tanjelus Saad Jim" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="carnNumber">
              <Form.Label className="text-primary">Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Card Number : 1234 5678 1234 5678"
              />
            </Form.Group>
            <div className="d-md-flex">
              <Form.Group className="mb-3" controlId="expiryDate">
                <Form.Label className="text-primary">Expiry Date</Form.Label>
                <Form.Control type="date" placeholder="DD / MM / YYYY" />
              </Form.Group>
              <Form.Group className="ms-1 mb-3" controlId="pin">
                <Form.Label className="text-primary">PIN</Form.Label>
                <Form.Control type="text" placeholder="***" />
              </Form.Group>
            </div>
            <Button variant="primary" type="submit" className="w-100">
              Confirm
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
