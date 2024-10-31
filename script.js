


function ingresoMaterias() {
    let Materias = [];
    let agregarMaterias = true;
 
    while (agregarMaterias) {
        let nombreMateria = prompt("-Ingese el nombre de la materia \n.Matemáticas:  \n.Historia: \n.Arte: \n.Física: ")
        let calificaciónDeMateria = parseFloat(prompt("Ingrese la calificación de " + nombreMateria + " del 1 a 5"));
        let pesoDeLaMateria = parseFloat(prompt("-Ingrese el peso de " + nombreMateria + "\n.Matemáticas: 0.4 \n.Historia:0.3 \n.Arte:0.2 \n.Física:0.1 "))
 
 
         Materias.push({ nombreMateria,calificaciónDeMateria, pesoDeLaMateria });
        agregarMaterias = confirm("¿Quieres agregar otra materia?");
 
    }
 
        let MultiplicaCalificacionPeso= 0;
        let sumaPeso= 0;
 
        //Aplicación del promedio ponderado
        for (let i = 0; i < Materias.length; i++) {
            MultiplicaCalificacionPeso += Materias[i].calificaciónDeMateria * Materias[i].pesoDeLaMateria;
            sumaPeso += Materias[i].pesoDeLaMateria
        }
            let ponderadoPromedio = MultiplicaCalificacionPeso / sumaPeso;
 
            if (ponderadoPromedio >= 3.5) {
                alert("Promedio ponderado " + ponderadoPromedio + " el estudiante Aprueba");
            } else if (ponderadoPromedio < 2.5) {
                alert("Promedio Ponderado:" + ponderadoPromedio + " El estudiante debe repetir el curso.")
 
            } else {
                alert("El estudiante no aprueba ni repite");
            }

            console.log("Proceso terminado")
   
    
 }
 ingresoMaterias(); 
 