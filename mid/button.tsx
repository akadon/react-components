import { useState, useReducer } from 'react';
import Button from '../stateless/button'

type Actioncreate = (
  state: number,
  action: CountAction
) => any;

interface CountAction {
  type: CountActionKind;
  payload: any;
}

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

const counterReducer: Actioncreate = (state, action) => {
  switch (action.type) {
    case CountActionKind.INCREASE:
      return state + action.payload.increaseBy;
    case CountActionKind.DECREASE:
      return state - action.payload.decreaseBy;
    default:
      throw new Error();
  }
};

const Component = (): JSX.Element => {
  const [value, setValue] = useState(0);
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.currentTarget.value);
  };

  const handleIncrease = () => {
    dispatch({ type: CountActionKind.INCREASE, payload: { increaseBy: value } });
  };

  const handledecrease = () => {
    dispatch({ type: CountActionKind.DECREASE, payload: { decreaseBy: value } });
  };

  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={handleIncrease}>+</Button>
      <Button onClick={handledecrease}>-</Button>
      <input type="number" value={value} onChange={handleChange} />
    </>
  );
};

export default Component;
