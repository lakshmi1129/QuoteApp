import React, {useState,useEffect} from 'react'
import './Quote.css';
import axios from "axios";
import BookArray from "./ArrayBookmark";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Quote() {
  
  const [quote,setQuote] = useState("");
  const [author,setAuthor] = useState("");
  const [tag,setTag] = useState([]);


  const tagApi = async () =>{
let arrayofTag =[];
try{
  const tagData =await axios.get("https://api.quotable.io/tags");
  arrayofTag =tagData.data
  setTag(arrayofTag)
  console.log(tagData);
}
catch(error){
  console.log(error);

}
  }


  const quoteAPI = async () =>{
    let arrayofQuotes =[];
    try{
      const data = await axios.get("https://api.quotable.io/random");
      arrayofQuotes = data.data

      let quote =arrayofQuotes.content
      let author =arrayofQuotes.author
      console.log(quote);
      console.log(author);
    } catch(error){
      console.log(error);
    }

    try{
      setQuote(arrayofQuotes.content);
      setAuthor(arrayofQuotes.author);
    } catch(error){
      console.log(error);
    }
  };

 const addBookmark = async () =>{
    console.log('addbookmark');
    BookArray.push({
      quote:quote,
      author:author
    })
    console.log(BookArray);
    return BookArray;
  }

  useEffect(()=>{
    quoteAPI();
    tagApi();
  },[])

  return (
    <div className='form'>
        <div className='quote' style={{width:'50%', backgroundColor:'orange',borderRadius:20, padding:40,margin:50}}>
        <h3>{quote}</h3>
        <small>-{author}-</small>
        <button onClick={addBookmark}><i class="fa-solid fa-bookmark"></i></button>

        <DropdownButton id="dropdown-basic-button" title="Tags" >
        { 
        tag.map((item) =>(
      <Dropdown.Item onClick={quoteAPI}>{item.name}</Dropdown.Item>
        ))
        }
</DropdownButton> 

        </div> <br/>
        <button onClick={quoteAPI} className='btn'>New Quote</button>
   </div>
  )
}

export default Quote