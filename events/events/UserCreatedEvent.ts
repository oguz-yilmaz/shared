import { Event } from '../Event'
import { Topics } from '../Topics'

export interface UserCreatedEvent extends Event {
    topic: Topics.Users
    data: {
        id: string
        username: string
        email: string
        firstname: string
        lastname: string
    }
}
