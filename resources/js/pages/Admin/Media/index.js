import React from 'react';
import { Button, Result, Upload } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import MediaLibrary from '../../../components/containers/mediaLibrary';

const Media = ({}) => {

    const { mealplans } = useSelector(state => state)
    const dispatch = useDispatch();


    return(
        <>

            <MediaLibrary/>
        </>
    )
};

export default Media;
