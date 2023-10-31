import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch existing questions when the component mounts
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => console.error("Error fetching questions: ", error));
  }, []);

  const handleDeleteQuestion = (questionId) => {
    fetch(`http://localhost:4000/questions/${questionId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setQuestions(questions.filter((question) => question.id !== questionId));
      })
      .catch((error) => console.error("Error deleting question: ", error));
  };

  return (
    <div>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDeleteQuestion}
          />
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
