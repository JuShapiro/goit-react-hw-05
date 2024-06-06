import "./App.css";
import "modern-normalize";

import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header/Header"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
