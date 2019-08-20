global.document = new JSDOM(index).window.document;

 //import {turnCard} from './game';
  var jsdom = require("jsdom");
  var turnCard = require("./game");
  

  describe('turnCard', function(){
    beforeEach(function() {
        
        const dom = new jsdom.JSDOM('<html><body id="flip">initial</body></html>');
           global.document = dom.window.document;
           global.window = dom.window;
           global.navigator = dom.window.navigator;
          });  
          
    it('should turn the card 180 deg when clicked on', function(){
        expect(turnCard()).toBe("true");
        turn.turnCard();  
        expect(turnCard()).toBe("false");
    });
});

describe('matching', function(){
      var match = matching();
    it('should freeze cards when two cards are matching', function(){
        expect(match).toBe(stopCards());
    });
    it('should turn back cards if cards do not match', function(){
        expect(match).toBe(turnBack());
    });
});
describe('stopCards', function(){

    it('should freeze cards when two cards are matching', function(){
        expect(stopCards()).toBe(turnCard);
    });
});
describe('stopCards', function(){

    it('should freeze cards when two cards are matching', function(){
        expect(stopCards()).toBe(turnCard);
    });

});    

