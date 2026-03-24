import React from 'react'

function ClientCreateCase() {
  return (
    <>  
        <div >
             <h1 className='text-lg font-serif font-bold text-gray-900 p-2'>Create New Case</h1>
             <div className='w-3/4 h-1/2 bg-gray-50 flex justify-center items-center'>
                <form action="" >
                    <div className='w-full p-2'>
                        <label htmlFor="">Problem Statement</label> <br />
                        <textarea className='bg-gray-300 w-full h-16' name="" id="" placeholder='Describe your legal issue in detail...'></textarea>
                    </div>
                    
                    <div className='w-full'>

                        <div className='w-1/2 '>
                            <label htmlFor="">Location</label>
                            <input type="text"  placeholder='Mumbai, Maharashtra'/>

                        </div>
                        <div className='w-1/2 '>
                            <label htmlFor="">Case Date</label>
                            <input type="date" placeholder='dd-mm-yyy'/>

                        </div>
                        
                    </div>
                    <div className='w-full'>
                        <label htmlFor="">Proof Files (optional)</label>
                        <input type="file" />
                    </div>

                    <button className=' w-full m-0 rounded bg-blue-600'>Submit & Analyze</button>

                </form>
             </div>
        </div>
      
    </>
  )
}

export default ClientCreateCase
