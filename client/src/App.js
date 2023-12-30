import './App.css';
import {useState, useEffect} from 'react';
import axios from "axios";
import Placeholder from './placeholder.svg'

function Navbar() {

  return (
    <>
      <div className='navbar'>
        <h2>Recipe App</h2>
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
          placeholder='For tag names add space for each'
          onChange={handleText} 
          maxLength="100"
        ></input>
      </div>
      <Queries text={text}></Queries>
    </>
  )
}

function Queries({text}) {
  const [show, setShow] = useState(false);
  
  //fetched data
  const [rData, setData] = useState();

  useEffect (() => {
    console.log('key up');

    const fetchData = async () => {
      try {
        const res = await axios.post('http://localhost:8080', {
          tagname: text
        })
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();

    let typeTimer;
    
    clearTimeout(typeTimer);
    setShow(false);

    typeTimer = setTimeout(() => {
      (text !== '') ? setShow(true) : setShow(false);
    }, 800)
  }, [text]);

  console.log(rData);

  /* const rec = [
    {
      id: 1,
      title: '1.',
      desc: 'First description.',
      rating: ((Math.floor(Math.random()*9*10)/10)+1).toFixed(1)
    },
    {
      id: 2,
      title: '2.',
      desc: 'Second description.',
      rating: ((Math.floor(Math.random()*9*10)/10)+1).toFixed(1)
    },
    {
      id: 3,
      title: '3.',
      desc: 'Third (last) description.',
      rating: ((Math.floor(Math.random()*9*10)/10)+1).toFixed(1)
    }
  ]; */
  
  const recipeEl = rData?.map((r, index) => (
    <div className='recipe' key={index}>
      <img src={Placeholder} alt='placeholder'/>
      <p><b>{r.title}</b></p>
      <p>{r.rec_desc}</p>
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
