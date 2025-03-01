async function obtenerHoraMarte() {
    try {
        const respuesta = await fetch("https://api.maas2.apollorion.com/");
        const datos = await respuesta.json();
        console.log(`🪐 Hora en Marte: Sol ${datos.sol}, ${datos.season} - ${datos.terrestrial_date}`);
    } catch (error) {
        console.error("Error obteniendo la hora marciana:", error);
    }
}

obtenerHoraMarte();
