import React from "react"
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  Button,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap"

export default ({ id, unit, handle, name, quantity }) => (
  <div className="mb-2">
    <Row>
      <Col sm={8}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <InputGroup>
            <InputGroup.Prepend size="sm">
              <Button
                name="delete"
                variant="outline-danger"
                onClick={e => handle(e, id)}
                size="sm"
              >
                X
              </Button>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Ingredient Name"
              aria-label="Ingredient Name"
              name="name"
              onChange={e => handle(e, id)}
              value={name}
              size="sm"
            />
          </InputGroup>
        </Form.Group>
      </Col>
      <Col sm={4}>
        <Form.Group>
          <Form.Label>Quantity</Form.Label>
          <InputGroup size="sm">
            <Form.Control
              placeholder="Ingredient Quantity"
              aria-label="Ingredient Quantity"
              type="number"
              name="quantity"
              onChange={e => handle(e, id)}
              value={quantity}
              style={{ width: "15px !important" }}
            />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={unit || "Unit"}
              id={`input-group-dropdown-${id}`}
              onSelect={e => handle(e, id)}
              name="unit"
            >
              <Dropdown.Item eventKey="oz">oz</Dropdown.Item>
              <Dropdown.Item eventKey="gr">gr</Dropdown.Item>
              <Dropdown.Item eventKey="lg">lb</Dropdown.Item>
              <Dropdown.Item eventKey="pc">pc</Dropdown.Item>
              <Dropdown.Item eventKey="tsp">tsp</Dropdown.Item>
              <Dropdown.Item eventKey="Tbsp">Tbsp</Dropdown.Item>
              <Dropdown.Item eventKey="cup">cup</Dropdown.Item>
              <Dropdown.Item eventKey="pint">pint</Dropdown.Item>
              <Dropdown.Item eventKey="liter">liter</Dropdown.Item>
              <Dropdown.Item eventKey="gallon">gallon</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
        </Form.Group>
      </Col>
    </Row>
  </div>
)
