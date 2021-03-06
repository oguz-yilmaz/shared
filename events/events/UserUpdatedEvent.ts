import { Event } from '../Event'
import { Topics } from '../Topics'

export interface UserUpdatedEvent extends Event {
    topic: Topics.UsersUpdated
    data: {
        id: string
        username: string
        email: string
        firstname: string
        lastname: string
        version: number
    }
}
