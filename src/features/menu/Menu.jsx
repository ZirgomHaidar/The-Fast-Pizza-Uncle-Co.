import { useLoaderData } from "react-router-dom"
import MenuItem from "./MenuItem"

function Menu() {
  const menu = useLoaderData()
  return (
    <ul className="grid grid-cols-5 gap-4 px-32 py-10">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  )
}

export default Menu
