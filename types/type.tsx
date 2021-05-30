export interface IMessage {
  id: string
  senderIcon: string
  senderName: string
  content: string
  sendedAt: string
}

export interface IMessageContent {
  state: {
    messages: IMessage[]
  }
  setState: Function
}

export interface IUser {
  icon: string
  name: string|null
}

export interface IUserContent {
  state: {
    members: IUser[]
    user: IUser
  }
  setState: Function
}