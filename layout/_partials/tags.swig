<div class="list tag-list">
	<h3>{{ _p('counter.tag_name') }}</h3>
	<h4>{{ _p('counter.tag_cloud', site.tags.length) }}</h4>
<div id="tagList"></div>

</div>
<script>
var Tags=[],obj={};
{% for tag in site.tags %}
	obj={}
	{% for p in tag %}
		obj['{{loop.key}}']='{{p}}';
	{% endfor %}
	obj['url']='{{url_for(tag.path)}}';
	obj['length']=parseInt(obj['length'],10);
	Tags.push(obj);
{% endfor %}

var container=document.getElementById('tagList'),
	tpl='',
	className=['small','middle','big'],
	maxSize=Tags[0].length,
	range=[];
Tags.forEach(function(tag,i){
	if(tag.length>maxSize){maxSize=tag.length;}
});
range=[Math.ceil(maxSize/3),Math.ceil(maxSize/3*2),maxSize];
Tags.forEach(function(tag,i){
	for(var i=0,len=range.length;i<len;i++){
		if(tag.length<=range[i]){
			tpl+='<a href="'+tag.url+'" class="'+className[i]+'">'+tag.name+'</a>';
			break;
		}
	}
});
container.innerHTML = tpl;
</script>