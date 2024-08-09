import { formatCurrency } from "../../utils/helpers"

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item

  return (
    <div className="space-y-1 p-6 text-2xl">
      <div className="flex items-center justify-between">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xl italic tracking-wider text-slate-400">
        {isLoadingIngredients ? "Loading....!!" : ingredients.join(", ")}
      </p>
    </div>
  )
}

export default OrderItem
