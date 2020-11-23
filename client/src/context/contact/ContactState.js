import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {

    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'John Appleseed',
                email: 'john@gmail.com',
                phone: '7202022020',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Will Smith',
                email: 'will@gmail.com',
                phone: '3030303030',
                type: 'personal'
            },       
            {
                id: 3,
                name: 'Big Kahuna',
                email: 'kahuna@gmail.com',
                phone: '7202022020',
                type: 'professional'
            },                 
        ]
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState)

    //add contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({
            type: ADD_CONTACT,
            payload: contact
        })
    }

    return (
        <ContactContext.Provider value={{
            contacts: state.contacts,
            addContact
        }}>
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState