import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "https://constable-fb8c975417.herokuapp.com/constable/dev/",
  secret: "thisismysupersecrettext",
});

export { prisma as default }
