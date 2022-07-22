import React,{useState} from "react";

// 1 definimos la estructura
const UserContext = React.createContext({
  user: "",
  changeName: () => {}
});

// 2 funcion que regresa el contexto
export const UserContextProvider = (props) => {

const [name,setName] = useState("N/A")

const changeNameHandler = (name) =>{
    setName(name)
    }

  const contextValue = {
    user: name,
    changeName:changeNameHandler
  };




  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
