import { Model, Document } from 'mongoose';

type M = Model<Document>

export type modelCollection = M | M[] | null

export abstract class AbstractConverter {
    public transform(data: modelCollection): modelCollection {
        return data
    }
}