import styled from "@emotion/styled"
import StyledMainGrid from "./MainGrid"

const StyledMainContent = styled.div`
  background-color: red;
  padding: 0 1%;
  flex: 1;
`

import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const TestCard = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

import CardContainer from "./CardContainer"

const MainContent: React.FC = () => {
  return (
    <StyledMainContent>
      <StyledMainGrid>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
        <CardContainer>
          <TestCard />
        </CardContainer>
      </StyledMainGrid>
    </StyledMainContent>
  )
}

export default MainContent
