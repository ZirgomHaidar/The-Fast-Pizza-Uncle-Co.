import { useDispatch, useSelector } from "react-redux"
import { formatCurrency } from "../../utils/helpers"
import { addItem, getCurrentQuantityById } from "../cart/cartSlice"
import DeleteItem from "../cart/DeleteItem"
import UpdateItemQuantity from "../cart/UpdateItemQuantity"

function MenuItem({ pizza }) {
  const dispatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza
  const currentQuantity = useSelector(getCurrentQuantityById(id))
  const isInCart = currentQuantity > 0

  function handleAddItemToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem))
  }

  return (
    <li
      className={`m-2 flex flex-col gap-4 rounded-md bg-gray-400/20 p-4 drop-shadow-xl duration-300 hover:bg-gray-400/40 ${soldOut ? "grayscale hover:bg-slate-400/10" : ""}`}
    >
      <img src={imageUrl} alt={name} className="relative rounded-lg" />
      {!soldOut && isInCart && (
        <div className="absolute top-60 flex h-6 flex-row-reverse items-center pl-6">
          <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
          <DeleteItem pizzaId={id} />
        </div>
      )}
      <div className="inline-flex flex-1 flex-col">
        <div>
          <p className="mb-2 text-xl uppercase">{name}</p>
          <p className="pb-3 text-[1rem]">{ingredients.join(", ")}</p>
        </div>
      </div>
      <div className="inline-flex items-end justify-between uppercase">
        {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        {!soldOut && (
          <button className="customButton" onClick={handleAddItemToCart}>
            add to cart
          </button>
        )}
      </div>
    </li>
  )
}

export default MenuItem
