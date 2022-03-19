import { kafka } from '../Kafka'
import { Kafka, Producer, RecordMetadata } from 'kafkajs'
import { Event } from '../Event'
import { Ack } from '../Kafka'

export abstract class AbstractEventProducer<T extends Event> {
    readonly kafka: Kafka = kafka

    protected readonly producer: Producer = this.kafka.producer()

    async send (topic: T['topic'], data: T['data']): Promise<RecordMetadata[]> {
        await this.producer.connect()

        return await this.producer.send({
            topic,
            messages: [{
                value: JSON.stringify(data)
            }],
            acks: Ack.ONLY_LEADER,
        })
    }
}