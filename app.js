class Media {
  constructor(title){
    this._title = title
    this._isCheckedOut = false
    this._ratings = []
  }

  get title() {return this._title}
  get isCheckedOut() {return this._isCheckedOut}
  get ratings() {return this._ratings}
  set isCheckedOut(flag) {this._isCheckedOut = flag}
  toggleCheckOutStatus () {
    return this._isCheckedOut = !this._isCheckedOut
  }
  getAverageRating (){
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const ratings = this._ratings
    return ratings.reduce(reducer)/ratings.length 
  }
  addRating (newRating) {
    return this._ratings.push(newRating)
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title)
    //super(isCheckedOut)
    //super(ratings)
    this._author = author
    this._pages = pages
  }
  get author() {return this._author}
  get pages() {return this._pages}

}
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title)
    this._director = director
    this._runTime = runTime
  }
  get director() {return this._director}
  get runTime() {return this._runTime}
}


const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
console.log(historyOfEverything.toggleCheckOutStatus())
console.log(historyOfEverything.toggleCheckOutStatus())
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())


const speed = new Movie ('Jan de Bont', 'Speed', 116)
console.log(speed.toggleCheckOutStatus())
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())