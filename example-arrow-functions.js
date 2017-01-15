var names = ['Andy', 'Joe', 'Julie', 'Patrick'];

names.forEach(function (name){
  console.log('ForEach', name);
});

names.forEach((name) => {
  console.log('Arrow', name);
});
