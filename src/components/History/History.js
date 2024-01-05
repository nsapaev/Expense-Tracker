import React from 'react';
import "./History.css"


const History = ({transactions, dispatch}) => {
    const removeTransaction = (id) => {
        dispatch({type: "REMOVE-TRANSACTION", id: id})
    }

    return (
        <div className={"history"}>
            <h6>History</h6>
            <hr/>
            {
                transactions.map(transaction => {

                    return <div className={"history__block"}>
                        <button onClick={() => {
                            removeTransaction(transaction.id)
                        }} className={"history__removeBtn"}>х
                        </button>
                        <div key={transaction.id}
                             style={{borderRight: `5px solid ${transaction.value > 0 ? "green" : "red"}`}}
                             className={"history__container"}>
                            <span className={"history__name"}>{transaction.name}</span>
                            <span className={"history__money"}>{transaction.value}</span>
                        </div>
                    </div>
                })
            }

        </div>
    )

};

export default History;
