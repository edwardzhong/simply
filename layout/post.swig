{% extends '_partials/layout.swig' %}

{% block body %}
<div class="post-list">
	{% include '_partials/post.swig' with {post:page} %}
</div>
{% include '_partials/pagination.swig' %}
{% include '_partials/share.swig' %}
{% include '_partials/comment.swig'%}
{% endblock %}
{% block js %}
<script src="/lib/qrcode.min.js"></script>
<script src="/js/share.js"></script>
{% endblock %}
