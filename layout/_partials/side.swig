<header class="header">
  <div class="top"></div>
  <h2>{{ titlecase(config.title) }}</h2>
  <h3>{{ config.subtitle}}</h3>
  <div class="menu">
  {% set menu = config.menu || theme.menu %}
  {% set icon= theme.menu_icon %}
  {% for key in Object.keys(menu)  %}
      <a {% if key == 'search' %} data-tag="search" {% endif %} href="{{ url_for(menu[key]) }}" title="{{ titlecase(__(key)) }}">
        <i class="{{ icon[key]}}"></i>
        <span>{{ titlecase(__(key)) }}</span>
      </a>
  {% endfor %}
  </div>
  <div class="state">
  {% set state = theme.state %}
    <a href="{{url_for(state['posts'])}}">{{site.posts.length||0}}<br>{{ titlecase(__('posts')) }}</a><a href="{{url_for(state['categories'])}}">{{site.categories.length||0}}<br>{{ titlecase(__('categories')) }}</a><a href="{{url_for(state['tags'])}}">{{site.tags.length||0}}<br>{{ titlecase(__('tags')) }}</a>
  </div>
  <div class="social">
  {% set social = config.social || theme.social %}
  {% set socialIcon=theme.social_icon %}
  {% for key in Object.keys(social)  %}
      <a href="{{ url_for(social[key]) }}" title="{{ titlecase(key) }}"><i class="{{ socialIcon[key.toLowerCase()] }}"></i></a>
  {% endfor %}
  </div>
  <div id="payBtn" class="pay-icon" title="谢谢您的赞赏">赏</div>
</header>