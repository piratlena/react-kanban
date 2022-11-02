
import { useState } from 'react';
import './App.css';

const App = () => {
  const [cardList, setCardList] = useState([
    {id:1, order:3, header:"3 Backlog", classname:'backlog', task:['поспать', 'поучиться', 'покататься на велике', "покушать"]},
    {id:2, order:1, header:"1 In Progress", classname:'progress',  task:['поспать', 'поучиться', 'покататься на велике', "покушать"]},
    {id:3, order:2, header:"2 Complete",classname:'complete', task:['поспать', 'поучиться', 'покататься на велике', "покушать"]},
    {id:4, order:4, header:"4 On Hold", classname:'on-hold',task:['поспать', 'поучиться', 'покататься на велике', "покушать"]}
])
  return (
    <div className="app">
      <h1 className="main-title">Kanban Board</h1>
      <div className="drag-container">
        {cardList.map(card => 
          <li className={`drag-column ${card.classname}-column`}>
          <span className="header">
              <h1>{card.header}</h1>
          </span>
            
          <div id={`${card.classname}-content`}>
              <ul className="drag-item-list" id={`${card.classname}-list`}>
                {card.task.map((taskName, i) => (
                    <li key={i}
                    className="drag-item" 
                    draggable={true}>{taskName}</li>
                ))}
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
      </li>)}
      </div>
    </div>
  );
}

export default App;
