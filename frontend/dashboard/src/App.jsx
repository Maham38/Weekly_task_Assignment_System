import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";
import Navbar from "./components/Navbar";

import HRDashboard from "./pages/HRDashboard";


import "bootstrap/dist/css/bootstrap.min.css";
import HRHeader from "./components/HRHeader";


function App(){


return(

<BrowserRouter>
<HRHeader />
<Routes>

<Route

path="/"

element={<HRDashboard/>}

/>
<Route

path="/hr-dashboard"

element={<HRDashboard/>}

/>


</Routes>


</BrowserRouter>


)


}


export default App;