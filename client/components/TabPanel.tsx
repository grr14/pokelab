import Box from "@material-ui/core/Box"
import React from "react"

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
  >
    {value === index && (
      <Box>
        <div>{children}</div>
      </Box>
    )}
  </div>
)

export default TabPanel
