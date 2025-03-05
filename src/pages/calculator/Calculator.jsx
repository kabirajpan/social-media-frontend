import React, { useState } from 'react'
import './calculator.css'

export default function Calculator() {

    const [result, setResult] = useState("")
    const [fc, setFc] = useState('')
    const [operation, setOperation] = useState('')
    const [firstNum, setFirstNum] = useState(0)

    
    
    const calculate = (value) => {
        
        setResult( result + value.target.textContent)
        if(fc == '+' || fc == '-' || fc == '*' || fc == '/' || fc == 'Empty') {
            setFirstNum(parseInt(result))  
            setResult(value.target.textContent)
            setOperation(fc)
            setFc('')
        }

        
        
    }
    
    const addition = () => {
        setFc('+')
    }
    
    const division = () => {
        setFc('/')
    }

    const subtraction = () => {
        setFc('-')
    }

    const multiplication = () => {
        setFc('*')
    }
    
    const equal = () => {

        const secondNum = parseInt(result)
        let finalResult
        
        switch(operation) {
            case '+':
                finalResult = firstNum + secondNum
                setResult(finalResult)
                setFc('Empty')
                break;
            case '-':
                finalResult = firstNum - secondNum
                setResult(finalResult)
                setFc('Empty')
                break;
            case '*':
                finalResult = firstNum * secondNum
                setResult(finalResult)
                setFc('Empty')
                break;
            case '/':
                finalResult = firstNum / secondNum
                setResult(finalResult)
                setFc('Empty')
                break;
            default:
                console.log('Error somewhre');    
        }
        
    }

    const allClear = () => {
        setResult('')
    }

    

  return (
    <>
        <div className="calculator">
            <div className="calculatorWrapper">
            <div className="calculatorScreen">
                <h3 className='calculatorScreenResult'> {result} </h3>
            </div>
            <div className="calculatorButtons">
                <div className="buttonLine01">
                    <button className='button' onClick={allClear} >AC</button>
                    <button className='button' onClick={calculate} >+/-</button>
                    <button className='button' onClick={calculate} >%</button>
                    <button className='button operatorButton' onClick={division} >/</button>
                </div>
                <div className="buttonLine02">
                    <button className='button' onClick={calculate} >7</button>
                    <button className='button' onClick={calculate} >8</button>
                    <button className='button' onClick={calculate} >9</button>
                    <button className='button operatorButton' onClick={multiplication} >*</button>
                </div>
                <div className="buttonLine03">
                    <button className='button' onClick={calculate} >4</button>
                    <button className='button' onClick={calculate} >5</button>
                    <button className='button' onClick={calculate} >6</button>
                    <button className='button operatorButton' onClick={subtraction} >-</button>

                </div>
                <div className="buttonLine04">
                    <button className='button' onClick={calculate} >1</button>
                    <button className='button' onClick={calculate} >2</button>
                    <button className='button' onClick={calculate} >3</button>
                    <button className='button operatorButton' onClick={addition} >+</button>
                </div>
                <div className="buttonLine05">
                    <button className='button button-0' onClick={calculate} >0</button>
                    <button className='button' onClick={calculate} >.</button>
                    <button className='button ' onClick={equal} >=</button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
