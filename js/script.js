//Import dependencies
console.log('workin');


// import barba from '@barba/core';
// import barbaCss from '@barba/css';

//page-transitions

barba.use(barbaCss);
console.log(barba);
console.log(barbaCss);
barba.init({
  transitions: [
    {
      // name: 'clip',
      sync: true,
      to: {
        namespace: ['members']
      },
      leave: () => {},
      enter:() => {}
    }
  ]
});