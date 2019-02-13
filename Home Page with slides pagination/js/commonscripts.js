  




  if (typeof RokBoxSettings == 'undefined') RokBoxSettings = {pc: '100'}
  	
var Equalizer = new Class({
  initialize: function(elements) {
    this.elements = $$(elements);
  },
  equalize: function(hw) {
    if(!hw) { hw = "height"; }
    var max = 0,
      prop = (typeof document.body.style.maxHeight != "undefined" ? "min-" : "") + hw; //ie6 ftl
      offset = "offset" + hw.capitalize();
    this.elements.each(function(element,i) {
      var calc = element[offset];
      if(calc > max) { max = calc; }
    },this);
    this.elements.each(function(element,i) {
      element.setStyle(prop,max - (element[offset] - element.getStyle(hw).toInt()));
    });
    return max;
  }
});

      
if (typeof RokSprocket == 'undefined') RokSprocket = {};


window.addEvent('domready', function(){
    RokSprocket.instances.lists = new RokSprocket.Lists();
});

window.addEvent('domready', function(){
  RokSprocket.instances.lists.attach(101, '{"accordion":"0","autoplay":"0","delay":"5"}');
});

window.addEvent('domready', function(){
  RokSprocket.instances.lists.attach(102, '{"accordion":"0","autoplay":"0","delay":"5"}');
});

window.addEvent('domready', function(){
  RokSprocket.instances.lists.attach(100, '{"accordion":"0","autoplay":"0","delay":"5"}');
});

window.addEvent('domready', function(){
  new Equalizer('.eq100').equalize('height');
});

window.addEvent('domready', function(){
  RokSprocket.instances.lists.attach(99, '{"accordion":"0","autoplay":"0","delay":"5"}');
});

window.addEvent('domready', function(){
  new Equalizer('.eq99').equalize('height');
});

window.addEvent('domready', function(){
    RokSprocket.instances.showcase = new RokSprocket.Showcase();
});

window.addEvent('domready', function(){
  RokSprocket.instances.showcase.attach(94, '{"animation":"crossfade","autoplay":"1","delay":"8"}');
});

var _sf_startpt=(new Date()).getTime()

 var NB = NB || {};
  NB.environment = "production";
  NB.pageId = "20";
  NB.Liquid = NB.Liquid || {};

window.twttr = (function (d,s,id) {
    var t, js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
    js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
    return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
  }(document, "script", "twitter-wjs"));



  NB.FBAppId = '';

(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = '//apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();



