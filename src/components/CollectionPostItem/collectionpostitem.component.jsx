import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'

import React from 'react'
import { withRouter } from "react-router-dom";
const CollectionPostItem = ( {name,imageUrl,alt,title,description,history, match}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image={imageUrl}
      alt={alt}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
      {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small" onClick= { () => history.push(`${match.url}${"detail/1"}`  ) } >Learn More</Button>
    </CardActions>
  </Card>
  )
}

export default withRouter(CollectionPostItem)