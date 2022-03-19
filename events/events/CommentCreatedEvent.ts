import { Event } from '../Event'
import { Topics } from '../Topics'

export interface CommentCreatedEvent extends Event {
    topic: Topics.Comments
    aggregateType: 'Comment'
    aggregateId?: number
    data: {
        tweetId: number
        content: string
        user: {
            email: string
            firstname: string
            lastname: string
        }
        version: number
    }
}
