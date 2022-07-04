import { getAge, setAge } from '../services/store';

export default function Sanyi() {
  return (
    <div data-component="Sanyi">
      <hr />
      <div>sanyi</div>
      <button onClick={() => setAge(getAge() + 1)}>+</button>
      <button onClick={() => setAge(getAge() - 1)}>-</button>
      <button onClick={() => setAge(0)}>0</button>
      <hr />
    </div>
  );
}
