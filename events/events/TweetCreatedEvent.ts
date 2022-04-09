import { Event } from '../Event'
import { Topics } from '../Topics'

export interface TweetCreatedEvent extends Event {
    topic: Topics.TweetCreated
    data: {
        id: string
        content: string
        user: {
            id: string
            username: string
            email: string
            firstname: string
            lastname: string
        }
        version: number
    }
}
