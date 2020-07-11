import styled from "@emotion/styled"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"

const StyledFavoriteIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;

  &:hover {
    color: red;
  }
`

const FavoriteIcon = () => {
  return (
    <StyledFavoriteIcon>
      <StarBorderOutlinedIcon style={{ fontSize: 30 }} />
    </StyledFavoriteIcon>
  )
}

export default FavoriteIcon
