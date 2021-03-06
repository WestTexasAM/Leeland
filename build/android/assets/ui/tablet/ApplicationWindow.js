function ApplicationWindow() {
	var MasterView = require('ui/common/MasterView'),
		DetailView = require('ui/common/DetailView');
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	var masterView = new MasterView(),
		detailView = new DetailView();
	masterView.borderColor = '#000';
	masterView.borderWidth = 1;
	var masterContainer = Ti.UI.createView({
		top:0,
		bottom:0,
		left:0,
		width:240
	});
	masterContainer.add(masterView);
	self.add(masterContainer);
	var detailContainer = Ti.UI.createView({
		top:0,
		bottom:0,
		right:0,
		left:240
	});
	detailContainer.add(detailView);
	self.add(detailContainer);
	masterView.addEventListener('itemSelected', function(e) {
		detailView.fireEvent('itemSelected',e);
	});
	return self;
};
module.exports = ApplicationWindow;
