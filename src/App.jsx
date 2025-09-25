import { useState } from "react"
import SignIn from "./SignIn.jsx"
import SignUp from "./SignUp.jsx"

function App() {
  const [signUp,setSignUp] = useState(true);

  return (
    <>
  {signUp ? (
    <SignUp setSignUp={setSignUp}/>
  ) :(
    <SignIn setSignUp={setSignUp}/>
  )}
    </>
  )
}

export default App
