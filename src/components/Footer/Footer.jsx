import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { db } from "../../firebase/firebase"; // Import Firebase setup
import { doc, setDoc } from "firebase/firestore"; // Firestore functions

import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const handleSubscribe = async () => {
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      // Store email in Firestore (you can create a collection called 'subscribers')
      const emailRef = doc(db, "subscribers", email);
      await setDoc(emailRef, { email: email, subscribedAt: new Date() });

      setIsSubscribed(true);
      setEmail(""); // Clear email input after subscribing
      setError(null); // Reset error
    } catch (err) {
      console.error("Error subscribing: ", err);
      setError("An error occurred while subscribing. Please try again later.");
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                One Tap, Endless Pizza Perfection – Whether It’s Classic
                Margherita or Gourmet Special, We Deliver Hot, Fresh Pizzas
                Right to Your Door, Wherever You Are!
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <p>Location: Galgotias University, Greater Noida, India</p>
              </ListGroupItem>
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Phone: 0120-4806800</span>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Email: tastytreat@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          {/* <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span onClick={handleSubscribe}>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
            {isSubscribed && <p>Thank you for subscribing! Check your inbox for a confirmation email.</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </Col> */}
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2024, website made by Ankit Pandey & Team. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                <Link to="https://www.facebook.com/">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://github.com/">
                  <i className="ri-github-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://www.youtube.com/">
                  <i className="ri-youtube-line"></i>
                </Link>
              </span>

              <span>
                <Link to="https://www.linkedin.com/">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
