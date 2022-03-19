import { Event } from '../events/Event'

export class AbstractAggregateRoot {
    private events: Event[] = []

    protected registerDomainEvent (event: Event) {
        this.events.push(event)
    }

    protected getDomainEvents (): Event[] {
        return this.events
    }
}

