import React from 'react';
import './App.css';
import TransactionDetails from './component/TransactionDetails';

const details = [
  {"id": 1, "name": "Alice", "amount": 100.00, "time": "2023-11-02 12:34:56"},
  {"id": 2, "name": "Bob", "amount": 250.50, "time": "2023-11-03 09:15:23"},
  {"id": 3, "name": "Charlie", "amount": 75.25, "time": "2023-11-04 17:42:18"},
  {"id": 4, "name": "David", "amount": 123.75, "time": "2023-11-05 11:30:00"},
  {"id": 5, "name": "Emily", "amount": 99.99, "time": "2023-11-06 08:45:32"},
  {"id": 6, "name": "Frank", "amount": 200.00, "time": "2023-11-07 15:10:47"},
  {"id": 7, "name": "Grace", "amount": 35.50, "time": "2023-11-08 22:22:22"},
  {"id": 8, "name": "Henry", "amount": 187.12, "time": "2023-11-09 03:09:13"},
  {"id": 9, "name": "Iris", "amount": 42.99, "time": "2023-11-10 10:55:44"},
  {"id": 10, "name": "Jack", "amount": 67.89, "time": "2023-11-11 19:21:05"}
]

function App() {
  return (
    <div className='
      h-screen w-screen
      flex flex-row'
    >
      <div className='
        hidden
        md:block
        w-1/4 
        bg-slate-800 
        text-white
        p-8'
      >
        <div className='mb-8 text-3xl font-bold'>
          Dashboard
        </div>
        <nav>
          <ul>Home</ul>
          <ul>About Us</ul>
          <ul>Contact</ul>
        </nav>
      </div>

      <div className='
        flex flex-col w-full
        overflow-y-scroll'
      >
        <div className='
          bg-slate-200 
          lg:h-1/3
          p-8'
        >
          <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
          <h2 className='text-gray-600 hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis iaculis urna, euismod sagittis ante maximus quis. Donec scelerisque fringilla iaculis. Donec vestibulum nunc velit, sit amet pellentesque felis aliquam et. Aliquam quis mi orci. Ut et sodales odio, id semper nulla. Maecenas feugiat nunc quam. Donec a nunc dui. Phasellus non metus scelerisque, auctor lorem ac, dictum lectus. Nulla vehicula interdum tincidunt. Morbi tempus, felis a imperdiet suscipit, neque velit faucibus nibh, vel scelerisque lacus ligula sit amet eros. </h2>
        </div>
        <div className='
          bg-white 
          h-2/3
          p-8'
        >
          <div className='
            text-xl font-bold 
            mb-8'
          >
            Transactions
          </div>
          <div>
            {details.map((t) => (
              <TransactionDetails paymentID={t.id} paymentName={t.name} paymentAmount={t.amount} paymentTime={t.time}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
