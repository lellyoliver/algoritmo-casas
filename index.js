/**
 * Fase Inicial quando eu aperto para adicionar o nome
 */
const btnStart = $("#btnStart")
const btnNext = $("#btnNext")
const inputText = $("#inputText")

btnStart.on('click', () => {
    $("#divStart").remove()
    $(".divContinue").append(`
        <div id="divNext">
            <h3 class="mb-3">Descubra a casa dos seus sonhos e transforme sua vida</h3>
            <div class="mb-3 next">
                <input type="text" id="inputText" class="form-control" placeholder="Preencha aqui" aria-describedby="helpId">
            </div>
            <button type="button" class="btn btn-primary" onclick="divNext()" id="btnNext">Button</button>
        </div>
      ` );
})

function divNext() {
    $("#divNext").remove()
    $(".divContinue").append(`
            <div id="divFinish">
                <h1 class="mb-3">FINISH</h1>
                <div class="row mb-5">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="qualidade de vida" name="tag[]" id="qualidade">
                            <label for="qualidade">Qualidade de Vida</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="espaco para recreacao em familia" name="tag[]"
                                id="espaco-recrea">
                            <label for="espaco-recrea">Espaço para recreação em família</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="comercios proximos" name="tag[]" id="comercio-prox">
                            <label for="comercio-prox">Comércios próximos</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="espaco para churrasco e amigos" name="tag[]"
                                id="espaco-churrasco">
                            <label for="espaco-churrasco">Espaço para churrasco e amigos</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="seguranca" name="tag[]" id="seguranca">
                            <label for="seguranca">Segurança</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="condominio" name="tag[]" id="condominio">
                            <label for="condominio">condomínio</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="ar livre" name="tag[]" id="ar-livre">
                            <label for="ar-livre">Ar-livre</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="moradores proximos" name="tag[]" id="moradores-prox">
                            <label for="moradores-prox">Moradores próximos</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="sem moradores proximos" name="tag[]"
                                id="sem-moradores-prox">
                            <label for="sem-moradores-prox">Sem moradores próximos</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="vias proximas" name="tag[]" id="vias-prox">
                            <label for="vias-prox">Vias próximas</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="casa grande" name="tag[]" id="casa-grande">
                            <label for="casa-grande">Casa grande</label>
                            </input>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="animal de estimacao" name="tag[]" id="animais">
                            <label for="animais">Animal de estimação</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="passar momentos tranquilos em casal" name="tag[]"
                                id="momentos-casal">
                            <label for="momentos-casal">Passar momentos tranquilos em casal</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="busca de novas oportunidades" name="tag[]"
                                id="oportunidades">
                            <label for="oportunidades">Busca de novas oportunidades</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="igrejas proximas" name="tag[]" id="igrejas">
                            <label for="igrejas">Igrejas próximas</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="ouvir musica alta" name="tag[]" id="musica-alta">
                            <label for="musica-alta">Ouvir música alta</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="perto de avenidas movimentadas" name="tag[]"
                                id="avenidas">
                            <label for="avenidas">Perto de avenidas movimentadas</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="primeira casa" name="tag[]" id="primeira-casa">
                            <label for="primeira-casa">Primeira casa</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="lugar calmo e tranquilo" name="tag[]"
                                id="lugar-calmo">
                            <label for="lugar-calmo">Lugar calmo e tranquilo</label>
                            </input>
                        </div>
            
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="localizacao" name="tag[]" id="localizacao">
                            <label for="localizacao">Localização</label>
                            </input>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="espaco para exercitar" name="tag[]"
                                id="espaco-exercitar">
                            <label for="espaco-exercitar">Espaço para exercitar</label>
                            </input>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="pracas proximas" name="tag[]" id="pracas-prox">
                            <label for="pracas-prox">Praças próximas</label>
                            </input>
                        </div>
                    </div>
                </div>
            <button type="button" class="btn btn-primary" onclick="divFinish()" id="btnFinish">Button</button>
            </div>
          ` );



}
function divFinish() {
    const checkbox = document.querySelectorAll("input[type='checkbox']")
    let selects = []
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selects.push(checkbox[i].value)
        }
    }
    console.log(selects);

    loadHouse().then((casas) => {
        casas.forEach((item) => {
            let tag = item.tag;
            let counter = 0
            tag.forEach(items => {
                if (selects.includes(items) && counter == 0) {
                    counter++
                    $("#data").append(`
                    <div class="col-md-4 mb-3 card-house">
                                <div class="card">
                                    <img src="${item.urlImage}" class="card-img-top" alt="${item.title}">
                                    <div class="card-body">
                                        <span class="badge bg-primary mb-2">${item.category}</span>
                                        <h5 class="card-title">${item.title}</h5>
                                        <p class="card-text">${item.adress}</p>
                                        <p class="card-text mt-4 fw-bolder fs-6">${item.price}</p>
                                        <a href="${item.urlLink}" role="submit" class="btn btn-primary btn-sm col-12" id="view-more">Ver mais</a>

                                    </div>
                                    <div class="card-footer">
                                        <div class="divisor divisor d-flex justify-content-center">
                                            ${pushItems("room", item.room, "bed-individual", "quarto")}
                                            ${pushItems("suite", item.suite, "bed-front", "suíte")}
                                            ${pushItems("bathroom", item.bathroom, "bath", "banheiro")}
                                            ${pushItems("garage", item.garage, "garage-car", "carro")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    `)
                    console.log(item)
                }
            })
        })
    })
    function pushItems(id, placeHouse, img, placeName) {
        const placeAdd = `<small class="text-muted me-3" id="${id}"><img src="svg/${img}.svg" width="15" class="me-2 filter-svg" />${placeHouse} ${placeName}${placeHouse > 1 ? "s" : ""}</small>`
    
        if (placeHouse > 0) {
            return placeAdd
        } else {
            return ""
        }
    
    }
    

}

async function loadHouse() {
    const json = await fetch("https://lellyoliver.github.io/algoritmo-casas/path/casas.json")
        .then((response) => {
            return response.json()
        })
        .catch(error => { console.error(error) })
    return json;
}
