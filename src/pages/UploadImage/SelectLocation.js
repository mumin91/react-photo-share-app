import React, {useState} from 'react';
import Select from 'react-select';

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];


const SelectLocation = props => {
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleChange = selectedLocation => {
        setSelectedLocation(selectedLocation);
        props.setLocation(selectedLocation.value);
    };

    return (
        <Select
            name="location"
            value={selectedLocation}
            onChange={handleChange}
            options={options}
            required
        />
    );

}

export default SelectLocation;