import { HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import P1 from './P1.js';
import P2 from './P2.js';
import P3 from './P3.js';
import P4p from './P4p.js';



function Layout(props) {
    return (
        <div>
            <nav>
                <button><Link to='/01'>Page1</Link></button>
                <button><Link to='/02'>Page2</Link></button>
                <button><Link to='/03'>Page3</Link></button>
                <button><Link to='/04'>Page4</Link></button>
            </nav>
            {props.children}
        </div>
    )
}

function App() {
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Layout></Layout>} />
                    <Route exact path='/01' element={<Layout><P1 /></Layout>} />
                    <Route exact path='/02' element={<Layout><P2 /></Layout>} />
                    <Route exact path='/03' element={<Layout><P3 /></Layout>} />
                    <Route exact path='/04' element={<Layout><P4p /></Layout>} />
                </Routes>
            </HashRouter>
            <div id='magic'></div>
        </div>
    )
}

export default App;