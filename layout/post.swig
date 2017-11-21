{% extends '_partials/layout.swig' %}

{% block body %}
<div class="post-list">
	{% include '_partials/post.swig' with {post:page} %}
</div>
{% include '_partials/pagination.swig' %}
{% include '_partials/share.swig' %}
{% endblock %}
{% block js %}
{% endblock %}
