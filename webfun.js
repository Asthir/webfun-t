(function($){
	$('.loading').fadeOut(500).css({'zIndex':-1});
	$('*').each(function(e,el){
		if($(this)[0].tagName=='BODY'){
			var selectors=$(this);
			selectors=selectors[0].attributes;
			for(i=0;i<selectors.length;i++){
				var dataAttr=selectors[i]['name'].split('-');
				if(dataAttr[0]=='data'){
					if(dataAttr[1]=='all'){
						var selector="*";
						var styleCode='';
						var styles=selectors[i]['name'].split('-');
						for(var m=2;m<styles.length;m++){
							styleCode+=styles[m]
							if(m!=styles.length-1){
								styleCode+='-';
							}
						}
					}
					else if(dataAttr[1]=='class'){
						var selector='.'+dataAttr[2];
						var styleCode='';
						var styles=selectors[i]['name'].split('-');
						for(var m=3;m<styles.length;m++){
							styleCode+=styles[m]
							if(m!=styles.length-1){
								styleCode+='-';
							}
						}
					}
					else if(dataAttr[1]=='id'){
						var selector='#'+dataAttr[2];
						var styleCode='';
						var styles=selectors[i]['name'].split('-');
						for(var m=3;m<styles.length;m++){
							styleCode+=styles[m]
							if(m!=styles.length-1){
								styleCode+='-';
							}
						}
					}
					else if(dataAttr[1]=='allchild'){
						var targetParent=dataAttr[2];
						var targetChild=dataAttr[3];
						var selector=$(targetParent+' '+targetChild);
						var styleCode='';
						var styles=selectors[i]['name'].split('-');
						for(var m=4;m<styles.length;m++){
						 	styleCode+=styles[m]
						 	if(m!=styles.length-1){
						 		styleCode+='-';
						 	}
						}
					}
					else{
						var selector=dataAttr[1];
						var styleCode='';
						var styles=selectors[i]['name'].split('-');
						for(var m=2;m<styles.length;m++){
							styleCode+=styles[m]
							if(m!=styles.length-1){
								styleCode+='-';
							}
						}
					}
				}
				var attributeValue=$(el).attr(selectors[i]['name']);
				if(styleCode=='a-c' || styleCode=='c' || styleCode=='t-c'){
					$(selector).css({'color':attributeValue});
				}
				if(styleCode=='f-f'){
					$(selector).css({'fontFamily':attributeValue});
				}
				if(styleCode=='f-s'){
					$(selector).css({'fontSize':attributeValue});
				}
				if(styleCode=='f-w'){
					$(selector).css({'fontWeight':attributeValue});
				}
				if(styleCode=='f-st'){
					$(selector).css({'fontStyle':attributeValue});
				}
				if(styleCode=='t-t'){
					$(selector).css({'textTransform':attributeValue});
				}
				if(styleCode=='bg-c'){
					$(selector).css({'backgroundColor':attributeValue});
				}
				if(styleCode=='b-c-t'){
					$(selector).css({'borderColorTop':attributeValue});
				}
				if(styleCode=='b-c-r'){
					$(selector).css({'borderColorRight':attributeValue});
				}
				if(styleCode=='b-c-b'){
					$(selector).css({'borderColorBottom':attributeValue});
				}
				if(styleCode=='b-c-l'){
					$(selector).css({'borderColorLeft':attributeValue});
				}
				if(styleCode=='b-w'){
					$(selector).css({'borderWidth':attributeValue});
				}
				if(styleCode=='b-w-t'){
					$(selector).css({'borderWidthTop':attributeValue});
				}
				if(styleCode=='b-w-r'){
					$(selector).css({'borderWidthRight':attributeValue});
				}
				if(styleCode=='b-w-b'){
					$(selector).css({'borderWidthBottom':attributeValue});
				}
				if(styleCode=='b-w-l'){
					$(selector).css({'borderWidthLeft':attributeValue});
				}
				if(styleCode=='p'){
					$(selector).css({'padding':attributeValue});
				}
				if(styleCode=='p-t'){
					$(selector).css({'paddingTop':attributeValue});
				}
				if(styleCode=='p-r'){
					$(selector).css({'paddingRight':attributeValue});
				}
				if(styleCode=='p-b'){
					$(selector).css({'paddingBottom':attributeValue});
				}
				if(styleCode=='p-l'){
					$(selector).css({'paddingLeft':attributeValue});
				}
				if(styleCode=='m'){
					$(selector).css({'margin':attributeValue});
				}
				if(styleCode=='m-t'){
					$(selector).css({'marginTop':attributeValue});
				}
				if(styleCode=='m-r'){
					$(selector).css({'marginRight':attributeValue});
				}
				if(styleCode=='m-b'){
					$(selector).css({'marginBottom':attributeValue});
				}
				if(styleCode=='m-l'){
					$(selector).css({'marginLeft':attributeValue});
				}
				if(styleCode=='b-s'){
					$(selector).css({'boxShadow':attributeValue});
				}
				if(styleCode=='b-r'){
					$(selector).css({'borderRadius':attributeValue});
				}
				if(styleCode=='d'){
					$(selector).css({'display':attributeValue});
				}
				if(styleCode=='v'){
					$(selector).css({'visibility':attributeValue});
				}
				if(styleCode=='o'){
					$(selector).css({'overflow':attributeValue});
				}
				if(styleCode=='o-x'){
					$(selector).css({'overflow-x':attributeValue});
				}
				if(styleCode=='o-y'){
					$(selector).css({'overflow-y':attributeValue});
				}
				if(styleCode=='h'){
					$(selector).css({'height':attributeValue});
				}
				if(styleCode=='l-g'){
					$(selector).css({'background-image':'linear-gradient('+attributeValue+')'});
				}
				if(styleCode=='r-g'){
					$(selector).css({'backgroundImage-image':'radial-gradient('+attributeValue+')'});
				}
			}
		}
		else{
			var selector=$(this);
		}
		var linkColor=$(el).attr('data-a-c');
		var fontFamily=$(el).attr('data-f-f');
		var fontSize=$(el).attr('data-f-s');
		var color=$(el).attr('data-t-c');
		var bgColor=$(el).attr('data-bg-c');
		var width=$(el).attr('data-width');
		var height=$(el).attr('data-height');
		var border=$(el).attr('data-b');
		var borderTop=$(el).attr('data-b-t');
		var borderRight=$(el).attr('data-b-r');
		var borderBottom=$(el).attr('data-b-b');
		var borderLeft=$(el).attr('data-b-l');
		var borderColor=$(el).attr('data-b-c');
		var borderColorTop=$(el).attr('data-b-c-t');
		var borderColorRight=$(el).attr('data-b-c-r');
		var borderColorBottom=$(el).attr('data-b-c-b');
		var borderColorLeft=$(el).attr('data-b-c-l');
		var borderWidth=$(el).attr('data-b-w');
		var borderWidthTop=$(el).attr('data-b-w-t');
		var borderWidthRight=$(el).attr('data-b-w-r');
		var borderWidthBottom=$(el).attr('data-b-w-b');
		var borderWidthLeft=$(el).attr('data-b-w-l');
		var padding=$(el).attr('data-p');
		var paddingTop=$(el).attr('data-p-t');
		var paddingRight=$(el).attr('data-p-r');
		var paddingBottom=$(el).attr('data-p-b');
		var paddingLeft=$(el).attr('data-p-l');
		var margin=$(el).attr('data-m');
		var marginTop=$(el).attr('data-m-t');
		var marginRight=$(el).attr('data-m-r');
		var marginBottom=$(el).attr('data-m-b');
		var marginLeft=$(el).attr('data-m-l');
		var boxShadow=$(el).attr('data-b-s');
		var borderRadius=$(el).attr('data-b-r');
		var borderTopLeftRadius=$(el).attr('data-b-t-l-r');
		var borderTopRightRadius=$(el).attr('data-t-r-b-r');
		var borderBottomLeftRadius=$(el).attr('data-b-l-b-r');
		var borderBottomRightRadius=$(el).attr('data-b-r-b-r');
		var linearGradient=$(el).attr('data-l-g');
		var radialGradient=$(el).attr('data-r-g');
		var pagiLinkColor=$(el).attr('data-p-l-c');
		var pagiLinkBgColor=$(el).attr('data-p-bg-c');
		var pagiBorderColor=$(el).attr('data-p-b-c');
		var pagiBorderWidth=$(el).attr('data-p-b-w');
		var pagiHoverColor=$(el).attr('data-p-c-h');
		var pagiHoverBgColor=$(el).attr('data-p-bg-c-h');
		var pagiBorderColorHover=$(el).attr('data-p-b-c-h');
		var pagiBorderWidthHover=$(el).attr('data-p-b-w-h');
		var pagiDisabledColor=$(el).attr('data-p-c-d');
		var pagiDisabledBgColor=$(el).attr('data-p-bg-c-d');
		var pagiDisabledBorderColor=$(el).attr('data-p-b-c-d');
		var pagiDisabledBorderWidth=$(el).attr('data-p-b-w-d');
		var pagiBoxShadow=$(el).attr('data-p-b-s');
		var pagiBorderRadious=$(el).attr('data-p-b-r');
		var pagiLinearGradient=$(el).attr('data-p-l-g');
		var pagiRadialGradient=$(el).attr('data-p-r-g');
		var pagiLinearGradientHover=$(el).attr('data-p-l-g-h');
		var pagiRadialGradientHover=$(el).attr('data-p-r-g-h');

		$(selector).css({
			'color': linkColor,
			'fontFamily':fontFamily,
			'fontSize':fontSize,
			'color':color,
			'backgroundColor':bgColor,
			'width':width,
			'height':height,
			'border':border,
			'borderTop': borderTop,
			'borderRight': borderRight,
			'borderBottom': borderBottom,
			'borderLeft': borderLeft,
			'borderColor':borderColor,
			'borderColorTop':borderColorTop,
			'borderColorRight':borderColorRight,
			'borderColorBottom':borderColorBottom,
			'borderColorLeft':borderColorLeft,
			'borderWidth':borderWidth,
			'borderWidthTop':borderWidthTop,
			'borderWidthRight':borderWidthRight,
			'borderWidthBottom':borderWidthBottom,
			'borderWidthLeft':borderWidthLeft,
			'padding':padding,
			'paddingTop':paddingTop,
			'paddingRight':paddingRight,
			'paddingBottom':paddingBottom,
			'paddingLeft':paddingLeft,
			'margin':margin,
			'marginTop':marginTop,
			'marginRight':marginRight,
			'marginBottom':marginBottom,
			'marginLeft':marginLeft,
			'boxShadow':boxShadow,
			'borderRadius':borderRadius,
			'borderTopLeftRadius': borderTopLeftRadius,
			'borderTopRightRadius': borderTopRightRadius,
			'borderBottomLeftRadius': borderBottomLeftRadius,
			'borderBottomRightRadius': borderBottomRightRadius,
			'background':'linear-gradient('+linearGradient+')',
			'backgroundImage':'radial-gradient('+radialGradient+')'
		});
		$(this).children('ul').children('li').children('a').css({'color':pagiLinkColor,'backgroundColor':pagiLinkBgColor,'borderColor':pagiBorderColor,'borderWidth':pagiBorderWidth,'borderRadius':pagiBorderRadious,'boxShadow':pagiBoxShadow,'background':'linear-gradient('+pagiLinearGradient+')','backgroundImage':'radial-gradient('+pagiRadialGradient+')'});
		$(this).children('ul').children('li.active').children('a').css({'color':pagiHoverColor,'backgroundColor':pagiHoverBgColor,'borderColor':pagiBorderColor,'background':'linear-gradient('+pagiLinearGradient+')','backgroundImage':'radial-gradient('+pagiRadialGradient+')'});
		$(this).children('ul').children('li.disabled').css({'color':pagiDisabledColor,'backgroundColor':pagiDisabledBgColor,'borderColor':pagiDisabledBorderColor,'borderWidth':pagiDisabledBorderWidth,'borderRadius':pagiBorderRadious,'boxShadow':pagiBoxShadow,'background':'linear-gradient('+pagiLinearGradient+')','backgroundImage':'radial-gradient('+pagiRadialGradient+')'});

		$(this).children('ul').children('li').children('a').hover(function(e){
			if(e.type==='mouseenter'){
				$(this).css({'color':pagiHoverColor,'backgroundColor':pagiHoverBgColor,'borderColor':pagiBorderColorHover,'borderWidth':pagiBorderWidthHover,'background':'linear-gradient('+pagiLinearGradientHover+')','backgroundImage':'radial-gradient('+pagiRadialGradientHover+')'});
			}
			else{
				$(this).css({'color':pagiLinkColor,'backgroundColor':pagiLinkBgColor,'borderColor':pagiBorderColor,'borderWidth':pagiBorderWidth,'background':'linear-gradient('+pagiLinearGradient+')','backgroundImage':'radial-gradient('+pagiRadialGradient+')'});
				$(this).parents('li.active').children('a').css({'color':pagiHoverColor,'backgroundColor':pagiHoverBgColor,'borderColor':pagiBorderColor,'background':'linear-gradient('+pagiLinearGradient+')','backgroundImage':'radial-gradient('+pagiRadialGradient+')'});
			}
			
		})
	});

// Menu 
	$('.responsive-menu-icon').on('click',function(){
		$(this).prev('ul').addClass('show-menu');
		$('.wf-close-menu').removeClass('wf-v-h');
		$('body').addClass('overflow');
	});
	$('.wf-close-menu').on('click',function(){
		$(this).parent('ul').removeClass('show-menu');
		$('body').removeClass('overflow');
	});
	$('.wf-nb ul li a').click(function(){
		$(this).next('ul').slideToggle(400);
		$(this).children('.wf-nb .fa-angle-down,.wf-nb .fa-angle-right').toggleClass('rotate');
	});
	$('.wf-search-icon .fa-search').on('click',function(){
		$(this).next('.wf-nb-search-form').addClass('show-nb-form');
	});
	$('.wf-nb-search-form .fa-close').on('click',function(){
		$(this).parent().parent('.wf-nb-search-form').removeClass('show-nb-form');
	});

	$('.wf-nb').each(function(e){
		var navLinkColor=$(this).attr('data-l-c');
		var navBgColor=$(this).attr('data-bg-c');
		var navLinkActiveColor=$(this).attr('data-l-a-c');
		var navLinkHoverColor=$(this).attr('data-l-h-c');
		var navLinkHoverBgColor=$(this).attr('data-l-h-bg-c');
		$(this).children().find('ul li a,ul li,ul li .fa,ul li a .fa').css({'color': navLinkColor});
		$(this).children().children('ul').css({'backgroundColor': navBgColor});
		$(this).children().find('ul li ul').css({'backgroundColor': navBgColor});
		$(this).children().find('ul li.wf-active a').css({'backgroundColor': navLinkActiveColor});
		$(this).children().find('ul li a, ul li ul a').mouseenter(function(){
			if(!$(this).parent('li').hasClass('wf-active')){
				$(this).css({'color': navLinkHoverColor,'backgroundColor': navLinkHoverBgColor});
			}
		});
		$(this).children().find('ul li a,ul li ul a').mouseleave(function(){
			if(!$(this).parent('li').hasClass('wf-active')){
				$(this).css({'color': navLinkColor,'backgroundColor': navBgColor});
			}
		});		
	});
	$('.wf-nb li a').on('click',function(e){
		e.preventDefault();
	});
// Button Effect
	$('.wf-ripple-effect').on('click',function(e){
		var that=$(this);
		var rippleEffect=$(that).attr('data-ripple-effect-color');
		$(that).css({'overflow':'hidden','position':'relative'});
		var height=$(that).outerHeight();
		var width=$(that).outerWidth();
		$(that).children('div.rippleEffect').remove();
		var btnX=e.offsetX-width/2;
		if(that[0].tagName==='A'){
			var btnY=e.offsetY-height;
		}else{
			var btnY=e.offsetY-height*1.5;
		}
		var animDiv=$('<div class="rippleEffect"></div>');
		$(that).append(animDiv);
		$(that).children('.rippleEffect').css({'width': width+'px','height': width+'px','top': btnY+'px','left': btnX+'px','backgroundColor': rippleEffect});
	});
	$('.wf-hover-effect').on('mouseenter',function(e){
		var that=$(this);
		var hoverEffect=$(that).attr('data-hover-effect-color');
		$(that).css({'overflow':'hidden','position':'relative'});
		var height=$(that).outerHeight();
		var width=$(that).outerWidth();
		$(that).children('div.hoverEffect').remove();
		var btnX=0;
		var btnY=-width/3.5;
		var animDiv=$('<div class="hoverEffect"></div>');
		$(that).append(animDiv);
		$(that).children('.hoverEffect').css({'width': width+'px','height': width+'px','top': btnY+'px','left': btnX+'px','boxShadow':'0 0 '+60+'px '+hoverEffect});
	});

	// OL
	$('ol.wf-ol').each(function(e){
		var that=$(this);
		var olBorder=$(that).attr('data-li-b-b');
		var olCounterColor=$(that).attr('data-counter-c');
		var olCounterBgColor=$(that).attr('data-counter-bg-c');
		var olLiBgColor=$(that).attr('data-li-bg-c');
		var olLiColor=$(that).attr('data-li-c');
		$(that).children('li').css({'borderBottom':olBorder,'backgroundColor':olLiBgColor,'color':olLiColor});
		var targetOl=$(that).attr('id');
		if(olCounterColor!==undefined){
			$('head').append('<style>'+'ol.'+that[0].className+'#'+targetOl+' li::before{color:'+olCounterColor+';background-color:'+olCounterBgColor+'}</style>');
		}
		if($(that).hasClass('wf-d-i')){
			$(that).children('li').css({'display':'inline','borderBottom':'0'});
		}
	});
	// UL
	$('ul.wf-ul').each(function(e){
		if($(this).hasClass('wf-d-i')){
			$(this).children('li').css({'display':'inline','borderBottom':'0'});
		}
		var ulMarginBottom=$(this).attr('data-ul-m-b');
		if(ulMarginBottom!==undefined){
			$(this).children('li').css({'marginBottom': ulMarginBottom});
		}
	});
	if($('ul.wf-ul').hasClass('even-odd')){
		var evenBgColor=$('ul.wf-ul.even-odd').attr('data-even-bg-c');
		var oddBgColor=$('ul.wf-ul.even-odd').attr('data-odd-bg-c');
		if(evenBgColor!==undefined && oddBgColor!==undefined){
			$('head').append('<style>ul.wf-ul.even-odd li:nth-child(even){background-color:'+evenBgColor+';}ul.wf-ul.even-odd li:nth-child(odd){background-color:'+oddBgColor+';}</style>');
		}
	}
	var ulColor=$('ul.wf-ul').attr('data-ul-c');
	var ulBgColor=$('ul.wf-ul').attr('data-ul-bg-c');
	if(ulColor!==undefined){
		$('head').append('<style>ul[data-ul-c].wf-ul li{color:'+ulColor+';}</style>');
	}
	if(ulBgColor!==undefined){
		$('head').append('<style>ul[data-ul-bg-c].wf-ul li{background-color:'+ulBgColor+';}</style>');
	}
	var ulImg=$('ul.wf-ul[data-ul-img]').attr('data-ul-img');
	var ulImgWidth=$('ul.wf-ul[data-ul-img]').attr('data-ul-img-width');
	var ulImgHeight=$('ul.wf-ul[data-ul-img]').attr('data-ul-img-height');
	if(ulImgWidth===undefined){
		ulImgWidth='12px';
	}
	if(ulImgHeight===undefined){
		ulImgHeight='12px';
	}
	if(ulImg!==undefined){
		$('head').append('<style>ul[data-ul-img].wf-ul li{list-style: none;background-image: url('+ulImg+');background-repeat: no-repeat;background-size: '+ulImgWidth+' '+ulImgHeight+';padding-left: 26px;background-position: left center;}</style>');
	}
	// Table
	var headingCount=0;
	$('table.wf-table thead th').each(function(){
		headingCount++;
	});
	$('table.wf-table thead').append('<tr><td style="padding: 3px;background-color: #CACACA;" colspan="'+headingCount+'"></td></tr>');
	var tableHeading=new Array();
	var responsiveStyle='<style>@media (max-width:762px){';
	$('table.wf-table-responsive thead th').each(function(e){
		tableHeading.push($(this).text());
		responsiveStyle+='table.wf-table-responsive td:nth-of-type('+(e+1)+')::before{content:"'+tableHeading[e]+'";}';
	})
	responsiveStyle+='}</style>';
	$('head').append(responsiveStyle);
	// Form
	$('form').each(function(){
		var defaultColor=$(this).css('borderColor');
		var formColor=$(this).attr('data-form-color');
		var formPadding=$(this).attr('data-form-padding');
		var formBorderWidth=$(this).attr('data-form-border-width');
		var formLabelColor=$(this).attr('data-form-label-color');
		var formFocusColor=$(this).attr('data-form-focus-color');
		var inputBgColor=$(this).attr('data-form-input-bg-color');
		var inputRadius=$(this).attr('data-form-input-radius');
		$(this).children().children('input,textarea,select').css({'borderColor':formColor,'padding': formPadding,'borderWidth': formBorderWidth,'backgroundColor': inputBgColor,'borderRadius': inputRadius});
		if(formFocusColor!=undefined){
			$(this).children('input,textarea,select').focus(function(){
				$(this).css({'borderColor': formFocusColor});
			});
		}

		$(this).children('input,textarea,select').blur(function(){
			if(formColor!=undefined){
				$(this).css({'borderColor': formColor});
			}else{
				$(this).css({'borderColor': '#E8E8E8'});
			}
			
		});
		$(this).children('label').css({'color': formLabelColor});
		$(this).children('label').children('.wf-form-icon').css({'color': formColor});
		$(this).children('label').children('span.wf-form-icon').css({'borderRight':'1px solid '+formColor});
		$(this).children('label').children('input').focus(function(){
			$(this).prev('.wf-form-icon').css({'color': formFocusColor,'borderRight':'1px solid '+formFocusColor});
		});
		
		$(this).children('label').children('input').blur(function(){
			$(this).prev('.wf-form-icon').css({'color': formColor,'borderRight':'1px solid '+formColor});
		});
		var targerForm=$(this).attr('id');
		if(targerForm!==undefined && formColor!='transparent'){
			var styleRadio='';
			$('head').append('<style>form#'+targerForm+' label.wf-checkbox span::before,form#'+targerForm+' label.wf-radio span::before{border-color:'+formColor+';border-width:'+formBorderWidth+'}</style>');
			styleRadio+='<style>form#'+targerForm+' label.wf-checkbox span::after,form#'+targerForm+' label.wf-radio span::after{background-color:'+formColor;
			if(formPadding!==undefined){
				styleRadio+=';left: 5px;top: 5px;}</style>';
			}else{
				styleRadio+=';}</style>';
			}
			$('head').append(styleRadio);
		}else if(formColor==undefined){
			$('head').append('<style>form#'+targerForm+' label.wf-checkbox span::before,form#'+targerForm+' label.wf-radio span::before{border-color:'+inputBgColor+';border-width:'+formBorderWidth+'}</style>');
			styleRadio+='<style>form#'+targerForm+' label.wf-checkbox span::after,form#'+targerForm+' label.wf-radio span::after{background-color:'+inputBgColor;
			if(formPadding!==undefined){
				styleRadio+=';left: 5px;top: 5px;}</style>';
			}else{
				styleRadio+=';}</style>';
			}
			$('head').append(styleRadio);
		}
		$(this).children().children('input,textarea,select').focus(function(){
			$(this).prev('span.wf-floating-label').addClass('focus').css('color',formColor);
		});
		$(this).children().children('input,textarea,select').blur(function(){
			if($(this).val()==''){
				$(this).prev('span.wf-floating-label').removeClass('focus').css('color','inherit');
			}
		});
		$(this).children().children('input').focus(function(){
			$(this).parent('label').addClass('anim');
		});
		$(this).children().children('input').blur(function(){
			$(this).parent('label').removeClass('anim');
		});
		var borderAnimcolor=$(this).attr('data-border-animation-color');
		$('head').append('<style>form.wf-border-amination#'+targerForm+' label::before{background-color:'+borderAnimcolor+'}</style>')
	});
	// Popup
	$('*[data-popup]').on('click',function(){
		var targetPopup=$(this).attr('data-popup');
		showPopup(targetPopup);
	});
	$('.wf-popup .wf-popup-close-icon').on('click',function(){
		$(this).parent().parent().removeClass('wf-show-popup');
		$(this).parent().parent().parent('.wf-popup-overlay').removeClass('wf-show-overlay');
	});
	// Toast
	var toastInterval;
	$('*[data-toast]').on('click',function(){
		var targetToast=$(this).attr('data-toast');
		$(targetToast).fadeIn('slow');
		toastInterval=setTimeout(function(){
			$(targetToast).fadeOut('slow');
		},5000);
	});
	$('.wf-toast-msg .wf-close-icon').on('click',function(){
		clearInterval(toastInterval);
		$(this).parent().fadeOut('slow');
	});

	// Tooltips
	$('*[data-tooltip]').each(function(){
		var tooltipsText=$(this).attr('data-tooltip');
		$(this).css({'position': 'relative'});
		$(this).mouseenter(function(){
			$(this).children().remove('.wf-tooltip');
			$(this).append('<div class="wf-tooltip">'+tooltipsText+'</div>').fadeIn(600);
		});
		$(this).mouseleave(function(){
			$('.wf-tooltip').fadeOut(600);
		});
	});
	// Tabs
	$('.wf-tab-links li a').on('click',function(e){
		e.preventDefault();
		$('.wf-tab-links').find('a.active').removeClass('active');
		$(this).addClass('active');
		var targetTabContent=$(this).attr('data-tab-id');
		$('.wf-tab-content div.active').removeClass('active').fadeOut(600);
		$(targetTabContent).addClass('active').fadeIn(600);
	});
	// Accordion
	$('.wf-accordion-container .wf-accordion-head').on('click',function(){
		if(!$(this).hasClass('open')){
			$(this).parent().find('.wf-accordion-head,.wf-accordian-content').removeClass('open');
			$(this).addClass('open');
			$(this).parent().find('.wf-accordian-content').slideUp('fast');
			$(this).next('.wf-accordian-content').slideToggle('fast');
			$(this).children('.fa').toggleClass('open');
		}
	});
})(jQuery);

