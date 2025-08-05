import cn from "classnames";
import { Container } from "components/ui/Container";
import { useCartStore } from "stores/cart.store";
import { Minus, Plus, Trash2, ShoppingBag, Truck } from "lucide-react";
import { useState } from "react";
import { CustomLink } from "components/ui/CustomLink";
import { Link } from "react-router";
import type { ProductType } from "types/Product.types";

interface CartProps {
  className?: string;
}

export const Cart = ({ className }: CartProps) => {
  const {
    items: cartItems,
    addItemToCart,
    removeItemFromCart,
    decreaseItemQuantity,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();

  const subtotal = getTotalPrice();
  const [deliveryFee] = useState(subtotal > 100 ? 0 : 50);
  const totalItems = getTotalItems();
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  const handleIncreaseQuantity = (item: ProductType) => {
    addItemToCart({ ...item, quantity: 1 });
  };

  const handleDecreaseQuantity = (productId: number) => {
    decreaseItemQuantity(productId);
  };

  const handleRemoveItem = (productId: number) => {
    removeItemFromCart(productId);
  };

  if (cartItems.length === 0) {
    return (
      <Container className={cn("py-6 sm:py-12 px-4", className)}>
        <div className="text-center max-w-sm mx-auto">
          <ShoppingBag className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16 text-gray-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 px-2">Your cart is empty</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-10 px-2">
            Start shopping to add items to your cart
          </p>
          <CustomLink
            path="/shop"
            variant="primary"
            className="w-full sm:w-auto px-6 py-3"
            style={{ fontSize: "16px" }}
          >
            Continue Shopping
          </CustomLink>
        </div>
      </Container>
    );
  }

  return (
    <Container className={cn("py-4 sm:py-8 px-4", className)}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
          <p className="text-sm sm:text-base text-gray-600">
            {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
          </p>
        </div>

        {/* Mobile-first layout */}
        <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Mobile layout (default) */}
                  <div className="p-4 sm:p-6 sm:hidden">
                    <div className="flex space-x-3 mb-3">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">{item.name}</h3>
                        <p className="text-sm text-gray-500 capitalize mt-1">{item.type}</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="flex-shrink-0 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg min-w-[40px]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4 mx-auto" />
                        </button>
                        <span className="px-3 py-2 font-medium min-w-[50px] text-center border-x border-gray-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(item)}
                          className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg min-w-[40px]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4 mx-auto" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tablet/Desktop layout */}
                  <div className="hidden sm:block p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500 capitalize mt-1">{item.type}</p>
                        <p className="text-lg font-bold text-gray-900 mt-2">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleDecreaseQuantity(item.id)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 font-medium min-w-[3rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleIncreaseQuantity(item)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:sticky lg:top-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span>
                    Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})
                  </span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm sm:text-base text-gray-600">
                  <span className="flex items-center">
                    <Truck className="h-4 w-4 mr-1" />
                    Delivery
                  </span>
                  <span>{deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}</span>
                </div>

                <hr className="border-gray-300" />

                <div className="flex justify-between text-lg sm:text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <Link to="/shop" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Continue Shopping
                </Link>
              </div>

              {/* Delivery Info */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Truck className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">
                      {subtotal > 100 ? "Free delivery!" : "Free delivery"}
                    </p>
                    <p className="text-xs text-blue-700">
                      {subtotal > 100 ? "You qualify for free shipping" : "On orders over $100"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
