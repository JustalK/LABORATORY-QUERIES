/**
 * Example of module doing similar call in the app
 * @module Another
 */

import React from 'react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

/**
 * @function Another
 * Create a component which trigger the same call as the main page
 * @return {Object} Return the dom of the Another component
 */
const Another = () => {
  const result = useSWR('http://api.server1.net/', fetcher)

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
