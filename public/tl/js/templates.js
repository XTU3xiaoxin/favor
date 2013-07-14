this["JST"] = this["JST"] || {};

this["JST"]["catalog"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row-fluid btn-toolbar "><nav>\r\n    <div class="btn-group pull-left" data-toggle="buttons-radio">\r\n        <a href="catalog-newest" class="btn active"><i class="icon-rocket"></i> 最新</a>\r\n        <a href="catalog-hottest" class="btn "><i class="icon-signal"></i> 热门</a>\r\n        <a href="catalog-selfrun" class="btn "><i class="icon-trophy"></i> 自营</a>\r\n    </div>\r\n    <div class="btn-group pull-right" data-toggle="buttons-radio">\r\n        <a class="btn active"><i class="icon-th-large"></i> 大图</a>\r\n        <a class="btn "><i class="icon-th"></i> 小图</a>\r\n        <a class="btn "><i class="icon-th-list"></i> 列表</a>\r\n    </div>\r\n</nav></div>\r\n<div class="row-fluid content" >\r\n    <div class="show" data-view-id="catalog-newest"></div>\r\n    <div class="hide" data-view-id="catalog-hottest"></div>\r\n    <div class="hide" data-view-id="catalog-selfrun"></div>\r\n</div>';

}
return __p
};

this["JST"]["large-icons"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n    <div class="offset2 span1">\r\n        <a class="carousel-control left" href="#carousel_' +
((__t = (id)) == null ? '' : __t) +
'" data-slide="prev" data-bypass>&lsaquo;</a>\r\n    </div>\r\n    <div class="span6">\r\n        <div id="carousel_' +
((__t = (id)) == null ? '' : __t) +
'" class="carousel slide">\r\n            <div class="row-fluid">\r\n                <ol class="carousel-indicators">\r\n                    ';
 _.each(input, function(item, index) { ;
__p += '\r\n                    <li data-target="#carousel_' +
((__t = (id)) == null ? '' : __t) +
'" data-slide-to="' +
((__t = (index)) == null ? '' : __t) +
'" class="' +
((__t = (index==0?'active':'')) == null ? '' : __t) +
'"></li>\r\n                    ';
 }); ;
__p += '\r\n                </ol>\r\n\r\n                <!-- Carousel items -->\r\n                <div class="carousel-inner">\r\n                    ';
 _.each(input, function(item, index) { ;
__p += '\r\n                    <div class="' +
((__t = (index==0?'active':'')) == null ? '' : __t) +
' item">\r\n                        <li class="large-item">\r\n                            <a target="_blank"><img alt="' +
((__t = (item.title)) == null ? '' : __t) +
'" src="' +
((__t = (item.imageUrl)) == null ? '' : __t) +
'"></a>\r\n                            <h4 data-placement="bottom" data-toggle="tooltip" title="' +
((__t = (item.title)) == null ? '' : __t) +
'">' +
((__t = (item.title)) == null ? '' : __t) +
'</h4>\r\n                            <p>\r\n                                <span class="fanciers"><i class="icon-heart"></i><span class="fanciers_count">' +
((__t = (item.likes)) == null ? '' : __t) +
'</span></span>\r\n                                <span class="owners"><i class="icon-check"></i><span class="owners_count">' +
((__t = (item.views)) == null ? '' : __t) +
'</span></span>\r\n                                <span class="owners"><i class="icon-eye-open"></i><span class="owners_count">' +
((__t = (item.views)) == null ? '' : __t) +
'</span></span>\r\n                            </p>\r\n                        </li>\r\n                    </div>\r\n                    ';
 }); ;
__p += '\r\n                <!-- Carousel nav -->\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="span1">\r\n        <a class="carousel-control right" href="#carousel_' +
((__t = (id)) == null ? '' : __t) +
'" data-slide="next" data-bypass>&rsaquo;</a>\r\n    </div>\r\n';

}
return __p
};

this["JST"]["list-items"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n<div class="offset2 span1">\r\n    <a class="carousel-control left" href="#myCarousel" data-slide="prev" data-bypass>&lsaquo;</a>\r\n</div>\r\n<div class="span6">\r\n    <div id="myCarousel" class="carousel slide">\r\n        <div class="row-fluid">\r\n            <ol class="carousel-indicators">\r\n                ';
 _.each(input, function(item, index) { ;
__p += '\r\n                <li data-target="#myCarousel" data-slide-to="' +
((__t = (index)) == null ? '' : __t) +
'" class="' +
((__t = (index==0?'active':'')) == null ? '' : __t) +
'"></li>\r\n                ';
 }); ;
__p += '\r\n            </ol>\r\n\r\n            <!-- Carousel items -->\r\n            <div class="carousel-inner">\r\n                ';
 _.each(input, function(item, index) { ;
__p += '\r\n                <div class="' +
((__t = (index==0?'active':'')) == null ? '' : __t) +
' item">\r\n                    <li class="large-item">\r\n                        <a target="_blank"><img alt="' +
((__t = (item.title)) == null ? '' : __t) +
'" src="' +
((__t = (item.imageUrl)) == null ? '' : __t) +
'"></a>\r\n                        <h4 data-placement="bottom" data-toggle="tooltip" title="' +
((__t = (item.title)) == null ? '' : __t) +
'">' +
((__t = (item.title)) == null ? '' : __t) +
'</h4>\r\n                        <p>\r\n                            <span class="fanciers"><i class="icon-heart"></i><span class="fanciers_count">' +
((__t = (item.likes)) == null ? '' : __t) +
'</span></span>\r\n                            <span class="owners"><i class="icon-check"></i><span class="owners_count">' +
((__t = (item.views)) == null ? '' : __t) +
'</span></span>\r\n                            <span class="owners"><i class="icon-eye-open"></i><span class="owners_count">' +
((__t = (item.views)) == null ? '' : __t) +
'</span></span>\r\n                        </p>\r\n                    </li>\r\n                </div>\r\n                ';
 }); ;
__p += '\r\n                <!-- Carousel nav -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="span1">\r\n    <a class="carousel-control right" href="#myCarousel" data-slide="next" data-bypass>&rsaquo;</a>\r\n</div>\r\n';

}
return __p
};

