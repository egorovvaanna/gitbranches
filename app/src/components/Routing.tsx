import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Nav } from "./Outline";
import { Home } from "./Pages/Home";
import { Test } from "./Pages/Test";
import { About } from "./Pages/About";
import { ErrorPage } from "./Pages/ErrorPage";
import { About1 } from "./Pages/About1";
import { About2 } from "./Pages/About2";
import { About3 } from "./Pages/About3";

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="about/" element={<About />}>
          <Route index element={<About1 />} />
          <Route path="2" element={<About2 />} />
          <Route path="3" element={<About3 />} />
        </Route>
        <Route path="about-us" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
