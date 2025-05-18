// import { MenuItem } from "@/types/restaurantType";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
// import { useCartStore } from "@/store/useCartStore";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero_pizza.png";


const AvailableMenu = () => {
  //const { addToCart } = useCartStore();
  const navigate = useNavigate();
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        {/* {menus.map((menu: MenuItem) => ( */}
        {["A", "B", "C"].map(() => (
          <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {/* {menu.name} */} Name
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {/* {menu.description} */}
                Lorem ipsum dolor sit amet.
              </p>
              <h3 className="text-lg font-semibold mt-4">
                Price: <span className="text-[#D19254]">
                  {/* ₹{menu.price} */}
                  45$
                </span>
              </h3>
            </CardContent>
            <CardFooter className="p-4">
              <Button
                onClick={() => {
                  // addToCart(menu);
                  navigate("/cart");
                }}
                className="w-full bg-[#D19254] hover:bg-[#D18C47]"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AvailableMenu;