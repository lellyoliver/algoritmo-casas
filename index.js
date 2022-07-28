/**
 * v.0.0.1
 * Creator: Lelly Oliver
 * Co-creator: Matheus Cavalcante -> https://github.com/cavalcantemat
 */
/********************************************************************/

/** caixa de texto */

function nameLead(nameValue) {
    const nameVal = (nameValue) => {
        return (
            `
                                <div class="col">
                                    <h3>${nameValue}, selecione o que mais combina com você: </h3>
                                </div>
                                    `
        )

    }
    const nameAdd = document.getElementById('data-name')
    nameAdd.innerHTML = nameVal(nameValue)

}

/********************************************************************/

/**botões*/

function nextBtn() {
    const nameLead = document.getElementById("nameLead")
    const nameValue = nameLead.value
    if (nameValue != "") {
        //buttons ~ divs
        const next = document.getElementById('next')
        const finish = document.getElementById('finish')
        const checks = document.getElementById('checks')
        const divName = document.getElementById('divLead')

        //remove
        finish.classList.remove("d-none")
        checks.classList.remove("d-none")

        //insere
        next.remove()
        divName.remove()

        //adicionar o nome na proxima "pagina"
        this.nameLead(nameValue)
    } else {
        nameLead.classList.add("is-invalid")
        nameLead.focus()
    }
}

function finishBtn() {
    //pega a checkbox
    const checkbox = document.querySelectorAll("input[type='checkbox']")
    let selects = []
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selects.push(checkbox[i].value)
        }
    }
    if (selects == "") {
        //valida se é vazio
        validButton(selects)
    } else {
        //printa na function principal do algoritmo
        perfil(selects)
    }
}


/********************************************************************/

/**function principal com a request json*/

async function loadHouse() {
    const response = await fetch("https://lellyoliver.tk/algoritmo-casas/path/casas.json", {
        method: 'GET',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => { return response.json() })
        .catch(error => { console.error(error) })

    return response
}

/**function de recebimento da json */

function perfil(checkbox) {
    loadHouse().then((casas) => {
        const listComponent = (casas) => {

            //cria um array
            return casas.map((item) => {
                let tag = item.tag;
                let counter = 0
                return tag.map((element) => {
                    if (checkbox.includes(element) && counter == 0) {
                        counter++
                        return (
                            `
                            <div class="col-md">
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
                                            ${validItens("room", item.room, "bed-individual", "quarto")}
                                            ${validItens("suite", item.suite, "bed-front", "suíte")}
                                            ${validItens("bathroom", item.bathroom, "bath", "banheiro")}
                                            ${validItens("garage", item.garage, "garage-car", "carro")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                                `
                        )

                    }


                }).join('')
            }).join('')
        }
        const dataList = document.getElementById('data-list')
        dataList.innerHTML = listComponent(casas)
    })
    return { checkbox }
}

/********************************************************************/

/**validações*/

function hideToCheckbox(checkbox) {
    const hideCheck = document.getElementById("checks")
    const hidebtn = document.getElementById("finish")
    const callout = document.querySelector('.callout')

    if (checkbox) {
        hideCheck.remove()
        hidebtn.remove()
        callout.remove()
    }
}

function validInput() {
    const nameLead = document.getElementById("nameLead")
    const nameValue = nameLead.value
    if (nameValue == "") {
        nameLead.classList.add("is-invalid")
        console.log("clicado")
    } else {
        nameLead.classList.remove("is-invalid")
        nameLead.classList.add("is-valid")
    }
}

function validButton(select) {
    const toasts = (select) => {
        return (
            `
            <div class="alert alert-danger" role="alert">
               <b>Aviso!</b> Selecione uma das checkbox acima.
            </div>git 
                                    `
        )

    }
    const toastAdd = document.getElementById('data-aviso')
    toastAdd.innerHTML = toasts(select)
}


function validItens(id, placeHouse, img, placeName) {
    const placeAdd = `<small class="text-muted me-3" id="${id}"><img src="svg/${img}.svg" width="15" class="me-2 filter-svg" />${placeHouse} ${placeName}${placeHouse > 1 ? "s" : ""}</small>`

    if (placeHouse > 0) {
        return placeAdd
    } else {
        return ""
    }

}
