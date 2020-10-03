/** @jsx jsx */
import { jsx } from "@emotion/core"

import React from "react"
import { Checkbox as MuiCheckbox, FormControlLabel } from "@material-ui/core"

interface CheckBoxProps {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: string
  name?: string
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  onChange,
  label,
  name,
}) => {
  return (
    <FormControlLabel
      css={(theme) => ({
        "& > .MuiTypography-body1": {
          fontFamily: `${theme.body.font} !important`,
        },
        "& .MuiCheckbox-root": {
          color: "#E31010 !important",
        },
      })}
      control={
        <MuiCheckbox checked={checked} onChange={onChange} name={name} />
      }
      label={label}
      labelPlacement="end"
    />
  )
}

export default CheckBox
