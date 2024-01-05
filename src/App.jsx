import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import ReportBoard from "./components/ReportBoard/ReportBoard";
import History from "./components/History/History";
import AddNewTransaction from "./components/AddNewTransaction/AddNewTransaction";
import "./App.css"
import {useReducer} from "react";
import uuid from 'react-uuid';


export let initialState = {
    transactions: [

    ],
    income:0,
    expense:0
}

if(!localStorage.getItem("transactions")){
    localStorage.setItem("transactions", "[]")
    localStorage.setItem("income", "0")
    localStorage.setItem("expense", "0")
}


let forLocalStorageObject = {
    transactions:JSON.parse(localStorage.getItem("transactions")),
    income:JSON.parse(localStorage.getItem("income")),
    expense:JSON.parse(localStorage.getItem("expense"))
}



const reducer = (state, action) => {
    switch (action.type) {
        case "ADD-TRANSACTION":{
            const newState ={
                ...state,
                transactions: [action.transaction, ...state.transactions],
            }

            let income = 0
            let expense = 0
            newState.transactions.forEach(f=>{
               if(f.value>0){
                   income+= f.value
               }else if(f.value<0){
                   expense+= f.value
               }
            })
            localStorage.setItem("transactions", `${JSON.stringify([...newState.transactions])}`)
            localStorage.setItem("income", `${income}`)
            localStorage.setItem("expense", `${expense}`)


            return {
                ...newState,
                income:income,
                expense:expense
            }}
        case "REMOVE-TRANSACTION":{
            const newState = {
                ...state,
                transactions:[...state.transactions.filter(transaction =>transaction.id !== action.id)]
            }
            let income = 0
            let expense = 0
            newState.transactions.forEach(f=>{
                if(f.value>0){
                    income+= f.value
                }else if(f.value<0){
                    expense+= f.value
                }
            })
            localStorage.setItem("transactions", `${JSON.stringify([...newState.transactions])}`)
            localStorage.setItem("income", `${income}`)
            localStorage.setItem("expense", `${expense}`)

            return {
                ...newState,
                income:income,
                expense:expense
            }
        }

        default:

            return state
    }
}


function App() {
    let [state, dispatch] = useReducer(reducer, forLocalStorageObject)

    return (
        <div className={"app"}>
            <div className={"container"}>
                <Header/>
                <Balance state={state}/>
                <ReportBoard state={state} />
                <History transactions={state.transactions} dispatch={dispatch}/>
                <AddNewTransaction dispatch={dispatch}/>
            </div>
        </div>
    )
}

export default App;
