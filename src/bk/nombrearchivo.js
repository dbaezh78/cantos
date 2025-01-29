<script>
  // Obtener el nombre del archivo HTML actual sin la extensión
  const fileName = window.location.pathname.split("/").pop().replace(".html", "");

  // Agregar el script JS dinámicamente
  const script = document.createElement("script");
  script.src = `/cantos/src/cjs/${fileName}.js`;
  document.head.appendChild(script);

  // Modificar la fuente de audio dinámicamente
  document.addEventListener("DOMContentLoaded", () => {
    const audioSource = document.getElementById("audio-source");
    if (audioSource) {
      audioSource.src = `/cantos/src/audio/${fileName}.mp3`;
      audioSource.parentElement.load(); // Recargar el <audio>
    }
  });
</script>

<audio controls>
  <source id="audio-source" type="audio/mpeg">
  Tu navegador no soporta el elemento de audio.
</audio>
