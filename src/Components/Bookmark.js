import React, {useState,useEffect} from 'react'
import './Quote.css';
import axios from "axios";
import BookArray from "./ArrayBookmark";


function Bookmark() {
  
  const [quote,setQuote] = useState("");
  const [author,setAuthor] = useState("");





  const quoteAPI = async () =>{
    let arrayofQuotes =[];
    try{
      console.log(BookArray);
      // const data = await axios.get("https://api.quotable.io/random");
      // arrayofQuotes = data.data

      // let quote =arrayofQuotes.content
      // let author =arrayofQuotes.author
      // console.log(quote);
      // console.log(author);
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


  useEffect(()=>{
    quoteAPI();
  },[])

  return (
    <div className='form'>
        <div className='quote' style={{width:'50%', backgroundColor:'orange',borderRadius:20, padding:40,margin:50}}>
      
       


        {
              BookArray && BookArray.length>0 ?
              BookArray.map((item)=>(
              <tr>
                <td>{item.quote}</td>
                <td>{item.author}</td>
               
              </tr>
               ))
               : " No data to Display"
            }


        
        </div> <br/>
   </div>
  )
}

export default Bookmark