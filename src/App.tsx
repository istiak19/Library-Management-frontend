import { Outlet } from "react-router";
import { Button } from "./components/ui/button";

function App() {

  return (
    <>
      <div>
        <h2>Home page</h2>
        <Button>Btn</Button>
      </div>
      <Outlet />
    </>
  )
}

export default App
