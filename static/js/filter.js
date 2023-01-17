(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchFilter();
    },
    cachElements () {
      console.log('2. Cache Elements.')
      this.$filter = document.getElementById('filter');
      console.log(this.$filter);
    },

    fetchFilter () {
        console.log('filter')
        this.$filter.innerHTML = this.getHTMLFilter();
    },

    fotoChecker (data) {
        if(data != null){
            return data.thumb;
        }
        return '../static/img/geen-foto.jpg';
    },
    categorieChecker (data, compareData) {
      if(data.length == 2){
        if(data[0] == compareData){
          return data[0];
        }
        if(data[1] == compareData){
          return data[1];
        }
      }
      if(data.length == 1){
        if(data[0] == compareData){
          return data[0];
        }
      }
          
    },

    getHTMLFilter() {
        let categorieArray = ["Circus","Concerten > divers","Concerten > klassiek","Concerten > rock-pop-techno-blues-folk-world music","Kinder- en jeugdprogramma's","Markten","Miramiro","Spel, sport en recreatie","Varia","Vertellingen/lezingen/poëzie","Vuurwerk","Wandelingen","Tentoonstellingen en geleide bezoeken","Theater","Bals/Dans","Boottochten","Comedy","Concerten > jazz","Puppetbuskersfestival"];
      
        return `<div class="filter-categorie">${categorieArray
            .map((categorie) => {
                return  `
                        <div class="filter-atributes-categorie">
                            <img src="../static/img/gentse-feesten-icoontjes/category.svg" alt="categorie icon">
                            <a href="#${categorie}">${categorie}</a>
                        </div>
                        `
      }).join("")}</div>`
  }
    };
  app.init();
})();