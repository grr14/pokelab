/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Tabs as MuiTabs } from "@material-ui/core"

import Box from "@material-ui/core/Box"
import React from "react"
import { mq } from "../common/constants"

interface TabsProps {
  value: unknown
  onChange: (event: React.ChangeEvent<{}>, value: unknown) => void
  children: React.ReactNode
}

const Tabs: React.FC<TabsProps> = ({ children, value, onChange }) => (
  <MuiTabs
    value={value}
    onChange={onChange}
    variant="scrollable"
    scrollButtons="on"
    aria-label="scrollable on tabs"
    css={(theme) => ({
      backgroundColor: theme.card.background,
      "&>div.MuiTabs-scroller.MuiTabs-scrollable>span": {
        backgroundColor: "#E31010 !important",
      },
    })}
  >
    {children}
  </MuiTabs>
)

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

export { Tabs, TabPanel }
