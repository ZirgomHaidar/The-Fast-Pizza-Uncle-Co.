import { useDispatch } from "react-redux"
import { decItemQuantity, incItemQuantity } from "./cartSlice"

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch()

  return (
    <div className="m-5 space-x-3 rounded-full bg-zinc-300">
      <button
        className="roundbutton"
        onClick={() => dispatch(decItemQuantity(pizzaId))}
      >
        -
      </button>
      <span>{currentQuantity}</span>
      <button
        className="roundbutton"
        onClick={() => dispatch(incItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  )
}

export default UpdateItemQuantity
