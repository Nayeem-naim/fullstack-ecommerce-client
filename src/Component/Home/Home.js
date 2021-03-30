import React from 'react';
import Event from '../Event/Event';


const events = [
    {
        name: 'child Support',
        pic : 'childSupport.png'
    
    },
    {
     name : 'animal Shelter',
     pic: 'animalShelter.png'
    },
    {
        name : 'bird House',
        pic: 'birdHouse.png'
       },{
           name: 'clean Water',
           pic:'cleanWater.png'
       },{
           name:'clearn Park',
           pic: 'clearnPark.png'
       },{
           name:'clothSwap',
           pic: 'clothSwap.png'
       }   
]

const Home = () => {
    return (
        <div className="row">
            <h2>This is home component</h2>
            {
                events.map(event => <Event event={event}></Event>)
            }
            
        </div>
    );
};

export default Home;