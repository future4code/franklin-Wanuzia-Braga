export function validaData(data:string):boolean{
    var date:string = data.replace(/\//g, "-"); 
    var data_array:string[] = date.split("-");
    
    if(data_array[0].length != 4){
       date = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; 
    }

    var today:Date = new Date();
    var birthDate:Date  = new Date(date);
    var age:number = today.getFullYear() - birthDate.getFullYear();
    var mes:number = today.getMonth() - birthDate.getMonth();
    if (mes < 0 || (mes === 0 && today.getDate() < birthDate.getDate())) age--;
    
    if(age < 18){
       console.log("Pessoas menores de 18 não podem se cadastrar.");
       return false;
    }
    else {
       console.log("Maior de 18, pode se cadastrar.");
       return true;
    }
 }
