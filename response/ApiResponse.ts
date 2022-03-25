import { Response } from 'express'
import { Model, Document } from 'mongoose'
import { AbstractConverter, modelCollection } from '../converters/AbstractConverter'

export interface TwResponse {
    success: boolean
    message: string
    data: modelCollection
}

export abstract class ApiResponse<T extends AbstractConverter, M extends Model<Document>> extends Response {
    protected abstract readonly converter: T

    send(data: M[], message = ''): TwResponse {
        const transformed: modelCollection = this.converter.transform(data)

        return {
            success: true,
            message,
            data: transformed,
        }
    }
}
