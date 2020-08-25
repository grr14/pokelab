import { gql } from "apollo-boost"
export const stat = gql`
  fragment stat on Stat {
    base_stat
    effort
  }
`
