import { useFetcher } from "react-router-dom"

function UpdateOrder() {
  const fetcher = useFetcher()
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <button className="customButton">Make Priority</button>
    </fetcher.Form>
  )
}

export default UpdateOrder
