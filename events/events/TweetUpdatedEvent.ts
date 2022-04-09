import { Event } from '../Event'
import { Topics } from '../Topics'

export interface TweetUpdatedEvent extends Event {
    topic: Topics.TweetUpdated
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
