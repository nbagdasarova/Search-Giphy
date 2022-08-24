import {searchLink} from './common/common.js';
import {trensLink} from './common/common.js';


fetch(searchLink)
  .then((res) => {
    return res.json();
  })
  .then((res) => {

    console.log ('search',res);
    
  });





 