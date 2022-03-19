import { AbstractDispatchable } from '@o.yilmaz/js-dispatcher/build/src'
import { Commands } from './Commands'

export abstract class AbstractCommand extends AbstractDispatchable {
    abstract kind: Commands

    setData() {
        return null
    }
}
