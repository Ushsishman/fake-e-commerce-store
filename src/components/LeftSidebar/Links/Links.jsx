import { useNavigate } from "react-router-dom";

const Links = () => {
  const navigate = useNavigate();
  {
    /* THESE LINKS IS SHOWN IN LEFT SIDEBAR,YOU CAN WALK AROUND SITE WITH THESE LINKS */
  }
  return (
    <ul className="flex flex-col mx-2 font-semibold text-2xl">
      <li
        onClick={() => navigate("/mens-clothes")}
        className="my-1 py-0.5 cursor-pointer hover:bg-[#A9D9D0]">
        Men
      </li>
      <li
        onClick={() => navigate("/womens-clothes")}
        className="my-1 py-0.5 cursor-pointer hover:bg-[#A9D9D0]">
        Women
      </li>
      <li
        onClick={() => navigate("/jewelery")}
        className="my-1 py-0.5 cursor-pointer hover:bg-[#A9D9D0]">
        Jewelery
      </li>
    </ul>
  );
};

export default Links;
