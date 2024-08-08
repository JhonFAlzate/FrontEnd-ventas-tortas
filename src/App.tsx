import { BrowserRouter, Route, Routes } from "react-router-dom"
import homePage from "./pages/homePage"

function App() {

  return (
<BrowserRouter>
<Routes>
  <Route  path="/" element={<homePage/>}/>
    

</Routes>
</BrowserRouter>
  )
}

export default App
