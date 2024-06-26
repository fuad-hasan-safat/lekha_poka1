"use client"
import React from 'react'
import Select, { ControlProps, DropdownIndicatorProps, StylesConfig, components } from "react-select";


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


    const DropdownIndicator:React.FC<DropdownIndicatorProps> =  props => {
        return (
          <components.DropdownIndicator {...props}>
            <img 
        
            className='h-5 w-5'
            src="/images/svgs/dropDown.svg"/>
          </components.DropdownIndicator>
        );
      };

      const style:StylesConfig  =  {
        control: (base: any) => ({
          ...base,
          border: 0,
          boxShadow: 'none'
        })
      };

    return (
        <>

            <Select 
            options={options}
            defaultInputValue='English (U.K)'
            closeMenuOnSelect={false}
            components={{DropdownIndicator}}
            styles={style}
            />

        </>
    )
}

function chroma(color: any) {
    throw new Error('Function not implemented.');
}
