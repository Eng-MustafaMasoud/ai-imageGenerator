// react router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// components
import Create from "./pages/Create";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1366px] mx-auto w-full h-full">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
