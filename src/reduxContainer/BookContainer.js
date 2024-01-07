import React from "react";
import { useDispatch, useSelector } from "react-redux";
import purchage_book from "./BookAction";

function BookContainer () {
  const noOfBooks = useSelector(state => state.NumberOfBooks)
  const dispatch = useDispatch();
  return (
    <>
     <h1>Book Container</h1>
     <h2> No of Books - {noOfBooks}</h2>
     <button onClick={() => dispatch(purchage_book())}>Buy Book</button>
    </>
  )
}

export default BookContainer;