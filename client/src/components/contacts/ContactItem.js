import React from 'react'

const ContactItem = ({ contact }) => {
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>{contact.name}{' '}
                <span className={'badge ' + (contact.type === 'professional' ? 'badge-success' : 'badge-primary')}>{contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}</span>
            </h3>
        </div>
    )
}

export default ContactItem
