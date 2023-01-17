let NieuwsUrl = 'https://www.pgm.gent/data/gentsefeesten/news.json';

(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchNieuws();
    },
    cachElements () {
      console.log('2. Cache Elements.')
      this.$Nieuws = document.getElementById('nieuws');
      console.log(this.$Nieuws);
    },

    fetchNieuws () {
        loadJSONByCallback(NieuwsUrl,
          (data) => {
            this.$Nieuws.innerHTML = this.getHTMLNieuws(data);
          },
          (error) => {
            console.log(error);
          });
      
    },

    getHTMLNieuws(data) {
        //let dataArray = data.slice(0, 3)
        console.log(data);
        return data
        .map((data) => {
          return `
                <div class="nieuws-container">
                    <div class="nieuws-left">
                        <h2>${data.title}</h2>
                        <div class="arrow">
                          <span class="line"></span>
                          <span class="arrow-point"></span>
                        </div>  
                    </div>
                    <div class="nieuws-right">
                        <img src="https://www.pgm.gent/data/gentsefeesten${data.picture.medium}" alt="foto nieuws">
                    </div> 
                    <div class="nieuws-hover"></div>  
                </div>
                `
          }).join('');
        }
      };
      app.init();
    })();