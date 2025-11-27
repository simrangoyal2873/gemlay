
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";

const BestSeller = ({
  product,
  addToCart,
  wishlist = [],
  toggleWishlist,
  hideOnMobile = false,
}) => {
  // Check if product is in wishlist
  const isInWishlist = wishlist.find((p) => p.id === product.id);

  return (
    <div
      className={`${
        hideOnMobile ? "hidden sm:block" : ""
      } relative w-full max-w-[280px] bg-white rounded-2xl shadow-lg border border-gray-200 p-4 transition hover:shadow-2xl mx-auto`}
    >
      {/* Wishlist */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:text-red-500 transition"
      >
        {isInWishlist ? (
          <AiFillHeart className="text-red-500 text-lg" />
        ) : (
          <AiOutlineHeart className="text-gray-700 text-lg" />
        )}
      </button>

      {/* Tag */}
      {product.tag && (
        <span className="absolute top-4 left-4 bg-[#CCE7E0] text-black text-xs font-semibold px-3 py-1 rounded-full">
          {product.tag}
        </span>
      )}

      {/* Image */}
      <div className="relative group mt-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain mx-auto rounded-xl"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-xl opacity-0 group-hover:opacity-100 transition">
          <FaRegEye className="text-white text-lg" />
        </button>
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="text-sm text-gray-700">{product.title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-semibold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm line-through text-gray-500">{product.originalPrice}</span>
          )}
        </div>
        {product.discount && (
          <p className="text-xs text-green-600 font-medium mt-1">{product.discount} off</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button className="flex items-center gap-1 text-orange-600 text-sm font-medium hover:underline">
          <FaRegEye /> View Similar
        </button>
        <button
          onClick={() => addToCart(product)}
          className="bg-[#005C48] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-[#004636] transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
