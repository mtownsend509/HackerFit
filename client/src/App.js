import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


import Signup from "./components/Signup";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewRoutine from "./pages/NewRoutine";
import RoutineLog from "./pages/RoutineLog";
import Profile from "./pages/Profile";


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql"});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div name="App" className="flex h-screen flex-col transition duration-300 ">
          <Header />
          <div className="flex-1 bg-white dark:bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 ">
            <Routes>
            <Route path="/" element={<Profile />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/NewRoutine" element={<NewRoutine />} />
              <Route path="/RoutineLog" element={<RoutineLog />} />
            </Routes>
            </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
