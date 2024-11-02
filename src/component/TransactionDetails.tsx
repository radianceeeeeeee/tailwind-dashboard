import React from 'react'

export default function TransactionDetails( { paymentID, paymentName, paymentAmount, paymentTime } : { paymentID: number, paymentName: string, paymentAmount: number, paymentTime: string } ) {
  return (
    <div className='
        flex flex-row
        bg-gray-300
        p-8
        rounded-xl
        mb-2
        justify-between
    '>
        <div>{paymentID}</div>
        <div>{paymentName}</div>
        <div>{paymentAmount}</div>
        <div>{paymentTime}</div>
    </div>
  )
}
