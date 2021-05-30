export interface IUser {
  icon: string
  name: string|null
}

export interface IMessage {
  senderIcon: string
  senderName: string
  content: string
  sendedAt: string
}

export interface IUserContent {
  state: {
    members: IUser[]
    user: IUser
  }
  setState: Function
}
