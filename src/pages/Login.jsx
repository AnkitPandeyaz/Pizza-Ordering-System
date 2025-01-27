
import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State to handle errors
  const { currentUser } = useAuth(); // Accessing current user from AuthContext

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Reset error on new submission
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
      setError("Invalid email or password. Please try again."); // Show error message
      console.error("Error signing in: ", err);
    }
  };

  // Redirect to dashboard if already logged in
  if (currentUser) {
    navigate("/dashboard");
    return null;
  }

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                {error && <p className="text-danger">{error}</p>} {/* Error message */}
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;

