import { Topics } from './Topics'

export interface Event {
    topic: Topics
    aggregateType: string
    aggregateId?: number
    data: unknown
}
