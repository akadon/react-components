import { useState } from 'react';
import Button from '../stateless/button'

const Component = (): JSX.Element => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count => count + 1);
  };

  const handledecrease = () => {
    setCount(count => count - 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <Button onClick={handleIncrease}>+</Button>
      <Button onClick={handledecrease}>-</Button>
    </>
  );
};

export default Component;
