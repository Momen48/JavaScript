(function first () {
  const x= 'John';
  console.log(x);
  const hello = () => console.log("hello! moto");
  hello();
}) ();

(function second (user){
  console.log(`hello from ${user}`);
})('Kamal');
