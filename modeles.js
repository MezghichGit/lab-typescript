"use strict";
exports.__esModule = true;
exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    //private name: string;
    //private university: string;
    /*public constructor(private name?: string, private university?: string) {
      this.name = name;
      this.university = university;
  
      console.log("Un Objet Etudiant")
    }*/
    function Etudiant(name, lastname) {
        this.name = name;
        this.lastname = lastname;
        this.name = name;
        //this.university = university;
        this.lastname = lastname;
        // console.log("Un Objet Etudiant")
        console.log("Name = " + this.name + " LastName=" + this.lastname);
    }
    Etudiant.prototype.information = function () {
        //console.log(this.name +" "+this.university);
    };
    return Etudiant;
}());
exports.Etudiant = Etudiant;
