import CreateUser from "../features/user/CreateUser"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Home() {
  const username = useSelector((state) => state.user.username)
  return (
    <div className="flex flex-col items-center justify-center p-32">
      <h1 className="mb-5 text-center text-5xl font-bold tracking-wider">
        The best pizza.
        <br />
        <span className="text-amber-400">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Link
          to={"/menu"}
          className="mt-5 rounded-full bg-yellow-500 p-5 font-bold uppercase"
        >
          Continue Ordering, {username}
        </Link>
      )}
    </div>
  )
}

export default Home
