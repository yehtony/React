import { HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import P1 from './First';
import P2 from './Fetch';
import P3 from './setTimeOut';
import P4 from './MountParent';
import P5 from './useEffectParent';
import './App.css';



function Layout(props) {
    return (
        <div>
            <nav>
                <button><Link to='/01' style={{ textDecoration: 'none' }}>Page1</Link></button>
                <button><Link to='/02' style={{ textDecoration: 'none' }}>Page2</Link></button>
                <button><Link to='/03' style={{ textDecoration: 'none' }}>Page3</Link></button>
                <button><Link to='/04' style={{ textDecoration: 'none' }}>Page4</Link></button>
                <button><Link to='/05' style={{ textDecoration: 'none' }}>Page5</Link></button>
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
                    <Route exact path='/04' element={<Layout><P4 /></Layout>} />
                    <Route exact path='/05' element={<Layout><P5 /></Layout>} />
                </Routes>
            </HashRouter>
            <div id='magic'></div>
            <div id='annia'></div>
        </div>
    )
}

export default App;