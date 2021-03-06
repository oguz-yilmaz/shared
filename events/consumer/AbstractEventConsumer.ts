import { Kafka, Consumer } from 'kafkajs'
import { kafka } from '../Kafka'
import { Event } from '../Event'

export abstract class AbstractEventConsumer<T extends Event> {
    readonly kafka: Kafka = kafka

    readonly consumer: Consumer = this.kafka.consumer({ groupId: this.getGroupId() })

    abstract readonly topic: T['topic']

    protected abstract getGroupId(): string

    abstract onMessage(data: T['data']): void

    async listen() {
        await this.consumer.connect()

        await this.consumer.subscribe({ topic: this.topic, fromBeginning: true })

        await this.consumer.run({
            eachMessage: async ({ topic, partition, message }: any) => {
                await this.onMessage(JSON.parse(message.value.toString()))
            },
        })
    }
}
