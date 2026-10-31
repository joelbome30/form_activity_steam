//conecta con supabase
const SUPABASE_URL = "https://xytqygoulaayxqwmajtx.supabase.co"
const SUPABASE_KEY = "sb_publishable_G4fd9rVd-pIKfxrgF-gFsQ_6PUv1PXw"
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

//crea las variables del formulario y resumen
const formulario = document.getElementById("form");
const resumen = document.getElementById("resumen");
// detecta cuando mandas el formulario y hace lo que esta dentro
formulario.addEventListener("submit", async (event) => {
    event.preventDefault();
    const botonEnviar = document.getElementById("btn");
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contacto = document.getElementById("contacto-telefono").value.trim();
    const curso = document.getElementById("sixseven").selectedOptions[0].textContent.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const datosFormulario = {
        nombre,
        correo,
        contacto,
        curso,
        mensaje
    };

    botonEnviar.disabled = true;
    botonEnviar.textContent = "Enviando...";

    const { error } = await supabaseClient.from("Inscripciones").insert([
        {
            nombre,
            correo,
            contacto,
            curso,
            mensaje
        }
    ]);

    botonEnviar.disabled = false;
    botonEnviar.textContent = "Enviar!";

    if (error) {
        console.error("Error al guardar el formulario en Supabase:", error);
        return;
    }

    // Muestra los mismos datos que se guardaron en Supabase.
    document.getElementById("resumen-nombre").textContent = datosFormulario.nombre;
    document.getElementById("resumen-correo").textContent = datosFormulario.correo;
    document.getElementById("resumen-contacto").textContent = datosFormulario.contacto;
    document.getElementById("resumen-curso").textContent = datosFormulario.curso;
    document.getElementById("resumen-mensaje").textContent = datosFormulario.mensaje;

    // esconde el formulario y muestra el resumen
    formulario.hidden = true;
    resumen.hidden = false;
    resumen.scrollIntoView({ behavior: "smooth", block: "center" });
});

// hace algo
document.getElementById("editar").addEventListener("click", () => {
    resumen.hidden = true;
    formulario.hidden = false;
    document.getElementById("nombre").focus();
});
