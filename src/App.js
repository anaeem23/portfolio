import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Render from "./components/Body";

function App() {
  const [page, setPage] = useState("AboutMe");

  return (
    <div className="App">
      <Header setPage={setPage} />

      <div className="Body">
        <Render currentPage={page} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
