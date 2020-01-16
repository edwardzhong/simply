{% extends '_partials/layout.swig' %}
{% block body %}
{% include '_partials/articles.swig' with { title: 'Tag: '+  page.tag } %}
{% endblock %}