/** @jsx jsx */
import { jsx } from "@emotion/core"

import Box from "@material-ui/core/Box"
import React from "react"
import { mq } from "../common/constants"

interface TabPanelProps {
  children: React.ReactNode
  index: number
  value: number
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, value }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    css={(theme) => ({
      [mq[1]]: {
        border: `solid 1px ${theme.card.background}`,
        borderTop: "none",
        padding: "1%",
      },
    })}
  >
    {value === index && (
      <Box>
        <div>{children}</div>
      </Box>
    )}
  </div>
)

export default TabPanel
