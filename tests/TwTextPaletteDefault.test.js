// ./tests/TwTextPaletteDefault.test.js

import { mount } from '@vue/test-utils'
import TwTextPaletteDefault from '../src/components/TwTextPaletteDefault.vue'



test('TwTextPaletteDefault.vue component mounts successfully', async () => {

    expect(TwTextPaletteDefault).toBeTruthy()

})



test('TwTextPaletteDefault.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(TwTextPaletteDefault, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('TwTextPaletteDefault.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(TwTextPaletteDefault, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})
