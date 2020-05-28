import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateUsername } from '../redux/reducers/repositories'
import Head from './head'

const Dummy = () => {
  const dispatch = useDispatch()
  const username = useSelector((store) => store.repositories.username)
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800  font-bold rounded-lg border shadow-lg p-10">
          <input type="text"  value={username} onChange={(e) => {
            dispatch(updateUsername(e.target.value))
          }} />
          <Link to={`/${username}`}>Go to repos list</Link>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
