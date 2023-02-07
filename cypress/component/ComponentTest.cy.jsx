//DemoComponentTest.cy.jsx
import Demo from '../../src/TestComponent'

describe('Demo Component', () => {
  // This method performs setup before each test.
  beforeEach(() => {
    // Open Eyes to start visual testing.
    // Each test should open its own Eyes for its own snapshots.
    cy.eyesOpen({
        appName: 'Cypress Components',     // The name of the app under test
        testName: 'Component test',        // The name of the test case
    })
  })

const dateNow = new Date().toLocaleDateString()

  it('Default Message', () => {
    cy.mount(<Demo/>)
    cy.eyesCheckWindow({tag:'component1'});
    cy.eyesClose();
  })

  it('Good Evening Message', () => {
    cy.mount(<Demo greetings='Good Evening'/>)
    cy.eyesCheckWindow({tag:'component1'});
    cy.eyesClose();   
  })

  afterEach(() => {

    // Close Eyes to tell the server it should display the results.
    cy.eyesClose()
  })
})