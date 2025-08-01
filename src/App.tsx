import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommonPage from "./pages/CommonPage";
import WelpointPage from "./pages/WelpointPage";
import ErrorPage404 from "./pages/ErrorPage404.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/common" element={<CommonPage />} />
                <Route path="/welpoint" element={<WelpointPage />} />
                <Route path="*" element={<ErrorPage404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;