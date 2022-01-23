/**
 * The module managing the secondary page
 * @module TestSwr
 */

import React from 'react'
import { useSWRConfig } from 'swr'
import useBack from '@src/pages/TestSwr/useBack'
import Seo from '@components/Seo'
import Another from '@src/pages/TestSwr/Another'

/**
 * @function TestSwr
 * Create the component Secondary
 * @return {Object} Return the dom of the TestSwr page
 */
const TestSwr = () => {
  const result = useBack()
  const result2 = useBack()
  const { cache, mutate } = useSWRConfig()

  const handleClickCache = () => {
    console.log(cache)
  }

  const handleClickMutate = () => {
    mutate('http://localhost:4000/')
  }

  return (
    <div className="container">
      <Seo title="Swr" description="Swr test of calling request" />
      <h1>SWR call</h1>
      <div>
        <button onClick={handleClickCache}>Console.log the cache</button>
        <button onClick={handleClickMutate}>Mutate the result</button>
      </div>
      <div className="wrapper">
        {Array.from([result.data, result2.data]).map((d, i) => {
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

export default TestSwr
