import React, { useState, useReducer } from 'react';
import Modal from './Modal';
// import { data } from '../../../data';
import { reducer } from './reducer';
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello world',
};
const Index = () => {
  // React Hooks
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({
        type: 'ADD_ITEM',
        payload: newItem,
      }); /*Common Practice is to use upper case!!*/
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              className="btn"
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
