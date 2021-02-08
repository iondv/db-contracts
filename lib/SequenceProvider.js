'use strict';

class SequenceProvider {
  /**
   * @param {String} name
   * @returns {Promise}
   */
  next(name) {
    return this._next(name);
  }

  /**
   * @param {String} name
   * @param {Number} [value]
   * @returns {Promise}
   */
  reset(name, value) {
    return this._reset(name, value);
  }

  /**
   * @param {String} [name]
   */
  snapshot(name) {
    return this._snapshot(name);
  }
}

module.exports = SequenceProvider;
