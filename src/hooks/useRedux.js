import { store } from "../store";
import { useState, useEffect } from "react";

export const useRedux = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return () => unSubscribe();
  }, []);

  return [state, store.dispatch];
};
