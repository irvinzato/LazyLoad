//WEB MUY BUENA PARA SACAR INTERFACES! copiando y pegando desde Postman https://app.quicktype.io/
export interface Heroe {
    id?:                string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
    alt_img?:           string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
