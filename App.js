import { useEffect, useState} from 'react';
import './App.css';
import News from './News';
function App()
{
  let [articles,setArticles] = useState([]);
 
  
  useEffect (()=>{
   fetch(`https://newsapi.org/v2/everything?q=india&2024-02-10&apiKey=7e5eb4e268e44d18951d9cd6175555e8`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
      console.log(news.articles);
    })
  .catch((err)=>{
    console.log(err);
  })
  },[])
  return(
    <div className='App'>
      <header className='header'>
       <h1>Daily News</h1>

      
      </header>
      
      <section className='news-articles'>
      
      {


       articles.map((article)=>{
       return(
       <News article={article}/>
           )
      })
  
}
      
      </section>
   
    </div>
  );
  }

export default App;






















       