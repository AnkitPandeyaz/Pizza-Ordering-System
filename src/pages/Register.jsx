// import React, { useRef } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import CommonSection from "../components/UI/common-section/CommonSection";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const signupNameRef = useRef();
//   const signupPasswordRef = useRef();
//   const signupEmailRef = useRef();

//   const submitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <Helmet title="Signup">
//       <CommonSection title="Signup" />
//       <section>
//         <Container>
//           <Row>
//             <Col lg="6" md="6" sm="12" className="m-auto text-center">
//               <form className="form mb-5" onSubmit={submitHandler}>
//                 <div className="form__group">
//                   <input
//                     type="text"
//                     placeholder="Full name"
//                     required
//                     ref={signupNameRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     ref={signupEmailRef}
//                   />
//                 </div>
//                 <div className="form__group">
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     ref={signupPasswordRef}
//                   />
//                 </div>
//                 <button type="submit" className="addTOCart__btn">
//                   Sign Up
//                 </button>
//               </form>
//               <Link to="/login">Already have an account? Login</Link>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Register;

// Register.js
import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const name = signupNameRef.current.value;
    const email = signupEmailRef.current.value;
    const password = signupPasswordRef.current.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // Redirect to login after successful signup
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;

