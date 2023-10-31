// QuestionApp.js
import React, { useState, useEffect } from "react";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function QuestionApp() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("List");

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  const handleFormSubmit = (newQuestion) => {
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    })
      .then((response) => response.json())
      .then((createdQuestion) => {
        setQuestions([...questions, createdQuestion]);
      })
      .catch((error) => {
        console.error("Error creating a new question:", error);
      });
  };


  return (
    <div>
      <h1>Quiz Questions</h1>
      {page === "Form" ? (
        <QuestionForm onFormSubmit={handleFormSubmit} /> {/* Pass the function here */}
      ) : (
        <QuestionList
          questions={questions}
          onDeleteQuestion={handleDeleteQuestion}
          onUpdateCorrectAnswer={handleUpdateCorrectAnswer}
        />
      )}
    </div>
  );
}

export default QuestionApp;

