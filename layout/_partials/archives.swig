{% extends 'layout.swig' %}
{% block body %}
<div class="post-list">
{% if site.posts.length > 0 %}
    {% if page.posts.length %}
	    {% for post in page.posts %}
	    {% include 'post.swig' with {post:post,index:loop.index} %}
	    {% endfor %}
    {% endif %}
{% endif %}
</div>
{% include 'pagination.swig' %}
{% include 'share.swig' %}
{% endblock %}