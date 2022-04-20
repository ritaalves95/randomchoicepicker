import React, {useState} from 'react';
import './App.css';

function App() {
//  handle key up event
  const handleKeyUp = (e: React.KeyboardEvent):void => {
    console.log((e.target as HTMLInputElement).value)
    let value = (e.target as HTMLInputElement).value

    createTags(value);

    if(e.key === 'Enter') {
      setTimeout(()=> {
          // e.target.value = ''
      }, 10)
      randomSelect()
    }
  }

//  create tags
  const [tags, setTags] = useState<string[]>([]);

  const createTags = (input: string): void =>{
    const tagsValue = input.split('.').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    setTags(tagsValue)
  }

//  random selection
  const randomSelect = () => {
    const times = 30;

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()
        highlightTag(randomTag);
        
        setTimeout(()=>{
            removeHighlightTag(randomTag)
        }, 100)
    }, 100);

    setTimeout(()=>{
        clearInterval(interval);

        setTimeout(()=>{
            const randomTag = pickRandomTag();
            highlightTag(randomTag)
        }, 100)
    },times * 100)
  }

  const pickRandomTag = (): Element => {
    const allTags = document.getElementsByClassName('tag')
    return allTags[Math.floor(Math.random() * tags.length)]
  }

  const highlightTag = (tag: Element): void => {
    tag.classList.add('highlight');
  }

  const removeHighlightTag = (tag: Element): void => {
      tag.classList.remove('highlight');
  }

  return (
    <div className="container">
      <h3>Enter all of the choices divided by a comma (' . '). <br />
          Press enter when you're done</h3>

      <textarea id="textarea" placeholder="Enter choices here..." onKeyUp={handleKeyUp} autoFocus></textarea>

      <div id="tags">
        {tags.map((tagEl, index) => {
          return(
            <span className='tag' key={index}>{tagEl}</span>
          )
        })}
      </div>
    </div>
  );
}

export default App;
