const globalListenersKey = '__pubsub_listeners__';


declare global {
  interface Window {
    [globalListenersKey]: EventListeners;
  }
} 


interface EventListeners {
  [event: string]: Array<(data: any) => void>;
}

const getGlobalListeners = (): EventListeners => {
  if (!window[globalListenersKey]) {
    window[globalListenersKey] = {};
  }
  return window[globalListenersKey];
};

export const pubsub = {
  subscribe: (event: string, callback: (data: any) => void): void => {
    const listeners = getGlobalListeners();

    if (!listeners[event]) {
      listeners[event] = [];
    }
    listeners[event].push(callback);
  },
  publish: (event: string, data: any): void => {
    const listeners = getGlobalListeners();

    if (listeners[event]) {
      listeners[event].forEach((callback) => callback(data));
    }
  },
};
