import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./components/homeScreen";
import Login from "./components/login";
import { login,logout,selectUser } from "./features/userSlice";
import { auth } from "./firebase";
// import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
const unsubscribe=auth.onAuthStateChanged(user=>{
  if(user){
    dispatch(login({
      uid:user.uid,
      email:user.email
    }))
    //login
  }
  else{
    dispatch(logout)
    //logout
  }
})
return unsubscribe;
  },[])
  return <div className="App">{!user ? <Login /> : <HomeScreen />}</div>;
}

export default App;
