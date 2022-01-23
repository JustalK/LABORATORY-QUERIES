/**
 * The module managing the secondary page
 * @module Secondary
 */

import React from 'react'
import Seo from '@components/Seo'
import { Provider } from 'react-redux'
import store from './store'
import Children from './Children'

/**
 * @function Secondary
 * Create the component Secondary
 * @return {Object} Return the dom of the Secondary page
 */
const TestRtk = () => {
  return (
    <>
      <Seo title="TestRtk" description="How to use RTK" />
      <Provider store={store}>
        <Children />
      </Provider>
    </>
  )
}

export default TestRtk
