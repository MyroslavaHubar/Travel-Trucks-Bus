import { Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}></Suspense>
      </main>
    </>
  );
}

export default App;
