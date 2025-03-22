import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './Inputs.scss'  
 
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { encrypt, decrypt, setInputText } from '../../store/baconCipher/baconCipherSlice'

const Inputs = () => {
    const [input,setInput] = useState<string>('')
    const outputRef = useRef<HTMLTextAreaElement>(null)

    const cipherData = useSelector((state:RootState) => state.baconCipher)
    const dispatch = useDispatch()

    const handleChangeInput = (e:any) => {
        setInput(e.target.value)
        dispatch(setInputText(e.target.value))
        cipherData.mode === 'encode' ? dispatch(encrypt()) : dispatch(decrypt())
        
        console.log()
    }

    const clearInput = (e:any) => {
        setInput('')
        e.target.value = ""
        dispatch(setInputText(e.target.value))
    }


    const copyOutput = () => {
        navigator.clipboard.writeText(outputRef.current?.value || '')
    }

    return (
        <>
            <div className="inputs pt-10">
                <h3 className="text-white">Input:</h3>
                {cipherData.mode ? 
                 <textarea placeholder="Type what to encode"  name="encode input" id="" onChange={handleChangeInput} value={cipherData.inputText} className="text-white user-input bg-gray-700 rounded-lg w-full p-2 mt-5"></textarea>
                 :
                 <textarea placeholder="Type what to decode"  name="decode input" id="" onChange={handleChangeInput} value={cipherData.inputText} className="text-white user-input bg-gray-700 rounded-lg w-full p-2 mt-5"></textarea>
                }
               
                <div className="wrapper flex justify-end">
                    <button className="clear cursor-pointer py-2 px-5 bg-gray-700 rounded-lg text-white" onClick={clearInput}><FontAwesomeIcon icon={faArrowsRotate} />&nbsp;Clear</button>
                </div>
               <span className="text-white flex justify-between pt-5">
                    <h3>Result:</h3>
                    <button className="cursor-pointer text-white"  onClick={copyOutput}><FontAwesomeIcon icon={faCopy} />&nbsp;  Copy</button>
               </span>
               <textarea placeholder="Output will appear here..." value={cipherData.outputText} readOnly  ref={outputRef} name="user input" id=""  className="text-white user-input bg-gray-700 rounded-lg w-full p-2 mt-5"></textarea>
            </div>
        </>
    )
}


export default Inputs;