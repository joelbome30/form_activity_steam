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
    // coge todo los datos del formulario y los pone en la pagina que muestra el resultado
    document.getElementById("resumen-nombre").textContent = document.getElementById("nombre").value.trim();
    document.getElementById("resumen-correo").textContent = document.getElementById("correo").value.trim();
    document.getElementById("resumen-contacto").textContent = document.getElementById("contacto-telefono").value.trim();
    document.getElementById("resumen-curso").textContent = document.getElementById("sixseven").selectedOptions[0].textContent;
    document.getElementById("resumen-mensaje").textContent = document.getElementById("mensaje").value.trim();

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
