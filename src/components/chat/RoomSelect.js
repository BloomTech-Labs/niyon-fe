import React, { useState } from 'react'
import techs from './RoomTechs'

function RoomSelect ({ history }) {
  const [user, setUser] = useState({
    user_id: '',
    room_name: '',
    room_id: ''
  })

  const changeHandler = (e) => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const arrayHandler = (e) => {
    e.preventDefault()
    const arrID = Number(e.target.value)
    techs.map((item) => {
      if (item.id === arrID) {
        console.log(item)
        setUser({
          ...user,
          room_name: item.name,
          room_id: item.id
        })
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setTimeout(() => {
      // TODO: what url name are we going to do
      history.push(`/chatapp/${user.user_id}/${user.room_name}/${user.room_id}`)
    }, 2000)
  }

  return (
    <div>
      <form className='signin-form' onSubmit={submitHandler}>
        <input
          className='input-form'
          type= 'number'
          value={user.user_id}
          name='user_id'
          onChange={changeHandler}
          placeholder='Please enter user id'
        />
        <br/>
        <label className='label'>Join a Room</label>
        <br/>
        <select className='input-form' onChange={arrayHandler} >
          {techs.map((item, index) => {
            return <option name={item.name} value={Number(item.id)} key={index}>{item.name}</option>
          })}
        </select>
        <button className='btn' type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default RoomSelect
