
{% set pageTitle = page.title || config.subtitle || '' %}

{% if is_archive() %}
  {% set pageTitle = 'Archives' %}
{% endif %}

{% if is_tag() %}
  {% set pageTitle = 'Tag: ' + page.tag %}
{% endif %}

{% if is_category() %}
  {% set pageTitle = 'Category: ' + page.category %}
{% endif %}

{% set pageTitle = pageTitle + ' - ' + config.title %}
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <!-- 优先使用 IE 最新版本和 Chrome -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <!-- 为移动设备添加 viewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <!-- 添加到主屏后的标题（iOS 6 新增） -->
  <meta name="apple-mobile-web-app-title" content="{{pageTitle}}">
  <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <!-- 设置苹果工具栏颜色 -->
  <meta name="apple-mobile-web-app-status-bar-style" content = "black" />
  <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
  <!-- <meta name = "apple-itunes-app" content = "app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"> -->
  <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
  <meta name="format-detection" content = "telphone=no, email=no" />
  <!--下面三个是清除缓存 微信浏览器缓存严重又无刷新；这个方法调试的时候很方便-->
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-Control" content="no-cache">
  <meta http-equiv="Expires" content="0">
  
  <link rel="dns-prefetch" href="<%= config.url %>">
  <link rel="icon shortcut" type="image/ico" href="{{ theme.favicon }}">
  <meta name="author" content="{{ config.author }}">
  <meta name="description" content="{{ config.description }}">
  <meta name="keywords" content="{{ theme.keywords }}">
  <title >{{pageTitle}}</title>
    <!-- The Open Graph protocol -->
  <meta property="og:url" content="{{ config.url }}">
  <meta property="og:type" content="blog">
  <meta property="og:title" content="{{pageTitle}}">
  <meta property="og:description" content="{{config.description }}">
  <!-- UC Browser Compatible -->
<!--   <script>
      var agent = navigator.userAgent.toLowerCase();
      if(agent.indexOf('ucbrowser')>0) {
          alert('由于 UC 浏览器使用极旧的内核，而本网站使用了一些新的特性。\n为了您能更好的浏览，推荐使用 Chrome 或 Firefox 浏览器。');
      }
  </script> -->
  {% if theme.stylesheets !== undefined && theme.stylesheets.length > 0 %}
    {# stylesheet list from config.yml #}
    {% for url in theme.stylesheets %}
      <link rel="stylesheet" href="{{ url }}">
    {% endfor %}
  {% endif %}
  {% include 'baiduAnalysis.swig' %}
</head>