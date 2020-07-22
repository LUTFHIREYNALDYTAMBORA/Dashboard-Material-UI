import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Dashboard from './containers/pages/Dashboard/index';
import News from './containers/pages/News';
import Transfer from './containers/pages/Transfer';
import GalleryPhotos from './containers/pages/Gallery';
import Players from './containers/pages/Players';
import Main from './components/Main';

class App extends React.Component {
    render() {
        return (
            <Main>
                <Router>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/news" component={News} />
                    <Route exact path="/transfer" component={Transfer} />
                    <Route exact path="/gallery" component={GalleryPhotos} />
                    <Route exact path="/players" component={Players} />
                </Router>
            </Main>
        );
    }
}

export default App;