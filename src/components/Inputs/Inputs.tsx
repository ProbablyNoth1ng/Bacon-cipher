import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './Inputs.scss'  
 
import type { RootState } from '../../lib/store'
import { useSelector, useDispatch } from 'react-redux'
import { gatherUsersData } from '../../lib/features/baconCipher/baconCipherSlice'

const Inputs = () => {
    const [input,setInput] = useState<string>('')

    const cipherData = useSelector((state:RootState) => state.baconCipher)
    const dispatch = useDispatch()

    const handleChangeInput = (e:any) => {
        setInput(e.target.value)
        dispatch(gatherUsersData(e.target.value))
    }
    return (
        <>
            <div className="inputs pt-10">
                <h3 className="">Input:</h3>
                <textarea placeholder="Type what to encode" name="user input" id="" onChange={handleChangeInput} value={input} className="text-white user-input bg-gray-700 rounded-lg w-full p-2 mt-5"></textarea>
                <div className="wrapper flex justify-end">
                    <button className="clear cursor-pointer py-2 px-5 bg-gray-700 rounded-lg text-white"><FontAwesomeIcon icon={faArrowsRotate} />&nbsp;Clear</button>
                </div>
               <span className="text-white flex justify-between pt-5">
                    <h3>Result:</h3>
                    <button className="cursor-pointer text-white"><FontAwesomeIcon icon={faCopy} />&nbsp;  Copy</button>
               </span>
               <textarea placeholder="Output will appear here..." name="user input" id="" value={cipherData.outputText} className="text-white user-input bg-gray-700 rounded-lg w-full p-2 mt-5"></textarea>
            </div>
        </>
    )
}


export default Inputs;