/**
 * @title user - dynamic route page
 */

import React from 'react'
import { useParams } from 'react-router-dom'

const IndexPage = () => {
  const { itemId } = useParams<{ itemId: string }>()
  return (
    <div>
      <div>User Main Page</div>
      <div>itemId: {itemId}</div>
    </div>
  )
}

export default IndexPage
