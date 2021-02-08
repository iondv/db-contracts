'use strict';

/**
 * @constructor
 */
class DataSource {
  /**
   * @returns {*}
   */
  connection() {
    return this._connection();
  }

  /**
   * @returns {Promise}
   */
  open() {
    return this._open();
  }

  /**
   * @returns {Promise}
   */
  close() {
    return this._close();
  }

  /**
   * @param {String} type
   * @param {{}} conditions
   * @returns {Promise}
   */
  delete(type, conditions) {
    return this._delete(type, conditions);
  }

  /**
   * @param {String} type
   * @param {{}} data
   * @param {{}} [options]
   * @param {Boolean} [options.skipResult]
   * @param {Boolean} [options.adjustAutoInc]
   * @returns {Promise}
   */
  insert(type, data, options) {
    return this._insert(type, data, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} conditions
   * @param {{}} data
   * @param {{}} [options]
   * @param {Boolean} [options.skipResult]
   * @param {Boolean} [options.bulk]
   * @param {Boolean} [options.adjustAutoInc]
   * @returns {Promise}
   */
  update(type, conditions, data, options) {
    return this._update(type, conditions, data, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} conditions
   * @param {{}} data
   * @param {{}} [options]
   * @param {Boolean} [options.skipResult]
   * @param {Boolean} [options.adjustAutoInc]
   * @returns {Promise}
   */
  upsert(type, conditions, data, options) {
    return this._upsert(type, conditions, data, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} [options]
   * @param {{}} [options.filter]
   * @param {{}} [options.fields]
   * @param {{}} [options.sort]
   * @param {Number} [options.offset]
   * @param {Number} [options.count]
   * @param {Boolean} [options.countTotal]
   * @param {String} [options.to]
   * @param {String} [options.append]
   * @returns {Promise}
   */
  fetch(type, options) {
    return this._fetch(type, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} [options]
   * @param {{}} [options.filter]
   * @returns {Promise}
   */
  count(type, options) {
    return this._count(type, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} [options]
   * @param {{}} [options.filter]
   * @param {{}} [options.fields]
   * @param {{}} [options.sort]
   * @param {Number} [options.offset]
   * @param {Number} [options.count]
   * @param {Boolean} [options.countTotal]
   * @returns {Promise}
   */
  iterator(type, options) {
    return this._iterator(type, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} options
   * @param {{}} [options.filter]
   * @param {{}} [options.fields]
   * @param {{}} [options.aggregates]
   * @param {String} [options.to]
   * @param {String} [options.append]
   * @returns {Promise}
   */
  aggregate(type, options) {
    return this._aggregate(type, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} conditions
   * @param {{fields: {}}} [options]
   * @returns {Promise}
   */
  get(type, conditions, options) {
    return this._get(type, conditions, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} properties
   * @param {{unique: Boolean}} [options]
   * @returns {Promise}
   */
  ensureIndex(type, properties, options) {
    return this._ensureIndex(type, properties, options || {});
  }

  /**
   * @param {String} type
   * @param {{}} properties
   * @returns {Promise}
   */
  ensureAutoincrement(type, properties) {
    return this._ensureAutoincrement(type, properties);
  }
}

module.exports = DataSource;
