import { searchUrl } from './common/common.js';
import { seeTrendsUrl } from './common/common.js';

fetch(searchUrl)
  .then((res) => {
    return res.json();
  })
  .then((res) => {

    console.log ('search',res);
    
  });

  fetch(seeTrendsUrl)
  .then((res) => {
    return res.json();
  })
  .then((res) => {

    console.log ('see tranding',res);
    
  });




 
