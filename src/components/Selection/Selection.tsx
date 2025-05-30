import { useState } from "react";
import './Selection.scss'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { setSeparateValues,setReplaceValues, setMode, setAlphabetStyle, removeData, encrypt, decrypt } from '../../store/baconCipher/baconCipherSlice'

const Selection = () => {
    const cipherData = useSelector((state:RootState) => state.baconCipher)
    const dispatch = useDispatch();

    const [standard, setStandard] = useState<string>('');
    const [crypt,setCrypt] = useState<boolean[]>([true,false])
    const [replace,setReplace] = useState<boolean>(false)
    const [separateSwitch,setSeparateSwitch] = useState<boolean>(false)

    const handleStandardChange = (event:any) => {
      setStandard(event.target.value);
      dispatch(setAlphabetStyle(event.target.value))
      cipherData.mode === 'encode' ? dispatch(encrypt()) : dispatch(decrypt())
    }

    const handleCryptToggle = (event:any) => {
      
        if(event.target.classList.contains("bg-gray-600")){
            console.log(event.target.classList.contains)
            setCrypt([crypt[1],crypt[0]])  
            if(crypt[1]){
              dispatch(setMode("encode"))
              } else {
              dispatch(setMode("decode"))
            }

            dispatch(removeData())
        }
    }

    const handleReplace = () =>{
        setReplace(!replace)
        dispatch(setReplaceValues(!replace))
        cipherData.mode === 'encode' ? dispatch(encrypt()) : dispatch(decrypt()) 
    }
    
    const handleSwitch = () => {
      setSeparateSwitch(!separateSwitch)
      dispatch(setSeparateValues(!separateSwitch))
      cipherData.mode === 'encode' ? dispatch(encrypt()) : dispatch(decrypt()) 
    }
    return (
        <>
            <div className="selection  items-center " >
                <div className="selection-start flex justify-between">
                    <div className="crypt-selection bg-gray-600 p-2 items-center">
                        <button className={`text-white text-xl ${crypt[0] ? "bg-gray-700" : "bg-gray-600"} p-2 rounded-md cursor-pointer`} onClick={handleCryptToggle}>Encrypt (encode)</button>
                        <button className={`text-white text-xl ${crypt[1] ? "bg-gray-700" : "bg-gray-600"} p-2 rounded-md cursor-pointer`} onClick={handleCryptToggle}>Decrypt (decode)</button>
                    </div>
                    <div className="standard-selection ">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Standard</InputLabel> 
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={standard}
                                onChange={handleStandardChange}
                                label="Age"
                                >
                    
                                <MenuItem value={'separate'}>Separate Values</MenuItem>
                                <MenuItem value={'standard'}>Standard(I=J, U=V)</MenuItem>

                                </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="selection-end flex justify-between items-center pt-5">
                    <FormControlLabel
                        className="text-white"
                        control={<Android12Switch defaultChecked={separateSwitch} />}
                        label="Separate values with spaces"
                        onChange={handleSwitch}
                    />
                    <p className="text-white">Replace A with B: <span className="bg-gray-700 p-3 rounded-sm cursor-pointer" onClick={handleReplace}>{replace ? "B" : "A"}</span></p>
                </div>

            </div>
        </>
    )
}

export default Selection;


const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&::before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&::after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }));