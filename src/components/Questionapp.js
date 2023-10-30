// src/QuestionApp.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import QuestionList from "./QuestionList";

function QuestionApp() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the server when the component mounts.
    axios.get("http://localhost:4000/questions")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  return (
    <div>
      <QuestionList questions={questions} />
    </div>
  );
}

export default QuestionApp;
