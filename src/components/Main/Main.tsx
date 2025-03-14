import { useState } from 'react';
import './Main.scss'

import Selection from '../Selection/Selection'
import Inputs from '../Inputs/Inputs'

const Main = () => {

    return (
        <>

        <main className="main">
            <h3 className='text-white text-center font-bold text-3xl pb-5'>Bacon cipher - encoder / decoder</h3>
            <div className="main-inner">
                <Selection/>
                <Inputs/>

        
            </div>
        </main>
        </>
       
    )
}

export default Main