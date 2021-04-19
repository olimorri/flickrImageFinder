describe('Navigate to page, ', () => {
  it('Visits HomePage', () => {
    cy.visit('http://localhost:3000/');
  });
  it('Automatically assigns a length of 20 images to the page', () => {
    cy.get('.image_list').find('.image_tile').should('have.length', 20);
  });
  //Because of CORs, clicking through to Flickr isn't suitable
  it('Searches by title and simulate click on title or username', () => {
    cy.get('input').type('a');
    cy.get('.image_tile').first().get('a').first();
  });
});
