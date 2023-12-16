import { useState } from "react";
export default function CurrencySelection(){
    const [selectedValue, setSelectedValue] = useState('');
    const options = ['USD', 'NGN', 'ASD'];

    const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
    return(
        <div className="">

            <div><img src="" alt="show soon" /></div>
            <span className="">Pick your reference currency</span>
            <div className="">
            <label htmlFor="customSelect">Select an option:</label>
                <select id="customSelect" value={selectedValue} onChange={handleSelectChange}>
                    <option value="">Select...</option>
                    {options.map((option, index) => (
                    <option key={index} value={option}>
                    {option}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}