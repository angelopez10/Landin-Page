import React from 'react';
import Card from './card.js';



export default function Cards() {
    let cardContent = [
        { title: 'Angel López', img: 'https://picsum.photos/500/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' },
        { title: 'Sergio Perez', img: 'https://picsum.photos/500/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' },
        { title: 'Dana Mardones', img: 'https://picsum.photos/500/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' },
        { title: 'Unknown User', img: 'https://picsum.photos/500/300', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula lacus accumsan, efficitur mauris quis, iaculis nisl. Donec.' }
    ]
    return (
       <div className='container'>
        <div className='row text-center '>
            {
                cardContent.map((item, i) => {
                    return <Card key = {i} data = {item} />
                })
            }

        </div>
        </div> 
    );
}
