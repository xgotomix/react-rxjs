import { useState, useEffect } from 'react';
import { age$ } from '../services/store';
import { Subscriptions, unsubscribe } from '../utils/utils';

export default function Feri() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const subscriptions: Subscriptions = {
      age: age$.subscribe((value) => setCount(value)),
    };
    return () => unsubscribe(subscriptions);
  }, []);

  return (
    <div data-component="Feri">
      <div>feri - {count}</div>
    </div>
  );
}
