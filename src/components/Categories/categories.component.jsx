import { Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import React from "react";

const Categories = () => {
  return (
    <React.Fragment>
      <List component="nav" aria-label="main mailbox folders"
      subheader={
        <ListSubheader   component="div" id="nested-list-subheader">
          Services
        </ListSubheader>
        }>
        <ListItem button>
          <ListItemIcon>
           
          </ListItemIcon>
          <ListItemText primary="Deportes" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
        
          </ListItemIcon>
          <ListItemText primary="Tecnologia" />
        </ListItem>
      </List>
      <Divider />
      
    </React.Fragment>
  );
};

export default Categories;
