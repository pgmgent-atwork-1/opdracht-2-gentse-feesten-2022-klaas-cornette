let stringParamsCalender = '';
let paramsCalender = new URLSearchParams(window.location.search);
stringParamsCalender = paramsCalender.toString();

(() => {
    const app = {
        init () {
            console.log('1. Initialize Application');
            this.cachElements();
            this.fetchCalender();
        },
        cachElements () {
            console.log('2. Cache Elements.')
            this.$calender = document.getElementById('calender');
            console.log(this.$calender);
        },
  
        fetchCalender () {          
            const fetchJSONTeam = async () => {
                const response = await fetch('../static/data/calender.json', {method: 'GET',});
                const data_json = await response.json(); 
                this.$calender.innerHTML = this.getHTMLCalender(data_json);
            }
            fetchJSONTeam();
        },

        activeDay (data) {
            if(data.dag == stringParamsCalender.slice(4) || data.dag == stringParamsCalender.slice(0, 2)){
                return `
                <a class="day${data.dag-14} active-day" href="dag.html?day=${data.dag}">
                    <div class="calender-text">
                        <h3>${data.weekdag}</h3>
                        <p>${data.dag} juli</p>
                    </div>
                </a>`
            }else{
                return`
                <a class="day${data.dag-14}" href="dag.html?day=${data.dag}">
                    <div class="calender-text">
                        <h3>${data.weekdag}</h3>
                        <p>${data.dag} juli</p>
                    </div>
                </a>`
            }
        },
  
        getHTMLCalender(data) {
            console.log(data);
            let dayOfTheWeek = data.filter((r) => r.dag == stringParamsCalender.slice(4) || r.dag == stringParamsCalender.slice(0, 2));
            return `<div class="nav-calender-rapper">
                     ${dayOfTheWeek.map((r) => {
                        return `<h1>${r.weekdag} ${r.dag} Juli</h1>`}).join('')}
                        <div class="nav-calender">
                        ${data.map((data) => {
                        return `${this.activeDay(data)}`
                        }).join('')}</div></div>`
          }
        };
        app.init();
      })();