{% extends '_partials/layout.swig' %}
{% block body %}
	{% if page.type == 'tags' %}
		{% include '_partials/tags.swig' %}
	{% elif page.type == 'categories' %}
		{% include '_partials/categories.swig' %}
	{% endif %}
{% endblock %}
