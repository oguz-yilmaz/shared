import { Kafka } from 'kafkajs'

export const kafka = new Kafka({
    clientId: 'twitter-clone',
    brokers: [
        'kafka:9092',
    ],
    retry: {
        initialRetryTime: 100,
        retries: 8
    }
})

export enum Ack {
    ALL = -1,
    NO_ACKNOWLEDGMENTS = 0,
    ONLY_LEADER = 1
}