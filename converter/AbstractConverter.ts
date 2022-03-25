import { Model, Document } from 'mongoose'

type M = Model<Document>

export type ModelCollection = M | M[] | null

export abstract class AbstractConverter {
    public transform(data: ModelCollection): ModelCollection {
        return data
    }
}
