import React from 'react'

export const GifGridItem = ({title,url}) => {
    return (
        <div className="card animate__animated animate__bounceInUp animate__delay-2s">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
