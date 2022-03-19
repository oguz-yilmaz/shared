import {Event} from '../Event'
import { Topics } from '../Topics'

export interface UserCreatedEvent extends Event {
    topic: Topics.Users
    aggregateType: 'User'
    aggregateId?: number
    data: {
        email: string
        firstname: string
        lastname: string
    },
    version: number
}