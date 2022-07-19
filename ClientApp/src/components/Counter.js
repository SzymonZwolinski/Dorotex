import React, { Component } from 'react';

function importAll(r) {
     //import img z folderu do obiektu
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../Portfolio_img', false, /\.(png|jpe?g|svg)$/));   
var imagesArray = Object.keys(images).map(function (key) { return images[key]; }); //zmiana obiektu na tablice

export class Portfolio extends Component {
    
    render() { 
      return (

        <div>
            <h1>Portfolio</h1>
              <p>Przykładowe zdjęcia.</p>

              <div class="images-contener">
                  <ol class="images-list">
                      {imagesArray.map(item => (
                          <img src={item }></img>
                      ))}
                  </ol>
              </div>
             
          </div> 
        
    );
  }
}

