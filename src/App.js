import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainPage from "./pages/mainPage";
import LoginForm from "./pages/lgoinForm";
import StaffInfo from "./pages/staffInfo";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<MainPage />}></Route>,
    <Route path="/login" element={<LoginForm />}></Route>,
    <Route path="/staffinfo" element={<StaffInfo />}></Route>,
  ])
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
