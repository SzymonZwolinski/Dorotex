import React, { Component } from 'react';
import  ModalImage  from 'react-modal-image';
import { importAll } from './importAll.js';
import "./gallery.css";


export class Portfolio extends Component {
     static counter = 0;
    

    render() {
     

        const imageClick = e => {
            console.log(e.target.id);
            var clickedTarget = document.getElementById(e.target.id);
       
        }
               
        const images = importAll(require.context('../Portfolio_img', false, /\.(png|jpe?g|svg)$/));   
        var imagesArray = Object.keys(images).map(function (key) { return images[key]; }); //zmiana obiektu na tablice
      return (
          <div>

             



            <h1>Portfolio</h1>
              <p>Przykładowe zdjęcia.</p>

              <div class="images-contener">
                  <ol class="images-list">
                      {imagesArray.map(item => (
                          <ModalImage small={item} large={item} id={Portfolio.counter++} onClick={imageClick} hideDownload hideZoom />
                      ))}
                  </ol>
              </div>
             
          </div> 
        
        );
        
    }

   
    
}

