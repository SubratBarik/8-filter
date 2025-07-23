import React from 'react'

function PracTernary() {

    //syntax: condition ? true : false
    const marks = 40;

    const checkMark = () => {
        return marks > 35 ? "Pass" : "Fail";
    }

  return (
    <>
        <h3>Ternary Operator</h3>
        <p style={{margin: '0', padding: '0'}}>Marks Obtained: {marks}</p>
        <p>Result: {checkMark()}</p>
    </>
  )
}

export default PracTernary;
