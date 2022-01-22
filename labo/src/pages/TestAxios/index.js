/**
 * The module managing the call with Axios
 * @module TestAxios
 */

import React, { useEffect } from 'react'
import Seo from '@components/Seo'
import axios from 'axios'
import Another from '@src/pages/TestAxios/Another'

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
 * @function TestAxios
 * Create the component for demonstrating how to quering data with Axios
 * @return {Object} Return the dom of the TestAxios page
 */
const TestAxios = () => {
  const [result, setResult] = React.useState(null)
  const [result2, setResult2] = React.useState(null)

  useEffect(() => {
    externalCall(setResult)
    externalCall(setResult2)
  }, [])

  const handleClick = () => {
    externalCall(setResult)
  }

  return (
    <div className="container">
      <Seo title="Axios" description="Axios test of calling request" />
      <h1>Axios call</h1>
      <button onClick={handleClick}>Update card 1</button>
      <div className="wrapper">
        {Array.from([result, result2]).map((d, i) => {
          if (!d) {
            return null
          }

          return (
            <div key={i} className="card">
              <div>Call inside useEffect</div>
              <div>{d.status}</div>
              <div>{d.date}</div>
            </div>
          )
        })}
        <Another />
      </div>
    </div>
  )
}

export default TestAxios
