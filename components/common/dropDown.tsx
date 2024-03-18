"use client"
import React from 'react'
import Select from 'react-select'

// const colourStyles = {
//     control: (styles: any) => ({ ...styles, backgroundColor: 'white' }),
//     option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
//       const color = 'red';
//       return {
//         ...styles,
//         backgroundColor: isDisabled ? 'red' : 'blue',
//         color: '#FFF',
//         cursor: isDisabled ? 'not-allowed' : 'default',
//       };
//     },

//   };

const options = [
    { value: 'English (U.K)', label: 'English (U.K)' },
    { value: 'English (U.S.A)', label: 'English (U.S.A)' },
    { value: 'Bangla (BD)', label: 'Bangla (BD)' }
]

export default function DropDown() {
    const list = [
        {
            'language': 'English (U.K)'
        },
        {
            'language': 'English (U.S.A)'
        },
        {
            'language': 'Bangla (BD)'
        },
    ]
    return (
        <>

            <Select 
            options={options}
            defaultInputValue='English (U.K)'
            />

        </>
    )
}

function chroma(color: any) {
    throw new Error('Function not implemented.');
}
