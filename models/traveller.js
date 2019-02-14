const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(trip => trip.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(trip => trip.endLocation)
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(trip => trip.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(trip => trip.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totsDist, trip) => totsDist + trip.distance,0)
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return this.journeys.map(trip => trip.transport {
//   })
//   .filter((trip, ))

module.exports = Traveller;
