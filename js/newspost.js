---
layout: nil
---
var newspost = [{% for post in site.categories.news %}['{{post.title}}', '{{post.url}}', '{{ post.date| date:"%Y-%m-%d"}}']{% if forloop.last == false %}, {% endif %}{% endfor %}];