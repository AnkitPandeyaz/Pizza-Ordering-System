import React, { useState } from "react";
import { Col } from "reactstrap";
import { db } from "../firebase/firebase"; // Import Firebase setup
import { doc, setDoc } from "firebase/firestore";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state

  const handleSubscribe = async () => {
    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Start loading when subscription begins

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
    } finally {
      setLoading(false); // End loading after operation is complete
    }
  };

  return (
    <Col lg="3" md="4" sm="6">
      <h5 className="footer__title">Newsletter</h5>
      <p>Subscribe to our newsletter</p>
      <div className="newsletter">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubscribed || loading} // Disable input after subscription
        />
        <span onClick={handleSubscribe} style={{ cursor: "pointer" }}>
          <i className="ri-send-plane-line"></i>
        </span>
      </div>

      {loading && <p>Loading...</p>} {/* Display loading message */}
      
      {isSubscribed && (
        <p style={{ color: "green" }}>
          Thank you for subscribing! Check your inbox for a confirmation email.
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Col>
  );
};

export default Newsletter;
