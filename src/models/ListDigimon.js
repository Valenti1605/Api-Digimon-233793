export class ListDigimon{
    #digimons = []

    addDigimons(digimon){
        this.#digimons.push(digimon)
    }

    getDigimons(){
        return this.#digimons
    }
}
