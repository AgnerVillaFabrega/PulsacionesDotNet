using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entity;

namespace pulsacionesdotnet.ClientApp.src.app.models
{
    public class PersonaInputModel
    {
        public string Nombre { get; set; }

        public string Identificacion { get; set; }

        public int Edad { get; set; }

        public string Sexo { get; set; }
    }

    public class PersonaViewModel : PersonaInputModel
    {
        public PersonaViewModel()
        {
        }

        public PersonaViewModel(Persona persona)
        {
            Identificacion = persona.Identificacion;
            Nombre = persona.Nombre;
            Edad = persona.Edad;
            Sexo = persona.Sexo;
            Pulsacion = persona.Pulsacion;
        }

        public decimal Pulsacion { get; set; }
    }
}
