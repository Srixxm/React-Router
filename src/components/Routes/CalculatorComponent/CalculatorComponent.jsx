import React from 'react'

function CalculatorComponent() {
    //  addone()
    // {
        
    // }
  return (
    <React.Fragment>
        <form >
            <input type="text" name='answer'/><br></br>

            <button name='one' value={1}>1</button>
            <input type="button" name="One" value={2}/> 
            <input type="button" name="One" value={3}/> <br></br> 
            <input type="button" name="One" value={4}/> 
            <input type="button" name="One" value={5}/> 
            <input type="button" name="One" value={6}/> <br></br>
            <input type="button" name="One" value={7}/> 
            <input type="button" name="One" value={8}/> 
            <input type="button" name="One" value={9}/> <br></br>
            <input type="button" name="One" value={0}/> 
        </form>
    </React.Fragment>
  )
}
export default CalculatorComponent