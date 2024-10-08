// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const loginNameRef = useRef();
//   const loginPasswordRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Helmet title="Login">
//       <CommonSection title="Login" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={loginNameRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={loginPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Login
//                 </button>
//               </form>
//               <Link to="/register">
//                 Don't have an account? Create an account
//               </Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Login;


// Login.js
import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = loginNameRef.current.value;
    const password = loginPasswordRef.current.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
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
