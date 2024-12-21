import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<DetailsPage />}>
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
