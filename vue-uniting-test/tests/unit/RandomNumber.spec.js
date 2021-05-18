import { mount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber'

describe('RandomNumber', () => {
  it('por padrão o valor deve ser 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  it('Se o botão for clicado, randomNumber deve estar entre 1 e 10', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  it('Se o botão for clicado, randomNumber deve estar entre 200 e 300', async () => {
    const wrapper = mount(RandomNumber, {
        propsData: {
            min: 200,
            max: 300
        }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()

    const randomNumber = parseInt(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
