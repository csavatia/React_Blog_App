import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext'

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
      })
    })
  }, [])

  function logout() {
    fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include',
    })
    setUserInfo(null)
  }
  const username = userInfo?.username
  return (
    <header>
      <Link to='/' className='logo'>
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <span>Hello, {username}</span>
            <Link to='/create'>Create new Post</Link>
            <a href='#' onClick={logout}>
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
