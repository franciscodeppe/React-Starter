var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// components used to control 1) State, 2) lifecycle 3) Most Importantly - UI

class App extends React.Component {
    render() {
        return (
            <div>
                Hello React Training
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)