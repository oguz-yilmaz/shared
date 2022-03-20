import { Topics } from './Topics'

export interface Event {
    topic: Topics
    data: unknown
}
