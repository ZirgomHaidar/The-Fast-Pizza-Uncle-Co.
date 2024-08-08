import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice"
import { formatCurrency } from "../../utils/helpers"

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)

  if (!totalCartQuantity) return null
  return (
    <div className="flex items-center justify-between bg-slate-950 p-5 text-xl uppercase text-slate-200">
      <p className="space-x-10">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link
        className="items-center transition-all duration-300 hover:tracking-widest"
        to="/cart"
      >
        Open cart &rarr;
      </Link>
    </div>
  )
}

export default CartOverview
