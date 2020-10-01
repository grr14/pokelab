/** @jsx jsx */
import { jsx } from "@emotion/core"
import { github } from "../common/constants"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div
      css={{
        padding: "10px 0 5px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.75em",
      }}
    >
      <div css={{ marginRight: "15px" }}>
        {" "}
        GRR14 -{" "}
        <a href={github}>
          <span> Github</span>
        </a>
      </div>
      <div>
        <span>
          Pokémon and All Respective Names are Trademark© of Nintendo 1996-
          {year}
        </span>
      </div>
    </div>
  )
}
export default Footer
