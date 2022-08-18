import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";

const Content = () => {
  return (
    <div className="grid w-6/7 h-[41.3rem]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/SecondPage" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Content;
// bg-gray-100 grid content-center h-screen text-center
