import React, { Component } from 'react'

export class NewsItemsAllnews extends Component {
   
    render() {
        let {title,description,imageUrl,newsUrl}=this.props;
        return (
            <div className="card" style={{width:"100%"}}>
                {imageUrl?<img src={imageUrl} className="card-img-top" alt="..."/>:<></>}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
                    </div>
            </div>
        )
    }
}

export default NewsItemsAllnews