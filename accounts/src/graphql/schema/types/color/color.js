import { gql } from 'apollo-server-fastify'

const Color = gql`
  type Color {
    name: String,
  }
`

export const resolver = {}

export default [Color]