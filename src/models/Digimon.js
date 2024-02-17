export class Digimon {
    #name
    #image
    #level
    setName(name){this.#name = name}
    getName() { return this.#name}
    setImage(image){this.#image=image}
    getImage(){return this.#image}
    setLevel(level){this.#level = level}
    getLevel(){return this.#level}
}