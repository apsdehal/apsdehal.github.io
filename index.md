---
layout: default
permalink: /
class: home
---
<div class="info">
	<div class="name">
		<h1>Amanpreet Singh</h1>
	</div>
	<div class="contact">
		<div> <span> <a href="//github.com/apsdehal">Github</a></span> </div>
		<div> <span> <a href="//facebook.com/amanpreet.singh.18"> Facebook </a></span></div>
		<div> <span> <a href="//plus.google.com/+AmanpreetSingh94">Google+ </a></span></div>
		<div> <span> <a href="//twitter.com/apsdehal"> Twitter <a></span></div>
		<div> <span> <a href="mailto:me@apsdehal.in"> Email <a></span></div>
		<div> <span class="handle"> @apsdehal </span> </div>
	</div>
</div>
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