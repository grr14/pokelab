import React, { useRef, useEffect } from "react"
import Chart, { ChartType, ChartData, ChartOptions } from "chart.js"

interface ChartProps {
  type: ChartType
  data: ChartData
  options: ChartOptions
}

const CustomChart: React.FC<ChartProps> = ({ type, data, options }) => {
  const chartRef = useRef(null)
  let chart: Chart = null

  useEffect(() => {
    if (chartRef.current) {
      chart = new Chart(chartRef.current.getContext("2d"), {
        type,
        data,
        options,
      })
    }
    return () => {
      if (chartRef.current) {
        chart.destroy()
      }
    }
  }, [chartRef.current, type, data, options])

  return (
    <React.Fragment>
      <canvas ref={chartRef} />
    </React.Fragment>
  )
}

export default CustomChart
