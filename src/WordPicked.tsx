import React, { useCallback, useRef, useEffect } from 'react'
import ReactCanvasConfetti from "react-canvas-confetti";

type Props = {
    word: string;
    resetTags: () => void
    resetWord: () => void
}

const WordPicked = ({word, resetTags, resetWord}: Props) => {
//  confetti
const refAnimationInstance: any = useRef(null);

const getInstance = useCallback((instance: any) => {
  refAnimationInstance.current = instance;
}, []);

const makeShot = useCallback((particleRatio: any, opts:any) => {
  refAnimationInstance.current &&
    refAnimationInstance.current({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio)
    });
}, []);

const fire = useCallback(() => {
  makeShot(0.25, {
    spread: 26,
    startVelocity: 55
  });

  makeShot(0.2, {
    spread: 60
  });

  makeShot(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });

  makeShot(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });

  makeShot(0.1, {
    spread: 120,
    startVelocity: 45
  });
}, [makeShot]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {fire()}, [])

//  restart     
    const restart = () => {
        resetTags();
        resetWord();
    }

  return (
    <div className='word-wrapper'>
        <article>
            <h1 className='word-picked'>{word}</h1>
            <button onClick={restart}>Thank you</button>
        </article>

        <ReactCanvasConfetti refConfetti={getInstance} className="confetti-wrapper" />
    </div>
  )
}

export default WordPicked