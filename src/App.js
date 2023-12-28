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
        <h5>Please enter your desired dish below:</h5>
        <input type="text" className='searchinput' onChange={handleText}></input>
        <h6>You searched for:</h6>
        <div>{text}</div>
      </div>
      <Queries text={text}></Queries>
    </>
  )
}

function Queries({text}) {
  const [show, setShow] = useState(false);

  let random = Math.floor(Math.random() * 3) + 1;

  useEffect (() => {
    (text !== '') ? setShow(true) : setShow(false);
    console.log(text);
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
    <div className='queries'>{recipeEl}</div>
    : ''
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
