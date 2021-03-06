/** @jsx jsx */
import { jsx } from "@emotion/core"

import React from "react"

import { OuterContainer, InnerContainer } from "../components/Containers"
import Error from "../pages/_error"

import Link from "next/link"

import { getAllAbilities as AllAbilities } from "../graphql/queries/__generated__/getAllAbilities"

import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import { capitalizeSentence } from "../common/utils"
import { mq } from "../common/constants"
import { Table, Td, Th, Tr } from "../components/Table"
import ScrollToTop from "../components/ScrollToTop"
import Skeleton from "@material-ui/lab/Skeleton"

const GET_ALL_ABILITIES = gql`
  query getAllAbilities {
    getAllAbilities {
      id
      identifier
      generation
    }
  }
`

const AbilitiesList: React.FC = () => {
  const { data, loading, error } = useQuery<AllAbilities>(GET_ALL_ABILITIES)

  if (loading) {
    const skeleton = (
      <Skeleton
        variant="text"
        css={(theme) => ({
          backgroundColor: theme.card.background,
        })}
      />
    )

    return (
      <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Ability name</Th>
            <Th>Generation</Th>
          </Tr>
        </thead>
        <tbody>
          {[...Array(20)].fill(0).map((_, idx) => (
            <Tr key={idx} loading={1}>
              <Td colSpan={3}>{skeleton}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    )
  }

  if (error) {
    return <Error statusCode={404} />
  }

  const abilityTable = data.getAllAbilities.map((ability, idx) => (
    <Tr key={idx}>
      <Td css={{ width: "10%" }}>{ability.id}</Td>
      <Td css={{ width: "80%" }}>
        <Link href={`/ability/[pid]`} as={`/ability/${ability.id}`}>
          <a
            css={{
              "&:hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            {capitalizeSentence(ability.identifier, ["of"])}
          </a>
        </Link>
      </Td>
      <Td css={{ width: "10%" }}>{ability.generation}</Td>
    </Tr>
  ))

  return (
    <div
      css={{
        width: "100%",
        [mq[5]]: {
          columnCount: 2,
        },
      }}
    >
      <Table
        css={{
          maxWidth: "600px",
        }}
      >
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Ability name</Th>
            <Th>Generation</Th>
          </Tr>
        </thead>
        <tbody>{abilityTable}</tbody>
      </Table>
    </div>
  )
}

const Abilities: React.FC = () => {
  const pCSS = { lineHeight: "2em" }

  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <div>
            <h2>Introduction</h2>
            <p css={pCSS}>
              An Ability is a game mechanic introduced in the third Generation
              that provides a passive effect in battle or in the Overworld.
              Individual Pokémon may have only one Ability at a time. Prior to
              the sixth Generation, an Ability could not be changed after a
              Pokémon was obtained except by Evolution (where the new Ability is
              determined by the former Ability) and form change. Not every
              Ability is entirely beneficial, some of them are hindering.
            </p>
          </div>

          <div>
            <h2>Mechanic</h2>
            <p css={pCSS}>
              Some species of Pokémon have multiple possible Abilities. The most
              Abilities any species or form has is three: two normal Abilities
              and one Hidden Ability. In most wild Pokémon encounters, the
              Pokémon's Ability will be one of its non-Hidden Abilities (each
              having an even chance of appearing if the species has two). Hidden
              Abilities were introduced in the 5th Generation; they are
              relatively rare and usually require some type of special
              encounter.
            </p>
          </div>
          <div>
            <h2>List of Abilities</h2>
            <AbilitiesList />
          </div>
        </div>
        <ScrollToTop visibleAtYOffset={600} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default Abilities
