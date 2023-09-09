// import React from 'react'
// import {FaUser} from 'react-icons/fa'
import {AiOutlineStar,AiOutlineEdit} from 'react-icons/ai'

export const TestBang = () => {
  return (
    <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                
                        <th scope="col" className="px-6 py-3">
                            My Profile
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                       
                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <div className='flex'>
                                <div className='flex items-center justify-center h-12 w-12 rounded-full bg-[#047857]'>
                                    <span className='text-white font-bold text-2xl'>HC</span>
                                </div>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">Hadiza Cahya Firdaus</div>
                                    <div className="font-normal text-gray-500">+628773291742</div>
                                </div>
                            </div>
                            <div className='flex justify-end text-2xl'>
                                <AiOutlineStar/>
                                <AiOutlineEdit/>
                            </div>
                        </th>

                    </tr>

                </tbody>
            </table>
        </div>
    </div>
  )
}
