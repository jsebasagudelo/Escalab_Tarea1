
import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import CollectionPostDetail from './components/CollectionPostDetail/collectionpostdetail.component';
import Footer from './components/footer/footer.component';
import Header from './components/Header/header.component';
import HomePage from './pages/homepage/homepage.component';
//import CollectionPostCategories from  './components/CollectionPostCategories/collectionpostcategories.component'
import Contact from './components/Contact/contacto.component';
import About from './pages/About/About.component';
import Services from './pages/Services/services.component';


// Pattern Design -Stateless: 
class  App extends React.Component {

 render(){
  return (
    <div>
      {/*Pattern design: Render Props */}
      <Header/>
     
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/detail/:id" component={CollectionPostDetail} />
         {/* <Route exact path="/:id" component={CollectionPostCategories} /> */}
        <Route exact  path="/contact" component={Contact}    />
        <Route exact  path="/about" component={About}    />
        <Route exact  path="/services" component={Services}    />  
      </Switch>
      <Footer/>
 
    </div>
  );
 }

}

export   default App
 
