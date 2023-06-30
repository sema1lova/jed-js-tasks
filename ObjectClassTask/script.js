// task 1

const me = {
    name: "Sema",
    gender: "woman",
    birthday: "10.12.2004",
    setAge: function (newAge) {
        this.age = newAge;
    },
    setYearsBeforeRetirement: function () {
        return 65 - this.age;
    }
}
// console.log(me.birthday);

// task 2

// me.age = 18;
// delete me.birthday
// console.log(me); task 3   me.setAge = function(newAge) {     this.age =
// newAge;   };   console.log(me.age);   me.setAge(19);   console.log(me.age);
// console.log(me.setYearsBeforeRetirement());

//task 4   const KreditKart = {   }

const client = {
    fullName: "John Doe",
    creditLimit: 5000,
    balans: 3000,
    precentOfMinPayment: 10,
  
    getBalance: function () {
        if (this.balans > 0) (`Balansiniz ${this.balans }`);
        else (`Borcunuz ${this.balans * (- 1)}`);
    },
    // getMinPayment:function () {
    //     return this.balans * (-1) / 100 * this.precentOfMinPayment;
    //  }, 
    getMinPayment: function() {
      if (this.balans > 0) {
        const minPayment = this.balans * this.precentOfMinPayment / 100;
        return "Minimum ödənişiniz " + minPayment;
      } else return "Sizin borcunuz yoxdur";
    },
    withdraw: function(amount) {
      const total = this.balans + this.creditLimit;
      if (amount > total) {
        console.log("Kifayət qədər vəsait yoxdur");
      } else {
        this.balans -= amount;
        console.log("Balansınızdan " + amount + " çəkildi");
      }
    },
    refill: function(amount) {
      this.balans += amount;
      console.log("Balansınıza " + amount + " əlavə edildi");
    }
  };

  console.log(client.getBalance());
  console.log(client.getMinPayment());
  client.withdraw(2000);
  client.refill(1000);
  

  // task 5

  function Calculator() {
    this.memory = 0;
  
    this.add = function(a, b) {
      return a + b;
    };
  
    this.subtract = function(a, b) {
      return a - b;
    };
  
    this.multiply = function(a, b) {
      return a * b;
    };
  
    this.divide = function(a, b) {
      if (b === 0) {
        return "Sıfıra bölünmə yolu ilə hesablama etmək olmaz";
      } else {
        return a / b;
      }
    };
  
    this.storeValue = function(value) { this.memory = value; };
    this.clearMemory = function() { this.memory = 0; };
    this.addToMemory = function(value) { this.memory += value; };
    this.readMemory = function() { return this.memory; };
  }

  const calculator = new Calculator();
  const sum = calculator.add(5, 3);
  const difference = calculator.subtract(10, 8);
  const product = calculator.multiply(8, 8);
  const quotient = calculator.divide(8, 8);
  
  console.log("Toplama: " + sum);
  console.log("Çıxma: " + difference);
  console.log("Vurma: " + product);
  console.log("Bölmə: " + quotient);
  
  calculator.storeValue(10);
  calculator.addToMemory(5);
  const memoryValue = calculator.readMemory();
  console.log("Yaddaşdakı dəyər: " + memoryValue);
  