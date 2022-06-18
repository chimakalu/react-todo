import React from 'react';
import Todo from './components/Todo';

// class App extends Component {
    function App() {
        return (
            <div>
                <h1 className='main-title'>My Todos</h1>
                <div className="todocard-container">
                    <Todo text="first" title="Top"/>
                    <Todo text="second" title="Middle"/>
                    <Todo text="third" title="Base"/>
                    <Todo text="fourth" title="Probable"/>
                </div>
            </div>
        );
    }
// }

export default App;
