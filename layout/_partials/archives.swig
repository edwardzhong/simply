{% extends 'layout.swig' %}
{% block body %}
<div class="post-list">
{% if site.posts.length > 0 %}
    {% if page.posts.length %}
    	{% set posts=page.posts %}
	    {% for post in posts %}
	    {% include 'post.swig' with {post:post,index:loop.index} %}
	    {% endfor %}
    {% endif %}
{% endif %}
</div>
{% include 'pagination.swig' %}
{% include 'share.swig' %}
{% endblock %}
{% block js %}
<script src="/lib/qrcode.min.js"></script>
<script src="/js/share.js"></script>
{% endblock %}