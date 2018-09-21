import React from 'react'
import './FeedItem.css'
import Grid from '@material-ui/core/Grid'

const FeedItem = ({item}) => {
  return (
    <div>
      <Grid>
        <div className='handle'>{item.handle}</div>
        <div className='text'>{item.text}</div>
      </Grid>
    </div>
  )
}

export default FeedItem
