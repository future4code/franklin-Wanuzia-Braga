import { Customer } from "./herança/Customer";
import { User } from "./herança/User";


const user1 = new User("001", "user@email.com", "Usuário Matriz", "user123");

const customer1 = new Customer(
    '002', 
    'customer@email.com', 
    'Customer Primer',
    'abc123', 
    '506359-56'
    );
console.log(customer1.introduceYourself())
