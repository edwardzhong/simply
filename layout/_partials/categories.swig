<div class="list category-list">
	<h3 class="page-title">{{ _p('counter.category_name') }}</h3>
	<h4 class="sub-title">{{ _p('counter.categories', site.categories.length) }}</h4>
	<div class="cate-list">
	{% for cate in site.categories%}
		<a href="{{url_for(cate.path)}}">{{cate.name}} ({{cate.posts.length}})</a>
	{% endfor %}
	</div>
</div>