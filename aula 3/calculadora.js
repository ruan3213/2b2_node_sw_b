module.exports = { calcula(a, b, op){
    if(op === "+"){
        debugger
        return(a+b)
    }else if(op === "-"){
        return(a-b)
    }else if(op === "*"){
        return(a*b)
    }else if(op === "/"){
        return(a/b)
    }else{
        return(`${op} não existe.`)
    }
}  }



