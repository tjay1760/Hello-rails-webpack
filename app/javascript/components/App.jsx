import React from 'react';
import { Greeting } from './Greeting';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<RandomGreeting />} />
            </Routes>
        </Router>
    )
}

export default App;