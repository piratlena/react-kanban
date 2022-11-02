
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1 className="main-title">Kanban Board</h1>
      <div className="drag-container">
        
            <li className="drag-column backlog-column">
                <span className="header">
                    <h1>Backlog</h1>
                </span>
                  
                <div id="backlog-content">
                    <ul className="drag-item-list" id="backlog-list">
                    <li class="drag-item">Testing</li>
                        <li class="drag-item">Testing</li>
                        <li class="drag-item">Testing</li>
                        <li class="drag-item custom-scroll">Lorem </li>
                    </ul>
                </div>
                    
                <div className="add-btn-group">
                    <div className="add-btn">
                        <span className="plus-sign">+</span>
                        <span>Add Item</span>
                    </div>
                    <div className="add-btn solid">
                        <span>Save Item</span>
                    </div>
                </div>
                <div className="add-container">
                    <div className="add-item"></div>
                </div>
            </li>
      </div>
    </div>
  );
}

export default App;
