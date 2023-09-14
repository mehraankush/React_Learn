import logo from './logo.svg';
import React, { useReducer } from 'react';
import './App.css';
import {Greet,ControlA,HttpPost,Http, RenderEx,RenderProps,  Errostest,HoverCounter, ClickCount ,ErrorHandle,PortalDemo,Refs,FRparentref, Focusinput, FormHandling,PureComp,ReactMemo, ReactFragment, LifecycleA ,StyleSheet, Person, Welcome, Message, Count, Functionevent, ClassEvent, Binding, ParentComponent, If_else} from './components'
import {HooksCount, UseRef1,CounterOneHooks,InputOne, CounterTwoHooks, UseCallBackParent,UseMemo, UseReducerDataFetching,UsestateDataFetch,CounterThree,ComponentA,ComponentB,ComponentC,CounterTwoReducer, CounterOne, FetchData,EffectAutoIncre,LevelA, EffectControlMouse,EffectMouse, Hookarray,EffectTitle, SetName, CounterTwo} from './Containers';

export const UserName = React.createContext()
export const UserIntention = React.createContext()
export const Counter = React.createContext()

const InitialValue = 0;
const reducer = (currState,action) => {
     switch(action){
        case 'Increment':
            return currState+1
        case 'Decrement':
           return currState-1
        case 'Reset':
            return InitialValue
        default:
            return currState
     }
}

function App() {
  const [state,dispatch] = useReducer(reducer, InitialValue)
  return ( 
    <div className="App">


    <InputOne/>
    
    {/* <CounterOneHooks/>
    <CounterTwoHooks/> */}


    {/* <UseRef1/> */}
    {/* <UseMemo/> */}
    {/* <UseCallBackParent/> */}
    {/* <UseReducerDataFetching/> */}
    {/* <UsestateDataFetch/> */}

       {/* {state}
      <Counter.Provider value={{countSatate:state,countDispatch:dispatch}}>
         <ComponentA/>
         <ComponentB/>
         <ComponentC/>
      </Counter.Provider> */}



      {/* <CounterThree/> */}
      {/* <CounterTwoReducer/> */}
      {/* <CounterOne/> */}



      {/* <UserName.Provider value={'mehra'}>
          <UserIntention.Provider value={'atleast not good'}>
            <LevelA/>
          </UserIntention.Provider>
      </UserName.Provider> */}


      {/* <FetchData/> */}
      {/* <EffectAutoIncre/> */}
      {/* <EffectControlMouse/> */}
      {/* <EffectMouse/> */}
      {/* <EffectTitle/> */}
      {/* <Hookarray/> */}
      {/* <SetName/> */}
      {/* <CounterTwo/>
      <HooksCount/> */}





















      {/* basic react   concepts to remember*/}
      {/* <HttpPost/> */}
      {/* <Http/> */}
      {/* <ControlA/> */}
      {/* <RenderProps render={(count,increMent) => (<RenderEx count={count} increMent={increMent}/> )}/> */}
     {/* <ClickCount/>
     <HoverCounter/> */}

      {/* <ErrorHandle>
        <Errostest heroname="Stewie"/>
        <Errostest heroname="mehra"/>
      </ErrorHandle> */}
      {/* <PortalDemo/> */}
      {/* <FRparentref/> */}
      {/* <Focusinput/> */}
        {/* <Refs/> */}
       {/* <PureComp/> */}
      {/* <ReactFragment/> */}
      {/* <LifecycleA/> */}
      {/* <FormHandling/> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <Person/> */}
      {/* <If_else/> */}
      {/* <ParentComponent/> */}
      {/* <Functionevent/> */}
      {/* <ClassEvent/> */}
      {/* <Binding/> */}
      {/* <Count/> */}
      {/* <Message/> */}
      {/* {/* <Greet name="bruce" age="69"/> */}
      {/* <Greet name="Brian" age="15"/>
      <Welcome name="peter" age="immortal"/> */}
      {/* <Welcome name="stewie" age="2"/> */}
    </div>
  );
}

export default App;
