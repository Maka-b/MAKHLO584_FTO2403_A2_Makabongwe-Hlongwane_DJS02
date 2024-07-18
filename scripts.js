const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  console.log(divider)
  try {
    if(isNaN(Number(dividend)) || isNaN(Number(divider))){
      throw new Error ('input number')
    }else if(Number(divider) === 0){
      result.innerText = 'Division not performed. Invalid number provided. Try again.'
      console.trace("number cannot be divided by zero")
    }else if (dividend && divider) {
      result.innerText = Math.floor(dividend / divider);
    }else{
      result.innerText = `Division not performed. Both values are required in inputs. Try again`;
    } 
  }
  catch (e) {
    alert(e)
    console.error(e)
    document.body.innerHTML = 
    `<h1> Something critical went wrong. Please reload the page </h1>`
  } 
  
  
});