import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/Auth/SignIn";
// import SignUp from "./Page/Auth/SignUp";
// import ForgotPassWord from "./Page/Auth/ForgotPassWord";
import Navbar from "./components/Navbar";
// import CreateRoom from "./Page/HomeRoom/CreateRoom";
// import Room from "./Page/HomeRoom/Room";
// import { useEffect, useState } from "react";
// import ListRoom from "./Page/HomeRoom/ListRoom";
// import TestRoom from "./Page/HomeRoom/TestRoom";
// import { useContext } from "react";
// import RoomChat from "./Page/ChatRoom/RoomChat";
// import Maybe from "./Page/Maybe/Maybe";
// import ListContest from "./Page/Contest/ListContest";
// import ContestCreate from "./Page/Contest/ContestCreate";
// import MyContest from "./Page/Contest/MyContest";
// import Contest from "./Page/Contest/Contest";
// import Toast from "./Components/ToastSuccess";
// import AuthCode from "./Page/Auth/AuthCode";
// import StartContest from "./Page/Contest/StartContest";
// import TableResult from "./Page/Contest/TableResult";
// import FormUpdateContest from "./Components/FormUpdateContest";
// import FormInfoContest from "./Components/FormInfoContest";
import Meet from "./pages/Meet";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {!state.screenLoading ? (
        <>
          <div className="h-20 w-full z-50 fixed top-0">
            {state.openNav && <Navbar />}
          </div>
          <div className="min-h-screen w-full z-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/room/:roomId" element={<Meet />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </div>
        </>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin"></div>
        </div>
      )}
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
