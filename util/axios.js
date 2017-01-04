/**
 * Created by lilei on 2016/11/3.
 */
import axios from 'axios'

/**
 * 功能：axios 基础配置
 * 返回：配置好的增强版本 axios
 * */
axios.defaults.baseURL = 'http://127.0.0.1:3000'
// axios.defaults.headers.common['Authorization'] = '';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
module.exports = axios
