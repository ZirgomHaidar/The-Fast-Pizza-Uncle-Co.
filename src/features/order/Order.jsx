import { useFetcher, useLoaderData } from "react-router-dom"
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers"
import OrderItem from "./OrderItem"
import { useEffect } from "react"
import UpdateOrder from "./UpdateOrder"

function Order() {
  const order = useLoaderData()
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order
  const deliveryIn = calcMinutesLeft(estimatedDelivery)

  const fetcher = useFetcher()

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu")
    },
    [fetcher],
  )

  return (
    <div className="m-10 flex flex-col">
      <div className="flex items-center justify-between tracking-wider">
        <h2 className="text-3xl font-bold">Order #{id} status</h2>

        <div className="space-x-7 font-bold tracking-widest text-white">
          {priority && (
            <span className="customButton bg-red-600/90">Priority</span>
          )}
          <span className="customButton bg-green-500">{status} order</span>
        </div>
      </div>

      <div className="my-10 inline-flex justify-between bg-slate-500/30 p-8 text-xl tracking-widest">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>
      <div className="divide-y divide-black/10 border-b border-t border-black/10">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId)
                ?.ingredients ?? []
            }
          />
        ))}
      </div>

      <div className="my-10 space-y-3 bg-slate-500/30 p-8 text-xl font-bold tracking-wide text-black/70">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="text-2xl tracking-wide text-black">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  )
}

export default Order
