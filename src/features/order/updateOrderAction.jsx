import { updateOrder } from "../../services/apiRestaurant"

export async function updateOrderAction({ request, params }) {
  const data = { priority: true }
  await updateOrder(params.orderId, data)
  return null
}
