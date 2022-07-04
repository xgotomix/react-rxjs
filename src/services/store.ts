import { BehaviorSubject } from 'rxjs';

// state
const age = new BehaviorSubject(0);

// stream
export const age$ = age.asObservable();

// snapshot
export const getAge = () => {
  return age.getValue();
};

// setter
export const setAge = (newValue: number) => {
  age.next(newValue);
};
