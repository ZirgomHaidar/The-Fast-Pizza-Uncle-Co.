import { useSelector } from "react-redux"
import { formatCurrency } from "../../utils/helpers"
import DeleteItem from "./DeleteItem"
import UpdateItemQuantity from "./UpdateItemQuantity"
import { getCurrentQuantityById } from "./cartSlice"

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

  return (
    <li className="flex items-center justify-between p-5 text-2xl">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex flex-row items-center gap-4">
        <div>
          <p>{formatCurrency(totalPrice)}</p>
        </div>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <span className="text-xl">
          <DeleteItem pizzaId={pizzaId} />
        </span>
      </div>
    </li>
  )
}

export default CartItem
