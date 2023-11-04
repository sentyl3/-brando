function precio() {


    let totalaPagar = document.getElementById("total")
    let tipoDeplan = document.getElementById("selector").value
totalaPagar.innerHTML = ""
    switch (tipoDeplan) {
        case "basico":
            totalaPagar.innerHTML += ("500");break
        case "intermedio":
            totalaPagar.innerHTML += ("1000"); break
        case "premium":
            totalaPagar.innerHTML += ("1500");break
    }
    
}
    

