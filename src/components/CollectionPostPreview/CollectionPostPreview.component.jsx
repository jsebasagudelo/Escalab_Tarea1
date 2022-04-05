import React from "react";
import CollectionPostItem from "../CollectionPostItem/collectionpostitem.component";
import {Grid } from '@material-ui/core'

const CollectionPostPreview = ({ title, items }) => (
   
    
  <Grid container >
     <Grid item xs={12}>
     <div className="preview">
      {items
      
        .map(({ id, ...otherItemProps }) => (
          <CollectionPostItem key={id} {...otherItemProps}  />
        ))}
    </div>
     </Grid>


  </Grid>
);

export default CollectionPostPreview;