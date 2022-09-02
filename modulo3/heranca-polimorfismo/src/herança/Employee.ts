import { User } from "./User";

export class Employee extends User {
    static BENEFITS_VALUE:number = 400;
    protected admissionDate: Date;
    protected baseSalary: number;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      admissionDate: Date,
      baseSalary: number
    ) {
      super(id, email, name, password);
      this.admissionDate = admissionDate;
      this.baseSalary = baseSalary;
      }
      
      public getAdmissionDate(): Date {
          return this.admissionDate
      }
  
      public getBaseSalary(): number {
          return this.baseSalary
      }
      	
	public calculateTotalSalary(): number {
		return this.baseSalary + Employee.BENEFITS_VALUE; /*benefício de 400 + salário base */
	}
  }