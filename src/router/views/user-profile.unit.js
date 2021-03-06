import Profile from './user-profile.vue'

describe('@views/user-profile', () => {
  it('is a valid view', () => {
    expect(Profile).toBeAViewComponentUsing({ user: { name: '' } })
  })

  it(`includes the provided user's name`, () => {
    const { element } = shallowMountView(Profile, {
      propsData: {
        user: { name: 'My Name' },
      },
    })

    expect(element.textContent).toMatch(/My Name\s+Profile/)
  })
})
