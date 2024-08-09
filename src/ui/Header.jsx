import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/user/UserName"

function Header() {
  return (
    <header className="inline-flex items-center justify-around bg-amber-500 p-4">
      <Link className="text-3xl tracking-widest" to="/">
        THE FAST PIZZA UNCLE Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  )
}

export default Header
