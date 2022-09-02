import { Customer } from "./herança/Customer";
import { Seller } from "./herança/Seller";
import { User } from "./herança/User";
import { Client } from "./polimorfismo/Client";
import { ClientManager } from "./polimorfismo/ClientManager";
import { Commerce } from "./polimorfismo/Commerce";
import { Industry } from "./polimorfismo/Industry";
import { Residence} from "./polimorfismo/Residence";
import { ResidentialClient } from "./polimorfismo/ResidentialClient";


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
    name: "Emma",
    registrationNumber: 2,
    consumedEnergy: 200,
  
    calculateBill: () => {
      return 2;
    }
  }
const residence = new Residence(2, "23535030");
const cep = residence.getCep();

const commerce = new Commerce(10, "5656352");
// console.log(cep, commerce.getCep())

const industry = new Industry(150, "25352636");
// console.log(industry.getCep())

const teste = new ResidentialClient("ana", 25, 356, "14569856", 1, "85978652");
// console.log(teste);
// console.log(teste.calculateBill());
// console.log(teste.setConsumedEnergy(500, "agosto"));
// console.log(teste.calculateBill());

var admission = new Date("2021-09-02")
const v = new Seller("006", "vendedor@email.com", "Mário Frias", "568uia", admission, 400);
// console.log(v.getAdmissionDate());
// console.log(v.introduceYourself());
const clientManager = new ClientManager();
clientManager.registerClient(client);
clientManager.registerClient(teste);
console.log(clientManager.getClientsQuantity());



