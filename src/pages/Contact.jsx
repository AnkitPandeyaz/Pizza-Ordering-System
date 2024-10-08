// import React from "react";

// const Contact = () => {
//   return <div>Contact</div>;
// };

// export default Contact;


import React from "react";

import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  return (
    <Helmet title="Cart">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Contact Us</h5>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { image01 } = props.item;
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
    </tr>
  );
};

export default Cart;
