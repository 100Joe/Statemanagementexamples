// import {makeObservable, obsevable, action} from 'mobx';

// export class Counter {
// numberOfClicks = 0;
// constructor() {
//   makeObservable(this, {
//     numberOfClicks: observable,
//     increment: action,
//   });
// }
// increment = amount => {
//   this.numberOfClicks += amount;
// }
// }
// -----------------------------------------------------------------------------------------------------
// App.js
// import {Counter} from './counter'
// const counter = new Counter();
// Pass counter as props to the button on app.js
// ------------------------------------------------------------------------------------------------------
// Install mobx and mobx-react 
// Make sure to use observer from mobx-react in unison with makeObservable from mobx or else it will seem broken. The observer element needs to wrap the entire component to ensure rerendering when changing the state.