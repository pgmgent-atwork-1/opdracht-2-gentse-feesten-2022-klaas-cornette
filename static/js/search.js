let searchUrl = 'https://www.pgm.gent/data/gentsefeesten/events_500.json';
let stringParams = '';
let params = new URLSearchParams(window.location.search);
stringParams = params.toString();
let listBoolean = true;
const listButtonSearch = document.getElementById('listButton-search');
const rasterButtonSearch = document.getElementById('rasterButton-search');
const rasterButtonHolderSearch = document.getElementById('rasterButton-holder-search');
const listButtonHolderSearch = document.getElementById('listButton-holder-search');
const searchBar = document.getElementById('search-pageBar');
const searchButton = document.getElementById('Button-search-page');

(() => {
    const app = {
      init () {
        console.log('1. Initialize Application');
        this.cachElements();
        this.fetchSearch();
      },
      cachElements () {
        console.log('2. Cache Elements.')
        this.$search = document.getElementById('search');
        console.log(this.$search);
      },
  
      fetchSearch () {
        loadJSONByCallback(searchUrl,
            (data) => {
                this.$search.innerHTML = this.getHTMLSearch(data);  
            },
            (error) => {
              console.log(error);
            });
          
      },
  
      fotoChecker (data) {
          if(data != null){
              return data.thumb;
          }
          return 'static/img/geen-foto.jpg';
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
          return `<img src="static/img/gentse-feesten-icoontjes/euro.svg" alt="euro icon">`;
        }else{
          return '';
        }
      },
  
    getHTMLSearch(data) {
        stringParams = stringParams.replace('=','');
        stringParams = stringParams.toLowerCase();
        console.log(stringParams);
        document.getElementById("search-pageBar").value = stringParams;
            let dataByTitle = data.filter((r) => r.title.toLowerCase().includes(stringParams))
            if(listBoolean){
                return `
                    <h3><strong>${dataByTitle.length} resultaten</strong> voor "${stringParams}"</h3>
                    ${dataByTitle.map((data) => {
                        return `
                          <div class="event-container-list">
                            <a href="events/detail.html?${data.day + data.slug}">
                              <p>${data.start} u.</p>  
                              <p>${data.title}</p> 
                              <p>${data.location}</p>
                              ${this.paidChecker(data.ticket)}
                            </a>
                          </div>
                        `
                    })
                    .join("")}`
            }

            if(listBoolean == false){
              return `  
                    <h3>${dataByTitle.length} gevonden resultaten.</h3>
                    <div class="programa-rapper">
                    ${dataByTitle.map((data) => {
                        return `
                            <div class="event-container">
                            <a href="events/detail.html?${data.day + data.slug}">
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
                            </div>`
                      })
                      .join("")}</div>`
                  }
    }      
    };
      searchBar.addEventListener('keyup', (e) => {
        searchString = e.target.value;
        console.log(searchString)
      });
      searchBar.addEventListener('keypress', (event) => {
        if(event.key == 'Enter'){
          window.location.assign(`search.html?${searchString}`);
        }
      });
      searchButton.addEventListener('click', () => {
        window.location.assign(`search.html?${searchString}`);
      });
    app.init();
    listButtonHolderSearch.style.backgroundColor = "hsl(0, 79%, 57%)";
    listButtonSearch.style.filter = "invert(0)";
    listButtonSearch.addEventListener('click', () => {
    listBoolean = true;
    listButtonHolderSearch.style.backgroundColor = "hsl(0, 79%, 57%)";
    rasterButtonHolderSearch.style.backgroundColor = "";
    listButtonSearch.style.filter = "invert(0)";
    rasterButtonSearch.style.filter = "";
    app.init();
  });
  rasterButtonSearch.addEventListener('click', () => {
    listBoolean = false
    listButtonHolderSearch.style.backgroundColor = "";
    rasterButtonHolderSearch.style.backgroundColor = "hsl(0, 79%, 57%)";
    rasterButtonSearch.style.filter = "invert(0)";
    listButtonSearch.style.filter = "";
    app.init();
  });
})();