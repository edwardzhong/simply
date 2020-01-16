<div class="list article-list">
    <h3 class="page-title">{{title}}</h3>
    {% for post in page.posts %}
        <article class="article-post" style="animation:listshow 0.5s ease-out both {{ 0.2 + loop.index * 0.1}}s">
            <a href="{{ url_for(post.path) }}">
                <h4 class="article-title">{{ post.title }}</h6>
            </a>
            <div class="article-info">
                <time> {{date(post.date,'YYYY/MM/DD')}}</time>
                {% if post.tags && post.tags.length %}
                    <div class="article-tags">
                        &minus;
                        {% for tag in post.tags %}
                            {% if is_tag(tag.name) %}
                                <a href="javascript:;">{{ tag.name }}</a>
                            {% else %}
                                <a href="{{ url_for(tag.path) }}">{{ tag.name }}</a>
                            {% endif %}
                        {% endfor %}
                    </div>
                {% endif%}
            </div>
        </article>
    {% endfor %}
    {% include 'pagination.swig' %}
</div>