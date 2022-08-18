
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Outline";
import { Home } from "./components/Home";
import { Test } from "./components/Test";
import { About } from "./components/About";
import { ErrorPage } from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path="test" element={<Test/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="about-us" element={<Navigate to="/about" replace />}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
