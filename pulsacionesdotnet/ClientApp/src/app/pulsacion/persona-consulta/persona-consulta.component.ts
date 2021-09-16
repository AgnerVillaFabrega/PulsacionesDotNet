import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-consulta',
  templateUrl: './persona-consulta.component.html',
  styleUrls: ['./persona-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {
  personas:Persona[] = [];
  searchText:string;

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personas = this.personaService.get();
  }

}
