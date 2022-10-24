import React from 'react'
import styles from './BuyTickets.module.css'

const Amount = (props) => {

    const increaseAmount = () => props.onChange(props.amount + 1)
    const decreaseAmount = () => props.onChange(props.amount - 1)

    return (
      <div className={styles.amountWrapper}>
        <p className={styles.amountText}>
            {props.title}
        </p>
        <div className={styles.amountNumber}>
            <button onClick={decreaseAmount} className={`${styles.amountCounter} ${styles.counterChange}`}>
                -
            </button>
            <div className={styles.amountCounter}>
                {props.amount}
            </div>
            <button onClick={increaseAmount} className={`${styles.amountCounter} ${styles.counterChange}`}>
                +
            </button>
        </div>
      </div>
    )
}

const TicketAmount = (props) => {
    return (
        <>
            {props.amountInfo.map(el => 
                <Amount 
                    title={el.title} 
                    amount={el.amount}
                    onChange={el.onChange}
                    key={el.title} 
                />
            )}
        </>
    )
}

export default TicketAmount