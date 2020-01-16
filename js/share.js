// 分享功能
function shareInit() {
	var env = getEnv(),
		isPost = $('#isPost').val(),
		sUrl = location.protocol + '//' + location.host + location.pathname,
		sTitle = $('.post-title').html(),
		sDesc = sTitle,
		sPic = '',
		sImg = [];

	$('.share').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		//微信手Q环境，右上角分享
		if (isPost == 'true' && (env == 'weixin' || env == 'qq')) {
			showShareOverlay();
			return;
		}
		var self = $(this),
			url = self.attr('data-url'),
			id = url.replace(/\//g, '');
		(sharePop = $('#' + id)),
			(article = self.parents('article')),
			(offset = self.offset()),
			(w = self.width()),
			(h = self.height());

		sPic = '';
		sUrl = location.protocol + '//' + location.host + url;
		sTitle = article.find('.post-title').html();
		sDesc = self.attr('data-desc');
		sImg = article.find('img');
		if (sImg.length) {
			sPic = sImg[0].src;
		} else {
			var banner = article.find('.post-banner'),
				bg,
				matchs;
			if (banner.length) {
				bg = article.find('.post-banner').css('background');
				matchs = bg.match(/url\(\"([^()"]+)\"\)/);
				if (matchs.length) {
					sPic = matchs[1];
				}
			}
		}

		if (sharePop.length) {
			if (sharePop.css('display') == 'block') {
				sharePop.css('display', 'none');
			} else {
				$('.share-popup').css('display', 'none');
				sharePop.css({
					display: 'block',
					top: offset.top + h + 5,
					left: offset.left - 154,
				});
			}
		} else {
			$('.share-popup').css('display', 'none');
			var tpl = $(
				'<div id="' +
					id +
					'" class="share-popup" style="display: block;"> <div class="share-input"> <input type="text" value="' +
					sUrl +
					'"> </div> <div class="share-icons"> <a class="weibo share-sns" href="javascript:;" data-type="weibo" title="weibo"> <i class="icon-weibo"></i> </a> <a class="weixin share-sns" href="javascript:;" data-type="weixin" title="wechat"> <i class="icon-wechat"></i> </a> <a class="qq share-sns" href="javascript:;" data-type="qq" title="qq"> <i class="icon-qq"></i> </a> <a class="qzone share-sns" href="javascript:;" data-type="qzone" title="qzone"> <i class="icon-qzone"></i> </a> </div> </div>',
			);
			$('.container').append(tpl);
			tpl.css({
				top: offset.top + h + 5,
				left: offset.left - 154,
			})
				.find('.share-input')
				.on('click', function(e) {
					e.stopPropagation();
					e.preventDefault();
				});
		}

		// $popup.css({
		//     display:'inline-block',
		//     top:offset.top+h+5,
		//     left:offset.left-sw+w+20
		//     // top:23,
		//     // left:w-sw-4
		// }).find('input').val(sUrl);
		// $popup.appendTo(self);
	});

	$('.container').on('click', '.share-sns', function(e) {
		e.stopPropagation();
		e.preventDefault();
		var type = $(this).attr('data-type');
		handleClick(type, {
			url: location.protocol + '//' + location.host,
			sUrl: sUrl,
			sPic: sPic,
			sTitle: sTitle,
			sDesc: sDesc,
		});
	});
}

function handleClick(type, opts) {
	if (type === 'weibo') {
		generate('http://service.weibo.com/share/share.php?url={%sUrl%}&title={%sTitle%}&pic={%sPic%}', opts);
	} else if (type === 'qq') {
		generate(
			'http://connect.qq.com/widget/shareqq/index.html?url={%sUrl%}&title={%sTitle%}&source={%sDesc%}',
			opts,
		);
	} else if (type === 'douban') {
		generate(
			'https://www.douban.com/share/service?image={%sPic%}&href={%sUrl%}&name={%sTitle%}&text={%sDesc%}',
			opts,
		);
	} else if (type === 'qzone') {
		generate(
			'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={%sUrl%}&title={%sTitle%}&pics={%sPic%}&summary={%sDesc%}&desc={%sDesc%}&site={%url%}',
			opts,
		);
	} else if (type === 'facebook') {
		generate('https://www.facebook.com/sharer/sharer.php?u={%sUrl%}', opts);
	} else if (type === 'twitter') {
		generate('https://twitter.com/intent/tweet?text={%sTitle%}&url={%sUrl%}&via={%url%}', opts);
	} else if (type === 'google') {
		generate('https://plus.google.com/share?url={%sUrl%}', opts);
	} else if (type === 'weixin') {
		showWX(opts);
	}
}

function generate(url, opts) {
	var url = url
		.replace(/{%sUrl%}/g, encodeURI(opts.sUrl))
		.replace(/{%sTitle%}/g, opts.sTitle)
		.replace(/{%sDesc%}/g, opts.sDesc)
		.replace(/{%sPic%}/g, encodeURIComponent(opts.sPic))
		.replace(/{%url%}/g, encodeURIComponent(opts.url));

	window.open(url);
}

function generateCode(url) {
	$('#qrcode').empty();
	var qrcode = new QRCode('qrcode', {
		text: url,
		width: 200,
		height: 200,
		colorDark: '#000000',
		colorLight: '#ffffff',
		correctLevel: QRCode.CorrectLevel.M,
	});
}

function showShareOverlay() {
	var overlay = $(
		'<div class="share-overlay"><i class="share-arrow"></i><p class="share-tip">分享给好友&nbsp;</p></div>',
	);
	$(document.body)
		.css('overflow', 'hidden')
		.append(overlay);

	overlay.on('click', function() {
		$(document.body).css('overflow', '');
		overlay.remove();
	});
}

function showWX(opt) {
	var popup = $('.wxshare-popup'),
		overlay = $('<div class="popup-overlay"></div>');

	generateCode(opt.sUrl);
	$(document.body)
		.css('overflow', 'hidden')
		.append(overlay);
	popup.show().removeClass('hide').addClass('show');
	overlay.on('click', hideWX);

	function hideWX() {
		$(document.body).css('overflow', '');
		overlay.remove();
		popup.removeClass('show').addClass('hide');
		setTimeout(() => {
			popup.hide();
		}, 500);
	}
}
shareInit();
