/**
 * The module managing the home page
 * @module Home
 */

import React from 'react'
import Seo from '@components/Seo'
import { ROUTE_SWR, ROUTE_AXIOS, ROUTE_RTK } from '@constants/routes'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  return (
    <div className="container">
      <Seo title="Home" description="Laboratory for queries" />
      <main className="main">
        <h1 className="title">DIFFERENCES BETWEEN QUERIES</h1>
        <div className="subtitle">Click on one of the link below</div>
        <span>
          <a href={ROUTE_AXIOS}>AXIOS</a>-<a href={ROUTE_SWR}>SWR</a>-
          <a href={ROUTE_RTK}>RTK Queries</a>
        </span>
      </main>
    </div>
  )
}

export default Home
