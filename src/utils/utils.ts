import { Subscription } from 'rxjs';

export interface Subscriptions {
  [key: string]: Subscription;
}

export const unsubscribe = (subscriptions: Subscriptions) => {
  Object.values(subscriptions).forEach((subscription) => {
    subscription.unsubscribe();
  });
};
