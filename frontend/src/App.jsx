import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import FeedbackForm from "./pages/FeedbackForm";
import ViewFeedback from "./pages/ViewFeedback";
import LeaderFeedback from "./pages/LeaderFeedback";

import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/feedback"
            element={
              <FeedbackForm
                feedbacks={feedbacks}
                setFeedbacks={setFeedbacks}
              />
            }
          />

          <Route
            path="/history"
            element={<ViewFeedback feedbacks={feedbacks} />}
          />

          <Route
            path="/leader-feedback"
            element={<LeaderFeedback />}
          />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;