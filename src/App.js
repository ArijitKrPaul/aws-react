import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddCampaignComponent from "./components/add_campaign";
import CardComponent from "./components/home";
import LoginComponent from "./components/loginComponent";
import PreviewComponent from "./components/preview";
import RegistrationComponent from "./components/registrationComponent";
import AddBankComponent from "./components/add_bank";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginComponent />,
    },
    {
      path: "/Register",
      element: <RegistrationComponent />,
    },
    {
      path: "/home",
      element: <CardComponent />,
    },
    {
      path: "/preview",
      element: <PreviewComponent />,
    },
    {
      path: "/add_campaign",
      element: <AddCampaignComponent />,
    },
    {
      path: "/add_bank",
      element: <AddBankComponent />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
