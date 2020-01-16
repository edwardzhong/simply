<div class="list tag-list">
	<h3 class="page-title">{{ _p('counter.tag_name') }}</h3>
	<h4 class="sub-title">{{ _p('counter.tag_cloud', site.tags.length) }}</h4>
	<div id="tagList">
		{% set tagMap={} %}
		{% for post in site.posts %}
			{% for tag in post.tags %}
				{% if tagMap[tag.name] %}
					{% set tagMap[tag.name] = tagMap[tag.name]+1 %}
				{% else %}
					{% set tagMap[tag.name] = 1 %}
				{% endif %}
			{% endfor %}
		{% endfor %}
		{% for tag in site.tags %}
			{% set cls ="small" %}
			{% if tagMap[tag.name] > 15 %}
				{% set cls="big" %}
			{% endif %}
			{% if tagMap[tag.name] > 9 %}
				{% set cls="middle" %}
			{% endif %}
			<a href="{{ url_for(tag.path) }}" class={{cls}} >{{tag.name}}</a>
		{% endfor %}
	</div>
</div>