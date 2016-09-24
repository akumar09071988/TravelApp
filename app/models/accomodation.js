function Accomodation(dataSrc) {
	this.dataSrc = dataSrc;
	this.id = '';
	this.name = '';
	this.address = '';
	this.city = '';
	this.country = '';
	
};


Accomodation.prototype.convertHotelExpediaData = function(data) {
	this.id = data.id;
	this.name = data.name;
	this.address = data.address;
	this.city = data.city;
	this.country = data.country;
	this.totalPrice = parseFloat(data.lowRateInfo.totalPriceWithMandatoryFees);
	return this;
}

Accomodation.sortByTotalPrice = function (acco1, acco2) {
	return acco1.totalPrice - acco2.totalPrice;
};


module.exports = Accomodation;