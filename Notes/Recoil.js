// How does Recoil allow us to share state?
// This will allow the State to be displayed in different components or areas of the application. How ever it will only repeated read the state and not manipulate it. 

// Recoil is most useful when you have multiple components that use the same state data for something.The useRecoilState allows us to access the state as well as manipulate the state. If we would like to read only the value of the state the hook we would use is useRecoilValue.  

// What is an atom()?
// atoms allow us to create a starting state value. This is done by providing the key value(name) as well as the default(starting state value). 

// What is a Selector? 
// Selectors are pure functions that accept atoms or other selectors as input. The state can be rerendered when the selectors change.

// example code 

// State file 
// import {useRecoilState} from 'recoil';  
// const [numberOfClicks, setNumberOfClicks] = useRecoilState(state)
// Value is used to read the state data 
// import {useRecoilValue} from 'recoil';  
//  const numberOfClicks = useRecoilValue(state)
// ------------------------------------------------------------------------------------------------------
// atom's
// import {atom} from 'recoil';    This will import the atom 

// export const State = atom({
//    key: 'value',      The Key value is typically the name of the state for this atom. 
//    default: [],       This will be the starting state value. The example is a starting empty array. 
// });
// -------------------------------------------------------------------------------------------------------
// Selector's
// import { selector } from "recoil";
// export const Selector = selector({
//   key: 'Selector',
//   get: ({ get }) => {
//     const clicksData = get(counterState);
//     const totalClicks = clicksData.reduce((sum, click) => {
//       return sum + click.amount;
//     }, 0);
//     return totalClicks;
//   },
// })
// -------------------------------------------------------------------------------------------------------
// App.js
// import { RecoilRoot } from 'recoil';
// function App() {
// return (
//   <RecoilRoot>
//     <h1>State Management Example</h1>
//   </RecoilRoot>
// );
// }