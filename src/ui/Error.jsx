import { useNavigate, useRouteError } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()
  const error = useRouteError()

  return (
    <div className="h-full content-center items-center space-y-8 text-center text-3xl">
      <h1>Something went wrong 😢</h1>
      <p>{`ERROR: ${error.data || error.message}`}</p>
      <button className="customButton text-xl" onClick={() => navigate(-1)}>
        &larr; Go back
      </button>
    </div>
  )
}

export default NotFound
