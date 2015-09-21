# knockout.dirtytracker
Adds a single isDirty flag to the viewmodel, that by default subscribes to all non-computed observables.<br />

When dirtyTracker.track is called on a viewmodel an isDirty() observable is added.<br />
The flag is set to true if any observable property of the viewmodel is changed.<br />
If an observable in the viewmodel should not be tracked, use ko.observable().extend({ dirtyTracked: false });<br />
If a computed observable in the viewmodel should be tracked, use ko.observable().extend({ dirtyTracked: true });<br />
The dirty flag itself is not tracked, so it can be manually be set: vm.isDirty(false)<br />
Call dirtyTracker.track(vm) before ko.applyBindings(vm)!<br />

Demo on JSFiddle.net:<br />
<a href="http://jsfiddle.net/larsholm/y3t7ku5e/4/">http://jsfiddle.net/larsholm/y3t7ku5e/4/</a>
