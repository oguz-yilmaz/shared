import { Event } from '../Event'
import { Topics } from '../Topics'

export interface TweetCreatedEvent extends Event {
    topic: Topics.Tweets
    aggregateType: 'Tweet'
    aggregateId?: number
    data: {
        content: string
        user: {
            email: string
            firstname: string
            lastname: string
        }
        version: number
    }
}
