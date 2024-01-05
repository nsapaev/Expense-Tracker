import React, {useState} from 'react';
import uuid from 'react-uuid';
import "./AddNewTransaction.css"



const AddNewTransaction = ({dispatch}) => {

    let [text, setText] = useState('')
    let [amount, setAmount] = useState('')
    let [requiredErrorMessage,setRequiredErrorMessage] = useState(false)
    const handlerAddNewTransaction = (e) => {
        e.preventDefault()
        const transaction = {id:uuid(), name:String(text), value:+amount}

        if(transaction.name && transaction.value){
            dispatch({type:"ADD-TRANSACTION",transaction})
            setText("")
            setAmount("")
            setRequiredErrorMessage(false)
        }else{
            setRequiredErrorMessage(true)
        }

    }

    return <div className={"addNewTransaction"}>
        <h5 className={"addNewTransaction__title"}>Add new transaction</h5>
        <form>
            <div className={"addNewTransaction__text"}>
                <h6>text</h6>
                <input
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
            </div>
            <div className={"addNewTransaction__amount"}>
                <h6>amount</h6>
                <p>(negative-expense, positive-income)</p>
                <input
                    type="number" onChange={(e) => { setAmount(e.target.value)}}
                    value={amount}
                />
            </div>
            {requiredErrorMessage ? <div className={"requiredFildsMessage"}>Fields is required</div>: null}
            <button
                className={"addNewTransaction__button"}
                onClick={handlerAddNewTransaction}
            > Add transaction
            </button>
        </form>
    </div>
};

export default AddNewTransaction;
