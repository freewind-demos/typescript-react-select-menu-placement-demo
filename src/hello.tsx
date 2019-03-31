//import * as React from 'react'
import React, {useState} from 'react'
import Select from 'react-select';
import {ValueType, OptionsType} from "react-select/lib/types";

type OptionType = {
  value: string,
  label: string
}

const options: OptionsType<OptionType> = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];

export default function Hello() {
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null)
  return <div>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} menuPlacement={'top'}/>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} menuPlacement={'top'}/>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} menuPlacement={'top'}/>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} menuPlacement={'top'}/>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} menuPlacement={'top'}/>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} menuPlacement={'top'}/>
  </div>
};
