export interface Page{
    id:string
    cliente: string
    ano:string
    categoria:string
    nome: string
    description: string
    finalProduct?:string
    design?: string
    cores?:string
    conceptImg?: string
    idealizacao?: string
    bottomImgs:string[]
    elementoIcones?:string
    coberturaIlustracao?:string
    ritmoCores?:string
    videos:string[]
    bottomvideos:string[]

}
export interface trabalhosInterface {
    name: string;
    type: string;
    imgCard: string;
    url: string;
}[]

