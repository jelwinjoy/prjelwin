import { useState } from "react";

const Student = () => {
  const [na,setNa]=useState('');
  const [ad,setAd]=useState('');
  const [c,setC]=useState('');
  const [ph,setPh]=useState('');
  const [em,setEm]=useState('');
  const [error,setError]=useState(false);
  const readna=(event)=>{
      setNa(event.target.value);
  console.log(na);
  }
  const readad=(event)=>{
      setAd(event.target.value);
  console.log(ad);
  }
  const readc=(event)=>{
      setC(event.target.value);
  console.log(c);
  }
  const readph=(event)=>{
    setPh(event.target.value);
console.log(ph);
}
const readem=(event)=>{
  setEm(event.target.value);
console.log(em);
}
  const checkerror =(event)=>{
      if (na.trim()===''||ad.trim()===''||c.trim()===''||ph.trim()===''||em.trim()==='')
      {
          setError(true);
          return;
      }
  }
  const myobj={
    na:na,
    ad:ad,
    c:c,
    ph:ph,
    em:em
}
  return (
    <div>
      <h1>Course Registration</h1>
      <form>
      Name : <input type="text"onChange={readna}></input> <br></br>
      Address : <textarea onChange={readad}/> <br></br>
      Course : <input type="text"onChange={readc}></input> <br></br>
      Ph No : <input type="number"onChange={readph}></input> <br></br>
      Email : <input type="text"onChange={readem}></input> <br></br>
      <button value="submit"onClick={checkerror}>Save</button> <br></br>
      {error&& 'Error occurs'}
     
      </form>
    </div>
  )
}

export default Student
