import { useState } from "react"


const Course = () => {
    const [cn,setCn]=useState('');
    const [d,setD]=useState('');
    const [f,setF]=useState('');
    const [error,setError]=useState(false);
    const readcn=(event)=>{
        setCn(event.target.value);
    console.log(cn);
    }
    const readd=(event)=>{
        setD(event.target.value);
    console.log(d);
    }
    const readf=(event)=>{
        setF(event.target.value);
    console.log(f);
    }
    const checkerror =(event)=>{
        if (cn.trim()===''||d.trim()===''||f.trim()==='')
        {
            setError(true);
            return;
        }
    }
    const myobj={
        cn:cn,
        dt:d,
        fe:f
    }
  return (
    <div>
      <h1>Course Registration</h1>
      <form>
      Course Name : <input type="text"onChange={readcn}></input> <br></br>
      Duration : <input type="number"onChange={readd}></input> <br></br>
      Fee : <input type="number"onChange={readf}></input> <br></br>
      <button value="submit"onClick={checkerror}>Save</button> <br></br>
      {error&& 'Error occurs'}
     
      </form>
    </div>
  )
}

export default Course
