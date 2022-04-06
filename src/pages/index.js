import React from "react"
import { navigate } from "@reach/router"

export default function Home() {
  return (
    <div>
      Hello world!
      <button onClick={() => navigate('#param1="1"')}>click</button>
    </div>
  )
}
