import { useState } from "react";
import TextField from '@mui/material/TextField';

const Inputs = () => {
    return (
        <>
            <div className="inputs pt-10">
                <h3 className="py-3">Inputs</h3>
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                />
            </div>
        </>
    )
}


export default Inputs;