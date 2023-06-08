import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';

// Define the handle types which will be passed to the forwardRef
export type CountdownHandle = {
  start: () => void;
};

type CountdownProps = {
  pa: string;
};

const Countdown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    // start() has type inference here
    start() {
      // eslint-disable-next-line no-alert
      alert('Start');
    },
  }));

  return <div>Countdown</div>;
});

// export default Countdown;

function App() {
  const countdownEl = useRef<CountdownHandle>(null);

  useEffect(() => {
    if (countdownEl.current) {
      // start() has type inference here as well
      countdownEl.current.start();
    }
  }, []);

  return <Countdown ref={countdownEl} pa="pa:prop" />;
}

export default App;
