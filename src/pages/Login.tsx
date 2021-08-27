import { useHistory } from "react-router-dom"

export default function Login() {
  const history = useHistory();

  const navigateToHome = () => {
    history.push('/')
  }

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={navigateToHome}>Ir para home</button>

    </div>
  )
}