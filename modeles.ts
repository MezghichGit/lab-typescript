export interface Personne {

  name: string;
  age: number;
}


export class Etudiant { 
  //private name: string;
  //private university: string;

  /*public constructor(private name?: string, private university?: string) { 
    this.name = name;
    this.university = university;

    console.log("Un Objet Etudiant")
  }*/

  public constructor(private name?: string, private lastname?: string) { 
    this.name = name;
    //this.university = university;
    this.lastname = lastname;

   // console.log("Un Objet Etudiant")
    console.log("Name = " + this.name + " LastName=" + this.lastname);
  }

  public information() {
    //console.log(this.name +" "+this.university);
   }

}