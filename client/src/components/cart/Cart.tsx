import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";
//import { useCartStore } from "@/store/useCartStore";
//import { CartItem } from "@/types/cartType";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  // const { cart, decrementQuantity, incrementQuantity } = useCartStore();

  // let totalAmount = cart.reduce((acc, ele) => {
  //   return acc + ele.price * ele.quantity;
  // }, 0);
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="link">Clear All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {cart.map((item: CartItem) => ( */}
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage
                  // src={item.image}
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell>
              {/* {item.name} */}
              Chicken
            </TableCell>
            <TableCell>
              {/* {item.price} */}
              500
            </TableCell>
            <TableCell>
              <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md">
                <Button
                  // onClick={() => decrementQuantity(item._id)}
                  size={"icon"}
                  variant={"outline"}
                  className="rounded-full bg-gray-200"
                >
                  <Minus />
                </Button>
                <Button
                  size={"icon"}
                  className="font-bold border-none"
                  disabled
                  variant={"outline"}
                >
                  {/* {item.quantity} */}
                  5
                </Button>
                <Button
                  // onClick={() => incrementQuantity(item._id)}
                  size={"icon"}
                  className="rounded-full bg-[#D19254] hover:bg-[#D18C47]"
                  variant={"outline"}
                >
                  <Plus />
                </Button>
              </div>
            </TableCell>
            <TableCell>
              {/* {item.price * item.quantity} */}
              500
            </TableCell>
            <TableCell className="text-right">
              <Button size={"sm"} className="bg-[#D19254] hover:bg-[#D18C47]">
                Remove
              </Button>
            </TableCell>
          </TableRow>
          {/* ))} */}
        </TableBody>
        <TableFooter>
          <TableRow className="text-2xl font-bold">
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">
              {/* {totalAmount} */} 500
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end my-5">
        <Button
          onClick={() => setOpen(true)}
          className="bg-[#D19254] hover:bg-[#D18C47]"
        >
          Proceed To Checkout
        </Button>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;