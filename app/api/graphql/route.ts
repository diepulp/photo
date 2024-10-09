import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { NextRequest } from 'next/server'

import neo4j from 'neo4j-driver'
import { Neo4jGraphQL } from '@neo4j/graphql'
import { typeDefs } from '@/app/graphql/schema'
import { OGM } from '@neo4j/graphql-ogm'

// Neo4j driver
const driver = neo4j.driver(
  process.env.NEO4J_URI as string,
  neo4j.auth.basic(process.env.NEO4J_USER as string, process.env.NEO4J_PASSWORD as string),
)

const neoSchema = new Neo4jGraphQL({ typeDefs, driver })
const ogm = new OGM({ typeDefs, driver })

await ogm.init()

const initServer = async () => {
  console.log('Building GQL serer')
  const schema = await neoSchema.getSchema()
  // console.log(schema)
  return schema
}

/**
 * Apollo Server
 */
const server = new ApolloServer({
  schema: await initServer(),
  context: async ({ req }) => {
    return {
      ogm,
      req,
    }
  },
})

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
})

export { handler as GET, handler as POST }

// npx diagnose-endpoint@1.1.0 --endpoint="http://localhost:3000/api/graphql"
