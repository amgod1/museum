import { React, useState, useEffect } from 'react'
import styles from './BuyTickets.module.css'
import TicketTypes from './TicketTypes'
import img from './../../assets/img/buy-tickets/buy-tickets.svg'
import TicketAmount from './TicketAmount'

const BuyMenu = () => {

    const [basic, setBasic] = useState(1)
    const [senior, setSenior] = useState(1)

    if (basic === -1) { setBasic(0) } else 
    if (basic === 100) { setBasic(99) } else 
    if (senior === -1) { setSenior(0) } else 
    if (senior === 100) { setSenior(99) }

    let amountInfo = [
        {title: 'Basic 18+', amount: basic, onChange: setBasic},
        {title: 'Senior 65+', amount: senior, onChange: setSenior}
    ]

    useEffect(() => {
        amountInfo = [
            {...amountInfo[0], amount: basic}, 
            {...amountInfo[1], amount: senior }
        ]
    }, [basic, senior])

    return (
        <div className={styles.buyMenu}>
            <img src={img} alt='buy-ticket-image' />
            <div className={styles.buyMenuWrapper}>
                <div className={styles.ticketType}>
                    <p className={styles.text}>
                        Ticket Type
                    </p>
                    <TicketTypes />
                </div>
                <div className={styles.amount}>
                    <p className={styles.text}>
                        Amount
                    </p>
                    <TicketAmount amountInfo={amountInfo} />
                    <button className={styles.btn}>
                        <div className={styles.btnText}>
                            Buy Now
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}


const BuyTickets = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h2 className={styles.title}>
                    Buy Tickets
                </h2>
                <div className={styles.line}></div>
                <BuyMenu />
            </div>
        </div>
    )
}

export default BuyTickets