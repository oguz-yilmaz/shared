import { Event } from '../Event'
import { Topics } from '../Topics'

export interface TweetCreatedEvent extends Event {
    topic: Topics.Tweets
    data: {
        id: string
        content: string
        user: {
            id: string
            email: string
            firstname: string
            lastname: string
        }
        version: number
    }
}