this["JST"]["medium-icons"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n<div class="offset2 span1">\r\n    <a class="carousel-control left" href="#myCarousel" data-slide="prev" data-bypass>&lsaquo;</a>\r\n</div>\r\n<div class="span6">\r\n    <div id="myCarousel" class="carousel slide">\r\n        <div class="row-fluid">\r\n            <ol class="carousel-indicators">\r\n                ';
 _.each(input, function(item, index) { ;
__p += '\r\n                <li data-target="#myCarousel" data-slide-to="' +
((__t = (index)) == null ? '' : __t) +
'" class="' +
((__t = (index==0?'active':'')) == null ? '' : __t) +
'"></li>\r\n                ';
 }); ;
__p += '\r\n            </ol>\r\n\r\n            <!-- Carousel items -->\r\n            <div class="carousel-inner">\r\n                ';
 _.each(input, function(item, index) { ;
__p += '\r\n                <div class="' +
((__t = (index==0?'active':'')) == null ? '' : __t) +
' item">\r\n                    <li class="large-item">\r\n                        <a target="_blank"><img alt="' +
((__t = (item.title)) == null ? '' : __t) +
'" src="' +
((__t = (item.imageUrl)) == null ? '' : __t) +
'"></a>\r\n                        <h4 data-placement="bottom" data-toggle="tooltip" title="' +
((__t = (item.title)) == null ? '' : __t) +
'">' +
((__t = (item.title)) == null ? '' : __t) +
'</h4>\r\n                        <p>\r\n                            <span class="fanciers"><i class="icon-heart"></i><span class="fanciers_count">' +
((__t = (item.likes)) == null ? '' : __t) +
'</span></span>\r\n                            <span class="owners"><i class="icon-check"></i><span class="owners_count">' +
((__t = (item.views)) == null ? '' : __t) +
'</span></span>\r\n                            <span class="owners"><i class="icon-eye-open"></i><span class="owners_count">' +
((__t = (item.views)) == null ? '' : __t) +
'</span></span>\r\n                        </p>\r\n                    </li>\r\n                </div>\r\n                ';
 }); ;
__p += '\r\n                <!-- Carousel nav -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="span1">\r\n    <a class="carousel-control right" href="#myCarousel" data-slide="next" data-bypass>&rsaquo;</a>\r\n</div>\r\n';

}
return __p
};

this["JST"]["share-subject"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="span6">\r\n    <h4 class="offset3 span8">效果预览：</h4>\r\n    <ul class="thumbnails">\r\n        <li class="offset3 span8">\r\n            <div class="thumbnail">\r\n                <a href="/share" id="previewLink">\r\n                <img id="previewImg" src="#" class="img-rounded" width="600" height="800">\r\n                <h4 id="previewSDes" class="text-center" data-placement="bottom" data-toggle="tooltip">简短概括</h4>\r\n                <p id="previewLDes" data-placement="bottom" data-toggle="tooltip">更多描述</p>\r\n                </a>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n<div class="span6">\r\n    <h4>信息详情：</h4>\r\n    <hr>\r\n    <form class="form-horizontal">\r\n        <div class="control-group">\r\n            <label class="control-label span2" for="imageFile">商品图片</label>\r\n            <div class="controls btn-group span8">\r\n                <span class="btn fileinput-button span12">\r\n                    <span id="fileName">选择本地图片...</span>\r\n                    <!-- The file input field used as target for the file upload widget -->\r\n                    <input id="imageFile" type="file" name="files[]">\r\n                </span>\r\n                <button class="btn dropdown-toggle" data-toggle="dropdown">\r\n                    <span class="caret"></span>\r\n                </button>\r\n                <ul class="dropdown-menu pull-right">\r\n                    <li><a tabindex="-1" href="javascript: $(\'#myModal\').modal(\'show\');" data-toggle="modal">使用远程图片链接...</a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class="control-group">\r\n            <label class="control-label span2" for="shortDes">简短概括</label>\r\n            <div class="controls span8">\r\n                <input class="span12" id="shortDes" type="text" placeholder="简单概括下商品">\r\n            </div>\r\n        </div>\r\n        <div class="control-group">\r\n            <label class="control-label span2" for="longDes">推荐理由</label>\r\n            <div class="controls span8">\r\n                <textarea class="span12" rows="5" id="longDes" placeholder="说说为什么推荐这个商品吧～～"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class="control-group">\r\n            <label class="control-label span2" for="productLink">商品链接</label>\r\n            <div class="controls span8">\r\n                <input class="span12" id="productLink" type="text" placeholder="商品来源网站的完整链接">\r\n            </div>\r\n        </div>\r\n        <hr>\r\n        <div class="control-group">\r\n            <div class="controls offset2 span8">\r\n                <button type="submit" class="btn btn-primary">公开分享信息</button>\r\n                <button class="btn">清空信息</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n    <div class="modal-header">\r\n        <h4 id="myModalLabel" class="control-label" for="imageLink">远程图片链接地址：</h4>\r\n    </div>\r\n    <div class="modal-footer">\r\n        <input class="span12" id="imageLink" type="text" placeholder="远程图片的完整链接">\r\n        <div class="controls text-right">\r\n            <button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>\r\n            <button id="saveImageLink" class="btn btn-primary">保存链接</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};