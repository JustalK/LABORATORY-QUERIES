/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import Seo from '@components/Seo'
import { useGetBackQuery } from '../store/Slices/Slice1'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Children = () => {
  const result = useGetBackQuery()
  const result2 = useGetBackQuery()

  return (
    <div className="container">
      <Seo title="Axios" description="RTK test of calling request" />
      <h1>RTK call</h1>
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
      </div>
    </div>
  )
}

export default Children
