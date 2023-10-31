import React, { useState, useEffect } from "react";

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
