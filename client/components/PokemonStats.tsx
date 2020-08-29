/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useTheme } from "emotion-theming"

import React, { useState } from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { stat } from "../graphql/fragments/stat"

import { ChartData, ChartType, ChartOptions } from "chart.js"

import {
  getStatsById,
  getStatsByIdVariables,
} from "../graphql/queries/__generated__/getStatsById"

import { mq } from "../common/constants"
import { Theme } from "../common/types"
import { arrayMax, getNextMultipleOf } from "../common/utils"

import CustomChart from "./CustomChart"
import { CustomButton as Button } from "./Button"

const GET_STATS = gql`
  query getStatsById($id: Int!) {
    getStatsByPokemonId(id: $id) {
      hp {
        ...stat
      }
      attack {
        ...stat
      }
      defense {
        ...stat
      }
      special_attack {
        ...stat
      }
      special_defense {
        ...stat
      }
      speed {
        ...stat
      }
    }
  }
  ${stat}
`

interface Props {
  id: number
}

const PokemonStats: React.FC<Props> = ({ id }) => {
  const theme = useTheme<Theme>()

  const [isRadarDisplay, setChartDisplay] = useState<boolean>(false)
  const toggleChart = () => {
    setChartDisplay((prev) => !prev)
  }

  const { data, loading, error } = useQuery<
    getStatsById,
    getStatsByIdVariables
  >(GET_STATS, {
    variables: { id: id },
  })

  if (loading) return <p>Stats loading...</p>
  if (error) {
    return <p>Error </p>
  }

  let stats = Array<number>()
  for (const [key, value] of Object.entries(data.getStatsByPokemonId)) {
    if (key === "__typename") {
      continue
    }
    stats.push(value.base_stat)
  }

  const labels = [
    "HP",
    "Attack",
    "Defense",
    "Special Attack",
    "Special Defense",
    "Speed",
  ]

  const maxRadarGraphScale = getNextMultipleOf(20, arrayMax(stats))

  const getBarColor = (value: number, contrast: string) => {
    const coeff = contrast === "light" ? 0.75 : 1
    if (value <= 20) {
      return `rgba(255,0,0,${coeff})`
    } else if (value < 60) {
      return `rgba(255,130,0,${coeff})`
    } else if (value < 80) {
      return `rgba(245,230,30,${coeff})`
    } else if (value < 100) {
      return `rgba(0,150,0,${coeff})`
    } else {
      return `rgba(0,255,0,${coeff})`
    }
  }

  const radarGraphData: ChartData = {
    labels: labels,
    datasets: [
      {
        label: "Stat",
        backgroundColor: theme.chart.radar.background,
        fill: true,
        data: stats,
      },
    ],
  }

  const radarGraphOptions: ChartOptions = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 1,
      },
    },
    responsive: true,
    scale: {
      ticks: {
        beginAtZero: true,
        max: maxRadarGraphScale > 100 ? maxRadarGraphScale : 100,
        stepSize: 20,
      },
      pointLabels: {
        fontColor: theme.chart.text,
      },
      gridLines: {
        color: theme.chart.radar.lines,
      },
      angleLines: {
        color: theme.chart.radar.lines,
      },
    },
    tooltips: {
      enabled: true,
    },
  }

  const hBarGraphData: ChartData = {
    labels: labels,
    datasets: [
      {
        label: "Stat",
        data: stats,
        barPercentage: 2 / 3,
        borderWidth: 1,
        backgroundColor: stats.map((stat) => getBarColor(stat, "light")),
        borderColor: stats.map((stat) => getBarColor(stat, "dark")),
      },
    ],
  }

  const hBarGraphOptions: ChartOptions = {
    legend: {
      display: false,
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            offsetGridLines: true,
          },
          ticks: {
            fontColor: theme.chart.text,
            beginAtZero: true,
            max: maxRadarGraphScale,
            stepSize: 20,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.chart.text,
          },
        },
      ],
    },
  }

  return (
    <div
      css={(theme) => ({
        backgroundColor: theme.main.background,
        padding: "2%",
        [mq[0]]: { width: "100%", height: "100%" },
        [mq[1]]: { width: "80%", height: "80%" },
        [mq[2]]: { width: "60%", height: "60%" },
        [mq[5]]: { width: "40%", height: "40%" },
      })}
    >
      <div
        css={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Stats :</h2>
        <Button onClick={toggleChart}>Toggle</Button>
      </div>
      {isRadarDisplay ? (
        <CustomChart
          type={"radar" as ChartType}
          data={radarGraphData}
          options={radarGraphOptions}
        />
      ) : (
        <CustomChart
          type={"horizontalBar" as ChartType}
          data={hBarGraphData}
          options={hBarGraphOptions}
        />
      )}
    </div>
  )
}

export default PokemonStats
