import { AbstractAggregateRoot } from '../aggretages/AbstractAggregateRoot'

export abstract class AbstractRepository {
    abstract save(aggregate: AbstractAggregateRoot): boolean

    abstract getById(aggregateId: number): AbstractAggregateRoot | null
}
