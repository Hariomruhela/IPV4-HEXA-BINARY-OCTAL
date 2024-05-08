

// create Function for convert the IP address to binary
function binary(){
    let value = document.querySelector("#mytext").value
    
    value = value.split(".")
    
    for(let i=0;i<=value.length-1;i++){
        
        value[i] = Number(value[i])
        value[i] = value[i].toString(2)

    }
    let output_string = `${value[0]}.${value[1]}.${value[2]}.${value[3]}` 
    document.querySelector(".output").innerText = output_string


}

// create Function for convert the IP address to octal
function octa(){
    
    let value = document.querySelector("#mytext").value
    value = value.split(".")
    console.log(value)
   
   
    for(let i=0;i<=value.length-1;i++){
        value[i] = Number(value[i])
        value[i] = value[i].toString(8)
    }
            
    let output_string = `${value[0]}.${value[1]}.${value[2]}.${value[3]}` 
    document.querySelector(".output").innerText = output_string
    
    }



// create Function for the convert the IP addrss to hexadecimal
function hexa(){
    let value = document.querySelector("#mytext").value
    value = value.split(".")

    
    for(let i=0;i<=value.length-1;i++){
        value[i] = Number(value[i])
        value[i] = value[i].toString(16)

    }
    let output_string = `${value[0]}.${value[1]}.${value[2]}.${value[3]}` 
    document.querySelector(".output").innerText = output_string


}

// create the function for check the validation in  IP address
function valid(){
    let value = document.querySelector("#mytext").value
    value = value.split(".")
    let bol = "True"
  
    if( value.length!==4){
        
        bol = "false"
        return bol
        
    }
    for(let i=0;i<=value.length-1;i++){
        
        value[i] = Number(value[i])
        console.log(value[i])
        if(value[i]==='' ||value[i]>255 ){
            console.log("CLick")
            bol = "false"
            return bol
        }  
        
    }

}


// acess the button from its id and add eventListener
let clicked = document.querySelector("#btn1")

clicked.addEventListener( "click",() =>{
    let check = valid()
    console.log("bol : ",check)
    if(check==="false"){
        alert("Enter Valid IP")
    }
    else{
        binary()
    }   
})

let clicked2 = document.querySelector("#btn2")

clicked2.addEventListener( "click",() =>{
    let check = valid()
    console.log("bol : ",check)
    if(check==="false"){
        alert("Enter Valid IP")
    }
    else{
        octa()
    }
    
    
})

let clicked3 = document.querySelector("#btn3")

clicked3.addEventListener( "click",() =>{
    let check = valid()
    console.log("bol : ",check)
    if(check==="false"){
        alert("Enter Valid IP")
    }
    else{
        hexa()
    }
    
    
})


