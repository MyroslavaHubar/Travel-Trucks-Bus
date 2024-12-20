import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import { Route, Routes } from "react-router-dom";
import Features from "./components/Features/Features";
import Reviews from "./components/Reviews/Reviews";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const DetailsPage = lazy(() => import("./pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

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
              <Route index element={<Features />} />
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {/* TOAST CONTAINER */}
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
