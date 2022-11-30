import React, { Component,useState,useEffect } from 'react'
import axios from 'axios'
import NewsItemsAllnews from './newsitemsallnews'


const Business=()=>{
    const [data, setData] = useState([])
    const getNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=67aa1d1bca6348c0a6fc2aabede175c6")
            .then((response) => {
                setData(response.data.articles)
            })
    }


    useEffect(() => {
        getNews();
    }, [])
    console.log(data)


    return (<>
        <div className='container my-5'>
           
            <div className='row '>
                {data.map((element) => {
                    return (<div className='col-xl-3 col-lg-4 col-md-6 col-12 col-sm-12 mb-4'>
                        <NewsItemsAllnews title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>);
                })}



            </div>

        </div>
    </>)
}


export default Business