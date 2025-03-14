import { useState } from "react";
import './Selection.scss'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const Selection = () => {
    const [standard, setStandard] = useState<string>('');
    const [crypt,setCrypt] = useState<boolean[]>([true,false])
    const [replace,setReplace] = useState<boolean>(false)

    const handleChange = (event:any) => {
      setStandard(event.target.value);
      console.log(event.target.classList)
    }

    const handleCryptToggle = (event:any) => {
        //disabled
        if(event.target.classList.contains("bg-gray-600")){
            console.log(event.target.classList.contains)
            setCrypt([crypt[1],crypt[0]])   
        }
    }

    const handleReplace = () =>{
        setReplace(!replace)
    }
    return (
        <>
            <div className="selection  items-center " >
                <div className="selection-start flex justify-between">
                    <div className="crypt-selection bg-gray-600 p-2 items-center">
                        <button className={`text-white text-xl ${crypt[0] ? "bg-gray-700" : "bg-gray-600"} p-2 rounded-md cursor-pointer`} onClick={handleCryptToggle}>Encrypt (encode)</button>
                        <button className={`text-white text-xl ${crypt[1] ? "bg-gray-700" : "bg-gray-600"} p-2 rounded-md cursor-pointer`} onClick={handleCryptToggle}>Decrypt (decode)</button>
                    </div>
                    <div className="standard-selection">
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Standard</InputLabel> 
                                <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={standard}
                                onChange={handleChange}
                                label="Age"
                                >
                    
                                <MenuItem value={10}>Separate Values</MenuItem>
                                <MenuItem value={20}>Standard(I=J, U=V)</MenuItem>

                                </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="selection-end flex justify-between items-center pt-5">
                    <FormControlLabel
                        className=""
                        control={<Android12Switch defaultChecked />}
                        label="Separate values with spaces"
                    />
                    <p>Replace A with B: <span className="bg-gray-700 p-3 rounded-sm cursor-pointer" onClick={handleReplace}>{replace ? "B" : "A"}</span></p>
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