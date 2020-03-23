import React from "react"

import { Form, Button, Container, Row, Col } from "react-bootstrap"
import IngredientInput from "./IngredientInput"

class AddRecipe extends React.Component {
  constructor() {
    super()
    this.state = {
      ingredients: [],
    }
  }
  ingredientHandle = (e, id) => {
    console.log(id)
    if (typeof e === "string") {
      this.setState(prevState => ({
        ingredients: prevState.ingredients.map((ingredient, i) => {
          if (i === id) {
            return { ...ingredient, unit: e }
          }
          return ingredient
        }),
      }))
    } else if (e.target.name === "delete") {
      this.setState(prevState => ({
        ingredients: prevState.ingredients.filter((ing, i) => i !== id),
      }))
    } else {
      const { name, value } = e.target
      this.setState(prevState => ({
        ingredients: prevState.ingredients.map((ingredient, i) => {
          if (i === id) {
            return { ...ingredient, [name]: value }
          }
          return ingredient
        }),
      }))
    }
  }
  addingredientHandle = () => {
    this.setState(prevState => ({
      ingredients: [
        ...prevState.ingredients,
        { name: "", quantity: "", unit: "" },
      ],
    }))
  }

  render() {
    const ingredients = this.state.ingredients.map((ingredient, i) => (
      <IngredientInput
        key={i}
        id={i}
        unit={ingredient.unit}
        name={ingredient.name}
        quantity={ingredient.quantity}
        handle={this.ingredientHandle}
      />
    ))
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              placeholder="Enter Name"
              value={this.state.name}
              name="name"
              onChange={this.inputHandle}
            />
          </Form.Group>
          <Row>
            <Col lg={6}>
              <h4>Ingredients</h4>

              {ingredients}
              <Button
                variant="outline-success"
                onClick={this.addingredientHandle}
                className="float-right"
              >
                Add
              </Button>
            </Col>
            <Col lg={6}>
              <h4>Directions</h4>
            </Col>
          </Row>
        </Form>
      </Container>
    )
  }
}

export default AddRecipe
