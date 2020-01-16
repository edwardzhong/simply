<article class="post" style="animation:listshow 0.6s ease-out both {{ 0.2+(index||1)*0.1}}s">
    {% set postUrl=url_for(post.path) %}
    {% if is_current(post.path) %}
        {% set postUrl='javascript:;' %}
    {% endif %}
	{% if post.banner %}
	<a href="{{postUrl}}">
        <div class="post-banner" style="background: url({{post.banner}})  center top / 100% no-repeat">
    		<h3 class="post-title">{{ post.title }}</h3>
    	</div>
	</a>
	<div class="post-inner">
	{% else %}
	<div class="post-inner">
    	<a href="{{postUrl}}"><h3 class="post-title">{{ post.title }}</h3></a>
	{% endif %}
    	<div class="post-info">
    		<time><i class="icon-calendar"></i> {{date(post.date,'YYYY/MM/DD HH:mm:SS')}}</time>
    		<span class="category">
    		{% if post.categories && post.categories.length %}
    			{% set categories=post.categories %}
    			<i class="icon-book"></i>
    			{% for cate in categories %}
                    {% if is_category() && is_current(cate.path) %}
                        <a class="active" href="javascript:;">{{cate.name}}</a>
                    {% else %}
                        <a href="{{ url_for(cate.path) }}">{{cate.name}}</a>
                    {% endif %}
    			{% endfor %}
    		{% endif %}
    		</span>
    	</div>
    	<!-- <p>{{ markdown(truncate(strip_html(post.content),{length:100})) }}</p> -->
    	{% if is_post() %}
    		<div class="post-content">{{ post.content }}</div>
    	{% else %}
			<div class="post-content">{{ post.excerpt }}</div>
			<a href="{{url_for(post.path)}}" class="post-more">more <i class="icon-doubleright"></i></a>
    	{% endif %}
		<div class="post-footer">
			<div class="tags">
				<i class="icon-tags"></i> 
				{% if post.tags && post.tags.length %}
					{% set tags=post.tags %}
					{% for tag in tags %}
						{% if is_tag() && is_current(tag.path) %}
							<a class="active" href="javascript:;">{{ tag.name }}</a>
						{% else %}
							<a href="{{ url_for(tag.path) }}">{{ tag.name }}</a>
						{% endif %}
					{% endfor %}
				{% endif%}
			</div>
			<a class="share" href="javascript:;" data-url="{{url_for(post.path)}}" data-desc="{{ truncate(strip_html(post.content),{length:50}) }}" data-type="share" title="share"><i class="icon-share"></i></a>
		</div>
	</div>
</article>