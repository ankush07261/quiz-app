import React from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';

function App() {

  const startTrivia = async () => {
    
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuestion = () => {
    
  }

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p className=''>Loading questions</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
