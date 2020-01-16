<nav class="pagination clearfix">
  {% if page.prev or page.next %}
    {% if is_post() %}
      {% if page.prev && page.prev.path %}
        <a href="{{ url_for(page.prev.path) }}" class="prev post-prev"> <i class="icon-leftarrow"></i> {{truncate(page.prev.title,{length:20})}}</a>
      {% endif %}

      {% if page.next && page.next.path %}
        <a href="{{ url_for(page.next.path) }}" class="next post-next"> {{truncate(page.next.title,{length:20})}} <i class="icon-rightarrow"></i></a>
      {% endif %}
    {% else %}
      {{
        paginator({
          prev_text: 'Prev',
          next_text: 'Next',
          mid_size: 1
        })
      }}
    {% endif %}
  {% endif %}
</nav>
