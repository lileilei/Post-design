/**
 * Created by lilei on 2017/1/8.
 */
var router = require('koa-router')();
router.get('/getProduction', function *() {
  this.body = {'asd': 'sdf'}
});

module.exports = router;
