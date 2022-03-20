import { Event } from '../Event'
import { Topics } from '../Topics'

export interface TweetCreatedEvent extends Event {
    topic: Topics.Tweets
    data: {
        id: string
        content: string
        userId: string
        version: number
    }
}
