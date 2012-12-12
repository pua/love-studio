---
layout: nil
---
var newspost = [{% for post in site.categories.course %}['{{post.title}}', '{{post.url}}', '{{ post.date| date:"%Y-%m-%d"}}']{% if forloop.last == false %}, {% endif %}{% endfor %}];