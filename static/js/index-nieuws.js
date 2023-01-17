let NieuwsIndexUrl = 'https://www.pgm.gent/data/gentsefeesten/news.json';

(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchNieuwsIndex();
    },
    cachElements () {
      console.log('2. Cache Elements.')
      this.$NieuwsIndex = document.getElementById('nieuwsIndex');
      console.log(this.$NieuwsIndex);
    },

    fetchNieuwsIndex () {
        loadJSONByCallback(NieuwsIndexUrl,
          (data) => {
            this.$NieuwsIndex.innerHTML = this.getHTMLNieuwsIndex(data);
          },
          (error) => {
            console.log(error);
          });
      
    },

    getHTMLNieuwsIndex(data) {
        let dataArray = data.slice(0, 3)
        console.log(dataArray);
        return dataArray
        .map((data) => {
          return `
                <div class="nieuws-index">
                    <h2>${data.title}</h2>
                    <div class="arrow">
                      <span class="line"></span>
                      <span class="arrow-point"></span>
                    </div>   
                </div>
                `
          }).join('');
        }
      };
      app.init();
    })();