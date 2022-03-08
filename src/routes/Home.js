import React, { useState } from 'react'
import { dbService } from '../fBase'

const Home = () => {
  const [nweet, setNweet] = useState('')
  const onSubmit = async (event) => {
    event.preventDefault()
    await dbService.collection('nweets').add({
      nweet,
      createdAt: Date.now(),
    })
    setNweet('')
  }
  const onChange = (event) => {
    const {
      target: { value },
    } = event
    setNweet(value)
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        value={nweet}
        type="text"
        placeholder="What's on your mind?"
        onChange={onChange}
        maxLengh={120}
      ></input>
      <input type="submit" value="Nweet"></input>
    </form>
  )
}

export default Home
