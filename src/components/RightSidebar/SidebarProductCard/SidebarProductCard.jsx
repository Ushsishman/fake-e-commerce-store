/* eslint-disable react/prop-types */
import BasketPartButtons from "../BasketPart/BasketPartButtons";
import FavPartButtons from "../FavouritePart/FavPartButtons";

const SidebarProductCard = ({ id, image, title, price, type }) => {
  {
    /* THIS COMPONENT IS PRODUCT COMPONENT IN RIGHT SIDEBAR,BUTTONS WILL CHANGE DEPENDS ON WHERE YOU ARE */
  }
  return (
    <div className="flex flex-row items-center justify-between m-4 text-[#0D0D0D]">
      <div className="flex items-center">
        <img className="h-24 w-14" src={image} />
        <div className="mx-6 text-sm">
          <p className="font-semibold">{title}</p>
          <p>${price}</p>
        </div>
      </div>
      {type == "basket" ? (
        <BasketPartButtons id={id} />
      ) : (
        <FavPartButtons id={id} image={image} title={title} price={price} />
      )}
    </div>
  );
};
export default SidebarProductCard;
