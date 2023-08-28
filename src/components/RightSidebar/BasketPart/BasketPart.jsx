import SidebarProductCard from "../SidebarProductCard/SidebarProductCard";
import { useSelector } from "react-redux";

const BasketPart = () => {
  const basketMenu = useSelector((state) => state.product[1]);
  {
    /* THIS IS BASKET PARTS MAIN CONTENT */
  }
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden ">
      {basketMenu.length > 0 ? (
        <div className="mb-20">
          {basketMenu.map((product) => {
            return (
              <SidebarProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                type="basket"
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center mt-8">No product found.</p>
      )}
    </div>
  );
};

export default BasketPart;
