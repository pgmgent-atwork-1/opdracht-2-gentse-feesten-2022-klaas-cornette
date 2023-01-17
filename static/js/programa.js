let programaUrl = 'https://www.pgm.gent/data/gentsefeesten/events_500.json';
let stringParams = '';
let params = new URLSearchParams(window.location.search);
stringParams = params.toString();
let day;
const listButton = document.getElementById('listButton');
const rasterButton = document.getElementById('rasterButton');
const gratiesCheckBox = document.getElementById('graties');
const toegangkelijkheidCheckBox = document.getElementById('toegangkelijkheid');
let listBoolean = false;
let gratiesCheck = false;
let toegangkelijkheidCheck = false;
const searchBar = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const listButtonHolder = document.getElementById('listButton-holder');
const rasterButtonHolder = document.getElementById('rasterButton-holder');
let searchString;
searchBar.addEventListener('keyup', (e) => {
  searchString = e.target.value;
});
let element;
let categorieArray = ["Circus","Concerten > divers","Concerten > klassiek","Concerten > rock-pop-techno-blues-folk-world music","Kinder- en jeugdprogramma's","Markten","Miramiro","Spel, sport en recreatie","Varia","Vertellingen/lezingen/poëzie","Vuurwerk","Wandelingen","Tentoonstellingen en geleide bezoeken","Theater","Bals/Dans","Boottochten","Comedy","Concerten > jazz","Puppetbuskersfestival"];

(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchPrograma();
    },

    cachElements () {
      console.log('2. Cache Elements.')
      this.$programa = document.getElementById('programa');
      console.log(this.$programa);
    },

    fetchPrograma () {
        loadJSONByCallback(programaUrl,
          (data) => {
            this.$programa.innerHTML = this.getHTMLPrograma(data);
          },
          (error) => {
            console.log(error);
          });
      
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

    paidChecker (data) {
      if(data == 'free'){
        return '';
      }
      if(data == 'paid'){
        return `<img src="../static/img/gentse-feesten-icoontjes/euro.svg" alt="euro icon">`;
      }else{
        return '';
      }
    },

    getHTMLPrograma(data) {
      day = stringParams.slice(4, 6);
      console.log(data);
      console.log(day);
      
      return categorieArray.map((categorie) => {
        let dataByType = data.filter((r) => this.categorieChecker(r.category, categorie) == categorie && r.day == day)
        if(gratiesCheck){
          dataByType = dataByType.filter((r) => r.ticket == 'free')
        }
        if(toegangkelijkheidCheck){
          dataByType = dataByType.filter((r) => r.wheelchair_accessible)
        }
        if(listBoolean){
          if(dataByType.length == 0){
            return '';
          }else{
            return `<div class="programa-title">
                      <h3 id="${categorie}">${categorie}</h3>
                      <a href="dag.html?${params}"><img src="../static/img/gentse-feesten-icoontjes/arrow-up.svg" alt="arrow up"></a>
                    </div>
                    <div class="programa-rapper-list">
            ${dataByType.map((data) => {
              return `
                      <div class="event-container-list">
                        <a href="detail.html?${data.day + data.slug}">
                          <p>${data.start} u.</p>  
                          <p>${data.title}</p> 
                          <p>${data.location}</p>
                          ${this.paidChecker(data.ticket)}
                        </a>
                      </div>
                    `
            })
            .join("")}</div>`
          }
        }
        if(listBoolean == false){
          if(dataByType.length == 0){
            return '';
          }else{
          return `<div class="programa-title">
                    <h3 id="${categorie}">${categorie}</h3>
                    <a href="dag.html?${params}"><img src="../static/img/gentse-feesten-icoontjes/arrow-up.svg" alt="arrow up"></a>
                  </div>
                    <div class="programa-rapper">
                  ${dataByType.map((data) => {
                    return `
                            <div class="event-container">
                            <a href="detail.html?${data.day + data.slug}">
                              <div class="event-image">
                                <p>${data.day_of_week} ${data.day} JULI</p>
                                <img src="${this.fotoChecker(data.image)}" alt="image event">
                              </div>
                              <div class="event-text">
                                <div class="title">
                                  <h2>${data.title}</h2> 
                                </div>
                                <div class="beschrijving">
                                  <p>${data.location}</p>
                                  <p>${data.start} u.</p>
                                </div>
                              </div>
                              </a>
                            </div>
                            `
                  })
                  .join("")}</div>`
                }
              }
      }).join("");
  }
    };
  app.init();
  rasterButtonHolder.style.backgroundColor = "hsl(0, 79%, 57%)";
  rasterButton.style.filter = "invert(0)";
  listButton.addEventListener('click', () => {
    listBoolean = true;
    listButtonHolder.style.backgroundColor = "hsl(0, 79%, 57%)";
    rasterButtonHolder.style.backgroundColor = "";
    listButton.style.filter = "invert(0)";
    rasterButton.style.filter = "";
    app.init();
  });
  rasterButton.addEventListener('click', () => {
    listBoolean = false
    listButtonHolder.style.backgroundColor = "";
    rasterButtonHolder.style.backgroundColor = "hsl(0, 79%, 57%)";
    rasterButton.style.filter = "invert(0)";
    listButton.style.filter = "";
    app.init();
  });
  gratiesCheckBox.addEventListener('change', () => {
    if(gratiesCheck == true){
    gratiesCheck = false;
    }else{
    gratiesCheck = true;
    }
    app.init();
  });
  toegangkelijkheidCheckBox.addEventListener('change', () => {
    if(toegangkelijkheidCheck == true){
      toegangkelijkheidCheck = false;
    }else{
      toegangkelijkheidCheck = true;
    }
    app.init();
  });
  searchBar.addEventListener('keypress', (event) => {
    if(event.key == 'Enter'){
      window.location.assign(`../search.html?${searchString}`);
    }
  });
  searchButton.addEventListener('click', () => {
    window.location.assign(`../search.html?${searchString}`);
  });
  document.addEventListener("DOMContentLoaded", () => {
    if(stringParams.includes('%2Flink')){
      console.log('start')
      let idFinder = stringParams.slice(13);
      let id ='';

      categorieArray.forEach(element => {
        if(element.slice(0, 9) == 'Concerten'){
          if(element.slice(13, 17) == idFinder.slice(15, 19)){
            id = element + '';
            }
        }else{
          if(element.slice(0, 4) == idFinder.slice(0, 4)){
            id = element;
          }
        }
        
      })
      console.log(id);
      if(id != ''){
        let idDocument;
        run();
        function run () {
          idDocument = document.getElementById(id); 
          if(idDocument != null){
            idDocument.scrollIntoView();
          }else{
            setTimeout(run, 300);
          }
        }       
      }
    }
  });
  
})();