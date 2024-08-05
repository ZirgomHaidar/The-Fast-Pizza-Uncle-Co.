import { Outlet, useNavigation } from "react-router-dom"
import CartOverview from "../features/cart/CartOverview"
import Header from "./Header"
import Loader from "./Loader"

function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"

  return (
    <>
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>
      <CartOverview />
    </>
  )
}

export default AppLayout
