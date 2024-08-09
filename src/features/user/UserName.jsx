import { useSelector } from "react-redux"

function UserName() {
  const username = useSelector((state) => state.user.username)
  return <div className="text-xl font-medium">{username}</div>
}

export default UserName
