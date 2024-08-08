import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getCart, clearCart } from "./cartSlice"
import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"

function Cart() {
  const username = useSelector((state) => state.user.username)
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  if (!cart.length) return <EmptyCart />

  return (
    <div className="p-6">
      <Link className="text-2xl duration-300 hover:tracking-widest" to="/menu">
        &larr; Back to menu
      </Link>

      <h2 className="mt-10 text-3xl">
        Your cart, <span className="text-4xl font-semibold">{username}</span>
      </h2>

      <ul className="divide-y divide-black/5 border-b border-t border-black/5">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-8">
        <Link className="customButton" to="/order/new">
          Order pizzas
        </Link>
        {cart && (
          <button
            className="rounded-full bg-slate-300 p-5 font-bold uppercase"
            onClick={() => dispatch(clearCart())}
          >
            Clear cart
          </button>
        )}
      </div>
    </div>
  )
}

export default Cart
