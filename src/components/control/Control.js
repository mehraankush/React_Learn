import React from 'react';

const UserContext = React.createContext()
// this refre as  a default value if anything is not provied this value will bw displayed
// const UserContext = React.createContext('hello world')

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;


export { UserProvider, UserConsumer };
export default UserContext;