function showPopup(targetPopup){
	$(targetPopup).addClass('wf-show-popup');
	$(targetPopup).parent('.wf-popup-overlay').addClass('wf-show-overlay');
}
//Slider
function wf_slider(bannerData){
	$('.wf-slider').height(bannerData.height);
	$('.wf-slider .slider-img').width(bannerData.width);
	function initBanner(){
		var that=$('.wf-slider .slider-img.active');
		$(that).removeClass('active');
		$(that).next('.slider-img').addClass('active');
		
		if($(that).next('.slider-img')[0]==undefined){
			$('.wf-slider .slider-img').first().addClass('active');
		}
	}
	
	var clearInterVal=setInterval(function(){
		initBanner();
	},bannerData.duration);
	$('.wf-slider .wf-slider-nav span').on('click',function(e){
		e.stopPropagation();
		clearInterval(clearInterVal);
		var goto=$(this).attr('data-slider-id');
		var that=$('.wf-slider .slider-img.active');
		$(that).removeClass('active');
		if(goto==='next'){
			if($(that).next('.slider-img')[0]==undefined){
				$('.wf-slider .slider-img').first().addClass('active');
			}else{
				$(that).next('.slider-img').addClass('active');
			}
			clearInterVal=setInterval(function(){
				initBanner();
			},bannerData.duration);
		}
		else if(goto==='prev'){
			if($(that).prev('.slider-img')[0]==undefined){
				$('.wf-slider .slider-img').last().addClass('active');
			}else{
				$(that).prev('.slider-img').addClass('active');
			}
			clearInterVal=setInterval(function(){
				initBanner();
			},bannerData.duration);
		}
	});
}