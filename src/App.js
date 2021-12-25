import CounterComponent from './Components/Counter'
import LoginForm, { Profile } from './Components/LoginForm'
import NavBar from './Components/NavBar'
import { useSelector } from 'react-redux'

function App() {
  const authlog = useSelector(state => state.auth.logincondition)
  console.log(authlog)
  
  return (
    <>
      <NavBar auth={authlog} />
      {!authlog&&<LoginForm />}
      {authlog && <Profile />}
      <CounterComponent>-
      </CounterComponent>
    </>

  );
}

export default App;
