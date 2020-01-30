import React from 'react'

export default function Card(props) {
    return (
        
            <div className="col-lg-3 mb-4 ">
                <div className='card h-100'>
                    <img className="card-img-top" src={props.data.img} />
                    <div className="card-body">
                        <h4 className="card-title">{props.data.title}</h4>
                        <p className="card-text">{props.data.description}</p>
                        <div className='card-footer'>
                        <a href="#" className="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                </div>
            </div>

    )
}
