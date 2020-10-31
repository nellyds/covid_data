export const parseDate = (date) =>{
    return date.toString().slice(0,4)+"/"+ date.toString().slice(4,6)+ "/"+ date.toString().slice(6,8)
}

