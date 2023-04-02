import './Cal.css'
import { Container } from '@mui/material';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useState } from 'react';
const Cal = () => {
    const Section =styled.section`
        .main{
            height: 200px;
            width: 27%;
            border: 2px solid red;
            margin-left: 28rem;
            margin-top: 5rem;
          }
        .display{
          height: 3rem;
          width: 93%;
          padding: 10px;
          text-align: right;
          border: 2px solid red;
          background-color: #e2e2e2;
        }
        .but{
          background: #333;
          height: 85px;
          width: 77px;
          color: white;
          font-size: 30px;
          float: left;
          border: 2px solid black;
        }

    `
    const [result,setResult] = useState('')
    const  Handler=(e)=>{
        setResult(result.concat(e.target.value))
    }
    const Clear=()=>{
      setResult('')
    }
    const Calculates=()=>{
      setResult(eval(result).tostring())
    }
  return (
    <>
    <Section>
      <Container>

        <div className="main">
        
        <div className="button">
          <input type="text" placeholder='0' className='display' value={result} />
        <input type="button" className='but' value='7' onClick={Handler}/>
        <input type="button" className='but' value='8' onClick={Handler}/>
        <input type="button" className='but' value='9' onClick={Handler}/>
        <input type="button" className='but' value='/' onClick={Handler}/>
        <input type="button" className='but' value='4' onClick={Handler}/>
        <input type="button" className='but' value='5' onClick={Handler}/>
        <input type="button" className='but' value='6' onClick={Handler}/>
        <input type="button" className='but' value='x' onClick={Handler}/>
        <input type="button" className='but' value='1' onClick={Handler}/>
        <input type="button" className='but' value='2' onClick={Handler}/>
        <input type="button" className='but' value='3' onClick={Handler}/>
        <input type="button" className='but' value='-' onClick={Handler}/>
        <input type="button" className='but' value='0' onClick={Handler}/>
        <input type="button" className='but' value='+' onClick={Handler}/>
        <input type="button" className='but' value='=' onClick={Calculates}/>
        <input type="button" className='but' value='clear' onClick={Clear}/>
        </div>
        </div>
      </Container>
    </Section>

    </>
  )
}

export default Cal
