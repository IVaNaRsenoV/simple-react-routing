import React from 'react';
import { useParams } from 'react-router-dom';

export const Param = () => {
    const { id } = useParams();
    return (
        <>
            Parametrs: {id}
        </>
    );
}