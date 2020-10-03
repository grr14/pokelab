import styled from "@emotion/styled"
import { Theme } from "../common/types"

const Table = styled.table`
  border-collapse: collapse;
`

interface ThProps {
  theme: Theme
}

const Th = styled.th<ThProps>`
  border: ${(props) => props.theme.table.th.border};
  background-color: ${(props) => props.theme.table.th.background};
  padding: 7px;
  font-size: 1.2em;
`

interface TrProps {
  theme: Theme
  align?: "center" | "left"
  loading?: number
}

const Tr = styled.tr<TrProps>`
  text-align: center;
  border-bottom: solid 1px #e31010;
  &:last-of-type {
    border: none;
  }
  &:hover {
    background-color: ${(props) =>
      !props.loading && props.theme.table.tr.backgroundHover};
  }
`

interface TdProps {
  theme: Theme
  align?: "center" | "left"
  multiple?: boolean
}

const Td = styled.td<TdProps>`
  border-right: solid 1px #e31010;
  text-align: ${(props) => props?.align};
  padding: ${(props) => (props.multiple ? "7px" : "2px 5px")};
  &:last-of-type {
    border: none;
  }
`

export { Table, Tr, Th, Td }
