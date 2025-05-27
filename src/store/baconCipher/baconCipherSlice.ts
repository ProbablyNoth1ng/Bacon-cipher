import { createSlice } from '@reduxjs/toolkit' 
import type { PayloadAction } from '@reduxjs/toolkit'
import { defaultTable,alternativeTable, defaultIJUVTable, alternativeIJUVTable } from '../../tables';

export interface BaconCipher {
    mode:'encode' | 'decode';
    alphabetStyle:'separate' | 'standard';
    separateValues:boolean;
    replaceLetters:boolean;
    substitutionTable:Record<string,string>;
    inputText:string;
    outputText:string; 
}


const initialState: BaconCipher = {
    mode:'encode',
    alphabetStyle:'separate',
    separateValues:false,
    replaceLetters:false,
    substitutionTable: defaultTable,
    inputText:'',
    outputText:'',
}

const baconCipherSlice = createSlice({
    name: 'baconCipher',
    initialState,
    reducers: {
        setMode:(state,action:PayloadAction<'encode' | 'decode'>) => {
            state.mode = action.payload
            console.log(`mode - ${action.payload}  `)
        },
        setAlphabetStyle:(state,action:PayloadAction<'separate' | 'standard'>) => {
            state.alphabetStyle = action.payload
            if(action.payload === 'standard'){
              state.substitutionTable = defaultIJUVTable;
            } else {
              state.substitutionTable = defaultTable;
            }
            console.log(`AlphabetStyle - ${action.payload}`)
        },
        setInputText:(state,action:PayloadAction<string>) => {
            state.inputText = action.payload
            console.log(`input - ${action.payload}`)
        },
        setSeparateValues:(state,action:PayloadAction<boolean>) => {
            state.separateValues = action.payload
            console.log(`separate - ${action.payload}`)
            
        },
        setReplaceValues:(state,action:PayloadAction<boolean>) => {
            state.replaceLetters = action.payload
            console.log(`replace - ${action.payload} `)
            if(state.alphabetStyle === 'separate'){
              if(action.payload){
                state.substitutionTable = alternativeTable;
                console.log('flipped')
              } else {
                state.substitutionTable = defaultTable;
                console.log('flipped')
              }
            } else {
              if(action.payload){
                state.substitutionTable = alternativeIJUVTable;
                console.log('flipped')
              } else {
                state.substitutionTable = defaultIJUVTable;
                console.log('flipped')
              }
            }
          
        },
        removeData:(state) => {
          state.inputText = "";
          state.outputText = "";
        },
        
        encrypt: (state) => {
            let res: string[] = [];
            let input: string[];
         
            if (state.separateValues) {
              input = state.inputText.split(' ');
              for (let word of input) {
                for (let letter of word) {
                  Object.entries(state.substitutionTable).map(([tableLetter, tableCode]) => {
                    if (tableLetter === letter) {
                      
                      res.push(tableCode);
                    }
                  });
                }
                res.push(' ')
              }
              
              console.log(res)
              state.outputText = res.join('')
            } else {
                console.log(state.substitutionTable)
                input = state.inputText.split('');
                for (let letter of input) {
                    Object.entries(state.substitutionTable).map(([tableLetter, tableCode]) => {
                    if (tableLetter === letter) {
                        res.push(tableCode);
                    }
                    });
                }

                console.log(res)
                state.outputText = res.join('')
            }
        },
        decrypt:(state) => {
            console.log(state.substitutionTable)
            console.log('decrypt')
            let res:string[] = []
            let input: string[];

            if(state.separateValues){
               input = state.inputText.split(' ')
               console.log(`inp - ${input}`)
                for(let i = 0; i < input.length; i++){
                
                  for(let j = 0; j < input[i].length; j+=5){
                    let inputTableCode = input[i].slice(j,j+5)
                    console.log(inputTableCode)
                    Object.entries(state.substitutionTable).map(([tableLetter, tableCode]) => {

                      if (inputTableCode.toUpperCase() === tableCode) {
                        res.push(tableLetter);  
                      }
                    });
                  }
                  res.push(' ')
                
               }
               console.log(res)
            } else {
              input = state.inputText.split('')
              
              for(let i = 0; i < input.length; i+=5){
                let inputTableCode = input.slice(i,i+5).join('')
                console.log(`${i} - ${input.slice(i,i+5).join('')}`)
                Object.entries(state.substitutionTable).map(([tableLetter, tableCode]) => {

                  if (inputTableCode.toUpperCase() === tableCode) {
                    console.log(`inputcode - ${inputTableCode}`)
                    console.log(`letter- ${tableLetter}`)
                    res.push(tableLetter);
                  }
                });
              }

              
            }
            console.log(res)

            if (state.alphabetStyle === 'standard') {
              for (let i = 0; i < res.length; i++) {
                if (res[i] === 'v' || res[i] === 'j') {
                  console.log(`removing ${res[i]} at index ${i}`)
                  res.splice(i, 1) 
                  i--
                }
              }
            }
            state.outputText = res.join('')

        }
    }
});



  export const {setMode, setAlphabetStyle, setInputText, setReplaceValues, setSeparateValues, removeData, encrypt, decrypt} = baconCipherSlice.actions;
  export default baconCipherSlice.reducer