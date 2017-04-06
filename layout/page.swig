{% extends '_partials/layout.swig' %}

{% set pageType = page.type %}
{% block body %}
	{% if pageType == 'tags' %}
		{% include '_partials/tags.swig' %}
	{% elif pageType == 'categories' %}
		{% include '_partials/categories.swig' %}
	{% endif %}
{% endblock %}
