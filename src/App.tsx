import React from 'react'
import { IoClose } from "react-icons/io5";
import Navigation from './components/Navigation';
import NotificationList from './components/NotificationList';
type Props = {}

const App = (props: Props) => {
  return (
    <div className='flex min-h-screen bg-white justify-center items-center'>
      <div className='max-w-md w-full border border-gray-300 rounded-lg px-6 py-4 shadow-md flex flex-col gap-y-4'>
        <div>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-semibold' >Your notification</h1>
            <button className='font-thin text-gray-500'>
              <IoClose size={24} />
            </button>
          </div>
        </div>
        <div>
          <Navigation />
        </div>
        <div>
          <NotificationList />
        </div>
      </div>
    </div>
  )
}

export default App