'use strict';

/**
 * @constructor
 */
class DbSync {

  /**
   * @returns {Promise}
   */
  init() {
    return this._init();
  }

  /**
   * @param {{}} classMeta
   * @param {String} [namespace]
   * @returns {Promise}
   */
  defineClass(classMeta, namespace) {
    return this._defineClass(classMeta, namespace);
  }

  /**
   *
   * @param {String} classMetaName
   * @param {String} version
   * @param {String} [namespace]
   * @returns {Promise}
   */
  undefineClass(classMetaName, version, namespace) {
    return this._undefineClass(classMetaName, version, namespace);
  }

  /**
   *
   * @param {{}} viewMeta
   * @param {String} className
   * @param {String} type
   * @param {String} path
   * @param {String} [namespace]
   * @returns {Promise}
   */
  defineView(viewMeta, className, type, path) {
    return this._defineView(viewMeta, className, type, path);
  }

  /**
   * @param {String} className
   * @param {String} type
   * @param {String} path
   * @param {String} version
   * @param {String} [namespace]
   * @returns {Promise}
   */
  undefineView(className, type, path, version) {
    return this._undefineView(className, type, path, version);
  }

  /**
   *
   * @param {{}} navSection
   * @param {String} [namespace]
   * @returns {Promise}
   */
  defineNavSection(navSection, namespace) {
    return this._defineNavSection(navSection, namespace);
  }

  /**
   *
   * @param {String} sectionName
   * @param {String} [namespace]
   * @returns {Promise}
   */
  undefineNavSection(sectionName, namespace) {
    return this._undefineNavSection(sectionName, namespace);
  }

  /**
   * @param {{}} navNode
   * @param {String} navSectionName
   * @param {String} [namespace]
   * @returns {Promise}
   */
  defineNavNode(navNode, navSectionName, namespace) {
    return this._defineNavNode(navNode, navSectionName, namespace);
  }

  /**
   * @param {String} path
   * @param {String} [namespace]
   * @returns {Promise}
   */
  undefineNavNode(path, namespace) {
    return this._undefineNavNode(path, namespace);
  }

  /**
   * @param {String} wfMeta
   * @param {String} [namespace]
   * @returns {Promise}
   */
  defineWorkflow(wfMeta, namespace) {
    return this._defineWorkflow(wfMeta, namespace);
  }

  /**
   * @param {String} className
   * @param {String} name
   * @param {String} [namespace]
   * @param {String} [version]
   * @returns {Promise}
   */
  undefineWorkflow(className, name, namespace, version) {
    return this._undefineWorkflow(className, name, namespace, version);
  }

  defineUserType(userType) {
    return this._defineUserType(userType);
  }
}

module.exports = DbSync;
