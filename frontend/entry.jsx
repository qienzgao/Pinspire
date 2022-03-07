import React from 'react';
import ReactDOM from 'react-dom';
import { fetchPins } from './actions/pin_actions';
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    window.fetchPins = fetchPins

    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store}/>, root)
    // ReactDOM.render(<h1>test</h1>, root); 
}); 