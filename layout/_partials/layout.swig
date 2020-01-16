<!doctype html>
<html lang="{{ config.language }}">
{% include 'header.swig' %}
<body>
{% include 'side.swig' %}
  <div class="container">
    <div class="main">
    {% autoescape false %}
        {% block body %}{% endblock %}
    {% endautoescape %}
    {% include 'copyRight.swig' %}
    <div class="top-bottom">
      <div class="to-top hide" title="to top"><i class="icon-up"></i></div>
      <div class="to-bottom hide" title="to bottom"><i class="icon-down"></i></div>
    </div>
    </div>

  </div>
<input type="hidden" name="isPost" id="isPost" value="{{is_post()}}">
<i id="barBtn" class="icon icon-menu"></i>
{% include 'payme.swig' %}
{% if theme.scripts !== undefined && theme.scripts.length > 0 %}
  {# scripts list from config.yml #}
  {% for url in theme.scripts %}
    <script src="{{ url }}"></script>
  {% endfor %}
{% endif %}
{% include 'baiduPush.swig' %}
{% block js %}{% endblock %}
</body>
</html>
