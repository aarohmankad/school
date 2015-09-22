/**
 * Player object to store on server
 * @param startX {Object} starting x coord of player
 * @param startY {Object} starting y coord of player
 * @return {Object} Player Object
 */
var Player = function (startX, startY, startSize) {
  var
    x = startX,
    y = startY,
    size = startSize || Math.random() * 5 + 10,
    id;

  /**
   * @return {Integer} x coord of player
   */
  this.getX = function() {
    return x;
  }

  /**
   * @return {Integer} y coord of player
   */
  this.getY = function() {
    return y;
  }

  /**
   * @return {Integer} size of player
   */
  this.getSize = function() {
    return size;
  }

  /**
   * set x coord of player
   * @param newX {Integer} new x coord for player
   */
  this.setX = function(newX) {
    x = newX;
  }

  /**
   * set y coord of player
   * @param newY {Integer} new y coord for player
   */
  this.setY = function(newY) {
    y = newY;
  }

  return this;
}

exports.Player = Player;