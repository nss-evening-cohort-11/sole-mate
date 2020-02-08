const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};


const footerBuilder = () => {
  let domstring = '';
  const date = new Date().getFullYear();
  domstring += `<p class="col-xs-1 text-center">&copy${date}</p>`;
  console.log(date);
  printToDom('footer-text', domstring)
}

footerBuilder();



