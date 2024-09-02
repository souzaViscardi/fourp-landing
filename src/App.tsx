import {router} from "./Routes/Root"
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import {
  RouterProvider,
} from "react-router-dom";
function App() {
  return (
    <div className="full-container">
      <NavBar/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
