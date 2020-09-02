/** @jsx jsx */
import { jsx } from "@emotion/core"
import { github } from "../common/constants"

const Footer = () => {
  return (
    <div
      css={{
        padding: "15px 0 5px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      GRR14 -{" "}
      <a href={github}>
        <span> Github</span>
      </a>
    </div>
  )
}
export default Footer
