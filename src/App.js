import React from 'react';
import './App.css';
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://anime-collection.p.rapidapi.com/season',
    headers: {
        'x-rapidapi-host': 'anime-collection.p.rapidapi.com',
        'x-rapidapi-key': '4228a4f3d0msh664b1b28f042b20p1e93fcjsn52fed2c596ec'
    }
};

axios
    .request(options)
    .then(res => {
        console.log(res.data);
    }).catch(err => {
    console.error(err);
});

function App() {
    return (
        <div className="App">
            Weekly Anime Release Days
        </div>
    );
}

export default App;