/** Just a bunch of useful scripts **/

var $ = document.querySelector.bind(document);
var $ = (Document.prototype.$ = Document.prototype.querySelector).bind(document);
var $$ = (Document.prototype.$$ = Document.prototype.querySelectorAll).bind(document);
Element.prototype.$ = Element.prototype.querySelector;
Element.prototype.$$ = Element.prototype.querySelectorAll;
NodeList.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.map = Array.prototype.map;

(Reveal ? Reveal : document).addEventListener('ready', function() {
    /* Transform #?? links into GitHub issues links */
    $$('a[href^="#"]').forEach(function (a) {
	var match = /#(\d+)/.exec(a.href);
	if (match !== null) {
	    a.href = 'https://github.com/OpenDreamKit/OpenDreamKit/issues/' + match[1];
	    a.dataset['issue'] = match[1];
	}
    });
    /* Fetch description of GitHub issues from GH api */
    var issues = $$('a[data-issue]');
    if (issues.length > 0) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.github.com/repos/OpenDreamKit/OpenDreamKit/issues?per_page=100&labels=deliverable&filter=all&state=all');
	xhr.responseType = 'json';
	xhr.onload = function() {
	    issues.forEach(function(a) {
		if (!a.classList.contains('no-ghapi')) {
		    var issue = xhr.response.filter(function (i) {
			return i.number == a.dataset.issue;
		    });
		    if (issue.length > 0) {
			a.textContent = issue[0].title;
		    } else {
			a.style.color = 'red';
			console.log('Unknown issue ' + a.dataset.issue);
		    }
		}
	    });
	};
	xhr.send();
    }
});
