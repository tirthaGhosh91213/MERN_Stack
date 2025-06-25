class Cat {
  constructor(name){
    this.name=name;
    this.legs=4;
  }

  move(){
    console.log(`The cat is moving  ${this.legs} legs `)
  }
  speak(){
    console.log(`${this.name} makes a noise`)
  }

}
let kitty=new Cat("Kitty");
kitty.move()
kitty.speak()

class Lion extends Cat {
  constructor(name,color){
    super(name)
    this.color=color;
  }
  eat(){
    console.log(`${this.name} eats meats...`)
  }
  speak(){
    console.log(`${this.name} roars`)
  }

}
let pudu =new Lion("Jango");
pudu.move()
pudu.speak()
pudu.eat();

