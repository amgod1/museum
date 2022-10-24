import React from 'react'
import styles from './BuyTickets.module.css'

let ticketsInfo = [
    {id: 'ticketType1', for: 'ticketType1', title: 'Permanent Exhibition'},
    {id: 'ticketType2', for: 'ticketType2', title: 'Temporary Exhibition'},
    {id: 'ticketType3', for: 'ticketType3', title: 'Combined Admission'},
]

const Ticket = (props) => {
    return (
        <div className={styles.ticketsList}>
            <div className={styles.ticketsGap}>
                <input className={styles.inputWrapper} type='radio' id={props.id} name='ticket' />
                <label className={styles.ticketText} htmlFor={props.for}>
                    {props.title}
                </label>
            </div>
        </div>
    )
}

const TicketTypes = () => {
    return (
        <>
            {ticketsInfo.map (el => <Ticket id={el.id} for={el.for} title={el.title} key={el.id} />)}
        </>
    )
}

export default TicketTypes