import { Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
