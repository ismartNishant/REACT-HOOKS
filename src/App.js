import "./App.css";
import React from "react";
// import MutableRef from "./components/UseRef/MutableRef";
// import CounterOne from "./components/customHooks/CounterOne";
// import CounterTwo from "./components/customHooks/CounterTwo";
import CountOne from "./components/customHooks/CountOne";
import CountTwo from "./components/customHooks/CountTwo";
// import FocusInput from "./components/UseRef/FocusInput";
// import ParentComp from "./components/UseCallback/ParentComp";
// import IntroTomemo from "./components/UseMemo/IntroTomemo";
// import Memoparent from "./components/UseMemo/Memoparent";
// import DeatFetch from "./components/UseReducer/GlobalState/concepts/DeatFetch";
// import DetaFetchWithReducer from "./components/UseReducer/GlobalState/concepts/DetaFetchWithReducer";
// import GlobalApp from "./components/UseReducer/GlobalState/App";
// import Complex from "./components/UseReducer/LocalState/Complex";
// import MultipleReducers from "./components/UseReducer/LocalState/MultipleReducers";
// import CompoC from "./components/UseContext/CompoC";
// import BasicReducer from "./components/UseReducer/LocalState/Basic";
// import Interval from "./components/UseEffect/Interval";
// import CleanUp from "./components/UseEffect/CleanUp";
// import RunEffectOnlyOnce from "./components/UseEffect/RunEffectOnlyOnce";
// import CondentionalyRender from "./components/UseEffect/CondentionalyRender";
// import Witharray from "./components/Usestate/Witharray";
// import Basic from "./components/UseEffect/Basic";
// import WithPrevState from "./components/Usestate/WithPrevState";
// import Basic from "./components/UseEffect/DataFetching/DataFetching";
// import WithButton from "./components/UseEffect/DataFetching/WithButtonClick";
// import WithId from "./components/UseEffect/DataFetching/WithID";
/////  context api
// export const UserContext = React.createContext();
// export const AgeContext = React.createContext();

// nerver declare context in main function always on top
const App = () => {
  return (
    // <UserContext.Provider value={"Lisa"}>
    //  <AgeContext.Provider  value={21}>
    <div className="App">
      {/*
        <h1>use State</h1>
        <Witharray />
        <WithPrevState /> 
        <Basic /> // useeffect basic
        <CondentionalyRender />
        <RunEffectOnlyOnce />
        <CleanUp />
        <Interval />
        <Basic /> // datafetching basic
        <WithId />
        <WithButton />
        <Basic /> // useReducer basic
        <MultipleReducers />
        <GlobalApp /> 
        <DeatFetch />
        <DetaFetchWithReducer /> 
        <Basic /> 
        <Complex /> 
        <BasicReducer /> 
        CompoC /> 
        <ParentComp />
       <IntroTomemo /> 
      <Memoparent />
      <FocusInput />
      <MutableRef />
      //
        <CounterOne />
      <CounterTwo />
      */}
      <CountOne />
      <CountTwo />
    
      
    </div>
    // </AgeContext.Provider>
    // </UserContext.Provider>
  );
};

export default App;
