import { Injectable } from "@angular/core";
import { Persona } from "../pulsacion/models/persona";

@Injectable({
  providedIn: "root",
})
export class PersonaService {
  constructor() {}
  
  pulsa(persona: Persona):number { 
    if (persona.sexo == "F") {
      persona.pulsacion = (220 - persona.edad) / 10;
    } else {
      persona.pulsacion = (210 - persona.edad) / 10;
    }
    return persona.pulsacion
  }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem("datos") || '[]');
  }
  post(persona: Persona) {
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas = this.get();
    }
    personas.push(persona);
    localStorage.setItem("datos", JSON.stringify(personas));
  }
}
