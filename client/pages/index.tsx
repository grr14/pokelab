/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import Link from "next/link"
import { github } from "../common/constants"
import { capitalizeFirstLetter } from "../common/utils"
import { InnerContainer, OuterContainer } from "../components/Containers"

export default function Home() {
  const menuItems = ["pokemons", "types", "abilities", "moves"]
  const aCss = css`
    font-weight: bold;
  `
  return (
    <OuterContainer>
      <InnerContainer>
        <h1 css={{ textAlign: "center" }}>Welcome on Pokelab.xyz !</h1>
        <div css={{ width: "100%" }}>
          <h2 css={{ color: "#E31010" }}>Presentation</h2>
          <p>
            On this website you can find informations about Pokemon and its wide
            universe. Data is available for the first 7 generations.
          </p>
          <p>Feel free to explore:</p>
          <ul css={{ listStyle: "square" }}>
            {menuItems.map((el, idx) => (
              <li key={idx}>
                <Link href={`/${el}`}>
                  <a>{capitalizeFirstLetter(el)}</a>
                </Link>
              </li>
            ))}
          </ul>

          <p>
            If you know for which specific entity you are looking, you can also
            directly access it by using the searchbar.
          </p>

          <div css={{ marginTop: "30px" }}>
            <h2 css={{ color: "#E31010" }}>About the Website</h2>
            <p>
              The website is made with{" "}
              <a href="https://reactjs.org/" target="_blank" css={aCss}>
                React
              </a>{" "}
              /{" "}
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                css={aCss}
              >
                Typescript
              </a>{" "}
              using the framework{" "}
              <a href="https://nextjs.org/" target="_blank" css={aCss}>
                nextjs
              </a>
              .
            </p>
            <p>
              Back-end is a self-made{" "}
              <a
                href="https://www.apollographql.com/"
                target="_blank"
                css={aCss}
              >
                Apollo Graphql
              </a>{" "}
              server querying data from a postgres database.
            </p>
            <p>
              All the credit for retrieving the original pokemon datas goes to{" "}
              <a
                href="https://github.com/veekun/pokedex"
                target="_blank"
                css={aCss}
              >
                veekun
              </a>
              .
            </p>
            <p>
              You can find the entirity of the code (back-end + front-end +
              database) on{" "}
              <a href={github} target="_blank" css={aCss}>
                my github
              </a>
            </p>
          </div>
        </div>
        <h1 css={{ textAlign: "center" }}>Happy Browsing !</h1>
      </InnerContainer>
    </OuterContainer>
  )
}
