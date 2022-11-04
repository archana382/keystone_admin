import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Id}</th>
            <th>{individualExcelData.FirstName}</th>
            <th>{individualExcelData.LastName}</th>
            <th>{individualExcelData.Phone}</th>
            <th>{individualExcelData.Email}</th>
            <th>{individualExcelData.Country}</th>
        </>
    )
}

