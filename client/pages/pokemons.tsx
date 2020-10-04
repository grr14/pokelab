/** @jsx jsx */
import { jsx } from "@emotion/core"
import { faSearchMinus, faSearchPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FormControl, FormGroup, TextField } from "@material-ui/core"
import FormLabel from "@material-ui/core/FormLabel/FormLabel"

import React, { useEffect, useState } from "react"
import {
  GENERATIONS,
  LAST_POKEMON_ID,
  mq,
  POKEDEX_RANGES,
  TYPES_NAMES,
} from "../common/constants"
import { PokedexRange } from "../common/types"
import {
  capitalizeFirstLetter,
  getGenerationLabelFromId,
  getRegionNameFromGenerationId,
} from "../common/utils"
import { CustomButton } from "../components/Button"
import CheckBox from "../components/Checkbox"

import { OuterContainer, InnerContainer } from "../components/Containers"
import Pokedex from "../components/Pokedex"
import ScrollToTop from "../components/ScrollToTop"
import SelectInput from "../components/SelectInput"

const Pokemons = () => {
  const initialRange: PokedexRange = { firstPokemonId: 1, lastPokemonId: 151 }
  const [range, setPokedexRange] = useState<PokedexRange>(initialRange)

  const [generation, setGeneration] = useState<GENERATIONS>(GENERATIONS.I)
  const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setGeneration(event.target.value as GENERATIONS)
  }

  const [checked, setChecked] = useState(true)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const [searchText, setSearchText] = useState("")
  const onTextFieldChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearchText(e.target.value)
  }

  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch((prev) => !prev)
  }

  const initialTypesState = {
    normal: true,
    fighting: true,
    flying: true,
    poison: true,
    ground: true,
    rock: true,
    bug: true,
    ghost: true,
    steel: true,
    fire: true,
    water: true,
    grass: true,
    electric: true,
    psychic: true,
    ice: true,
    dragon: true,
    dark: true,
    fairy: true,
  }
  const allFalse = Object.keys(initialTypesState).reduce((acc, key) => {
    acc[key] = false
    return acc
  }, {})
  const [types, setTypes] = useState<{ [key: string]: boolean }>(
    initialTypesState
  )
  const uncheckAll = () => {
    setTypes(allFalse)
  }
  const checkAll = () => {
    setTypes(initialTypesState)
  }
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTypes({ ...types, [event.target.name]: event.target.checked })
  }

  useEffect(() => {
    if (generation === GENERATIONS.ALL) {
      setPokedexRange({ firstPokemonId: 1, lastPokemonId: LAST_POKEMON_ID })
    } else {
      setPokedexRange(POKEDEX_RANGES[generation - 1])
    }
  }, [generation])

  return (
    <OuterContainer>
      <InnerContainer>
        <div
          css={{
            width: "100%",
            margin: "30px 0 0 0",

            height: "auto",
            minHeight: "3em",
            border: "solid 1px #E31010",
            display: "flex",
            fontSize: "1.2em",
            [mq[0]]: { flexDirection: "column", padding: "20px 5%" },
            [mq[5]]: {
              padding: "40px 5%",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <div
            css={{
              display: "flex",
              alignItems: "center",
              [mq[0]]: { marginBottom: "15px" },
              [mq[5]]: { marginBottom: 0 },
            }}
          >
            <span css={{ marginRight: "10px" }}>Search By Name:</span>
            <TextField
              css={(theme) => ({
                width: "auto",
                "& .MuiInputBase-root": {
                  color: `${theme.body.text}`,
                  fontFamily: `${theme.body.font}`,
                },
                "& > div > fieldset": {
                  borderColor: "#E31010cc !important",
                },
                "& label.Mui-focused": {
                  color: "#E31010",
                },
                "&& .MuiInput-underline:hover:before": {
                  borderColor: "#E31010",
                },
                "& .MuiFormLabel-root": {
                  color: "#E31010cc",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#E31010",
                  },
                },
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid #E31010",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "2px solid #E31010",
                },
              })}
              onChange={onTextFieldChange}
            />
          </div>

          <div
            css={{
              display: "flex",
              alignItems: "center",
              [mq[0]]: { marginBottom: "15px" },
              [mq[5]]: { marginBottom: 0 },
            }}
          >
            <span css={{ marginRight: "10px" }}>Select Generation:</span>
            <SelectInput
              value={generation}
              menuChoices={[...Array(8).keys()]}
              onChange={onChange}
              menuChoicesDisplay={getGenerationLabelFromId}
            />
          </div>

          <CustomButton
            onClick={toggleAdvancedSearch}
            css={{
              maxWidth: "250px",
              [mq[0]]: { alignSelf: "center" },
              [mq[5]]: { alignSelf: "unset" },
            }}
          >
            <div css={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={showAdvancedSearch ? faSearchMinus : faSearchPlus}
                css={{ marginRight: "10px" }}
              />
              <span>
                {showAdvancedSearch ? "  Hide Search  " : "Advanced Search"}
              </span>
            </div>
          </CustomButton>

          {showAdvancedSearch && (
            <div
              css={{
                width: "100%",
                marginTop: "30px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                css={{
                  width: "100%",
                }}
              >
                <CheckBox
                  checked={checked}
                  onChange={handleChange}
                  label={"Display National ID"}
                />
              </div>
              <div
                css={{
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <FormControl component="fieldset">
                  <div
                    css={{
                      width: "100%",
                      display: "flex",

                      [mq[0]]: { flexDirection: "column" },
                      [mq[5]]: {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      },
                    }}
                  >
                    <FormLabel
                      component="legend"
                      css={(theme) => ({
                        color: `${theme.body.text} !important`,
                        fontFamily: `${theme.body.font} !important`,
                        fontSize: "1em",
                        height: "100%",
                        [mq[0]]: { marginBottom: "15px" },
                        [mq[5]]: { marginBottom: 0 },
                      })}
                    >
                      Pick the Type:
                    </FormLabel>
                    <div
                      css={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        marginBottom: 0,
                      }}
                    >
                      <CustomButton
                        onClick={uncheckAll}
                        css={{ marginBottom: "10px" }}
                      >
                        Uncheck All
                      </CustomButton>
                      <CustomButton onClick={checkAll}>Check All</CustomButton>
                    </div>
                  </div>

                  <FormGroup
                    css={{
                      flexDirection: "row",
                      marginTop: "15px",
                    }}
                  >
                    {TYPES_NAMES.map((type, idx) => (
                      <CheckBox
                        key={idx}
                        checked={types[type]}
                        onChange={handleTypeChange}
                        name={type}
                        label={capitalizeFirstLetter(type)}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </div>
            </div>
          )}
        </div>

        <h1 css={{ fontSize: "3em" }}>
          {getRegionNameFromGenerationId(generation)} Pokedex
        </h1>

        <Pokedex
          range={range}
          checked={checked}
          textToFilter={searchText}
          typeToFilter={types}
        />

        <ScrollToTop visibleAtYOffset={500} />
      </InnerContainer>
    </OuterContainer>
  )
}

export default Pokemons
