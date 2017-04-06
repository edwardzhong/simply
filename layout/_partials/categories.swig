<div class="list category-list">
	<h3>{{ _p('counter.category_name') }}</h3>
	<h4>{{ _p('counter.categories', site.categories.length) }}</h4>
	{{ list_categories({class:'cate'}) }}
</div>