/**
 * The module managing the call with Axios
 * @module TestAxios
 */

import React, { useEffect } from 'react'
import Seo from '@components/Seo'
import axios from 'axios'

/**
 * @function TestAxios
 * Create the component for quering information with Axios
 * @return {Object} Return the dom of the TestAxios page
 */
const TestAxios = () => {

  useEffect(() => {
    /**
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
    **/
  })

  return (
    <>
      <Seo title="Axios" description="Axios test of calling request" />
      Test 2
    </>
  )
}

export default TestAxios
