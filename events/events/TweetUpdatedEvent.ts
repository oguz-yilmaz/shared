import { Event } from '../Event'
import { Topics } from '../Topics'

export interface TweetUpdatedEvent extends Event {
    topic: Topics.TweetUpdated
    data: {
        id: string
        content: string
        userId: string
        version: number
    }
}
