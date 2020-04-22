// this will print the number 5 five times
for (var i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 1000);
  }
  
  console.log('=================');
  
  // this will print 0, 1, 2, 3, 4
  for (let i = 0; i < 5; i += 1) {
    setTimeout(() => console.log(i), 1000);
  }