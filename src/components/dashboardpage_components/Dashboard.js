import React from 'react'

const Dashboard = () => {
  return (
    <div className="flex">
      <div className={'w-72 h-screen bg-dark-purple'}>Sidebar</div>
      <div className='p-7 text-2x1 font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default Dashboard;