import { mount } from '@vue/test-utils';
import MessageContainer from '@/views/MessageContainer';

describe('Envolve o componente MessageDisplay', () => {
  it('', () => {
    const wrapper = mount(MessageContainer, {
      stubs: {
        MessageDisplay: '<p data-testid="message">Hello from the db!</p>', // simulando a montagem do componente filho
      },
    })

    const message = wrapper.find('[data-testid="message"]').element.textContent
    expect(message).toEqual('Hello from the db!')
  });
});
