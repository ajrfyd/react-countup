import React, { useState, useRef, useEffect, useCallback } from "react";

const CountUp = ({ start = 0, end, time = 2000 }) => {
  const [state, setState] = useState(start);
  const ref = useRef(start);

  const accumulator = 1;
  const timer = time / end;

  const updateCounterState = useCallback(() => {
    if(ref.current < end) {
      const result = ref.current + accumulator;
      if(result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    if(ref.current !== end) {
      setTimeout(updateCounterState, timer);
    }
  }, [state])

  useEffect(() => {
    let isMounted = true;

    if(isMounted) {
      updateCounterState();
    }

    return () => isMounted = false;
  }, [])

  return (
    <>
      {state}
    </>
  )
}

export default CountUp;