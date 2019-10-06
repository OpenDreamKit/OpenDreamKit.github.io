/* Life is to short to comment your code */

function h(c, attrs, content) {
    let [_, tag, id, cls] = /(\w+)(?:#([\w-_]+))?(?:\.([\w-_]+))?/.exec(c);
    let e = document.createElement(tag);
    cls && (e.className = cls);
    id && (e.id = id);
    for (let a in attrs)
	e.setAttribute(a, attrs[a]);
    content && (e.textContent = content);
    return e;
}

fetch('statoverflow.csv')
    .then((res) => res.text())
    .then((csv) => csv.trim().split("\n").map((l) => l.split(',')))
    .then((data) => {
	let list = document.querySelector('#tag-list');
	let stats = {};
	for (let [site, tag, date, count] of data) {
	    if (!(tag in stats))
		stats[tag] = {};
	    if (!(site in stats[tag]))
		stats[tag][site] = [];
	    stats[tag][site].push({ date: new Date(date), count: count });
	}
	for (let tag in stats) {
	    let div = h(`div#${tag}`);
	    d = [];
	    for (let site in stats[tag]) {
		d.push({
		    x: stats[tag][site].map((d) => d.date),
		    y: stats[tag][site].map((d) => d.count),
		    mode: 'lines+markers',
		    name: site,
		});
	    }
	    Plotly.plot(div, d, {
		title: tag,
		autosize: true,
		showlegend: true,
		yaxis: { title: '# questions' },
		rangemode: 'tozero',
	    });
	    document.body.appendChild(div);
	    let li = h('li');
	    li.appendChild(h('a', { href: `#${tag}` }, tag));
	    list.appendChild(li);
	}
    })
    .catch((err) => console.log(err));
