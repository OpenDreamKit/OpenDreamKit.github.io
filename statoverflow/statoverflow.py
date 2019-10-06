#!/usr/bin/env python3

import json
from urllib.request import Request, urlopen
from gzip import GzipFile
from io import BytesIO
from datetime import datetime
import sys

BASE = 'https://api.stackexchange.com/tags/%(tags)s/info?site=%(site)s&pagesize=100'

def fetch_tags(tags, site='stackoverflow'):
    if isinstance(tags, str):
        tags = [tags]
    if len(tags) > 100:
        raise ValueError('Give <100 tags')
    res = urlopen(Request(BASE % { 'tags': ';'.join(tags), 'site': site },
                              headers={'Accept-Encoding': 'gzip'}))
    if res.info().get('Content-Encoding') == 'gzip':
        f = GzipFile(fileobj=BytesIO(res.read()))
    else:
        f = res
    items = {}
    for i in json.loads(f.read().decode())['items']:
        items[i['name']] = i
    return items

def write_counts(data, site='stackoverflow', out=sys.stdout):
    date = datetime.today().isoformat()
    for t, d in data.items():
        out.write('%s,%s,%s,%s\n' % (site, t, date, d['count']))

def exec(conffile=sys.stdin):
    conf = json.load(conffile)
    with open(conf['outfile'], 'a') as out:
        for s in conf['sites']:
            try:
                data = fetch_tags(conf['tags'], site=s)
                write_counts(data, site=s, out=out)
            except Exception as e:
                print('Error fetching data %r in %s' % (e, s), file=sys.stderr)

exec()
