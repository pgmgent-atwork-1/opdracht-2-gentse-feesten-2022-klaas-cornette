const loadJSONByCallback = (url, succesHandler, errorHandler) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const dataCal = JSON.parse(xhr.response);
      succesHandler && succesHandler(dataCal);
    } else {
      errorHandler && errorHandler(xhr.status);
      console.log('er is iets mis met de data');
    }
  };
  xhr.onerror = () => {
    errorHandler && errorHandler('Network Error!');
  }
  xhr.send(null);
}