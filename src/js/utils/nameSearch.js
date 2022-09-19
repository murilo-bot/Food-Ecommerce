function nameSearch(string, array, onlyCategory = false){
    return array.filter((product) => {
        const reg = new RegExp(string, "ig")

        if(onlyCategory){
            if(product.categoria.match(reg)) return true
            return false
        }else{
            if(product.nome.match(reg) || product.categoria.match(reg)){
                return true
            }else{
                return false
            }
        }
    });
}

export {nameSearch}