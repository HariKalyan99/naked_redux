import ButtonDisplay from "./components/ButtonDisplay"
import DisplayCounter from "./components/DisplayCounter"
import InputValue from "./components/InputValue"

function App() {

  return (
    <div style={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: 'center',flexDirection: "column"}}>
      <DisplayCounter />
      <ButtonDisplay />
      <InputValue />
    </div>
  )
}

export default App
