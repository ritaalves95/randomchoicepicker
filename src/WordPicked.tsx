import React from 'react'

type Props = {
    word: string;
    resetTags: () => void
    resetWord: () => void
}

const WordPicked = ({word, resetTags, resetWord}: Props) => {
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
    </div>
  )
}

export default WordPicked