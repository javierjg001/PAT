const url = "http://api.marketstack.com/v1/eod?access_key=219b66d5ddbba739ae5b7d8dc9598be9&symbols=FER.BMEX";

let llamarApi = async () => {
    let peticion = await fetch(url, {
        method : "GET",
    });

    console.log(peticion);

    if (peticion.status === 200) {
        let datos = await peticion.json();
        // console.log(datos);
        // console.log(datos.data[0].open);

        for (let i = 0; i<datos.data.length ; i++) {
            const HTMLaCambiar = $("#tr"+i);

            HTMLaCambiar.html(`<td>${datos.data[i].date.slice(0,10)}</td>
                                <td>${datos.data[i].close}</td>
                                <td>${datos.data[i].open}</td>
                                <td>${datos.data[i].high}</td>
                                <td>${datos.data[i].low}</td>
                                <td>${datos.data[i].volume}</td>`)
        }

    } else {
        console.log("fallo");
        const HTMLaCambiar = $("#tr0");

        HTMLaCambiar.html(`<td>Se</td>
                            <td>ha llegado</td>
                            <td>al límite</td>
                            <td>de intentos</td>
                            <td>de la</td>
                            <td>API</td>`);
    };
};

llamarApi();

