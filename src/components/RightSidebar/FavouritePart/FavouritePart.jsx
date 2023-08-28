import SidebarProductCard from "../SidebarProductCard/SidebarProductCard";
import { useSelector } from "react-redux";

const FavouritePart = () => {
  const favMenu = useSelector((state) => state.product[0]);
  {
    /* THIS IS FAVOURITE PARTS MAIN CONTENT */
  }
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden ">
      {favMenu.length > 0 ? (
        <div className="mb-20">
          {favMenu.map((product) => {
            return (
              <SidebarProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                type="favourites"
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center mt-8">No favourite product found.</p>
      )}
    </div>
  );
};

export default FavouritePart;
