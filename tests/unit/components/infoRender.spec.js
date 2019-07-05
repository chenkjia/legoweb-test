import { mount } from '@vue/test-utils'
import InfoRender from '@/components/InfoRender'

describe('组件 - 渲染器 - InfoRender', () => {
  const wrapper = mount(InfoRender)
  it('占位符', () => {
    expect(wrapper.html()).toContain('-')
    wrapper.setProps({ placeholder: '' })
    expect(wrapper.html()).toContain('')
    wrapper.setProps({ placeholder: '暂无数据' })
    expect(wrapper.html()).toContain('暂无数据')
  })
})
