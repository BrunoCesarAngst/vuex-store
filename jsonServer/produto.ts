export interface Produto {
    caracteristicas: Caracteristica[];
    produtos:        ProdutoElement[];
    modelos:         Modelo[];
}

export interface Caracteristica {
    produtoId:      string;
    caracteristica: string;
    valor:          string;
    id:             string;
}

export interface Modelo {
    produtoId: string;
    id:        string;
    modelo:    string;
}

export interface ProdutoElement {
    produto: string;
    id:      string;
}
