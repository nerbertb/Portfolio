import { useState } from 'react';
import Typewriter from 'typewriter-effect';



export const LoadingScreen = () => {
  const [done, setDone] = useState(false);

  if (done) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-9xl font-mono font-bold">
        <Typewriter
          onInit={(tw) => {
            tw.typeString('HELLO THERE!').pauseFor(1000)
              .callFunction(() => {
                setDone(true);
              })
              .start();
          }}
          options={{ loop: false }}
        />
      </div>
    </div>
  );
};
