import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Retail from "./pages/Retail";
import Industrial from "./pages/Industrial";
import Truck from "./pages/Truck";
import Dosing from "./pages/Dosing";
import Automation from "./pages/Automation";
import Medical from "./pages/Medical";
import Laboratory from "./pages/Laboratory";
import Measuring from "./pages/Measuring";
import FoodIndustry from "./pages/FoodIndustry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          {path:'retail', element:<Retail />},
          {path:'industrial', element:<Industrial />},
          {path:'truckscales', element:<Truck />},
          {path:'dosingscales', element:<Dosing />},
          {path:'automation', element:<Automation />},
          {path:'medical', element:<Medical />},
          {path:'laboratory', element:<Laboratory />},
          {path:'measuring', element:<Measuring />},
          {path:'foodindustry', element: <FoodIndustry />}

        ]
      },
      {
        path:"projects",
        element: <Projects />,
      },
      {
        path: "service",
        element: <Service />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
