/** @jsx jsx */
import { jsx } from "@emotion/core"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"

const FavoriteIcon = () => {
  return (
    <div
      css={{
        position: "absolute",
        top: "5px",
        right: "10px",

        "&:hover": {
          color: "#E31010",
        },
      }}
    >
      <StarBorderOutlinedIcon css={{ fontSize: 30 }} />
    </div>
  )
}

export default FavoriteIcon
