export function formataData(data) {
    var date = data?.replace(/\//g, "-"); 
    var data_array = date?.split("-");

    
    if( data_array && data_array[0].length !== 2){
       date = data_array[2]+"/"+data_array[1]+"/"+data_array[0]; 
    }
   //  console.log(date && date.getMonth())
    return date
   
 }

 export function getYear(data) {
   var date = data?.replace(/\//g, "-"); 
   var data_array = date?.split("-");
   var year = data_array && data_array[0]

   if( data_array && data_array[0].length !== 4){
      year = data_array[2]; 
   }

   return year
 }