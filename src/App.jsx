import { Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Catalog from "./pages/Catalog/Catalog";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
