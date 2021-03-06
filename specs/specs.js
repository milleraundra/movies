describe('Movies', function() {
  it('captures user data', function(){
    var testTicket = new Ticket("Homeward Bound", "Adult", "7:00pm");
    expect(testTicket.movie).to.equal("Homeward Bound");
    expect(testTicket.age).to.equal("Adult");
    expect(testTicket.time).to.equal("7:00pm");
  });
  it('captures input data for age', function(){
    var testAge = new Age("youth", "student", "adult", "senior");
    expect(testAge.youth).to.equal("youth");
    expect(testAge.student).to.equal("student");
    expect(testAge.adult).to.equal("adult");
    expect(testAge.senior).to.equal("senior");
  });
});
