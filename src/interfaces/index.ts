export interface User {
  username: string
}

export interface UsersInPhoto {
  user: User
}

export interface Metadata {
  users_in_photo: UsersInPhoto[]
}

export interface Post {
  link: string
  _id: string
  upvotes: number
  comentarios: number
  criadoEm: string
  metadados: Metadata
  imagens: {
    resolucaoPadrao: {
      url: string
    }
  }
}
