var minnesotaUnitedFC = {
  teamName: 'Minnesota United FC',
  sport: 'soccer',
  dateFounded: new Date('2010-01-01').getUTCFullYear(),
  location: 'Blaine, Minnesota',
  league: 'North American Soccer League',
  playerRoster: [
    {number: '1', position: 'Goalkeeper', name: 'Aaron Perez', country: 'United States'},
    {number: '2', position: 'Defender', name: 'Justin Davis', country: 'United States'},
    {number: '3', position: 'Defender', name: 'Jeb Brovsky', country: 'United States'},
    {number: '5', position: 'Defender', name: 'Tiago Calvano', country: 'Brazil'},
    {number: '6', position: 'Defender', name: 'Brent Kallman', country: 'United States'},
    {number: '7', position: 'Midfielder', name: 'Ibson', country: 'Brazil'},
    {number: '8', position: 'Forward', name: 'Danny Cruz', country: 'United States'},
    {number: '9', position: 'Forward', name: 'Bernado Añor', country: 'Venezuela'},
    {number: '10', position: 'Forward', name: 'Ben Speas', country: 'United States'},
    {number: '11', position: 'Forward', name: 'Stefano Pinho', country: 'Brazil'},
    {number: '12', position: 'Goalkeeper', name: 'Steward Ceus', country: 'Haiti'},
    {number: '13', position: 'Midfielder', name: 'Jamie Watson', country: 'United States'},
    {number: '14', position: 'Midfielder', name: 'Jack Blake', country: 'Scotland'},
    {number: '15', position: 'Forward', name: 'Ismaila Jome', country: 'Gambia'},
    {number: '17', position: 'Midfielder', name: 'Lance Laing', country: 'Jamaica'},
    {number: '18', position: 'Forward', name: 'Daniel Mendes', country: 'Brazil'},
    {number: '21', position: 'Forward', name: 'Christian Ramirez', country: 'United States'},
    {number: '22', position: 'Defender', name: 'Kevin Venegas', country: 'United States'},
    {number: '23', position: 'Midfielder', name: 'Greg Jordan', country: 'United States'},
    {number: '24', position: 'Goalkeeper', name: 'Kristian Nicht', country: 'Germany'},
    {number: '29', position: 'Forward', name: 'J.C. Banks', country: 'United States'},
    {number: '31', position: 'Defender', name: 'Damion Lowe', country: 'Jamaica'},
    {number: '33', position: 'Goalkeeper', name: 'Sammy Ndjock', country: 'Cameroon'},
    {number: '77', position: 'Midfielder', name: 'Juliano Vicentini', country: 'Brazil'}
  ],
  owner: 'Bill McGuire',
  coach: 'Carl Craig',
  getPlayers: function() {
    var playerList = '';
    for (var i = 0; i < this.playerRoster.length; i++) {
      if(i < this.playerRoster.length && i !== 0){
        playerList += ', ';
      }
      if(i === this.playerRoster.length-1){
        playerList += 'and ';
      }
      playerList += this.playerRoster[i].name;
      if(i === this.playerRoster.length-1){
        playerList += '.';
      }
    }
    return playerList;
  },
  addPlayers: function(number, position, name, country) {
    this.playerRoster.push({
      number: number,
      position: position,
      name: name,
      country: country
    });
  }
};

console.log(minnesotaUnitedFC.teamName + ' is a ' + minnesotaUnitedFC.sport +
' team in the ' + minnesotaUnitedFC.league + '. It was founded in ' +
minnesotaUnitedFC.dateFounded + ', and the owner is ' +
minnesotaUnitedFC.owner + '. Coach ' + minnesotaUnitedFC.coach +
' commands a roster of ' + minnesotaUnitedFC.playerRoster.length +
' players: ' + minnesotaUnitedFC.getPlayers());
