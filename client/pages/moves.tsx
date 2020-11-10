/** @jsx jsx */
import { jsx } from "@emotion/core"

import React from "react"

import { OuterContainer, InnerContainer } from "../components/Containers"
import { getAllMoves as AllMoves } from "../graphql/queries/__generated__/getAllMoves"

import Link from "next/link"

import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import { capitalizeSentence, getDamageClassFromId } from "../common/utils"
import { mq } from "../common/constants"
import { Table, Td, Th, Tr } from "../components/Table"
import { TypeDisplay } from "../components/StyledDisplay"
import ScrollToTop from "../components/ScrollToTop"
import Skeleton from "@material-ui/lab/Skeleton"

const ALL_MOVES = gql`
  query getAllMoves {
    getAllMoves {
      id
      identifier
      generation_id
      type_id
      power
      pp
      accuracy
      damage_class_id
    }
  }
`
const MovesList: React.FC = () => {
  const { data, error, loading } = useQuery<AllMoves>(ALL_MOVES)

  if (error) {
    return <p>Cannot retrieve Moves</p>
  }
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
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>PP</Th>
            <Th>Power</Th>
            <Th>Accuracy</Th>
            <Th>Category</Th>
            <Th>Generation</Th>
          </Tr>
        </thead>
        <tbody>
          {[...Array(20)].fill(0).map((_, idx) => (
            <Tr key={idx} loading={1}>
              <Td colSpan={8}>{skeleton}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    )
  }

  return (
    <div
      css={{
        width: "100%",
        overflowX: "auto",
        [mq[6]]: {
          columnCount: 2,
        },
      }}
    >
      <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>PP</Th>
            <Th>Power</Th>
            <Th>Accuracy</Th>
            <Th>Category</Th>
            <Th>Generation</Th>
          </Tr>
        </thead>
        <tbody>
          {data?.getAllMoves?.map((move, idx) => (
            <Tr key={idx}>
              <Td>{move.id}</Td>
              <Td>
                <Link href={`/move/[pid]`} as={`/move/${move.id}`}>
                  <a>{capitalizeSentence(move.identifier)}</a>
                </Link>
              </Td>
              <Td>
                <TypeDisplay size="small" type={move.type_id}>
                  {move.type_id}
                </TypeDisplay>
              </Td>
              <Td>{move.pp}</Td>
              <Td>{move.power !== null ? move.power : "-"}</Td>
              <Td>{move.accuracy !== null ? move.accuracy : "-"}</Td>
              <Td>{getDamageClassFromId(move.damage_class_id)}</Td>
              <Td>{move.generation_id}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

const pCSS = { lineHeight: "2em" }

const Moves: React.FC = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <h2>Introduction</h2>
          <p css={pCSS}>
            A move, also known as an attack or technique, is the skill Pokémon
            primarily use in battle. In battle, a Pokémon uses one move each
            turn. Prior to Generation VII, some moves (including those learned
            by HM) can be used outside of battle as well, usually to remove
            obstacles or explore new areas.
          </p>
        </div>

        <div>
          <h2>Characteristics</h2>
          <p css={pCSS}>
            A Pokémon can only know between one and four moves at a time, out of
            a pool of little more than 700 total moves as of Generation VII.
            However, no single Pokémon can learn every move; each and every
            Pokémon has a predetermined set of moves (known as a movelist,
            movepool, or learnset) that they can learn that relates to the type
            and concept of the species. You can find everything about the move
            pool by going on the detailed informations Pokemon page.
            <br /> Movelist sizes vary greatly among different Pokémon; some
            Pokémon, such as Ditto and Unown, can only learn one move, while Mew
            can learn 250 moves in Generation VII, and Smeargle can possess
            almost any move due to Sketch. Evolved Pokémon generally have larger
            movelists than their pre-evolved forms but learn moves naturally at
            a slower rate or even stop learning moves via level-up entirely.
            This may provide incentive to delay a Pokémon's evolution. Most
            Legendary trios and duos have similar movelists.
            <br /> Pokémon are limited in the way that they may use their moves
            in battle. The number of times they can use each move is restricted
            by the move's Power Points. Power Points vary from move to move, but
            typically stronger moves have fewer Power Points than weaker moves.
            The amount of Power Points for each move may be altered by items
            such as PP Up. The only move that is not affected by Power Points is
            Struggle.
            <br /> Moves that do not directly inflict damage are known as status
            moves. The damaging moves are divided into physical (
            <img
              css={{ verticalAlign: "middle", margin: "0 5px" }}
              src={`/images/category/2.png`}
              alt="category physical"
            />
            ) and special (
            <img
              css={{ verticalAlign: "middle", margin: "0 5px" }}
              src={`/images/category/3.png`}
              alt="category special"
            />
            ) moves depending on the individual move's characteristics; the
            category of the move determines whether the move's damage depends on
            the user's Attack or Special Attack stat and the target's Defense or
            Special Defense. Each move has a type that determines how effective
            it is against various types of targets and whether it receives
            same-type attack bonus. It is important to note that prior to
            Generation IV, the move's category was dependent on the move's type,
            rather than a distinct variable.
            <br /> Accuracy affects whether the move misses. The damage dealt by
            a damaging move is determined by its power. Some damaging moves have
            additional effects. Most moves can target only one adjacent Pokémon,
            but some moves instead can target the user, more than one Pokémon,
            or non-adjacent Pokémon.
          </p>
        </div>

        <div>
          <h2>Learning and Unlearning</h2>
          <p css={pCSS}>
            Since Pokémon Red and Green, there have been three main methods of
            acquiring moves on a Pokémon: by leveling up, by use of Technical
            Machines and by use of Hidden Machines. Generation II added two
            further methods: Egg Moves learned through breeding, and moves
            taught by a Move Tutor. Starting in Generation VII, some Pokémon
            learn new moves when they evolve regardless of their level. Pokémon
            obtained via specific methods, such as events or purification, may
            know "special moves" that they otherwise could not learn.
            <br />
            A Pokémon can only know four moves at a time. In order to learn new
            moves once four have been learned, it must forget one old move for
            every new move. Some moves cannot be forgotten naturally, such as
            moves learned by HM. To remove these, a Trainer must incorporate the
            help of a Move Deleter. Moves that the Pokémon does not currently
            know and was able to learn at an earlier level (Generations II to
            VI) or at any level (Generation VII and above) can be learned with
            the help of a Move Reminder.
            <br />
            In Generation I only, moves learned via level-up won't be learned if
            a Pokémon gains enough EXP Points to "skip" the level on which they
            are learned, while in Generation II they were learned after leveling
            up. Since Generation III, they are learned while the Pokémon levels
            up.
            <br />
          </p>
        </div>

        <div>
          <h2>Unique Moves</h2>
          <p css={pCSS}>
            Some Pokémon have moves specific to themselves or their evolutionary
            line. These unique moves are known as signature moves. Some of these
            moves are powerful moves that only certain Legendary and Mythical
            Pokémon can learn, such as Dialga's Roar of Time or Volcanion's
            Steam Eruption. Other moves serve to highlight game mechanics or
            create unusual effects. One example is Smeargle's Sketch, which
            allows it to possess almost every conceivable move.
          </p>
        </div>

        <h2 css={{ width: "100%" }}>Move List</h2>

        <MovesList />

        <ScrollToTop visibleAtYOffset={800} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default Moves
