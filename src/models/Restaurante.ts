class RestauranteClass {
  titulo: string
  nota: string
  descricao: string
  imagem: string
  infos: string[]
  id: number

  constructor(
    id: number,
    titulo: string,
    nota: string,
    descricao: string,
    imagem: string,
    infos: string[]
  ) {
    this.id = id
    this.titulo = titulo
    this.nota = nota
    this.descricao = descricao
    this.imagem = imagem
    this.infos = infos
  }
}

export default RestauranteClass
