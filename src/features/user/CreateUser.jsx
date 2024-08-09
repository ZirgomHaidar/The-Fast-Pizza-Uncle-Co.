import { useState } from "react"
import { updateName } from "./userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function CreateUser() {
  const [username, setUsername] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (!username) return
    dispatch(updateName(username))
    navigate("/menu")
  }

  return (
    <form
      className="inline-flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <p className="mt-5 text-3xl font-medium">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        className="mt-5 w-80 rounded-full border border-slate-400/25 p-4 pl-7 tracking-widest placeholder:text-slate-400 focus:outline-none focus:ring-2 disabled:cursor-not-allowed"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button className="mt-5 rounded-full bg-yellow-500 p-5 font-bold uppercase">
            Start ordering
          </button>
        </div>
      )}
    </form>
  )
}

export default CreateUser
