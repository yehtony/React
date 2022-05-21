import { HashRouter, Routes, Route } from 'react-router-dom';
import P1 from './P1.js';
import P2 from './P2.js'
//import P2 from './P2.js';


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path='/01' element={<P1 />} />
                <Route exact path='/02' element={<P2 />} />
            </Routes>
        </HashRouter>
    )
}

export default App;