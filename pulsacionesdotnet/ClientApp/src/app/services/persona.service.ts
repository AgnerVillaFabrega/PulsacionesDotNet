import { Inject, Injectable } from "@angular/core";
import { Persona } from "../pulsacion/models/persona";
import { Observable } from "rxjs";
import { tap,catchError} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { HandleHttpErrorService } from "../@base/handle-http-error.service";
@Injectable({
  providedIn: "root",
})
export class PersonaService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService)
  {
    this.baseUrl = baseUrl;
  }
  
  pulsa(persona: Persona):number { 
    if (persona.sexo == "F") {
      persona.pulsacion = (220 - persona.edad) / 10;
    } else {
      persona.pulsacion = (210 - persona.edad) / 10;
    }
    return persona.pulsacion
  }

  get(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.baseUrl+'api/Persona')
      .pipe(
        tap(_ => this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Persona[]>('Consulta Persona',null))
      );
  }

  post(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.baseUrl+ 'api/Persona', persona)
      .pipe(
        tap(_ => this.handleErrorService.log('Datos enviados')),
        catchError(this.handleErrorService.handleError<Persona>('Registrar Persona',null))
      );
  }
}
