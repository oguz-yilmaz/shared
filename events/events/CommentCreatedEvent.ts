import { Event } from '../Event'
import { Topics } from '../Topics'

export interface CommentCreatedEvent extends Event {
    topic: Topics.CommentsCreated
    data: {
        id: string
        tweetId: string
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
