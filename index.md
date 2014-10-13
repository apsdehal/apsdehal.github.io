---
layout: default
permalink: /
class: home
---

{% include info %}
<div class="container">
	<div class="posts">
		{% for post in site.posts %}
		<div>
			<span class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></span>
			<span class="post-date">{{ post.date | date: "%b. %e, %Y" }}</span>
		</div>
		{% endfor %}
	</div>
</div>