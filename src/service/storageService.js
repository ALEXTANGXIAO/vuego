//本地缓存服务

const PREFIX = 'ginessential_'

//user模块
const USE_PREFIX = '${PREFIX}user_'
const USE_TOKEN = '${USE_PREFIX}token'
const USE_INFO = '${USE_PREFIX}info'

//存储
const set = (key,data) => {
    localStorage.setItem(key,data)
}

//读取
const get = (key) => localStorage.get(key)

export default{
    set,
    get,
    USE_TOKEN,
    USE_INFO,
};