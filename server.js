import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schema/schemaGql.js";

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { MONGO_URI, JWT_SECRET } from "./config/config.js";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  strictQuery: false,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongodb");
});

mongoose.connection.on("error", (err) => {
  console.log("error connecting", err);
});

//import models here
import "./models/Quotes.js";
import "./models/User.js";

import resolvers from "./resolver/resolvers.js";


const context = ({req})=>{
  const { authorization } = req.headers;
  if(authorization){
   const {userId} = jwt.verify(authorization,JWT_SECRET)
   return {userId} // to resolvers 
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  // run each time before -> resolvers
  context: context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
