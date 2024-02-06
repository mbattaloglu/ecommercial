import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.page";
import Signin from "./pages/signin/signin.page";
import Home from "./pages/home/home.page";
import NotFound from "./pages/not-found/not-found.page";
import { Navbar } from "./components/navbar/navbar.component";
import appStyles from "./styles/app.styles.module.scss";
import Logout from "./pages/logout/logout.page";

const App: React.FC = () => {
  return (
    <div className={appStyles["app"]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
