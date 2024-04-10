import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = () => {
  return new ApolloClient({
    uri: "https://dashboard.stepzen.com/explorer?endpoint=api%2Fwinsome-peahen",
    headers: {
        Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    },
    cache: new InMemoryCache(),
  });
};