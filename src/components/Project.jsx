import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  //CardText,
  //CardBody,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: [
        {
          id: 0,
          name: "Team Profile Generator",
          image: "public/assets/images/fullstack.png",
          repo: "Profile Generator",
        },
        {
          id: 1,
          name: "Ecommerce",
          image: "assets/images/fullstack.png",
          repo: "Ecommerce",
        },
        {
          id: 2,
          name: "Employee Management System",
          image: "assets/images/fullstack.png",
          repo: "Employee Mgnt System",
        },
        {
          id: 4,
          name: "Project 1",
          image: "assets/images/fullstack.png",
          repo: "Actor Database",
        },
        {
          id: 5,
          name: "Project 2",
          image: "assets/images/fullstack.png",
          repo: "Railway Express",
        },
        {
          id: 6,
          name: "Project 3",
          image: "assets/images/fullstack.png",
          repo: "Coming Soon",
        },
      ],
    };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay body className="ml-5">
              <CardTitle heading>{dish.name}</CardTitle>
              <p>{dish.description}</p>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {menu}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;



