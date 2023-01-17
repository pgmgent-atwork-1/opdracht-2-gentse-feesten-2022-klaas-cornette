let stringParamsDag = '';
let paramsDag = new URLSearchParams(window.location.search);
stringParamsDag = paramsDag.toString();
stringParamsDag = stringParamsDag.slice(4);
(() => {
  const app = {
    init () {
      console.log('1. Initialize Application');
      this.cachElements();
      this.fetchHamburgerDag();
    },
    cachElements () {
      console.log('2. Cache Elements.')
      this.$hamburgerDag = document.getElementById('hamburger-dag-display');
      console.log(this.$hamburgerDag);
    },

    fetchHamburgerDag () {
        this.$hamburgerDag.innerHTML = this.getHTMLHamburgerDag();
    },

    activeDayChecker () {
      if (stringParamsDag == 15){
        return `<a href="dag.html?day=15"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 16){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 17){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 18){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 19){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 20){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 21){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 22){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 23){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24">Zondag 24 Juli</a>`
      }
      if (stringParamsDag == 24){
        return `<a href="dag.html?day=15">Vrijdag 15 Juli</a>
        <a href="dag.html?day=16">Zaterdag 16 Juli</a>
        <a href="dag.html?day=17">Zondag 17 Juli</a>
        <a href="dag.html?day=18">Maandag 18 Juli</a>
        <a href="dag.html?day=19">Dinsdag 19 Juli</a>
        <a href="dag.html?day=20">Woensdag 20 Juli</a>
        <a href="dag.html?day=21">Donderdag 21 Juli</a>
        <a href="dag.html?day=22">Vrijdag 22 Juli</a>
        <a href="dag.html?day=23">Zaterdag 23 Juli</a>
        <a href="dag.html?day=24"><img src="../static/img/gentse-feesten-icoontjes/arrow-right-extra-long.svg" alt="pijl">Zondag 24 Juli</a>`
      }
    },

    getHTMLHamburgerDag() {
        return this.activeDayChecker();
    }
    };
  app.init();
})();