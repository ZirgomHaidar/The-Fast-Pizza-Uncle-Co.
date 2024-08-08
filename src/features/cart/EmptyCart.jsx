import { Link } from "react-router-dom"
import Loader from "../../ui/Loader"

function EmptyCart() {
  return (
    <div className="px-4 py-3 text-2xl">
      <Link to="/menu">&larr; Back to menu</Link>

      <p className="-inset-0 mt-7 flex items-baseline justify-center text-5xl font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
      <Loader icon="onlyIcon" />
    </div>
  )
}

export default EmptyCart
