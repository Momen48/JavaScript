(
function getCelsius(far){
  const c = Number((far-32)*(5/9)).toFixed(2);
  console.log(`${far} is equal to : ${c}`); 
}

)(273);



// 2nd 

const getTemp = (f) => Number(((f-32)*5/9)).toFixed(2);
console.log(getTemp(273));
