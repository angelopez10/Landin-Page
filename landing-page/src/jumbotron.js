import React from 'react'

 function JumbotronInfo(props) {
    
    return (
        <div className='container '>
            <header className="jumbotron my-4">
                <h1 className="display-3">{props.title}</h1>
                <p className="lead">{props.description}</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </header>
        </div>
    );
}

export default function Jumbotron() {
    
    return (
            <JumbotronInfo title = 'A Warm Welcome' description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.' />
    );
}



