import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layouts/Header";
import MensClothes from "./pages/MensClothes";
import WomensClothes from "./pages/WomensClothes";
import Jewelery from "./pages/Jewelery";
import LeftSidebar from "./layouts/LeftSidebar";
import RightSidebar from "./layouts/RightSidebar";
import { useSelector } from "react-redux";

function App() {
  {
    /* THIS IS ROUTING PART,I EXPLAINED ROOT BELOW,ROOT IS BASICALLY LAYOUT,REST OF THEM ARE PAGES */
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/mens-clothes" element={<MensClothes />} />
        <Route path="/womens-clothes" element={<WomensClothes />} />
        <Route path="/jewelery" element={<Jewelery />} />
      </Route>,
    ),
  );

  return (
    <div className="min-h-screen w-full bg-[#A9D9D0]">
      <RouterProvider router={router} />
    </div>
  );
}

{
  /* THIS ELEMENT RETURNS LAYOUT AND CONTENT */
}
const Root = () => {
  const sidebarMenu = useSelector((state) => state.sidebars.sidebarMenu);
  const basketAndFavMenu = useSelector(
    (state) => state.sidebars.basketAndFavMenu,
  );

  return (
    <div className="relative">
      {sidebarMenu == true && <LeftSidebar />}
      <Header />
      <Outlet />
      {basketAndFavMenu == true && <RightSidebar />}
    </div>
  );
};

export default App;
