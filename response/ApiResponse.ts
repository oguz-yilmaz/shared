import { ModelCollection } from '../converter/AbstractConverter'

export interface ApiResponse {
    success: boolean
    message: string
    data: ModelCollection
}
