// ./tests/TwTextPaletteDefault.test.js

import { twTextPaletteDefault } from '../src/index'



test('twTextPaletteDefault component returns a truthy value', async () => {

    expect(twTextPaletteDefault).toBeTruthy()

})



test('twTextPaletteDefault.default component returns an object with a truthy default property', async () => {

    expect(twTextPaletteDefault.default).toBeTruthy()

})



test('twTextPaletteDefault.default.colors component returns an object with a truthy colors property', async () => {

    expect(twTextPaletteDefault.default.colors).toBeTruthy()

})



test('twTextPaletteDefault component returns an object with the standard five default color names', async () => {

    expect(twTextPaletteDefault.default.colors['default']).toBe('')
    expect(twTextPaletteDefault.default.colors['error']).toBeTruthy()
    expect(twTextPaletteDefault.default.colors['primary']).toBeTruthy()
    expect(twTextPaletteDefault.default.colors['secondary']).toBeTruthy()
    expect(twTextPaletteDefault.default.colors['success']).toBeTruthy()

})
