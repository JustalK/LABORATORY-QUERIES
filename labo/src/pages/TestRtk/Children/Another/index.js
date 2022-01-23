/**
 * Example of module doing similar call in the app
 * @module Another
 */

import React from 'react'
import { useGetBackQuery } from '@src/pages/TestRtk/store/Slices/Slice1'

/**
 * @function Another
 * Create a component which trigger the same call as the main page
 * @return {Object} Return the dom of the Another component
 */
const Another = () => {
  const result = useGetBackQuery()

  if (!result || !result.data) {
    return null
  }

  return (
    <div className="card">
      <div>Call inside Another</div>
      <div>{result.data.status}</div>
      <div>{result.data.date}</div>
    </div>
  )
}

export default Another
