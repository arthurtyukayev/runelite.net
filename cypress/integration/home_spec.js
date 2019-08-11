const SOCIAL_LINKS = require('../../src/_data/links')

describe('home page', function() {
  beforeEach(() => {
    cy.server()
    cy.route(
      'GET',
      'https://api.github.com/repos/runelite/runelite',
      'fixture:repository.json'
    )
  })

  it('successfully loads', function() {
    cy.visit('http://localhost:3000')
  })

  it('navbar contains functioning `features` page link', () => {
    cy.get('#navbar > :nth-child(1) > .nav-item > a[href="/features"]').then(
      $btn => {
        const buttonText = $btn.text()
        expect(buttonText).to.be.eq(' Features')

        cy.get($btn).click()

        cy.url().should('include', '/features')
        cy.go('back')
      }
    )
  })

  it('navbar contains functioning `blog` page link', () => {
    cy.get('#navbar > :nth-child(1) > .nav-item > a[href="/blog"]').then(
      $btn => {
        const buttonText = $btn.text()
        expect(buttonText).to.be.eq(' Blog')

        cy.get($btn).click()

        cy.url().should('include', '/blog')
        cy.go('back')
      }
    )
  })

  it('navbar contains functioning `tags` page link', () => {
    cy.get('#navbar > :nth-child(1) > .nav-item > a[href="/tag"]').then(
      $btn => {
        const buttonText = $btn.text()
        expect(buttonText).to.be.eq(' Tags')

        cy.get($btn).click()

        cy.url().should('include', '/tag')
        cy.go('back')
      }
    )
  })

  it('navbar contains functioning `wiki` page link', () => {
    cy.get('#navbar > :nth-child(1) > .nav-item > a[href$="/wiki"]').then(
      $btn => {
        const buttonText = $btn.text()
        expect(buttonText).to.be.eq(' Wiki')
      }
    )
  })

  it('navbar contains functioning `API` dropdown link', () => {
    cy.get('#navbarDropdown').then($btn => {
      const buttonText = $btn.text()
      expect(buttonText).to.be.eq(' API')
    })

    // TODO: Add testing to dropdown API links menu.
    // https://docs.cypress.io/api/commands/hover.html#Workarounds
  })

  it('contains social icon links', () => {
    const socialLinks = Object.assign({}, SOCIAL_LINKS)
    delete socialLinks.patreon

    Object.entries(socialLinks).forEach(([social, link]) => {
      cy.get(`#navbar > :nth-child(2) > .nav-item > a[href="${link}"]`).then(
        $btn => {
          const buttonText = $btn.text().toLowerCase()
          expect(buttonText).to.be.eq(` ${social.toLowerCase()}`)
        }
      )
    })

    cy.get(
      `#navbar > :nth-child(2) > .nav-item > a[href="${SOCIAL_LINKS.patreon}"]`
    ).then($btn => {
      const buttonText = $btn.text()
      expect(buttonText).to.be.eq(` Become a patron`)
    })
  })

  it('displays github repo watchers count in nav bar', async () => {
    const githubData = cy.fixture('repository.json')
    cy.get(
      `#navbar > :nth-child(2) > .nav-item > a[href="https://github.com/runelite/runelite/stargazers"]`
    ).then($btn => {
      const buttonText = $btn.text()
      expect(buttonText).to.be.eq(` ${githubData.stargazers_count} Stargazers`)
    })
  })
})
