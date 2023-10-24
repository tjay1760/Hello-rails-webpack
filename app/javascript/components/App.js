import React from 'react';
import { Greeting } from './Greeting';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Greeting />} />
            </Routes>
        </Router>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;