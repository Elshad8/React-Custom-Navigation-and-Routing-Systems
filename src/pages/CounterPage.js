import Button from '../components/Button';
import Panel from '../components/Panel';
//import {useState} from 'react';
import {useReducer} from 'react';
//import useCounter from '../hooks/use-counter';
import {produce} from 'immer';

function CounterPage({ initialCount }) {
  //const [ count, setCount ] = useState(initialCount);
  //const [valueToAdd,setValueToAdd]=useState(0);

  const incrementt="increment";
  const handle_Change="handle_Change";
  const decrementt="decrement";
  const handle_Submitt="handle_Submit";

  const reducer=(state,action)=>{
   switch(action.type){
    case incrementt:
      state.count+=1;
      return;
    case handle_Change:
        state.valueToAdd=action.payload;
        return;
    case decrementt:
        state.count=state.count-1;
        return;
    case handle_Submitt:
        state.count=state.count+state.valueToAdd;
        return;
    default:
      return;
   }
  }
  const[state,dispatch]=useReducer(produce(reducer),
    {
      count:initialCount,
      valueToAdd:0
    });
    console.log(state);

  const increment=()=>{
    //setCount(count+1);
    dispatch({
      type:incrementt
    });
  }
  const decrement=()=>{
    //setCount(count-1);
    dispatch({
      type:decrementt
    })
  }

  const handleChange=(event)=>{
    const value=parseInt(event.target.value)||0;
    //setValueToAdd(value);
    dispatch({
      type:handle_Change,
      payload:value
    })
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    //setCount(count+valueToAdd);
    dispatch({
      type:handle_Submitt
    })
  }

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input type="number" value={state.valueToAdd||""} onChange={handleChange} className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
