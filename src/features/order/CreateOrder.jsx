import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Form, useActionData, useNavigation } from "react-router-dom"
import { getCart, getTotalCartPrice } from "../cart/cartSlice"
import EmptyCart from "../cart/EmptyCart"
import { formatCurrency } from "../../utils/helpers"
import { fetchAddress } from "../user/userSlice"

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const isSubmitting = navigation.state === "submitting"
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user)
  const isLoadingAddress = addressStatus === "loading"
  const totalCartPrice = useSelector(getTotalCartPrice)
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0
  const totalPrice = totalCartPrice + priorityPrice

  const formErrors = useActionData()
  const cart = useSelector(getCart)

  if (!cart.length) return <EmptyCart />

  return (
    <div className="m-8 text-3xl">
      <h2 className="my-12 font-bold">Ready to order? Let's go!</h2>

      <Form className="flex flex-col justify-center gap-8" method="POST">
        <div className="formstyle">
          <label className="lableSize">First Name</label>
          <input
            className="customInput flex-1"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="formstyle">
          <label className="lableSize">Phone number</label>
          <input
            className="customInput flex-1"
            type="tel"
            name="phone"
            required
          />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div className="formstyle">
          <label className="lableSize">Address</label>
          <input
            className="customInput flex-1"
            type="text"
            name="address"
            disabled={isLoadingAddress}
            defaultValue={address}
            required
          />
          <button
            className="customButton absolute right-9 h-16 text-xl"
            disabled={isLoadingAddress}
            onClick={(e) => {
              e.preventDefault()
              dispatch(fetchAddress())
            }}
          >
            Get Position
          </button>
        </div>
        <div className="inline-flex justify-end">
          {addressStatus === "error" && (
            <p className="rounded-lg bg-red-500/20 p-3 text-xl tracking-wide text-red-900">
              {errorAddress}
            </p>
          )}
        </div>

        <div className="mt-5 flex gap-5">
          <input
            className="h-8 w-8"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ""
            }
          />
          <button
            className="customButton mt-5"
            disabled={isSubmitting || isLoadingAddress}
          >
            {isSubmitting
              ? "Placing Order.......!!!!!"
              : `Order now for ${formatCurrency(totalPrice)}`}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CreateOrder
