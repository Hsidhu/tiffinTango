import React, { useState, useRef } from 'react';
import LoadScript from 'google-map-react';
import {
    AutoComplete
} from 'antd';

import { GOOGLE_API_KEY, orderTypeOptions } from '../config/constants';

export default function PlacesAutoComplete() {

    const [autocomplete, setAutocomplete] = useState();

    const onPlaceChanged = () => {
        
    }

    return (
        <LoadScript
            googleMapsApiKey={GOOGLE_API_KEY}
            libraries={['drawing', 'geometry']}
        >
            <AutoComplete
                onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                onPlaceChanged={onPlaceChanged}
                restrictions={{ country: "fr" }}
                fields={['geometry.location', 'formatted_address']}
            >
                <input
                    type="text"
                    placeholder="Enter your address"
                    className="ant-input"
                />
            </AutoComplete>
        </LoadScript>
    );
}


