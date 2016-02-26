import { stateTrack } from '../lib/wrapState'

export default {
  exit(node, parent, scope) {
    return stateTrack(node)
  }
}