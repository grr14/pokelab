import styled from "@emotion/styled"
import { Theme } from "../common/types"

interface Props {
  theme: Theme
}

const Table = styled.table`
  border-collapse: collapse;
`

const Th = styled.th<Props>`
  border: ${(props) => props.theme.table.th.border};
  background-color: ${(props) => props.theme.table.th.background};
  padding: 7px;
`

const Tr = styled.tr<Props>`
  text-align: center;
  border-bottom: solid 1px #e31010;
  &:last-of-type {
    border: none;
  }
  &:hover {
    background-color: ${(props) => props.theme.table.tr.backgroundHover};
  }
`

const Td = styled.td`
  border-right: solid 1px #e31010;
  padding: 2px 5px;
  &:last-of-type {
    border: none;
  }
`

export { Table, Tr, Th, Td }
