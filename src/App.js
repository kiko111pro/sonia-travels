import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
