---
layout: default
permalink: /
class: home
---

{% include info %}
<div class="container">
	<div class="posts">
		{% for post in site.posts %}
		<a href="{{ post.url }}">
		<div>
			<span class="post-title">{{ post.title }}</span>
			<span class="post-date">{{ post.date | date: "%b. %e, %Y" }}</span>
		</div>
		</a>
		{% endfor %}
	</div>
</div>