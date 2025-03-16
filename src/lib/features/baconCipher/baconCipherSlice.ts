import { createSlice } from '@reduxjs/toolkit' 
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs';

export interface BaconCipher {
    mode:'encode' | 'decode';
    alphabetStyle:'separate' | 'standard';
    substitutionTable:Record<string,string>;
    inputText:string;
    outputText:string; 
}

const initialState: BaconCipher = {
    mode:'encode',
    alphabetStyle:'separate',
    substitutionTable: {  a: "AAAAA",
        b: "AAAAB",
        c: "AAABA",
        d: "AAABB",
        e: "AABAA",
        f: "AABAB",
        g: "AABBA",
        h: "AABBB",
        i: "ABAAA",
        j: "ABAAB",
        k: "ABABA",
        l: "ABABB",
        m: "ABBAA",
        n: "ABBAB",
        o: "ABBBA",
        p: "ABBBB",
        q: "BAAAA",
        r: "BAAAB",
        s: "BAABA",
        t: "BAABB",
        u: "BABAA",
        v: "BABAB",
        w: "BABBA",
        x: "BABBB",
        y: "BBAAA",
        z: "BBAAB",},
        inputText:'',
        outputText:'',
}

const baconCipherSlice = createSlice({
    name: 'baconCipher',
    initialState,
    reducers: {
        gatherUsersData: (state) => {
            console.log(`asdasd` + state.inputText)
        }
    }
  });
  


  export const {gatherUsersData} = baconCipherSlice.actions;
  export default baconCipherSlice.reducer