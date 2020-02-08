const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};


const footerBuilder = () => {
  let domstring = '';
  const date = new Date().getFullYear();
  domstring += date;
  printToDom()
}



