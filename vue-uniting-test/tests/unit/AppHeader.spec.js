import { mount } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader', () => {
  it('Verificando se existe um botão no header', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.contains('button')).toBe(true);
  })

  it('se o usuário não estiver logado, o botão deve estar invisivel', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.find('button').isVisible()).toBe(false);
  });

  it('se o usuário estiver logado, o botão deve estar visivel', async () => {
    const wrapper = mount(AppHeader);
    wrapper.setData({ loggedIn: true });
    await wrapper.vm.$nextTick;
    expect(wrapper.find('button').isVisible()).toBe(true);
  })

  it('deve conter o texto logout dentro do botão', () => {
    const wrapper = mount(AppHeader)
    const text = wrapper.find('button').element.textContent
    expect(text).toContain('Logout')
  })
});
