import React from "react"

export const wrapPageElement = ({ element, props }) => {
  return (
    <div>
      <header>
        <h1>Headline</h1>
      </header>
      {element}
    </div>
  )
}
