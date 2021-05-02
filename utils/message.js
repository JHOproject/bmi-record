import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI,{ size: 'small', zIndex: 3000 });

export function getWarnMsg (text, type) {
  // ** 引用失敗 **
  this.$message({
    showClose: true,
    message: text,
    type: type
  });
};

