import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    console.log(window)
    window.alert("?")
  })
  return <div>321</div>
}
