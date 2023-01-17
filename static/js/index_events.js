const eventsUrl = 'https://www.pgm.gent/data/gentsefeesten/events_500.json';
(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchEvents();
    },
    cachElements () {
      console.log('2. Cache Elements.')
      this.$events = document.getElementById('events');
      console.log(this.$events);
  },
    fetchEvents () {
      loadJSONByCallback(eventsUrl,
        (data) => {
          this.$events.innerHTML = this.getHTMLForEvents(data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    randomNummerGenerator () {
      let nummer = Math.floor(Math.random() * 500) + 1;
      console.log(nummer);
      return nummer;
    },
    daySelector (day) {
      console.log(day);
      switch(day) {
        case "Maandag":
            return "MA";
        case "Dinsdag":
            return "DI";
        case "Woensdag":
            return "WO";
        case "Donderdag":
            return "DO";
        case "Vrijdag":
            return "VR";
        case "Zaterdag":
            return "ZA";
        case "Zondag":
            return "ZO";
        default:
            return "";
    }
    },
    fotoChecker (data) {
      console.log(data);
      if(data != null){
          return data.thumb;
      }
      return 'static/img/geen-foto.jpg';
  },

    getHTMLForEvents(data) {
      let randomNummer = this.randomNummerGenerator();
      let dataArray = data.slice(randomNummer, randomNummer+8)
      console.log(dataArray);
      return dataArray.map((data) => {
      return `
        <div class="event-container">
        <a href="events/detail.html?${data.day + data.slug}">
          <div class="event-image">
            <p>${this.daySelector(data.day_of_week)} ${data.day} JULI</p>
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
      }).join('');

    }
  };
  app.init();
})();