---
layout: default
permalink: /blog/
class: blog
---

{% include bars %}
<div class="container">
	{% include info %}
	<div class="posts">
	    <div class="section-heading bigger">posts</div>
	    <div class="posts-list">
	        {% for post in site.posts %}
	        <a class="post-item" href="{{ post.url }}">
	        <span>{{ post.title }}</span><span class="shift-right not-visible-on-mobile">{{ post.date | date: "%B %e, %Y" }}</span></a>
	        {% endfor %}
        </div>
	</div>

</div>
