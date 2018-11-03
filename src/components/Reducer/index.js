import React,{useReducer} from 'react';
import ax from 'axios';
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'request':
        ax.get('https://api.github.com/users').then(res=>{
            state.count=res.data[0].type;
        });
        return {count:state.count}
  }
}

function ReducerCounter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(useReducer(reducer, initialState)[1])
  return (
    <div>
      <h2>Reducer</h2>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'reset'})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'request'})}>ajax</button>
    </div>
  );
}
export default ReducerCounter