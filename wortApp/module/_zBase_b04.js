/* Burada tüm modüllerde kullanilacak olan ögeler yer almakta...*/

export { baseFun };

/*  --- Fonksiyonlar vd. --- */
const baseFun = async () => setItems.call();
baseFun().catch((err) => console.log(err));

//=============================================================
//gloabale atanacak öge biödirimi ve globale aktarimi. setValues icinde olmali tüm ögeler....
function setItems() {
  //yüzde % gösterimi...  Aciklama notion'da mevcut____________
  const runBar = {
    msgStatus: [
      "▱▱▱▱▱▱▱▱▱▱",
      "▰▱▱▱▱▱▱▱▱▱",
      "▰▰▱▱▱▱▱▱▱▱",
      "▰▰▰▱▱▱▱▱▱▱",
      "▰▰▰▰▱▱▱▱▱▱",
      "▰▰▰▰▰▱▱▱▱▱",
      "▰▰▰▰▰▰▱▱▱▱",
      "▰▰▰▰▰▰▰▱▱▱",
      "▰▰▰▰▰▰▰▰▱▱",
      "▰▰▰▰▰▰▰▰▰▱",
      "▰▰▰▰▰▰▰▰▰▰",
    ],
    lastIndex: 0,
    set: function (toIndex, min = 0, max = 0) {
      if (toIndex < 0 || toIndex > 10) return;
      if (max !== 0) {
        if (this.rate === undefined) {
          this.dif = toIndex - this.lastIndex;
          this.rate = Math.round((max - min) / this.dif);
          this.index = toIndex;
        }

        toIndex = this.lastIndex;

        if (min % this.rate === this.dif % this.rate) this.lastIndex++;
        if (min === max) {
          this.lastIndex = this.index;
          toIndex == this.index;
          delete this.rate;
          delete this.dif;
          delete this.index;
        }
      } else {
        if (toIndex === this.lastIndex) return;
        this.lastIndex = toIndex < this.lastIndex ? this.lastIndex : toIndex;
        toIndex = null;
      }

      if (this.lastIndex === toIndex || this.lastIndex > 10) return;
      console.clear(); //öncekiler temizlenir...
      console.log(
        `🚩running... ${this.msgStatus[this.lastIndex]} ${this.lastIndex}0%`
      );
    },
  };

  //console mesaj yazdirmak icin_______________________________
  const msg = {
    msgTyp: {
      primary: 0,
      successful: 1,
      warning: 2,
      error: 3,
    },
    style: {
      head: [
        "background: DodgerBlue;", //primary
        "background: Green;", //successful
        "background: DarkGoldenRod;", //warning
        "background: Red;", //error
      ],
      body: [
        "color: DeepSkyBlue;",
        "color: LimeGreen;",
        "color:DarkGoldenRod;",
        "color: Red;",
      ],
    },
    console: function (msgTyp, head, text, err = "") {
      let headStyle = `${this.style.head[msgTyp]} font-size: 12px; font-weight: bold; padding: 3px 5px; border-radius: 5px;`,
        bodyStyle = this.style.body[msgTyp];

      console.log(`%c ${head} %c ${text}`, headStyle, bodyStyle);
      if (!!err) console.log(err);
    },
    /*   msg.console(0==msg.msgTyp.primary,'Baslik', 'aciklama metninin görünümü')   */
  };


  //belirli bir süre icerisinde fonksiyon/degisken arar bulursa cikis yapar________________________
  const item={
    typ:{
        function:0,   //fonksiyon
        variabel:1,   //obje vd. degiskenlerin kontrolü
    },
    search:function(str_itemName,typ,callback="",duration = 100, maxDuration = 3000){
        let clear;
        //döngüsel zaman atanir
        const int_ID = setInterval(() => {
        
        switch (typ) {
          case 0: //fonksiyon kontrolü >> window.functionName
            if (typeof window[str_itemName] === "function") clear = true;
                break;
            default: //obje, array, string vs degiskenlerin kontrolü
                try {
                    if (typeof eval(str_itemName) != "undefined") clear = true;
                } catch (error) {
                    clear = false;
                }
            break;
        }         
            if (clear) {
                //öge varsa zamanlamayi temizler
                clearInterval(int_ID);
                if(callback !=="") callback();
                return true;
            }
        }, duration); // döngüyü tekrarlar
        
         //max time sonrasi cikilir
        const clearInt = setTimeout(() => {
            if (!clear){
              console.log(`Süre Asimi: "${str_itemName}" adli ${ Object.keys(item.typ)[typ]} erisilebilir degil!  Baglantilari ziyaret ederek check et.(f:intervalApp-clearInt)`)
              return false
            }
        clearInterval(int_ID); }, maxDuration);
    /*****runing********/
         clearInt;
         int_ID;
    },

    /*zBsp: item.search('wortList',item.typ.function,callback)        item.typ.function || 0
            item.search('baz',item.typ.variabel,callback,50,1200)     item.typ.variabel || 1
    */
}

  //bir ögenin sayfada olup olmadigini kontrol eder...________
  const checkEl = (e) => {
    return e === null ? false : true;
  };

  //global scope a aktarilir...===============================
  window.runBar = runBar;
  window.msgConsole = msg;
  window.checkEl = checkEl;
  window.item=item;
} //setValues icinde olmali tüm ögeler....