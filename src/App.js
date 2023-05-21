import "./App.css";
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import NftGallery from "./components/NftGallery.js"
import Swap from "./components/Swap.js"
import stake from "./components/stake.js"

function App() {
  return (
  <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NftGallery" element={<NftGallery />} />
        <Route path="/Swap" element={<Swap />} />
        <Route path="/stake" element={<stake />} />
        </Routes>
  </div>

  )
}

export default App;