export default class SetHelper {
  constructor(currentSet) {
    this.currentSet = currentSet;
  }

  minus(anotherSet) {
    const _difference = new Set(this.currentSet);
    for (let elem of anotherSet) {
      _difference.delete(elem);
    }
    return _difference;
  }

  intersectWith(anotherSet) {
    const _intersection = new Set();
    for (let elem of anotherSet) {
      if (this.currentSet.has(elem)) {
        _intersection.add(elem);
      }
    }
    return _intersection;
  }

  unionWith(anotherSet) {
    const _union = new Set(this.currentSet);
    for (let elem of anotherSet) {
      _union.add(elem);
    }
    return _union;
  }

  isSupersetOf(anotherSet) {
    for (var elem of anotherSet) {
      if (!this.currentSet.has(elem)) {
        return false;
      }
    }
    return true;
  }
}
