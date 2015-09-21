define('knockout.dirtytracker', ['knockout'], (function (ko) {

  //When dirtyTracker.track is called on a viewmodel an isDirty() observable is added.
  //The flag is set to true if any observable property of the viewmodel is changed.
  //If an observable in the viewmodel should not be tracked, use ko.observable().extend({ dirtyTracked: false });
  //The dirty flag itself is not tracked, so it can be manually be set: vm.isDirty(false)
  //Call dirtyTracker.track(vm) before ko.applyBindings(vm)!

  ko.extenders.dirtyTracked = function (target, tracked) {
    target.isDirtyTracked = tracked;
    return target;
  };

  var dirtyTracker = {
    track: function (vm) {
      vm.isDirty = ko.observable(false); //add flag
      for (var prop in vm) {
        if (typeof vm[prop] === 'function' && (vm[prop].isDirtyTracked === true || !ko.isComputed(vm[prop]))) {
          if (vm[prop].subscribe) {
            if (vm[prop].isDirtyTracked === undefined) {  //Set tracking ON as default
              vm[prop].isDirtyTracked = true;
            }
            if (vm[prop].isDirtyTracked) {
              if (prop !== "isDirty") {
                vm[prop].subscribe(function (newValue) {
                  vm.isDirty(true);
                });
              }
            }
          }
        }
      }
    }
  };

  return dirtyTracker;

}));
