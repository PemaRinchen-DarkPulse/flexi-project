import React, { useState } from 'react';

const QuestionForm = () => {
  const [questions, setQuestions] = useState([{ id: 1 }]); // State to store questions

  const addQuestion = (e) => {
    e.preventDefault();
    const newId = questions.length + 1;
    setQuestions([...questions, { id: newId }]); // Add a new question
  };

  return (
    <div>
      <h3>Questionnaire</h3>
      <form>
        {questions.map((question, index) => (
          <div key={question.id}>
            {index > 0 && <hr />}
            <h4>Question {question.id}</h4>
            <div className="mb-3">
              <label htmlFor={`email-${question.id}`} className="form-label">
                Question
              </label>
              <input
                type="email"
                className="form-control"
                id={`email-${question.id}`}
                aria-describedby={`emailHelp-${question.id}`}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`password-${question.id}`} className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id={`password-${question.id}`}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={addQuestion}
        >
          Add More Question
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
