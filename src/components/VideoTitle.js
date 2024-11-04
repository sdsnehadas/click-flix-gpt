import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div>
            <button type="button" className="py-2.5 px-5 me-2 mb-2  font-bold text-gray-900 bg-white rounded-lg border border-black hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-xl bg-opacity-50 "><span>▶️</span> Play</button>
            <button type="button" className="py-2.5 px-5 me-2 mb-2  font-bold text-white bg-gray-300 rounded-lg border border-black hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-200 dark:bg-gray-100 dark:text-gray-100 dark:border-gray-100 dark:hover:bg-gray-200 text-xl bg-opacity-50"><span>ℹ️</span> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;