require('../spec.helper');

context('User can input a value and get FizzBuzz results', () => {
  // Initialize a browser and visit the server's root path
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  // Reload before each test 
  beforeEach(async () => {
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after(() => {
    browser.close();
  });

  // Checking output to equal string "Fizz"
  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with:  "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Fizz');
  })

  // Checking if input is not a valid number between 1-100
  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with:  "134" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Man, how hard can it be to read the instructions!');
  })


});