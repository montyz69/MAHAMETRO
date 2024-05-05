import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminHomepage from "./pages/AdminHomepage";
import PreviousReportsPage from "./pages/PreviousReportsPage";
import AddIncidentPage from "./pages/AddIncidentPage";
import AdminHomepage1 from "./pages/AdminHomepage1";
import AdminHomepage2 from "./pages/AdminHomepage2";
import AdminHomepage3 from "./pages/AdminHomepage3";
import Elements from "./pages/Elements";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage-4":
        title = "";
        metaDescription = "";
        break;
      case "/previous-reports-page":
        title = "";
        metaDescription = "";
        break;
      case "/add-incident-page":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage-3":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage-2":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage-1":
        title = "";
        metaDescription = "";
        break;
      case "/elements":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AdminLoginPage />} />
      <Route path="/admin-homepage-4" element={<AdminHomepage />} />
      <Route path="/previous-reports-page" element={<PreviousReportsPage />} />
      <Route path="/add-incident-page" element={<AddIncidentPage />} />
      <Route path="/admin-homepage-3" element={<AdminHomepage1 />} />
      <Route path="/admin-homepage-2" element={<AdminHomepage2 />} />
      <Route path="/admin-homepage-1" element={<AdminHomepage3 />} />
      <Route path="/elements" element={<Elements />} />
    </Routes>
  );
}
export default App;
