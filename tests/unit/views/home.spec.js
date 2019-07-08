import { mount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('页面 - 首页 - Home', () => {
  const wrapper = mount(Home)
  it('占位符', () => {
    expect(wrapper.html()).toContain('-')
  })
})
