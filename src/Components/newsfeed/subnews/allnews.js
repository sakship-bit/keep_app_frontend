import React, { Component, useEffect, useState } from 'react'
import NewsItemsAllnews from './newsitemsallnews'
import axios from 'axios'


const Allnews = () => {

    const [data, setData] = useState([])
    const getNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=67aa1d1bca6348c0a6fc2aabede175c6")
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


export default Allnews