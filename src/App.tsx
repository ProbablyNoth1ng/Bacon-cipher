import './App.scss'

import Cipher from './components/Cipher/Cipher'
import Inputs from './components/Inputs/Inputs'
import Selection from './components/Selection/Selection'

function App() {

  return (
    <>
      <main className="main">
            <h3 className='text-white text-center font-bold text-3xl pb-5'>Bacon cipher - encoder / decoder</h3>
            <div className="main-inner bg-gray-600 px-7 py-5  rounded-xl">
                <Selection/>
                <Inputs/>
            </div>
            <Cipher />
        </main>
      
    </>
  )
}

export default App
