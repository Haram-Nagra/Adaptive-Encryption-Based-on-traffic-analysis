import Layout from "./pages/layout";
import Home from "./pages/home"
import Encrypt from "./pages/encrypt";
import Decrypt from "./pages/decrypt";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  
  return (
    <>
<BrowserRouter>
    <Layout>
    <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path="/encrypt" element={<Encrypt/>}/>
          <Route path ="/decrypt" element={<Decrypt/>} />
      </Routes>
    </Layout>
    </BrowserRouter>

    </>
  );
}
