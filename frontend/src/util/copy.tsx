type _typeObj = { [anyKey: string]: any }

/**
 * @param copy 深拷贝
 * @param _object 如果不传返回为空对象 必须是js的{}对象
 * @param _obj 可选 返回传入的@param _object 必须是js的{}对象,
 */
export const copy = (_object: _typeObj, _obj: _typeObj = {}): _typeObj => {
    if (!(Object.prototype === Object.getPrototypeOf(_object))) {
        return new Error('传入参数***_object***类型错误')
    }
    for (let key in _object) {
        if (Object.prototype === Object.getPrototypeOf(_object[key])) {
            _obj[key] = copy(_object[key])
        } else {
            _obj[key] = _object[key]
        }
    }
    return _obj
}