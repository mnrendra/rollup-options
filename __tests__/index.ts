import index from '..'

describe('Test all features:', () => {
  it('Should return a "Hello, World!" string!', () => {
    const received = index()
    const expected = 'Hello, World!'
    expect(received).toBe(expected)
  })
})
