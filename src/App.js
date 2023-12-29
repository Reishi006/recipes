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

  /* let typeTimer;

  const handleShow = () => {
    (text !== '') ? setShow(true) : setShow(false)
    console.log('show handled')
  }

  const handleKeyUp = () => {
    clearTimeout(typeTimer)

    typeTimer = setTimeout(handleShow(), 500)
    console.log('key up');
  } */

  return(
    <>
      <div className='searchbar'>
        <h6>Please enter your desired dish below:</h6>
        <input type="text" className='searchinput' onChange={handleText}></input>
      </div>
      <Queries text={text}></Queries>
    </>
  )
}

function Queries({text}) {
  const [show, setShow] = useState(false);

  let random = Math.floor(Math.random() * 3) + 1;

  useEffect (() => {

    /* const handleShow = () => {
      (text !== '') ? setShow(true) : setShow(false);
      console.log(text);
    } */
  
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
      desc: 'First description.'
    },
    {
      id: 2,
      title: '2.',
      desc: 'Second description.'
    },
    {
      id: 3,
      title: '3.',
      desc: 'Third (last) description.'
    }
  ];
  
  const recipeEl = rec.slice(0,random).map((r, index) => (
    <div className='recipe' key={index}>
      <img src={Placeholder} alt='placeholder'/>
      <p><b>{r.title}{text}</b></p>
      <p>{r.desc}</p>
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
