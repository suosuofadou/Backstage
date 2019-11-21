<template>
  <div class="container-warp">
    <div class="editor-container">
      <UE :defaultMsg=defaultMsg :config=config :id=ue ref="ue"></UE>
    </div>
    <div class="warp-view1" :style="[phoneWidth,phoneHeight]">
        <div class="view-app" v-html="htmls"></div>
    </div>
    <el-button type="primary" @click="getUEContent()">获取内容</el-button>
    <el-button type="success" @click="getUEContentTxt()">获取无标签内容</el-button>
  </div>
</template>
<style  lang="scss">
  .container-warp{
    border-radius: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
  .editor-container{
    margin-bottom: 20px;
  }
  .warp-view1{
        position: fixed;right: 5%;top: 80px;border: 1px solid #eaeaea;border-radius: 20px;padding: 45px 2px;
        .view-app{
            height: 100%;overflow-y: auto;overflow-x: hidden;padding: 8px;
            border-top: 1px solid #eaeaea;
            border-bottom: 1px solid #eaeaea;
            *{
                max-width: 100% !important;
            }
            img{
                height: auto !important;
            }
            ol,ul{
                padding: 12px;
            }
        }
    }
</style>
<script>
  import UE from '../../components/UE/UE.vue';
  export default {
    components: {UE},
    data() {
      return {
        phoneWidth:{
          width:(document.body.clientWidth-260)*0.2+'px'
        },
        phoneHeight:{
          height:(document.body.clientWidth-260)*0.36+'px'
        },
        defaultMsg: '<span>可编辑文本框</span>',
        config: {
          initialFrameWidth: (document.body.clientWidth-260)*0.6 ,
          initialFrameHeight: (document.body.clientHeight-60)*0.8,
          autoHeightEnabled:false,
          //scaleEnabled:true,      
          toolbars: [
            ['bold', 'italic', 'underline', 'fontborder','justifyleft','justifyright','justifycenter','justifyjustify', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall','preview'],
            ['insertimage','insertvideo']
          ]
        },
        ue: "ue", // 不同编辑器必须不同的id
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent(); // 调用子组件方法
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      },
      getUEContentTxt() {
        let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    }
  };
</script>
