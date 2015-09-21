# knockout.dirtytracker
Adds a single isDirty flag to the viewmodel, that by default subscribes to all non-computed observables.

When dirtyTracker.track is called on a viewmodel an isDirty() observable is added.
The flag is set to true if any observable property of the viewmodel is changed.
If an observable in the viewmodel should not be tracked, use ko.observable().extend({ dirtyTracked: false });
If a computed observable in the viewmodel should be tracked, use ko.observable().extend({ dirtyTracked: true });
The dirty flag itself is not tracked, so it can be manually be set: vm.isDirty(false)
Call dirtyTracker.track(vm) before ko.applyBindings(vm)!

Demo on JSFiddle.net:
http://jsfiddle.net/larsholm/y3t7ku5e/4/
