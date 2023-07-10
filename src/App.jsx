//import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/Error";
import Box from "@mui/material/Box";
import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import Buisness from "./pages/Buisness/Buisness";
import "./App.css";
import "./i18n.js";
import Cate from "./pages/CategoryMajor/Cate";
import Member from "./pages/Member/Member";
import ContactUs from "./pages/Report/ContactUs";
import Work from "./pages/Report/Work";
import Report from "./pages/Report/ReportProblem";
import About from "./components/About/About";
function App() {
  const [data, setData] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1500);
  }, []);

  return (
    <>
      {data ? (
        <>
          <>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/dash" element={<Dashboard />} /> */}
              <Route path="*" element={<Error />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/business" element={<Buisness />} />
              <Route path="/business?lng=en" element={<Buisness />} />
              <Route path="/business?lng=hi" element={<Buisness />} />
              <Route path="/business?lng=ta" element={<Buisness />} />
              <Route path="/business?lng=ml" element={<Buisness />} />
              <Route path="/business?lng=ur" element={<Buisness />} />
              <Route path="/business?lng=mr" element={<Buisness />} />
              <Route path="/business?lng=bn" element={<Buisness />} />
              <Route path="/business?lng=gu" element={<Buisness />} />
              <Route path="/business?lng=te" element={<Buisness />} />
              <Route path="/category" element={<Cate />} />
              {/* Admin route */}
              <Route path="/admin" element={<Member />} />
              <Route path="/JoinUs" element={<Work />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Contact" element={<ContactUs />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          className="loading"
          style={{ color: "black" }}
        >
          <img className="loadingimg" src="./load2.gif" />
        </Box>
      )}
    </>
  );
}

export default App;