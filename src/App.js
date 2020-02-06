import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './post'
class App extends React.Component {
    render() {
        const n = 10
        return ( 
            <div>
                <Post />
            </div>
        )
    }
}

export default App;
