/* global angular */

(function () {
  angular.module('superApp', [])
  .controller('superHerosController', [superHerosControllerFunction])

  function superHerosControllerFunction () {
    this.heros = [
      { name: 'spidey', phone_number: '1-800-spiderman', comics_affiliation: 'marvel', img_url: 'http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png' },
      { name: 'Bat Dude', phone_number: '1-800-bats', comics_affiliation: 'DC', img_url: 'http://fc01.deviantart.net/fs70/i/2010/032/3/1/Batman_Vector_by_potatoketchup.jpg' },
      { name: 'dare devil', phone_number: '1-800-devil', comics_affiliation: 'marvel', img_url: 'http://www.fantastic-four.nl/daredevil.gif' },
      { name: 'Luke Cage', phone_number: '1-800-badass', comics_affiliation: 'DC', img_url: 'http://img06.deviantart.net/ccfc/i/2016/212/e/0/luke_cage___transparent_by_natan_ferri-dabq2zh.png' },
      { name: 'super man', phone_number: '1-800-worst-hero', comics_affiliation: 'DC', img_url: 'http://www.pngmart.com/files/2/Superman-Transparent-Background.png' },
      { name: 'silver surfer', phone_number: '1-800-destruction', comics_affiliation: 'DC', img_url: 'http://animeonly.org/albums/2007_04_30/Games/Silver_Surfer_2.png' }

    ]
  }
})()
