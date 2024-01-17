import "./App.css";
import Login from "./Component/Login/Login.js";
import SignUp from "./Component/signup/Signup.js";
import LeaveForm from "./Component/LeaveForm/LeaveForm";

function App() {
  return (
    <>
      <div>
        <Login />
        <SignUp />
        <LeaveForm />
      </div>
    </>
  );
}

export default App;
