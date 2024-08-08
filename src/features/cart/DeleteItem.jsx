import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch()

  return (
    <button
      className="customButton p-3"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      delete
    </button>
  )
}

export default DeleteItem
