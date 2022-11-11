import React, { useEffect, useRef } from 'react'
import FancyButton from '../component/FancyButton '
import HocComponent from '../component/HocComponent'
import CommonComponent from '../component/CommonComponent'
import { useState } from 'react';
import { useMemo } from 'react';
import { useCallback } from 'react';
export default function List() {

  const [age,setAge]=useState(18)
  const [name,setName]=useState('chili')

  function getName(){
    console.log('getName函数触发了');
    return 'no-'+age
  }

  const memoName=useMemo(()=>{
    console.log('memo触发了');
    return ()=>age
  },[age])


  return (
    <div>
      <p>{getName()}</p>
      <p>{memoName()}</p>
      {name}
      <button onClick={()=>setAge(age+1)}>Age++</button>
      <button onClick={()=>setName(name+'-')}>name+-</button>
    </div>
  )
}
