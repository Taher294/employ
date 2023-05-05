import {
  BrowserRouter,
  Routes,
  Route,
}
from "react-router-dom";
import Employee from "./component/employee";
import Add from "./component/Add";
import Update from "./component/Update";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee/> } />
        <Route path="/Add" element={<Add/> } />
        <Route path="/Update" element={<Update/> } />
        </Routes>
         </BrowserRouter>
      
    </div>
  );
}

export default App;
