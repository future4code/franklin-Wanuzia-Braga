export function formataData(data) {
    var date = data?.replace(/\//g, "-"); 
    var data_array = date?.split("-");
    
    if( data_array && data_array[0].length !== 2){
       date = data_array[2]+"/"+data_array[1]+"/"+data_array[0]; 
    }
    console.log(date)
    return date
   
 }