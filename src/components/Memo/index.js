import React, { useState, useEffect, useMemo } from 'react'
function Toggle () {
    const step = 2;
  const [count, setCount] = useState(0)
  const changeCount = (count,step)=>{
    console.log("ccccccccccc\n",count)
    return function(){
        return count+step
    };
  }
  let memoizedValue = useMemo(()=>{
      changeCount(count,step)
    },[count,step])
  
  console.log(memoizedValue)
  return (
    <div>
        <br/>
        <h2>Memo</h2>
        <span>{memoizedValue}</span>
        <button onClick={() => setCount(count===3?count:count+1)}>
            click
        </button>
    </div>
  )
}
 
export default Toggle