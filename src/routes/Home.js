import React, { useState, useEffect } from 'react'
import { dbService } from '../fBase'

const Home = () => {
  const [nweet, setNweet] = useState('')
  const [nweets, setNweets] = useState([])

  useEffect(() => {
    getNweets()
  }, [])
  const getNweets = async () => {
    const dbNweets = await dbService.collection('nweets').get()
    dbNweets.forEach((document) => {
      const nweetObject = {
        ...document.data(),
        id: document.id,
      }
      setNweets((prev) => [nweetObject, ...prev])
    })
  }

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
        maxLength={120}
      ></input>

      {nweets.nweet}
      <input type="submit" value="Nweet"></input>
      {nweets.map((nweet) => (
        <div key={nweet.id}>{nweet.nweet}</div>
      ))}
    </form>
  )
}

export default Home
