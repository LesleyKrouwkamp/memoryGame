describe('turnCard', function(){
   
    beforeEach(function() {
        card.addEventListener('click', turnCard);
    })
    it('should return true', function(){
        expect(turnCard()).toBe(true);
    });
    it('should return false', function(){
        expect(turnCard()).toBe(false);
    });
});

describe('matching', function(){

    it('should freeze cards when two cards are matching', function(){
        expect(matching()).toBe(stopCards());
    });
    it('should turn back cards if cards do not match', function(){
        expect(matching()).toBe(turnBack());
    });
});
describe('stopCards', function(){

    it('should freeze cards when two cards are matching', function(){
        expect(stopCards()).toBe(turnCard);
    });
});

