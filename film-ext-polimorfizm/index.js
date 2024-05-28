class Film {
  constructor(name, year, regisor) {
    this.name = name;
    this.year = year;
    this.regisor = regisor;
  }
  details() {
    console.log(`${this.name} was made in ${this.year} by ${this.regisor}.`);
  }
}

class FilmAksion extends Film {
  constructor(name, year, regisor, rate) {
    super(name, year, regisor);
    this.rate = rate;
  }
  details() {
    console.log(
      `${this.name} was made in ${this.year} by ${this.regisor} and is rated with ${this.rate}.`
    );
  }
}

class FilmKomedi extends Film {
  constructor(name, year, regisor, rate) {
    super(name, year, regisor);
    this.rate = rate;
  }
  details() {
    console.log(
      `${this.name} was made in ${this.year} by ${this.regisor} and is rated with ${this.rate}.`
    );
  }
}

class FilmDrame extends Film {
  constructor(name, year, regisor, rate) {
    super(name, year, regisor);
    this.rate = rate;
  }
  details() {
    console.log(
      `${this.name} was made in ${this.year} by ${this.regisor} and is rated with ${this.rate}.`
    );
  }
}

const filmAksion = new FilmAksion("Mission Impossible", 2018, "regisor1", "5 stars");
const filmKomedi = new FilmKomedi("Home Alone", 2014, "regisor2", "3 stars");
const filmDrame = new FilmDrame("Move 3", 2019, "regisor3", "4 stars");
const filmDrame1 = new FilmDrame("film4", 2013, "regisor5", "3 stars");
const film = [filmAksion, filmKomedi, filmDrame, filmDrame1]
film.forEach(x => {
  x.details()
})