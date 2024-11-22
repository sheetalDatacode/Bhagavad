import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quotes from "./Quotes";
import Bhagawat from "./Bhagawat";
import AboutGita from "./AboutGita";
import GitaAI from "./GitaAI";
import Donate from "./Donate";
const AppRoutes = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Bhagawat />}/>
          <Route path="/Quotes" element={<Quotes />}/>
          <Route path="/AboutGita" element={<AboutGita/>}/>
          <Route path="/GitaAI" element={<GitaAI/>}/>
          <Route path="/Donate" element={<Donate/>}/>
        </Routes>
      </div>
    </div>
  );
};
export default AppRoutes;
