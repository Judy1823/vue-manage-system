<template>
  <!-- 扩展：MarkDown 编辑器组件 -->
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-folder"></i> 文件处理</el-breadcrumb-item>
        <el-breadcrumb-item>文本编辑器</el-breadcrumb-item>
        <el-breadcrumb-item>markdown编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="plugins-tips">
        mavonEditor：基于Vue的markdown编辑器。 访问地址：<a href="https://github.com/hinesboy/mavonEditor"
           target="_blank">mavonEditor</a>
      </div>
      <!-- imgAdd：图片文件添加回调事件 change：编辑区发生变化的回调事件 -->
      <mavon-editor v-model="content"
                    ref="md"
                    @imgAdd="$imgAdd"
                    @change="change"
                    style="min-height: 600px" />
      <el-button class="editor-btn"
                 type="primary"
                 @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default {
  name: 'markdown',
  data: function () {
    return {
      // Markown 编辑器的文档内容，通过 v-model 进行双向绑定
      content: '',
      html: '',
    };
  },
  components: {
    mavonEditor,
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    // 绑定@imgAdd event
    $imgAdd (pos, $file) {
      // FormData对象用以将数据编译成键值对。
      var formdata = new FormData();
      // 第一步.将图片上传到服务器.
      formdata.append('file', $file);
      // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
      this.$axios({
        url: '/common/upload',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((url) => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>,`$vm`为 `this.$refs.md`
         */
        this.$refs.md.$img2Url(pos, url);
      });
    },
    change (value, render) {
      // render 为 markdown 解析后的结果
      this.html = render;
    },
    submit () {
      console.log(this.content);
      console.log(this.html);
      this.$message.success('提交成功！');
    },
  },
};
</script>
<style scoped>
.editor-btn {
  margin-top: 20px;
}
</style>