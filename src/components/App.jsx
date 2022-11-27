import React, { Component } from "react";
import { useState } from 'react';
import uuid from 'react-uuid';
import '../styles/App.css';
import Board from "./Board";


const App = () => {
  const [cardList, setCardList] = useState([
    { id:uuid(), header:"3 Backlog", classname:'backlog', items:[{id:uuid(), title:'покататься на велике'}]},
    {id:uuid(),header:"1 In Progress", classname:'progress',  items:[{id:uuid(), title:'поигать в компик'}, {id:uuid(), title:'покакать'}, {id:uuid(), title:'поспать'} ]},
    {id:uuid(), header:"2 Complete",classname:'complete', items:[{id:uuid(), title:'поигать в компик'}, {id:uuid(), title:'погулять'}]},
    {id:uuid(), header:"4 On Hold", classname:'on-hold',items:[{id:uuid(), title:'сходить в магазин'}, {id:uuid(), title:'похавать'}, {id:uuid(), title:'поиграть'}]}
]);

const [currentTask, setCurrentTask] = useState(null)
const [currentCard, setCurrentCard] = useState(null)


let classNameDragItemList = "drag-item-list";

function dragOverHandler(e) {
  e.preventDefault()
  if (e.target.className == 'drag-item') {
    e.target.style.background = 'lightgray'
  }
 }
  

function dragStartHandler(e, card, item) {
setCurrentCard(card)
setCurrentTask(item)

}

function dragLeaveHandler(e) {
  e.target.style.background = ''
}

function dragEndHandler(e, card, item) {
  e.target.style.background = ''
}


function dropHandler(e, card, item) {
e.preventDefault()

const currentIndex = currentCard.items.indexOf(currentTask)
currentCard.items.splice(currentIndex, 1)

const dropIndex = card.items.indexOf(item)
card.items.splice(dropIndex + 1, 0, currentTask)

setCardList(cardList.map(c => {
  if (c.id === card.id) {
    return card
  }

  if (c.id === currentCard.id) {
    return currentCard
  }
  return c
}))
  
}

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
              <ul 
              className={classNameDragItemList} 
              id={`${card.classname}-list`}
              >
                {card.items.map((item, i) => (
                    <li 
                    className="drag-item" 
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, card, item)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => dropHandler(e, card, item)}
                    draggable={true}>{item.title}</li>
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
