<template lang="pug">
  div
    .btn-group
      v-btn(color="primary",dark,@click="createDialog=true")
        v-icon(dark) add
        | &nbsp;添加
    v-dialog(v-model="createDialog",max-width="500px")
      v-card
        v-card-title 添加
        v-divider
        v-form.dialog-form(ref="form",lazy-validation)
          v-text-field(
            v-model="formData.name",
            :counter="10",
            label="英文名",
            required)
          v-text-field(
            v-model="formData.label",
            label="中文名",
            required)
          v-text-field(
            v-model="formData.image",
            type="file",
            label="图片",
            required)
        v-divider
        v-card-actions
          v-spacer
          v-btn.lighten-1(color="primary",dark,@click="formSubmit") 添加
          v-btn(flat,@click="createDialog=false") 关闭
    div Setcategories
</template>

<script>
export default {
  name: 'Setcategories',
  data: () => ({
    createDialog: false,
    formData: {
      name: '',
      label: '',
      image: ''
    }
  }),
  methods: {
    formSubmit () {
      if (this.$refs.form.validate()) {
        console.log(this.formData)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.btn-group
  .v-btn
    &:first-child
      margin-left: 0
    &:last-child
      margin-right: 0
.dialog-form
  padding: 16px
</style>
