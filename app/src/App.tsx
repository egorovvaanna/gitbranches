
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Outline";
import { Home } from "./components/Home";
import { Test } from "./components/Test";
import { About } from "./components/About";
import { ErrorPage } from './components/ErrorPage';
import { About1 } from './components/About1';
import { About2 } from './components/About2';
import { About3 } from './components/About3';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path="test" element={<Test/>}/>
        <Route path="about/" element={<About/>}>
          <Route index element={<About1/>}/>
          <Route path="2" element={<About2/>}/>
          <Route path="3" element={<About3/>}/>
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace />}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
