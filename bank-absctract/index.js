// Krijoni nje abstract class per nje llogari ne bank.
// Abstract class BankAccount do te kete metoda te perbashketa per depositim, terheqje dhe kontroll balance,
// pastaj do krijojm dy klasa qe derivojn SavingsAccount dhe CheckingAccount, secila te implmentoj metodat bankare ne menyren e vet.

class BankAccount {
  constructor(personId, personName, accountId) {
    if (this.constructor == BankAccount) {
      throw Error("You can not create an object of Bank Account");
    }
    if (this.deposit == undefined) {
      throw Error("You must implement deposit method");
    }
    if (this.withdraw == undefined) {
      throw Error("You must implement withdraw method");
    }
    if (this.checkBalance == undefined) {
      throw Error("You must implement checkBalance method");
    }
    this.personId = personId;
    this.personName = personName;
    this.accountId = accountId;
    this.balance = 0;
  }
}

class SavingAccount extends BankAccount {
  constructor(personId, personName, accountId) {
    super(personId, personName, accountId);
  }
  deposit(value) {
    this.balance += value;
  }

  withdraw(value) {
    if (this.balance < value) {
      return "Nuk mund të tërhiqet kjo shume";
    } else this.balance -= value;
  }

  checkBalance() {
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {}

const savAcc1 = new SavingAccount(1, "Artan", 1000);
savAcc1.deposit(200);
console.log(savAcc1.withdraw(500));
console.log(savAcc1.checkBalance(), "savAcc.checkbalance");