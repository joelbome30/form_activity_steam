Formulario Manual
Estructura De la Pagina Web

/formulario
    -index.html -- pagina web
    -README.md -- documentacion
    -script.js -- funcionalidad
    -style.css -- estilos css


<--- index.html --->

<html lang="es"> -- especifica lenguaje español

linea 8-13 conecta con google fonts y el css

a partir de la linea  17 crea el formulario
con input y section para el curso
los input tienen required para que no te dejen mandar el formulario
hasta que este terminado

de la linea 37 a la 45 esta oculta hasta que se mande el formulario

script.js conecta con el javascript

<---- style.css --->

aca no hay mucha ciencia es un css normal

lo unico que hay una pequeña animacion cuando presionas el boton.
el hover cuando pasas el mouse por el se hace un poco mas claro con :hover
cuando le das click se hace mas pequeño con:

button:hover{
    background-color: #2970fe;
}

cuando le das click se hace mas pequeño con:

button:active{
    border-style: none;
    transform: scale(0.97);
    background-color: #588fff;
}

en la parte de celulares hace todo mas pequeño si:
@media (max-width: 600px)

<---- script.js --->
de la linea 1 al 7 conecta con supabase
crea unas variables que guarda las keys de supabase
y con una funcion js crea un cliente de supabase con las variables

de la linea 9-11 crea las variables del formulario y resumen
para poder usarlos en el js obteniendolos del html con su ID

detecta cuando le das click al boton de enviar para enviar
el formulario con async para que espere a supabase

dentro de la funcion agarra los datos del formulario y los envia
a supabase con un await para que esperen a que se envie y no de error

    const { error } = await supabaseClient.from("Inscripciones").insert([
        {
            nombre,
            correo,
            contacto,
            curso,
            mensaje
        }
    ]);


despues esconde el formulario y muestra el resumen.