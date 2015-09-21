# knockout.dirtytracker
<h4>Automatic isDirty flag for KnockoutJS viewmodels</h4>

Adds a single isDirty flag to the viewmodel, that by default subscribes to all non-computed observables <b>automatically</b>.<br />

When dirtyTracker.track is called on a viewmodel an  observable is added:<pre>vm.isDirty()</pre><br />
The flag is set to true if <b>any</b> observable property of the viewmodel is changed.<br />
If an observable in the viewmodel should not be tracked, use <pre>ko.observable().extend({ dirtyTracked: false });</pre><br />
If a computed observable in the viewmodel should be tracked, use <pre>ko.observable().extend({ dirtyTracked: true });</pre><br />
The dirty flag itself is not tracked, so it can be manually be set: <pre>vm.isDirty(false);</pre><br />
To enable tracking simply call: <pre>dirtyTracker.track(vm)</pre> before <pre>ko.applyBindings(vm);</pre><br />

Demo on JSFiddle.net:<br />
<a href="http://jsfiddle.net/larsholm/y3t7ku5e/4/">http://jsfiddle.net/larsholm/y3t7ku5e/4/</a>
