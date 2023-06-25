import React from 'react'

export default function ProductItems(props) {
    return (
        <div>
            <div className='my-3'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">{props.price}</p>
                        <a href="/"  className="btn btn-sm btn-dark mt-2" >Add to Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
