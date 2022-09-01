import { Customer } from "./herança/Customer";
import { User } from "./herança/User";
import { Client } from "./polimorfismo/Client";
import { Place } from "./polimorfismo/Place";


const user1 = new User("001", "user@email.com", "Usuário Matriz", "user123");

const customer1 = new Customer(
    '002', 
    'customer@email.com', 
    'Customer Primer',
    'abc123', 
    '506359-56'
    );
// console.log(customer1.introduceYourself())

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
  }

