import './App.css';
import {useState, useEffect} from 'react';
import Placeholder from './placeholder.svg'

function Navbar() {

  return (
    <>
      <div className='navbar'>
        <h1>Recipe App</h1>
      </div>
    </>
  );
}

function Searchbar() {
  const [text, setText] = useState('');
  
  const handleText = (e) => {
    setText(e.target.value);
  }

  return(
    <>
      <div className='searchbar'>
        <h6>Please enter your desired dish below:</h6>
        <input 
          type="text" 
          className='searchinput' 
          onChange={handleText} 
          maxlength="100"
        ></input>
      </div>
      <Queries text={text}></Queries>
    </>
  )
}

function Queries({text}) {
  const [show, setShow] = useState(false);

  let random = Math.floor(Math.random() * 3) + 1;

  useEffect (() => {
    console.log('key up');

    let typeTimer;
    
    clearTimeout(typeTimer);
    setShow(false);

    typeTimer = setTimeout(() => {
      (text !== '') ? setShow(true) : setShow(false);
      console.log(text);
    }, 800)
  }, [text, setShow])

  const rec = [
    {
      id: 1,
      title: '1.',
      desc: 'First description.',
      rating: 2.3
    },
    {
      id: 2,
      title: '2.',
      desc: 'Second description.',
      rating: 9.1
    },
    {
      id: 3,
      title: '3.',
      desc: 'Third (last) description.',
      rating: 5.6
    }
  ];
  
  const recipeEl = rec.slice(0,random).map((r, index) => (
    <div className='recipe' key={index}>
      <img src={Placeholder} alt='placeholder'/>
      <p><b>{r.title}{text}</b></p>
      <p>{r.desc}</p>
      <div className='rating-container'>Rating:<div className='max-rating'><div className='rating' style={{width: (r.rating*100)/10 + '%'}}></div></div>{r.rating}/10</div>
    </div>
  ));

  return (
    (show) ?
    <>
      <div className='query'>
        <h6>You searched for:</h6>
        <b><div>{text}</div></b>
      </div>
      <div className='queries'>
        {recipeEl}
      </div>
    </>
    : 
      (text !== '') ? 
      <div className='loading'>
        <div></div>
        <div></div>
        <div></div>
      </div>
      : '' /* else if? */
  );
}

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='main-container'>
        <Searchbar></Searchbar>
      </div>
    </>
  );
}

export default App;
