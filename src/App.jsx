import { useState } from "react";

import Header from "./components/Header"
import UserInput from './components/UserInput'
import Results from "./components/Results"

function App() {
  // 상태 끌어올리기
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  // 조건부로 result 출력
  const isValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {isValid ? <Results userInput={userInput} />: <p className="center">Please enter a duration greater than 0.</p>}
    </>
  )
}

export default App
