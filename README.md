# knockout.dirtytracker
Adds a single isDirty flag to the viewmodel, that by default subscribes to all non-computed observables automatically.<br />

When dirtyTracker.track is called on a viewmodel an <pre>isDirty()</pre> observable is added.<br />
The flag is set to true if any observable property of the viewmodel is changed.<br />
If an observable in the viewmodel should not be tracked, use <pre>ko.observable().extend({ dirtyTracked: false });</pre><br />
If a computed observable in the viewmodel should be tracked, use <pre>ko.observable().extend({ dirtyTracked: true });</pre><br />
The dirty flag itself is not tracked, so it can be manually be set: <pre>vm.isDirty(false)</pre><br />
Call <pre>dirtyTracker.track(vm)</pre> before <pre>ko.applyBindings(vm)!</pre><br />

Demo on JSFiddle.net:<br />
<a href="http://jsfiddle.net/larsholm/y3t7ku5e/4/">http://jsfiddle.net/larsholm/y3t7ku5e/4/</a>
