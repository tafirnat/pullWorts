/**
Kullanilacak tüm ögeler ilgili modul icinden export islemi sonrasi burada import edilir....
*/

/**  --- import edilen ögeler --- */

//import {myFunc} from "./module/_img_a00" //image islemlerini yapar
//import {myFunc} from "./module/_lang_a00" //dil islemlerini yapar
import { getWortList } from "./module/_wortList_b15.js"; //kullanilacak kelimleri alir
import { baseFun } from "./module/_zBase_b05.js"; //bu bir dizin altindaki tüm ögleri 'base' adli degiskene export eder...
import {getDoc} from "./module/_documents_a05.js" //document/HTML dizin olarak ham verileri tutar
import {getWortObject} from "./module/_getWortObj_a01" //HML  olarak alinan dizin ögelerini nesne olusturmaya yönlendirir
import {newWortObject, testASCVBG} from "./module/_creatWortObj_a01" //HTML'den wort nesnesinin icerigini toplar
//import sonrasi ilgili ögeler yürütülür...

const base = new Promise ((resolve,reject)=>{
  resolve(baseFun.call())
})

base
.then(()=>{
  getWortList(); //kelimeler dahil edilir
  runBar.set(1);
  return
})
.then(()=>{
  item.search('wortList',1, getDoc) // wortList check edilerek --> kelimelere ait sayfanin HTML'i alinir...
})
.then(()=>{
  debugger
  item.search('HTMLdocs',1, getWortObject, testASCVBG) //newWortObject) //HTMLdocs check edilir > sonra, getWortObject funksiyonu calistirilir, callback olarak da newWortObject gönderilir... 
})

/*
Dizin Yapisi:
📂
  |_📇appStarter.js         .../appStarter.js"
  |_📇getMosuls_*.js        .../getMosuls_*.js"  
  |_📂WortApp               .../wortApp
    |_📇_importModuls_*.js  .../wortApp/_importModuls_*.js  📍
    |_📂module                  ./module
    |_📇_Documents_*.js         ./module/_documents_*.js 
    |_📇_img_*.js               ./module/_img_*.js 
    |_📇_lang_*.js              ./module/_lang_*.js
    |_📇_wortList_*.js          ./module/_wortList_*.js   🟡
    |_📇_wortObj_*.js           ./module/_wortObj_*.js
    |_📇_zBase_*.js             ./module/_zBase_*.js      🟡
    |_📇wortList.json           ./module/wortList.json    
*/