import gql from "graphql-tag"
export const stat = gql`
  fragment stat on Stat {
    base_stat
    effort
  }
`
