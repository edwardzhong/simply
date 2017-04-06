{% extends '_partials/layout.swig' %}

{% block body %}
<div class="list archive-list">
	<h3>{{ _p('counter.archive_name') }}</h3>
	<div class="archive-inner">
	<h4 class="desc">{{ _p('counter.archive_posts', site.posts.length) }}</h4>
	{% for post in page.posts %}
	{% set year %}
	{% set post.year = date(post.date, 'YYYY') %}

	{% if post.year !== year %}
	{% set year = post.year %}
	<h5 class="archive-year">{{ year }}</h5>
	{% endif %}
	<article class="archive-post clearfix" style="animation:listshow 0.5s ease-out both {{ 0.2+loop.index*0.1}}s">
		<a class="post-link" href="{{ url_for(post.path) }}">
		<time class="post-time">{{ date(post.date, 'MM-DD') }}</time>
		<div class="post-detail">
			<h6 class="post-title">{{ post.title }}</h6>
			<div class="post-tags">
			&nbsp;&minus;
			{% if post.tags && post.tags.length %}
				{% set tags=post.tags %}
				{% for tag in tags %}
                    <span>{{ tag.name }}</span>
				{% endfor %}
			{% endif%}
			</div>
		</div>
		</a>
	</article>
	{% endfor %}
	</div>
	{% include '_partials/pagination.swig' %}
</div>
{% endblock %}