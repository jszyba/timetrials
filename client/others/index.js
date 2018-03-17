function ViewModel() {
  var self = this;
  self.data = ko.observableArray();
  self.run = function() {
    var data = buildData(),
        date = new Date();
    self.data(data);
    document.getElementById('knockout-load-time').innerHTML = (new Date() - date + ' ms');
  }
}
ko.applyBindings(new ViewModel());

var vueApp = new Vue({
  el: '#vue-root',
  data: {
    data: [],
  },
  methods: {
    run: function() {
      this.data = buildData();
      this.date = new Date();
    }
  },
  updated: function() {
    document.getElementById('vue-load-time').innerHTML = (new Date() - this.date + ' ms');
  }
});

$('#run-jquery').click(function() {
  var data = buildData(),
      date = new Date();
  var children = data.map(function (item) {
    return $('<div class="row-item jquery">' + item.label + '</div>');
  });
  $('#jquery-table').html(children);
  document.getElementById('jquery-load-time').innerHTML = (new Date() - date + ' ms');
});

document.getElementById('run-raw').addEventListener('click', function() {
  var container = document.getElementById('raw-table');
  var data = buildData(),
      date = new Date,
      html = "";
  for (var i = 0; i < data.length; i++) {
    html += '<div class="row-item raw">' + data[i].label + '</div>'
  }
  container.innerHTML = html;
  document.getElementById('raw-load-time').innerHTML = (new Date() - date + ' ms');
});
