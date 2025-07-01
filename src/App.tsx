import { Outlet } from "react-router";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </>
  )
}

export default App
