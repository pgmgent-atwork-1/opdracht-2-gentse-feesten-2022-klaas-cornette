let searchUrl = 'https://www.pgm.gent/data/gentsefeesten/events_500.json';
let stringParams = '';
let params = new URLSearchParams(window.location.search);
stringParams = params.toString();
let linkCategory;
let day;

(() => {
    const app = {
      init () {
        console.log('1. Initialize Application');
        this.cachElements();
        this.fetchDetail();
      },
      cachElements () {
        console.log('2. Cache Elements.')
        this.$detail = document.getElementById('detail');
        console.log(this.$detail);
      },
  
      fetchDetail () {
        loadJSONByCallback(searchUrl,
            (data) => {
                this.$detail.innerHTML = this.getHTMLDetail(data);  
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
      categoryHTML(data, day) {
        return `<a href="dag.html?day=${day}/link${data}">${data}</a>`
      },

      urlChecker (data) {
        if(data == null){
          return '';
        }else{
          return `<p>Website:</p><a href="${data}">${data}</a>;`;
        }
      },

      categoryCounter (data, day) {
        let dataCategory1 = '';
        let dataCategory2 = '';
        for(let i = 0; i < data.length; i++){
          dataCategory1 = this.categoryHTML(data[i], day);
          dataCategory2 = dataCategory2.concat(dataCategory1);
        }
        return dataCategory2;
      },

      getHTMLDetail(data) {
        stringParams = stringParams.replace('=','');
        let dayDetail = stringParams.slice(0, 2);
        stringParams = stringParams.slice(2);
        console.log(stringParams);
        let dataById = data.filter((r) => r.slug.includes(stringParams) && r.day == dayDetail)
        let dataByLoacatie = data.filter((s) => s.location == dataById[0].location && s.day == dayDetail)
        let dataByOrganisator = data.filter((u) => u.organizer == dataById[0].organizer)
        dataByOrganisator = dataByOrganisator.slice(0, 4);
        console.log(dataByLoacatie)
        console.log(dataByOrganisator)
        console.log(dataById)
        return dataById.map((data) => {
            return `   
                      <div class="go-back">
                        <a href="dag.html?day=${data.day}">
                        <div class="arrow-left"><span class="arrow-point"></span><span class="line"></span></div>  
                          <p>OVERZICHT ${data.day_of_week.toUpperCase()} ${data.day} JULLI</p>
                        </a>
                      </div>
                      <div class="detail-rapper">
                      <div class="detail-left">
                        <h1>${data.title}</h1>
                        <div class="detail-under-title">
                            <p><img src="../static/img/gentse-feesten-icoontjes/marker.svg" alt="marker icon">${data.location}</p>
                            <p>${data.start} u.</p>
                        </div>  
                        <p>${data.description}</p> 
                        <div class="detail-information">
                            <div class="detail-information-component">
                                <p>Organisator:</p>
                                <a hreff="#">${data.organizer}</a>
                            </div>
                            <div class="detail-information-component">
                              ${this.urlChecker(data.url)}
                            </div>
                            <div class="detail-information-component">
                                <p>Categorieën:</p>
                                <div class="detail-categorie">
                                  ${this.categoryCounter(data.category, data.day)}
                                </div>
                            </div>
                            <div class="detail-information-component">
                                <p>Prijs:</p>
                                <p>${data.ticket}</p>
                            </div>
                        </div>
                        </div>
                        <div class="detail-right">
                          <img src="${this.fotoChecker(data.image)}" alt="foto event">
                          <div class="detail-social">
                            <img src="../static/img/gentse-feesten-icoontjes/twitter.svg" alt="twiter">
                            <img src="../static/img/gentse-feesten-icoontjes/facebook.svg" alt="facebook">
                            <img src="../static/img/gentse-feesten-icoontjes/pinterest.svg" alt="pinterest">
                          </div>
                        </div>
                      </div>
                      <div class="detail-map">
                        <div class="detail-map-left">
                          <p><img src="../static/img/gentse-feesten-icoontjes/marker.svg" alt="marker icon">${data.location}</p>
                          <p>${data.location}</p>
                          <p>9000 Gent</p>
                          <a href="#">Open in Google Maps</a>
                          <a href="#">DOWNLOAD FEESTPLAN</a>
                        </div>
                        <div class="detail-map-right">
                          <iframe width="100%" height="410px" frameborder="0" scrolling="no" style="border:0;" src="https://maps.google.com/maps?hl=nl&amp;q=Gent&amp;t=m&amp;z=16&amp;output=embed&amp;key=AIzaSyBVQnGK8TdmqhcVPZA1h32GCFKltzd-hTA"></iframe>
                        </div>
                      </div>
                      <div class="detail-andere-evenementen">
                        <h3>Nog Te Beleven Op Deze Locatie</h3>
                        <div class="event-container-detail">
                      ${dataByLoacatie.map((location) => {
                        return `
                        
                          <div class="event-container">
                              <a href="detail.html?${location.day + location.slug}">
                                  <div class="event-image">
                                    <p>${location.day_of_week} ${location.day} JULI</p>
                                    <img src="${this.fotoChecker(location.image)}" alt="image event">
                                  </div>
                                  <div class="event-text">
                                    <div class="title">
                                      <h2>${location.title}</h2> 
                                    </div>
                                    <div class="beschrijving">
                                      <p>${location.location}</p>
                                      <p>${location.start} u.</p>
                                    </div>
                                  </div>
                                  </a>
                              </div>
                            
                        `
                      }).join("")}
                      </div>
                      <h3>Andere Evenementen Van Deze Organisator</h3>
                      ${dataByOrganisator.map((organizer) => {
                        return `
                        <div class="event-container-list">
                            <a href="detail.html?${organizer.day + organizer.slug}">
                              <p>${organizer.start} u.</p>  
                              <p>${organizer.title}</p> 
                              <p>${organizer.location}</p>
                              ${this.paidChecker(organizer.ticket)}
                            </a>
                        </div>
                        `
                      }).join("")}
                    </div>
                  `
        }).join("")}       
    };
    app.init();

   
})();