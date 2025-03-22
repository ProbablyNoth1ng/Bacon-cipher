import './Cipher.scss'
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'

const Cipher = () => {
    const cipher = useSelector((state:RootState) => state.baconCipher)
    const dispatch = useDispatch();
    return (
        <>
            <div className="cipher bg-gray-700 rounded px-7 py-5 mt-10">
                    <h3 className='text-white text-3xl text-center font-bold'>Cipher Key</h3>
                    <div className='keys pt-5'>
                        <table className='w-full caption-bottom text-lg'>
                            <thead className='[&_tr]:border-b'>
                                <tr className='h-12 px-4 text-left align-middle font-medium text-muted-foreground '>
                                    <th className='h-12 px-4 text-left   align-middle font-medium text-muted-foreground text-3xl '>Letter</th>
                                    <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground  text-3xl'>Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(cipher.substitutionTable).map(([letter,code]) => (
                                    <tr key={letter} className='tr-cipher h-12 px-4 text-left align-middle font-medium text-muted-foreground '>
                                        <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xl '>{letter}</th>
                                        <th className='h-12 px-4 text-left align-middle font-medium text-muted-foreground text-xl'>{code}</th>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        </>
    )
}

export default Cipher;