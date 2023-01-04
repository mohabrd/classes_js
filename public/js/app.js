//EXO 1

// class Personnage {
//     constructor(age, nom, ville){
//         this.age = age;
//         this.nom = nom;
//         this.ville = ville;

//     }

// }

// let homer = new Personnage(30,'Homer',"Springfield");
// console.log(homer);
// let kadri = new Personnage(25,'Kadri',"Bruxelles");
// console.log(kadri);


//EXO 2

class Personnage {
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
    }
    sePresenter(){
        console.log(`Bonjour, je m'appelle ${this.nom}`);
    }

}

let homer = new Personnage(30,'Homer',"Springfield");
console.log(homer);
let kadri = new Personnage(25,'Kadri',"Bruxelles");
console.log(kadri);

homer.sePresenter();
kadri.sePresenter();