let name = 'pear'
let user = {
  name: 'Peach',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  peach() {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
}

user.peach(1,2,4,5,5);