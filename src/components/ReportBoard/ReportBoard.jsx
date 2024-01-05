import React from 'react';
import "./ReportBoard.css"


const ReportBoard = ({state}) => {


    return <div className={"reportBoard"}>
        <div className={"reportBoard__income"}>
            <h5 className={"income__title"}>Income</h5>
            <div className={"income__value"}>${state.income}</div>
        </div>
        <div className={"reportBoard__expense"}>
            <h5 className={"expense__title"}>Expense</h5>
            <div className={"expense__value"}>-${Math.abs(state.expense)}</div>
        </div>
    </div>
};


export default ReportBoard;
