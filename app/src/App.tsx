
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="*" element={<ErrorPage/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
