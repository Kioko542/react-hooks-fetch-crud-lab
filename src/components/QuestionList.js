import React, { useState, useEffect } from "react";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching questions: ", error));
  }, []);

  if (loading) {
    return <div>Loading questions...</div>;
  }

  return (
    <div>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.prompt}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
