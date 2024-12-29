import React from 'react';
import './App.css';
import Main from './Main';
import Navigation from './Navigation';

function App() {
    return (
        <div className="App">
            {/* <Navigation /> */}

            {/* Content */}
            <div className='container mx-auto px-4'>
                {/* router here */}
                <Main />
            </div>
        </div>
    );
}

export default App;
