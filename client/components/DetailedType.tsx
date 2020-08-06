/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getTypeFromId } from "../common/utils"

interface Props {
  id: number
}

const DetailedType: React.FC<Props> = ({ id }) => {
  console.log("SALUT")
  return (
    <div
      className="outerContainer"
      css={{
        flex: 1,
        padding: "2%",
        display: "flex",
      }}
    >
      <div
        className="innerContainers"
        css={{
          flex: 1,
          border: "1px solid black",
          borderRadius: "30px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="typeRelationGrid"
          css={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
          }}
        >
          <div css={{ backgroundColor: "orange" }}>test</div>
          <div css={{ backgroundColor: "yellow" }}>test</div>
          <div css={{ backgroundColor: "green" }}>test</div>
          <div css={{ backgroundColor: "cyan" }}>test</div>
          <div css={{ backgroundColor: "lightpink" }}>test</div>
          <div css={{ backgroundColor: "lightblue" }}>test</div>
        </div>

        <div className="sametypepokemon" css={{ backgroundColor: "lavender" }}>
          List...
        </div>
      </div>
    </div>
  )
}

export default DetailedType
