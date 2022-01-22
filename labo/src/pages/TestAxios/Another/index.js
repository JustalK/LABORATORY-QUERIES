/**
 * Example of module doing similar call in the app
 * @module Another
 */

import React, { useEffect } from 'react'
import axios from 'axios'

/**
 * Use axio for calling an external API
 * @param {React.dispatch<string>} set The setter from an useState
 * */
const externalCall = (set) => {
  axios.get('http://localhost:4000/').then((response) => {
    set(response.data)
  })
}

/**
 * @function Another
 * Create a component which trigger the same call as the main page
 * @return {Object} Return the dom of the Another component
 */
const Another = () => {
  const [result, setResult] = React.useState(null)

  useEffect(() => {
    externalCall(setResult)
  }, [])

  if (!result) {
    return null
  }

  return (
    <div className="card">
      <div>Call inside Another</div>
      <div>{result.status}</div>
      <div>{result.date}</div>
    </div>
  )
}

export default Another
