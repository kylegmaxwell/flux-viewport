var self = self || {};// threejs.org/license
'use strict';var THREE={REVISION:"72"};"function"===typeof define&&define.amd?define("three",THREE):"undefined"!==typeof exports&&"undefined"!==typeof module&&(module.exports=THREE);
void 0!==self.requestAnimationFrame&&void 0!==self.cancelAnimationFrame||function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!self.requestAnimationFrame;++c)self.requestAnimationFrame=self[b[c]+"RequestAnimationFrame"],self.cancelAnimationFrame=self[b[c]+"CancelAnimationFrame"]||self[b[c]+"CancelRequestAnimationFrame"];void 0===self.requestAnimationFrame&&void 0!==self.setTimeout&&(self.requestAnimationFrame=function(b){var c=Date.now(),g=Math.max(0,16-(c-a)),f=self.setTimeout(function(){b(c+
g)},g);a=c+g;return f});void 0===self.cancelAnimationFrame&&void 0!==self.clearTimeout&&(self.cancelAnimationFrame=function(a){self.clearTimeout(a)})}();void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&void 0!==Object.defineProperty&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]}});THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};THREE.CullFaceNone=0;THREE.CullFaceBack=1;
THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;
THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.NeverDepth=0;THREE.AlwaysDepth=1;THREE.LessDepth=2;THREE.LessEqualDepth=3;
THREE.EqualDepth=4;THREE.GreaterEqualDepth=5;THREE.GreaterDepth=6;THREE.NotEqualDepth=7;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;THREE.EquirectangularReflectionMapping=303;THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;
THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.HalfFloatType=1025;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;
THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;THREE.RGBA_PVRTC_2BPPV1_Format=2103;
THREE.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};
THREE.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&(d-=1);return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,
c,d){b=THREE.Math.euclideanModulo(b,1);c=THREE.Math.clamp(c,0,1);d=THREE.Math.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){var b=function(b){b=parseFloat(b);1>b&&console.warn("THREE.Color: Alpha component of color "+a+" will be ignored.");return b},c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/.exec(d))return this.r=
Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,this;break;case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/
255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[4]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[4]),this;break;case "hsl":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(d)){var d=parseFloat(c[1]),e=parseInt(c[2],10)/100,g=parseInt(c[3],10)/100;return this.setHSL(d,e,g)}break;case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(d))return d=
parseFloat(c[1]),e=parseInt(c[2],10)/100,g=parseInt(c[3],10)/100,b(c[4]),this.setHSL(d,e,g)}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){b=c[1];c=b.length;if(3===c)return this.r=parseInt(b.charAt(0)+b.charAt(0),16)/255,this.g=parseInt(b.charAt(1)+b.charAt(1),16)/255,this.b=parseInt(b.charAt(2)+b.charAt(2),16)/255,this;if(6===c)return this.r=parseInt(b.charAt(0)+b.charAt(1),16)/255,this.g=parseInt(b.charAt(2)+b.charAt(3),16)/255,this.b=parseInt(b.charAt(4)+b.charAt(5),16)/255,this}a&&0<a.length&&(b=THREE.ColorKeywords[a],
void 0!==b?this.setHex(b):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=
this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),g=Math.min(b,c,d),f,h=(g+e)/2;if(g===e)g=f=0;else{var k=e-g,g=.5>=h?k/(e+g):
k/(2-e-g);switch(e){case b:f=(c-d)/k+(c<d?6:0);break;case c:f=(d-b)/k+2;break;case d:f=(b-c)/k+4}f/=6}a.h=f;a.s=g;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=
a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+
2]=this.b;return a}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},
copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),g=Math.sin(a._x/2),f=Math.sin(a._y/2),h=Math.sin(a._z/2),k=a.order;"XYZ"===k?(this._x=g*d*e+c*f*h,this._y=c*f*e-g*d*h,this._z=c*d*h+g*f*e,this._w=c*d*e-g*f*h):"YXZ"===
k?(this._x=g*d*e+c*f*h,this._y=c*f*e-g*d*h,this._z=c*d*h-g*f*e,this._w=c*d*e+g*f*h):"ZXY"===k?(this._x=g*d*e-c*f*h,this._y=c*f*e+g*d*h,this._z=c*d*h+g*f*e,this._w=c*d*e-g*f*h):"ZYX"===k?(this._x=g*d*e-c*f*h,this._y=c*f*e+g*d*h,this._z=c*d*h-g*f*e,this._w=c*d*e+g*f*h):"YZX"===k?(this._x=g*d*e+c*f*h,this._y=c*f*e+g*d*h,this._z=c*d*h-g*f*e,this._w=c*d*e-g*f*h):"XZY"===k&&(this._x=g*d*e-c*f*h,this._y=c*f*e-g*d*h,this._z=c*d*h+g*f*e,this._w=c*d*e+g*f*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],g=b[5],f=b[9],h=b[2],k=b[6],b=b[10],l=c+g+b;0<l?(c=.5/Math.sqrt(l+1),this._w=.25/c,this._x=(k-f)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>g&&c>b?(c=2*Math.sqrt(1+c-g-b),this._w=(k-f)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):g>b?(c=2*Math.sqrt(1+g-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
.25*c,this._z=(f+k)/c):(c=2*Math.sqrt(1+b-c-g),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(f+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,g=a._w,f=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+g*f+d*k-e*h;this._y=d*l+g*h+e*f-c*k;this._z=e*l+g*k+c*h-d*f;this._w=g*l-c*f-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,g=this._w,f=g*a._w+c*a._x+d*a._y+e*a._z;0>f?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,f=-f):this.copy(a);if(1<=f)return this._w=g,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(f),k=Math.sqrt(1-f*f);if(.001>Math.abs(k))return this._w=.5*(g+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;f=Math.sin((1-b)*h)/k;h=
Math.sin(b*h)/k;this._w=g*f+this._w*h;this._x=c*f+this._x*h;this._y=d*f+this._y*h;this._z=e*f+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},
copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=
a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);
this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===
this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,
b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),
applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},
applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,g=a.y,f=a.z;a=a.w;var h=a*b+g*d-f*c,k=a*c+f*b-e*d,l=a*d+e*c-g*b,b=-e*b-g*c-f*d;this.x=h*a+b*-e+k*-f-l*-g;this.y=k*a+b*-g+l*-e-h*-f;this.z=l*a+b*-f+h*-g-k*-e;return this},project:function(){var a;return function(b){void 0===
a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),unproject:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=
a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&
(this.z=b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},
roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,g=b.x,f=b.y,h=b.z;this.x=d*h-e*f;this.y=e*g-c*h;this.z=c*f-d*g;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);
return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(a,b){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=
a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=
a.array[b+2];return this}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=
a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=
a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var g=a[8],f=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(.01>Math.abs(d-f)&&.01>Math.abs(g-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+f)&&.1>Math.abs(g+c)&&.1>
Math.abs(k+b)&&.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+f)/4;g=(g+c)/4;k=(k+b)/4;e>h&&e>l?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=g/b):h>l?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>l?(c=b=.707106781,d=0):(d=Math.sqrt(l),b=g/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(g-c)*(g-c)+(f-d)*(f-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(g-c)/a;this.z=(f-d)/a;this.w=Math.acos((e+h+l-1)/
2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,
b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);
return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},
length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,
c){this.subVectors(b,a).multiplyScalar(c).add(a);return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=
a.array[b+3];return this}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,
this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var g=e[4],f=e[8],h=e[1],k=e[5],l=e[9],n=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(-l,e),this._z=Math.atan2(-g,a)):(this._x=Math.atan2(p,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?
(this._y=Math.atan2(f,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-n,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-n,e),this._z=Math.atan2(-g,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(n,-1,1)),.99999>Math.abs(n)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-g,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-n,a)):(this._x=
0,this._y=Math.atan2(f,e))):"XZY"===b?(this._z=Math.asin(-d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(p,k),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-l,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeRotationFromQuaternion(b);this.setFromRotationMatrix(a,c,d);return this}}(),setFromVector3:function(a,
b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+
3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},
at:function(a,b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);
return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e instanceof THREE.Geometry)for(var g=e.vertices,e=0,f=g.length;e<f;e++)a.copy(g[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e instanceof THREE.BufferGeometry&&void 0!==e.attributes.position)for(g=e.attributes.position.array,e=0,f=g.length;e<f;e+=3)a.set(g[e],g[e+1],g[e+2]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);
this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,g,f,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=g;l[2]=f;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
return a.applyMatrix3(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix3(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===
a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],k=a[7],a=a[8];return b*g*a-b*f*k-c*e*a+c*f*h+d*e*k-d*g*h},getInverse:function(a,
b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/
c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=
b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]}};THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,g,f,h,k,l,n,p,m,q,t,r){var u=this.elements;u[0]=a;u[4]=b;u[8]=c;u[12]=d;u[1]=e;u[5]=g;u[9]=f;u[13]=h;u[2]=k;u[6]=l;u[10]=n;u[14]=p;u[3]=m;u[7]=q;u[11]=t;u[15]=r;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){var d=this.elements;a.set(d[0],d[1],d[2]);b.set(d[4],d[5],d[6]);c.set(d[8],d[9],d[10]);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);var c=this.elements;b=b.elements;var d=1/a.set(b[0],
b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),g=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*g;c[9]=b[9]*g;c[10]=b[10]*g;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,g=Math.cos(c),c=Math.sin(c),f=Math.cos(d),d=Math.sin(d),h=Math.cos(e),
e=Math.sin(e);if("XYZ"===a.order){a=g*h;var k=g*e,l=c*h,n=c*e;b[0]=f*h;b[4]=-f*e;b[8]=d;b[1]=k+l*d;b[5]=a-n*d;b[9]=-c*f;b[2]=n-a*d;b[6]=l+k*d;b[10]=g*f}else"YXZ"===a.order?(a=f*h,k=f*e,l=d*h,n=d*e,b[0]=a+n*c,b[4]=l*c-k,b[8]=g*d,b[1]=g*e,b[5]=g*h,b[9]=-c,b[2]=k*c-l,b[6]=n+a*c,b[10]=g*f):"ZXY"===a.order?(a=f*h,k=f*e,l=d*h,n=d*e,b[0]=a-n*c,b[4]=-g*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=g*h,b[9]=n-a*c,b[2]=-g*d,b[6]=c,b[10]=g*f):"ZYX"===a.order?(a=g*h,k=g*e,l=c*h,n=c*e,b[0]=f*h,b[4]=l*d-k,b[8]=a*d+n,b[1]=f*e,b[5]=
n*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*f,b[10]=g*f):"YZX"===a.order?(a=g*f,k=g*d,l=c*f,n=c*d,b[0]=f*h,b[4]=n-a*e,b[8]=l*e+k,b[1]=e,b[5]=g*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-n*e):"XZY"===a.order&&(a=g*f,k=g*d,l=c*f,n=c*d,b[0]=f*h,b[4]=-e,b[8]=d*h,b[1]=a*e+n,b[5]=g*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=n*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,g=a.w,f=c+c,h=d+d,k=e+e;a=c*f;var l=c*h,c=c*k,n=d*h,d=d*k,e=e*k,f=g*f,h=g*h,g=g*k;b[0]=1-(n+e);b[4]=l-g;b[8]=c+h;b[1]=l+g;b[5]=1-(a+e);b[9]=d-f;b[2]=c-h;b[6]=d+f;b[10]=1-(a+n);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a,b,c;return function(d,e,g){void 0===a&&(a=new THREE.Vector3);void 0===b&&(b=new THREE.Vector3);void 0===c&&(c=new THREE.Vector3);
var f=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(g,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(g,c).normalize());b.crossVectors(c,a);f[0]=a.x;f[4]=b.x;f[8]=c.x;f[1]=a.y;f[5]=b.y;f[9]=c.y;f[2]=a.z;f[6]=b.z;f[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,
b){var c=a.elements,d=b.elements,e=this.elements,g=c[0],f=c[4],h=c[8],k=c[12],l=c[1],n=c[5],p=c[9],m=c[13],q=c[2],t=c[6],r=c[10],u=c[14],w=c[3],v=c[7],B=c[11],c=c[15],x=d[0],H=d[4],I=d[8],z=d[12],D=d[1],G=d[5],O=d[9],C=d[13],F=d[2],K=d[6],L=d[10],E=d[14],J=d[3],y=d[7],P=d[11],d=d[15];e[0]=g*x+f*D+h*F+k*J;e[4]=g*H+f*G+h*K+k*y;e[8]=g*I+f*O+h*L+k*P;e[12]=g*z+f*C+h*E+k*d;e[1]=l*x+n*D+p*F+m*J;e[5]=l*H+n*G+p*K+m*y;e[9]=l*I+n*O+p*L+m*P;e[13]=l*z+n*C+p*E+m*d;e[2]=q*x+t*D+r*F+u*J;e[6]=q*H+t*G+r*K+u*y;e[10]=
q*I+t*O+r*L+u*P;e[14]=q*z+t*C+r*E+u*d;e[3]=w*x+v*D+B*F+c*J;e[7]=w*H+v*G+B*K+c*y;e[11]=w*I+v*O+B*L+c*P;e[15]=w*z+v*C+B*E+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=
a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.fromArray(b,c),a.applyMatrix4(this),a.toArray(b,c);return b}}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3);void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(a.x,
a.y,a.z);return b}}(),rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],g=a[1],f=a[5],h=a[9],k=a[13],l=a[2],n=a[6],p=a[10],m=a[14];return a[3]*(+e*h*n-d*k*
n-e*f*p+c*k*p+d*f*m-c*h*m)+a[7]*(+b*h*m-b*k*p+e*g*p-d*g*m+d*k*l-e*h*l)+a[11]*(+b*k*n-b*f*m-e*g*n+c*g*m+e*f*l-c*k*l)+a[15]*(-d*f*l-b*h*n+b*f*p+d*g*n-c*g*p+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=
c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a;return function(){void 0===a&&(a=new THREE.Vector3);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=
this.elements,d=a.elements,e=d[0],g=d[4],f=d[8],h=d[12],k=d[1],l=d[5],n=d[9],p=d[13],m=d[2],q=d[6],t=d[10],r=d[14],u=d[3],w=d[7],v=d[11],d=d[15];c[0]=n*r*w-p*t*w+p*q*v-l*r*v-n*q*d+l*t*d;c[4]=h*t*w-f*r*w-h*q*v+g*r*v+f*q*d-g*t*d;c[8]=f*p*w-h*n*w+h*l*v-g*p*v-f*l*d+g*n*d;c[12]=h*n*q-f*p*q-h*l*t+g*p*t+f*l*r-g*n*r;c[1]=p*t*u-n*r*u-p*m*v+k*r*v+n*m*d-k*t*d;c[5]=f*r*u-h*t*u+h*m*v-e*r*v-f*m*d+e*t*d;c[9]=h*n*u-f*p*u-h*k*v+e*p*v+f*k*d-e*n*d;c[13]=f*p*m-h*n*m+h*k*t-e*p*t-f*k*r+e*n*r;c[2]=l*r*u-p*q*u+p*m*w-k*r*
w-l*m*d+k*q*d;c[6]=h*q*u-g*r*u-h*m*w+e*r*w+g*m*d-e*q*d;c[10]=g*p*u-h*l*u+h*k*w-e*p*w-g*k*d+e*l*d;c[14]=h*l*m-g*p*m-h*k*q+e*p*q+g*k*r-e*l*r;c[3]=n*q*u-l*t*u-n*m*w+k*t*w+l*m*v-k*q*v;c[7]=g*t*u-f*q*u+f*m*w-e*t*w-g*m*v+e*q*v;c[11]=f*l*u-g*n*u-f*k*w+e*n*w+g*k*v-e*l*v;c[15]=g*n*m-f*l*m+f*k*q-e*n*q-g*k*t+e*l*t;c=e*c[0]+k*c[4]+m*c[8]+u*c[12];if(0===c){if(b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(a,b){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},scale:function(a){var b=
this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,
0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,g=a.x,f=a.y,h=a.z,k=e*g,l=e*f;this.set(k*g+c,k*f-d*h,k*h+d*f,0,k*f+d*h,l*f+c,l*h-d*g,0,k*h-d*f,l*h+d*g,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,
0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new THREE.Vector3);void 0===b&&(b=new THREE.Matrix4);var g=this.elements,f=a.set(g[0],g[1],g[2]).length(),h=a.set(g[4],g[5],g[6]).length(),k=a.set(g[8],g[9],g[10]).length();0>this.determinant()&&(f=-f);c.x=g[12];c.y=g[13];c.z=g[14];b.elements.set(this.elements);c=1/f;var g=1/h,l=1/k;b.elements[0]*=
c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=g;b.elements[5]*=g;b.elements[6]*=g;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=f;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,g){var f=this.elements;f[0]=2*e/(b-a);f[4]=0;f[8]=(b+a)/(b-a);f[12]=0;f[1]=0;f[5]=2*e/(d-c);f[9]=(d+c)/(d-c);f[13]=0;f[2]=0;f[6]=0;f[10]=-(g+e)/(g-e);f[14]=-2*g*e/(g-e);f[3]=0;f[7]=0;f[11]=-1;f[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(.5*
a));var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,g){var f=this.elements,h=b-a,k=c-d,l=g-e;f[0]=2/h;f[4]=0;f[8]=0;f[12]=-((b+a)/h);f[1]=0;f[5]=2/k;f[9]=0;f[13]=-((c+d)/k);f[2]=0;f[6]=0;f[10]=-2/l;f[14]=-((g+e)/l);f[3]=0;f[7]=0;f[11]=0;f[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],
a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,
b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),
distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,g,f){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),l=c.dot(this.direction),n=-c.dot(b),p=c.lengthSq(),m=Math.abs(1-k*k),q;0<m?(d=k*n-l,e=k*l-n,q=h*m,0<=d?e>=-q?e<=q?(h=1/m,d*=h,e*=h,k=d*(d+k*e+2*l)+e*(k*d+e+2*n)+p):(e=h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*n)+p):(e=-h,d=Math.max(0,-(k*e+l)),
k=-d*d+e*(e+2*n)+p):e<=-q?(d=Math.max(0,-(-k*h+l)),e=0<d?-h:Math.min(Math.max(-h,-n),h),k=-d*d+e*(e+2*n)+p):e<=q?(d=0,e=Math.min(Math.max(-h,-n),h),k=e*(e+2*n)+p):(d=Math.max(0,-(k*h+l)),e=0<d?h:Math.min(Math.max(-h,-n),h),k=-d*d+e*(e+2*n)+p)):(e=0<k?-h:h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*n)+p);g&&g.copy(this.direction).multiplyScalar(d).add(this.origin);f&&f.copy(b).multiplyScalar(e).add(a);return k}}(),isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=
new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,g=b.radius*b.radius;if(e>g)return null;g=Math.sqrt(g-e);e=d-g;d+=g;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+
a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,g,f;d=1/this.direction.x;g=1/this.direction.y;f=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=g?(e=(a.min.y-h.y)*g,g*=a.max.y-h.y):(e=(a.max.y-h.y)*g,g*=a.min.y-
h.y);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;0<=f?(e=(a.min.z-h.z)*f,f*=a.max.z-h.z):(e=(a.max.z-h.z)*f,f*=a.min.z-h.z);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,g,f,h,k){b.subVectors(g,e);c.subVectors(f,e);d.crossVectors(b,c);g=this.direction.dot(d);if(0<g){if(h)return null;h=1}else if(0>g)h=-1,
g=-g;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;f=h*this.direction.dot(b.cross(a));if(0>f||e+f>g)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/g,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}};
THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,g=0,f=b.length;g<f;g++)e=Math.max(e,d.distanceToSquared(b[g]));this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},
empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));
return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}};
THREE.Frustum=function(a,b,c,d,e,g){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==g?g:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,g){var f=this.planes;f[0].copy(a);f[1].copy(b);f[2].copy(c);f[3].copy(d);f[4].copy(e);f[5].copy(g);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],g=c[3],f=c[4],h=c[5],k=c[6],l=c[7],n=c[8],p=c[9],m=c[10],q=c[11],t=c[12],r=c[13],u=c[14],
c=c[15];b[0].setComponents(g-a,l-f,q-n,c-t).normalize();b[1].setComponents(g+a,l+f,q+n,c+t).normalize();b[2].setComponents(g+d,l+h,q+p,c+r).normalize();b[3].setComponents(g-d,l-h,q-p,c-r).normalize();b[4].setComponents(g-e,l-k,q-m,c-u).normalize();b[5].setComponents(g+e,l+k,q+m,c+u).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);
return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var g=d[e];a.x=0<g.normal.x?c.min.x:c.max.x;b.x=0<g.normal.x?c.max.x:c.min.x;a.y=0<g.normal.y?c.min.y:c.max.y;b.y=0<g.normal.y?c.max.y:c.min.y;a.z=0<g.normal.z?c.min.z:c.max.z;b.z=0<g.normal.z?c.max.z:c.min.z;
var f=g.distanceToPoint(a),g=g.distanceToPoint(b);if(0>f&&0>g)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,
b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),g=this.normal.dot(e);if(0===g){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return g=
-(b.start.dot(this.normal)+this.constant)/g,0>g||1<g?void 0:d.copy(e).multiplyScalar(g).add(b.start)}}(),coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var g=e||c.getNormalMatrix(d),g=a.copy(this.normal).applyMatrix3(g),f=this.coplanarPoint(b);f.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(g,f);return this}}(),translate:function(a){this.constant-=
a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+
(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(){var a=Math.PI/
180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};
THREE.Spline=function(a){function b(a,b,c,d,e,g,f){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*f+(-3*(b-c)-2*a-d)*g+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,g,f,h,k,l,n,p,m;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;g=Math.floor(e);f=e-g;c[0]=0===g?g:g-1;c[1]=g;c[2]=g>this.points.length-2?this.points.length-1:g+1;c[3]=g>this.points.length-3?this.points.length-1:g+
2;l=this.points[c[0]];n=this.points[c[1]];p=this.points[c[2]];m=this.points[c[3]];h=f*f;k=f*h;d.x=b(l.x,n.x,p.x,m.x,f,h,k);d.y=b(l.y,n.y,p.y,m.y,f,h,k);d.z=b(l.z,n.z,p.z,m.z,f,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,g=new THREE.Vector3,f=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;g.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),f.copy(d),k+=f.distanceTo(g),g.copy(d),b*=this.points.length-1,b=Math.floor(b),b!==e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,g,f,h=[],k=new THREE.Vector3,m=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=m.chunks[b]-m.chunks[b-1];f=Math.ceil(a*c/m.total);e=(b-1)/(this.points.length-1);g=b/(this.points.length-1);for(c=1;c<f-1;c++)d=e+1/f*c*(g-e),d=this.getPoint(d),
h.push(k.copy(d).clone());h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,g,f,h){a.subVectors(f,e);b.subVectors(g,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);g=a.dot(c);var k=b.dot(b);f=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0===l)return h.set(-2,-1,-1);l=1/l;k=(k*g-e*f)*l;d=(d*f-e*g)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,
this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},
equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){function b(a,b){return a.distance-b.distance}a.Raycaster=function(b,c,g,f){this.ray=new a.Ray(b,c);this.near=g||0;this.far=f||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})};var c=function(a,b,g,f){if(!1!==a.visible&&(a.raycast(b,g),!0===f)){a=a.children;f=0;for(var h=a.length;f<h;f++)c(a[f],
b,g,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?(this.ray.origin.setFromMatrixPosition(c.matrixWorld),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(this.ray.origin).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},
intersectObject:function(a,e){var g=[];c(a,this,g,e);g.sort(b);return g},intersectObjects:function(a,e){var g=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),g;for(var f=0,h=a.length;f<h;f++)c(a[f],this,g,e);g.sort(b);return g}}})(THREE);
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,
value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new THREE.Matrix4},normalMatrix:{value:new THREE.Matrix3}});this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=THREE.Object3D.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}};
THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);THREE.Object3D.DefaultMatrixAutoUpdate=!0;
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
set renderDepth(a){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},
rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,
c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=
new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);
return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a instanceof THREE.Object3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),
this.children.splice(b,1))},getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){a=
a||new THREE.Vector3;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){c=c||new THREE.Quaternion;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Euler;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=
new THREE.Vector3,b=new THREE.Quaternion;return function(c){c=c||new THREE.Vector3;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=
this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,
this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);"{}"!==JSON.stringify(this.userData)&&(d.userData=
this.userData);!0!==this.visible&&(d.visible=this.visible);d.matrix=this.matrix.toArray();if(0<this.children.length){d.children=[];for(var e=0;e<this.children.length;e++)d.children.push(this.children[e].toJSON(a).object)}e={};if(c){var c=b(a.geometries),g=b(a.materials),f=b(a.textures);a=b(a.images);0<c.length&&(e.geometries=c);0<g.length&&(e.materials=g);0<f.length&&(e.textures=f);0<a.length&&(e.images=a)}e.object=d;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,
b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.rotationAutoUpdate=a.rotationAutoUpdate;this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;
this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Face3=function(a,b,c,d,e,g){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=Array.isArray(d)?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==g?g:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}};
THREE.Face4=function(a,b,c,d,e,g,f){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,g,f)};THREE.BufferAttribute=function(a,b){this.uuid=THREE.Math.generateUUID();this.array=a;this.itemSize=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length},get count(){return this.array.length/this.itemSize},set needsUpdate(a){!0===a&&this.version++},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;
c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),g=new THREE.Color);b[c++]=g.r;b[c++]=g.g;b[c++]=g.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];b[c++]=g.a;b[c++]=g.b;b[c++]=
g.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),g=new THREE.Vector2);b[c++]=g.x;b[c++]=g.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),g=new THREE.Vector3);b[c++]=g.x;b[c++]=g.y;b[c++]=g.z}return this},
copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var g=a[d];void 0===g&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),g=new THREE.Vector4);b[c++]=g.x;b[c++]=g.y;b[c++]=g.z;b[c++]=g.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},
setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,
b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return(new this.constructor).copy(this)}};THREE.Int8Attribute=function(a,b){return new THREE.BufferAttribute(new Int8Array(a),b)};THREE.Uint8Attribute=function(a,b){return new THREE.BufferAttribute(new Uint8Array(a),b)};THREE.Uint8ClampedAttribute=function(a,b){return new THREE.BufferAttribute(new Uint8ClampedArray(a),b)};
THREE.Int16Attribute=function(a,b){return new THREE.BufferAttribute(new Int16Array(a),b)};THREE.Uint16Attribute=function(a,b){return new THREE.BufferAttribute(new Uint16Array(a),b)};THREE.Int32Attribute=function(a,b){return new THREE.BufferAttribute(new Int32Array(a),b)};THREE.Uint32Attribute=function(a,b){return new THREE.BufferAttribute(new Uint32Array(a),b)};THREE.Float32Attribute=function(a,b){return new THREE.BufferAttribute(new Float32Array(a),b)};
THREE.Float64Attribute=function(a,b){return new THREE.BufferAttribute(new Float64Array(a),b)};THREE.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new THREE.BufferAttribute(a,b)).setDynamic(!0)};THREE.InstancedBufferAttribute=function(a,b,c){THREE.BufferAttribute.call(this,a,b);this.meshPerAttribute=c||1};THREE.InstancedBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);
THREE.InstancedBufferAttribute.prototype.constructor=THREE.InstancedBufferAttribute;THREE.InstancedBufferAttribute.prototype.copy=function(a){THREE.BufferAttribute.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};THREE.InterleavedBuffer=function(a,b){this.uuid=THREE.Math.generateUUID();this.array=a;this.stride=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0};
THREE.InterleavedBuffer.prototype={constructor:THREE.InterleavedBuffer,get length(){return this.array.length},get count(){return this.array.length/this.stride},set needsUpdate(a){!0===a&&this.version++},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.stride=a.stride;this.dynamic=a.dynamic},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,
b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)}};THREE.InstancedInterleavedBuffer=function(a,b,c){THREE.InterleavedBuffer.call(this,a,b);this.meshPerAttribute=c||1};THREE.InstancedInterleavedBuffer.prototype=Object.create(THREE.InterleavedBuffer.prototype);THREE.InstancedInterleavedBuffer.prototype.constructor=THREE.InstancedInterleavedBuffer;
THREE.InstancedInterleavedBuffer.prototype.copy=function(a){THREE.InterleavedBuffer.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};THREE.InterleavedBufferAttribute=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.data=a;this.itemSize=b;this.offset=c};
THREE.InterleavedBufferAttribute.prototype={constructor:THREE.InterleavedBufferAttribute,get length(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length},get count(){return this.data.array.length/this.data.stride},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+
2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;
return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this}};
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=
this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,g=a.vertexNormals.length;e<g;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=
this.verticesNeedUpdate=!0},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);
a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){var b=this,c=null!==a.index?a.index.array:void 0,d=a.attributes,e=d.position.array,g=void 0!==d.normal?d.normal.array:void 0,f=void 0!==
d.color?d.color.array:void 0,h=void 0!==d.uv?d.uv.array:void 0,k=void 0!==d.uv2?d.uv2.array:void 0;void 0!==k&&(this.faceVertexUvs[1]=[]);for(var l=[],n=[],p=[],m=d=0;d<e.length;d+=3,m+=2)b.vertices.push(new THREE.Vector3(e[d],e[d+1],e[d+2])),void 0!==g&&l.push(new THREE.Vector3(g[d],g[d+1],g[d+2])),void 0!==f&&b.colors.push(new THREE.Color(f[d],f[d+1],f[d+2])),void 0!==h&&n.push(new THREE.Vector2(h[m],h[m+1])),void 0!==k&&p.push(new THREE.Vector2(k[m],k[m+1]));var q=function(a,c,d){var e=void 0!==
g?[l[a].clone(),l[c].clone(),l[d].clone()]:[],m=void 0!==f?[b.colors[a].clone(),b.colors[c].clone(),b.colors[d].clone()]:[],e=new THREE.Face3(a,c,d,e,m);b.faces.push(e);void 0!==h&&b.faceVertexUvs[0].push([n[a].clone(),n[c].clone(),n[d].clone()]);void 0!==k&&b.faceVertexUvs[1].push([p[a].clone(),p[c].clone(),p[d].clone()])};if(void 0!==c)if(e=a.groups,0<e.length)for(d=0;d<e.length;d++)for(var m=e[d],t=m.start,r=m.count,m=t,t=t+r;m<t;m+=3)q(c[m],c[m+1],c[m+2]);else for(d=0;d<c.length;d+=3)q(c[d],c[d+
1],c[d+2]);else for(d=0;d<e.length/3;d+=3)q(d,d+1,d+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new THREE.Matrix4;c.set(b,
0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],g=this.vertices[e.a],f=this.vertices[e.b];a.subVectors(this.vertices[e.c],f);b.subVectors(g,f);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,g,f,h=
new THREE.Vector3,k=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],g=this.vertices[c.b],f=this.vertices[c.c],h.subVectors(f,g),k.subVectors(e,g),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?
(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone())},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=
e.vertexNormals[a].clone();var g=new THREE.Geometry;g.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var f=this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),f.push(k)}f=this.morphNormals[a];g.vertices=this.morphTargets[a].vertices;
g.computeFaceNormals();g.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=f.faceNormals[c],k=f.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){for(var a=
0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",
a);else{var d,e=this.vertices.length,g=this.vertices,f=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var n=0,p=f.length;n<p;n++){var m=f[n].clone();void 0!==b&&m.applyMatrix4(b);g.push(m)}n=0;for(p=k.length;n<p;n++){var f=k[n],q,t=f.vertexNormals,r=f.vertexColors,m=new THREE.Face3(f.a+e,f.b+e,f.c+e);m.normal.copy(f.normal);void 0!==d&&m.normal.applyMatrix3(d).normalize();b=0;for(g=t.length;b<
g;b++)q=t[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),m.vertexNormals.push(q);m.color.copy(f.color);b=0;for(g=r.length;b<g;b++)q=r[b],m.vertexColors.push(q.clone());m.materialIndex=f.materialIndex+c;h.push(m)}n=0;for(p=a.length;n<p;n++)if(c=a[n],d=[],void 0!==c){b=0;for(g=c.length;b<g;b++)d.push(c[b].clone());l.push(d)}}},mergeMesh:function(a){!1===a instanceof THREE.Mesh?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),
this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),g,f;g=0;for(f=this.vertices.length;g<f;g++)d=this.vertices[g],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=g,b.push(this.vertices[g]),c[g]=b.length-1):c[g]=c[a[d]];a=[];g=0;for(f=this.faces.length;g<f;g++)for(e=this.faces[g],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(g);break}for(g=a.length-1;0<=g;g--)for(e=a[g],this.faces.splice(e,
1),c=0,f=this.faceVertexUvs.length;c<f;c++)this.faceVertexUvs[c].splice(e,1);g=this.vertices.length-b.length;this.vertices=b;return g},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==l[b])return l[b];l[b]=k.length/3;k.push(a.x,a.y,a.z);return l[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=n.length;n.push(a.getHex());return p[b]}function d(a){var b=a.x.toString()+
a.y.toString();if(void 0!==q[b])return q[b];q[b]=m.length/2;m.push(a.x,a.y);return q[b]}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var g=this.parameters,f;for(f in g)void 0!==g[f]&&(e[f]=g[f]);return e}g=[];for(f=0;f<this.vertices.length;f++){var h=this.vertices[f];g.push(h.x,h.y,h.z)}var h=[],k=[],l={},n=[],p={},m=[],q={};for(f=0;f<this.faces.length;f++){var t=this.faces[f],
r=void 0!==this.faceVertexUvs[0][f],u=0<t.normal.length(),w=0<t.vertexNormals.length,v=1!==t.color.r||1!==t.color.g||1!==t.color.b,B=0<t.vertexColors.length,x=0,x=a(x,0,0),x=a(x,1,!1),x=a(x,2,!1),x=a(x,3,r),x=a(x,4,u),x=a(x,5,w),x=a(x,6,v),x=a(x,7,B);h.push(x);h.push(t.a,t.b,t.c);r&&(r=this.faceVertexUvs[0][f],h.push(d(r[0]),d(r[1]),d(r[2])));u&&h.push(b(t.normal));w&&(u=t.vertexNormals,h.push(b(u[0]),b(u[1]),b(u[2])));v&&h.push(c(t.color));B&&(t=t.vertexColors,h.push(c(t[0]),c(t[1]),c(t[2])))}e.data=
{};e.data.vertices=g;e.data.normals=k;0<n.length&&(e.data.colors=n);0<m.length&&(e.data.uvs=[m]);e.data.faces=h;return e},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.vertices=[];this.faces=[];this.faceVertexUvs=[[]];for(var b=a.vertices,c=0,d=b.length;c<d;c++)this.vertices.push(b[c].clone());b=a.faces;c=0;for(d=b.length;c<d;c++)this.faces.push(b[c].clone());c=0;for(d=a.faceVertexUvs.length;c<d;c++){b=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=
[]);for(var e=0,g=b.length;e<g;e++){for(var f=b[e],h=[],k=0,l=f.length;k<l;k++)h.push(f[k].clone());this.faceVertexUvs[c].push(h)}}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.DirectGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="DirectGeometry";this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.DirectGeometry.prototype={constructor:THREE.DirectGeometry,computeBoundingBox:THREE.Geometry.prototype.computeBoundingBox,computeBoundingSphere:THREE.Geometry.prototype.computeBoundingSphere,computeFaceNormals:function(){console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")},computeVertexNormals:function(){console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")},computeGroups:function(a){var b,c=[],
d;a=a.faces;for(var e=0;e<a.length;e++){var g=a[e];g.materialIndex!==d&&(d=g.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,g=d[1]&&0<d[1].length,f=a.morphTargets,h=f.length;if(0<h){for(var k=[],l=0;l<h;l++)k[l]=[];this.morphTargets.position=k}var n=a.morphNormals,p=n.length;if(0<p){for(var m=[],l=0;l<p;l++)m[l]=
[];this.morphTargets.normal=m}for(var q=a.skinIndices,t=a.skinWeights,r=q.length===c.length,u=t.length===c.length,l=0;l<b.length;l++){var w=b[l];this.vertices.push(c[w.a],c[w.b],c[w.c]);var v=w.vertexNormals;3===v.length?this.normals.push(v[0],v[1],v[2]):(v=w.normal,this.normals.push(v,v,v));v=w.vertexColors;3===v.length?this.colors.push(v[0],v[1],v[2]):(v=w.color,this.colors.push(v,v,v));!0===e&&(v=d[0][l],void 0!==v?this.uvs.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",
l),this.uvs.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2)));!0===g&&(v=d[1][l],void 0!==v?this.uvs2.push(v[0],v[1],v[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",l),this.uvs2.push(new THREE.Vector2,new THREE.Vector2,new THREE.Vector2)));for(v=0;v<h;v++){var B=f[v].vertices;k[v].push(B[w.a],B[w.b],B[w.c])}for(v=0;v<p;v++)B=n[v].vertexNormals[l],m[v].push(B.a,B.b,B.c);r&&this.skinIndices.push(q[w.a],q[w.b],q[w.c]);u&&this.skinWeights.push(t[w.a],t[w.b],
t[w.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype);
THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},getIndex:function(){return this.index},setIndex:function(a){this.index=a},addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute&&!1===b instanceof THREE.InterleavedBufferAttribute?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new THREE.BufferAttribute(b,
c))):("index"===a&&(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b)),this.attributes[a]=b)},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a]},get drawcalls(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups},get offsets(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups},addDrawCall:function(a,
b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=
b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere()},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a;
return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeScale(b,c,d);this.applyMatrix(a);
return this}}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D);a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a instanceof THREE.Points||a instanceof THREE.Line){a=new THREE.Float32Attribute(3*b.vertices.length,3);var c=new THREE.Float32Attribute(3*b.colors.length,3);this.addAttribute("position",
a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new THREE.Float32Attribute(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a instanceof THREE.Mesh&&b instanceof THREE.Geometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=
a.geometry;if(a instanceof THREE.Mesh){var c=b.__directGeometry;if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),
c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),
this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new THREE.DirectGeometry).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new THREE.BufferAttribute(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",(new THREE.BufferAttribute(b,3)).copyVector3sArray(a.normals)));
0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new THREE.BufferAttribute(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new THREE.BufferAttribute(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<a.vertices.length?Uint32Array:Uint16Array)(3*a.indices.length),
this.setIndex((new THREE.BufferAttribute(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,g=d.length;e<g;e++){var f=d[e],h=new THREE.Float32Attribute(3*f.length,3);b.push(h.copyVector3sArray(f))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new THREE.Float32Attribute(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new THREE.Float32Attribute(4*a.skinWeights.length,
4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){var a=new THREE.Vector3;return function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var b=this.attributes.position.array;if(b){var c=this.boundingBox;c.makeEmpty();for(var d=0,e=b.length;d<e;d+=3)a.fromArray(b,d),c.expandByPoint(a)}if(void 0===
b||0===b.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}}(),computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;
if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,g=c.length;e<g;e+=3)b.fromArray(c,e),a.expandByPoint(b);a.center(d);for(var f=0,e=0,g=c.length;e<g;e+=3)b.fromArray(c,e),f=Math.max(f,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(f);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=
this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(d.length),3));else for(var e=b.normal.array,g=0,f=e.length;g<f;g++)e[g]=0;var e=b.normal.array,h,k,l,n=new THREE.Vector3,p=new THREE.Vector3,m=new THREE.Vector3,q=new THREE.Vector3,t=new THREE.Vector3;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var r=0,u=c.length;r<u;++r)for(g=c[r],f=g.start,h=g.count,g=f,f+=h;g<
f;g+=3)h=3*a[g+0],k=3*a[g+1],l=3*a[g+2],n.fromArray(d,h),p.fromArray(d,k),m.fromArray(d,l),q.subVectors(m,p),t.subVectors(n,p),q.cross(t),e[h]+=q.x,e[h+1]+=q.y,e[h+2]+=q.z,e[k]+=q.x,e[k+1]+=q.y,e[k+2]+=q.z,e[l]+=q.x,e[l+1]+=q.y,e[l+2]+=q.z}else for(g=0,f=d.length;g<f;g+=9)n.fromArray(d,g),p.fromArray(d,g+3),m.fromArray(d,g+6),q.subVectors(m,p),t.subVectors(n,p),q.cross(t),e[g]=q.x,e[g+1]=q.y,e[g+2]=q.z,e[g+3]=q.x,e[g+4]=q.y,e[g+5]=q.z,e[g+6]=q.x,e[g+7]=q.y,e[g+8]=q.z;this.normalizeNormals();b.normal.needsUpdate=
!0}},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(a){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},merge:function(a,b){if(!1===a instanceof THREE.BufferGeometry)console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,g=a.attributes[d],f=g.array,
h=0,g=g.itemSize*b;h<f.length;h++,g++)e[g]=f[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,g=a.length;e<g;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&(a[c]=b[c]);
return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b}}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),radius:c.radius});return a},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count)}return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.BufferGeometry.MaxIndex=65535;
THREE.InstancedBufferGeometry=function(){THREE.BufferGeometry.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0};THREE.InstancedBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.InstancedBufferGeometry.prototype.constructor=THREE.InstancedBufferGeometry;THREE.InstancedBufferGeometry.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,instances:c})};
THREE.InstancedBufferGeometry.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.instances)}return this};THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype);THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};
THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(){return(new this.constructor).copy(this)};
THREE.Camera.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,1);g.lookAt(new THREE.Vector3(0,1,0));this.add(g);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,-1);f.lookAt(new THREE.Vector3(0,-1,0));
this.add(f);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,m=c.generateMipmaps;c.generateMipmaps=
!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,g,c);c.activeCubeFace=3;a.render(b,f,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=m;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;
THREE.OrthographicCamera=function(a,b,c,d,e,g){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==g?g:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)};THREE.OrthographicCamera.prototype.copy=function(a){THREE.Camera.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;return this};
THREE.OrthographicCamera.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;return a};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.zoom=1;this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,g){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=g;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var b=this.fullWidth/this.fullHeight,a=Math.tan(THREE.Math.degToRad(.5*a))*this.near,c=-a,d=b*c,b=Math.abs(b*a-d),c=Math.abs(a-c);this.projectionMatrix.makeFrustum(d+this.x*b/this.fullWidth,d+(this.x+this.width)*b/this.fullWidth,a-(this.y+this.height)*c/this.fullHeight,a-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(a,
this.aspect,this.near,this.far)};THREE.PerspectiveCamera.prototype.copy=function(a){THREE.Camera.prototype.copy.call(this,a);this.fov=a.fov;this.aspect=a.aspect;this.near=a.near;this.far=a.far;this.zoom=a.zoom;return this};THREE.PerspectiveCamera.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.fov=this.fov;a.object.aspect=this.aspect;a.object.near=this.near;a.object.far=this.far;return a};
THREE.Light=function(a){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;THREE.Light.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.color.copy(a.color);return this};THREE.AmbientLight=function(a){THREE.Light.call(this,a);this.type="AmbientLight"};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);
THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.AmbientLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();return a};
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.type="DirectionalLight";this.position.set(0,1,0);this.updateMatrix();this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=
this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;
THREE.DirectionalLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.intensity=a.intensity;this.target=a.target.clone();this.castShadow=a.castShadow;this.onlyShadow=a.onlyShadow;this.shadowCameraNear=a.shadowCameraNear;this.shadowCameraFar=a.shadowCameraFar;this.shadowCameraLeft=a.shadowCameraLeft;this.shadowCameraRight=a.shadowCameraRight;this.shadowCameraTop=a.shadowCameraTop;this.shadowCameraBottom=a.shadowCameraBottom;this.shadowCameraVisible=a.shadowCameraVisible;this.shadowBias=
a.shadowBias;this.shadowDarkness=a.shadowDarkness;this.shadowMapWidth=a.shadowMapWidth;this.shadowMapHeight=a.shadowMapHeight;return this};THREE.DirectionalLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;return a};
THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.type="HemisphereLight";this.position.set(0,1,0);this.updateMatrix();this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;THREE.HemisphereLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);this.intensity=a.intensity;return this};
THREE.HemisphereLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.groundColor=this.groundColor.getHex();a.object.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a);this.type="PointLight";this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.intensity=a.intensity;this.distance=a.distance;this.decay=a.decay;return this};THREE.PointLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;a.object.distance=this.distance;a.object.decay=this.decay;return a};
THREE.SpotLight=function(a,b,c,d,e,g){THREE.Light.call(this,a);this.type="SpotLight";this.position.set(0,1,0);this.updateMatrix();this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.decay=void 0!==g?g:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=
this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.copy=function(a){THREE.Light.prototype.copy.call(this,a);this.intensity=a.intensity;this.distance=a.distance;this.angle=a.angle;this.exponent=a.exponent;this.decay=a.decay;this.target=a.target.clone();this.castShadow=a.castShadow;this.onlyShadow=a.onlyShadow;this.shadowCameraNear=a.shadowCameraNear;this.shadowCameraFar=a.shadowCameraFar;this.shadowCameraFov=a.shadowCameraFov;this.shadowCameraVisible=a.shadowCameraVisible;this.shadowBias=a.shadowBias;this.shadowDarkness=a.shadowDarkness;
this.shadowMapWidth=a.shadowMapWidth;this.shadowMapHeight=a.shadowMapHeight;return this};THREE.SpotLight.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;a.object.distance=this.distance;a.object.angle=this.angle;a.object.exponent=this.exponent;a.object.decay=this.decay;return a};
THREE.Cache={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};THREE.Loader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a;return function(b,c,d){function e(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function g(b,g,f,h,k,l,u){var w=c+f,v,B=THREE.Loader.Handlers.get(w);null!==B?v=B.load(w):(v=new THREE.Texture,
B=a,B.setCrossOrigin(d),B.load(w,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=e(a.width),c=e(a.height),d=document.createElement("canvas");d.width=b;d.height=c;d.getContext("2d").drawImage(a,0,0,b,c);v.image=d}else v.image=a;v.needsUpdate=!0}));v.sourceFile=f;h&&(v.repeat.set(h[0],h[1]),1!==h[0]&&(v.wrapS=THREE.RepeatWrapping),1!==h[1]&&(v.wrapT=THREE.RepeatWrapping));k&&v.offset.set(k[0],k[1]);l&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},
void 0!==f[l[0]]&&(v.wrapS=f[l[0]]),void 0!==f[l[1]]&&(v.wrapT=f[l[1]]));u&&(v.anisotropy=u);b[g]=v}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}void 0===d&&void 0!==this.crossOrigin&&(d=this.crossOrigin);void 0===a&&(a=new THREE.ImageLoader);var h="MeshLambertMaterial",k={};if(b.shading){var l=b.shading.toLowerCase();"phong"===l?h="MeshPhongMaterial":"basic"===l&&(h="MeshBasicMaterial")}void 0!==b.blending&&void 0!==THREE[b.blending]&&(k.blending=THREE[b.blending]);void 0!==b.transparent&&
(k.transparent=b.transparent);void 0!==b.opacity&&1>b.opacity&&(k.transparent=!0);void 0!==b.depthTest&&(k.depthTest=b.depthTest);void 0!==b.depthWrite&&(k.depthWrite=b.depthWrite);void 0!==b.visible&&(k.visible=b.visible);void 0!==b.flipSided&&(k.side=THREE.BackSide);void 0!==b.doubleSided&&(k.side=THREE.DoubleSide);void 0!==b.wireframe&&(k.wireframe=b.wireframe);void 0!==b.vertexColors&&("face"===b.vertexColors?k.vertexColors=THREE.FaceColors:b.vertexColors&&(k.vertexColors=THREE.VertexColors));
b.colorDiffuse?k.color=f(b.colorDiffuse):b.DbgColor&&(k.color=b.DbgColor);b.colorEmissive&&(k.emissive=f(b.colorEmissive));"MeshPhongMaterial"===h&&(b.colorSpecular&&(k.specular=f(b.colorSpecular)),b.specularCoef&&(k.shininess=b.specularCoef));void 0!==b.transparency&&(console.warn("THREE.Loader: transparency has been renamed to opacity"),b.opacity=b.transparency);void 0!==b.opacity&&(k.opacity=b.opacity);c&&(b.mapDiffuse&&g(k,"map",b.mapDiffuse,b.mapDiffuseRepeat,b.mapDiffuseOffset,b.mapDiffuseWrap,
b.mapDiffuseAnisotropy),b.mapLight&&g(k,"lightMap",b.mapLight,b.mapLightRepeat,b.mapLightOffset,b.mapLightWrap,b.mapLightAnisotropy),b.mapAO&&g(k,"aoMap",b.mapAO,b.mapAORepeat,b.mapAOOffset,b.mapAOWrap,b.mapAOAnisotropy),b.mapBump&&g(k,"bumpMap",b.mapBump,b.mapBumpRepeat,b.mapBumpOffset,b.mapBumpWrap,b.mapBumpAnisotropy),b.mapNormal&&g(k,"normalMap",b.mapNormal,b.mapNormalRepeat,b.mapNormalOffset,b.mapNormalWrap,b.mapNormalAnisotropy),b.mapSpecular&&g(k,"specularMap",b.mapSpecular,b.mapSpecularRepeat,
b.mapSpecularOffset,b.mapSpecularWrap,b.mapSpecularAnisotropy),b.mapAlpha&&g(k,"alphaMap",b.mapAlpha,b.mapAlphaRepeat,b.mapAlphaOffset,b.mapAlphaWrap,b.mapAlphaAnisotropy));b.mapBumpScale&&(k.bumpScale=b.mapBumpScale);b.mapNormalFactor&&(k.normalScale=new THREE.Vector2(b.mapNormalFactor,b.mapNormalFactor));h=new THREE[h](k);void 0!==b.DbgName&&(h.name=b.DbgName);return h}}()};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,g=THREE.Cache.get(a);if(void 0!==g)return b&&setTimeout(function(){b(g)},0),g;var f=new XMLHttpRequest;f.open("GET",a,!0);f.addEventListener("load",function(c){THREE.Cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);f.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=
this.crossOrigin);void 0!==this.responseType&&(f.responseType=this.responseType);void 0!==this.withCredentials&&(f.withCredentials=this.withCredentials);f.send(null);e.manager.itemStart(a);return f},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a},setWithCredentials:function(a){this.withCredentials=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,g=THREE.Cache.get(a);if(void 0!==g)return b&&setTimeout(function(){b(g)},0),g;var f=document.createElement("img");f.addEventListener("load",function(c){THREE.Cache.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);f.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);
e.manager.itemStart(a);f.src=a;return f},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.JSONLoader=function(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.withCredentials=!1};
THREE.JSONLoader.prototype={constructor:THREE.JSONLoader,get statusDomElement(){void 0===this._statusDomElement&&(this._statusDomElement=document.createElement("div"));console.warn("THREE.JSONLoader: .statusDomElement has been removed.");return this._statusDomElement},load:function(a,b,c,d){var e=this,g=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:THREE.Loader.prototype.extractUrlBase(a);c=new THREE.XHRLoader(this.manager);c.setCrossOrigin(this.crossOrigin);c.setWithCredentials(this.withCredentials);
c.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d){if("object"===d.type){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.type){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,g);b(c.geometry,c.materials)})},setCrossOrigin:function(a){this.crossOrigin=a},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){var c=new THREE.Geometry,d=void 0!==
a.scale?1/a.scale:1;(function(b){var d,f,h,k,l,n,p,m,q,t,r,u,w,v=a.faces;n=a.vertices;var B=a.normals,x=a.colors,H=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&H++;for(d=0;d<H;d++)c.faceVertexUvs[d]=[]}k=0;for(l=n.length;k<l;)d=new THREE.Vector3,d.x=n[k++]*b,d.y=n[k++]*b,d.z=n[k++]*b,c.vertices.push(d);k=0;for(l=v.length;k<l;)if(b=v[k++],q=b&1,h=b&2,d=b&8,p=b&16,t=b&32,n=b&64,b&=128,q){q=new THREE.Face3;q.a=v[k];q.b=v[k+1];q.c=v[k+3];r=new THREE.Face3;r.a=v[k+1];r.b=v[k+2];r.c=
v[k+3];k+=4;h&&(h=v[k++],q.materialIndex=h,r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<H;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],f=0;4>f;f++)m=v[k++],w=u[2*m],m=u[2*m+1],w=new THREE.Vector2(w,m),2!==f&&c.faceVertexUvs[d][h].push(w),0!==f&&c.faceVertexUvs[d][h+1].push(w);p&&(p=3*v[k++],q.normal.set(B[p++],B[p++],B[p]),r.normal.copy(q.normal));if(t)for(d=0;4>d;d++)p=3*v[k++],t=new THREE.Vector3(B[p++],B[p++],B[p]),2!==d&&q.vertexNormals.push(t),0!==d&&r.vertexNormals.push(t);
n&&(n=v[k++],n=x[n],q.color.setHex(n),r.color.setHex(n));if(b)for(d=0;4>d;d++)n=v[k++],n=x[n],2!==d&&q.vertexColors.push(new THREE.Color(n)),0!==d&&r.vertexColors.push(new THREE.Color(n));c.faces.push(q);c.faces.push(r)}else{q=new THREE.Face3;q.a=v[k++];q.b=v[k++];q.c=v[k++];h&&(h=v[k++],q.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<H;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],f=0;3>f;f++)m=v[k++],w=u[2*m],m=u[2*m+1],w=new THREE.Vector2(w,m),c.faceVertexUvs[d][h].push(w);p&&(p=3*v[k++],q.normal.set(B[p++],
B[p++],B[p]));if(t)for(d=0;3>d;d++)p=3*v[k++],t=new THREE.Vector3(B[p++],B[p++],B[p]),q.vertexNormals.push(t);n&&(n=v[k++],q.color.setHex(x[n]));if(b)for(d=0;3>d;d++)n=v[k++],q.vertexColors.push(new THREE.Color(x[n]));c.faces.push(q)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,f=a.skinWeights.length;d<f;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:
0));if(a.skinIndices)for(d=0,f=a.skinIndices.length;d<f;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=
a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,f,h,k,l,n;d=0;for(f=a.morphTargets.length;d<f;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,n=a.morphTargets[d].vertices,h=0,k=n.length;h<k;h+=3){var p=new THREE.Vector3;p.x=n[h]*b;p.y=n[h+1]*b;p.z=n[h+2]*b;l.push(p)}}if(void 0!==a.morphColors)for(d=0,f=a.morphColors.length;d<f;d++)for(c.morphColors[d]={},c.morphColors[d].name=
a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)n=new THREE.Color(16755200),n.setRGB(l[b],l[b+1],l[b+2]),k.push(n)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=THREE.Loader.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}};
THREE.LoadingManager=function(a,b,c){var d=this,e=!1,g=0,f=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++;if(!1===e&&void 0!==d.onStart)d.onStart(a,g,f);e=!0};this.itemEnd=function(a){g++;if(void 0!==d.onProgress)d.onProgress(a,g,f);if(g===f&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}};THREE.DefaultLoadingManager=new THREE.LoadingManager;
THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,g=new THREE.XHRLoader(e.manager);g.setCrossOrigin(this.crossOrigin);g.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.data.index;void 0!==c&&(c=new self[c.type](c.array),b.setIndex(new THREE.BufferAttribute(c,1)));var d=a.data.attributes,e;for(e in d){var g=d[e],c=new self[g.type](g.array);
b.addAttribute(e,new THREE.BufferAttribute(c,g.itemSize))}e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,d=e.length;c!==d;++c)g=e[c],b.addGroup(g.start,g.count);a=a.data.boundingSphere;void 0!==a&&(e=new THREE.Vector3,void 0!==a.center&&e.fromArray(a.center),b.boundingSphere=new THREE.Sphere(e,a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.textures={}};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,g=new THREE.XHRLoader(e.manager);g.setCrossOrigin(this.crossOrigin);g.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},setTextures:function(a){this.textures=a},getTexture:function(a){var b=this.textures;void 0===b[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return b[a]},parse:function(a){var b=new THREE[a.type];b.uuid=a.uuid;void 0!==
a.name&&(b.name=a.name);void 0!==a.color&&b.color.setHex(a.color);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);void 0!==a.blending&&
(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.alphaTest&&(b.alphaTest=a.alphaTest);void 0!==a.depthTest&&(b.depthTest=a.depthTest);void 0!==a.depthWrite&&(b.depthWrite=a.depthWrite);void 0!==a.wireframe&&(b.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(b.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.size&&(b.size=a.size);void 0!==a.sizeAttenuation&&(b.sizeAttenuation=
a.sizeAttenuation);void 0!==a.map&&(b.map=this.getTexture(a.map));void 0!==a.alphaMap&&(b.alphaMap=this.getTexture(a.alphaMap),b.transparent=!0);void 0!==a.bumpMap&&(b.bumpMap=this.getTexture(a.bumpMap));void 0!==a.bumpScale&&(b.bumpScale=a.bumpScale);void 0!==a.normalMap&&(b.normalMap=this.getTexture(a.normalMap));a.normalScale&&(b.normalScale=new THREE.Vector2(a.normalScale,a.normalScale));void 0!==a.displacementMap&&(b.displacementMap=this.getTexture(a.displacementMap));void 0!==a.displacementScale&&
(b.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(b.displacementBias=a.displacementBias);void 0!==a.specularMap&&(b.specularMap=this.getTexture(a.specularMap));void 0!==a.envMap&&(b.envMap=this.getTexture(a.envMap),b.combine=THREE.MultiplyOperation);a.reflectivity&&(b.reflectivity=a.reflectivity);void 0!==a.lightMap&&(b.lightMap=this.getTexture(a.lightMap));void 0!==a.lightMapIntensity&&(b.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(b.aoMap=this.getTexture(a.aoMap));
void 0!==a.aoMapIntensity&&(b.aoMapIntensity=a.aoMapIntensity);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.texturePath=""};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this,g=new THREE.XHRLoader(e.manager);g.setCrossOrigin(this.crossOrigin);g.load(a,function(a){e.parse(JSON.parse(a),b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),
d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,e=0,g=a.length;e<g;e++){var f,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":f=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":f=
new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleBufferGeometry":f=new THREE.CircleBufferGeometry(h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CircleGeometry":f=new THREE.CircleGeometry(h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":f=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "SphereGeometry":f=
new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "SphereBufferGeometry":f=new THREE.SphereBufferGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":f=new THREE.DodecahedronGeometry(h.radius,h.detail);break;case "IcosahedronGeometry":f=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "OctahedronGeometry":f=new THREE.OctahedronGeometry(h.radius,
h.detail);break;case "TetrahedronGeometry":f=new THREE.TetrahedronGeometry(h.radius,h.detail);break;case "RingGeometry":f=new THREE.RingGeometry(h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":f=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":f=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "TextGeometry":f=
new THREE.TextGeometry(h.text,h.data);break;case "BufferGeometry":f=d.parse(h);break;case "Geometry":f=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue}f.uuid=h.uuid;void 0!==h.name&&(f.name=h.name);b[h.uuid]=f}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new THREE.MaterialLoader;d.setTextures(b);for(var e=0,g=a.length;e<g;e++){var f=d.parse(a[e]);c[f.uuid]=f}}return c},parseImages:function(a,
b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&0<a.length){var g=new THREE.LoadingManager(b),f=new THREE.ImageLoader(g);f.setCrossOrigin(this.crossOrigin);for(var g=0,h=a.length;g<h;g++){var k=a[g],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?k.url:d.texturePath+k.url;e[k.uuid]=c(l)}}return e},parseTextures:function(a,b){function c(a){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",
a);return THREE[a]}var d={};if(void 0!==a)for(var e=0,g=a.length;e<g;e++){var f=a[e];void 0===f.image&&console.warn('THREE.ObjectLoader: No "image" specified for',f.uuid);void 0===b[f.image]&&console.warn("THREE.ObjectLoader: Undefined image",f.image);var h=new THREE.Texture(b[f.image]);h.needsUpdate=!0;h.uuid=f.uuid;void 0!==f.name&&(h.name=f.name);void 0!==f.mapping&&(h.mapping=c(f.mapping));void 0!==f.offset&&(h.offset=new THREE.Vector2(f.offset[0],f.offset[1]));void 0!==f.repeat&&(h.repeat=new THREE.Vector2(f.repeat[0],
f.repeat[1]));void 0!==f.minFilter&&(h.minFilter=c(f.minFilter));void 0!==f.magFilter&&(h.magFilter=c(f.magFilter));void 0!==f.anisotropy&&(h.anisotropy=f.anisotropy);Array.isArray(f.wrap)&&(h.wrapS=c(f.wrap[0]),h.wrapT=c(f.wrap[1]));d[f.uuid]=h}return d},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;e=function(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]};var g=function(a){void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",
a);return d[a]};switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":e=
new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent,b.decay);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":e=new THREE.Mesh(e(b.geometry),g(b.material));break;case "LOD":e=new THREE.LOD;break;case "Line":e=new THREE.Line(e(b.geometry),g(b.material),b.mode);break;case "PointCloud":case "Points":e=new THREE.Points(e(b.geometry),g(b.material));break;case "Sprite":e=new THREE.Sprite(g(b.material));break;case "Group":e=new THREE.Group;
break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.castShadow&&(e.castShadow=b.castShadow);void 0!==b.receiveShadow&&(e.receiveShadow=b.receiveShadow);void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=
b.userData);if(void 0!==b.children)for(var f in b.children)e.add(this.parseObject(b.children[f],c,d));if("LOD"===b.type)for(b=b.levels,g=0;g<b.length;g++){var h=b[g];f=e.getObjectByProperty("uuid",h.object);void 0!==f&&e.addLevel(f,h.distance)}return e}}()};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null};
THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,g=new THREE.DataTexture,f=new THREE.XHRLoader(this.manager);f.setCrossOrigin(this.crossOrigin);f.setResponseType("arraybuffer");f.load(a,function(a){if(a=e._parser(a))void 0!==a.image?g.image=a.image:void 0!==a.data&&(g.image.width=a.width,g.image.height=a.height,g.image.data=a.data),g.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,g.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,
g.magFilter=void 0!==a.magFilter?a.magFilter:THREE.LinearFilter,g.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,g.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(g.format=a.format),void 0!==a.type&&(g.type=a.type),void 0!==a.mipmaps&&(g.mipmaps=a.mipmaps),1===a.mipmapCount&&(g.minFilter=THREE.LinearFilter),g.needsUpdate=!0,b&&b(g,a)},c,d);return g},setCrossOrigin:function(a){this.crossOrigin=a}};
THREE.CompressedTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c,d){var e=this,g=[],f=new THREE.CompressedTexture;f.image=g;var h=new THREE.XHRLoader(this.manager);h.setCrossOrigin(this.crossOrigin);h.setResponseType("arraybuffer");if(Array.isArray(a))for(var k=0,l=function(m){h.load(a[m],function(a){a=e._parser(a,!0);g[m]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.format=
a.format,f.needsUpdate=!0,b&&b(f))},c,d)},n=0,p=a.length;n<p;++n)l(n);else h.load(a,function(a){a=e._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var h=0;h<a.mipmapCount;h++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+h]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else f.image.width=a.width,f.image.height=a.height,f.mipmaps=a.mipmaps;1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter);f.format=a.format;f.needsUpdate=!0;b&&
b(f)},c,d);return f},setCrossOrigin:function(a){this.crossOrigin=a}};
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=THREE.LessEqualDepth;this.colorWrite=this.depthWrite=
this.depthTest=!0;this.precision=null;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this._needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):
this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){var b={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};b.uuid=this.uuid;b.type=this.type;""!==this.name&&(b.name=this.name);this.color instanceof THREE.Color&&(b.color=this.color.getHex());this.emissive instanceof THREE.Color&&(b.emissive=this.emissive.getHex());this.specular instanceof THREE.Color&&(b.specular=this.specular.getHex());void 0!==this.shininess&&(b.shininess=this.shininess);this.map instanceof THREE.Texture&&
(b.map=this.map.toJSON(a).uuid);this.alphaMap instanceof THREE.Texture&&(b.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap instanceof THREE.Texture&&(b.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap instanceof THREE.Texture&&(b.bumpMap=this.bumpMap.toJSON(a).uuid,b.bumpScale=this.bumpScale);this.normalMap instanceof THREE.Texture&&(b.normalMap=this.normalMap.toJSON(a).uuid,b.normalScale=this.normalScale);this.displacementMap instanceof THREE.Texture&&(b.displacementMap=this.displacementMap.toJSON(a).uuid,
b.displacementScale=this.displacementScale,b.displacementBias=this.displacementBias);this.specularMap instanceof THREE.Texture&&(b.specularMap=this.specularMap.toJSON(a).uuid);this.envMap instanceof THREE.Texture&&(b.envMap=this.envMap.toJSON(a).uuid,b.reflectivity=this.reflectivity);void 0!==this.size&&(b.size=this.size);void 0!==this.sizeAttenuation&&(b.sizeAttenuation=this.sizeAttenuation);void 0!==this.vertexColors&&this.vertexColors!==THREE.NoColors&&(b.vertexColors=this.vertexColors);void 0!==
this.shading&&this.shading!==THREE.SmoothShading&&(b.shading=this.shading);void 0!==this.blending&&this.blending!==THREE.NormalBlending&&(b.blending=this.blending);void 0!==this.side&&this.side!==THREE.FrontSide&&(b.side=this.side);1>this.opacity&&(b.opacity=this.opacity);!0===this.transparent&&(b.transparent=this.transparent);0<this.alphaTest&&(b.alphaTest=this.alphaTest);!0===this.wireframe&&(b.wireframe=this.wireframe);1<this.wireframeLinewidth&&(b.wireframeLinewidth=this.wireframeLinewidth);return b},
clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.side=a.side;this.opacity=a.opacity;this.transparent=a.transparent;this.blending=a.blending;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.precision=a.precision;this.polygonOffset=
a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.overdraw=a.overdraw;this.visible=a.visible;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})},get wrapAround(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set wrapAround(a){console.warn("THREE."+this.type+": .wrapAround has been removed.")},get wrapRGB(){console.warn("THREE."+
this.type+": .wrapRGB has been removed.");return new THREE.Color}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;THREE.LineBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};
THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.aoMap=this.map=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=
!1;this.setValues(a)};THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;
this.wireframeLinejoin=a.wireframeLinejoin;this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.envMap=this.alphaMap=this.specularMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.emissive.copy(a.emissive);this.map=a.map;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;
this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=
0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.emissive.copy(a.emissive);this.specular.copy(a.specular);this.shininess=a.shininess;this.metal=a.metal;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissiveMap=a.emissiveMap;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);
this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.fog=a.fog;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.vertexColors=
a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;
THREE.MeshNormalMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};THREE.MultiMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MultiMaterial";this.materials=a instanceof Array?a:[];this.visible=!0};
THREE.MultiMaterial.prototype={constructor:THREE.MultiMaterial,toJSON:function(){for(var a={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},b=0,c=this.materials.length;b<c;b++)a.materials.push(this.materials[b].toJSON());a.visible=this.visible;return a},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());a.visible=this.visible;return a}};THREE.MeshFaceMaterial=THREE.MultiMaterial;
THREE.PointsMaterial=function(a){THREE.Material.call(this);this.type="PointsMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointsMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointsMaterial.prototype.constructor=THREE.PointsMaterial;
THREE.PointsMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;this.vertexColors=a.vertexColors;this.fog=a.fog;return this};THREE.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)};
THREE.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)};THREE.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.derivatives=this.morphNormals=
this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=THREE.UniformsUtils.clone(a.uniforms);this.attributes=a.attributes;this.defines=a.defines;this.shading=a.shading;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.fog=a.fog;this.lights=a.lights;this.vertexColors=a.vertexColors;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=
a.morphNormals;this.derivatives=a.derivatives;return this};THREE.ShaderMaterial.prototype.toJSON=function(a){a=THREE.Material.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.attributes=this.attributes;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);
THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;this.fog=a.fog;return this};
THREE.Texture=function(a,b,c,d,e,g,f,h,k){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==g?g:THREE.LinearMipMapLinearFilter;
this.anisotropy=void 0!==k?k:1;this.format=void 0!==f?f:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.version=0;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,set needsUpdate(a){!0===a&&this.version++},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=
a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy};if(void 0!==this.image){var c=
this.image;void 0===c.uuid&&(c.uuid=THREE.Math.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,g=c.uuid,f;void 0!==c.toDataURL?f=c:(f=document.createElement("canvas"),f.width=c.width,f.height=c.height,f.getContext("2d").drawImage(c,0,0,c.width,c.height));f=2048<f.width||2048<f.height?f.toDataURL("image/jpeg",.6):f.toDataURL("image/png");d[e]={uuid:g,url:f}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(this.mapping===
THREE.UVMapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case THREE.RepeatWrapping:a.x-=Math.floor(a.x);break;case THREE.ClampToEdgeWrapping:a.x=0>a.x?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.x)%2)?a.x=Math.ceil(a.x)-a.x:a.x-=Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case THREE.RepeatWrapping:a.y-=Math.floor(a.y);break;case THREE.ClampToEdgeWrapping:a.y=0>a.y?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.y)%
2)?a.y=Math.ceil(a.y)-a.y:a.y-=Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CanvasTexture=function(a,b,c,d,e,g,f,h,k){THREE.Texture.call(this,a,b,c,d,e,g,f,h,k);this.needsUpdate=!0};THREE.CanvasTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CanvasTexture.prototype.constructor=THREE.CanvasTexture;
THREE.CubeTexture=function(a,b,c,d,e,g,f,h,k){b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,g,f,h,k);this.images=a;this.flipY=!1};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.prototype.copy=function(a){THREE.Texture.prototype.copy.call(this,a);this.images=a.images;return this};
THREE.CompressedTexture=function(a,b,c,d,e,g,f,h,k,l,n){THREE.Texture.call(this,null,g,f,h,k,l,d,e,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;
THREE.DataTexture=function(a,b,c,d,e,g,f,h,k,l,n){THREE.Texture.call(this,null,g,f,h,k,l,d,e,n);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:THREE.NearestFilter;this.minFilter=void 0!==l?l:THREE.NearestFilter;this.generateMipmaps=this.flipY=!1};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;
THREE.VideoTexture=function(a,b,c,d,e,g,f,h,k){THREE.Texture.call(this,a,b,c,d,e,g,f,h,k);this.generateMipmaps=!1;var l=this,n=function(){requestAnimationFrame(n);a.readyState===a.HAVE_ENOUGH_DATA&&(l.needsUpdate=!0)};n()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;THREE.Group=function(){THREE.Object3D.call(this);this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);
THREE.Group.prototype.constructor=THREE.Group;THREE.Points=function(a,b){THREE.Object3D.call(this);this.type="Points";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointsMaterial({color:16777215*Math.random()})};THREE.Points.prototype=Object.create(THREE.Object3D.prototype);THREE.Points.prototype.constructor=THREE.Points;
THREE.Points.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){function e(a,e){var f=b.distanceSqToPoint(a);if(f<k){var h=b.closestPointToPoint(a);h.applyMatrix4(g.matrixWorld);var l=c.ray.origin.distanceTo(h);l<c.near||l>c.far||d.push({distance:l,distanceToRay:Math.sqrt(f),point:h.clone(),index:e,face:null,object:g})}}var g=this,f=g.geometry,h=c.params.Points.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==
b.isIntersectionBox(f.boundingBox)){var h=h/((this.scale.x+this.scale.y+this.scale.z)/3),k=h*h,h=new THREE.Vector3;if(f instanceof THREE.BufferGeometry){var l=f.index,f=f.attributes.position.array;if(null!==l)for(var n=l.array,l=0,p=n.length;l<p;l++){var m=n[l];h.fromArray(f,3*m);e(h,m)}else for(l=0,n=f.length/3;l<n;l++)h.fromArray(f,3*l),e(h,l)}else for(h=f.vertices,l=0,n=h.length;l<n;l++)e(h[l],l)}}}();THREE.Points.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};
THREE.Points.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON());void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON());b.object.geometry=this.geometry.uuid;b.object.material=this.material.uuid;return b};
THREE.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new THREE.Points(a,b)};THREE.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new THREE.Points(a,b)};
THREE.Line=function(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new THREE.LineSegments(a,b);THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()})};THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var g=d.linePrecision,g=g*g,f=this.geometry;null===f.boundingSphere&&f.computeBoundingSphere();c.copy(f.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)){a.getInverse(this.matrixWorld);b.copy(d.ray).applyMatrix4(a);var h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,n=new THREE.Vector3,p=this instanceof THREE.LineSegments?2:1;if(f instanceof
THREE.BufferGeometry){var m=f.index,q=f.attributes;if(null!==m)for(var f=m.array,q=q.position.array,m=0,t=f.length-1;m<t;m+=p){var r=f[m+1];h.fromArray(q,3*f[m]);k.fromArray(q,3*r);r=b.distanceSqToSegment(h,k,n,l);r>g||(n.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(n),r<d.near||r>d.far||e.push({distance:r,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this}))}else for(q=q.position.array,m=0,t=q.length/3-1;m<t;m+=p)h.fromArray(q,3*m),k.fromArray(q,
3*m+3),r=b.distanceSqToSegment(h,k,n,l),r>g||(n.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(n),r<d.near||r>d.far||e.push({distance:r,point:l.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this}))}else if(f instanceof THREE.Geometry)for(h=f.vertices,k=h.length,m=0;m<k-1;m+=p)r=b.distanceSqToSegment(h[m],h[m+1],n,l),r>g||(n.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(n),r<d.near||r>d.far||e.push({distance:r,point:l.clone().applyMatrix4(this.matrixWorld),
index:m,face:null,faceIndex:null,object:this}))}}}();THREE.Line.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};
THREE.Line.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON());void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON());b.object.geometry=this.geometry.uuid;b.object.material=this.material.uuid;return b};THREE.LineStrip=0;THREE.LinePieces=1;THREE.LineSegments=function(a,b){THREE.Line.call(this,a,b);this.type="LineSegments"};
THREE.LineSegments.prototype=Object.create(THREE.Line.prototype);THREE.LineSegments.prototype.constructor=THREE.LineSegments;THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);THREE.Mesh.prototype.constructor=THREE.Mesh;
THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){function a(a,b,c,d,e,f,g){THREE.Triangle.barycoordFromPoint(a,b,c,d,q);e.multiplyScalar(q.x);f.multiplyScalar(q.y);g.multiplyScalar(q.z);e.add(f).add(g);return e.clone()}var b=new THREE.Matrix4,c=new THREE.Ray,d=new THREE.Sphere,e=new THREE.Vector3,g=new THREE.Vector3,f=new THREE.Vector3,h=new THREE.Vector3,k=new THREE.Vector3,l=new THREE.Vector3,n=new THREE.Vector2,p=new THREE.Vector2,m=new THREE.Vector2,q=new THREE.Vector3,t=new THREE.Vector3,r=new THREE.Vector3;
return function(q,w){var v=this.geometry,B=this.material;if(void 0!==B&&(null===v.boundingSphere&&v.computeBoundingSphere(),d.copy(v.boundingSphere),d.applyMatrix4(this.matrixWorld),!1!==q.ray.isIntersectionSphere(d)&&(b.getInverse(this.matrixWorld),c.copy(q.ray).applyMatrix4(b),null===v.boundingBox||!1!==c.isIntersectionBox(v.boundingBox)))){var x,H,I;if(v instanceof THREE.BufferGeometry)if(x=v.index,v=v.attributes,null!==x)for(var z=x.array,D=v.position.array,G=0,O=z.length;G<O;G+=3){x=z[G];H=z[G+
1];I=z[G+2];e.fromArray(D,3*x);g.fromArray(D,3*H);f.fromArray(D,3*I);if(B.side===THREE.BackSide){if(null===c.intersectTriangle(f,g,e,!0,t))continue}else if(null===c.intersectTriangle(e,g,f,B.side!==THREE.DoubleSide,t))continue;r.copy(t);r.applyMatrix4(this.matrixWorld);var C=q.ray.origin.distanceTo(r);if(!(C<q.near||C>q.far)){var F;void 0!==v.uv&&(F=v.uv.array,n.fromArray(F,2*x),p.fromArray(F,2*H),m.fromArray(F,2*I),F=a(t,e,g,f,n,p,m));w.push({distance:C,point:r.clone(),uv:F,face:new THREE.Face3(x,
H,I,THREE.Triangle.normal(e,g,f)),faceIndex:Math.floor(G/3),object:this})}}else for(D=v.position.array,G=0,O=D.length;G<O;G+=9){e.fromArray(D,G);g.fromArray(D,G+3);f.fromArray(D,G+6);if(B.side===THREE.BackSide){if(null===c.intersectTriangle(f,g,e,!0,t))continue}else if(null===c.intersectTriangle(e,g,f,B.side!==THREE.DoubleSide,t))continue;r.copy(t);r.applyMatrix4(this.matrixWorld);C=q.ray.origin.distanceTo(r);C<q.near||C>q.far||(void 0!==v.uv&&(F=v.uv.array,n.fromArray(F,G),p.fromArray(F,G+2),m.fromArray(F,
G+4),F=a(t,e,g,f,n,p,m)),x=G/3,H=x+1,I=x+2,w.push({distance:C,point:r.clone(),uv:F,face:new THREE.Face3(x,H,I,THREE.Triangle.normal(e,g,f)),index:x,object:this}))}else if(v instanceof THREE.Geometry)for(var z=B instanceof THREE.MeshFaceMaterial,D=!0===z?B.materials:null,G=v.vertices,O=v.faces,K=0,L=O.length;K<L;K++){var E=O[K],C=!0===z?D[E.materialIndex]:B;if(void 0!==C){x=G[E.a];H=G[E.b];I=G[E.c];if(!0===C.morphTargets){var J=v.morphTargets,y=this.morphTargetInfluences;e.set(0,0,0);g.set(0,0,0);
f.set(0,0,0);for(var P=0,U=J.length;P<U;P++){var Q=y[P];if(0!==Q){var R=J[P].vertices;e.addScaledVector(h.subVectors(R[E.a],x),Q);g.addScaledVector(k.subVectors(R[E.b],H),Q);f.addScaledVector(l.subVectors(R[E.c],I),Q)}}e.add(x);g.add(H);f.add(I);x=e;H=g;I=f}if(C.side===THREE.BackSide){if(null===c.intersectTriangle(I,H,x,!0,t))continue}else if(null===c.intersectTriangle(x,H,I,C.side!==THREE.DoubleSide,t))continue;r.copy(t);r.applyMatrix4(this.matrixWorld);C=q.ray.origin.distanceTo(r);C<q.near||C>q.far||
(0<v.faceVertexUvs[0].length&&(F=v.faceVertexUvs[0][K],n.copy(F[0]),p.copy(F[1]),m.copy(F[2]),F=a(t,x,H,I,n,p,m)),w.push({distance:C,point:r.clone(),uv:F,face:E,faceIndex:K,object:this}))}}}}}();THREE.Mesh.prototype.clone=function(){return(new this.constructor(this.geometry,this.material)).copy(this)};
THREE.Mesh.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a));void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a));b.object.geometry=this.geometry.uuid;b.object.material=this.material.uuid;return b};THREE.Bone=function(a){THREE.Object3D.call(this);this.type="Bone";this.skin=a};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.skin=a.skin;return this};
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=THREE.Math.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)):
this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.Skeleton.prototype.clone=function(){return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,g=this.geometry.bones.length;e<g;++e)d=this.geometry.bones[e],b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);e=0;for(g=this.geometry.bones.length;e<g;++e)d=
this.geometry.bones[e],-1!==d.parent?a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c),this.matrixWorld)};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};
THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)};THREE.SkinnedMesh.prototype.clone=function(){return(new this.constructor(this.geometry,this.material,this.useVertexTexture)).copy(this)};
THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.type="MorphAnimMesh";this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,a.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh;
THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,g=a.morphTargets.length;e<g;e++){var f=a.morphTargets[e].name.match(d);if(f&&1<f.length){f=f[1];c[f]||(c[f]={start:Infinity,end:-Infinity});var h=c[f];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=f)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):console.warn("THREE.MorphAnimMesh: animation["+a+"] undefined in .playAnimation()")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);var c=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a=this.morphTargetInfluences;
c!==this.currentKeyframe&&(a[this.lastKeyframe]=0,a[this.currentKeyframe]=1,a[c]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=c);b=this.time%b/b;this.directionBackwards&&(b=1-b);a[this.currentKeyframe]=b;a[this.lastKeyframe]=1-b};THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,g=d.length;e<g;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.copy=function(a){THREE.Mesh.prototype.copy.call(this,a);this.duration=a.duration;this.mirroredLoop=a.mirroredLoop;this.time=a.time;this.lastKeyframe=a.lastKeyframe;this.currentKeyframe=a.currentKeyframe;this.direction=a.direction;this.directionBackwards=a.directionBackwards;return this};
THREE.LOD=function(){THREE.Object3D.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]},objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}})};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.constructor=THREE.LOD;
THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,g=d.length;e<g;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<g;e++)d[e].object.visible=!1}}}();
THREE.LOD.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this};THREE.LOD.prototype.toJSON=function(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a};
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;d.setIndex(new THREE.BufferAttribute(a,1));d.addAttribute("position",new THREE.BufferAttribute(b,3));d.addAttribute("uv",new THREE.BufferAttribute(c,2));return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=d;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y||c.push({distance:Math.sqrt(d),point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.clone=function(){return(new this.constructor(this.material)).copy(this)};
THREE.Sprite.prototype.toJSON=function(a){var b=THREE.Object3D.prototype.toJSON.call(this,a);void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON());b.object.material=this.material.uuid;return b};THREE.Particle=THREE.Sprite;THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.constructor=THREE.LensFlare;THREE.LensFlare.prototype.add=function(a,b,c,d,e,g){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===g&&(g=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:g,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)};
THREE.LensFlare.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=null;this.autoUpdate=!0};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);THREE.Scene.prototype.constructor=THREE.Scene;
THREE.Scene.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};
THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.ShaderChunk={};THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n";
THREE.ShaderChunk.aomap_fragment="#ifdef USE_AOMAP\n\n\ttotalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n";THREE.ShaderChunk.aomap_pars_fragment="#ifdef USE_AOMAP\n\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n\n#endif";THREE.ShaderChunk.begin_vertex="\nvec3 transformed = vec3( position );\n";THREE.ShaderChunk.beginnormal_vertex="\nvec3 objectNormal = vec3( normal );\n";THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\tvColor.xyz = color.xyz;\n\n#endif";THREE.ShaderChunk.common="#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\n\treturn - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n\tif ( decayExponent > 0.0 ) {\n\n\t  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n\t}\n\n\treturn 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n\t// Original approximation by Christophe Schlick '94\n\t//;float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n\t// Optimized variant (presented by Epic at SIGGRAPH '13)\n\tfloat fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n\t// geometry term is (n\u22c5l)(n\u22c5v) / 4(n\u22c5l)(n\u22c5v)\n\n\treturn 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n\t// factor of 1/PI in distribution term omitted\n\n\treturn ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\n\t//float dotNL = saturate( dot( normal, lightDir ) );\n\t//float dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( lightDir, halfDir ) );\n\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\n\tfloat G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\n\treturn F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n\t#ifdef GAMMA_INPUT\n\n\t\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n\t#else\n\n\t\treturn a;\n\n\t#endif\n\n}\n";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.displacementmap_vertex="#ifdef USE_DISPLACEMENTMAP\n\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n";THREE.ShaderChunk.displacementmap_pars_vertex="#ifdef USE_DISPLACEMENTMAP\n\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n\n#endif\n";
THREE.ShaderChunk.emissivemap_fragment="#ifdef USE_EMISSIVEMAP\n\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n\temissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n\ttotalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n";THREE.ShaderChunk.emissivemap_pars_fragment="#ifdef USE_EMISSIVEMAP\n\n\tuniform sampler2D emissiveMap;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\ttotalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n\n#endif";
THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n";
THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\t// attenuation\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec3 lVector = lightPosition - mvPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\t\t\t// attenuation\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\t\tvLightFront += lightColor * attenuation * saturate( dotProduct );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = directionalLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tvLightFront += lightColor * saturate( dotProduct );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += lightColor * saturate( - dotProduct );\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = hemisphereLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tfloat hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_fragment="#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = pointLightColor[ i ];\n\n\t\tvec3 lightPosition = pointLightPosition[ i ];\n\t\tvec3 lVector = lightPosition + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\t// attenuation\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\t// diffuse\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\t\t// specular\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = spotLightColor[ i ];\n\n\t\tvec3 lightPosition = spotLightPosition[ i ];\n\t\tvec3 lVector = lightPosition + vViewPosition.xyz;\n\t\tvec3 lightDir = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\t\t\t// attenuation\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tattenuation *= spotEffect;\n\n\t\t\t// diffuse\n\n\t\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\t\ttotalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\t\t\t// specular\n\n\t\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\t\ttotalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 lightColor = directionalLightColor[ i ];\n\n\t\tvec3 lightDir = directionalLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat cosineTerm = saturate( dot( normal, lightDir ) );\n\n\t\ttotalDiffuseLight += lightColor * cosineTerm;\n\n\t\t// specular\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lightDir = hemisphereLightDirection[ i ];\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lightDir );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += lightColor;\n\n\t\t// specular (sky term only)\n\n\t\tvec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n\t\ttotalSpecularLight += brdf * specularStrength * lightColor * max( dotProduct, 0.0 );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="\n\toutgoingLight = linearToOutput( outgoingLight );\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif\n";THREE.ShaderChunk.map_pars_fragment="#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n";
THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.project_vertex="#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t#endif\n\n\t}\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.uv2_pars_fragment="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvarying vec2 vUv2;\n\n#endif";
THREE.ShaderChunk.uv2_pars_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.uv2_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n\tvUv2 = uv2;\n\n#endif";THREE.ShaderChunk.uv_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\n#endif";
THREE.ShaderChunk.uv_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.uv_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n\t#endif\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix3||e instanceof THREE.Matrix4||e instanceof THREE.Texture?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98}},aomap:{aoMap:{type:"t",value:null},aoMapIntensity:{type:"f",value:1}},lightmap:{lightMap:{type:"t",value:null},lightMapIntensity:{type:"f",
value:1}},emissivemap:{emissiveMap:{type:"t",value:null}},bumpmap:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},displacementmap:{displacementMap:{type:"t",value:null},displacementScale:{type:"f",value:1},displacementBias:{type:"f",value:0}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},
lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},pointLightDecay:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},
spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]},spotLightDecay:{type:"fv1",value:[]}},points:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},
fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tvec3 totalAmbientLight = vec3( 1.0 );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.aomap_fragment,"\toutgoingLight = diffuseColor.rgb * totalAmbientLight;",
THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",value:new THREE.Color(0)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.beginnormal_vertex,
THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",
THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t\telse\n\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;\n\t#else\n\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;\n\t#endif",THREE.ShaderChunk.envmap_fragment,
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,THREE.UniformsLib.displacementmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{emissive:{type:"c",
value:new THREE.Color(0)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif",THREE.ShaderChunk.common,THREE.ShaderChunk.uv_pars_vertex,THREE.ShaderChunk.uv2_pars_vertex,THREE.ShaderChunk.displacementmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.uv_vertex,THREE.ShaderChunk.uv2_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.beginnormal_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif",THREE.ShaderChunk.begin_vertex,
THREE.ShaderChunk.displacementmap_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = - mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.uv_pars_fragment,THREE.ShaderChunk.uv2_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.aomap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.emissivemap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,
THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tvec3 totalAmbientLight = ambientLightColor;\n\tvec3 totalEmissiveLight = emissive;",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,
THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.aomap_fragment,THREE.ShaderChunk.emissivemap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},points:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.points,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,
THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.alphatest_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",
THREE.ShaderChunk.common,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.common,
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,"\toutgoingLight = diffuseColor.rgb;",THREE.ShaderChunk.fog_fragment,"\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")},
depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {\n\tvNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",
value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,
"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.begin_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.project_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.common,THREE.ShaderChunk.logdepthbuf_pars_fragment,
"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a,b,c,d){!0===Q&&(a*=d,b*=d,c*=d);s.clearColor(a,b,c,d)}function c(){M.init();s.viewport(Ja,Ka,ta,ua);b(A.r,A.g,A.b,ia)}function d(){Sa=ib=null;pa="";Ta=-1;db=!0;M.reset()}function e(a){a.preventDefault();d();c();Y.clear()}function g(a){a=a.target;a.removeEventListener("dispose",g);a:{var b=Y.get(a);if(a.image&&b.__image__webglTextureCube)s.deleteTexture(b.__image__webglTextureCube);else{if(void 0===b.__webglInit)break a;s.deleteTexture(b.__webglTexture)}Y.delete(a)}La.textures--}
function f(a){a=a.target;a.removeEventListener("dispose",f);var b=Y.get(a);if(a&&void 0!==b.__webglTexture){s.deleteTexture(b.__webglTexture);if(a instanceof THREE.WebGLRenderTargetCube)for(var c=0;6>c;c++)s.deleteFramebuffer(b.__webglFramebuffer[c]),s.deleteRenderbuffer(b.__webglRenderbuffer[c]);else s.deleteFramebuffer(b.__webglFramebuffer),s.deleteRenderbuffer(b.__webglRenderbuffer);Y.delete(a)}La.textures--}function h(a){a=a.target;a.removeEventListener("dispose",h);k(a);Y.delete(a)}function k(a){var b=
Y.get(a).program;a.program=void 0;void 0!==b&&Ua.releaseProgram(b)}function l(a,b){return b[0]-a[0]}function n(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function p(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function m(a,b,c,d,e){var f;c.transparent?(d=va,f=++ma):(d=fa,f=++V);
f=d[f];void 0!==f?(f.id=a.id,f.object=a,f.geometry=b,f.material=c,f.z=$.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:$.z,group:e},d.push(f))}function q(a){if(!1!==a.visible){if(a instanceof THREE.Light)Z.push(a);else if(a instanceof THREE.Sprite)Ba.push(a);else if(a instanceof THREE.LensFlare)Va.push(a);else if(a instanceof THREE.ImmediateRenderObject){var b,c;a.material.transparent?(b=wa,c=++qa):(b=ja,c=++Ca);c<b.length?b[c]=a:b.push(a)}else if(a instanceof THREE.Mesh||a instanceof THREE.Line||
a instanceof THREE.Points)if(a instanceof THREE.SkinnedMesh&&a.skeleton.update(),!1===a.frustumCulled||!0===Wa.intersectsObject(a)){var d=a.material;if(!0===d.visible)if(!0===la.sortObjects&&($.setFromMatrixPosition(a.matrixWorld),$.applyProjection(Da)),b=Ea.update(a),d instanceof THREE.MeshFaceMaterial){c=b.groups;for(var e=d.materials,d=0,f=c.length;d<f;d++){var g=c[d],h=e[g.materialIndex];!0===h.visible&&m(a,b,h,$.z,g)}}else m(a,b,d,$.z)}a=a.children;d=0;for(f=a.length;d<f;d++)q(a[d])}}function t(a,
b,c,d,e){for(var f=0,g=a.length;f<g;f++){var h=a[f],k=h.object,l=h.geometry,m=void 0===e?h.material:e,h=h.group;k.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,k.matrixWorld);k.normalMatrix.getNormalMatrix(k.modelViewMatrix);la.renderBufferDirect(b,c,d,l,m,k,h)}}function r(a,b,c,d,e){for(var f=e,g=0,h=a.length;g<h;g++){var k=a[g];k.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,k.matrixWorld);k.normalMatrix.getNormalMatrix(k.modelViewMatrix);void 0===e&&(f=k.material);u(f);var l=w(b,
c,d,f,k);pa="";k.render(function(a){la.renderBufferImmediate(a,l,f)})}}function u(a){a.side!==THREE.DoubleSide?M.enable(s.CULL_FACE):M.disable(s.CULL_FACE);M.setFlipSided(a.side===THREE.BackSide);!0===a.transparent?M.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha):M.setBlending(THREE.NoBlending);M.setDepthFunc(a.depthFunc);M.setDepthTest(a.depthTest);M.setDepthWrite(a.depthWrite);M.setColorWrite(a.colorWrite);M.setPolygonOffset(a.polygonOffset,
a.polygonOffsetFactor,a.polygonOffsetUnits)}function w(a,b,c,d,e){eb=0;var f=Y.get(d);if(d.needsUpdate||!f.program){a:{var l=Y.get(d),m=Ua.getParameters(d,b,c,e),n=Ua.getProgramCode(d,m),q=l.program,p=!0;if(void 0===q)d.addEventListener("dispose",h);else if(q.code!==n)k(d);else if(void 0!==m.shaderID)break a;else p=!1;if(p){if(m.shaderID){var t=THREE.ShaderLib[m.shaderID];l.__webglShader={name:d.type,uniforms:THREE.UniformsUtils.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}}else l.__webglShader=
{name:d.type,uniforms:d.uniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader};d.__webglShader=l.__webglShader;q=Ua.acquireProgram(d,m,n);l.program=q;d.program=q}var r=q.getAttributes();if(d.morphTargets)for(var w=d.numSupportedMorphTargets=0;w<la.maxMorphTargets;w++)0<=r["morphTarget"+w]&&d.numSupportedMorphTargets++;if(d.morphNormals)for(w=d.numSupportedMorphNormals=0;w<la.maxMorphNormals;w++)0<=r["morphNormal"+w]&&d.numSupportedMorphNormals++;l.uniformsList=[];var u=l.program.getUniforms(),
G;for(G in l.__webglShader.uniforms){var z=u[G];z&&l.uniformsList.push([l.__webglShader.uniforms[G],z])}}d.needsUpdate=!1}var D=!1,E=!1,K=!1,J=f.program,A=J.getUniforms(),y=f.__webglShader.uniforms;J.id!==ib&&(s.useProgram(J.program),ib=J.id,K=E=D=!0);d.id!==Ta&&(-1===Ta&&(K=!0),Ta=d.id,E=!0);if(D||a!==Sa)s.uniformMatrix4fv(A.projectionMatrix,!1,a.projectionMatrix.elements),na.logarithmicDepthBuffer&&s.uniform1f(A.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==Sa&&(Sa=a),(d instanceof THREE.ShaderMaterial||
d instanceof THREE.MeshPhongMaterial||d.envMap)&&void 0!==A.cameraPosition&&($.setFromMatrixPosition(a.matrixWorld),s.uniform3f(A.cameraPosition,$.x,$.y,$.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshBasicMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&void 0!==A.viewMatrix&&s.uniformMatrix4fv(A.viewMatrix,!1,a.matrixWorldInverse.elements);if(d.skinning)if(e.bindMatrix&&void 0!==A.bindMatrix&&s.uniformMatrix4fv(A.bindMatrix,!1,
e.bindMatrix.elements),e.bindMatrixInverse&&void 0!==A.bindMatrixInverse&&s.uniformMatrix4fv(A.bindMatrixInverse,!1,e.bindMatrixInverse.elements),na.floatVertexTextures&&e.skeleton&&e.skeleton.useVertexTexture){if(void 0!==A.boneTexture){var P=B();s.uniform1i(A.boneTexture,P);la.setTexture(e.skeleton.boneTexture,P)}void 0!==A.boneTextureWidth&&s.uniform1i(A.boneTextureWidth,e.skeleton.boneTextureWidth);void 0!==A.boneTextureHeight&&s.uniform1i(A.boneTextureHeight,e.skeleton.boneTextureHeight)}else e.skeleton&&
e.skeleton.boneMatrices&&void 0!==A.boneGlobalMatrices&&s.uniformMatrix4fv(A.boneGlobalMatrices,!1,e.skeleton.boneMatrices);if(E){c&&d.fog&&(y.fogColor.value=c.color,c instanceof THREE.Fog?(y.fogNear.value=c.near,y.fogFar.value=c.far):c instanceof THREE.FogExp2&&(y.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(db){var K=!0,F,L,V,Q=0,U=0,R=0,ja,X,va,ma,Z,aa=tb,qa=a.matrixWorldInverse,Ca=aa.directional.colors,Ba=aa.directional.positions,
wa=aa.point.colors,Ra=aa.point.positions,Va=aa.point.distances,ia=aa.point.decays,fa=aa.spot.colors,ga=aa.spot.positions,sa=aa.spot.distances,pa=aa.spot.directions,Ea=aa.spot.anglesCos,Ja=aa.spot.exponents,Ka=aa.spot.decays,ta=aa.hemi.skyColors,ua=aa.hemi.groundColors,Aa=aa.hemi.positions,Xa=0,Fa=0,ra=0,Ma=0,Da=0,jb=0,kb=0,fb=0,Ya=0,Za=0,xa=0,Na=0;F=0;for(L=b.length;F<L;F++)V=b[F],V.onlyShadow||(ja=V.color,ma=V.intensity,Z=V.distance,V instanceof THREE.AmbientLight?V.visible&&(Q+=ja.r,U+=ja.g,R+=
ja.b):V instanceof THREE.DirectionalLight?(Da+=1,V.visible&&(ca.setFromMatrixPosition(V.matrixWorld),$.setFromMatrixPosition(V.target.matrixWorld),ca.sub($),ca.transformDirection(qa),Ya=3*Xa,Ba[Ya+0]=ca.x,Ba[Ya+1]=ca.y,Ba[Ya+2]=ca.z,x(Ca,Ya,ja,ma),Xa+=1)):V instanceof THREE.PointLight?(jb+=1,V.visible&&(Za=3*Fa,x(wa,Za,ja,ma),$.setFromMatrixPosition(V.matrixWorld),$.applyMatrix4(qa),Ra[Za+0]=$.x,Ra[Za+1]=$.y,Ra[Za+2]=$.z,Va[Fa]=Z,ia[Fa]=0===V.distance?0:V.decay,Fa+=1)):V instanceof THREE.SpotLight?
(kb+=1,V.visible&&(xa=3*ra,x(fa,xa,ja,ma),ca.setFromMatrixPosition(V.matrixWorld),$.copy(ca).applyMatrix4(qa),ga[xa+0]=$.x,ga[xa+1]=$.y,ga[xa+2]=$.z,sa[ra]=Z,$.setFromMatrixPosition(V.target.matrixWorld),ca.sub($),ca.transformDirection(qa),pa[xa+0]=ca.x,pa[xa+1]=ca.y,pa[xa+2]=ca.z,Ea[ra]=Math.cos(V.angle),Ja[ra]=V.exponent,Ka[ra]=0===V.distance?0:V.decay,ra+=1)):V instanceof THREE.HemisphereLight&&(fb+=1,V.visible&&(ca.setFromMatrixPosition(V.matrixWorld),ca.transformDirection(qa),Na=3*Ma,Aa[Na+0]=
ca.x,Aa[Na+1]=ca.y,Aa[Na+2]=ca.z,X=V.color,va=V.groundColor,x(ta,Na,X,ma),x(ua,Na,va,ma),Ma+=1)));F=3*Xa;for(L=Math.max(Ca.length,3*Da);F<L;F++)Ca[F]=0;F=3*Fa;for(L=Math.max(wa.length,3*jb);F<L;F++)wa[F]=0;F=3*ra;for(L=Math.max(fa.length,3*kb);F<L;F++)fa[F]=0;F=3*Ma;for(L=Math.max(ta.length,3*fb);F<L;F++)ta[F]=0;F=3*Ma;for(L=Math.max(ua.length,3*fb);F<L;F++)ua[F]=0;aa.directional.length=Xa;aa.point.length=Fa;aa.spot.length=ra;aa.hemi.length=Ma;aa.ambient[0]=Q;aa.ambient[1]=U;aa.ambient[2]=R;db=!1}if(K){var ea=
tb;y.ambientLightColor.value=ea.ambient;y.directionalLightColor.value=ea.directional.colors;y.directionalLightDirection.value=ea.directional.positions;y.pointLightColor.value=ea.point.colors;y.pointLightPosition.value=ea.point.positions;y.pointLightDistance.value=ea.point.distances;y.pointLightDecay.value=ea.point.decays;y.spotLightColor.value=ea.spot.colors;y.spotLightPosition.value=ea.spot.positions;y.spotLightDistance.value=ea.spot.distances;y.spotLightDirection.value=ea.spot.directions;y.spotLightAngleCos.value=
ea.spot.anglesCos;y.spotLightExponent.value=ea.spot.exponents;y.spotLightDecay.value=ea.spot.decays;y.hemisphereLightSkyColor.value=ea.hemi.skyColors;y.hemisphereLightGroundColor.value=ea.hemi.groundColors;y.hemisphereLightDirection.value=ea.hemi.positions;v(y,!0)}else v(y,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){y.opacity.value=d.opacity;y.diffuse.value=d.color;d.emissive&&(y.emissive.value=d.emissive);y.map.value=
d.map;y.specularMap.value=d.specularMap;y.alphaMap.value=d.alphaMap;d.aoMap&&(y.aoMap.value=d.aoMap,y.aoMapIntensity.value=d.aoMapIntensity);var oa;d.map?oa=d.map:d.specularMap?oa=d.specularMap:d.displacementMap?oa=d.displacementMap:d.normalMap?oa=d.normalMap:d.bumpMap?oa=d.bumpMap:d.alphaMap?oa=d.alphaMap:d.emissiveMap&&(oa=d.emissiveMap);if(void 0!==oa){var Wa=oa.offset,bb=oa.repeat;y.offsetRepeat.value.set(Wa.x,Wa.y,bb.x,bb.y)}y.envMap.value=d.envMap;y.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?
1:-1;y.reflectivity.value=d.reflectivity;y.refractionRatio.value=d.refractionRatio}if(d instanceof THREE.LineBasicMaterial)y.diffuse.value=d.color,y.opacity.value=d.opacity;else if(d instanceof THREE.LineDashedMaterial)y.diffuse.value=d.color,y.opacity.value=d.opacity,y.dashSize.value=d.dashSize,y.totalSize.value=d.dashSize+d.gapSize,y.scale.value=d.scale;else if(d instanceof THREE.PointsMaterial){if(y.psColor.value=d.color,y.opacity.value=d.opacity,y.size.value=d.size,y.scale.value=C.height/2,y.map.value=
d.map,null!==d.map){var cb=d.map.offset,ub=d.map.repeat;y.offsetRepeat.value.set(cb.x,cb.y,ub.x,ub.y)}}else d instanceof THREE.MeshPhongMaterial?(y.specular.value=d.specular,y.shininess.value=d.shininess,d.lightMap&&(y.lightMap.value=d.lightMap,y.lightMapIntensity.value=d.lightMapIntensity),d.emissiveMap&&(y.emissiveMap.value=d.emissiveMap),d.bumpMap&&(y.bumpMap.value=d.bumpMap,y.bumpScale.value=d.bumpScale),d.normalMap&&(y.normalMap.value=d.normalMap,y.normalScale.value.copy(d.normalScale)),d.displacementMap&&
(y.displacementMap.value=d.displacementMap,y.displacementScale.value=d.displacementScale,y.displacementBias.value=d.displacementBias)):d instanceof THREE.MeshDepthMaterial?(y.mNear.value=a.near,y.mFar.value=a.far,y.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(y.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&y.shadowMatrix)for(var Oa=0,lb=0,pb=b.length;lb<pb;lb++){var ya=b[lb];ya.castShadow&&(ya instanceof THREE.SpotLight||ya instanceof THREE.DirectionalLight)&&(y.shadowMap.value[Oa]=
ya.shadowMap,y.shadowMapSize.value[Oa]=ya.shadowMapSize,y.shadowMatrix.value[Oa]=ya.shadowMatrix,y.shadowDarkness.value[Oa]=ya.shadowDarkness,y.shadowBias.value[Oa]=ya.shadowBias,Oa++)}for(var mb=f.uniformsList,ka,Ga,gb=0,qb=mb.length;gb<qb;gb++){var S=mb[gb][0];if(!1!==S.needsUpdate){var vb=S.type,N=S.value,W=mb[gb][1];switch(vb){case "1i":s.uniform1i(W,N);break;case "1f":s.uniform1f(W,N);break;case "2f":s.uniform2f(W,N[0],N[1]);break;case "3f":s.uniform3f(W,N[0],N[1],N[2]);break;case "4f":s.uniform4f(W,
N[0],N[1],N[2],N[3]);break;case "1iv":s.uniform1iv(W,N);break;case "3iv":s.uniform3iv(W,N);break;case "1fv":s.uniform1fv(W,N);break;case "2fv":s.uniform2fv(W,N);break;case "3fv":s.uniform3fv(W,N);break;case "4fv":s.uniform4fv(W,N);break;case "Matrix3fv":s.uniformMatrix3fv(W,!1,N);break;case "Matrix4fv":s.uniformMatrix4fv(W,!1,N);break;case "i":s.uniform1i(W,N);break;case "f":s.uniform1f(W,N);break;case "v2":s.uniform2f(W,N.x,N.y);break;case "v3":s.uniform3f(W,N.x,N.y,N.z);break;case "v4":s.uniform4f(W,
N.x,N.y,N.z,N.w);break;case "c":s.uniform3f(W,N.r,N.g,N.b);break;case "iv1":s.uniform1iv(W,N);break;case "iv":s.uniform3iv(W,N);break;case "fv1":s.uniform1fv(W,N);break;case "fv":s.uniform3fv(W,N);break;case "v2v":void 0===S._array&&(S._array=new Float32Array(2*N.length));for(var T=0,hb=0,ha=N.length;T<ha;T++,hb+=2)S._array[hb+0]=N[T].x,S._array[hb+1]=N[T].y;s.uniform2fv(W,S._array);break;case "v3v":void 0===S._array&&(S._array=new Float32Array(3*N.length));for(var $a=T=0,ha=N.length;T<ha;T++,$a+=
3)S._array[$a+0]=N[T].x,S._array[$a+1]=N[T].y,S._array[$a+2]=N[T].z;s.uniform3fv(W,S._array);break;case "v4v":void 0===S._array&&(S._array=new Float32Array(4*N.length));for(var Pa=T=0,ha=N.length;T<ha;T++,Pa+=4)S._array[Pa+0]=N[T].x,S._array[Pa+1]=N[T].y,S._array[Pa+2]=N[T].z,S._array[Pa+3]=N[T].w;s.uniform4fv(W,S._array);break;case "m3":s.uniformMatrix3fv(W,!1,N.elements);break;case "m3v":void 0===S._array&&(S._array=new Float32Array(9*N.length));T=0;for(ha=N.length;T<ha;T++)N[T].flattenToArrayOffset(S._array,
9*T);s.uniformMatrix3fv(W,!1,S._array);break;case "m4":s.uniformMatrix4fv(W,!1,N.elements);break;case "m4v":void 0===S._array&&(S._array=new Float32Array(16*N.length));T=0;for(ha=N.length;T<ha;T++)N[T].flattenToArrayOffset(S._array,16*T);s.uniformMatrix4fv(W,!1,S._array);break;case "t":ka=N;Ga=B();s.uniform1i(W,Ga);if(!ka)continue;if(ka instanceof THREE.CubeTexture||Array.isArray(ka.image)&&6===ka.image.length){var ba=ka,wb=Ga,Qa=Y.get(ba);if(6===ba.image.length)if(0<ba.version&&Qa.__version!==ba.version){Qa.__image__webglTextureCube||
(ba.addEventListener("dispose",g),Qa.__image__webglTextureCube=s.createTexture(),La.textures++);M.activeTexture(s.TEXTURE0+wb);M.bindTexture(s.TEXTURE_CUBE_MAP,Qa.__image__webglTextureCube);s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,ba.flipY);for(var xb=ba instanceof THREE.CompressedTexture,nb=ba.image[0]instanceof THREE.DataTexture,Ha=[],da=0;6>da;da++)Ha[da]=!la.autoScaleCubemaps||xb||nb?nb?ba.image[da].image:ba.image[da]:I(ba.image[da],na.maxCubemapSize);var yb=Ha[0],zb=THREE.Math.isPowerOfTwo(yb.width)&&
THREE.Math.isPowerOfTwo(yb.height),za=O(ba.format),ob=O(ba.type);H(s.TEXTURE_CUBE_MAP,ba,zb);for(da=0;6>da;da++)if(xb)for(var Ia,Ab=Ha[da].mipmaps,ab=0,rb=Ab.length;ab<rb;ab++)Ia=Ab[ab],ba.format!==THREE.RGBAFormat&&ba.format!==THREE.RGBFormat?-1<M.getCompressedTextureFormats().indexOf(za)?M.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+da,ab,za,Ia.width,Ia.height,0,Ia.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()"):M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+
da,ab,za,Ia.width,Ia.height,0,za,ob,Ia.data);else nb?M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+da,0,za,Ha[da].width,Ha[da].height,0,za,ob,Ha[da].data):M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+da,0,za,za,ob,Ha[da]);ba.generateMipmaps&&zb&&s.generateMipmap(s.TEXTURE_CUBE_MAP);Qa.__version=ba.version;if(ba.onUpdate)ba.onUpdate(ba)}else M.activeTexture(s.TEXTURE0+wb),M.bindTexture(s.TEXTURE_CUBE_MAP,Qa.__image__webglTextureCube)}else if(ka instanceof THREE.WebGLRenderTargetCube){var sb=ka;M.activeTexture(s.TEXTURE0+
Ga);M.bindTexture(s.TEXTURE_CUBE_MAP,Y.get(sb).__webglTexture)}else la.setTexture(ka,Ga);break;case "tv":void 0===S._array&&(S._array=[]);T=0;for(ha=S.value.length;T<ha;T++)S._array[T]=B();s.uniform1iv(W,S._array);T=0;for(ha=S.value.length;T<ha;T++)ka=S.value[T],Ga=S._array[T],ka&&la.setTexture(ka,Ga);break;default:console.warn("THREE.WebGLRenderer: Unknown uniform type: "+vb)}}}}s.uniformMatrix4fv(A.modelViewMatrix,!1,e.modelViewMatrix.elements);A.normalMatrix&&s.uniformMatrix3fv(A.normalMatrix,
!1,e.normalMatrix.elements);void 0!==A.modelMatrix&&s.uniformMatrix4fv(A.modelMatrix,!1,e.matrixWorld.elements);return J}function v(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.pointLightDecay.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=b;a.spotLightDirection.needsUpdate=
b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.spotLightDecay.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function B(){var a=eb;a>=na.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+na.maxTextures);eb+=1;return a}function x(a,b,c,d){a[b+0]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function H(a,b,c){c?(s.texParameteri(a,s.TEXTURE_WRAP_S,
O(b.wrapS)),s.texParameteri(a,s.TEXTURE_WRAP_T,O(b.wrapT)),s.texParameteri(a,s.TEXTURE_MAG_FILTER,O(b.magFilter)),s.texParameteri(a,s.TEXTURE_MIN_FILTER,O(b.minFilter))):(s.texParameteri(a,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(a,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( "+b.sourceFile+
" )"),s.texParameteri(a,s.TEXTURE_MAG_FILTER,G(b.magFilter)),s.texParameteri(a,s.TEXTURE_MIN_FILTER,G(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( "+b.sourceFile+" )"));!(c=X.get("EXT_texture_filter_anisotropic"))||b.type===THREE.FloatType&&null===X.get("OES_texture_float_linear")||b.type===THREE.HalfFloatType&&null===
X.get("OES_texture_half_float_linear")||!(1<b.anisotropy||Y.get(b).__currentAnisotropy)||(s.texParameterf(a,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,la.getMaxAnisotropy())),Y.get(b).__currentAnisotropy=b.anisotropy)}function I(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+
a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d}return a}function z(a,b,c){s.bindFramebuffer(s.FRAMEBUFFER,a);s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,c,Y.get(b).__webglTexture,0)}function D(a,b){s.bindRenderbuffer(s.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_COMPONENT16,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(s.renderbufferStorage(s.RENDERBUFFER,
s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,a)):s.renderbufferStorage(s.RENDERBUFFER,s.RGBA4,b.width,b.height)}function G(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?s.NEAREST:s.LINEAR}function O(a){var b;if(a===THREE.RepeatWrapping)return s.REPEAT;if(a===THREE.ClampToEdgeWrapping)return s.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return s.MIRRORED_REPEAT;
if(a===THREE.NearestFilter)return s.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return s.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return s.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return s.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return s.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return s.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return s.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return s.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return s.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return s.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return s.BYTE;if(a===THREE.ShortType)return s.SHORT;if(a===THREE.UnsignedShortType)return s.UNSIGNED_SHORT;if(a===THREE.IntType)return s.INT;if(a===THREE.UnsignedIntType)return s.UNSIGNED_INT;if(a===THREE.FloatType)return s.FLOAT;b=X.get("OES_texture_half_float");if(null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return s.ALPHA;if(a===THREE.RGBFormat)return s.RGB;if(a===THREE.RGBAFormat)return s.RGBA;
if(a===THREE.LuminanceFormat)return s.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return s.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return s.FUNC_ADD;if(a===THREE.SubtractEquation)return s.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return s.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return s.ZERO;if(a===THREE.OneFactor)return s.ONE;if(a===THREE.SrcColorFactor)return s.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return s.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return s.SRC_ALPHA;
if(a===THREE.OneMinusSrcAlphaFactor)return s.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return s.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return s.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return s.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return s.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return s.SRC_ALPHA_SATURATE;b=X.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;
if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}b=X.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}b=
X.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var C=void 0!==a.canvas?a.canvas:document.createElement("canvas"),F=void 0!==a.context?a.context:null,K=C.width,L=C.height,E=1,J=void 0!==a.alpha?a.alpha:!1,y=void 0!==a.depth?a.depth:!0,P=void 0!==a.stencil?a.stencil:!0,U=void 0!==a.antialias?a.antialias:!1,Q=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:
!0,R=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,A=new THREE.Color(0),ia=0,Z=[],fa=[],V=-1,va=[],ma=-1,ja=[],Ca=-1,wa=[],qa=-1,Ra=new Float32Array(8),Ba=[],Va=[];this.domElement=C;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.gammaFactor=2;this.gammaOutput=this.gammaInput=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;var la=this,ib=null,Aa=null,Ta=-1,pa="",Sa=null,eb=0,Ja=0,Ka=0,
ta=C.width,ua=C.height,bb=0,cb=0,Wa=new THREE.Frustum,Da=new THREE.Matrix4,$=new THREE.Vector3,ca=new THREE.Vector3,db=!0,tb={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[],decays:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[],decays:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},La={geometries:0,textures:0},sa={calls:0,vertices:0,faces:0,points:0};this.info={render:sa,
memory:La,programs:null};var s;try{J={alpha:J,depth:y,stencil:P,antialias:U,premultipliedAlpha:Q,preserveDrawingBuffer:R};s=F||C.getContext("webgl",J)||C.getContext("experimental-webgl",J);if(null===s){if(null!==C.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";}C.addEventListener("webglcontextlost",e,!1)}catch(pb){console.error("THREE.WebGLRenderer: "+pb)}var X=new THREE.WebGLExtensions(s);X.get("OES_texture_float");X.get("OES_texture_float_linear");
X.get("OES_texture_half_float");X.get("OES_texture_half_float_linear");X.get("OES_standard_derivatives");X.get("ANGLE_instanced_arrays");X.get("OES_element_index_uint")&&(THREE.BufferGeometry.MaxIndex=4294967296);var na=new THREE.WebGLCapabilities(s,X,a),M=new THREE.WebGLState(s,X,O),Y=new THREE.WebGLProperties,Ea=new THREE.WebGLObjects(s,Y,this.info),Ua=new THREE.WebGLPrograms(this,na);this.info.programs=Ua.programs;var qb=new THREE.WebGLBufferRenderer(s,X,sa),rb=new THREE.WebGLIndexedBufferRenderer(s,
X,sa);c();this.context=s;this.capabilities=na;this.extensions=X;this.state=M;var ga=new THREE.WebGLShadowMap(this,Z,Ea);this.shadowMap=ga;var sb=new THREE.SpritePlugin(this,Ba),Bb=new THREE.LensFlarePlugin(this,Va);this.getContext=function(){return s};this.getContextAttributes=function(){return s.getContextAttributes()};this.forceContextLoss=function(){X.get("WEBGL_lose_context").loseContext()};this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=X.get("EXT_texture_filter_anisotropic");
return a=null!==b?s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}}();this.getPrecision=function(){return na.precision};this.getPixelRatio=function(){return E};this.setPixelRatio=function(a){void 0!==a&&(E=a)};this.getSize=function(){return{width:K,height:L}};this.setSize=function(a,b,c){K=a;L=b;C.width=a*E;C.height=b*E;!1!==c&&(C.style.width=a+"px",C.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){Ja=a*E;Ka=b*E;ta=c*E;ua=d*E;s.viewport(Ja,Ka,ta,ua)};this.setScissor=
function(a,b,c,d){s.scissor(a*E,b*E,c*E,d*E)};this.enableScissorTest=function(a){M.setScissorTest(a)};this.getClearColor=function(){return A};this.setClearColor=function(a,c){A.set(a);ia=void 0!==c?c:1;b(A.r,A.g,A.b,ia)};this.getClearAlpha=function(){return ia};this.setClearAlpha=function(a){ia=a;b(A.r,A.g,A.b,ia)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=s.COLOR_BUFFER_BIT;if(void 0===b||b)d|=s.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=s.STENCIL_BUFFER_BIT;s.clear(d)};this.clearColor=function(){s.clear(s.COLOR_BUFFER_BIT)};
this.clearDepth=function(){s.clear(s.DEPTH_BUFFER_BIT)};this.clearStencil=function(){s.clear(s.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=d;this.dispose=function(){C.removeEventListener("webglcontextlost",e,!1)};this.renderBufferImmediate=function(a,b,c){M.initAttributes();var d=Y.get(a);a.hasPositions&&!d.position&&(d.position=s.createBuffer());a.hasNormals&&!d.normal&&(d.normal=s.createBuffer());a.hasUvs&&!d.uv&&(d.uv=s.createBuffer());
a.hasColors&&!d.color&&(d.color=s.createBuffer());b=b.getAttributes();a.hasPositions&&(s.bindBuffer(s.ARRAY_BUFFER,d.position),s.bufferData(s.ARRAY_BUFFER,a.positionArray,s.DYNAMIC_DRAW),M.enableAttribute(b.position),s.vertexAttribPointer(b.position,3,s.FLOAT,!1,0,0));if(a.hasNormals){s.bindBuffer(s.ARRAY_BUFFER,d.normal);if("MeshPhongMaterial"!==c.type&&c.shading===THREE.FlatShading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,k=(g[e+1]+g[e+4]+g[e+7])/3,l=(g[e+
2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=k;g[e+2]=l;g[e+3]=h;g[e+4]=k;g[e+5]=l;g[e+6]=h;g[e+7]=k;g[e+8]=l}s.bufferData(s.ARRAY_BUFFER,a.normalArray,s.DYNAMIC_DRAW);M.enableAttribute(b.normal);s.vertexAttribPointer(b.normal,3,s.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(s.bindBuffer(s.ARRAY_BUFFER,d.uv),s.bufferData(s.ARRAY_BUFFER,a.uvArray,s.DYNAMIC_DRAW),M.enableAttribute(b.uv),s.vertexAttribPointer(b.uv,2,s.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(s.bindBuffer(s.ARRAY_BUFFER,d.color),s.bufferData(s.ARRAY_BUFFER,
a.colorArray,s.DYNAMIC_DRAW),M.enableAttribute(b.color),s.vertexAttribPointer(b.color,3,s.FLOAT,!1,0,0));M.disableUnusedAttributes();s.drawArrays(s.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f,g){u(e);var h=w(a,b,c,e,f),k=!1;a=d.id+"_"+h.id+"_"+e.wireframe;a!==pa&&(pa=a,k=!0);a=f.morphTargetInfluences;if(void 0!==a){b=[];c=0;for(k=a.length;c<k;c++){var m=a[c];b.push([m,c])}b.sort(l);8<b.length&&(b.length=8);var n=d.morphAttributes;c=0;for(k=b.length;c<k;c++)m=b[c],
Ra[c]=m[0],0!==m[0]?(a=m[1],!0===e.morphTargets&&n.position&&d.addAttribute("morphTarget"+c,n.position[a]),!0===e.morphNormals&&n.normal&&d.addAttribute("morphNormal"+c,n.normal[a])):(!0===e.morphTargets&&d.removeAttribute("morphTarget"+c),!0===e.morphNormals&&d.removeAttribute("morphNormal"+c));a=h.getUniforms();null!==a.morphTargetInfluences&&s.uniform1fv(a.morphTargetInfluences,Ra);k=!0}a=d.index;c=d.attributes.position;!0===e.wireframe&&(a=Ea.getWireframeAttribute(d));null!==a?(b=rb,b.setIndex(a)):
b=qb;if(k){a:{var k=void 0,q;if(d instanceof THREE.InstancedBufferGeometry&&(q=X.get("ANGLE_instanced_arrays"),null===q)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");break a}void 0===k&&(k=0);M.initAttributes();var m=d.attributes,h=h.getAttributes(),n=e.defaultAttributeValues,p;for(p in h){var t=h[p];if(0<=t){var r=m[p];if(void 0!==r){M.enableAttribute(t);var v=r.itemSize,x=Ea.getAttributeBuffer(r);
if(r instanceof THREE.InterleavedBufferAttribute){var G=r.data,B=G.stride,r=r.offset;s.bindBuffer(s.ARRAY_BUFFER,x);s.vertexAttribPointer(t,v,s.FLOAT,!1,B*G.array.BYTES_PER_ELEMENT,(k*B+r)*G.array.BYTES_PER_ELEMENT);if(G instanceof THREE.InstancedInterleavedBuffer){if(null===q){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");break a}q.vertexAttribDivisorANGLE(t,G.meshPerAttribute);void 0===
d.maxInstancedCount&&(d.maxInstancedCount=G.meshPerAttribute*G.count)}}else if(s.bindBuffer(s.ARRAY_BUFFER,x),s.vertexAttribPointer(t,v,s.FLOAT,!1,0,k*v*4),r instanceof THREE.InstancedBufferAttribute){if(null===q){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");break a}q.vertexAttribDivisorANGLE(t,r.meshPerAttribute);void 0===d.maxInstancedCount&&(d.maxInstancedCount=r.meshPerAttribute*
r.count)}}else if(void 0!==n&&(v=n[p],void 0!==v))switch(v.length){case 2:s.vertexAttrib2fv(t,v);break;case 3:s.vertexAttrib3fv(t,v);break;case 4:s.vertexAttrib4fv(t,v);break;default:s.vertexAttrib1fv(t,v)}}}M.disableUnusedAttributes()}null!==a&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,Ea.getAttributeBuffer(a))}void 0===g&&(g=d.drawRange,g={start:g.start,count:Math.min(g.count,null!==a?a.count:c instanceof THREE.InterleavedBufferAttribute?c.data.array.length/3:c.count)});f instanceof THREE.Mesh?(!0===
e.wireframe?(M.setLineWidth(e.wireframeLinewidth*E),b.setMode(s.LINES)):b.setMode(s.TRIANGLES),d instanceof THREE.InstancedBufferGeometry&&0<d.maxInstancedCount?b.renderInstances(d):b.render(g.start,g.count)):f instanceof THREE.Line?(d=e.linewidth,void 0===d&&(d=1),M.setLineWidth(d*E),f instanceof THREE.LineSegments?b.setMode(s.LINES):b.setMode(s.LINE_STRIP),b.render(g.start,g.count)):f instanceof THREE.Points&&(b.setMode(s.POINTS),b.render(g.start,g.count))};this.render=function(a,b,c,d){if(!1===
b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e=a.fog;pa="";Ta=-1;Sa=null;db=!0;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);Da.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);Wa.setFromMatrix(Da);Z.length=0;qa=Ca=ma=V=-1;Ba.length=0;Va.length=0;q(a);fa.length=V+1;va.length=ma+1;ja.length=Ca+1;wa.length=qa+1;!0===la.sortObjects&&(fa.sort(n),
va.sort(p));ga.render(a,b);sa.calls=0;sa.vertices=0;sa.faces=0;sa.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);a.overrideMaterial?(d=a.overrideMaterial,t(fa,b,Z,e,d),t(va,b,Z,e,d),r(ja,b,Z,e,d),r(wa,b,Z,e,d)):(M.setBlending(THREE.NoBlending),t(fa,b,Z,e),r(ja,b,Z,e),t(va,b,Z,e),r(wa,b,Z,e));sb.render(a,b);Bb.render(a,b,bb,cb);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&
(c instanceof THREE.WebGLRenderTargetCube?(M.bindTexture(s.TEXTURE_CUBE_MAP,Y.get(c).__webglTexture),s.generateMipmap(s.TEXTURE_CUBE_MAP),M.bindTexture(s.TEXTURE_CUBE_MAP,null)):(M.bindTexture(s.TEXTURE_2D,Y.get(c).__webglTexture),s.generateMipmap(s.TEXTURE_2D),M.bindTexture(s.TEXTURE_2D,null)));M.setDepthTest(!0);M.setDepthWrite(!0);M.setColorWrite(!0)}};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?M.disable(s.CULL_FACE):(b===THREE.FrontFaceDirectionCW?s.frontFace(s.CW):s.frontFace(s.CCW),
a===THREE.CullFaceBack?s.cullFace(s.BACK):a===THREE.CullFaceFront?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK),M.enable(s.CULL_FACE))};this.setTexture=function(a,b){var c=Y.get(a);if(0<a.version&&c.__version!==a.version){var d=a.image;if(void 0===d)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",a);else if(!1===d.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",a);else{void 0===c.__webglInit&&(c.__webglInit=!0,
a.__webglInit=!0,a.addEventListener("dispose",g),c.__webglTexture=s.createTexture(),La.textures++);M.activeTexture(s.TEXTURE0+b);M.bindTexture(s.TEXTURE_2D,c.__webglTexture);s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,a.flipY);s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);s.pixelStorei(s.UNPACK_ALIGNMENT,a.unpackAlignment);a.image=I(a.image,na.maxTextureSize);var e=a.image,d=THREE.Math.isPowerOfTwo(e.width)&&THREE.Math.isPowerOfTwo(e.height),f=O(a.format),h=O(a.type);H(s.TEXTURE_2D,a,
d);var k=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<k.length&&d){for(var l=0,m=k.length;l<m;l++)e=k[l],M.texImage2D(s.TEXTURE_2D,l,f,e.width,e.height,0,f,h,e.data);a.generateMipmaps=!1}else M.texImage2D(s.TEXTURE_2D,0,f,e.width,e.height,0,f,h,e.data);else if(a instanceof THREE.CompressedTexture)for(l=0,m=k.length;l<m;l++)e=k[l],a.format!==THREE.RGBAFormat&&a.format!==THREE.RGBFormat?-1<M.getCompressedTextureFormats().indexOf(f)?M.compressedTexImage2D(s.TEXTURE_2D,l,f,e.width,e.height,0,e.data):
console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):M.texImage2D(s.TEXTURE_2D,l,f,e.width,e.height,0,f,h,e.data);else if(0<k.length&&d){l=0;for(m=k.length;l<m;l++)e=k[l],M.texImage2D(s.TEXTURE_2D,l,f,f,h,e);a.generateMipmaps=!1}else M.texImage2D(s.TEXTURE_2D,0,f,f,h,a.image);a.generateMipmaps&&d&&s.generateMipmap(s.TEXTURE_2D);c.__version=a.version;if(a.onUpdate)a.onUpdate(a)}}else M.activeTexture(s.TEXTURE0+b),M.bindTexture(s.TEXTURE_2D,
c.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&void 0===Y.get(a).__webglFramebuffer){var c=Y.get(a);void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",f);c.__webglTexture=s.createTexture();La.textures++;var d=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),e=O(a.format),g=O(a.type);if(b){c.__webglFramebuffer=[];c.__webglRenderbuffer=[];M.bindTexture(s.TEXTURE_CUBE_MAP,
c.__webglTexture);H(s.TEXTURE_CUBE_MAP,a,d);for(var h=0;6>h;h++)c.__webglFramebuffer[h]=s.createFramebuffer(),c.__webglRenderbuffer[h]=s.createRenderbuffer(),M.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+h,0,e,a.width,a.height,0,e,g,null),z(c.__webglFramebuffer[h],a,s.TEXTURE_CUBE_MAP_POSITIVE_X+h),D(c.__webglRenderbuffer[h],a);a.generateMipmaps&&d&&s.generateMipmap(s.TEXTURE_CUBE_MAP)}else c.__webglFramebuffer=s.createFramebuffer(),c.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:
s.createRenderbuffer(),M.bindTexture(s.TEXTURE_2D,c.__webglTexture),H(s.TEXTURE_2D,a,d),M.texImage2D(s.TEXTURE_2D,0,e,a.width,a.height,0,e,g,null),z(c.__webglFramebuffer,a,s.TEXTURE_2D),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,c.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,c.__webglRenderbuffer):D(c.__webglRenderbuffer,a),a.generateMipmaps&&
d&&s.generateMipmap(s.TEXTURE_2D);b?M.bindTexture(s.TEXTURE_CUBE_MAP,null):M.bindTexture(s.TEXTURE_2D,null);s.bindRenderbuffer(s.RENDERBUFFER,null);s.bindFramebuffer(s.FRAMEBUFFER,null)}a?(c=Y.get(a),b=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=ta,a=ua,d=Ja,e=Ka);b!==Aa&&(s.bindFramebuffer(s.FRAMEBUFFER,b),s.viewport(d,e,c,a),Aa=b);bb=c;cb=a};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!(a instanceof THREE.WebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
else if(Y.get(a).__webglFramebuffer)if(a.format!==THREE.RGBAFormat)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");else{var g=!1;Y.get(a).__webglFramebuffer!==Aa&&(s.bindFramebuffer(s.FRAMEBUFFER,Y.get(a).__webglFramebuffer),g=!0);s.checkFramebufferStatus(s.FRAMEBUFFER)===s.FRAMEBUFFER_COMPLETE?s.readPixels(b,c,d,e,s.RGBA,s.UNSIGNED_BYTE,f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
g&&s.bindFramebuffer(s.FRAMEBUFFER,Aa)}};this.supportsFloatTextures=function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return X.get("OES_texture_float")};this.supportsHalfFloatTextures=function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return X.get("OES_texture_half_float")};this.supportsStandardDerivatives=function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
return X.get("OES_standard_derivatives")};this.supportsCompressedTextureS3TC=function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return X.get("WEBGL_compressed_texture_s3tc")};this.supportsCompressedTexturePVRTC=function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return X.get("WEBGL_compressed_texture_pvrtc")};this.supportsBlendMinMax=
function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return X.get("EXT_blend_minmax")};this.supportsVertexTextures=function(){return na.vertexTextures};this.supportsInstancedArrays=function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return X.get("ANGLE_instanced_arrays")};this.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};
this.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};this.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};this.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Object.defineProperties(this,{shadowMapEnabled:{get:function(){return ga.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");ga.enabled=
a}},shadowMapType:{get:function(){return ga.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");ga.type=a}},shadowMapCullFace:{get:function(){return ga.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");ga.cullFace=a}},shadowMapDebug:{get:function(){return ga.debug},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug.");ga.debug=a}}})};
THREE.WebGLRenderTarget=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,
1);this.format=void 0!==c.format?c.format:THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=void 0!==c.shareDepthFrom?c.shareDepthFrom:null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose()},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.format=a.format;this.type=a.type;this.depthBuffer=
a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.generateMipmaps=a.generateMipmaps;this.shareDepthFrom=a.shareDepthFrom;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;
THREE.WebGLBufferRenderer=function(a,b,c){var d;this.setMode=function(a){d=a};this.render=function(b,g){a.drawArrays(d,b,g);c.calls++;c.vertices+=g;d===a.TRIANGLES&&(c.faces+=g/3)};this.renderInstances=function(a){var c=b.get("ANGLE_instanced_arrays");if(null===c)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var f=a.attributes.position;f instanceof THREE.InterleavedBufferAttribute?c.drawArraysInstancedANGLE(d,
0,f.data.count,a.maxInstancedCount):c.drawArraysInstancedANGLE(d,0,f.count,a.maxInstancedCount)}}};
THREE.WebGLIndexedBufferRenderer=function(a,b,c){var d,e,g;this.setMode=function(a){d=a};this.setIndex=function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,g=4):(e=a.UNSIGNED_SHORT,g=2)};this.render=function(b,h){a.drawElements(d,h,e,b*g);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)};this.renderInstances=function(a){var c=b.get("ANGLE_instanced_arrays");null===c?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):
c.drawElementsInstancedANGLE(d,a.index.array.length,e,0,a.maxInstancedCount)}};
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}};
THREE.WebGLCapabilities=function(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}this.getMaxPrecision=d;this.precision=void 0!==c.precision?c.precision:"highp";
this.logarithmicDepthBuffer=void 0!==c.logarithmicDepthBuffer?c.logarithmicDepthBuffer:!1;this.maxTextures=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);this.maxVertexTextures=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);this.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE);this.maxCubemapSize=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE);this.maxAttributes=a.getParameter(a.MAX_VERTEX_ATTRIBS);this.maxVertexUniforms=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS);this.maxVaryings=a.getParameter(a.MAX_VARYING_VECTORS);
this.maxFragmentUniforms=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS);this.vertexTextures=0<this.maxVertexTextures;this.floatFragmentTextures=!!b.get("OES_texture_float");this.floatVertexTextures=this.vertexTextures&&this.floatFragmentTextures;c=d(this.precision);c!==this.precision&&(console.warn("THREE.WebGLRenderer:",this.precision,"not supported, using",c,"instead."),this.precision=c);this.logarithmicDepthBuffer&&(this.logarithmicDepthBuffer=!!b.get("EXT_frag_depth"))};
THREE.WebGLGeometries=function(a,b,c){function d(a){a=a.target;var h=g[a.id].attributes,k;for(k in h)e(h[k]);a.removeEventListener("dispose",d);delete g[a.id];k=b.get(a);k.wireframe&&e(k.wireframe);c.memory.geometries--}function e(c){var d;d=c instanceof THREE.InterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c instanceof THREE.InterleavedBufferAttribute?b.delete(c.data):b.delete(c))}var g={};this.get=function(a){var b=a.geometry;if(void 0!==
g[b.id])return g[b.id];b.addEventListener("dispose",d);var e;b instanceof THREE.BufferGeometry?e=b:b instanceof THREE.Geometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new THREE.BufferGeometry).setFromObject(a)),e=b._bufferGeometry);g[b.id]=e;c.memory.geometries++;return e}};
THREE.WebGLObjects=function(a,b,c){function d(c,d){var e=c instanceof THREE.InterleavedBufferAttribute?c.data:c,g=b.get(e);void 0===g.__webglBuffer?(g.__webglBuffer=a.createBuffer(),a.bindBuffer(d,g.__webglBuffer),a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW),g.version=e.version):g.version!==e.version&&(a.bindBuffer(d,g.__webglBuffer),!1===e.dynamic||-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),g.version=e.version)}function e(a,b,c){if(b>c){var d=b;b=c;c=d}d=a[b];return void 0===d?(a[b]=[c],!0):-1===d.indexOf(c)?(d.push(c),!0):!1}var g=new THREE.WebGLGeometries(a,b,c);this.getAttributeBuffer=function(a){return a instanceof THREE.InterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer};this.getWireframeAttribute=
function(c){var g=b.get(c);if(void 0!==g.wireframe)return g.wireframe;var k=[],l=c.index,n=c.attributes;c=n.position;if(null!==l)for(var n={},l=l.array,p=0,m=l.length;p<m;p+=3){var q=l[p+0],t=l[p+1],r=l[p+2];e(n,q,t)&&k.push(q,t);e(n,t,r)&&k.push(t,r);e(n,r,q)&&k.push(r,q)}else for(l=n.position.array,p=0,m=l.length/3-1;p<m;p+=3)q=p+0,t=p+1,r=p+2,k.push(q,t,t,r,r,q);k=new THREE.BufferAttribute(new (65535<c.count?Uint32Array:Uint16Array)(k),1);d(k,a.ELEMENT_ARRAY_BUFFER);return g.wireframe=k};this.update=
function(b){var c=g.get(b);b.geometry instanceof THREE.Geometry&&c.updateFromObject(b);b=c.index;var e=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);for(var l in e)d(e[l],a.ARRAY_BUFFER);b=c.morphAttributes;for(l in b)for(var e=b[l],n=0,p=e.length;n<p;n++)d(e[n],a.ARRAY_BUFFER);return c}};
THREE.WebGLProgram=function(){function a(a){var b=[],c;for(c in a){var f=a[c];!1!==f&&b.push("#define "+c+" "+f)}return b.join("\n")}function b(a){return""!==a}var c=0;return function(d,e,g,f){var h=d.context,k=g.defines,l=g.__webglShader.vertexShader,n=g.__webglShader.fragmentShader,p="SHADOWMAP_TYPE_BASIC";f.shadowMapType===THREE.PCFShadowMap?p="SHADOWMAP_TYPE_PCF":f.shadowMapType===THREE.PCFSoftShadowMap&&(p="SHADOWMAP_TYPE_PCF_SOFT");var m="ENVMAP_TYPE_CUBE",q="ENVMAP_MODE_REFLECTION",t="ENVMAP_BLENDING_MULTIPLY";
if(f.envMap){switch(g.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:m="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:m="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:m="ENVMAP_TYPE_SPHERE"}switch(g.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:q="ENVMAP_MODE_REFRACTION"}switch(g.combine){case THREE.MultiplyOperation:t="ENVMAP_BLENDING_MULTIPLY";
break;case THREE.MixOperation:t="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:t="ENVMAP_BLENDING_ADD"}}var r=0<d.gammaFactor?d.gammaFactor:1,u=a(k),w=h.createProgram();g instanceof THREE.RawShaderMaterial?d=k="":(k=["precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+g.__webglShader.name,u,f.supportsVertexTextures?"#define VERTEX_TEXTURES":"",d.gammaInput?"#define GAMMA_INPUT":"",d.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+r,"#define MAX_DIR_LIGHTS "+
f.maxDirLights,"#define MAX_POINT_LIGHTS "+f.maxPointLights,"#define MAX_SPOT_LIGHTS "+f.maxSpotLights,"#define MAX_HEMI_LIGHTS "+f.maxHemiLights,"#define MAX_SHADOWS "+f.maxShadows,"#define MAX_BONES "+f.maxBones,f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":"",f.envMap?"#define "+q:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.displacementMap&&
f.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.skinning?"#define USE_SKINNING":"",f.useVertexTexture?"#define BONE_TEXTURE":"",f.morphTargets?"#define USE_MORPHTARGETS":"",f.morphNormals&&!1===f.flatShading?"#define USE_MORPHNORMALS":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":"",f.shadowMapEnabled?
"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+p:"",f.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",f.sizeAttenuation?"#define USE_SIZEATTENUATION":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&d.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;",
"attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;",
"\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(b).join("\n"),d=[f.bumpMap||f.normalMap||f.flatShading||g.derivatives?"#extension GL_OES_standard_derivatives : enable":"",f.logarithmicDepthBuffer&&d.extensions.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"","precision "+f.precision+" float;","precision "+f.precision+" int;","#define SHADER_NAME "+
g.__webglShader.name,u,"#define MAX_DIR_LIGHTS "+f.maxDirLights,"#define MAX_POINT_LIGHTS "+f.maxPointLights,"#define MAX_SPOT_LIGHTS "+f.maxSpotLights,"#define MAX_HEMI_LIGHTS "+f.maxHemiLights,"#define MAX_SHADOWS "+f.maxShadows,f.alphaTest?"#define ALPHATEST "+f.alphaTest:"",d.gammaInput?"#define GAMMA_INPUT":"",d.gammaOutput?"#define GAMMA_OUTPUT":"","#define GAMMA_FACTOR "+r,f.useFog&&f.fog?"#define USE_FOG":"",f.useFog&&f.fogExp?"#define FOG_EXP2":"",f.map?"#define USE_MAP":"",f.envMap?"#define USE_ENVMAP":
"",f.envMap?"#define "+m:"",f.envMap?"#define "+q:"",f.envMap?"#define "+t:"",f.lightMap?"#define USE_LIGHTMAP":"",f.aoMap?"#define USE_AOMAP":"",f.emissiveMap?"#define USE_EMISSIVEMAP":"",f.bumpMap?"#define USE_BUMPMAP":"",f.normalMap?"#define USE_NORMALMAP":"",f.specularMap?"#define USE_SPECULARMAP":"",f.alphaMap?"#define USE_ALPHAMAP":"",f.vertexColors?"#define USE_COLOR":"",f.flatShading?"#define FLAT_SHADED":"",f.metal?"#define METAL":"",f.doubleSided?"#define DOUBLE_SIDED":"",f.flipSided?"#define FLIP_SIDED":
"",f.shadowMapEnabled?"#define USE_SHADOWMAP":"",f.shadowMapEnabled?"#define "+p:"",f.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",f.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",f.logarithmicDepthBuffer&&d.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","\n"].filter(b).join("\n"));n=d+n;l=THREE.WebGLShader(h,h.VERTEX_SHADER,k+l);n=THREE.WebGLShader(h,h.FRAGMENT_SHADER,n);h.attachShader(w,l);h.attachShader(w,n);void 0!==
g.index0AttributeName?h.bindAttribLocation(w,0,g.index0AttributeName):!0===f.morphTargets&&h.bindAttribLocation(w,0,"position");h.linkProgram(w);f=h.getProgramInfoLog(w);p=h.getShaderInfoLog(l);m=h.getShaderInfoLog(n);t=q=!0;if(!1===h.getProgramParameter(w,h.LINK_STATUS))q=!1,console.error("THREE.WebGLProgram: shader error: ",h.getError(),"gl.VALIDATE_STATUS",h.getProgramParameter(w,h.VALIDATE_STATUS),"gl.getProgramInfoLog",f,p,m);else if(""!==f)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",
f);else if(""===p||""===m)t=!1;t&&(this.diagnostics={runnable:q,material:g,programLog:f,vertexShader:{log:p,prefix:k},fragmentShader:{log:m,prefix:d}});h.deleteShader(l);h.deleteShader(n);var v;this.getUniforms=function(){if(void 0===v){for(var a={},b=h.getProgramParameter(w,h.ACTIVE_UNIFORMS),c=0;c<b;c++){var d=h.getActiveUniform(w,c).name,e=h.getUniformLocation(w,d),f=d.lastIndexOf("[0]");-1!==f&&f===d.length-3&&(a[d.substr(0,f)]=e);a[d]=e}v=a}return v};var B;this.getAttributes=function(){if(void 0===
B){for(var a={},b=h.getProgramParameter(w,h.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=h.getActiveAttrib(w,c).name;a[d]=h.getAttribLocation(w,d)}B=a}return B};this.destroy=function(){h.deleteProgram(w);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});
this.id=c++;this.code=e;this.usedTimes=1;this.program=w;this.vertexShader=l;this.fragmentShader=n;return this}}();
THREE.WebGLPrograms=function(a,b){var c=[],d={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},e="precision supportsVertexTextures map envMap envMapMode lightMap aoMap emissiveMap bumpMap normalMap specularMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals maxDirLights maxPointLights maxSpotLights maxHemiLights maxShadows shadowMapEnabled shadowMapType shadowMapDebug alphaTest metal doubleSided flipSided".split(" ");this.getParameters=
function(c,e,h,k){for(var l,n,p,m,q=d[c.type],t=m=p=n=l=0,r=e.length;t<r;t++){var u=e[t];u.onlyShadow||!1===u.visible||(u instanceof THREE.DirectionalLight&&l++,u instanceof THREE.PointLight&&n++,u instanceof THREE.SpotLight&&p++,u instanceof THREE.HemisphereLight&&m++)}r=t=0;for(u=e.length;r<u;r++){var w=e[r];w.castShadow&&(w instanceof THREE.SpotLight&&t++,w instanceof THREE.DirectionalLight&&t++)}e=t;b.floatVertexTextures&&k&&k.skeleton&&k.skeleton.useVertexTexture?t=1024:(t=Math.floor((b.maxVertexUniforms-
20)/4),void 0!==k&&k instanceof THREE.SkinnedMesh&&(t=Math.min(k.skeleton.bones.length,t),t<k.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+k.skeleton.bones.length+", this GPU supports just "+t+" (try OpenGL instead of ANGLE)")));r=a.getPrecision();null!==c.precision&&(r=b.getMaxPrecision(c.precision),r!==c.precision&&console.warn("THREE.WebGLRenderer.initMaterial:",c.precision,"not supported, using",r,"instead."));return{shaderID:q,precision:r,supportsVertexTextures:b.vertexTextures,
map:!!c.map,envMap:!!c.envMap,envMapMode:c.envMap&&c.envMap.mapping,lightMap:!!c.lightMap,aoMap:!!c.aoMap,emissiveMap:!!c.emissiveMap,bumpMap:!!c.bumpMap,normalMap:!!c.normalMap,displacementMap:!!c.displacementMap,specularMap:!!c.specularMap,alphaMap:!!c.alphaMap,combine:c.combine,vertexColors:c.vertexColors,fog:h,useFog:c.fog,fogExp:h instanceof THREE.FogExp2,flatShading:c.shading===THREE.FlatShading,sizeAttenuation:c.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:c.skinning,
maxBones:t,useVertexTexture:b.floatVertexTextures&&k&&k.skeleton&&k.skeleton.useVertexTexture,morphTargets:c.morphTargets,morphNormals:c.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,maxDirLights:l,maxPointLights:n,maxSpotLights:p,maxHemiLights:m,maxShadows:e,shadowMapEnabled:a.shadowMap.enabled&&k.receiveShadow&&0<e,shadowMapType:a.shadowMap.type,shadowMapDebug:a.shadowMap.debug,alphaTest:c.alphaTest,metal:c.metal,doubleSided:c.side===THREE.DoubleSide,flipSided:c.side===
THREE.BackSide}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(d=0;d<e.length;d++){var l=e[d];c.push(l);c.push(b[l])}return c.join()};this.acquireProgram=function(b,d,e){for(var k,l=0,n=c.length;l<n;l++){var p=c[l];if(p.code===e){k=p;++k.usedTimes;break}}void 0===k&&(k=new THREE.WebGLProgram(a,e,b,d),c.push(k));return k};this.releaseProgram=function(a){if(0===
--a.usedTimes){var b=c.indexOf(a);c[b]=c[c.length-1];c.pop();a.destroy()}};this.programs=c};THREE.WebGLProperties=function(){var a={};this.get=function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c};this.delete=function(b){delete a[b.uuid]};this.clear=function(){a={}}};
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){var e=b.createShader(c);b.shaderSource(e,d);b.compileShader(e);!1===b.getShaderParameter(e,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(e)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",c===b.VERTEX_SHADER?"vertex":"fragment",b.getShaderInfoLog(e),a(d));return e}}();
THREE.WebGLShadowMap=function(a,b,c){function d(a,b){var c=a.geometry,c=void 0!==c.morphTargets&&0<c.morphTargets.length&&b.morphTargets,d=a instanceof THREE.SkinnedMesh&&b.skinning,c=a.customDepthMaterial?a.customDepthMaterial:d?c?u:r:c?t:q;c.visible=b.visible;c.wireframe=b.wireframe;c.wireframeLinewidth=b.wireframeLinewidth;return c}function e(a,b){if(!1!==a.visible){(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)&&a.castShadow&&(!1===a.frustumCulled||!0===h.intersectsObject(a))&&
!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld),n.push(a));for(var c=a.children,d=0,f=c.length;d<f;d++)e(c[d],b)}}var g=a.context,f=a.state,h=new THREE.Frustum,k=new THREE.Matrix4;new THREE.Vector3;new THREE.Vector3;var l=new THREE.Vector3,n=[],p=THREE.ShaderLib.depthRGBA,m=THREE.UniformsUtils.clone(p.uniforms),q=new THREE.ShaderMaterial({uniforms:m,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),t=new THREE.ShaderMaterial({uniforms:m,
vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,morphTargets:!0}),r=new THREE.ShaderMaterial({uniforms:m,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,skinning:!0}),u=new THREE.ShaderMaterial({uniforms:m,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,morphTargets:!0,skinning:!0});q._shadowPass=!0;t._shadowPass=!0;r._shadowPass=!0;u._shadowPass=!0;var w=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=THREE.PCFShadowMap;this.cullFace=THREE.CullFaceFront;
this.render=function(m,q){if(!1!==w.enabled&&(!1!==w.autoUpdate||!1!==w.needsUpdate)){g.clearColor(1,1,1,1);f.disable(g.BLEND);f.enable(g.CULL_FACE);g.frontFace(g.CCW);w.cullFace===THREE.CullFaceFront?g.cullFace(g.FRONT):g.cullFace(g.BACK);f.setDepthTest(!0);for(var p=0,t=b.length;p<t;p++){var r=b[p];if(r.castShadow){if(!r.shadowMap){var u=THREE.LinearFilter;w.type===THREE.PCFSoftShadowMap&&(u=THREE.NearestFilter);r.shadowMap=new THREE.WebGLRenderTarget(r.shadowMapWidth,r.shadowMapHeight,{minFilter:u,
magFilter:u,format:THREE.RGBAFormat});r.shadowMapSize=new THREE.Vector2(r.shadowMapWidth,r.shadowMapHeight);r.shadowMatrix=new THREE.Matrix4}if(!r.shadowCamera){if(r instanceof THREE.SpotLight)r.shadowCamera=new THREE.PerspectiveCamera(r.shadowCameraFov,r.shadowMapWidth/r.shadowMapHeight,r.shadowCameraNear,r.shadowCameraFar);else if(r instanceof THREE.DirectionalLight)r.shadowCamera=new THREE.OrthographicCamera(r.shadowCameraLeft,r.shadowCameraRight,r.shadowCameraTop,r.shadowCameraBottom,r.shadowCameraNear,
r.shadowCameraFar);else{console.error("THREE.ShadowMapPlugin: Unsupported light type for shadow",r);continue}m.add(r.shadowCamera);!0===m.autoUpdate&&m.updateMatrixWorld()}r.shadowCameraVisible&&!r.cameraHelper&&(r.cameraHelper=new THREE.CameraHelper(r.shadowCamera),m.add(r.cameraHelper));var D=r.shadowMap,G=r.shadowMatrix,u=r.shadowCamera;u.position.setFromMatrixPosition(r.matrixWorld);l.setFromMatrixPosition(r.target.matrixWorld);u.lookAt(l);u.updateMatrixWorld();u.matrixWorldInverse.getInverse(u.matrixWorld);
r.cameraHelper&&(r.cameraHelper.visible=r.shadowCameraVisible);r.shadowCameraVisible&&r.cameraHelper.update();G.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);G.multiply(u.projectionMatrix);G.multiply(u.matrixWorldInverse);k.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);h.setFromMatrix(k);a.setRenderTarget(D);a.clear();n.length=0;e(m,u);r=0;for(D=n.length;r<D;r++){var G=n[r],O=c.update(G),C=G.material;if(C instanceof THREE.MeshFaceMaterial)for(var F=O.groups,C=C.materials,K=0,L=F.length;K<
L;K++){var E=F[K],J=C[E.materialIndex];!0===J.visible&&a.renderBufferDirect(u,b,null,O,d(G,J),G,E)}else a.renderBufferDirect(u,b,null,O,d(G,C),G)}}}p=a.getClearColor();t=a.getClearAlpha();a.setClearColor(p,t);f.enable(g.BLEND);w.cullFace===THREE.CullFaceFront&&g.cullFace(g.BACK);a.resetGLState();w.needsUpdate=!1}}};
THREE.WebGLState=function(a,b,c){var d=this,e=new Uint8Array(16),g=new Uint8Array(16),f={},h=null,k=null,l=null,n=null,p=null,m=null,q=null,t=null,r=null,u=null,w=null,v=null,B=null,x=null,H=null,I=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),z=void 0,D={};this.init=function(){a.clearColor(0,0,0,1);a.clearDepth(1);a.clearStencil(0);this.enable(a.DEPTH_TEST);a.depthFunc(a.LEQUAL);a.frontFace(a.CCW);a.cullFace(a.BACK);this.enable(a.CULL_FACE);this.enable(a.BLEND);a.blendEquation(a.FUNC_ADD);a.blendFunc(a.SRC_ALPHA,
a.ONE_MINUS_SRC_ALPHA)};this.initAttributes=function(){for(var a=0,b=e.length;a<b;a++)e[a]=0};this.enableAttribute=function(b){e[b]=1;0===g[b]&&(a.enableVertexAttribArray(b),g[b]=1)};this.disableUnusedAttributes=function(){for(var b=0,c=g.length;b<c;b++)g[b]!==e[b]&&(a.disableVertexAttribArray(b),g[b]=0)};this.enable=function(b){!0!==f[b]&&(a.enable(b),f[b]=!0)};this.disable=function(b){!1!==f[b]&&(a.disable(b),f[b]=!1)};this.getCompressedTextureFormats=function(){if(null===h&&(h=[],b.get("WEBGL_compressed_texture_pvrtc")||
b.get("WEBGL_compressed_texture_s3tc")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)h.push(c[d]);return h};this.setBlending=function(b,d,e,f,g,h,r){b!==k&&(b===THREE.NoBlending?this.disable(a.BLEND):b===THREE.AdditiveBlending?(this.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):b===THREE.SubtractiveBlending?(this.enable(a.BLEND),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):b===THREE.MultiplyBlending?(this.enable(a.BLEND),
a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):b===THREE.CustomBlending?this.enable(a.BLEND):(this.enable(a.BLEND),a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),k=b);if(b===THREE.CustomBlending){g=g||d;h=h||e;r=r||f;if(d!==l||g!==m)a.blendEquationSeparate(c(d),c(g)),l=d,m=g;if(e!==n||f!==p||h!==q||r!==t)a.blendFuncSeparate(c(e),c(f),c(h),c(r)),n=e,p=f,q=h,t=r}else t=q=m=p=n=l=null};this.setDepthFunc=
function(b){if(r!==b){if(b)switch(b){case THREE.NeverDepth:a.depthFunc(a.NEVER);break;case THREE.AlwaysDepth:a.depthFunc(a.ALWAYS);break;case THREE.LessDepth:a.depthFunc(a.LESS);break;case THREE.LessEqualDepth:a.depthFunc(a.LEQUAL);break;case THREE.EqualDepth:a.depthFunc(a.EQUAL);break;case THREE.GreaterEqualDepth:a.depthFunc(a.GEQUAL);break;case THREE.GreaterDepth:a.depthFunc(a.GREATER);break;case THREE.NotEqualDepth:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);
r=b}};this.setDepthTest=function(b){b?this.enable(a.DEPTH_TEST):this.disable(a.DEPTH_TEST)};this.setDepthWrite=function(b){u!==b&&(a.depthMask(b),u=b)};this.setColorWrite=function(b){w!==b&&(a.colorMask(b,b,b,b),w=b)};this.setFlipSided=function(b){v!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),v=b)};this.setLineWidth=function(b){b!==B&&(a.lineWidth(b),B=b)};this.setPolygonOffset=function(b,c,d){b?this.enable(a.POLYGON_OFFSET_FILL):this.disable(a.POLYGON_OFFSET_FILL);!b||x===c&&H===d||(a.polygonOffset(c,
d),x=c,H=d)};this.setScissorTest=function(b){b?this.enable(a.SCISSOR_TEST):this.disable(a.SCISSOR_TEST)};this.activeTexture=function(b){void 0===b&&(b=a.TEXTURE0+I-1);z!==b&&(a.activeTexture(b),z=b)};this.bindTexture=function(b,c){void 0===z&&d.activeTexture();var e=D[z];void 0===e&&(e={type:void 0,texture:void 0},D[z]=e);if(e.type!==b||e.texture!==c)a.bindTexture(b,c),e.type=b,e.texture=c};this.compressedTexImage2D=function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}};
this.texImage2D=function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error(b)}};this.reset=function(){for(var b=0;b<g.length;b++)1===g[b]&&(a.disableVertexAttribArray(b),g[b]=0);f={};v=w=u=k=h=null}};
THREE.LensFlarePlugin=function(a,b){var c,d,e,g,f,h,k,l,n,p,m=a.context,q=a.state,t,r,u,w,v,B;this.render=function(x,H,I,z){if(0!==b.length){x=new THREE.Vector3;var D=z/I,G=.5*I,O=.5*z,C=16/z,F=new THREE.Vector2(C*D,C),K=new THREE.Vector3(1,1,0),L=new THREE.Vector2(1,1);if(void 0===u){var C=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),E=new Uint16Array([0,1,2,0,2,3]);t=m.createBuffer();r=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,t);m.bufferData(m.ARRAY_BUFFER,C,m.STATIC_DRAW);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
r);m.bufferData(m.ELEMENT_ARRAY_BUFFER,E,m.STATIC_DRAW);v=m.createTexture();B=m.createTexture();q.bindTexture(m.TEXTURE_2D,v);m.texImage2D(m.TEXTURE_2D,0,m.RGB,16,16,0,m.RGB,m.UNSIGNED_BYTE,null);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST);q.bindTexture(m.TEXTURE_2D,B);m.texImage2D(m.TEXTURE_2D,0,
m.RGBA,16,16,0,m.RGBA,m.UNSIGNED_BYTE,null);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST);var C=(w=0<m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
E=m.createProgram(),J=m.createShader(m.FRAGMENT_SHADER),y=m.createShader(m.VERTEX_SHADER),P="precision "+a.getPrecision()+" float;\n";m.shaderSource(J,P+C.fragmentShader);m.shaderSource(y,P+C.vertexShader);m.compileShader(J);m.compileShader(y);m.attachShader(E,J);m.attachShader(E,y);m.linkProgram(E);u=E;n=m.getAttribLocation(u,"position");p=m.getAttribLocation(u,"uv");c=m.getUniformLocation(u,"renderType");d=m.getUniformLocation(u,"map");e=m.getUniformLocation(u,"occlusionMap");g=m.getUniformLocation(u,
"opacity");f=m.getUniformLocation(u,"color");h=m.getUniformLocation(u,"scale");k=m.getUniformLocation(u,"rotation");l=m.getUniformLocation(u,"screenPosition")}m.useProgram(u);q.initAttributes();q.enableAttribute(n);q.enableAttribute(p);q.disableUnusedAttributes();m.uniform1i(e,0);m.uniform1i(d,1);m.bindBuffer(m.ARRAY_BUFFER,t);m.vertexAttribPointer(n,2,m.FLOAT,!1,16,0);m.vertexAttribPointer(p,2,m.FLOAT,!1,16,8);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,r);q.disable(m.CULL_FACE);m.depthMask(!1);E=0;for(J=
b.length;E<J;E++)if(C=16/z,F.set(C*D,C),y=b[E],x.set(y.matrixWorld.elements[12],y.matrixWorld.elements[13],y.matrixWorld.elements[14]),x.applyMatrix4(H.matrixWorldInverse),x.applyProjection(H.projectionMatrix),K.copy(x),L.x=K.x*G+G,L.y=K.y*O+O,w||0<L.x&&L.x<I&&0<L.y&&L.y<z){q.activeTexture(m.TEXTURE0);q.bindTexture(m.TEXTURE_2D,null);q.activeTexture(m.TEXTURE1);q.bindTexture(m.TEXTURE_2D,v);m.copyTexImage2D(m.TEXTURE_2D,0,m.RGB,L.x-8,L.y-8,16,16,0);m.uniform1i(c,0);m.uniform2f(h,F.x,F.y);m.uniform3f(l,
K.x,K.y,K.z);q.disable(m.BLEND);q.enable(m.DEPTH_TEST);m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0);q.activeTexture(m.TEXTURE0);q.bindTexture(m.TEXTURE_2D,B);m.copyTexImage2D(m.TEXTURE_2D,0,m.RGBA,L.x-8,L.y-8,16,16,0);m.uniform1i(c,1);q.disable(m.DEPTH_TEST);q.activeTexture(m.TEXTURE1);q.bindTexture(m.TEXTURE_2D,v);m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0);y.positionScreen.copy(K);y.customUpdateCallback?y.customUpdateCallback(y):y.updateLensFlares();m.uniform1i(c,2);q.enable(m.BLEND);for(var P=
0,U=y.lensFlares.length;P<U;P++){var Q=y.lensFlares[P];.001<Q.opacity&&.001<Q.scale&&(K.x=Q.x,K.y=Q.y,K.z=Q.z,C=Q.size*Q.scale/z,F.x=C*D,F.y=C,m.uniform3f(l,K.x,K.y,K.z),m.uniform2f(h,F.x,F.y),m.uniform1f(k,Q.rotation),m.uniform1f(g,Q.opacity),m.uniform3f(f,Q.color.r,Q.color.g,Q.color.b),q.setBlending(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst),a.setTexture(Q.texture,1),m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0))}}q.enable(m.CULL_FACE);q.enable(m.DEPTH_TEST);m.depthMask(!0);a.resetGLState()}}};
THREE.SpritePlugin=function(a,b){var c,d,e,g,f,h,k,l,n,p,m,q,t,r,u,w,v;function B(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var x=a.context,H=a.state,I,z,D,G,O=new THREE.Vector3,C=new THREE.Quaternion,F=new THREE.Vector3;this.render=function(K,L){if(0!==b.length){if(void 0===D){var E=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),J=new Uint16Array([0,1,2,0,2,3]);I=x.createBuffer();z=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,I);x.bufferData(x.ARRAY_BUFFER,E,x.STATIC_DRAW);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,
z);x.bufferData(x.ELEMENT_ARRAY_BUFFER,J,x.STATIC_DRAW);var E=x.createProgram(),J=x.createShader(x.VERTEX_SHADER),y=x.createShader(x.FRAGMENT_SHADER);x.shaderSource(J,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
x.shaderSource(y,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
x.compileShader(J);x.compileShader(y);x.attachShader(E,J);x.attachShader(E,y);x.linkProgram(E);D=E;w=x.getAttribLocation(D,"position");v=x.getAttribLocation(D,"uv");c=x.getUniformLocation(D,"uvOffset");d=x.getUniformLocation(D,"uvScale");e=x.getUniformLocation(D,"rotation");g=x.getUniformLocation(D,"scale");f=x.getUniformLocation(D,"color");h=x.getUniformLocation(D,"map");k=x.getUniformLocation(D,"opacity");l=x.getUniformLocation(D,"modelViewMatrix");n=x.getUniformLocation(D,"projectionMatrix");p=
x.getUniformLocation(D,"fogType");m=x.getUniformLocation(D,"fogDensity");q=x.getUniformLocation(D,"fogNear");t=x.getUniformLocation(D,"fogFar");r=x.getUniformLocation(D,"fogColor");u=x.getUniformLocation(D,"alphaTest");E=document.createElement("canvas");E.width=8;E.height=8;J=E.getContext("2d");J.fillStyle="white";J.fillRect(0,0,8,8);G=new THREE.Texture(E);G.needsUpdate=!0}x.useProgram(D);H.initAttributes();H.enableAttribute(w);H.enableAttribute(v);H.disableUnusedAttributes();H.disable(x.CULL_FACE);
H.enable(x.BLEND);x.bindBuffer(x.ARRAY_BUFFER,I);x.vertexAttribPointer(w,2,x.FLOAT,!1,16,0);x.vertexAttribPointer(v,2,x.FLOAT,!1,16,8);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,z);x.uniformMatrix4fv(n,!1,L.projectionMatrix.elements);H.activeTexture(x.TEXTURE0);x.uniform1i(h,0);J=E=0;(y=K.fog)?(x.uniform3f(r,y.color.r,y.color.g,y.color.b),y instanceof THREE.Fog?(x.uniform1f(q,y.near),x.uniform1f(t,y.far),x.uniform1i(p,1),J=E=1):y instanceof THREE.FogExp2&&(x.uniform1f(m,y.density),x.uniform1i(p,2),J=E=2)):
(x.uniform1i(p,0),J=E=0);for(var y=0,P=b.length;y<P;y++){var U=b[y];U.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,U.matrixWorld);U.z=-U.modelViewMatrix.elements[14]}b.sort(B);for(var Q=[],y=0,P=b.length;y<P;y++){var U=b[y],R=U.material;x.uniform1f(u,R.alphaTest);x.uniformMatrix4fv(l,!1,U.modelViewMatrix.elements);U.matrixWorld.decompose(O,C,F);Q[0]=F.x;Q[1]=F.y;U=0;K.fog&&R.fog&&(U=J);E!==U&&(x.uniform1i(p,U),E=U);null!==R.map?(x.uniform2f(c,R.map.offset.x,R.map.offset.y),x.uniform2f(d,
R.map.repeat.x,R.map.repeat.y)):(x.uniform2f(c,0,0),x.uniform2f(d,1,1));x.uniform1f(k,R.opacity);x.uniform3f(f,R.color.r,R.color.g,R.color.b);x.uniform1f(e,R.rotation);x.uniform2fv(g,Q);H.setBlending(R.blending,R.blendEquation,R.blendSrc,R.blendDst);H.setDepthTest(R.depthTest);H.setDepthWrite(R.depthWrite);R.map&&R.map.image&&R.map.image.width?a.setTexture(R.map,0):a.setTexture(G,0);x.drawElements(x.TRIANGLES,6,x.UNSIGNED_SHORT,0)}H.enable(x.CULL_FACE);a.resetGLState()}}};
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var g=new THREE.Texture(void 0,b);e.load(a,function(a){g.image=a;g.needsUpdate=!0;c&&c(g)},void 0,function(a){d&&d(a)});g.sourceFile=a;return g},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var g=new THREE.CubeTexture([],b),f=0;b=function(b){e.load(a[b],function(a){g.images[b]=a;f+=1;6===f&&(g.needsUpdate=!0,c&&c(g))},void 0,
d)};for(var h=0,k=a.length;h<k;++h)b(h);return g},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,g=document.createElement("canvas");
g.width=d;g.height=e;var f=g.getContext("2d");f.drawImage(a,0,0);for(var h=f.getImageData(0,0,d,e).data,k=f.createImageData(d,e),l=k.data,n=0;n<d;n++)for(var p=0;p<e;p++){var m=0>p-1?0:p-1,q=p+1>e-1?e-1:p+1,t=0>n-1?0:n-1,r=n+1>d-1?d-1:n+1,u=[],w=[0,0,h[4*(p*d+n)]/255*b];u.push([-1,0,h[4*(p*d+t)]/255*b]);u.push([-1,-1,h[4*(m*d+t)]/255*b]);u.push([0,-1,h[4*(m*d+n)]/255*b]);u.push([1,-1,h[4*(m*d+r)]/255*b]);u.push([1,0,h[4*(p*d+r)]/255*b]);u.push([1,1,h[4*(q*d+r)]/255*b]);u.push([0,1,h[4*(q*d+n)]/255*
b]);u.push([-1,1,h[4*(q*d+t)]/255*b]);m=[];t=u.length;for(q=0;q<t;q++){var r=u[q],v=u[(q+1)%t],r=[r[0]-w[0],r[1]-w[1],r[2]-w[2]],v=[v[0]-w[0],v[1]-w[1],v[2]-w[2]];m.push(c([r[1]*v[2]-r[2]*v[1],r[2]*v[0]-r[0]*v[2],r[0]*v[1]-r[1]*v[0]]))}u=[0,0,0];for(q=0;q<m.length;q++)u[0]+=m[q][0],u[1]+=m[q][1],u[2]+=m[q][2];u[0]/=m.length;u[1]/=m.length;u[2]/=m.length;w=4*(p*d+n);l[w]=(u[0]+1)/2*255|0;l[w+1]=(u[1]+1)/2*255|0;l[w+2]=255*u[2]|0;l[w+3]=255}f.putImageData(k,0,0);return g},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),g=Math.floor(255*c.r),f=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=g,e[3*h+1]=f,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Group,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face.toLowerCase()][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),g=e.length,f=[];for(a=0;a<g;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;f.push(h.path)}return{paths:f,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var g=[],f,h,k,l,n,p,m,q,t,r,u,w=b.glyphs[a]||b.glyphs["?"];if(w){if(w.o)for(b=w._cachedOutline||(w._cachedOutline=w.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;n=b[a++]*c;e.moveTo(k,n);
break;case "l":k=b[a++]*c+d;n=b[a++]*c;e.lineTo(k,n);break;case "q":k=b[a++]*c+d;n=b[a++]*c;q=b[a++]*c+d;t=b[a++]*c;e.quadraticCurveTo(q,t,k,n);if(f=g[g.length-1])for(p=f.x,m=f.y,f=1,h=this.divisions;f<=h;f++){var v=f/h;THREE.Shape.Utils.b2(v,p,q,k);THREE.Shape.Utils.b2(v,m,t,n)}break;case "b":if(k=b[a++]*c+d,n=b[a++]*c,q=b[a++]*c+d,t=b[a++]*c,r=b[a++]*c+d,u=b[a++]*c,e.bezierCurveTo(q,t,r,u,k,n),f=g[g.length-1])for(p=f.x,m=f.y,f=1,h=this.divisions;f<=h;f++)v=f/h,THREE.Shape.Utils.b3(v,p,q,r,k),THREE.Shape.Utils.b3(v,
m,t,u,n)}return{offset:w.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",g=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=g;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(g=c.length;e<g;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,g=b-1,f=0;f<b;g=f++)e+=a[g].x*a[f].y-a[f].x*a[g].y;return.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var g=[],f=[],h=[],k,l,n;if(0<b(a))for(l=0;l<e;l++)f[l]=l;else for(l=0;l<e;l++)f[l]=e-1-l;var p=2*e;for(l=e-1;2<e;){if(0>=p--){console.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);n=l+1;e<=n&&(n=0);var m;a:{var q=m=void 0,t=void 0,r=void 0,
u=void 0,w=void 0,v=void 0,B=void 0,x=void 0,q=a[f[k]].x,t=a[f[k]].y,r=a[f[l]].x,u=a[f[l]].y,w=a[f[n]].x,v=a[f[n]].y;if(1E-10>(r-q)*(v-t)-(u-t)*(w-q))m=!1;else{var H=void 0,I=void 0,z=void 0,D=void 0,G=void 0,O=void 0,C=void 0,F=void 0,K=void 0,L=void 0,K=F=C=x=B=void 0,H=w-r,I=v-u,z=q-w,D=t-v,G=r-q,O=u-t;for(m=0;m<e;m++)if(B=a[f[m]].x,x=a[f[m]].y,!(B===q&&x===t||B===r&&x===u||B===w&&x===v)&&(C=B-q,F=x-t,K=B-r,L=x-u,B-=w,x-=v,K=H*L-I*K,C=G*F-O*C,F=z*x-D*B,-1E-10<=K&&-1E-10<=F&&-1E-10<=C)){m=!1;break a}m=
!0}}if(m){g.push([a[f[k]],a[f[l]],a[f[n]]]);h.push([f[k],f[l],f[n]]);k=l;for(n=l+1;n<e;k++,n++)f[k]=f[n];e--;p=2*e}}return d?h:g};a.Triangulate.area=b;return a})(THREE.FontUtils);THREE.typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};"undefined"!==typeof self&&(self._typeface_js=THREE.typeface_js);
THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.panner=this.context.createPanner();this.panner.connect(this.gain);this.autoplay=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);
THREE.Audio.prototype.constructor=THREE.Audio;THREE.Audio.prototype.load=function(a){var b=this,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(a){b.context.decodeAudioData(this.response,function(a){b.source.buffer=a;b.autoplay&&b.play()})};c.send();return this};
THREE.Audio.prototype.play=function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.start(0,this.startTime);a.playbackRate.value=this.playbackRate;this.isPlaying=!0;this.source=a;this.connect()}};THREE.Audio.prototype.pause=function(){this.source.stop();this.startTime=this.context.currentTime};
THREE.Audio.prototype.stop=function(){this.source.stop();this.startTime=0};THREE.Audio.prototype.connect=function(){void 0!==this.filter?(this.source.connect(this.filter),this.filter.connect(this.panner)):this.source.connect(this.panner)};THREE.Audio.prototype.disconnect=function(){void 0!==this.filter?(this.source.disconnect(this.filter),this.filter.disconnect(this.panner)):this.source.disconnect(this.panner)};
THREE.Audio.prototype.setFilter=function(a){!0===this.isPlaying?(this.disconnect(),this.filter=a,this.connect()):this.filter=a};THREE.Audio.prototype.getFilter=function(){return this.filter};THREE.Audio.prototype.setPlaybackRate=function(a){this.playbackRate=a;!0===this.isPlaying&&(this.source.playbackRate.value=this.playbackRate)};THREE.Audio.prototype.getPlaybackRate=function(){return this.playbackRate};THREE.Audio.prototype.onEnded=function(){this.isPlaying=!1};
THREE.Audio.prototype.setLoop=function(a){this.source.loop=a};THREE.Audio.prototype.getLoop=function(){return this.source.loop};THREE.Audio.prototype.setRefDistance=function(a){this.panner.refDistance=a};THREE.Audio.prototype.getRefDistance=function(){return this.panner.refDistance};THREE.Audio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a};THREE.Audio.prototype.getRolloffFactor=function(){return this.panner.rolloffFactor};
THREE.Audio.prototype.setVolume=function(a){this.gain.gain.value=a};THREE.Audio.prototype.getVolume=function(){return this.gain.gain.value};THREE.Audio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}();THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext)};
THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3;return function(e){THREE.Object3D.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var g=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.setPosition(a.x,a.y,a.z);e.setOrientation(d.x,d.y,d.z,g.x,g.y,g.z)}}();THREE.Curve=function(){};
THREE.Curve.prototype.getPoint=function(a){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,g=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),g+=c.distanceTo(d),b.push(g),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,g;g=b?b:a*c[e-1];for(var f=0,h=e-1,k;f<=h;)if(d=Math.floor(f+(h-f)/2),k=c[d]-g,0>k)f=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]===g)return d/(e-1);f=c[d];return c=(d+(g-f)/(c[d+1]-f))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var g=e*e;return(2*b-2*c+a+d)*e*g+(-3*b+3*c-2*a-d)*g+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,g,f;b=c=Number.NEGATIVE_INFINITY;e=g=Number.POSITIVE_INFINITY;var h,k,l,n,p=a[0]instanceof THREE.Vector3;n=p?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<g&&(g=h.y),p&&(h.z>d?d=h.z:h.z<f&&(f=h.z)),n.add(h);a={minX:e,minY:g,maxX:b,maxY:c};p&&(a.maxZ=d,a.minZ=f);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,g,f,h,k;d=0;for(e=a.length;d<e;d++)g=a[d],f=g.x,h=g.y,k=f/c.maxX,k=b.getUtoTmapping(k,f),f=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),g.x=f.x+k.x,g.y=f.y+k.y;return a};THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;
THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};
THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),g=this.actions[this.actions.length-1].args,g=new THREE.QuadraticBezierCurve(new THREE.Vector2(g[g.length-2],g[g.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(g);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,g){var f=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,g));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:f})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,g){var f=this.actions[this.actions.length-1].args;this.absarc(a+f[f.length-2],b+f[f.length-1],c,d,e,g)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,g){this.absellipse(a,b,c,c,d,e,g)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,g,f,h){var k=this.actions[this.actions.length-1].args;this.absellipse(a+k[k.length-2],b+k[k.length-1],c,d,e,g,f,h)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,g,f,h){var k=[a,b,c,d,e,g,f,h||0];a=new THREE.EllipseCurve(a,b,c,d,e,g,f,h);this.curves.push(a);a=a.getPoint(1);k.push(a.x);k.push(a.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:k})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,g,f,h,k,l,n,p,m,q,t,r;d=0;for(e=this.actions.length;d<e;d++)switch(g=this.actions[d],f=g.action,g=g.args,f){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(g[0],g[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(g[0],g[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=g[2];k=g[3];p=g[0];m=g[1];0<c.length?(f=c[c.length-1],q=f.x,t=f.y):(f=this.actions[d-
1].args,q=f[f.length-2],t=f[f.length-1]);for(g=1;g<=a;g++)r=g/a,f=THREE.Shape.Utils.b2(r,q,p,h),r=THREE.Shape.Utils.b2(r,t,m,k),c.push(new THREE.Vector2(f,r));break;case THREE.PathActions.BEZIER_CURVE_TO:h=g[4];k=g[5];p=g[0];m=g[1];l=g[2];n=g[3];0<c.length?(f=c[c.length-1],q=f.x,t=f.y):(f=this.actions[d-1].args,q=f[f.length-2],t=f[f.length-1]);for(g=1;g<=a;g++)r=g/a,f=THREE.Shape.Utils.b3(r,q,p,l,h),r=THREE.Shape.Utils.b3(r,t,m,n,k),c.push(new THREE.Vector2(f,r));break;case THREE.PathActions.CSPLINE_THRU:f=
this.actions[d-1].args;r=[new THREE.Vector2(f[f.length-2],f[f.length-1])];f=a*g[0].length;r=r.concat(g[0]);r=new THREE.SplineCurve(r);for(g=1;g<=f;g++)c.push(r.getPointAt(g/f));break;case THREE.PathActions.ARC:h=g[0];k=g[1];m=g[2];l=g[3];f=g[4];p=!!g[5];q=f-l;t=2*a;for(g=1;g<=t;g++)r=g/t,p||(r=1-r),r=l+r*q,f=h+m*Math.cos(r),r=k+m*Math.sin(r),c.push(new THREE.Vector2(f,r));break;case THREE.PathActions.ELLIPSE:h=g[0];k=g[1];m=g[2];n=g[3];l=g[4];f=g[5];p=!!g[6];var u=g[7];q=f-l;t=2*a;var w,v;0!==u&&
(w=Math.cos(u),v=Math.sin(u));for(g=1;g<=t;g++){r=g/t;p||(r=1-r);r=l+r*q;f=h+m*Math.cos(r);r=k+n*Math.sin(r);if(0!==u){var B=f;f=(B-h)*w-(r-k)*v+h;r=(B-h)*v+(r-k)*w+k}c.push(new THREE.Vector2(f,r))}}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(1E-10<Math.abs(l)){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&
a.x<=h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d===THREE.PathActions.MOVE_TO&&0!==g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!==g.actions.length&&f.push(g);return f}(this.actions);if(0===e.length)return[];if(!0===b)return c(e);var g,f,h,k=[];if(1===e.length)return f=e[0],h=new THREE.Shape,h.actions=f.actions,h.curves=f.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),
l=a?!l:l;h=[];var n=[],p=[],m=0,q;n[m]=void 0;p[m]=[];var t,r;t=0;for(r=e.length;t<r;t++)f=e[t],q=f.getPoints(),g=THREE.Shape.Utils.isClockWise(q),(g=a?!g:g)?(!l&&n[m]&&m++,n[m]={s:new THREE.Shape,p:q},n[m].s.actions=f.actions,n[m].s.curves=f.curves,l&&m++,p[m]=[]):p[m].push({h:f,p:q[0]});if(!n[0])return c(e);if(1<n.length){t=!1;r=[];f=0;for(e=n.length;f<e;f++)h[f]=[];f=0;for(e=n.length;f<e;f++)for(g=p[f],l=0;l<g.length;l++){m=g[l];q=!0;for(var u=0;u<n.length;u++)d(m.p,n[u].p)&&(f!==u&&r.push({froms:f,
tos:u,hole:l}),q?(q=!1,h[u].push(m)):t=!0);q&&h[f].push(m)}0<r.length&&(t||(p=h))}t=0;for(r=n.length;t<r;t++)for(h=n[t].s,k.push(h),f=p[t],e=0,g=f.length;e<g;e++)h.holes.push(f[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};
THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,n=a.x-d.x,p=a.y-d.y,z=h*k-g*l,D=h*n-g*p;if(1E-10<Math.abs(z)){if(0<z){if(0>D||D>z)return[];k=l*n-k*p;if(0>k||k>z)return[]}else{if(0<D||D<z)return[];k=l*n-k*p;if(0<k||k<z)return[]}if(0===k)return!f||0!==D&&D!==z?[a]:[];if(k===z)return!f||0!==D&&D!==z?[b]:[];if(0===
D)return[d];if(D===z)return[e];f=k/z;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==D||l*n!==k*p)return[];h=0===g&&0===h;k=0===k&&0===l;if(h&&k)return a.x!==d.x||a.y!==d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,z=d.x,l=e,d=e.x):(b=e,z=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,z=d.y,l=e,d=e.y):(b=e,z=e.y,l=d,d=d.y));return k<=z?a<z?[]:a===z?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:
k===d?f?[]:[g]:a<=d?[g,h]:[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var g,f,h,k,l,n={};h=a.concat();g=0;for(f=b.length;g<f;g++)Array.prototype.push.apply(h,b[g]);g=0;for(f=h.length;g<f;g++)l=h[g].x+":"+h[g].y,void 0!==n[l]&&console.warn("THREE.Shape: Duplicate point",l),n[l]=g;g=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=
0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],n,p,I,z,D,G=[],O,C,F,K=0;for(n=b.length;K<n;K++)l.push(K);O=0;for(var L=2*
l.length;0<l.length;){L--;if(0>L){console.log("Infinite Loop! Holes left:"+l.length+", Probably Hole outside Shape!");break}for(p=O;p<h.length;p++){I=h[p];n=-1;for(K=0;K<l.length;K++)if(z=l[K],D=I.x+":"+I.y+":"+z,void 0===G[D]){k=b[z];for(C=0;C<k.length;C++)if(z=k[C],c(p,C)&&!f(I,z)&&!g(I,z)){n=C;l.splice(K,1);O=h.slice(0,p+1);z=h.slice(p);C=k.slice(n);F=k.slice(0,n+1);h=O.concat(C).concat(F).concat(z);O=p;break}if(0<=n)break;G[D]=!0}if(0<=n)break}}return h}(a,b);var p=THREE.FontUtils.Triangulate(g,
!1);g=0;for(f=p.length;g<f;g++)for(k=p[g],h=0;3>h;h++)l=k[h].x+":"+k[h].y,l=n[l],void 0!==l&&(k[h]=l);return p.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-
a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};
THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;
THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=new THREE.Vector2;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return b};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=new THREE.Vector2;b.x=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);return b.normalize()};
THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0===c?c:c-1],e=b[c],g=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector2;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,g.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,g.y,b.y,a);return c};
THREE.EllipseCurve=function(a,b,c,d,e,g,f,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=g;this.aClockwise=f;this.aRotation=h||0};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;
THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);var c=this.aY+this.yRadius*Math.sin(b);if(0!==this.aRotation){var b=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a;a=(e-this.aX)*b-(c-this.aY)*d+this.aX;c=(e-this.aX)*d+(c-this.aY)*b+this.aY}return new THREE.Vector2(a,c)};
THREE.ArcCurve=function(a,b,c,d,e,g){THREE.EllipseCurve.call(this,a,b,c,c,d,e,g)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);b.z=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return b});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);b.y=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b.z=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return b});
THREE.SplineCurve3=THREE.Curve.create(function(a){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],g=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,g.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,g.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,g.z,
b.z,a);return c});
THREE.CatmullRomCurve3=function(){function a(){}var b=new THREE.Vector3,c=new a,d=new a,e=new a;a.prototype.init=function(a,b,c,d){this.c0=a;this.c1=c;this.c2=-3*a+3*b-2*c-d;this.c3=2*a-2*b+c+d};a.prototype.initNonuniformCatmullRom=function(a,b,c,d,e,n,p){a=((b-a)/e-(c-a)/(e+n)+(c-b)/n)*n;d=((c-b)/n-(d-b)/(n+p)+(d-c)/p)*n;this.init(b,c,a,d)};a.prototype.initCatmullRom=function(a,b,c,d,e){this.init(b,c,e*(c-a),e*(d-b))};a.prototype.calc=function(a){var b=a*a;return this.c0+this.c1*a+this.c2*b+this.c3*
b*a};return THREE.Curve.create(function(a){this.points=a||[]},function(a){var f=this.points,h,k;k=f.length;2>k&&console.log("duh, you need at least 2 points");a*=k-1;h=Math.floor(a);a-=h;0===a&&h===k-1&&(h=k-2,a=1);var l,n,p;0===h?(b.subVectors(f[0],f[1]).add(f[0]),l=b):l=f[h-1];n=f[h];p=f[h+1];h+2<k?f=f[h+2]:(b.subVectors(f[k-1],f[k-2]).add(f[k-2]),f=b);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var m="chordal"===this.type?.5:.25;k=Math.pow(l.distanceToSquared(n),m);
h=Math.pow(n.distanceToSquared(p),m);m=Math.pow(p.distanceToSquared(f),m);1E-4>h&&(h=1);1E-4>k&&(k=h);1E-4>m&&(m=h);c.initNonuniformCatmullRom(l.x,n.x,p.x,f.x,k,h,m);d.initNonuniformCatmullRom(l.y,n.y,p.y,f.y,k,h,m);e.initNonuniformCatmullRom(l.z,n.z,p.z,f.z,k,h,m)}else"catmullrom"===this.type&&(k=void 0!==this.tension?this.tension:.5,c.initCatmullRom(l.x,n.x,p.x,f.x,k),d.initCatmullRom(l.y,n.y,p.y,f.y,k),e.initCatmullRom(l.z,n.z,p.z,f.z,k));return new THREE.Vector3(c.calc(a),d.calc(a),e.calc(a))})}();
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-0;var c=Math.floor(a);a-=c;var c=c+(0<c?0:(Math.floor(Math.abs(c)/b.length)+1)*b.length),d=b[(c-1)%b.length],e=b[c%b.length],g=b[(c+1)%b.length],b=b[(c+2)%b.length],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,g.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,g.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,g.z,b.z,a);return c});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){console.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){console.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){console.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0===a.initialized)return a;for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var g=a.hierarchy[b].keys[c].morphTargets[e];d[g]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var f=
{};for(g in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===g){f[g]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(f[g]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=f}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].resetBlendWeights();
for(b=0;b<this.animations.length;b++)this.animations[b].update(a)}};THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};
THREE.Animation.prototype={constructor:THREE.Animation,keyTypes:["pos","rot","scl"],play:function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)},stop:function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)},reset:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];void 0===c.animationCache&&(c.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}});
var d=this.data.name,e=c.animationCache.animations,g=e[d];void 0===g&&(g={prevKey:{pos:0,rot:0,scl:0},nextKey:{pos:0,rot:0,scl:0},originalMatrix:c.matrix},e[d]=g);for(c=0;3>c;c++){for(var d=this.keyTypes[c],e=this.data.hierarchy[a].keys[0],f=this.getNextKeyWith(d,a,1);f.time<this.currentTime&&f.index>e.index;)e=f,f=this.getNextKeyWith(d,a,f.index+1);g.prevKey[d]=e;g.nextKey[d]=f}}},resetBlendWeights:function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a].animationCache;void 0!==
c&&(c=c.blending,c.positionWeight=0,c.quaternionWeight=0,c.scaleWeight=0)}},update:function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,p,m,q,t,r;e=(a.length-1)*b;p=Math.floor(e);e-=p;c[0]=0===p?p:p-1;c[1]=p;c[2]=p>a.length-2?p:p+1;c[3]=p>a.length-3?p:p+2;p=a[c[0]];q=a[c[1]];t=a[c[2]];r=a[c[3]];c=e*e;m=e*c;d[0]=g(p[0],q[0],t[0],r[0],e,c,m);d[1]=g(p[1],q[1],t[1],r[1],e,c,m);d[2]=g(p[2],q[2],t[2],r[2],e,c,m);return d},g=function(a,b,c,d,
e,g,m){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*m+(-3*(b-c)-2*a-d)*g+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(this.currentTime>f||0>this.currentTime)this.loop?(this.currentTime%=f,0>this.currentTime&&(this.currentTime+=f),this.reset()):this.stop();f=0;for(var g=this.hierarchy.length;f<g;f++)for(var k=this.hierarchy[f],l=k.animationCache.animations[this.data.name],n=k.animationCache.blending,p=0;3>p;p++){var m=this.keyTypes[p],
q=l.prevKey[m],t=l.nextKey[m];if(0<this.timeScale&&t.time<=this.currentTime||0>this.timeScale&&q.time>=this.currentTime){q=this.data.hierarchy[f].keys[0];for(t=this.getNextKeyWith(m,f,1);t.time<this.currentTime&&t.index>q.index;)q=t,t=this.getNextKeyWith(m,f,t.index+1);l.prevKey[m]=q;l.nextKey[m]=t}var r=(this.currentTime-q.time)/(t.time-q.time),u=q[m],w=t[m];0>r&&(r=0);1<r&&(r=1);if("pos"===m)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=u[0]+(w[0]-u[0])*r,c.y=u[1]+(w[1]-u[1])*r,
c.z=u[2]+(w[2]-u[2])*r,q=this.weight/(this.weight+n.positionWeight),k.position.lerp(c,q),n.positionWeight+=this.weight;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,q.index-1).pos,a[1]=u,a[2]=w,a[3]=this.getNextKeyWith("pos",f,t.index+1).pos,r=.33*r+.33,t=e(a,r),q=this.weight/(this.weight+n.positionWeight),n.positionWeight+=this.weight,m=k.position,m.x+=(t[0]-m.x)*q,m.y+=(t[1]-
m.y)*q,m.z+=(t[2]-m.z)*q,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(r=e(a,1.01*r),b.set(r[0],r[1],r[2]),b.sub(m),b.y=0,b.normalize(),r=Math.atan2(b.x,b.z),k.rotation.set(0,r,0))}else"rot"===m?(THREE.Quaternion.slerp(u,w,d,r),0===n.quaternionWeight?(k.quaternion.copy(d),n.quaternionWeight=this.weight):(q=this.weight/(this.weight+n.quaternionWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,q),n.quaternionWeight+=this.weight)):"scl"===m&&(c.x=u[0]+(w[0]-u[0])*r,c.y=
u[1]+(w[1]-u[1])*r,c.z=u[2]+(w[2]-u[2])*r,q=this.weight/(this.weight+n.scaleWeight),k.scale.lerp(c,q),n.scaleWeight+=this.weight)}return!0}}}(),getNextKeyWith:function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]},getPrevKeyWith:function(a,b,c){var d=
this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]}};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var g=c[e],f=this.getNextKeyWith(g,a,0);f&&f.apply(g)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype={constructor:THREE.KeyFrameAnimation,play:function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=
c[1],this.startTime=Math.min(c[0].time,this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)},stop:function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}},update:function(a){if(!1!==
this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var g=d.prevKey,f=d.nextKey;if(f.time<=this.currentTime){for(;f.time<this.currentTime&&f.index>g.index;)g=f,f=e[g.index+1];d.prevKey=g;d.nextKey=f}f.time>=this.currentTime?g.interpolate(f,this.currentTime):
g.interpolate(f,f.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}},getNextKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]},getPrevKeyWith:function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]}};
THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.currentFrame=this.lastFrame=0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(a){if(!1!==this.isPlaying){this.currentTime+=a;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);var b=this.duration/this.frames;a=Math.floor(this.currentTime/b);var c=this.mesh.morphTargetInfluences;a!==this.currentFrame&&(c[this.lastFrame]=0,c[this.currentFrame]=
1,c[a]=0,this.lastFrame=this.currentFrame,this.currentFrame=a);b=this.currentTime%b/b;c[a]=b;c[this.lastFrame]=1-b}}};
THREE.BoxGeometry=function(a,b,c,d,e,g){function f(a,b,c,d,e,f,g,r){var u,w=h.widthSegments,v=h.heightSegments,B=e/2,x=f/2,H=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)u="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)u="y",v=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)u="x",w=h.depthSegments;var I=w+1,z=v+1,D=e/w,G=f/v,O=new THREE.Vector3;O[u]=0<g?1:-1;for(e=0;e<z;e++)for(f=0;f<I;f++){var C=new THREE.Vector3;C[a]=(f*D-B)*c;C[b]=(e*G-x)*d;C[u]=g;h.vertices.push(C)}for(e=
0;e<v;e++)for(f=0;f<w;f++)x=f+I*e,a=f+I*(e+1),b=f+1+I*(e+1),c=f+1+I*e,d=new THREE.Vector2(f/w,1-e/v),g=new THREE.Vector2(f/w,1-(e+1)/v),u=new THREE.Vector2((f+1)/w,1-(e+1)/v),B=new THREE.Vector2((f+1)/w,1-e/v),x=new THREE.Face3(x+H,a+H,c+H),x.normal.copy(O),x.vertexNormals.push(O.clone(),O.clone(),O.clone()),x.materialIndex=r,h.faces.push(x),h.faceVertexUvs[0].push([d,g,B]),x=new THREE.Face3(a+H,b+H,c+H),x.normal.copy(O),x.vertexNormals.push(O.clone(),O.clone(),O.clone()),x.materialIndex=r,h.faces.push(x),
h.faceVertexUvs[0].push([g.clone(),u,B.clone()])}THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:g};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=g||1;var h=this;d=a/2;e=b/2;g=c/2;f("z","y",-1,-1,c,b,d,0);f("z","y",1,-1,c,b,-d,1);f("x","z",1,1,a,c,e,2);f("x","z",1,-1,a,c,-e,3);f("x","y",1,-1,a,b,g,4);f("x","y",-1,-1,a,b,-g,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;THREE.BoxGeometry.prototype.clone=function(){return new THREE.BoxGeometry(this.parameters.width,this.parameters.height,this.parameters.depth,this.parameters.widthSegments,this.parameters.heightSegments,this.parameters.depthSegments)};THREE.CubeGeometry=THREE.BoxGeometry;
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,g=[];e=new THREE.Vector3;var f=new THREE.Vector2(.5,.5);this.vertices.push(e);g.push(f);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);g.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,
0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([g[e].clone(),g[e+1].clone(),f.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;
THREE.CircleGeometry.prototype.clone=function(){return new THREE.CircleGeometry(this.parameters.radius,this.parameters.segments,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.CircleBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=b+2,g=new Float32Array(3*e),f=new Float32Array(3*e),e=new Float32Array(2*e);f[3]=1;e[0]=.5;e[1]=.5;for(var h=0,k=3,l=2;h<=b;h++,k+=3,l+=2){var n=c+h/b*d;g[k]=a*Math.cos(n);g[k+1]=a*Math.sin(n);f[k+2]=1;e[l]=(g[k]/a+1)/2;e[l+1]=(g[k+1]/a+1)/2}c=
[];for(k=1;k<=b;k++)c.push(k),c.push(k+1),c.push(0);this.setIndex(new THREE.BufferAttribute(new Uint16Array(c),1));this.addAttribute("position",new THREE.BufferAttribute(g,3));this.addAttribute("normal",new THREE.BufferAttribute(f,3));this.addAttribute("uv",new THREE.BufferAttribute(e,2));this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.CircleBufferGeometry.prototype.constructor=THREE.CircleBufferGeometry;
THREE.CircleBufferGeometry.prototype.clone=function(){var a=new THREE.CircleBufferGeometry(this.parameters.radius,this.parameters.segments,this.parameters.thetaStart,this.parameters.thetaLength);a.copy(this);return a};
THREE.CylinderGeometry=function(a,b,c,d,e,g,f,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:g,thetaStart:f,thetaLength:h};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;g=void 0!==g?g:!1;f=void 0!==f?f:0;h=void 0!==h?h:2*Math.PI;var k=c/2,l,n,p=[],m=[];for(n=0;n<=e;n++){var q=[],t=[],r=n/e,u=r*(b-a)+a;for(l=0;l<=d;l++){var w=l/d,v=new THREE.Vector3;v.x=u*Math.sin(w*h+
f);v.y=-r*c+k;v.z=u*Math.cos(w*h+f);this.vertices.push(v);q.push(this.vertices.length-1);t.push(new THREE.Vector2(w,1-r))}p.push(q);m.push(t)}c=(b-a)/c;for(l=0;l<d;l++)for(0!==a?(f=this.vertices[p[0][l]].clone(),h=this.vertices[p[0][l+1]].clone()):(f=this.vertices[p[1][l]].clone(),h=this.vertices[p[1][l+1]].clone()),f.setY(Math.sqrt(f.x*f.x+f.z*f.z)*c).normalize(),h.setY(Math.sqrt(h.x*h.x+h.z*h.z)*c).normalize(),n=0;n<e;n++){var q=p[n][l],t=p[n+1][l],r=p[n+1][l+1],u=p[n][l+1],w=f.clone(),v=f.clone(),
B=h.clone(),x=h.clone(),H=m[n][l].clone(),I=m[n+1][l].clone(),z=m[n+1][l+1].clone(),D=m[n][l+1].clone();this.faces.push(new THREE.Face3(q,t,u,[w,v,x]));this.faceVertexUvs[0].push([H,I,D]);this.faces.push(new THREE.Face3(t,r,u,[v.clone(),B,x.clone()]));this.faceVertexUvs[0].push([I.clone(),z,D.clone()])}if(!1===g&&0<a)for(this.vertices.push(new THREE.Vector3(0,k,0)),l=0;l<d;l++)q=p[0][l],t=p[0][l+1],r=this.vertices.length-1,w=new THREE.Vector3(0,1,0),v=new THREE.Vector3(0,1,0),B=new THREE.Vector3(0,
1,0),H=m[0][l].clone(),I=m[0][l+1].clone(),z=new THREE.Vector2(I.x,0),this.faces.push(new THREE.Face3(q,t,r,[w,v,B],void 0,1)),this.faceVertexUvs[0].push([H,I,z]);if(!1===g&&0<b)for(this.vertices.push(new THREE.Vector3(0,-k,0)),l=0;l<d;l++)q=p[e][l+1],t=p[e][l],r=this.vertices.length-1,w=new THREE.Vector3(0,-1,0),v=new THREE.Vector3(0,-1,0),B=new THREE.Vector3(0,-1,0),H=m[e][l+1].clone(),I=m[e][l].clone(),z=new THREE.Vector2(I.x,1),this.faces.push(new THREE.Face3(q,t,r,[w,v,B],void 0,2)),this.faceVertexUvs[0].push([H,
I,z]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.CylinderGeometry.prototype.clone=function(){return new THREE.CylinderGeometry(this.parameters.radiusTop,this.parameters.radiusBottom,this.parameters.height,this.parameters.radialSegments,this.parameters.heightSegments,this.parameters.openEnded,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.EdgesGeometry=function(a,b){THREE.BufferGeometry.call(this);var c=Math.cos(THREE.Math.degToRad(void 0!==b?b:1)),d=[0,0],e={},g=function(a,b){return a-b},f=["a","b","c"],h;a instanceof THREE.BufferGeometry?(h=new THREE.Geometry,h.fromBufferGeometry(a)):h=a.clone();h.mergeVertices();h.computeFaceNormals();var k=h.vertices;h=h.faces;for(var l=0,n=h.length;l<n;l++)for(var p=h[l],m=0;3>m;m++){d[0]=p[f[m]];d[1]=p[f[(m+1)%3]];d.sort(g);var q=d.toString();void 0===e[q]?e[q]={vert1:d[0],vert2:d[1],face1:l,
face2:void 0}:e[q].face2=l}d=[];for(q in e)if(g=e[q],void 0===g.face2||h[g.face1].normal.dot(h[g.face2].normal)<=c)f=k[g.vert1],d.push(f.x),d.push(f.y),d.push(f.z),f=k[g.vert2],d.push(f.x),d.push(f.y),d.push(f.z);this.addAttribute("position",new THREE.BufferAttribute(new Float32Array(d),3))};THREE.EdgesGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.EdgesGeometry.prototype.constructor=THREE.EdgesGeometry;
THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(1E-10<Math.abs(d*g-e*f)){var k=Math.sqrt(h),l=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/l-h)*g-(c.y+f/l-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2)}else a=!1,1E-10<d?1E-10<f&&(a=
!0):-1E-10>d?-1E-10>f&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d)}function e(a,b){var c,d;for(A=a.length;0<=--A;){c=A;d=A-1;0>d&&(d=a.length-1);for(var e=0,f=q+2*n,e=0;e<f;e++){var g=U*e,h=U*(e+1),k=b+c+g,g=b+d+g,l=b+d+h,h=b+c+h,k=k+O,g=g+O,l=l+O,h=h+O;G.faces.push(new THREE.Face3(k,g,h));G.faces.push(new THREE.Face3(g,l,h));k=w.generateSideWallUV(G,k,g,l,h);G.faceVertexUvs[0].push([k[0],k[1],k[3]]);G.faceVertexUvs[0].push([k[1],
k[2],k[3]])}}}function g(a,b,c){G.vertices.push(new THREE.Vector3(a,b,c))}function f(a,b,c){a+=O;b+=O;c+=O;G.faces.push(new THREE.Face3(a,b,c));a=w.generateTopUV(G,a,b,c);G.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,n=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,m=void 0!==b.curveSegments?b.curveSegments:12,q=void 0!==b.steps?b.steps:1,t=b.extrudePath,
r,u=!1,w=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,v,B,x,H;t&&(r=t.getSpacedPoints(q),u=!0,p=!1,v=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(t,q,!1),B=new THREE.Vector3,x=new THREE.Vector3,H=new THREE.Vector3);p||(l=k=n=0);var I,z,D,G=this,O=this.vertices.length,t=a.extractPoints(m),m=t.shape,C=t.holes;if(t=!THREE.Shape.Utils.isClockWise(m)){m=m.reverse();z=0;for(D=C.length;z<D;z++)I=C[z],THREE.Shape.Utils.isClockWise(I)&&(C[z]=I.reverse());t=
!1}var F=THREE.Shape.Utils.triangulateShape(m,C),K=m;z=0;for(D=C.length;z<D;z++)I=C[z],m=m.concat(I);var L,E,J,y,P,U=m.length,Q,R=F.length,t=[],A=0;J=K.length;L=J-1;for(E=A+1;A<J;A++,L++,E++)L===J&&(L=0),E===J&&(E=0),t[A]=d(K[A],K[L],K[E]);var ia=[],Z,fa=t.concat();z=0;for(D=C.length;z<D;z++){I=C[z];Z=[];A=0;J=I.length;L=J-1;for(E=A+1;A<J;A++,L++,E++)L===J&&(L=0),E===J&&(E=0),Z[A]=d(I[A],I[L],I[E]);ia.push(Z);fa=fa.concat(Z)}for(L=0;L<n;L++){J=L/n;y=k*(1-J);E=l*Math.sin(J*Math.PI/2);A=0;for(J=K.length;A<
J;A++)P=c(K[A],t[A],E),g(P.x,P.y,-y);z=0;for(D=C.length;z<D;z++)for(I=C[z],Z=ia[z],A=0,J=I.length;A<J;A++)P=c(I[A],Z[A],E),g(P.x,P.y,-y)}E=l;for(A=0;A<U;A++)P=p?c(m[A],fa[A],E):m[A],u?(x.copy(v.normals[0]).multiplyScalar(P.x),B.copy(v.binormals[0]).multiplyScalar(P.y),H.copy(r[0]).add(x).add(B),g(H.x,H.y,H.z)):g(P.x,P.y,0);for(J=1;J<=q;J++)for(A=0;A<U;A++)P=p?c(m[A],fa[A],E):m[A],u?(x.copy(v.normals[J]).multiplyScalar(P.x),B.copy(v.binormals[J]).multiplyScalar(P.y),H.copy(r[J]).add(x).add(B),g(H.x,
H.y,H.z)):g(P.x,P.y,h/q*J);for(L=n-1;0<=L;L--){J=L/n;y=k*(1-J);E=l*Math.sin(J*Math.PI/2);A=0;for(J=K.length;A<J;A++)P=c(K[A],t[A],E),g(P.x,P.y,h+y);z=0;for(D=C.length;z<D;z++)for(I=C[z],Z=ia[z],A=0,J=I.length;A<J;A++)P=c(I[A],Z[A],E),u?g(P.x,P.y+r[q-1].y,r[q-1].x+y):g(P.x,P.y,h+y)}(function(){if(p){var a;a=0*U;for(A=0;A<R;A++)Q=F[A],f(Q[2]+a,Q[1]+a,Q[0]+a);a=q+2*n;a*=U;for(A=0;A<R;A++)Q=F[A],f(Q[0]+a,Q[1]+a,Q[2]+a)}else{for(A=0;A<R;A++)Q=F[A],f(Q[2],Q[1],Q[0]);for(A=0;A<R;A++)Q=F[A],f(Q[0]+U*q,Q[1]+
U*q,Q[2]+U*q)}})();(function(){var a=0;e(K,a);a+=K.length;z=0;for(D=C.length;z<D;z++)I=C[z],e(I,a),a+=I.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,
1-d.z),new THREE.Vector2(e.y,1-e.z)]}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===Array.isArray(a)&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,g,f,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,g=l.length;e<g;e++)f=l[e],THREE.Shape.Utils.isClockWise(f)&&(l[e]=f.reverse());var n=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(g=l.length;e<g;e++)f=l[e],
k=k.concat(f);l=k.length;g=n.length;for(e=0;e<l;e++)f=k[e],this.vertices.push(new THREE.Vector3(f.x,f.y,0));for(e=0;e<g;e++)l=n[e],k=l[0]+h,f=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,f,l,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,f,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),g=1/b,f=0,h=b;f<=h;f++)for(var k=c+f*g*d,l=Math.cos(k),n=Math.sin(k),k=0,p=a.length;k<p;k++){var m=a[k],q=new THREE.Vector3;q.x=l*m.x-n*m.y;q.y=n*m.x+l*m.y;q.z=m.z;this.vertices.push(q)}c=a.length;f=0;for(h=b;f<h;f++)for(k=0,p=a.length-1;k<p;k++){b=n=k+c*f;d=n+c;var l=n+1+c,n=n+1,m=f*g,q=k*e,t=
m+g,r=q+e;this.faces.push(new THREE.Face3(b,d,n));this.faceVertexUvs[0].push([new THREE.Vector2(m,q),new THREE.Vector2(t,q),new THREE.Vector2(m,r)]);this.faces.push(new THREE.Face3(d,l,n));this.faceVertexUvs[0].push([new THREE.Vector2(t,q),new THREE.Vector2(t,r),new THREE.Vector2(m,r)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;
THREE.PlaneGeometry.prototype.clone=function(){return new THREE.PlaneGeometry(this.parameters.width,this.parameters.height,this.parameters.widthSegments,this.parameters.heightSegments)};
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,g=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var f=c+1,h=d+1,k=a/c,l=b/d;b=new Float32Array(f*h*3);a=new Float32Array(f*h*3);for(var n=new Float32Array(f*h*2),p=0,m=0,q=0;q<h;q++)for(var t=q*l-g,r=0;r<f;r++)b[p]=r*k-e,b[p+1]=-t,a[p+2]=1,n[m]=r/c,n[m+1]=1-q/d,p+=3,m+=2;p=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*
d*6);for(q=0;q<d;q++)for(r=0;r<c;r++)g=r+f*(q+1),h=r+1+f*(q+1),k=r+1+f*q,e[p]=r+f*q,e[p+1]=g,e[p+2]=k,e[p+3]=g,e[p+4]=h,e[p+5]=k,p+=6;this.setIndex(new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(n,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;
THREE.PlaneBufferGeometry.prototype.clone=function(){var a=new THREE.PlaneBufferGeometry(this.parameters.width,this.parameters.height,this.parameters.widthSegments,this.parameters.heightSegments);a.copy(this);return a};
THREE.RingGeometry=function(a,b,c,d,e,g){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:g};a=a||0;b=b||50;e=void 0!==e?e:0;g=void 0!==g?g:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var f,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(f=0;f<c+1;f++){var n=new THREE.Vector3,p=e+f/c*g;n.x=k*Math.cos(p);n.y=k*Math.sin(p);this.vertices.push(n);h.push(new THREE.Vector2((n.x/b+1)/2,
(n.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),f=0;f<c;f++)g=p=f+e,l=p+c+1,n=p+c+2,this.faces.push(new THREE.Face3(g,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[g].clone(),h[l].clone(),h[n].clone()]),g=p,l=p+c+2,n=p+1,this.faces.push(new THREE.Face3(g,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[g].clone(),h[l].clone(),h[n].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};
THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;THREE.RingGeometry.prototype.clone=function(){return new THREE.RingGeometry(this.parameters.innerRadius,this.parameters.outerRadius,this.parameters.thetaSegments,this.parameters.phiSegments,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.SphereGeometry=function(a,b,c,d,e,g,f){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:g,thetaLength:f};this.fromBufferGeometry(new THREE.SphereBufferGeometry(a,b,c,d,e,g,f))};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;
THREE.SphereGeometry.prototype.clone=function(){return new THREE.SphereGeometry(this.parameters.radius,this.parameters.widthSegments,this.parameters.heightSegments,this.parameters.phiStart,this.parameters.phiLength,this.parameters.thetaStart,this.parameters.thetaLength)};
THREE.SphereBufferGeometry=function(a,b,c,d,e,g,f){THREE.BufferGeometry.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:g,thetaLength:f};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;g=void 0!==g?g:0;f=void 0!==f?f:Math.PI;for(var h=g+f,k=(b+1)*(c+1),l=new THREE.BufferAttribute(new Float32Array(3*k),3),n=new THREE.BufferAttribute(new Float32Array(3*
k),3),k=new THREE.BufferAttribute(new Float32Array(2*k),2),p=0,m=[],q=new THREE.Vector3,t=0;t<=c;t++){for(var r=[],u=t/c,w=0;w<=b;w++){var v=w/b,B=-a*Math.cos(d+v*e)*Math.sin(g+u*f),x=a*Math.cos(g+u*f),H=a*Math.sin(d+v*e)*Math.sin(g+u*f);q.set(B,x,H).normalize();l.setXYZ(p,B,x,H);n.setXYZ(p,q.x,q.y,q.z);k.setXY(p,v,1-u);r.push(p);p++}m.push(r)}d=[];for(t=0;t<c;t++)for(w=0;w<b;w++)e=m[t][w+1],f=m[t][w],p=m[t+1][w],q=m[t+1][w+1],(0!==t||0<g)&&d.push(e,f,q),(t!==c-1||h<Math.PI)&&d.push(f,p,q);this.setIndex(new THREE.BufferAttribute(new Uint16Array(d),
1));this.addAttribute("position",l);this.addAttribute("normal",n);this.addAttribute("uv",k);this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.SphereBufferGeometry.prototype.constructor=THREE.SphereBufferGeometry;
THREE.SphereBufferGeometry.prototype.clone=function(){var a=new THREE.SphereBufferGeometry(this.parameters.radius,this.parameters.widthSegments,this.parameters.heightSegments,this.parameters.phiStart,this.parameters.phiLength,this.parameters.thetaStart,this.parameters.thetaLength);a.copy(this);return a};
THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry"};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var g=new THREE.Vector3,f=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var n=l/d*e,p=k/c*Math.PI*2;g.x=a*Math.cos(n);g.y=a*Math.sin(n);var m=new THREE.Vector3;m.x=(a+b*Math.cos(p))*Math.cos(n);m.y=(a+b*Math.cos(p))*Math.sin(n);m.z=b*Math.sin(p);this.vertices.push(m);f.push(new THREE.Vector2(l/
d,k/c));h.push(m.clone().sub(g).normalize())}for(k=1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,g=(d+1)*k+l,n=new THREE.Face3(a,b,g,[h[a].clone(),h[b].clone(),h[g].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([f[a].clone(),f[b].clone(),f[g].clone()]),n=new THREE.Face3(b,e,g,[h[b].clone(),h[e].clone(),h[g].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([f[b].clone(),f[e].clone(),f[g].clone()]);this.computeFaceNormals()};
THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;THREE.TorusGeometry.prototype.clone=function(){return new THREE.TorusGeometry(this.parameters.radius,this.parameters.tube,this.parameters.radialSegments,this.parameters.tubularSegments,this.parameters.arc)};
THREE.TorusKnotGeometry=function(a,b,c,d,e,g,f){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*.5;g=d*(2+b)*g*.5;d=e*d*Math.sin(a)*.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:g,heightScale:f};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;g=g||3;f=f||1;for(var k=Array(c),l=new THREE.Vector3,n=new THREE.Vector3,p=new THREE.Vector3,m=0;m<c;++m){k[m]=
Array(d);var q=m/c*2*e*Math.PI,t=h(q,g,e,a,f),q=h(q+.01,g,e,a,f);l.subVectors(q,t);n.addVectors(q,t);p.crossVectors(l,n);n.crossVectors(p,l);p.normalize();n.normalize();for(q=0;q<d;++q){var r=q/d*2*Math.PI,u=-b*Math.cos(r),r=b*Math.sin(r),w=new THREE.Vector3;w.x=t.x+u*n.x+r*p.x;w.y=t.y+u*n.y+r*p.y;w.z=t.z+u*n.z+r*p.z;k[m][q]=this.vertices.push(w)-1}}for(m=0;m<c;++m)for(q=0;q<d;++q)e=(m+1)%c,g=(q+1)%d,a=k[m][q],b=k[e][q],e=k[e][g],g=k[m][g],f=new THREE.Vector2(m/c,q/d),l=new THREE.Vector2((m+1)/c,
q/d),n=new THREE.Vector2((m+1)/c,(q+1)/d),p=new THREE.Vector2(m/c,(q+1)/d),this.faces.push(new THREE.Face3(a,b,g)),this.faceVertexUvs[0].push([f,l,p]),this.faces.push(new THREE.Face3(b,e,g)),this.faceVertexUvs[0].push([l.clone(),n,p.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;
THREE.TorusKnotGeometry.prototype.clone=function(){return new THREE.TorusKnotGeometry(this.parameters.radius,this.parameters.tube,this.parameters.radialSegments,this.parameters.tubularSegments,this.parameters.p,this.parameters.q,this.parameters.heightScale)};
THREE.TubeGeometry=function(a,b,c,d,e,g){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;g=g||THREE.TubeGeometry.NoTaper;var f=[],h,k,l=b+1,n,p,m,q,t,r=new THREE.Vector3,u,w,v;u=new THREE.TubeGeometry.FrenetFrames(a,b,e);w=u.normals;v=u.binormals;this.tangents=u.tangents;this.normals=w;this.binormals=v;for(u=0;u<l;u++)for(f[u]=[],n=u/(l-1),t=a.getPointAt(n),h=w[u],k=v[u],m=c*g(n),n=0;n<d;n++)p=
n/d*2*Math.PI,q=-m*Math.cos(p),p=m*Math.sin(p),r.copy(t),r.x+=q*h.x+p*k.x,r.y+=q*h.y+p*k.y,r.z+=q*h.z+p*k.z,f[u][n]=this.vertices.push(new THREE.Vector3(r.x,r.y,r.z))-1;for(u=0;u<b;u++)for(n=0;n<d;n++)g=e?(u+1)%b:u+1,l=(n+1)%d,a=f[u][n],c=f[g][n],g=f[g][l],l=f[u][l],r=new THREE.Vector2(u/b,n/d),w=new THREE.Vector2((u+1)/b,n/d),v=new THREE.Vector2((u+1)/b,(n+1)/d),h=new THREE.Vector2(u/b,(n+1)/d),this.faces.push(new THREE.Face3(a,c,l)),this.faceVertexUvs[0].push([r,w,h]),this.faces.push(new THREE.Face3(c,
g,l)),this.faceVertexUvs[0].push([w.clone(),v,h.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)};
THREE.TubeGeometry.FrenetFrames=function(a,b,c){var d=new THREE.Vector3,e=[],g=[],f=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,n,p;this.tangents=e;this.normals=g;this.binormals=f;for(l=0;l<b;l++)n=l/(b-1),e[l]=a.getTangentAt(n),e[l].normalize();g[0]=new THREE.Vector3;f[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);n=Math.abs(e[0].y);p=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));n<=a&&(a=n,d.set(0,1,0));p<=a&&d.set(0,0,1);h.crossVectors(e[0],d).normalize();g[0].crossVectors(e[0],
h);f[0].crossVectors(e[0],g[0]);for(l=1;l<b;l++)g[l]=g[l-1].clone(),f[l]=f[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),g[l].applyMatrix4(k.makeRotationAxis(h,d))),f[l].crossVectors(e[l],g[l]);if(c)for(d=Math.acos(THREE.Math.clamp(g[0].dot(g[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(g[0],g[b-1]))&&(d=-d),l=1;l<b;l++)g[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),f[l].crossVectors(e[l],g[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b}function g(a,b,c,d){d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()],void 0,d);k.faces.push(d);u.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(u.z,-u.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function f(a,
b){for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),f=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],m=a.materialIndex,n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(f.clone().lerp(h,n/c)),r=c-n,t=0;t<=r;t++)l[n][t]=0===t&&n===c?p:e(p.clone().lerp(q,t/r))}for(n=0;n<c;n++)for(t=0;t<2*(c-n)-1;t++)d=Math.floor(t/2),0===t%2?g(l[n][d+1],l[n+1][d],l[n][d],m):g(l[n][d+1],l[n+1][d+1],l[n+1][d],m)}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/
2/Math.PI+.5,a.y));return a.clone()}THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,l=0,n=a.length;l<n;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var p=[],m=l=0,n=b.length;l<n;l+=3,m++){var q=a[b[l]],t=a[b[l+1]],r=a[b[l+2]];p[m]=new THREE.Face3(q.index,t.index,r.index,[q.clone(),t.clone(),r.clone()],void 0,m)}for(var u=new THREE.Vector3,l=0,n=p.length;l<n;l++)f(p[l],d);l=0;for(n=this.faceVertexUvs[0].length;l<
n;l++)b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,p=b[2].x,m=Math.max(d,Math.max(a,p)),q=Math.min(d,Math.min(a,p)),.9<m&&.1>q&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>p&&(b[2].x+=1));l=0;for(n=this.vertices.length;l<n;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;
THREE.PolyhedronGeometry.prototype.clone=function(){return(new THREE.PolyhedronGeometry(this.parameters.vertices,this.parameters.indices,this.parameters.radius,this.parameters.detail)).copy(this)};THREE.PolyhedronGeometry.prototype.copy=function(a){THREE.Geometry.prototype.copy.call(this,a);return this};
THREE.DodecahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,
12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b}};THREE.DodecahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;THREE.DodecahedronGeometry.prototype.clone=function(){var a=new THREE.DodecahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b}};THREE.IcosahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.IcosahedronGeometry.prototype.clone=function(){var a=new THREE.IcosahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b}};
THREE.OctahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;THREE.OctahedronGeometry.prototype.clone=function(){var a=new THREE.OctahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};
THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;
THREE.TetrahedronGeometry.prototype.clone=function(){var a=new THREE.TetrahedronGeometry(this.parameters.radius,this.parameters.detail);a.copy(this);return a};
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,g=this.faceVertexUvs[0],f,h,k,l,n=b+1;for(f=0;f<=c;f++)for(l=f/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var p,m,q,t;for(f=0;f<c;f++)for(h=0;h<b;h++)a=f*n+h,d=f*n+h+1,l=(f+1)*n+h+1,k=(f+1)*n+h,p=new THREE.Vector2(h/b,f/c),m=new THREE.Vector2((h+1)/b,f/c),q=new THREE.Vector2((h+1)/b,(f+1)/c),t=new THREE.Vector2(h/b,(f+1)/c),e.push(new THREE.Face3(a,
d,k)),g.push([p,m,t]),e.push(new THREE.Face3(d,l,k)),g.push([m.clone(),q,t.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;
THREE.WireframeGeometry=function(a){THREE.BufferGeometry.call(this);var b=[0,0],c={},d=function(a,b){return a-b},e=["a","b","c"];if(a instanceof THREE.Geometry){var g=a.vertices,f=a.faces,h=0,k=new Uint32Array(6*f.length);a=0;for(var l=f.length;a<l;a++)for(var n=f[a],p=0;3>p;p++){b[0]=n[e[p]];b[1]=n[e[(p+1)%3]];b.sort(d);var m=b.toString();void 0===c[m]&&(k[2*h]=b[0],k[2*h+1]=b[1],c[m]=!0,h++)}b=new Float32Array(6*h);a=0;for(l=h;a<l;a++)for(p=0;2>p;p++)c=g[k[2*a+p]],h=6*a+3*p,b[h+0]=c.x,b[h+1]=c.y,
b[h+2]=c.z;this.addAttribute("position",new THREE.BufferAttribute(b,3))}else if(a instanceof THREE.BufferGeometry){if(null!==a.index){l=a.index.array;g=a.attributes.position;e=a.drawcalls;h=0;0===e.length&&a.addDrawCall(0,l.length);k=new Uint32Array(2*l.length);f=0;for(n=e.length;f<n;++f){a=e[f];p=a.start;m=a.count;a=p;for(var q=p+m;a<q;a+=3)for(p=0;3>p;p++)b[0]=l[a+p],b[1]=l[a+(p+1)%3],b.sort(d),m=b.toString(),void 0===c[m]&&(k[2*h]=b[0],k[2*h+1]=b[1],c[m]=!0,h++)}b=new Float32Array(6*h);a=0;for(l=
h;a<l;a++)for(p=0;2>p;p++)h=6*a+3*p,c=k[2*a+p],b[h+0]=g.getX(c),b[h+1]=g.getY(c),b[h+2]=g.getZ(c)}else for(g=a.attributes.position.array,h=g.length/3,k=h/3,b=new Float32Array(6*h),a=0,l=k;a<l;a++)for(p=0;3>p;p++)h=18*a+6*p,k=9*a+3*p,b[h+0]=g[k],b[h+1]=g[k+1],b[h+2]=g[k+2],c=9*a+(p+1)%3*3,b[h+3]=g[c],b[h+4]=g[c+1],b[h+5]=g[c+2];this.addAttribute("position",new THREE.BufferAttribute(b,3))}};THREE.WireframeGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);
THREE.WireframeGeometry.prototype.constructor=THREE.WireframeGeometry;THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.LineSegments.call(this,a,b)};THREE.AxisHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);b.translate(0,-.5,0);return function(c,d,e,g,f,h){THREE.Object3D.call(this);void 0===g&&(g=16776960);void 0===e&&(e=1);void 0===f&&(f=.2*e);void 0===h&&(h=.2*f);this.position.copy(d);f<e&&(this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:g})),this.line.matrixAutoUpdate=!1,this.add(this.line));this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:g}));
this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,f,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);b<a&&(this.line.scale.set(1,a-b,1),this.line.updateMatrix());this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){void 0!==this.line&&this.line.material.color.set(a);this.cone.material.color.set(a)};
THREE.BoxHelper=function(a){var b=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),c=new Float32Array(24),d=new THREE.BufferGeometry;d.setIndex(new THREE.BufferAttribute(b,1));d.addAttribute("position",new THREE.BufferAttribute(c,3));THREE.LineSegments.call(this,d,new THREE.LineBasicMaterial({color:16776960}));void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;
THREE.BoxHelper.prototype.update=function(){var a=new THREE.Box3;return function(b){a.setFromObject(b);if(!a.empty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();
THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===g[a]&&(g[a]=[]);g[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),g={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.LineSegments.call(this,d,e);this.camera=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=g;this.update()};THREE.CameraHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;
THREE.CameraHelper.prototype.update=function(){var a,b,c=new THREE.Vector3,d=new THREE.Camera,e=function(e,f,h,k){c.set(f,h,k).unproject(d);e=b[e];if(void 0!==e)for(f=0,h=e.length;f<h;f++)a.vertices[e[f]].copy(c)};return function(){a=this.geometry;b=this.pointMap;d.projectionMatrix.copy(this.camera.projectionMatrix);e("c",0,0,-1);e("t",0,0,1);e("n1",-1,-1,-1);e("n2",1,-1,-1);e("n3",-1,1,-1);e("n4",1,1,-1);e("f1",-1,-1,1);e("f2",1,-1,1);e("f3",-1,1,1);e("f4",1,1,1);e("u1",.7,1.1,-1);e("u2",-.7,1.1,
-1);e("u3",0,2,-1);e("cf1",-1,0,1);e("cf2",1,0,1);e("cf3",0,-1,1);e("cf4",0,1,1);e("cn1",-1,0,-1);e("cn2",1,0,-1);e("cn3",0,-1,-1);e("cn4",0,1,-1);a.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b,c){b=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.EdgesGeometry(a.geometry,c),new THREE.LineBasicMaterial({color:b}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.EdgesHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new THREE.BufferGeometry;b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=
!1;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,g=this.object.geometry,f=g.vertices,g=g.faces,h=0,k=0,l=g.length;k<l;k++){var n=g[k],p=n.normal;a.copy(f[n.a]).add(f[n.b]).add(f[n.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);
e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var g=0===e?this.color1:this.color2;c.colors.push(g,g,g,g)}THREE.LineSegments.call(this,c,d)};THREE.GridHelper.prototype=Object.create(THREE.LineSegments.prototype);
THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.rotateX(-Math.PI/2);for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);this.update()};
THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));b.dynamic=!0;c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.LineSegments.call(this,b,c);this.root=a;this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var g=this.bones[e];g.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,g.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,g.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.translate(0,-.5,0);a.rotateX(-Math.PI/2);var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=3*c.faces.length:c instanceof THREE.BufferGeometry&&(b=c.attributes.normal.count);c=new THREE.BufferGeometry;b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()};
THREE.VertexNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,g=this.geometry.attributes.position,f=this.object.geometry;if(f instanceof THREE.Geometry)for(var h=f.vertices,k=f.faces,l=f=0,n=k.length;l<n;l++)for(var p=k[l],m=0,q=p.vertexNormals.length;m<q;m++){var t=p.vertexNormals[m];a.copy(h[p[d[m]]]).applyMatrix4(e);
b.copy(t).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);g.setXYZ(f,a.x,a.y,a.z);f+=1;g.setXYZ(f,b.x,b.y,b.z);f+=1}else if(f instanceof THREE.BufferGeometry)for(d=f.attributes.position,h=f.attributes.normal,m=f=0,q=d.count;m<q;m++)a.set(d.getX(m),d.getY(m),d.getZ(m)).applyMatrix4(e),b.set(h.getX(m),h.getY(m),h.getZ(m)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),g.setXYZ(f,a.x,a.y,a.z),f+=1,g.setXYZ(f,b.x,b.y,b.z),f+=1;g.needsUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.WireframeGeometry(a.geometry),new THREE.LineBasicMaterial({color:c}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.WireframeHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);
THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,g=0,f=e.morphTargets.length;g<f;g++){var h=e.morphTargets[g].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];g<h.start&&(h.start=g);g>h.end&&(h.end=g);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var g=d.start+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),f=d.weight;g!==d.currentFrame&&
(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*f,this.morphTargetInfluences[g]=0,d.lastFrame=d.currentFrame,d.currentFrame=g);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*f,this.morphTargetInfluences[d.lastFrame]=(1-e)*f):this.morphTargetInfluences[d.currentFrame]=f}}};

// Export the THREE object for **Node.js**, with
// backwards-compatibility for the old `require()` API. If we're in
// the browser, add `_` as a global object via a string identifier,
// for Closure Compiler "advanced" mode.
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = THREE;
  }
  exports.THREE = THREE;
} else {
  this['THREE'] = THREE;
}
(function(THREE){"use strict";THREE="default"in THREE?THREE["default"]:THREE;THREE.AxisHelper=function(size,labelSize){THREE.Object3D.call(this);size=size||1;labelSize=labelSize||16;var vertices=new Float32Array([0,0,0,size,0,0,0,0,0,0,size,0,0,0,0,0,0,size]);var colors=new Float32Array([1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1]);var geometry=new THREE.BufferGeometry;geometry.addAttribute("position",new THREE.BufferAttribute(vertices,3));geometry.addAttribute("color",new THREE.BufferAttribute(colors,3));var material=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});var axes=new THREE.LineSegments(geometry,material);this.add(axes);var red=new THREE.Color(16711680);var labelX=new THREE.LabelHelper("x",labelSize,red);labelX.position.set(size,0,0);axes.add(labelX);var green=new THREE.Color(65280);var labelY=new THREE.LabelHelper("y",labelSize,green);labelY.position.set(0,size,0);axes.add(labelY);var blue=new THREE.Color(255);var labelZ=new THREE.LabelHelper("z",labelSize,blue);labelZ.position.set(0,0,size);axes.add(labelZ)};THREE.AxisHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;THREE.LabelHelper=function(label,size,color){if(!color){color=new THREE.Color(16711680)}var canvas,geometry,ctx,texture,material;geometry=new THREE.Geometry;geometry.vertices.push(new THREE.Vector3);canvas=document.createElement("canvas");canvas.width=size;canvas.height=size;ctx=canvas.getContext("2d");ctx.font=size+"px sans-serif";ctx.fillStyle="white";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(label,size/2,size/2);texture=new THREE.Texture(canvas);texture.needsUpdate=true;texture.premultiplyAlpha=true;texture.generateMipmaps=false;texture.minFilter=THREE.NearestFilter;texture.magFilter=THREE.NearestFilter;if(canvas.width){material=new THREE.PointsMaterial({size:size,sizeAttenuation:false,map:texture,transparent:true,color:color})}else{material=new THREE.PointsMaterial({transparent:true,color:color})}material.blendSrc=THREE.OneFactor;material.blending=THREE.CustomBlending;THREE.Points.call(this,geometry,material)};THREE.LabelHelper.prototype=Object.create(THREE.Points.prototype);THREE.LabelHelper.prototype.constructor=THREE.LabelHelper;THREE.TextHelper=function(label,options){options=options||{};options.size=options.size||4;options.resolution=options.resolution||128;options.color=options.color||"white";options.align=options.align||"center";var canvas=document.createElement("canvas");var ctx=canvas.getContext("2d");ctx.font=options.resolution+"px sans-serif";var aspect=ctx.measureText(label).width/options.resolution;canvas.width=options.resolution*aspect;canvas.height=options.resolution;ctx.font=options.resolution+"px sans-serif";ctx.fillStyle="white";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(label,options.resolution*aspect/2,options.resolution/2);var texture=new THREE.Texture(canvas);texture.needsUpdate=true;texture.premultiplyAlpha=true;texture.generateMipmaps=false;texture.minFilter=THREE.LinearFilter;texture.magFilter=THREE.LinearFilter;var material=new THREE.MeshBasicMaterial({map:texture,transparent:true,color:options.color,side:THREE.DoubleSide});material.blendSrc=THREE.OneFactor;material.blending=THREE.CustomBlending;material.depthWrite=false;var indices=new Uint16Array([0,1,2,0,2,3]);var vertices=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]);var uvs=new Float32Array([0,0,1,0,1,1,0,1]);var geometry=new THREE.BufferGeometry;geometry.setIndex(new THREE.BufferAttribute(indices,1));geometry.addAttribute("position",new THREE.BufferAttribute(vertices,3));geometry.addAttribute("uv",new THREE.BufferAttribute(uvs,2));THREE.Mesh.call(this,geometry,material);this.type="textHelper";if(options.align=="left"){this.position.x=-options.size*aspect/2}else if(options.align=="right"){this.position.x=options.size*aspect/2}this.scale.set(options.size*aspect,options.size,1);this.updateMatrix();this.geometry.applyMatrix(this.matrix);this.scale.set(1,1,1);this.position.set(0,0,0);this.updateMatrix()};THREE.TextHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.TextHelper.prototype.constructor=THREE.TextHelper;THREE.NURBSCurve=function(degree,knots,controlPoints){this.degree=degree;this.knots=knots;this.controlPoints=[];for(var i=0;i<controlPoints.length;++i){var point=controlPoints[i];this.controlPoints[i]=new THREE.Vector4(point.x,point.y,point.z,point.w)}this.iMin=0;this.iMax=this.knots.length-1;if(this.isClosed()){this.iMin=this.degree;this.iMax=this.knots.length-1-this.degree}};THREE.NURBSCurve.prototype=Object.create(THREE.Curve.prototype);THREE.NURBSCurve.prototype.constructor=THREE.NURBSCurve;THREE.NURBSCurve.prototype.isClosed=function(){var start=this._getPointByParameter(this.knots[this.degree]);var end=this._getPointByParameter(this.knots[this.knots.length-1-this.degree]);start.sub(end);var TOLERANCE=1e-6;return start.length()<TOLERANCE};THREE.NURBSCurve.prototype.getPoint=function(t){var u=this.knots[this.iMin]+t*(this.knots[this.iMax]-this.knots[this.iMin]);return this._getPointByParameter(u)};THREE.NURBSCurve.prototype._getPointByParameter=function(u){var hpoint=THREE.NURBSUtils.calcBSplinePoint(this.degree,this.knots,this.controlPoints,u);if(hpoint.w!=1){hpoint.divideScalar(hpoint.w)}return new THREE.Vector3(hpoint.x,hpoint.y,hpoint.z)};THREE.NURBSCurve.prototype.getTangent=function(t){var u=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]);var ders=THREE.NURBSUtils.calcNURBSDerivatives(this.degree,this.knots,this.controlPoints,u,1);var tangent=ders[1].clone();tangent.normalize();return tangent};THREE.NURBSSurface=function(degree1,degree2,knots1,knots2,controlPoints){this.degree1=degree1;this.degree2=degree2;this.knots1=knots1;this.knots2=knots2;this.controlPoints=[];var len1=knots1.length-degree1-1;var len2=knots2.length-degree2-1;for(var i=0;i<len1;++i){this.controlPoints[i]=[];for(var j=0;j<len2;++j){var point=controlPoints[i][j];this.controlPoints[i][j]=new THREE.Vector4(point.x,point.y,point.z,point.w)}}this.iMin1=0;this.iMax1=this.knots1.length-1;if(this.isClosed(this.knots1,this.degree1)){this.iMin1=this.degree1;this.iMax1=this.knots1.length-1-this.degree1}this.iMin2=0;this.iMax2=this.knots2.length-1;if(this.isClosed(this.knots2,this.degree2)){this.iMin2=this.degree2;this.iMax2=this.knots2.length-1-this.degree2}};THREE.NURBSSurface.prototype.isClosed=function(knots,degree){var start1=this._getPointByParameters(knots[degree][0]);var end1=this._getPointByParameters(knots[knots.length-1-degree][0]);start1.sub(end1);var TOLERANCE=1e-6;return start1.length()<TOLERANCE},THREE.NURBSSurface.prototype.getPoint=function(t1,t2){var u=this.knots1[this.iMin1]+t1*(this.knots1[this.iMax1]-this.knots1[this.iMin1]);var v=this.knots2[this.iMin2]+t2*(this.knots2[this.iMax2]-this.knots2[this.iMin2]);return this._getPointByParameters(u,v)};THREE.NURBSSurface.prototype._getPointByParameters=function(u,v){return THREE.NURBSUtils.calcSurfacePoint(this.degree1,this.degree2,this.knots1,this.knots2,this.controlPoints,u,v)};THREE.NURBSUtils={findSpan:function(p,u,U){var n=U.length-p-1;if(u>=U[n]){return n-1}if(u<=U[p]){return p}var low=p;var high=n;var mid=Math.floor((low+high)/2);while(u<U[mid]||u>=U[mid+1]){if(u<U[mid]){high=mid}else{low=mid}mid=Math.floor((low+high)/2)}return mid},calcBasisFunctions:function(span,u,p,U){var N=[];var left=[];var right=[];N[0]=1;for(var j=1;j<=p;++j){left[j]=u-U[span+1-j];right[j]=U[span+j]-u;var saved=0;for(var r=0;r<j;++r){var rv=right[r+1];var lv=left[j-r];var temp=N[r]/(rv+lv);N[r]=saved+rv*temp;saved=lv*temp}N[j]=saved}return N},calcBSplinePoint:function(p,U,P,u){var span=this.findSpan(p,u,U);var N=this.calcBasisFunctions(span,u,p,U);var C=new THREE.Vector4(0,0,0,0);for(var j=0;j<=p;++j){var point=P[span-p+j];var Nj=N[j];var wNj=point.w*Nj;C.x+=point.x*wNj;C.y+=point.y*wNj;C.z+=point.z*wNj;C.w+=point.w*Nj}return C},calcBasisFunctionDerivatives:function(span,u,p,n,U){var i,j,k,r;var zeroArr=[];for(i=0;i<=p;++i)zeroArr[i]=0;var ders=[];for(i=0;i<=n;++i)ders[i]=zeroArr.slice(0);var ndu=[];for(i=0;i<=p;++i)ndu[i]=zeroArr.slice(0);ndu[0][0]=1;var left=zeroArr.slice(0);var right=zeroArr.slice(0);for(j=1;j<=p;++j){left[j]=u-U[span+1-j];right[j]=U[span+j]-u;var saved=0;for(r=0;r<j;++r){var rv=right[r+1];var lv=left[j-r];ndu[j][r]=rv+lv;var temp=ndu[r][j-1]/ndu[j][r];ndu[r][j]=saved+rv*temp;saved=lv*temp}ndu[j][j]=saved}for(j=0;j<=p;++j){ders[0][j]=ndu[j][p]}for(r=0;r<=p;++r){var s1=0;var s2=1;var a=[];for(i=0;i<=p;++i){a[i]=zeroArr.slice(0)}a[0][0]=1;for(k=1;k<=n;++k){var d=0;var rk=r-k;var pk=p-k;if(r>=k){a[s2][0]=a[s1][0]/ndu[pk+1][rk];d=a[s2][0]*ndu[rk][pk]}var j1=rk>=-1?1:-rk;var j2=r-1<=pk?k-1:p-r;for(j=j1;j<=j2;++j){a[s2][j]=(a[s1][j]-a[s1][j-1])/ndu[pk+1][rk+j];d+=a[s2][j]*ndu[rk+j][pk]}if(r<=pk){a[s2][k]=-a[s1][k-1]/ndu[pk+1][r];d+=a[s2][k]*ndu[r][pk]}ders[k][r]=d;j=s1;s1=s2;s2=j}}r=p;for(k=1;k<=n;++k){for(j=0;j<=p;++j){ders[k][j]*=r}r*=p-k}return ders},calcBSplineDerivatives:function(p,U,P,u,nd){var du=nd<p?nd:p;var CK=[];var span=this.findSpan(p,u,U);var nders=this.calcBasisFunctionDerivatives(span,u,p,du,U);var Pw=[];var point;var k;for(var i=0;i<P.length;++i){point=P[i].clone();var w=point.w;point.x*=w;point.y*=w;point.z*=w;Pw[i]=point}for(k=0;k<=du;++k){point=Pw[span-p].clone().multiplyScalar(nders[k][0]);for(var j=1;j<=p;++j){point.add(Pw[span-p+j].clone().multiplyScalar(nders[k][j]))}CK[k]=point}for(k=du+1;k<=nd+1;++k){CK[k]=new THREE.Vector4(0,0,0)}return CK},calcKoverI:function(k,i){var nom=1;var j;for(j=2;j<=k;++j){nom*=j}var denom=1;for(j=2;j<=i;++j){denom*=j}for(j=2;j<=k-i;++j){denom*=j}return nom/denom},calcRationalCurveDerivatives:function(Pders){var nd=Pders.length;var Aders=[];var wders=[];var i;for(i=0;i<nd;++i){var point=Pders[i];Aders[i]=new THREE.Vector3(point.x,point.y,point.z);wders[i]=point.w}var CK=[];for(var k=0;k<nd;++k){var v=Aders[k].clone();for(i=1;i<=k;++i){v.sub(CK[k-i].clone().multiplyScalar(this.calcKoverI(k,i)*wders[i]))}CK[k]=v.divideScalar(wders[0])}return CK},calcNURBSDerivatives:function(p,U,P,u,nd){var Pders=this.calcBSplineDerivatives(p,U,P,u,nd);return this.calcRationalCurveDerivatives(Pders)},calcSurfacePoint:function(p,q,U,V,P,u,v){var uspan=this.findSpan(p,u,U);var vspan=this.findSpan(q,v,V);var Nu=this.calcBasisFunctions(uspan,u,p,U);var Nv=this.calcBasisFunctions(vspan,v,q,V);var temp=[];var l;for(l=0;l<=q;++l){temp[l]=new THREE.Vector4(0,0,0,0);for(var k=0;k<=p;++k){var point=P[uspan-p+k][vspan-q+l].clone();var w=point.w;point.x*=w;point.y*=w;point.z*=w;temp[l].add(point.multiplyScalar(Nu[k]))}}var Sw=new THREE.Vector4(0,0,0,0);for(l=0;l<=q;++l){Sw.add(temp[l].multiplyScalar(Nv[l]))}Sw.divideScalar(Sw.w);return new THREE.Vector3(Sw.x,Sw.y,Sw.z)}};THREE.EditorControls=function(object,domElement,center){domElement=domElement!==undefined?domElement:document;this.enabled=true;this.center=center=center||new THREE.Vector3;var scope=this;var vector=new THREE.Vector3;var matrix=new THREE.Matrix3;var STATE={NONE:-1,ROTATE:0,ZOOM:1,PAN:2};var state=STATE.NONE;var parentRect=null;var touches=[];var pointers=[new THREE.Vector2,new THREE.Vector2];var pointersOld=[new THREE.Vector2,new THREE.Vector2];var pointersDelta=[new THREE.Vector2,new THREE.Vector2];var changeEvent={type:"change"};var getClosestPoint=function(point,pointArray){if(pointArray[0].distanceTo(point)<pointArray[1].distanceTo(point)){return pointArray[0]}return pointArray[1]};var setPointers=function(event){if(!parentRect||event.type==="mousedown"){parentRect=event.target.getBoundingClientRect()}touches.length=0;if(event.touches){for(var i=0;i<event.touches.length;i++){if(event.touches[i].target===event.target){touches.push(event.touches[i])}}}if(touches.length===0){pointers[0].set((event.pageX-parentRect.left)/parentRect.width*2-1,(event.pageY-parentRect.top)/parentRect.height*2-1)}else if(touches.length==1){pointers[0].set((touches[0].pageX-parentRect.left)/parentRect.width*2-1,(touches[0].pageY-parentRect.top)/parentRect.height*2-1);pointers[1].copy(pointers[0])}else if(touches.length==2){pointers[0].set((touches[0].pageX-parentRect.left)/parentRect.width*2-1,(touches[0].pageY-parentRect.top)/parentRect.height*2-1);pointers[1].set((touches[1].pageX-parentRect.left)/parentRect.width*2-1,(touches[1].pageY-parentRect.top)/parentRect.height*2-1)}if(parentRect&&event.type==="mouseup"){parentRect=null}};this.updateClippingPersp=function updateClippingPersp(camera,radius){if(radius||camera||camera.near||camera.far){var nearFarRatio=Math.min(1e6,Math.max(1e3,camera.far/camera.near));var factor=Math.sqrt(nearFarRatio);camera.near=radius/factor;camera.far=radius*factor}};this.updateClippingOrtho=function updateClippingOrtho(camera,radius){if(radius||camera||camera.near||camera.far){var nearFarDistance=Math.min(1e6,Math.max(1e3,.5*camera.far-.5*camera.near));var factor=Math.max(radius,nearFarDistance);camera.near=-1*factor;camera.far=factor}};this.focus=function focus(target,frame){var targets=[];var minCenter;var maxCenter;target.traverse(function(child){if(child.visible){child.updateMatrixWorld(true);var center=new THREE.Vector3;var scale=new THREE.Vector3;var radius=0;child.matrixWorld.decompose(center,new THREE.Quaternion,scale);scale=(scale.x+scale.y+scale.z)/3;if(child.geometry){child.geometry.computeBoundingSphere();center.copy(child.geometry.boundingSphere.center.clone().applyMatrix4(child.matrixWorld));radius=child.geometry.boundingSphere.radius*scale}if(!frame||child.geometry){targets.push({center:center,radius:radius});if(!minCenter)minCenter=center.clone();if(!maxCenter)maxCenter=center.clone();minCenter.min(center);maxCenter.max(center)}}});if(!minCenter||!maxCenter)return;var cumulativeCenter=minCenter.clone().add(maxCenter).multiplyScalar(.5);var cumulativeRadius=0;targets.forEach(function(child){var radius=cumulativeCenter.distanceTo(child.center)+child.radius;cumulativeRadius=Math.max(cumulativeRadius,radius)});if(object instanceof THREE.PerspectiveCamera){center.copy(cumulativeCenter);object.lookAt(center);if(frame&&cumulativeRadius){var fovFactor=Math.tan(object.fov/2*Math.PI/180);var pos=object.position.clone().sub(center).normalize().multiplyScalar(cumulativeRadius/fovFactor);object.position.copy(center).add(pos);this.updateClippingPersp(object,cumulativeRadius)}}else if(object instanceof THREE.OrthographicCamera){var initialCenterOffset=object.position.clone().sub(center);center.copy(cumulativeCenter);object.position.copy(center).add(initialCenterOffset);if(frame&&cumulativeRadius){var cw=object.right-object.left;var ch=object.top-object.bottom;var aspect=Math.abs(cw/ch);if(aspect<1){object.top=Math.sign(object.top)*cumulativeRadius/aspect;object.right=Math.sign(object.right)*cumulativeRadius;object.bottom=Math.sign(object.bottom)*cumulativeRadius/aspect;object.left=Math.sign(object.left)*cumulativeRadius}else{object.top=Math.sign(object.top)*cumulativeRadius;object.right=Math.sign(object.right)*cumulativeRadius*aspect;object.bottom=Math.sign(object.bottom)*cumulativeRadius;object.left=Math.sign(object.left)*cumulativeRadius*aspect}this.updateClippingOrtho(object,cumulativeRadius)}}scope.dispatchEvent(changeEvent)};this.pan=function(delta){var distance=object.position.distanceTo(center);vector.set(-delta.x,delta.y,0);if(object instanceof THREE.PerspectiveCamera){var fovFactor=distance*Math.tan(object.fov/2*Math.PI/180);vector.multiplyScalar(fovFactor);vector.x*=object.aspect}else if(object instanceof THREE.OrthographicCamera){vector.x*=(object.right-object.left)/2;vector.y*=(object.top-object.bottom)/2}vector.applyMatrix3(matrix.getNormalMatrix(object.matrix));object.position.add(vector);center.add(vector);scope.dispatchEvent(changeEvent)};this.zoom=function(delta){if(object instanceof THREE.PerspectiveCamera){var distance=object.position.distanceTo(center);vector.set(0,0,delta.y);vector.multiplyScalar(distance);vector.applyMatrix3(matrix.getNormalMatrix(object.matrix));if(delta.y<0&&object.position.clone().add(vector).distanceTo(center)>=distance)return;object.position.add(vector)}else if(object instanceof THREE.OrthographicCamera){object.top*=1+delta.y;object.right*=1+delta.y;object.bottom*=1+delta.y;object.left*=1+delta.y}scope.dispatchEvent(changeEvent)};this.rotate=function(delta){vector.copy(object.position).sub(center);var theta=Math.atan2(vector.x,vector.y);var phi=Math.atan2(Math.sqrt(vector.x*vector.x+vector.y*vector.y),vector.z);theta+=delta.x;phi-=delta.y;var EPS=1e-6;phi=Math.max(EPS,Math.min(Math.PI-EPS,phi));var radius=vector.length();vector.x=radius*Math.sin(phi)*Math.sin(theta);vector.y=radius*Math.sin(phi)*Math.cos(theta);vector.z=radius*Math.cos(phi);object.position.copy(center).add(vector);object.lookAt(center);scope.dispatchEvent(changeEvent)};this.toJSON=function(){return{cx:center.x,cy:center.y,cz:center.z}};this.fromJSON=function(data){this.center.x=data.cx;this.center.y=data.cy;this.center.z=data.cz};function onMouseDown(event){if(scope.enabled===false)return;if(event.button===0){state=STATE.ROTATE;if(object instanceof THREE.OrthographicCamera){state=STATE.PAN}}else if(event.button===1){state=STATE.ZOOM}else if(event.button===2){state=STATE.PAN}setPointers(event);pointersOld[0].copy(pointers[0]);document.addEventListener("mousemove",onMouseMove,false);document.addEventListener("mouseup",onMouseUp,false);document.addEventListener("dblclick",onMouseUp,false)}function onMouseMove(event){if(scope.enabled===false)return;setPointers(event);pointersDelta[0].subVectors(pointers[0],pointersOld[0]);pointersOld[0].copy(pointers[0]);if(state===STATE.ROTATE){scope.rotate(pointersDelta[0])}else if(state===STATE.ZOOM){scope.zoom(pointersDelta[0])}else if(state===STATE.PAN){scope.pan(pointersDelta[0])}}function onMouseUp(){document.removeEventListener("mousemove",onMouseMove,false);document.removeEventListener("mouseup",onMouseUp,false);document.removeEventListener("dblclick",onMouseUp,false);state=STATE.NONE}function onMouseWheel(event){if(scope.enabled===false)return;event.preventDefault();var delta=0;if(event.wheelDelta){delta=-event.wheelDelta}else if(event.detail){delta=event.detail*10}scope.zoom(new THREE.Vector2(0,delta/1e3))}domElement.addEventListener("contextmenu",function(event){event.preventDefault()},false);domElement.addEventListener("mousedown",onMouseDown,false);domElement.addEventListener("mousewheel",onMouseWheel,false);domElement.addEventListener("DOMMouseScroll",onMouseWheel,false);function touchStart(event){if(scope.enabled===false)return;setPointers(event);pointersOld[0].copy(pointers[0]);pointersOld[1].copy(pointers[1])}function touchMove(event){if(scope.enabled===false)return;setPointers(event);switch(touches.length){case 1:pointersDelta[0].subVectors(pointers[0],getClosestPoint(pointers[0],pointersOld));pointersDelta[1].subVectors(pointers[1],getClosestPoint(pointers[1],pointersOld));if(object instanceof THREE.PerspectiveCamera){scope.rotate(pointersDelta[0])}else if(object instanceof THREE.OrthographicCamera){scope.pan(pointersDelta[0])}break;case 2:pointersDelta[0].subVectors(pointers[0],getClosestPoint(pointers[0],pointersOld));pointersDelta[1].subVectors(pointers[1],getClosestPoint(pointers[1],pointersOld));var prevDistance=pointersOld[0].distanceTo(pointersOld[1]);var distance=pointers[0].distanceTo(pointers[1]);if(prevDistance){scope.zoom(new THREE.Vector2(0,prevDistance-distance));scope.pan(pointersDelta[0].clone().add(pointersDelta[1]).multiplyScalar(.5))}break}pointersOld[0].copy(pointers[0]);pointersOld[1].copy(pointers[1])}domElement.addEventListener("touchstart",touchStart,false);domElement.addEventListener("touchmove",touchMove,false)};THREE.EditorControls.prototype=Object.create(THREE.EventDispatcher.prototype);THREE.EditorControls.prototype.constructor=THREE.EditorControls;THREE.OBJLoader=function(manager){this.manager=manager!==undefined?manager:THREE.DefaultLoadingManager};THREE.OBJLoader.prototype={constructor:THREE.OBJLoader,load:function(url,onLoad,onProgress,onError){var scope=this;var loader=new THREE.XHRLoader(scope.manager);loader.setCrossOrigin(this.crossOrigin);loader.load(url,function(text){onLoad(scope.parse(text))},onProgress,onError)},parse:function(text){var object,objects=[];var geometry,material;function parseVertexIndex(value){var index=parseInt(value);return(index>=0?index-1:index+vertices.length/3)*3}function parseNormalIndex(value){var index=parseInt(value);return(index>=0?index-1:index+normals.length/3)*3}function parseUVIndex(value){var index=parseInt(value);return(index>=0?index-1:index+uvs.length/2)*2}function addVertex(a,b,c){geometry.vertices.push(vertices[a],vertices[a+1],vertices[a+2],vertices[b],vertices[b+1],vertices[b+2],vertices[c],vertices[c+1],vertices[c+2])}function addNormal(a,b,c){geometry.normals.push(normals[a],normals[a+1],normals[a+2],normals[b],normals[b+1],normals[b+2],normals[c],normals[c+1],normals[c+2])}function addUV(a,b,c){geometry.uvs.push(uvs[a],uvs[a+1],uvs[b],uvs[b+1],uvs[c],uvs[c+1])}function addFace(a,b,c,d,ua,ub,uc,ud,na,nb,nc,nd){var ia=parseVertexIndex(a);var ib=parseVertexIndex(b);var ic=parseVertexIndex(c);var id;if(d===undefined){addVertex(ia,ib,ic)}else{id=parseVertexIndex(d);addVertex(ia,ib,id);addVertex(ib,ic,id)}if(ua!==undefined){ia=parseUVIndex(ua);ib=parseUVIndex(ub);ic=parseUVIndex(uc);if(d===undefined){addUV(ia,ib,ic)}else{id=parseUVIndex(ud);addUV(ia,ib,id);addUV(ib,ic,id)}}if(na!==undefined){ia=parseNormalIndex(na);ib=parseNormalIndex(nb);ic=parseNormalIndex(nc);if(d===undefined){addNormal(ia,ib,ic)}else{id=parseNormalIndex(nd);addNormal(ia,ib,id);addNormal(ib,ic,id)}}}if(/^o /gm.test(text)===false){geometry={vertices:[],normals:[],uvs:[]};material={name:""};object={name:"",geometry:geometry,material:material};objects.push(object)}var vertices=[];var normals=[];var uvs=[];var vertex_pattern=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;var normal_pattern=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;var uv_pattern=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;var face_pattern1=/f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/;var face_pattern2=/f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/;var face_pattern3=/f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/;var face_pattern4=/f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/;var lines=text.split("\n");var i;for(i=0;i<lines.length;i++){var line=lines[i];line=line.trim();var result;if(line.length===0||line.charAt(0)==="#"){continue}else if((result=vertex_pattern.exec(line))!==null){vertices.push(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3]))}else if((result=normal_pattern.exec(line))!==null){normals.push(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3]))}else if((result=uv_pattern.exec(line))!==null){uvs.push(parseFloat(result[1]),parseFloat(result[2]))}else if((result=face_pattern1.exec(line))!==null){addFace(result[1],result[2],result[3],result[4])}else if((result=face_pattern2.exec(line))!==null){addFace(result[2],result[5],result[8],result[11],result[3],result[6],result[9],result[12])}else if((result=face_pattern3.exec(line))!==null){addFace(result[2],result[6],result[10],result[14],result[3],result[7],result[11],result[15],result[4],result[8],result[12],result[16])}else if((result=face_pattern4.exec(line))!==null){addFace(result[2],result[5],result[8],result[11],undefined,undefined,undefined,undefined,result[3],result[6],result[9],result[12])}else if(/^o /.test(line)){geometry={vertices:[],normals:[],uvs:[]};material={name:""};object={name:line.substring(2).trim(),geometry:geometry,material:material};objects.push(object)}else if(/^g /.test(line)){}else if(/^usemtl /.test(line)){material.name=line.substring(7).trim()}else if(/^mtllib /.test(line)){}else if(/^s /.test(line)){}else{}}var container=new THREE.Object3D;var l;for(i=0,l=objects.length;i<l;i++){object=objects[i];geometry=object.geometry;var buffergeometry=new THREE.BufferGeometry;buffergeometry.addAttribute("position",new THREE.BufferAttribute(new Float32Array(geometry.vertices),3));if(geometry.normals.length>0){buffergeometry.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(geometry.normals),3))}if(geometry.uvs.length>0){buffergeometry.addAttribute("uv",new THREE.BufferAttribute(new Float32Array(geometry.uvs),2))}material=new THREE.MeshLambertMaterial;material.name=object.material.name;var mesh=new THREE.Mesh(buffergeometry,material);mesh.name=object.name;container.add(mesh)}return container}};THREE.STLLoader=function(manager){this.manager=manager!==undefined?manager:THREE.DefaultLoadingManager};THREE.STLLoader.prototype={constructor:THREE.STLLoader,load:function(url,onLoad,onProgress,onError){var scope=this;var loader=new THREE.XHRLoader(scope.manager);loader.setCrossOrigin(this.crossOrigin);loader.setResponseType("arraybuffer");loader.load(url,function(text){onLoad(scope.parse(text))},onProgress,onError)},setCrossOrigin:function(value){this.crossOrigin=value},parse:function(data){var isBinary=function(){var expect,face_size,n_faces,reader;reader=new window.DataView(binData);face_size=32/8*3+32/8*3*3+16/8;n_faces=reader.getUint32(80,true);expect=80+32/8+n_faces*face_size;if(expect===reader.byteLength){return true}var fileLength=reader.byteLength;for(var index=0;index<fileLength;index++){if(reader.getUint8(index,false)>127){return true}}return false};var binData=this.ensureBinary(data);return isBinary()?this.parseBinary(binData):this.parseASCII(this.ensureString(data))},parseBinary:function(data){var reader=new window.DataView(data);var faces=reader.getUint32(80,true);var r,g,b,hasColors=false,colors;var defaultR,defaultG,defaultB,alpha;for(var index=0;index<80-10;index++){if(reader.getUint32(index,false)==1129270351&&reader.getUint8(index+4)==82&&reader.getUint8(index+5)==61){hasColors=true;colors=new Float32Array(faces*3*3);defaultR=reader.getUint8(index+6)/255;defaultG=reader.getUint8(index+7)/255;defaultB=reader.getUint8(index+8)/255;alpha=reader.getUint8(index+9)/255}}var dataOffset=84;var faceLength=12*4+2;var offset=0;var geometry=new THREE.BufferGeometry;var vertices=new Float32Array(faces*3*3);var normals=new Float32Array(faces*3*3);for(var face=0;face<faces;face++){var start=dataOffset+face*faceLength;var normalX=reader.getFloat32(start,true);var normalY=reader.getFloat32(start+4,true);var normalZ=reader.getFloat32(start+8,true);if(hasColors){var packedColor=reader.getUint16(start+48,true);if((packedColor&32768)===0){r=(packedColor&31)/31;g=(packedColor>>5&31)/31;b=(packedColor>>10&31)/31}else{r=defaultR;g=defaultG;b=defaultB}}for(var i=1;i<=3;i++){var vertexstart=start+i*12;vertices[offset]=reader.getFloat32(vertexstart,true);vertices[offset+1]=reader.getFloat32(vertexstart+4,true);vertices[offset+2]=reader.getFloat32(vertexstart+8,true);normals[offset]=normalX;normals[offset+1]=normalY;normals[offset+2]=normalZ;if(hasColors){colors[offset]=r;colors[offset+1]=g;colors[offset+2]=b}offset+=3}}geometry.addAttribute("position",new THREE.BufferAttribute(vertices,3));geometry.addAttribute("normal",new THREE.BufferAttribute(normals,3));if(hasColors){geometry.addAttribute("color",new THREE.BufferAttribute(colors,3));geometry.hasColors=true;geometry.alpha=alpha}return geometry},parseASCII:function(data){var geometry,length,normal,patternFace,patternNormal,patternVertex,result,text;geometry=new THREE.Geometry;patternFace=/facet([\s\S]*?)endfacet/g;while((result=patternFace.exec(data))!==null){text=result[0];patternNormal=/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;while((result=patternNormal.exec(text))!==null){normal=new THREE.Vector3(parseFloat(result[1]),parseFloat(result[3]),parseFloat(result[5]))}patternVertex=/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;while((result=patternVertex.exec(text))!==null){geometry.vertices.push(new THREE.Vector3(parseFloat(result[1]),parseFloat(result[3]),parseFloat(result[5])))}length=geometry.vertices.length;geometry.faces.push(new THREE.Face3(length-3,length-2,length-1,normal))}geometry.computeBoundingBox();geometry.computeBoundingSphere();return geometry},ensureString:function(buf){if(typeof buf!=="string"){var array_buffer=new Uint8Array(buf);var str="";for(var i=0;i<buf.byteLength;i++){str+=String.fromCharCode(array_buffer[i])}return str}else{return buf}},ensureBinary:function(buf){if(typeof buf==="string"){var array_buffer=new Uint8Array(buf.length);for(var i=0;i<buf.length;i++){array_buffer[i]=buf.charCodeAt(i)&255}return array_buffer.buffer||array_buffer}else{return buf}}};if(typeof window.DataView==="undefined"){window.DataView=function(buffer,byteOffset,byteLength){this.buffer=buffer;this.byteOffset=byteOffset||0;this.byteLength=byteLength||buffer.byteLength||buffer.length;this._isString=typeof buffer==="string"};window.DataView.prototype={_getCharCodes:function(buffer,start,length){start=start||0;length=length||buffer.length;var end=start+length;var codes=[];for(var i=start;i<end;i++){codes.push(buffer.charCodeAt(i)&255)}return codes},_getBytes:function(length,byteOffset,littleEndian){var result;if(littleEndian===undefined){littleEndian=this._littleEndian}if(byteOffset===undefined){byteOffset=this.byteOffset}else{byteOffset=this.byteOffset+byteOffset}if(length===undefined){length=this.byteLength-byteOffset}if(typeof byteOffset!=="number"){throw new TypeError("DataView byteOffset is not a number")}if(length<0||byteOffset+length>this.byteLength){throw new Error("DataView length or (byteOffset+length) value is out of bounds")}if(this.isString){result=this._getCharCodes(this.buffer,byteOffset,byteOffset+length)}else{result=this.buffer.slice(byteOffset,byteOffset+length)}if(!littleEndian&&length>1){if(Array.isArray(result)===false){result=Array.prototype.slice.call(result)}result.reverse()}return result},getFloat64:function(byteOffset,littleEndian){var b=this._getBytes(8,byteOffset,littleEndian),sign=1-2*(b[7]>>7),exponent=((b[7]<<1&255)<<3|b[6]>>4)-((1<<10)-1),mantissa=(b[6]&15)*Math.pow(2,48)+b[5]*Math.pow(2,40)+b[4]*Math.pow(2,32)+b[3]*Math.pow(2,24)+b[2]*Math.pow(2,16)+b[1]*Math.pow(2,8)+b[0];if(exponent===1024){if(mantissa!==0){return NaN}else{return sign*Infinity}}if(exponent===-1023){return sign*mantissa*Math.pow(2,-1022-52)}return sign*(1+mantissa*Math.pow(2,-52))*Math.pow(2,exponent)},getFloat32:function(byteOffset,littleEndian){var b=this._getBytes(4,byteOffset,littleEndian),sign=1-2*(b[3]>>7),exponent=(b[3]<<1&255|b[2]>>7)-127,mantissa=(b[2]&127)<<16|b[1]<<8|b[0];if(exponent===128){if(mantissa!==0){return NaN}else{return sign*Infinity}}if(exponent===-127){return sign*mantissa*Math.pow(2,-126-23)}return sign*(1+mantissa*Math.pow(2,-23))*Math.pow(2,exponent)},getInt32:function(byteOffset,littleEndian){var b=this._getBytes(4,byteOffset,littleEndian);return b[3]<<24|b[2]<<16|b[1]<<8|b[0]},getUint32:function(byteOffset,littleEndian){return this.getInt32(byteOffset,littleEndian)>>>0},getInt16:function(byteOffset,littleEndian){return this.getUint16(byteOffset,littleEndian)<<16>>16},getUint16:function(byteOffset,littleEndian){var b=this._getBytes(2,byteOffset,littleEndian);return b[1]<<8|b[0]},getInt8:function(byteOffset){return this.getUint8(byteOffset)<<24>>24},getUint8:function(byteOffset){return this._getBytes(1,byteOffset)[0]}}}THREE.EffectComposer=function(renderer,renderTarget){this.renderer=renderer;if(renderTarget===undefined){var pixelRatio=renderer.getPixelRatio();var size=renderer.getSize();var width=Math.floor(size.width/pixelRatio)||1;var height=Math.floor(size.height/pixelRatio)||1;var parameters={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat,stencilBuffer:false};renderTarget=new THREE.WebGLRenderTarget(width,height,parameters)}this.renderTarget1=renderTarget;

this.renderTarget2=renderTarget.clone();this.writeBuffer=this.renderTarget1;this.readBuffer=this.renderTarget2;this.passes=[];if(THREE.CopyShader===undefined)throw new Error("THREE.EffectComposer relies on THREE.CopyShader");this.copyPass=new THREE.ShaderPass(THREE.CopyShader)};THREE.EffectComposer.prototype={swapBuffers:function(){var tmp=this.readBuffer;this.readBuffer=this.writeBuffer;this.writeBuffer=tmp},addPass:function(pass){this.passes.push(pass)},insertPass:function(pass,index){this.passes.splice(index,0,pass)},render:function(delta){this.writeBuffer=this.renderTarget1;this.readBuffer=this.renderTarget2;var maskActive=false;var pass,i,il=this.passes.length;for(i=0;i<il;i++){pass=this.passes[i];if(!pass.enabled)continue;pass.render(this.renderer,this.writeBuffer,this.readBuffer,delta,maskActive);if(pass.needsSwap){if(maskActive){var context=this.renderer.context;context.stencilFunc(context.NOTEQUAL,1,4294967295);this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,delta);context.stencilFunc(context.EQUAL,1,4294967295)}this.swapBuffers()}if(pass instanceof THREE.MaskPass){maskActive=true}else if(pass instanceof THREE.ClearMaskPass){maskActive=false}}},reset:function(renderTarget){if(renderTarget===undefined){renderTarget=this.renderTarget1.clone();var pixelRatio=this.renderer.getPixelRatio();renderTarget.width=Math.floor(this.renderer.context.canvas.width/pixelRatio);renderTarget.height=Math.floor(this.renderer.context.canvas.height/pixelRatio)}this.renderTarget1.dispose();this.renderTarget1=renderTarget;this.renderTarget2.dispose();this.renderTarget2=renderTarget.clone();this.writeBuffer=this.renderTarget1;this.readBuffer=this.renderTarget2},setSize:function(width,height){this.renderTarget1.setSize(width,height);this.renderTarget2.setSize(width,height)}};THREE.MaskPass=function(scene,camera){this.scene=scene;this.camera=camera;this.enabled=true;this.clear=true;this.needsSwap=false;this.inverse=false};THREE.MaskPass.prototype={render:function(renderer,writeBuffer,readBuffer){var context=renderer.context;context.colorMask(false,false,false,false);context.depthMask(false);var writeValue,clearValue;if(this.inverse){writeValue=0;clearValue=1}else{writeValue=1;clearValue=0}context.enable(context.STENCIL_TEST);context.stencilOp(context.REPLACE,context.REPLACE,context.REPLACE);context.stencilFunc(context.ALWAYS,writeValue,4294967295);context.clearStencil(clearValue);renderer.render(this.scene,this.camera,readBuffer,this.clear);renderer.render(this.scene,this.camera,writeBuffer,this.clear);context.colorMask(true,true,true,true);context.depthMask(true);context.stencilFunc(context.EQUAL,1,4294967295);context.stencilOp(context.KEEP,context.KEEP,context.KEEP)}};THREE.ClearMaskPass=function(){this.enabled=true};THREE.ClearMaskPass.prototype={render:function(renderer){var context=renderer.context;context.disable(context.STENCIL_TEST)}};THREE.RenderPass=function(scene,camera,overrideMaterial,clearColor,clearAlpha){this.scene=scene;this.camera=camera;this.overrideMaterial=overrideMaterial;this.clearColor=clearColor;this.clearAlpha=clearAlpha!==undefined?clearAlpha:1;this.oldClearColor=new THREE.Color;this.oldClearAlpha=1;this.enabled=true;this.clear=true;this.needsSwap=false;this.writeDepth=true};THREE.RenderPass.prototype={render:function(renderer,writeBuffer,readBuffer){if(!this.writeDepth){renderer.context.depthMask(false);renderer.context.disable(renderer.context.DEPTH_TEST)}else{renderer.context.depthMask(true);renderer.context.enable(renderer.context.DEPTH_TEST)}this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor){this.oldClearColor.copy(renderer.getClearColor());this.oldClearAlpha=renderer.getClearAlpha();renderer.setClearColor(this.clearColor,this.clearAlpha)}renderer.render(this.scene,this.camera,readBuffer,this.clear);if(this.clearColor){renderer.setClearColor(this.oldClearColor,this.oldClearAlpha)}this.scene.overrideMaterial=null;renderer.context.depthMask(true);renderer.context.enable(renderer.context.DEPTH_TEST)}};THREE.ShaderPass=function(shader,textureID){this.textureID=textureID!==undefined?textureID:"tDiffuse";this.uniforms=THREE.UniformsUtils.clone(shader.uniforms);this.material=new THREE.ShaderMaterial({defines:shader.defines||{},uniforms:this.uniforms,vertexShader:shader.vertexShader,fragmentShader:shader.fragmentShader});this.renderToScreen=false;this.enabled=true;this.needsSwap=true;this.clear=false;this.writeDepth=false;this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);this.scene=new THREE.Scene;this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null);this.scene.add(this.quad)};THREE.ShaderPass.prototype={render:function(renderer,writeBuffer,readBuffer){if(!this.writeDepth){renderer.context.depthMask(false);renderer.context.disable(renderer.context.DEPTH_TEST)}else{renderer.context.depthMask(true);renderer.context.enable(renderer.context.DEPTH_TEST)}if(this.uniforms[this.textureID]){this.uniforms[this.textureID].value=readBuffer}this.quad.material=this.material;if(this.renderToScreen){renderer.render(this.scene,this.camera)}else{renderer.render(this.scene,this.camera,writeBuffer,this.clear)}renderer.context.depthMask(true);renderer.context.enable(renderer.context.DEPTH_TEST)}};THREE.StencilPass=function(scene,camera){this.scene=scene;this.camera=camera;this.enabled=true;this.clear=true;this.needsSwap=false;this.inverse=false};THREE.StencilPass.prototype={render:function(renderer,writeBuffer,readBuffer){var context=renderer.context;context.disable(context.CULL_FACE);context.enable(context.DEPTH_TEST);context.depthFunc(context.LESS);context.colorMask(false,false,false,false);context.depthMask(false);context.stencilMask(255);context.enable(context.STENCIL_TEST);context.clearStencil(0);context.stencilFunc(context.ALWAYS,1,4294967295);context.stencilOpSeparate(context.BACK,context.KEEP,context.DECR_WRAP,context.KEEP);context.stencilOpSeparate(context.FRONT,context.KEEP,context.INCR_WRAP,context.KEEP);context.enable(context.POLYGON_OFFSET_FILL);context.polygonOffset(-.01,0);renderer.render(this.scene,this.camera,readBuffer,this.clear);renderer.render(this.scene,this.camera,writeBuffer,this.clear);context.disable(context.POLYGON_OFFSET_FILL);context.colorMask(true,true,true,true);context.depthMask(true);context.stencilFunc(context.NOTEQUAL,0,4294967295);context.stencilOp(context.KEEP,context.KEEP,context.KEEP)}};THREE.ClearStencilPass=function(){this.enabled=true};THREE.ClearStencilPass.prototype={render:function(renderer){var context=renderer.context;context.disable(context.STENCIL_TEST);renderer.clear(false,false,true)}};THREE.CopyShader={uniforms:{tDiffuse:{type:"t",value:null},opacity:{type:"f",value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","gl_FragColor = opacity * texel;","}"].join("\n")};THREE.DarkenShader={uniforms:{tDiffuse:{type:"t",value:null},alpha:{type:"f",value:.25},color:{type:"v3",value:new THREE.Vector3(0,0,0)}},vertexShader:["varying vec2 vUv;","void main(void) {","vUv = uv;","vec4 p = modelViewMatrix * vec4( position, 1.0 );","gl_Position = projectionMatrix * p;","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform float alpha;","uniform vec3 color;","varying vec2 vUv;","void main(void) {","vec4 shadow = vec4(alpha) * vec4(color, 1.0) + vec4(1.0 - alpha);","gl_FragColor = texture2D(tDiffuse, vUv) * shadow;","}"].join("\n")};THREE.FXAAShader={uniforms:{tDiffuse:{type:"t",value:null},resolution:{type:"v2",value:new THREE.Vector2(1/1024,1/512)}},vertexShader:["void main() {","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDiffuse;","uniform vec2 resolution;","#define FXAA_REDUCE_MIN   (1.0/128.0)","#define FXAA_REDUCE_MUL   (1.0/8.0)","#define FXAA_SPAN_MAX     8.0","void main() {","vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;","vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;","vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;","vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;","vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );","vec3 rgbM  = rgbaM.xyz;","vec3 luma = vec3( 0.299, 0.587, 0.114 );","float lumaNW = dot( rgbNW, luma );","float lumaNE = dot( rgbNE, luma );","float lumaSW = dot( rgbSW, luma );","float lumaSE = dot( rgbSE, luma );","float lumaM  = dot( rgbM,  luma );","float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );","float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );","vec2 dir;","dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));","dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));","float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );","float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );","dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),","max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),","dir * rcpDirMin)) * resolution;","vec4 rgbA = (1.0/2.0) * (","texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (1.0/3.0 - 0.5)) +","texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (2.0/3.0 - 0.5)));","vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (","texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (0.0/3.0 - 0.5)) +","texture2D(tDiffuse,  gl_FragCoord.xy  * resolution + dir * (3.0/3.0 - 0.5)));","float lumaB = dot(rgbB, vec4(luma, 0.0));","if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {","gl_FragColor = rgbA;","} else {","gl_FragColor = rgbB;","}","}"].join("\n")};THREE.SAOShader={uniforms:{tDiffuse:{type:"t",value:null},tDepth:{type:"t",value:null},tNorm:{type:"t",value:null},size:{type:"v2",value:new THREE.Vector2(512,512)},projInv:{type:"m4",value:null},near:{type:"f",value:1},far:{type:"f",value:600},radius:{type:"f",value:2},bias:{type:"f",value:.001},noise:{type:"f",value:.05},intensity:{type:"f",value:7.5},sigma:{type:"f",value:.05},projScale:{type:"f",value:.03},variation:{type:"i",value:2},onlyDiffuse:{type:"i",value:0},onlyAO:{type:"i",value:0}},vertexShader:["varying vec2 vUv;","varying mat3 viewInv;","void main() {","vUv = uv;","viewInv = normalMatrix;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform sampler2D tDepth;","uniform sampler2D tNorm;","uniform sampler2D tDiffuse;","uniform vec2 size;","uniform mat4 projInv;","uniform float near;","uniform float far;","uniform float radius;","uniform float bias;","uniform float noise;","uniform float intensity;","uniform float sigma;","uniform float projScale;","uniform int variation;","uniform bool onlyAO;","uniform bool onlyDiffuse;","varying mat3 viewInv;","varying vec2 vUv;","const int NUM_SAMPLES = 16;","const int NUM_SPIRAL_TURNS = 7;","const float PI = 3.14159;","float rand( const vec2 coord ) {","return fract(sin(dot(coord.xy ,vec2(12.9898,78.233))) * 43758.5453);","}","float readDepth( in vec2 coord ) {","vec4 rgba_depth = texture2D( tDepth, coord );","const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );","float depth = dot( rgba_depth, bit_shift );","return 2.0*near / ( far+near - depth*(far-near) );","}","vec3 calcVSPos(vec2 uv) {","float depth = readDepth( uv );","vec2 clipUV  = uv * 2.0 - vec2(1.0);","vec4 invUV = (projInv * mat4(viewInv) * vec4(clipUV, -1.0, 1.0));","vec3 eyeRay = normalize( (invUV/invUV.w).xyz - cameraPosition);","vec3 wsPos = eyeRay * depth + cameraPosition;","return (viewMatrix * vec4(wsPos, 1.0)).xyz;","}","vec2 tapLocation(int sampleNumber, float spinAngle, out float ssR) {","float alpha = (float(sampleNumber) + 0.5) / float(NUM_SAMPLES);","float angle = alpha * (float(NUM_SPIRAL_TURNS) * 6.28) + spinAngle;","ssR = alpha;","return vec2(cos(angle), sin(angle));","}","vec3 getOffsetPt(vec2 uv, vec2 unitOffset, float ssR) {","vec2 offsetUV = uv + ssR * unitOffset * (size.y / size.x);","return calcVSPos(offsetUV);","}","float sampleAO(vec2 uv, vec3 vsPos, vec3 vsNorm, float sampleSSR, int tapIndex, float rotationAngle) {","const float epsilon = 0.01;","float r2 = radius * radius;","float ssR;","vec2 unitOffset = tapLocation(tapIndex, rotationAngle, ssR);","ssR *= sampleSSR;","vec3 Q = getOffsetPt(uv, unitOffset, ssR);","vec3 v = Q - vsPos;","float vv = dot(v, v) / projScale;","float vn = dot(v, vsNorm);","if (variation == 1) {","float f = max(r2 - vv, 0.0);","return f * f * f * max( (vn - bias) / (epsilon + vv), 0.0);","} else if (variation == 2) {","float invR2 = 1.0 / r2;","return 4.0 * max(1.0 - vv * invR2, 0.0) * max(vn, 0.0);","} else if (variation == 3) { ","return 2.0 * float(vv < r2) * max(vn, 0.0);","} else {","return float(vv < r2) * max(vn / (epsilon + vv), 0.0);","}","}","float calcAO(vec2 uv) {","vec3 vsPos = calcVSPos(uv);","vec3 vsNorm = texture2D( tNorm, uv).rgb;","float sampleNoise = rand(uv) * noise;","float rAngle = 2.0 * PI * sampleNoise;","float ssR = projScale * radius / ( vsPos.z ) ;","float occlusion = 0.0;","for (int i = 0; i < NUM_SAMPLES; ++i) {","occlusion += sampleAO(uv, vsPos, vsNorm, ssR, i, rAngle);","}","occlusion = (1.0 - occlusion * (2.0*sigma / float(NUM_SAMPLES)));","occlusion = clamp(pow(occlusion, 1.0 + intensity), 0.0, 1.0);","return occlusion;","}","void main(void) {","vec4 color = texture2D( tDiffuse, vUv );","if (onlyDiffuse) {","gl_FragColor = vec4( color.rgb, 1.0 );","} else {","float occlusion = calcAO( vUv );","if (onlyAO) {","gl_FragColor = vec4( vec3(occlusion), 1.0 );","} else {","gl_FragColor = vec4( vec3(occlusion)*color.rgb, 1.0 );","}","}","}"].join("\n")};var r={ca:"2.0"};r.c={random:Math.random,da:function(b){for(var c=b.length-1;0<c;c--){var l=Math.floor(r.c.random()*(c+1)),k=b[c];b[c]=b[l];b[l]=k}return b},G:function(b,c){var l=b.y-c.y;if(l<r.c.D)return-1;if(l>r.c.n)return 1;l=b.x-c.x;return l<r.c.D?-1:l>r.c.n?1:0},N:function(b,c,l){return(c.x-b.x)*(l.y-b.y)-(c.y-b.y)*(l.x-b.x)}};r.c.n=Math.pow(2,-43);r.c.D=-r.c.n;function u(b){this.U=[];this.r=[];this.X=[];this.L=0;this.F=[];this.R=[];this.T=[];if(b)for(var c=0,l=b.length;c<l;c++){var k=w(this,b[c]);if(3>k.length)console.log("Polygon has < 3 vertices!",k);else{for(var a=void 0,e=void 0,d=void 0,f=0;f<k.length-1;f++)a=x(this,k[f],k[f+1]),d?(a.o=d,d.m=a):e=a,d=a,this.r.push(a);a=x(this,k[k.length-1],k[0]);a.o=d;d.m=a;this.r.push(a);e.o=a;a.m=e;this.F[this.L++]=!0}}}u.prototype={Q:function(){return this.F.concat()}};function B(b,c,l,k){b.T.push([c.id,l.id,k.id])}function w(b,c){function l(a,b){return Math.abs(a.x-b.x)<r.c.n&&Math.abs(a.y-b.y)<r.c.n}function k(a,b,c){if(Math.abs(r.c.N(b,a,c))>r.c.n)return!1;var d;Math.abs(a.y-b.y)<r.c.n?(d=b.x,a.x<c.x?(b=a.x,a=c.x):(b=c.x,a=a.x)):(d=b.y,a.y<c.y?(b=a.y,a=c.y):(b=c.y,a=a.y));return b-d<r.c.n&&d-a<r.c.n}for(var a=[],e,d,f,h=0;h<c.length;h++)e=D(b,c[h].x,c[h].y),d=!0,f=a.length-1,0<=f&&(l(e,a[f])?d=!1:0<f&&k(a[f-1],a[f],e)&&a.pop()),d&&a.push(e);f=a.length-1;0<f&&l(a[f],a[0])&&(a.pop(),f--);1<f&&(k(a[f-1],a[f],a[0])&&(a.pop(),f--),1<f&&k(a[f],a[0],a[1])&&a.shift());return a}function x(b,c,l){return{O:b.L,a:c,i:l,p:1==r.c.G(l,c),o:null,m:null,H:null,I:null,v:!1,J:null,K:null,j:null,g:null,w:!1}}function D(b,c,l){c={id:b.U.length,x:c,y:l};b.U.push(c);return c}function E(b){this.k=b}E.prototype={};function F(b,c,l,k){this.q=b?b:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY};this.l=c?c:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY};this.t=l;this.s=k;this.depth=-1}F.prototype={};function G(b){var c=new F(b.q,b.l,b.t,b.s);c.e=b.e;c.f=b.f;c.b=b.b;c.d=b.d;c.u=b.u;return c}function H(b){this.A=b;b.u=this}H.prototype={};function I(b){var c=new F(null,null,null,null);this.B=[];J(this,c);this.root=new H(c);if(b)for(b=b.r,c=0;c<b.length;c++)b[c].H=b[c].I=this.root,b[c].v=!1}I.prototype={P:function(b){var c,l,k=b.U.length,a=Array(k);for(c=0;c<k;c++)a[c]=Array(8);var e=Array(k);c=0;for(l=this.B.length;c<l;c++){var d=this.B[c],f=d.e?d.f?5:7:d.f?4:6,h=d.b?d.d?1:0:d.d?3:2;if(1==d.depth%2){if(5==f||1==h||7==f&&3==h||4==f&&0==h){var g;g={a:d.l,i:d.q,j:null,g:null,w:!1};b.X.push(g);var p;p={a:d.q,i:d.l,aa:g,j:null,g:null,w:!1};b.X.push(p);g.aa=p;a[d.l.id][h]=g;a[d.q.id][f]=p}}else null!=d.q.id&&(e[d.q.id]=f),null!=d.l.id&&(e[d.l.id]=h)}var t;for(c=0;c<k;c++)if(d=a[c],f=e[c],null!=f){l=f;h=null;do if(7<l++&&(l=0),b=d[l])h?(b.j=h,h.g=b):(t=b.a,t.Y=b),h=b.aa;while(l!=f);h&&(t.Z=h)}}};function L(b,c){function l(){var a=m.e||m.f;a.b&&a.d?m==a.b?(n.e=null,a.b=q):(q.f=null,a.d=n):(n.e=null,n.f=a,a.d=n)}function k(a){m.l==t.l?(f?m.b?(a.e=q,q.b=a,n.d=null):(a.f=n,q.b=null,n.d=a):(a.e=q,a.f=n,q.b=n.d=a),q.d=n.b=null):(a.e&&a.f&&(a.e==m?(a.C=a.f,a.ba=!0):(a.C=a.e,a.ba=!1)),a.e=q,a.f=n,q.d=n.b=a,q.b=n.d=null)}function a(){var a;if(m.l==t.l&&f)m.b.e=q,m.d.f=n,q.b=m.b,n.d=m.d,a=q.d=n.b=null;else{m.b.e=q;m.d.f=n;var b=M(c,m.l);if(0<b)a=!0;else if(0>b)a=!1;else{a=m.b.s;var d=a.p,b=d?a.a:a.i,b=M(c,b);0<b?a=!0:0>b?a=!1:(a=d?a.m:a.o,b=d?a.i:a.a,b=M(c,b),a=0<b?!0:!1)}a?(a=m.d,m.d.e=q,q.b=m.b,n.d=null):(a=m.b,m.b.f=n,n.d=m.d,q.b=null);q.d=n.b=a}return a}N(c);var e,d,f,h,g,p;c.p?(e=c.a,h=c.i,d=c.H,g=c.I,f=c.o.v,p=c.m.v):(e=c.i,h=c.a,d=c.I,g=c.H,f=c.m.v,p=c.o.v);p||(p=O(b,g,h,!1),g==d&&(d=p),g=p);g=g.A;if(g.e||g.f)if(g.q!=h)console.log("ERR add_segment: trFirstHigh != segHigh: ",g);else{f||(d=O(b,d,e,!0));var t=d.A,m=g,q,n,y,v;for(e=b.B.length+2;m;){if(0>--e){console.log("ERR add_segment: infinite loop",m,c,b);return}if(!m.b&&!m.d){console.log("ERR add_segment: missing successors",m,c,b);return}d=m.u;d.h=c;d.A=null;v&&v.s==m.s?(q=m,n=v,n.l=m.l,d.left=new H(q),d.right=v.u):(y&&y.t==m.t?(n=m,q=y,q.l=m.l,d.left=y.u):(q=m,n=P(b,m),d.left=new H(q)),d.right=new H(n));m.e&&m.f?m.C?(m.ba?(n.e=m.f,n.f=m.C,n.e.b=n,n.f.d=n):(q.f=m.e,q.e=m.C,q.e.b=q,q.f.d=q),q.C=n.C=null):m.q==g.q?(n.f.d=n,q.f=n.e=null):n==m?(n.e=n.f,n.f=null,n.e.b=n):(q.f=q.e,q.e=null):l();m.b&&m.d?d=a():(d=m.b?m.b:m.d,k(d));q.s&&(q.s.J=n);n.t&&(n.t.K=q);q.s=n.t=c;c.J=q;c.K=n;m.l!=t.l?(y=q,v=n,m=d):m=null}c.v=!0}else console.log("ERR add_segment: missing trFirst.uX: ",g)}function Q(b,c){if(c)var l=b.a,k=b.i,a=b.H;else l=b.i,k=b.a,a=b.I;for(var e;a;)if(a.V)a=-1==r.c.G(l==a.V?k:l,a.V)?a.left:a.right;else if(a.h){if(l==a.h.a||l==a.h.i)if(Math.abs(l.y-k.y)<r.c.n){a=Math.abs(a.h.a.y-a.h.i.y)<r.c.n?l==a.h.a?((e=b.p?k.x>=a.h.i.x:k.x<a.h.i.x)?b.o.p:a.h.m.p)?a.right:a.left:((e=b.p?k.x<a.h.a.x:k.x>=a.h.a.x)?b.m.p:a.h.o.p)?a.left:a.right:k.x<l.x?a.left:a.right;continue}else e=M(a.h,k),0==e&&(e=l==a.h.a?(e=b.p?k.y>=a.h.i.y:k.y<a.h.i.y)?M(a.h,b.o.a):-M(a.h,a.h.m.i):(e=b.p?k.y<a.h.a.y:k.y>=a.h.a.y)?M(a.h,b.m.i):-M(a.h,a.h.o.a));else e=M(a.h,l),0==e&&(e=M(a.h,k),0==e&&(e=M(a.h,c?b.o.a:b.m.i)));if(0<e)a=a.left;else if(0>e)a=a.right;else break}else{a.A||console.log("ptNode: unknown type",a);c?b.H=a:b.I=a;break}}function N(b){Q(b,!0);Q(b,!1)}function M(b,c){var l;l=b.a.x-c.x;var k=b.i.x-c.x,a=Math.abs(b.a.y-c.y)<r.c.n;if(Math.abs(b.i.y-c.y)<r.c.n){if(a)return 0;l=k}else if(!a)return b.p?r.c.N(b.a,b.i,c):r.c.N(b.i,b.a,c);return Math.abs(l)<r.c.n?0:l}function O(b,c,l,k){var a=c.A;if(a.q==l||a.l==l)return c;var e=G(a);a.l=e.q=l;a.b=e;e.e=a;a.d=e.f=null;e.b&&(e.b.e=e);e.d&&(e.d.f=e);J(b,e);c.V=l;c.A=null;c.right=new H(a);c.left=new H(e);return k?a.u:e.u}function P(b,c){var l=G(c);J(b,l);return l}function J(b,c){c.fa=b.B.length;b.B.push(c)}function V(b){this.k=b;this.$=new I(this.k)}V.prototype={P:function(){return this.$.P(this.k)}};function W(b){this.k=b;this.S=null}W.prototype={};function X(b){this.k=b}X.prototype={};function Z(){this.M=null}Z.prototype={W:function(){this.M=null},Q:function(){return this.M?this.M.Q():null},ea:function(b,c){this.W();if(!b||0==b.length)return[];var l=new u(b),k=c?!1:1==l.L;if(k){k=new E(l);a:{var a=k.k,e=a.r[0],d=e,f=e,h=0;do h+=(f.a.x-f.i.x)*(f.a.y+f.i.y),f=f.m;while(f!=e);if(0>h){do d.j=d.m,d=d.g=d.o;while(d!=e);a.F[0]=!1}else{do d.j=d.o,d=d.g=d.m;while(d!=e)}for(e=a=e;a.g!=a.j;){b:{var d=a.j.a.x,f=a.j.a.y,h=a.a.x,g=a.a.y,p=a.g.a.x,t=a.g.a.y,m=p-h,q=t-g,n=d-p,y=f-t,v=h-d,K=g-f;if(r.c.n>v*q-m*K)d=!1;else{for(var Y=a.j.j,C=a.g;C!=Y;){var C=C.g,z=C.a.x,A=C.a.y,R=z-d,S=A-f;if(0!=R||0!=S){var T=z-h,U=A-g;if(0!=T||0!=U)if(z-=p,A-=t,(0!=z||0!=A)&&m*U-q*T>=r.c.D&&v*S-K*R>=r.c.D&&n*A-y*z>=r.c.D){d=!1;break b}}}d=!0}}if(d)B(k.k,a.j.a,a.a,a.g.a),a.j.g=a.g,a.g.j=a.j,e=a=a.g;else if(a=a.g,a==e){k=!1;break a}}k=!0}}if(!k){k=new W(l);k.S=new V(k.k);e=k.S;a=e.k.r.concat();r.c.da(a);d=0;f=e.k.L;if(1!=f)for(h=Array(f),g=a.concat(),p=0;p<g.length;p++)t=g[p].O,h[t]?a[f++]=g[p]:(a[d++]=g[p],h[t]=!0);d=a.length;f=e.$;h=0;for(g=d;h<d;){g=Math.log(g)/Math.LN2;for(p=1<g?Math.floor(d/g):d;h<p;h++)L(f,a[h]);for(p=h;p<d;p++)N(a[p])}var e=e.k,f=[f.B[0]],h=[],s,p=0;do{for(t=1==p%2;g=f.pop();)-1==g.depth&&(g.depth=p,g.e&&f.push(g.e),g.f&&f.push(g.f),g.b&&f.push(g.b),g.d&&f.push(g.d),(s=g.t)&&-1==s.J.depth&&h.push(s.J),s=g.s)&&(-1==s.K.depth&&h.push(s.K),s.p!=t&&(e.F[s.O]=!1));f=h;h=[];p++}while(0<f.length);for(p=0;p<d;p++)a[p].J=a[p].K=null;k.S.P();s=k.k;d=0;for(f=s.r.length;d<f;d++){a=s.r[d];s.F[a.O]?(e=a.i,a.j=a.o,a.g=a.m):(e=a.a,a=a.m,a.j=a.m,a.g=a.o);if(h=a.a.Z)h.g=a,a.j=h,a.a.Z=null;if(h=e.Y)h.j=a,a.g=h,e.Y=null}s=k.k;s.R=[];k=0;for(a=s.r.length;k<a;k++)if(e=s.r[k],!e.w){a:{h=f=d=void 0;g=e;f=h=e.a;e.w=!0;for(e=e.g;d=e.a;){if(e.w){if(d==f)break;console.log("ERR unique_monotone: segment in two chains",f,e);e=null;break a}e.w=!0;1==r.c.G(d,h)&&(h=d,g=e);e=e.g}e=g}e&&s.R.push(e)}s=k=new X(l);k=s.k.R;s.k.T=[];for(a=0;a<k.length;a++)if(f=k[a],e=f.j,d=f.g,d.g==e)B(s.k,f.a,d.a,e.a);else if(e=s,d=f.g,f=f.a,h=[d.a],g=0,d=d.g,p=d.a,p!=f){for(;p!=f||1<g;)if(0<g)if(t=r.c.N(h[g],p,h[g-1]),Math.abs(t)<=r.c.n&&(p==f||r.c.G(h[g],p)==r.c.G(h[g],h[g-1]))&&(t=1),0<t)B(e.k,h[g-1],h[g],p),g--;else if(h[++g]=p,p==f)for(console.log("ERR uni-y-monotone: only concave angles left",h);1<g;)g--,B(e.k,h[g-1],h[g],h[g+1]);else d=d.g,p=d.a;else h[++g]=p,d=d.g,p=d.a;B(e.k,h[g-1],h[g],p)}}this.M=l;return l.T.concat()}};window.PNLTRI=r;r.REVISION=r.ca;r.Math=r.c;r.Triangulator=Z;Z.prototype.clear_lastData=Z.prototype.W;Z.prototype.get_PolyLeftArr=Z.prototype.Q;Z.prototype.triangulate_polygon=Z.prototype.ea;THREE.Shape.Utils.triangulateShape=function(){var pnlTriangulator=new window.PNLTRI.Triangulator;return function(contour,holes){return pnlTriangulator.triangulate_polygon([contour].concat(holes))}}();THREE.ShadowBuilder=function(position,category){this.origin=position;this.category="directional";if(category)this.category=category;this.meshes={};this.material=new THREE.MeshLambertMaterial({side:THREE.DoubleSide});this.far=1e4*.75;this.bias=.0075};THREE.ShadowBuilder.prototype={_addMesh:function(mesh){this.meshes[mesh.uuid]={v:null,f:null,matrixWorld:new THREE.Matrix4,normalMatrix:new THREE.Matrix3,vertices:[],faces:[],volume:null};mesh.updateMatrixWorld(true);this.meshes[mesh.uuid].matrixWorld=mesh.matrixWorld;this.meshes[mesh.uuid].normalMatrix.getNormalMatrix(mesh.matrixWorld);this._addGeometry(mesh);var volume=new THREE.Mesh(new THREE.Geometry,this.material);volume.geometry.vertices=this.meshes[mesh.uuid].vertices;volume.geometry.faces=this.meshes[mesh.uuid].faces;this.meshes[mesh.uuid].volume=volume},_addGeometry:function(mesh){var geom;if(mesh.geometry instanceof THREE.BufferGeometry){geom=(new THREE.Geometry).fromBufferGeometry(mesh.geometry)}else{geom=mesh.geometry.clone()}geom.computeFaceNormals();geom.mergeVertices();var v=geom.vertices;var f=geom.faces;for(var i=0;i<v.length;i++){v[i].applyMatrix4(this.meshes[mesh.uuid].matrixWorld)}this.meshes[mesh.uuid].v=v;this.meshes[mesh.uuid].f=f;geom.dispose()},_computeShadowVolume:function(meshID){this.meshes[meshID].vertices.length=0;this.meshes[meshID].faces.length=0;if(this.meshes[meshID].volume){this.meshes[meshID].volume.geometry.dispose()}var edges=this._getSilhouetteAndCap(meshID);this._computeShadowSides(meshID,edges);var volume=this.meshes[meshID].volume;volume.geometry=new THREE.Geometry;volume.geometry.vertices=this.meshes[meshID].vertices;volume.geometry.faces=this.meshes[meshID].faces;this.meshes[meshID].volume.geometry.computeFaceNormals()},_computeShadowSides:function(meshID,edges){for(var i=0;i<edges.length;i++){var a=this._projectVertex(this.meshes[meshID].v[edges[i][0]],this.bias);var b=this._projectVertex(this.meshes[meshID].v[edges[i][1]],this.bias);var a_prime=this._projectVertex(a,this.far);var b_prime=this._projectVertex(b,this.far);this._addQuad(meshID,a,a_prime,b,b_prime)}},_getSilhouetteAndCap:function(meshID){var edgeDict={};var edges=[];var i,j,face,verts,isFacing,a,b;var f=this.meshes[meshID].f;var v=this.meshes[meshID].v;for(i=0;i<f.length;i++){face=f[i];verts=[face.a,face.b,face.c];isFacing=this._isLightFacing(meshID,face);for(j=0;j<3;j++){a=verts[j];b=verts[(j+1)%3];this._addEdge(edgeDict,a,b,isFacing)}if(!isFacing){this._addCapTriangle(meshID,v[face.a],v[face.c],v[face.b])}}var manifold=true;for(var k in edgeDict){if(!edgeDict[k].manifold){manifold=false;break}else if(edgeDict[k].front&&edgeDict[k].back){var endpts=edgeDict[k].verts;edges.push(endpts)}}if(!manifold){edges.length=0;for(i=0;i<f.length;i++){face=f[i];verts=[face.a,face.b,face.c];isFacing=this._isLightFacing(meshID,face);for(j=0;j<3;j++){a=verts[j];b=verts[(j+1)%3];var edge=!isFacing?[b,a]:[a,b];edges.push(edge)}if(isFacing){this._addCapTriangle(meshID,v[face.a],v[face.b],v[face.c])}}}return edges},_isLightFacing:function(meshID,face){var n=face.normal.clone().applyMatrix3(this.meshes[meshID].normalMatrix);if(this.category=="point"){var v=this.meshes[meshID].v;var a=v[face.a];var b=v[face.b];var c=v[face.c];var center=new THREE.Vector3;center.x=(a.x+b.x+c.x)/3;center.y=(a.y+b.y+c.y)/3;center.z=(a.z+b.z+c.z)/3;var dir=this.origin.clone().sub(center);return n.dot(dir)>=0}else{return n.dot(this.origin)>=0}},_projectVertex:function(v,dist){var v_prime=v.clone();if(this.category=="point"){var dir=v.clone().sub(this.light).normalize();v_prime.add(dir.multiplyScalar(dist))}else{var l=this.origin.clone().normalize();l.negate().multiplyScalar(dist);v_prime.add(l)}return v_prime},_addEdge:function(edgeDict,a,b,isFacing){var name=a+"_"+b;if(edgeDict[b+"_"+a])name=b+"_"+a;if(edgeDict[name]){if(edgeDict[name].front==edgeDict[name].back){edgeDict[name].manifold=false;return}if(isFacing){edgeDict[name].front=!edgeDict[name].front}else{edgeDict[name].back=!edgeDict[name].back}edgeDict[name].manifold=true}else{var verts=!isFacing?[b,a]:[a,b];edgeDict[a+"_"+b]={verts:verts,front:isFacing,back:!isFacing,manifold:false}}},_addCapTriangle:function(meshID,a,b,c){var a_front=this._projectVertex(a,this.bias);var b_front=this._projectVertex(b,this.bias);var c_front=this._projectVertex(c,this.bias);this._addTriangle(meshID,a_front,b_front,c_front);var a_back=this._projectVertex(a,this.far);var b_back=this._projectVertex(b,this.far);var c_back=this._projectVertex(c,this.far);this._addTriangle(meshID,a_back,c_back,b_back)},_addQuad:function(meshID,a,b,c,d){this._addTriangle(meshID,a,b,c);this._addTriangle(meshID,d,c,b)},_addTriangle:function(meshID,a,b,c){this.meshes[meshID].vertices.push(a);this.meshes[meshID].vertices.push(b);this.meshes[meshID].vertices.push(c);var l=this.meshes[meshID].vertices.length;this.meshes[meshID].faces.push(new THREE.Face3(l-3,l-2,l-1))},getShadowVolume:function(mesh){if(!this.meshes[mesh.uuid]){this._addMesh(mesh);this._computeShadowVolume(mesh.uuid)}return this.meshes[mesh.uuid].volume},updateShadowVolume:function(mesh){mesh.updateMatrixWorld(true);this.meshes[mesh.uuid].matrixWorld=mesh.matrixWorld;this.meshes[mesh.uuid].normalMatrix.getNormalMatrix(mesh.matrixWorld);this._addGeometry(mesh);this._computeShadowVolume(mesh.uuid);return this.meshes[mesh.uuid].volume},updateLight:function(position){this.origin=position}}})(THREE);var FluxViewport = (function () {
  'use strict';

  var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : this;
  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports, __commonjs_global), module.exports; }

  /**
   * Whether to draw edges on front and back faces
   */
  EdgesHelper.EDGES_MODES = {
      NONE: 0,
      FRONT: 1,
      BACK: 2,
      BOTH: 3
  };

  /**
   * Create an object to render the edges of a mesh
   * @param  {Three.Mesh} mesh            The mesh to convert
   * @param  {Three.Material} material    The material on the mesh
   * @return {Three.EdgesHelper}          The edges object
   */
  var createEdges = function(mesh, material) {
      var helper = new THREE.EdgesHelper(mesh);
      helper.material = material;
      helper.matrixAutoUpdate = false;
      helper.matrix = mesh.matrix;
      return helper;
  };

  /**
   * Create an object to render a mesh as edges
   * @param  {Three.Object3D} model The mesh
   */
  function EdgesHelper(model) {
      THREE.Object3D.call( this );
      this.type = 'EdgesHelper';

      this.frontMaterial = new THREE.LineBasicMaterial({color: 0x000000});
      this.frontMaterial.depthFunc = THREE.LessEqualDepth;

      this.backMaterial = new THREE.LineBasicMaterial({color: 0x000000});
      this.backMaterial.transparent = true;
      this.backMaterial.depthFunc = THREE.GreaterDepth;
      this.backMaterial.opacity = 0.25;

      var _this = this;
      model.traverse(function(child) {
          if (child instanceof THREE.Mesh) {
              // create edge helper for front and back edges
              _this.add(
                  createEdges(child, _this.frontMaterial)
              );
              _this.add(
                  createEdges(child, _this.backMaterial)
              );
          }
      });
  }

  EdgesHelper.prototype = Object.create( THREE.Object3D.prototype );
  EdgesHelper.prototype.constructor = EdgesHelper;

  /**
   * Create the edges geometry for a model
   * @param {THREE.Object3D} newModel The model with edges
   * @param {EdgesHelper.EDGES_MODES} edgesMode Whether to draw edges enumeration
   * @return {EdgesHelper} The edges object
   */
  EdgesHelper.AddEdges = function(newModel, edgesMode) {
      if (edgesMode === EdgesHelper.EDGES_MODES.NONE) return null;

      newModel.edgesHelper = new EdgesHelper(newModel);

      newModel.edgesHelper.frontMaterial.visible = false;
      if (edgesMode === EdgesHelper.EDGES_MODES.FRONT || edgesMode === EdgesHelper.EDGES_MODES.BOTH) {
          newModel.edgesHelper.frontMaterial.visible = true;
      }

      newModel.edgesHelper.backMaterial.visible = false;
      if (edgesMode === EdgesHelper.EDGES_MODES.BACK || edgesMode === EdgesHelper.EDGES_MODES.BOTH) {
          newModel.edgesHelper.backMaterial.visible = true;
      }
      return newModel.edgesHelper;
  };

  function FluxCameras(width, height) {
      // Initialize default cameras and frustums.
      this._perspCamera = new THREE.PerspectiveCamera(30, width/height, 0.1, 100000);
      // Flux is Z up
      this._perspCamera.up = new THREE.Vector3( 0, 0, 1 );

      this._orthoCamera = new THREE.OrthographicCamera(100, -100, 100, -100, -1000, 1000);

      this.setView(FluxCameras.VIEWS.perspective);
      this.updateCamera(width, height);
  }

  /**
   * Enumeration of all possible views for the camera
   * @type {Object}
   */
  FluxCameras.VIEWS = {
      perspective:  0,
      top:    1,
      bottom: 2,
      front:  3,
      back:   4,
      right:  5,
      left:   6,
      END:   7
  };

  /**
   * Get the current camera object
   * @return {THREE.Camera} The current camera
   */
  FluxCameras.prototype.getCamera = function () {
      if (this._view === FluxCameras.VIEWS.perspective) {
          return this._perspCamera;
      }
      return this._orthoCamera;
  };

  FluxCameras.DEFAULT_POSITIONS = [
      [2500000, 1000000, 1300000], // perspective
      [0, 0, -100], // top
      [0, 0, 100], // bottom
      [0, 0, 0], // front
      [0, 0, 0], // back
      [0, 0, 0], // right
      [0, 0, 0] // left
  ];

  FluxCameras.DEFAULT_ROTATIONS = [
      [0, 0, 0], // perspective
      [0, 0, 0], // top
      [0, Math.PI, 0], // bottom
      [Math.PI/2, Math.PI/2, 0], // front
      [Math.PI/2, -Math.PI/2, 0], // back
      [Math.PI/2, 0, 0], // right
      [Math.PI/2, Math.PI, 0] // left
  ];

  FluxCameras.isValidView = function (view) {
      return view != null && view.constructor === Number && view > -1 && view < FluxCameras.VIEWS.END;
  };

  /**
   * Set the camera to the default coordinates for the given view.
   * @param {FluxCameras.VIEWS} view The new view
   */
  FluxCameras.prototype.setView = function (view) {
      if (!FluxCameras.isValidView(view)) return;
      this._view = view;

      var camera = this.getCamera();
      camera.position.set(FluxCameras.DEFAULT_POSITIONS[view][0],
                          FluxCameras.DEFAULT_POSITIONS[view][1],
                          FluxCameras.DEFAULT_POSITIONS[view][2]);

      camera.rotation.set(FluxCameras.DEFAULT_ROTATIONS[view][0],
                          FluxCameras.DEFAULT_ROTATIONS[view][1],
                          FluxCameras.DEFAULT_ROTATIONS[view][2]);
  };

  /**
   * Recompute derived state when the camera is changed.
   * @param  {Number} width  Width of the viewport (used to calculate aspect ratio)
   * @param  {Number} height Height of the viewport (used to calculate aspect ratio)
   */
  FluxCameras.prototype.updateCamera = function(width, height) {
      this._perspCamera.aspect = width / height;
      this._perspCamera.updateProjectionMatrix();

      var a = width / height;
      var h = this._orthoCamera.top - this._orthoCamera.bottom;
      this._orthoCamera.top = h / 2;
      this._orthoCamera.bottom = - h / 2;
      this._orthoCamera.right = h / 2 * a;
      this._orthoCamera.left = - h / 2 * a;
      this._orthoCamera.updateProjectionMatrix();
  };

  /**
   * Extract only relevant properties from a camera
   * @param  {THREE.Camera} camera The camera source
   * @return {Object}        The camera data
   */
  FluxCameras.cameraToJSON = function(camera) {
      var serializableCamera = {
          px: camera.position.x,
          py: camera.position.y,
          pz: camera.position.z,
          rx: camera.rotation.x,
          ry: camera.rotation.y,
          rz: camera.rotation.z,
          near: camera.near,
          far: camera.far
      };
      // Handle extra OrthographicCamera properties
      if (camera instanceof THREE.OrthographicCamera) {
          serializableCamera.top = camera.top;
          serializableCamera.right = camera.right;
          serializableCamera.bottom = camera.bottom;
          serializableCamera.left = camera.left;
          serializableCamera.type = 'orthographic';
      } else {
          serializableCamera.type = 'perspective';
      }
      return serializableCamera;
  };

  /**
   * Check if something is anumber
   * @param {Number} num The value
   * @returns {boolean} True for numbers
   * @private
   */
  function _isNumber(num) {
      return num != null && num.constructor === Number;
  }

  /**
   * Check whether a set of properties are valid numbers
   * @param {Array.<string>} schema The list of properties
   * @param {Object} data The object with properties
   * @returns {boolean} True if all numbers
   * @private
   */
  function _checkNumbers(schema, data) {
      // Make sure all the properties are valid and exist
      for (var i=0;i<schema.length;i++) {
          if (!_isNumber(data[schema[i]])) {
              return false;
          }
      }
      return true;
  }

  /**
   * Rehydrate camera instance from an object property tree.
   * @param  {THREE.camera} camera The camera to receive data
   * @param  {Object} data   The data to parse and apply
   */
  FluxCameras.cameraFromJSON = function(camera, data) {
      var schema = ['px', 'py', 'pz', 'rx', 'ry', 'rz', 'near', 'far'];
      if (!_checkNumbers(schema, data)) return;
      camera.position.x = data.px;
      camera.position.y = data.py;
      camera.position.z = data.pz;
      camera.rotation.x = data.rx;
      camera.rotation.y = data.ry;
      camera.rotation.z = data.rz;
      camera.near = data.near;
      camera.far = data.far;

      // Handle extra OrthographicCamera properties
      if (camera.constructor === THREE.OrthographicCamera) {
          schema = ['top', 'right', 'bottom', 'left'];
          if (!_checkNumbers(schema, data)) return;
          camera.top = data.top;
          camera.right = data.right;
          camera.bottom = data.bottom;
          camera.left = data.left;
      }
  };

  /**
   * Make serializable by pruning all references and building an object property tree
   * @return {Object} The simplified model
   */
  FluxCameras.prototype.toJSON = function() {
      var serializableCameras = {
          perspective: FluxCameras.cameraToJSON(this._perspCamera),
          orthographic: FluxCameras.cameraToJSON(this._orthoCamera),
          view: this._view
      };
      return serializableCameras;
  };

  /**
  * Update the corresponding cameras in this object from a serialized object.
  * @param  {Object} serializableCameras The camera data to use.
  */
  FluxCameras.prototype.fromJSON = function(serializableCameras) {
      this.setView(serializableCameras.view);
      FluxCameras.cameraFromJSON(this._perspCamera, serializableCameras.perspective);
      FluxCameras.cameraFromJSON(this._orthoCamera, serializableCameras.orthographic);
  };

  /**
   * Manages reference objects that render in the scene.
   * Geometry in this object has depth write disabled since it is meant to be
   * layered onto the scene as a second pass. This allows the text on the labels
   * to render correctly and prevents flickering from z-fighting between the grid
   * and the axis lines.
   */
  function FluxHelpers() {
      THREE.Object3D.call( this );
      this.type = 'FluxHelpers';

      this._grid = this._setupGrid(10, 10, 0x111111, 0xaaaaaa);
      this.setView(FluxCameras.VIEWS.perspective);
      this.add(this._grid);

      this._axis = this._setupAxis();
      this.add(this._axis);
  }

  FluxHelpers.prototype = Object.create( THREE.Object3D.prototype );
  FluxHelpers.prototype.constructor = FluxHelpers;

  /**
   * Create a grid of lines to give the user a sense of scale.
   * This is also referred to as a construction plane.
   * @param  {Number} size   Size of grid spacing
   * @param  {Number} width  Width of grid spacing
   * @param  {Number|String} color1 Color specification for primary grid color
   * @param  {Number|String} color2 Color specification for secondary grid color
   * @return {Object3D}        The grid object
   */
  FluxHelpers.prototype._setupGrid = function(size, width, color1, color2) {
      var grid = new THREE.GridHelper(size * width, size);
      grid.setColors(new THREE.Color(color1), new THREE.Color(color2));
      grid.material.transparent = true;
      grid.material.opacity = 0.5;
      grid.material.depthWrite = false;
      return grid;
  };

  /**
   * Setup the coordinate axis with xyz labels
   * @return {THREE.Object3D} The axis object
   */
  FluxHelpers.prototype._setupAxis = function() {
      var axis = new THREE.AxisHelper(10);
      axis.traverse(function(child) {
          if (child.material ) {
              child.material.depthWrite = false;
          }
      });
      return axis;
  };

  /**
   * Adjust the orientation of the grid to match the camera.
   * This keeps it aligned to screen space.
   * @param {FluxCameras.VIEWS} view Which view to orient to
   */
  FluxHelpers.prototype.setView = function(view) {
    switch (view) {
      case FluxCameras.VIEWS.perspective:
      case FluxCameras.VIEWS.top:
      case FluxCameras.VIEWS.bottom:
          // facing Z
          this._grid.rotation.set(Math.PI / 2, 0, 0);
          break;
      case FluxCameras.VIEWS.front:
      case FluxCameras.VIEWS.back:
          // facing X
          this._grid.rotation.set(0, 0, Math.PI / 2);
          break;
      case FluxCameras.VIEWS.right:
      case FluxCameras.VIEWS.left:
          // facing Y
          this._grid.rotation.set(0, 0, 0);
          break;
    }
  };

  /**
  * Class to represent a WebGL context which can render for multiple viewports
  */
  function FluxRenderContext () {
      /**
      * Pointer to the shared THREE.js renderer
      */
      try {
          this._hasWebGL = true;
          this.renderer = new THREE.WebGLRenderer({
              antialias: true,
              preserveDrawingBuffer: true,
              alpha: false
          });
          this.renderer.autoClear = false;
          this.renderer.autoClearStencil = false;
          this.renderer.gammaInput = false;
          this.renderer.gammaOutput = false;
          // Allow interactive canvas to overlap other canvas
          this.renderer.domElement.style.position = "absolute";
      } catch (err) {
          // Replace renderer with mock renderer for tests
          this.renderer = {
              render: function () {},
              setSize: function () {},
              clear: function () {},
              setViewport: function () {},
              setClearColor: function () {},
              getSize: function () { return {width: 100, height: 100}; },
              getPixelRatio: function () { return 1; },
              domElement: document.createElement('div')
          };
          this._hasWebGL = false;
      }
      /**
      * Pointer to the three-viewport-renderer instance that is currently being rendered.
      */
      this.currentHost = null;
  }

  /**
  * Maximum number of WebGL contexts allowed.
  * Should be less than or equal to 16, the limit on recent systems.
  */
  FluxRenderContext.MAX_CONTEXTS = 16;

  // List of all render contexts shared globally
  FluxRenderContext.contexts = [];

  // Counter so new viewports know which context to create or reuse.
  FluxRenderContext.nextContext = 0;

  /**
  * Each viewport uses the next available render context defined by this function
  * @return {[type]} [description]
  */
  FluxRenderContext.getNextContext = function () {
      var i = FluxRenderContext.nextContext;
      FluxRenderContext.nextContext += 1;
      FluxRenderContext.nextContext = FluxRenderContext.nextContext % FluxRenderContext.MAX_CONTEXTS;
      return FluxRenderContext.contexts[i];
  };

  FluxRenderContext.getNewContext = function () {
      var context;
      if (FluxRenderContext.contexts.length >= FluxRenderContext.MAX_CONTEXTS) {
          context = FluxRenderContext.getNextContext();
      } else {
          context = new FluxRenderContext();
          FluxRenderContext.contexts.push(context);
      }
      return context;
  };

  FluxRenderContext.prototype.hasWebGL = function() {
      return this._hasWebGL;
  };

  // Multipass Variables (private, singleton)
  // Material that writes depth to pixels
  var DEPTH_MATERIAL = new THREE.ShaderMaterial( {
      uniforms: THREE.UniformsUtils.clone( THREE.ShaderLib.depthRGBA.uniforms ),
      fragmentShader: THREE.ShaderLib.depthRGBA.fragmentShader,
      vertexShader: THREE.ShaderLib.depthRGBA.vertexShader,
      blending: THREE.NoBlending
  } );

  // Material that writes normal to pixels
  var NORMAL_MATERIAL = new THREE.MeshNormalMaterial();

  // Used for debugging issues with _setHost
  FluxRenderer.nextId = 0;

  /**
   * Class wrapping the renderer with custom passes and context swapping.
   *
   * Multipass rendering uses GPU shaders to accomplish ambient obscurance
   * and stencil buffer shadows.
   *
   * Context swapping lets a single OpenGL context and canvas be used for multiple renderers.
   *
   * @param {Element} domParent The div container for the canvas
   * @param {Number} width     The width of the canvas
   * @param {Number} height    The height of the canvas
   */
  function FluxRenderer(domParent, width, height) {
      this.id = FluxRenderer.nextId++;

      // Dom element that wraps the canvas
      this._domParent = domParent;

      // Determines if multipass rendering (THREE.EffectsComposer) is used
      this._multipass = false;

      // TODO: Convert this to a list of passes rather than individual bools
      // Determines if ambient occlusion is used (requires multipass to be true)
      this._showOcclusion = true;

      // Determines if stencilbuffer shadows are used (requires multipass)
      this._showShadows = false;

      // Current three.js geometry to render
      this._model = null;

      // The object containing the lights in the scene
      this._lights = null;

      // The context that contains the renderer and corresponds to a canvas
      // Create renderer for the first time.
      this._context = FluxRenderContext.getNewContext();

      // EffectComposer object, used in multipass rendering
      this._composer = new THREE.EffectComposer(this._context.renderer);

      this._width = width;
      this._height = height;

      this._createCacheCanvas(width, height);

      this.setClearColor(0xC5CDCC);

      this._cameras = new FluxCameras(width, height);
      this._helpers = new FluxHelpers();
      this._helpersScene = new THREE.Scene();
      this._helpersScene.add(this._helpers);

      // Camera to be rendered with.Any instance of `THREE.Camera` can be set here.
      this._initControls();

      // Scene containing geometry to be rendered in this viewport THREE.Scene
      this._scene = new THREE.Scene();
      // this._scene.add(this._helpers);

      // Fog object for this viewport constructed from color and density
      this._fog = new THREE.FogExp2( this._clearColor, 0.0 );
      this._scene.fog = this._fog;

      // Scene containing edges geometry for hidden line rendering
      this._edgesScene = new THREE.Scene();
      this._edgesMode = EdgesHelper.EDGES_MODES.NONE;

      // variables for stencilbuffer shadows
      // Scene holding shadow volumes = THREE.Scene
      this._shadowScene = new THREE.Scene();
      // Color of shadows (multiplied with ground) @type {THREE.Color}
      this._shadowColor = new THREE.Color(0.08, 0.0, 0.2);
      // Alpha opacity of shadow, where 1.0 is completely opaque
      this._shadowAlpha = 0.35;
      this._shadowBuilder = new THREE.ShadowBuilder(this._shadowLight);

      this._addPasses();
  }

  FluxRenderer.prototype = Object.create( THREE.EventDispatcher.prototype );
  FluxRenderer.prototype.constructor = FluxRenderer;

  /**
   * Name of the event fired when the camera changes
   * @type {String}
   */
  FluxRenderer.CHANGE_EVENT = 'change';

  /**
   * Set the lights used to illuminate the scene.
   * @param {THREE.Object3D} lights Object with lights as children
   */
  FluxRenderer.prototype.setLights = function(lights) {
      if (this._lights) {
          this._scene.remove(this._lights);
      }
      this._lights = lights;
      this._scene.add(this._lights);
  };

  /**
   * Remove the geometry objects from the THREE registry so they can be garbage collected
   * @param  {THREE.Object3D} obj The object being removed
   */
  function _removeGeometries(obj) {
      if (obj.geometry) {
          obj.geometry.dispose();
      }
  }

  /**
   * Remove an object from the scene and clean up memory
   * @param  {THREE.Scene} scene Scene containing the model
   * @param  {THREE.Object3D} model The geometry to remove
   */
  function _deleteFromScene(scene, model) {
      if (!model || !scene) return;
      scene.remove(model);
      model.traverse(_removeGeometries);
  }

  /**
   * Set the object to render
   * Replaces old render contents
   * @param {THREE.Object3D} model What to render
   */
  FluxRenderer.prototype.setModel = function(model) {
      if (this._model) {
          _deleteFromScene(this._scene, this._model);
          _deleteFromScene(this._edgesScene, this._model.edgesHelper);
      }
      this._model = model;
      if (this._model) {
          this._scene.add(this._model);
          if (EdgesHelper.AddEdges(this._model, this._edgesMode)) {
              this._edgesScene.add(this._model.edgesHelper);
          }
      }
  };

  /**
   * Set the edges rendering mode for hidden line rendering
   * @param  {EdgesHelper.EDGES_MODES} mode Whether to render front, back, both or none
   */
  FluxRenderer.prototype.setEdgesMode = function(mode) {
      this._edgesMode = mode;
  };

  /**
   * When the camera controls change make sure to update the camera
   */
  FluxRenderer.prototype._initControls = function() {
      if (this._controls) this._controls.enabled = false;
      //TODO(Kyle): rewrite EditorControls to allow camera to be changed
      this._controls = new THREE.EditorControls(this._cameras.getCamera(), this._domParent);
      var _this = this;
      this._controls.addEventListener(FluxRenderer.CHANGE_EVENT, function(event) {
          _this._cameras.updateCamera(_this._width, _this._height);
          _this.dispatchEvent( event );
      });
  };

  /**
   * Restore the camera to a default location
   */
  FluxRenderer.prototype.homeCamera = function() {
      this._controls.focus(this._helpers, true);
  };

  /**
  * Focus the controls' current camera on an object.
  * This function will focus on the union of object and all of it's visible children.
  * @param  {THREE.Object3D} object The scene object to focus on.
  */
  FluxRenderer.prototype.focus = function() {
      if (!this._model) return;
      this._controls.focus(this._model, true);
      // Changing the controls here triggers a render
  };

  /**
   * Set the clear color (background) for WebGL canvas
   * @param {String|Number} color Hexadecimal or a CSS-style string
   */
  FluxRenderer.prototype.setClearColor = function(color) {
      this._clearColor = new THREE.Color(color);
  };

  /**
   * Set up a new canvas used for storing a cached image.
   * The cache image is populated when this renderer loses it's context.
   * @param {Number} width The width of the canvas
   * @param {Number} height The height of the canvas
   */
  FluxRenderer.prototype._createCacheCanvas = function(width, height) {
      if (this._cacheCanvas) return;
      // The canvas used to store a cached image of the previous render when all the WebGL contexts are in use with other renderers
      this._cacheCanvas = document.createElement('canvas');
      this._cacheCanvas.width = width;
      this._cacheCanvas.height = height;
      this._cacheCanvas.style.position = 'absolute';
      this._cacheCanvas.style['user-select'] = 'none';
      this._cacheCanvas.style['-webkit-user-select'] = 'none';
      this._domParent.appendChild(this._cacheCanvas);

      // Canvas2D used to store framebuffer pixels after renderer.domElement migration.
      this.ctx = this._cacheCanvas.getContext('2d');
  };

  /**
   * Destructor to prevent future rendering after being unloaded
   */
  FluxRenderer.prototype.detach = function() {
      if (this._context && this._context.currentHost === this) {
          this._context.currentHost = null;
      }
  };

  /**
   * Change the camera view
   * @param {String} view The new view mode
   */
  FluxRenderer.prototype.setView = function(view) {
      this._cameras.setView(view);
      this._cameras.updateCamera(this._width, this._height);
      this._initControls();
      this._helpers.setView(view);

      if (!this._renderPasses) return;
      this._renderPasses.renderPass.camera = this._cameras.getCamera();
      this._renderPasses.edgesPass.camera = this._cameras.getCamera();
      this._renderPasses.helperPass.camera = this._cameras.getCamera();
      this._renderPasses.stencilPass.camera = this._cameras.getCamera();
  };

  /**
  * Creates depth, normal materials and depth, normal render targets.
  */
  FluxRenderer.prototype._addRenderTargets = function() {
      // depth render target (uses THREE.js depth shader)
      this._depthTarget = new THREE.WebGLRenderTarget(
          window.innerWidth, //TODO(kyle) Why does this use window!?
          window.innerHeight,
          {
              minFilter: THREE.NearestFilter,
              magFilter: THREE.NearestFilter,
              format: THREE.RGBAFormat
          }
      );

      // normal render target
      this._normalTarget = this._depthTarget.clone();
  };

  /**
  * Adds enabled passes to the EffectComposer
  *
  * Always begins with a render pass
  * Always ends with an antialiasing (FXAA) pass
  *
  * May include the following: Ambient occlusion, Shadows
  */
  FluxRenderer.prototype._addPasses = function() {
      // _renderPasses dictionary for holding passes that need to be accessed or modified
      this._renderPasses = {};
      this._addRenderTargets();

      // diffuse render pass
      var renderPass = new THREE.RenderPass(this._scene, this._cameras.getCamera());
      this._composer.addPass(renderPass);
      this._renderPasses.renderPass = renderPass;

      var edgesPass = new THREE.RenderPass(this._edgesScene, this._cameras.getCamera());
      edgesPass.clear = false;
      this._composer.addPass(edgesPass);
      edgesPass.polygonOffset = true;
      edgesPass.enabled = !!this._edgesScene;
      this._renderPasses.edgesPass = edgesPass;

      // helper render pass
      var helperPass = new THREE.RenderPass(this._helpersScene, this._cameras.getCamera());
      helperPass.clear = false;
      this._composer.addPass(helperPass);
      this._renderPasses.helperPass = helperPass;
      helperPass.enabled = true;

      // ambient occlusion pass
      var aoPass = new THREE.ShaderPass(THREE.SAOShader);
      // set uniform vars for ao pass
      aoPass.uniforms.tDepth.value = this._depthTarget;
      aoPass.uniforms.tNorm.value = this._normalTarget;
      aoPass.uniforms.projInv.value = new THREE.Matrix4();//TODO.getInverse(this._cameras.getCamera().projectionMatrix);
      aoPass.uniforms.onlyAO.value = false; // set to true to view only ambient occlusion
      aoPass.clear = true;
      aoPass.needsSwap = true;
      this._renderPasses.aoPass = aoPass;
      this._composer.addPass(aoPass);

      // stencil buffer shadow passes
      var copyPass = new THREE.ShaderPass( THREE.CopyShader );
      copyPass.needsSwap = false;
      this._composer.addPass( copyPass ); // copy AO to write buffer
      this._renderPasses.copyPass = copyPass;

      var stencilPass = new THREE.StencilPass( this._shadowScene, this._cameras.getCamera());
      this._composer.addPass( stencilPass ); // render shadow volumes to stencilbuffer
      this._renderPasses.stencilPass = stencilPass;

      var darkenPass = new THREE.ShaderPass( THREE.DarkenShader );
      darkenPass.uniforms.alpha.value = this._shadowAlpha;
      darkenPass.uniforms.color.value = new THREE.Vector3(this._shadowColor.r, this._shadowColor.g, this._shadowColor.b);
      darkenPass.needsSwap = false;
      this._composer.addPass( darkenPass ); // darken stencil areas
      this._renderPasses.darkenPass = darkenPass;

      var clearPass = new THREE.ClearStencilPass();
      clearPass.needsSwap = true;
      this._composer.addPass( clearPass ); // clear stencil
      this._renderPasses.clearPass = clearPass;

      // fast approximate antialiasing pass
      var FXAAPass = new THREE.ShaderPass(THREE.FXAAShader);
      FXAAPass.renderToScreen = true;
      this._renderPasses.FXAAPass = FXAAPass;
      this._composer.addPass(FXAAPass);
  };

  /**
  * For multipass rendering, update which render passes are enabled.
  * Based on user preferences some passes may be turned on or off.
  * Also passes may be disabled if the corresponding scene is empty.
  */
  FluxRenderer.prototype._updatePasses = function () {
      if (this._showOcclusion) {
          // populate depth target
          this._scene.overrideMaterial = DEPTH_MATERIAL;
          this._context.renderer.clearTarget( this._depthTarget, true, true );
          this._context.renderer.render( this._scene, this._cameras.getCamera(), this._depthTarget );

          // populate normal target (set clearColor to (0,0,0) since
          // empty pixels do not have normals)
          this._context.renderer.setClearColor( 0x000000 );
          this._scene.overrideMaterial = NORMAL_MATERIAL;
          this._context.renderer.clearTarget( this._normalTarget, true, true );
          this._context.renderer.render( this._scene, this._cameras.getCamera(), this._normalTarget );
          this._scene.overrideMaterial = null;
          this._context.renderer.setClearColor( this._clearColor );

          // update ambient occlusion shader uniforms
          var projInv = new THREE.Matrix4();
          projInv.getInverse(this._cameras.getCamera().projectionMatrix);
          this._renderPasses.aoPass.uniforms.projInv.value = projInv;
          this._renderPasses.aoPass.uniforms.size.value.set(this._width, this._height);
          this._renderPasses.aoPass.uniforms.onlyDiffuse.value = false;
      } else {
          this._renderPasses.aoPass.uniforms.onlyDiffuse.value = true;
      }

      if (this._showShadows) {
          this._composer.renderTarget1.stencilBuffer = true;
          this._composer.renderTarget2.stencilBuffer = true;
          this._renderPasses.copyPass.enabled = true;
          this._renderPasses.stencilPass.enabled = true;
          this._renderPasses.darkenPass.enabled = true;
          this._renderPasses.clearPass.enabled = true;
      } else {
          this._composer.renderTarget1.stencilBuffer = false;
          this._composer.renderTarget2.stencilBuffer = false;
          this._renderPasses.copyPass.enabled = false;
          this._renderPasses.stencilPass.enabled = false;
          this._renderPasses.darkenPass.enabled = false;
          this._renderPasses.clearPass.enabled = false;
      }

      // set antialiasing 'resolution' uniform to current screen resolution
      this._renderPasses.FXAAPass.uniforms.resolution.value.set(1.0/this._width, 1.0/this._height);
  };

  /**
  * Render the scene with its geometry.
  */
  FluxRenderer.prototype.doRender = function () {
      this._setHost();
      this._update();
      this._context.renderer.clear();
      if (this._multipass) {
          this._updatePasses();
          // render scene
          this._composer.render();
      } else {
          this._context.renderer.render(this._scene, this._cameras.getCamera());
          this._context.renderer.render(this._edgesScene, this._cameras.getCamera());
          this._context.renderer.render(this._helpersScene, this._cameras.getCamera());
      }
  };

  /**
   * Say whether there are any objects to render in the model
   * @return {Boolean} True if there are objects to render
   */
  FluxRenderer.prototype.anyValidPrims = function() {
      return this._model ? this._model.children.length > 0 : false;
  };

  /**
  * Set the light that is casting shadows.
  * @param {THREE.Light} light      light object, position is saved
  */
  FluxRenderer.prototype.setShadowLight = function(light) {
      // Enable shadows on this renderer
      this._multipass = true;
      this._showShadows = true;

      this._shadowLight = light.position;
      this._shadowBuilder.updateLight(light.position);
  };

  /**
   * Add the shadows for everything in the current model
   */
  FluxRenderer.prototype.addShadows = function() {
      var _this = this;
      this._model.traverse(function (obj) {
          if (obj && obj.geometry) {
              _this.addShadow(obj);
          }
      });
  };
  /**
  * Add a shadow to the scene.
  * @param {THREE.Mesh} mesh        The mesh of the object casting a shadow
  */
  FluxRenderer.prototype.addShadow = function(mesh) {
      var shadow = this._shadowBuilder.getShadowVolume(mesh);
      this._shadowScene.add(shadow);
  };

  /**
  * Remove a shadow from the scene.
  * @param  {THREE.Mesh} mesh       The mesh of the shadow to remove
  */
  FluxRenderer.prototype.removeShadow = function(mesh) {
      var shadow = this._shadowBuilder.getShadowVolume(mesh);
      this._shadowScene.remove(shadow);
  };

  /**
   * Copy the image that is in the render canvas to this renderer's cache canvas.
   * This allows the rendered image to persist even when the renderer is not available.
   * This happens when the user moves the mouse away from this viewport to another one.
   */
  FluxRenderer.prototype._cacheImageToCanvas = function () {
      this.doRender();
      this.ctx.drawImage(this._context.renderer.domElement, 0, 0, this._cacheCanvas.width, this._cacheCanvas.height);
  };

  /**
   * Get the canvas for use in QA scripts
   * @return {Canvas} WebGL canvas dom element
   */
  FluxRenderer.prototype.getGlCanvas = function() {
      return this._context.renderer.domElement;
  };

  /**
  * Migrate renderer.domElement to this host if necessary
  * and copy framebuffer into Canvas2D element of the previous host.
  */
  FluxRenderer.prototype._setHost = function() {
      if (this === this._context.currentHost) return;
      if (this._context.currentHost) {
          // Copy the image from domElement (THREE's interactive canvas)
          // to the 2D context for this element's canvas
          // This image will remain up until the user interacts with the old viewport again
          this._context.currentHost._cacheImageToCanvas();
      }
      this._context.currentHost = this;
      this.setSize(this._width, this._height);
      // Move the THREE.WebGLRenderer's canvas under the new host
      this._domParent.appendChild(this._context.renderer.domElement);
  };

  /**
   * Set the WebGLRenderer parameters to match this renderer.
   */
  FluxRenderer.prototype._update = function() {
      this._context.renderer.autoClearColor = this._multipass;
      this._context.renderer.autoClearDepth = this._multipass;
      this._context.renderer.setSize(this._width, this._height);
      this._context.renderer.setClearColor(this._clearColor);
  };

  /**
   * Set the size of things that are per viewport.
   * @param {Number} width  The canvas width in pixels
   * @param {Number} height The canvas height in pixels
   */
  FluxRenderer.prototype.setSize = function(width, height) {
      if (width <= 0 || height <= 0 || (width === this._width && height === this.height)) return;
      this._width = width;
      this._height = height;

      this._cameras.updateCamera(this._width, this._height);

      this._composer.setSize(this._width, this._height);

      this._cacheCanvas.height = height;
      this._cacheCanvas.width = width;
  };

  /**
   * Make serializable by pruning all references and building an object property tree
   * @return {Object} Data to stringify
   */
  FluxRenderer.prototype.toJSON = function() {
      var serializableState = {
          cameras: this._cameras.toJSON(), // camera pos and view
          controls: this._controls.toJSON() // center point
      };
      return serializableState;
  };

  /**
   * Take a data object and use it to update the internal state
   * @param  {Object} state The properties to set
   */
  FluxRenderer.prototype.fromJSON = function(state) {
      if (!state) return;
      if (state.cameras != null) {
          this.setView(state.cameras.view);
          this._cameras.fromJSON(state.cameras);
      }
      if (state.controls) {
          this._controls.fromJSON(state.controls);
      }
  };

  var index_common = __commonjs(function (module, exports, global) {
  'use strict';

  var __commonjs_global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : __commonjs_global;
  /**
   * The VectorManager class. It is an ObjectPool
   * for three js vectors. When the vectors are done
   * being used, they should be cleared
   *
   * @class VectorManager
   */
  function VectorManager () {
      this._vectorData = [];
      this._vectorCount = 0;
  }



  /**
   * Allocate a new vector with new or existing object.
   * The returned vector may have junk in its values
   *
   * @method alloc
   *
   * @return { THREE.Vector3 } The vector
   */
  VectorManager.prototype.alloc = function alloc () {
      var result;

      if ( this._vectorCount < this._vectorData.length ) result = this._vectorData[ this._vectorCount ];
      else {
          result = new THREE.Vector3();
          this._vectorData.push( result );
      }

      this._vectorCount += 1;

      return result;
  };



  /**
   * Deallocate all vectors and begin reallocating from the pool
   *
   * @method clear
   * @return { VectorManager } this
   */
  VectorManager.prototype.clear = function clear () {
      this._vectorCount = 0;
      return this;
  };



  /**
   * Allocate a new vector with the same values as an existing one
   *
   * @method clone
   * @return { THREE.Vector3 } The newly allocated vector
   *
   * @param { THREE.Vector3 } v The vector to copy
   */
  VectorManager.prototype.clone = function clone ( v ) {
      return this.alloc().copy( v );
  };


  /**
   * Create and allocate a vector from an array
   *
   * @method convert
   * @return { THREE.Vector3 } The newly allocated vector
   *
   * @param  {[Number]} arr Array of 3 numeric values
   */
  VectorManager.prototype.convert = function clone ( arr ) {
      return this.alloc().set( arr[0], arr[1], arr[2] );
  };

  var HALF_PI = Math.PI * 0.5;
  var TOLERANCE = 0.000001;
  var DEFAULT_ROTATION = new THREE.Vector3( HALF_PI, HALF_PI, 0 );
  var PLANE_DEFAULTS = {
          WIDTH: 10000,
          HEIGHT: 10000,
          WIDTH_SEGMENTS: 100,
          HEIGHT_SEGMENTS: 100
      };
  var CIRCLE_RES = 32;
  var DEG_2_RAD = Math.PI / 180;
  var MATERIAL_TYPES = {
      PHONG: 0,
      POINT: 1,
      LINE: 2
  };
  //----NURBS
  var NURBS_CURVE_QUALITY = 2.5;
  var NURBS_SURFACE_QUALITY = 2.5;
  // A NURBS surface with angles between the faces of its control hull below
  // this threshold will be considered flat
  var degreesFlatLimit = 1.0;
  var NURBS_FLAT_LIMIT = degreesFlatLimit/180.0;

  // These entities are not official Flux Entities, but can be rendered
  var NON_STANDARD_ENTITIES = 'stl obj text';

  // For a face compare the angle between it's normals and those of
  // it's neighbors. If all the angles are smaller than the limit,
  // the face will be rendered smooth.
  // Range is from 0 (more faceted) to 180 (more smooth)
  var degreesSmoothLimit = 45;
  var NORMALS_SMOOTH_LIMIT = Math.cos(degreesSmoothLimit * DEG_2_RAD);

  var DEFAULT_POINT_COLOR = [0.5,0.5,0.8];
  var DEFAULT_LINE_COLOR =  [0.5,0.5,0.8];
  var DEFAULT_PHONG_COLOR = [  1,  1,  1];

  var DEFAULT_MATERIAL_PROPERTIES = {
      // color is per point
      phong: {
          opacity: 1.0,
          //roughness: 1.0,  TODO this has to be translated to specular as in flux-materialUtil.html
          wireframe: false,
          side: THREE.DoubleSide
      },
      point: {
          size: 5.0,
          sizeAttenuation: true
      },
      line: {
          linewidth: 1.0
      }
  };

  var DEFAULT_UNITS = 'meters';

  function FluxGeometryError(message) {
      this.name = 'FluxGeometryError';
      this.message = message || 'Invalid or degenerate geometry specified.';
      this.stack = (new Error()).stack;
  }
  FluxGeometryError.prototype = Object.create(Error.prototype);
  FluxGeometryError.prototype.constructor = FluxGeometryError;

  /*
   * helpers
   */

  var vec = new VectorManager(); // an ObjectPool for managing Three.js vectors

  /**
   * Creates a linear mesh from parasolid data and a material
   *
   * @function line
   *
   * @return { THREE.Mesh } The linear mesh
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the mesh
   */
  function line ( data, material ) {
      var geometry = new THREE.BufferGeometry(),
          vertices = new Float32Array( data.start.concat( data.end ) );

      geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

      return new THREE.Line( geometry, material );
  }

  /**
   * Creates a mesh as a set of lines from parasolid data and a material
   *
   * @function polyline
   *
   * @return { THREE.Mesh } The mesh
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the mesh

   */
  function polyline ( data, material ) {

      var geometry = new THREE.Geometry(),
          point;

      for ( var i = 0, len = data.points.length ; i < len ; i++ ) {
          point = data.points[ i ];
          geometry.vertices.push(
              new THREE.Vector3( point[ 0 ], point[ 1 ], point[ 2 ] )
          );
      }

      return new THREE.Line( geometry, material );
  }

  /**
   * Creates a circular line from parasolid data and a material
   *
   * @function circle
   *
   * @return { THREE.Line } The circular line
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the mesh
   */
  function circle ( data, material ) {
      var r = data.radius;
      var numPoints = CIRCLE_RES;
      var vertices = new Float32Array( ( numPoints  ) * 3 );
      var i, x, y, t, dt;
      t = 0;
      dt = 2 * Math.PI / (numPoints-1);
      for (i = 0; i < vertices.length; i += 3, t += dt) {
          x = r * Math.cos(t);
          y = r * Math.sin(t);
          vertices[i  ] = x;
          vertices[i+1] = y;
          vertices[i+2] = 0;
      }

      // Create geometry and material
      var geometry = new THREE.BufferGeometry();
      geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

      return new THREE.Line(geometry, material);
  }

  /**
   * Creates a curve mesh from parasolid data and a material
   *
   * @function curve
   *
   * @return { THREE.Mesh } The curve mesh
   * @throws FluxGeometryError if nurbs are invalid
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the mesh
   */
  function curve ( data, material ) {
      if ( !data.knots || !data.controlPoints )
          throw new FluxGeometryError( 'Curve is missing knots or control points.');

      var nurbsControlPoints = _createControlPoints( data ),
          geometry = new THREE.Geometry();

      if ( data.knots.length !== nurbsControlPoints.length + data.degree + 1 )
          throw new FluxGeometryError( 'Number of uKnots in a NURBS curve should equal degree + N + 1, where N is the number ' +
                           'of control points' );

      var numPoints = Math.max(Math.floor(nurbsControlPoints.length * data.degree * NURBS_CURVE_QUALITY),
          nurbsControlPoints.length-1);
      geometry.vertices = data.degree > 1 ?
          new THREE.NURBSCurve( data.degree, data.knots, nurbsControlPoints ).getPoints( numPoints ) :
          nurbsControlPoints;

      return new THREE.Line( geometry, material );
  }

  /**
   * Helper to create a set of control points from parasolid data
   *
   * @function _createControlPoints
   * @private
   *
   * @return { Array<Three.Vector4> } The array of vector 4s
   *
   * @param { Object }           data     Parasolid data
   */
  function _createControlPoints ( data ) {
      var controlPoints = data.controlPoints,
          result = [],
          i = 0,
          weights = data.weights,
          len = controlPoints.length,
          currentControlPoint;

      for ( ; i < len ; i++ ) {
          currentControlPoint = controlPoints[ i ];
          result.push(
              new THREE.Vector4(
                  currentControlPoint[ 0 ],
                  currentControlPoint[ 1 ],
                  currentControlPoint[ 2 ],
                  weights ? weights[ i ] : 1
              )
          );
      }

      return result;
  }

  /**
   * Creates a arc mesh from parasolid data and a material
   *
   * @function arc
   *
   * @return { THREE.Mesh } The arc mesh
   *
   * @throws FluxGeometryError if the data doesn't have a start, middle, or end property
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the mesh

   */
  function arc ( data, material ) {
      var geometry,
          vertices;

      if (!data.start || !data.middle || !data.end) {
          throw new FluxGeometryError('Can not create arc due to incomplete definition.');
      }

      // Initialize vectors
      var a = vec.alloc().set(data.start[0], data.start[1], data.start[2]);
      var b = vec.alloc().set(data.middle[0], data.middle[1], data.middle[2]);
      var c = vec.alloc().set(data.end[0], data.end[1], data.end[2]);

      // Compute line segments
      var ab = vec.clone(b).sub(a);
      var bc = vec.clone(c).sub(b);

      // check for degenerate inputs
      if (ab.length() < TOLERANCE || bc.length() < TOLERANCE ||
              1.0 - Math.abs(vec.clone(ab).normalize().dot(vec.clone(bc).normalize())) < TOLERANCE) {
          // when the arc is degenerate, just draw line segments
          vertices = new Float32Array( 9 );
          _setVecInArray(vertices, 0, a);
          _setVecInArray(vertices, 3, b);
          _setVecInArray(vertices, 6, c);
      }
      else { // arc is ok
          var abMid =  vec.alloc();
          _computeMidpoint(a, b, abMid);
          var bcMid =  vec.alloc();
          _computeMidpoint(b, c, bcMid);

          // compute perpendicular bisectors
          var up = vec.alloc().crossVectors(ab,bc).normalize();
          var abPerp = vec.alloc().crossVectors(ab,up).normalize();
          var bcPerp = vec.alloc().crossVectors(up,bc).normalize();

          // calculate intersection
          var center =  vec.alloc();
          _intersectLines(abMid, bcMid, abPerp, bcPerp, center);

          // determine line segment points
          vertices = _tessellateArc(a, c, ab, bc, center, up);
      }

      if (vertices.length <= 0) {
          throw new FluxGeometryError( 'Arc has no vertices');
      }

      // Create geometry and material
      geometry = new THREE.BufferGeometry();
      geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

      vec.clear();

      return new THREE.Line(geometry, material);
  }

  /**
   * Computes the midpoint as the center of segment ab
   *
   * @function _computeMidpoint
   * @private
   *
   * @param { THREE.Vector3 } a        The first point
   * @param { THREE.Vector3 } b        The second point
   * @param { THREE.Vector3 } midPoint The midpoint
   */
  function _computeMidpoint ( a, b, midPoint ) {
      midPoint.copy( b );
      midPoint.sub( a );
      midPoint.multiplyScalar( 0.5 );
      midPoint.add( a );
  }

  /**
   * Caclulate an appropriate number of points along a given arc
   *
   * @function _tessellateArc
   * @private
   *
   * @return { Float32Array } List of coordinates
   *
   * @param { THREE.Vector3 } a First point along the arc
   * @param { THREE.Vector3 } c Third point on arc
   * @param { THREE.Vector3 } ab Segement from a to b
   * @param { THREE.Vector3 } bc Segement from b to c
   * @param { THREE.Vector3 } center Center of arc
   * @param { THREE.Vector3 } up Normal to plane containing the arc
   */
  function _tessellateArc ( a, c, ab, bc, center, up ) {
      // interpolate points on the curve and populate geometry
      var relA = vec.clone( a ).sub( center ),
          relC = vec.clone( c ).sub( center ),
          angle = relA.angleTo( relC ),
          angleABC = Math.PI - ab.angleTo( bc );

      if ( angleABC < Math.PI * 0.5 ) {
          angle = 2 * Math.PI - angle;
      }

      var numSections = Math.ceil( angle * ( 42 / ( 2 * Math.PI ) ) ),
          dTheta = angle / numSections,
          vertices = new Float32Array( ( numSections + 1  ) * 3 );

      for ( var i = 0 ; i <= numSections ; i++ ) {
          vertices[ i * 3 ] = relA.x + center.x;
          vertices[ i * 3 + 1 ] = relA.y + center.y;
          vertices[ i * 3 + 2 ] = relA.z + center.z;
          relA.applyAxisAngle( up, dTheta );
      }

      return vertices;
  }

  /**
   * Compute the intersection of two lines in 3D.
   * @Precondition The lines are not parallel, there is exactly 1 intersection.
   *
   * @function _intersectLines
   * @private
   *
   * @param  {THREE.Vector3} p0 Point on the first line
   * @param  {THREE.Vector3} p1 Point on the second line
   * @param  {THREE.Vector3} d0 Direciton of first line
   * @param  {THREE.Vector3} d1 Direction of second line
   * @param {THREE.Vector3} intersect Return parameter for intersection point
   */
  function _intersectLines (p0, p1, d0, d1, intersect) {
      // Mathematically this is solved by equating the parametric equations
      // of the two lines and solving for t at the time of their intersection
      // Equivalent equations can be made by substituting each component x, y and z
      // so we try each permutation in case one of them runs into divide by zero.
      // Each pair of elements in this array is one case to calculate.
      var cases = ['x', 'y', 'x', 'z', 'y', 'x',
          'y', 'z', 'z', 'x', 'z', 'y' ];
      var t0;
      var i = 0;
      var x;
      var y;
      while(!isFinite(t0) && i < cases.length) {
          x = cases[i];
          y = cases[i+1];
          // compute t from the formula
          t0 = (p0[x] - p1[x] - (p0[y] * d1[x]) / d1[y] + (p1[y] * d1[x]) / d1[y] ) /
              ( (d0[y] * d1[x]) / d1[y] - d0[x]);
              i += 2;
      }
      // calculate the intersection as a linear combination of the point and direction
      intersect.copy(d0).multiplyScalar(t0).add(p0);
  }

  /**
   * Add each element of a vector to an array
   * @param  {Array} arr Array of coordinates
   * @param  {Number} offset Index to start in array
   * @param  {THREE.Vector3} vec Vector of 3 values
   */
  function _setVecInArray (arr, offset, vec) {
      arr[offset] = vec.x;
      arr[offset+1] = vec.y;
      arr[offset+2] = vec.z;
  }

  /**
   * Creates a rectangular line from parasolid data and a material
   *
   * @function rectangle
   *
   * @return { THREE.Line } The rectangular line
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the mesh
   */
  function rectangle ( data, material ) {
      var dx = data.dimensions[0] * 0.5;
      var dy = data.dimensions[1] * 0.5;

      var numPoints = 5;
      var vertices = new Float32Array( ( numPoints  ) * 3 );
      vertices[0] = -dx;
      vertices[1] = dy;
      vertices[2] = 0;

      vertices[3] = dx;
      vertices[4] = dy;
      vertices[5] = 0;

      vertices[6] = dx;
      vertices[7] = -dy;
      vertices[8] = 0;

      vertices[9] = -dx;
      vertices[10] = -dy;
      vertices[11] = 0;

      vertices[12] = -dx;
      vertices[13] = dy;
      vertices[14] = 0;

      // Create geometry and material
      var geometry = new THREE.BufferGeometry();
      geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );

      return new THREE.Line(geometry, material);
  }

  /**
   * Creates a elliptic curve
   *
   * @function ellipse
   *
   * @return { THREE.Line } The shape
   *
   * @param { Object }           data     Parasolid entity data
   * @param { THREE.Material } material The material to give the mesh
   */
  function ellipse ( data, material ) {
      // Origin and axis are ignored here and applied later in cleanupMesh
      var curve = new THREE.EllipseCurve(
          0,  0,                              // center x, center y
          data.majorRadius, data.minorRadius, // xRadius, yRadius
          0,  2 * Math.PI,                    // aStartAngle, aEndAngle
          false,                              // aClockwise
          0                                   // aRotation
      );

      var path = new THREE.Path( curve.getPoints( CIRCLE_RES ) );
      var geometry = path.createPointsGeometry( CIRCLE_RES );
      return new THREE.Line( geometry, material );
  }

  /**
   * Creates a vector THREE.Mesh from parasolid data and a material
   *
   * @function vector
   *
   * @return { THREE.Mesh } The vector THREE.Mesh
   *
   * @throws FluxGeometryError if vector has zero length
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function vector ( data, material ) {
      var dir = new THREE.Vector3( data.coords[ 0 ], data.coords[ 1 ], data.coords[ 2 ] );

      if ( dir.length() > 0 ) dir.normalize();
      else throw new FluxGeometryError( 'Vector primitive has length zero' );

      // The half width of the arrow
      var d = 0.03;
      // The length of the arrow
      var l = 1;
      // This is the coordinate of the base of the head
      var c = 0.85;
      var verticesArr = [
          // Main axis
          0,0,0,
          0,0,l,
          // Cap the head
          d,d,c,
          d,-d,c,
          0,0,1,
          -d,d,c,
          -d,-d,c,
          0,0,l,
          d,-d,c,
          -d,-d,c,
          0,0,l,
          d,d,c,
          -d,d,c
      ];

      var vertices = new Float32Array( verticesArr );
      // Create geometry and material
      var geometry = new THREE.BufferGeometry();
      geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
      var mesh = new THREE.Line(geometry, material);
      mesh.lookAt(dir);
      return mesh;
  }

  var wirePrimitives = Object.freeze({
      line: line,
      polyline: polyline,
      circle: circle,
      curve: curve,
      arc: arc,
      rectangle: rectangle,
      ellipse: ellipse,
      vector: vector
  });

  /*
   * helpers
   */

  var vec$1 = new VectorManager(); // an ObjectPool for managing Three.js vectors

  /**
   * Convert a flux json polygon to an object with THREE Vector3 coordinates
   *
   * @function _polygonToThree
   *
   * @return {Object}         The new converted polygon
   *
   * @param  {Object} polygon The Flux JSON polygon to convert
   */
  function _polygonToThree(polygon) {
      var polygonThree = {boundary: [], holes: []};
      _pointArrayToThree(polygonThree.boundary, polygon.boundary);
      if (!polygon.holes) return polygonThree;
      for (var i=0, len=polygon.holes.length; i<len; i++) {
          var holeThree = [];
          polygonThree.holes.push(holeThree);
          _pointArrayToThree(holeThree, polygon.holes[i]);
      }
      return polygonThree;
  }

  /**
   * Convert an array of triples of numbers into an array of THREE.Vector3
   * @param  {Array.<THREE.Vector3>} pointsThree Destination
   * @param  {Array.<[Number,Number,Number]>} pointsArray Source
   */
  function _pointArrayToThree(pointsThree, pointsArray) {
      for (var i=0, len=pointsArray.length; i<len; i++) {
          pointsThree.push(vec$1.convert(pointsArray[i]));
      }
  }

  /**
   * Creates a THREE.Mesh as a set of polygons from parasolid data and a material
   *
   * @function polygonSet
   *
   * @return { THREE.Mesh } The THREE.Mesh
   *
   *  @throws FluxGeometryError if polygon is non planar
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function polygonSet ( data, material ) {

      // TODO check for degeneracy (such as collocated points)
      // TODO check for winding order (holes should match boundary)
      var p = vec$1.alloc();
      var n = vec$1.alloc();
      var u = vec$1.alloc();
      var v = vec$1.alloc();

      // Loop over all shapes and holes
      for (var i=0, len=data.polygons.length; i<len; i++) {

          var polygon = _polygonToThree(data.polygons[i]);

          _computePointBasis(p, n, u, v, polygon.boundary);

          var p0 = vec$1.clone(polygon.boundary[0]);

          // Polygon must be planar
          if (!_isPlanarPolygon(polygon, n, p0)) {
              throw new FluxGeometryError('Non planar polygon in polygonSet');
          }

          //TODO convert the remaining code to use polygon
          var polygon2d = { boundary: [], holes: []};
          _reduceCoordinates(polygon2d.boundary, polygon.boundary, u, v, p0);
          if (polygon.holes) {
              for (var j=0, jLen = polygon.holes.length; j<jLen; j++) {
                  polygon2d.holes.push([]);
                  _reduceCoordinates(polygon2d.holes[j], polygon.holes[j], u, v, p0);
              }
          }
          // Build the triangulated shape
          var geometry = _makeShapeGeometry(polygon2d);

          _restoreCoordinates(geometry, p, u, v);
      }

      return new THREE.Mesh( geometry, material );
  }

  /**
   * Check if an array of points is on a given plane
   * @param  {Array.<THREE.Vector3>}  pointsThree List of point objects
   * @param  {THREE.Vector3}  n       Normal vector
   * @param  {THREE.Vector3}  p0      Point on the plane
   * @return {Boolean}                True when the points are on the plane
   */
  function _isPlanarArray (pointsThree, n, p0) {
      var pointRel = vec$1.alloc();
      for (var i=0, len=pointsThree.length; i<len; i++) {
          pointRel.copy(pointsThree[i]).sub(p0);
          if (Math.abs(pointRel.dot(n))>TOLERANCE) {
              return false;
          }
      }
      return true;
  }

  /**
   * Check if a polygon is flat.
   * @param  {Object}  polyThree Polygon with points as objects
   * @param  {THREE.Vector3}  n       Normal vector
   * @param  {THREE.Vector3}  p0      Point on the plane
   * @return {Boolean}           True if the polygon and it's holes are planar
   */
  function _isPlanarPolygon(polyThree, n, p0) {
      var planar = _isPlanarArray(polyThree.boundary, n, p0);
      if (!polyThree.holes) return planar;
      for (var i=0, len=polyThree.holes.length; i<len && planar; i++) {
          if (!_isPlanarArray(polyThree.holes[i], n, p0)) {
              planar = false;
          }
      }
      return planar;
  }

  /**
   * Convert planar three dimensional points to a two dimensional coordinate system.
   * @param  {[]} destPoints Array to hold output
   * @param  {[]} srcPoints  Source array of points
   * @param  {THREE.Vector3} u          Coordinate basis first direction
   * @param  {THREE.Vector3} v          Coordinate basis second direction
   * @param  {THREE.Vector3} p0         Point on the polygon
   */
  function _reduceCoordinates(destPoints, srcPoints, u, v, p0) {
      var p = vec$1.alloc();
      var s, t;
      for (var i=0, len=srcPoints.length; i<len; i++) {
          p.copy(srcPoints[i]).sub(p0);

          s = p.dot(u);
          t = p.dot(v);
          destPoints.push(vec$1.alloc().set(s, t, 0));
      }
  }

  /**
   * Convert 2D coordinates back to world space 3D.
   * This modifies the vertex positions in place.
   * @param  {THREE.Geometry} geometry The geometry to transform
   * @param  {[type]} p        The origin point on the polygon
   * @param  {[type]} u        The first basis direction.
   * @param  {[type]} v        The second basis direction.
   */
  function _restoreCoordinates(geometry, p, u, v) {
      var uTmp = vec$1.alloc();
      var vTmp = vec$1.alloc();
      for ( var i = 0, len = geometry.vertices.length ; i < len ; i++ ) {

          var vert = geometry.vertices[i];
          var s = vert.x;
          var t = vert.y;
          uTmp.copy(u);
          vTmp.copy(v);

          vert.copy(p);
          vert.add(uTmp.multiplyScalar(s));
          vert.add(vTmp.multiplyScalar(t));
      }
      geometry.verticesNeedUpdate = true;
  }

  /**
   * Compute a coordinate system for the given set of points
   * @param  {THREE.Vector3} p      Return vector for a point on the polygon
   * @param  {THREE.Vector3} n      Return vector for the polygon normal
   * @param  {THREE.Vector3} u      Return vector for the polygon basis first direction
   * @param  {THREE.Vector3} v      Return vector for the polygon basis second direction
   * @param  {Array.<Array.<Number>>} points The points defining the polygon
   */
  function _computePointBasis(p, n, u, v, points) {
      n.set(0,0,1);
      if (points.length < 3) {
          return;
      }
      p.copy(points[0]);

      //TODO check memory allocation (would be large for many polygons)
      var v0 = vec$1.alloc().copy(points[0]);
      u.copy(points[1]);
      v.copy(points[points.length-1]);

      u.sub(v0).normalize();
      v.sub(v0).normalize();

      n.crossVectors(u, v).normalize();
      v.crossVectors(n, u).normalize();
  }

  /**
   * Make THREE.geometry from a flux JSON polygon object.
   * The polygon is like a flux JSON object, but actually
   * the points have all been converted from arrays to Vector3 objects.
   * @param  {Object} polygon Flux JSON polygon
   * @return {THREE.Geometry}         The renderable geometry.
   */
  function _makeShapeGeometry(polygon) {

      var shape = _makeShape( polygon.boundary );

      _makeShapeHoles(shape, polygon.holes);

      var geometry = new THREE.ShapeGeometry( shape );

      geometry.computeBoundingSphere();
      geometry.computeFaceNormals();

      return geometry;
  }

  /**
   * Process each hole as a shape to convert it.
   * @param  {Object} shape The shape to contain the converted holes
   * @param  {Object} holes The list of holes
   */
  function _makeShapeHoles(shape, holes) {
      for (var i=0, len=holes.length; i<len; i++) {
          var hole = _makeShape( holes[i] );
          shape.holes.push(hole);
      }
  }

  /**
   * Create a shape object from a list of points
   * @param  {Array.<THREE.Vector3>} boundary The points to process
   * @return {THREE.Shape}          Shape object representing the polygon
   */
  function _makeShape(boundary) {

      var shape = new THREE.Shape();
      for ( var i = 0, len = boundary.length ; i < len ; i++ ) {
          shape.moveTo( boundary[i].x, boundary[i].y );
      }
      return shape;
  }

  /**
   * Calculate the maximum curvature across a surface geometry
   * The curvature is computed for each face compared to it's neighbors
   * and then the maximum angle is the result.
   * @param {THREE.Geometry} geom The surface
   * @returns {number} The normalized curvature between 0 and 1
   * @private
   */
  function _calcMaxCurvature(geom) {

      var v, vl, f, fl, face, vertexToFaces;
      // List of all the co-incident faces, indexed by [v][f]
      // Stores a pair of a face index and a vertex index on a face
      vertexToFaces = [];

      for ( v = 0, vl = geom.vertices.length; v < vl; v ++ ) {
          vertexToFaces[v] = [];
      }

      // Add the face normals as vertex normals
      for ( f = 0, fl = geom.faces.length; f < fl; f ++ ) {
          face = geom.faces[ f ];
          vertexToFaces[face.a].push([f,0]);
          vertexToFaces[face.b].push([f,1]);
          vertexToFaces[face.c].push([f,2]);
      }
      var invPi = 1.0 / Math.PI;
      var maxCurvature = 0;
      // Convert triangle index scheme from a b c to 1 2 3
      var iToAbc = ['a', 'b', 'c'];
      // For each face
      for ( f = 0, fl = geom.faces.length; f < fl; f ++ ) {
          face = geom.faces[ f ];
          // For each vertex on the face
          for (var i=0; i<3; i++) {
              var faceAbc = face[iToAbc[i]];
              // For each face neighboring the vertex
              for ( v = 0, vl = vertexToFaces[faceAbc].length; v < vl; v ++ ) {
                  // look up normal by face, and vertex and add if within threshold
                  var faceIndex = vertexToFaces[faceAbc][v][0];
                  var curvature = invPi * face.normal.angleTo(geom.faces[faceIndex].normal);
                  if (curvature > maxCurvature) {
                      maxCurvature = curvature;
                  }
              }
          }
      }

      return maxCurvature;
  }
  /**
   * Creates a surface THREE.Mesh from parasolid data and a material
   *
   * @function surface
   *
   * @return { THREE.Mesh } The THREE.Mesh
   *
   * @throws FluxGeometryError if nurbs definition is invalid
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh

   */
  function surface ( data, material ) {
      if (!data || !data.controlPoints) {
          throw new FluxGeometryError('Data must exist and have controlPoints');
      }
      var j, len2, controlPointRow, point, arr;
      var nsControlPoints = [];
      var controlPoints = data.controlPoints;
      var i = 0;
      var len = controlPoints.length;

      // For each control point
      for ( ; i < len ; i++ ) {
          arr = [];
          nsControlPoints.push( arr );
          controlPointRow = controlPoints[ i ];
          for ( j = 0, len2 = controlPointRow.length ; j < len2 ; j++ ) {
              point = controlPointRow[ j ];
              arr.push(
                  new THREE.Vector4(
                      point[ 0 ], point[ 1 ], point[ 2 ],
                      data.weights ? data.weights[ j * len + i ] : 1
                  )
              );
          }
      }

      if ( data.uKnots.length !== nsControlPoints[ 0 ].length + data.uDegree + 1 )
          throw new FluxGeometryError( 'Number of uKnots in a NURBS surface should equal uDegree + N + 1' +
                           ', where N is the number of control points along U direction' );

      if ( data.vKnots.length !== nsControlPoints.length + data.vDegree + 1 )
          throw new FluxGeometryError( 'Number of vKnots in a NURBS surface should equal vDegree + N + 1' +
                           ', where N is the number of control points along V direction' );

      var nurbsSurface = new THREE.NURBSSurface( data.vDegree, data.uDegree, data.vKnots, data.uKnots, nsControlPoints );
      var getPointFunction = nurbsSurface.getPoint.bind(nurbsSurface);

      // Tessellate the NURBS at the minimum level to get the polygon control hull
      var minSlices = nsControlPoints.length-1;
      var minStacks = nsControlPoints[0].length-1;
      var geometry = new THREE.ParametricGeometry(getPointFunction, minSlices, minStacks);
      geometry.computeFaceNormals();

      // Determine the appropriate resolution for the surface based on the curvature of the control hull
      var curvature = _calcMaxCurvature(geometry);
      var factor = curvature * NURBS_SURFACE_QUALITY;

      // Interpolate between flat and maximum detail, never less than the nurbs control hull
      var slices = Math.max(Math.floor(data.vDegree * nsControlPoints.length * factor), minSlices);
      var stacks = Math.max(Math.floor(data.uDegree * nsControlPoints[0].length * factor), minStacks);

      // Exception for totally flat surfaces, then render as a single quad
      if (curvature < NURBS_FLAT_LIMIT) {
          slices = 1;
          stacks = 1;
      }

      if (slices !== minSlices || stacks !== minStacks) {
          // Build the final geometry using the dynamic resolution
          geometry.dispose();
          geometry = new THREE.ParametricGeometry(getPointFunction, slices, stacks);
          geometry.computeFaceNormals();
      }

      return new THREE.Mesh( geometry, material );
  }


  var sheetPrimitives = Object.freeze({
      polygonSet: polygonSet,
      surface: surface
  });

  /**
   * Moves a geometry by a vector
   *
   * @function moveGeometry
   *
   * @param { THREEJS.OBJECT3D } object The object to move
   * @param { THREE.Vector3 } vector The vector to move the object by
   */
  function moveGeometry ( object, vector ) {
      object.position.copy( vector );
      object.updateMatrix();
      object.geometry.applyMatrix( object.matrix );
      object.position.set( 0, 0, 0 );
  }

  /**
   * Rotates a geometry by a vector
   *
   * @function rotateGeometry
   *
   * @param { THREEJS.OBJECT3D } object The object to rotate
   * @param { THREE.Vector3 }  vector The vector to rotate by in Euler Angles
   */
  function rotateGeometry ( object, vector ) {
      object.rotation.set( vector.x, vector.y, vector.z );
      object.updateMatrix();
      object.geometry.applyMatrix( object.matrix );
      object.rotation.set( 0, 0, 0 );
  }

  /**
   * Extract the semi angle property from a data object.
   * Used to determine cone shape. Data is expected to have a
   * semiAngle property set in degrees.
   *
   * @param  {Object} data The data describing a cone.
   *
   * @function getSemiAngle
   *
   * @throws FluxGeometryError if property is missing or out of bounds
   *
   * @return {Number}      The semi angle in radians.
   */
  function getSemiAngle(data) {
      var semiAngle;
      if (data.semiAngle) {
          semiAngle = data.semiAngle;
      } else {
          if (data['semi-angle']) {
              semiAngle = data['semi-angle'];
          } else {
              throw new FluxGeometryError('Cone must specify semiAngle parameter.');
          }
      }
      if (data.semiAngle <= 0 || data.semiAngle >= 90) {
          throw new FluxGeometryError('Cone semiAngle must be between 0 and 90 degrees exclusive.');
      }
      return DEG_2_RAD * semiAngle;
  }
  /**
   * Creates a cone THREE.Mesh from parasolid data and a material.
   *
   * @function cone
   *
   * @return { THREE.Mesh } The cone THREE.Mesh
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function cone ( data, material ) {
      var geometry, mesh;
      var semiAngle = getSemiAngle(data);
      var topRadius = data.height * Math.tan(semiAngle);
      geometry = new THREE.CylinderGeometry( topRadius+data.radius, data.radius, data.height, CIRCLE_RES );
      mesh = new THREE.Mesh( geometry, material );
      moveGeometry( mesh, new THREE.Vector3( 0, data.height * 0.5, 0 ) );
      rotateGeometry( mesh, DEFAULT_ROTATION );

      return mesh;
  }

  /**
   * Creates a cylindrical THREE.Mesh from parasolid data and a material
   *
   * @function cylinder
   *
   * @return { THREE.Mesh } The cylindrical THREE.Mesh
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function cylinder ( data, material ) {
      var geometry, mesh;

      geometry = new THREE.CylinderGeometry( data.radius, data.radius, data.height, CIRCLE_RES );
      mesh = new THREE.Mesh( geometry, material );
      moveGeometry( mesh, new THREE.Vector3( 0, data.height * 0.5, 0 ) );
      rotateGeometry( mesh, DEFAULT_ROTATION );

      return mesh;
  }

  /**
   * Creates a spherical THREE.Mesh from parasolid data and a material
   *
   * @function sphere
   *
   * @return { THREE.Mesh } The spherical THREE.Mesh
   *
   * @throws FluxGeometryError if sphere is missing radius
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function sphere ( data, material ) {
      var geometry, mesh;

      if (!data.radius) {
          throw new FluxGeometryError('Sphere is missing radius.');
      }

      geometry = new THREE.SphereBufferGeometry( data.radius, 12, 8 );
      mesh = new THREE.Mesh( geometry, material );
      rotateGeometry( mesh, DEFAULT_ROTATION );

      return mesh;
  }

  /**
   * Creates a toroidal THREE.Mesh from parasolid data and a material
   *
   * @function torus
   *
   * @return { THREE.Mesh } The toroidal THREE.Mesh
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function torus ( data, material ) {
      var majorRadius = data.majorRadius || data.major_radius;
      var minorRadius = data.minorRadius || data.minor_radius;
      var geometry = new THREE.TorusGeometry( majorRadius, minorRadius, 24, 24 );
      return new THREE.Mesh( geometry, material );
  }

  /**
   * Creates a box THREE.Mesh from parasolid data and a material
   *
   * @function block
   *
   * @return { THREE.Mesh } The box THREE.Mesh
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function block ( data, material ) {
      var geometry = new THREE.BoxGeometry( data.dimensions[ 0 ], data.dimensions[ 1 ], data.dimensions[ 2 ] );
      return new THREE.Mesh( geometry, material );
  }

  /**
   * Compute optimal normals from face and vertex normals
   *
   * @function computeCuspNormals
   *
   * @param  {Three.Geometry} geom  The geometry in need of normals
   * @param  {Number} thresh        Threshold for switching to vertex normals
   */
  function computeCuspNormals ( geom, thresh ) {
      var v, vl, f, fl, face, vertexToFaces, faceNormals;
      // List of all the co-incident faces, indexed by [v][f]
      // Stores a pair of a face index and a vertex index on a face
      vertexToFaces = [];

      for ( v = 0, vl = geom.vertices.length; v < vl; v ++ ) {
          vertexToFaces[v] = [];
      }

      faceNormals = [];
      // Add the face normals as vertex normals
      for ( f = 0, fl = geom.faces.length; f < fl; f ++ ) {
          face = geom.faces[ f ];
          faceNormals.push([]);
          faceNormals[f][0] = new THREE.Vector3();
          faceNormals[f][1] = new THREE.Vector3();
          faceNormals[f][2] = new THREE.Vector3();
          vertexToFaces[face.a].push([f,0]);
          vertexToFaces[face.b].push([f,1]);
          vertexToFaces[face.c].push([f,2]);
      }

      // Convert triangle index scheme from a b c to 1 2 3
      var iToAbc = ['a', 'b', 'c'];
      // For each face
      for ( f = 0, fl = geom.faces.length; f < fl; f ++ ) {
          face = geom.faces[ f ];
          // For each vertex on the face
          for (var i=0; i<3; i++) {
              var faceAbc = face[iToAbc[i]];
              // For each face neighboring the vertex
              for ( v = 0, vl = vertexToFaces[faceAbc].length; v < vl; v ++ ) {
                  // look up normal by face, and vertex and add if within threshold
                  var faceIndex = vertexToFaces[faceAbc][v][0];
                  var fN = geom.faces[faceIndex].normal;
                  if (face.normal.dot(fN) > thresh) {
                      faceNormals[faceIndex][vertexToFaces[faceAbc][v][1]].add(face.normal);
                  }
              }
          }
      }

      // Normalize the normals to unit length
      for ( f = 0, fl = faceNormals.length; f < fl; f ++ ) {
          for (v=0;v<faceNormals[f].length;v++) {
              faceNormals[f][v].normalize();
          }
      }

      // Apply the normals to the faces
      for ( f = 0, fl = geom.faces.length; f < fl; f ++ ) {
          face = geom.faces[ f ];
          // Apply vertex normals if the face is not flat
          if (faceNormals[f][0].distanceToSquared(faceNormals[f][1]) > TOLERANCE ||
              faceNormals[f][1].distanceToSquared(faceNormals[f][2]) > TOLERANCE) {
              var vertexNormals = face.vertexNormals;
              vertexNormals[0] = faceNormals[f][0].clone();
              vertexNormals[1] = faceNormals[f][1].clone();
              vertexNormals[2] = faceNormals[f][2].clone();
          }
      }
  }

  /**
   * Creates a THREE.Mesh from parasolid data and a material
   *
   * @precondition The faces in the mesh must be triangles or convex planar polygons.
   * Also this assumes the faces are wound counter clockwise.
   *
   * @function THREE.Mesh
   *
   * @return {THREE.Mesh} The THREE.Mesh
   *
   * @param {Object}          data     Parasolid data
   * @param {THREE.Material}  material The material to give the THREE.Mesh

   */
  function mesh (data, material) {
      var geometry = new THREE.Geometry(),
          face;

      for ( var i = 0, len = data.vertices.length ; i < len ; i++ ) {
          geometry.vertices.push(new THREE.Vector3(
              data.vertices[i][0],
              data.vertices[i][1],
              data.vertices[i][2])
          );
      }

      for ( i = 0, len = data.faces.length ; i < len ; i++ ) {
          face = data.faces[ i ];
          if ( face.length === 3 ) {
              geometry.faces.push(new THREE.Face3(face[0], face[1], face[2]));
          } else if ( face.length > 3 ) {
              for ( var j=0; j+2<face.length; j++) {
                  geometry.faces.push(new THREE.Face3(face[0], face[j+1], face[j+2]));
              }
          }

      }

      geometry.computeBoundingSphere();
      geometry.computeFaceNormals();
      computeCuspNormals(geometry, NORMALS_SMOOTH_LIMIT);

      return new THREE.Mesh( geometry, material );
    }

  // Singleton loader object
  var objLoader = new THREE.OBJLoader();
  /**
   * Convert stl data into geometry
   * @param {object} data The stl primitive
   * @param {THREE.material} material The material to use
   * @returns {THREE.Mesh} The mesh containing the geometry
   */
  function obj (data) {
      return objLoader.parse(data.data);
  }

  // Singleton loader object
  var stlLoader = new THREE.STLLoader();
  /**
   * Convert stl data into geometry
   * @param {object} data The stl primitive
   * @param {THREE.material} material The material to use
   * @returns {THREE.Mesh} The mesh containing the geometry
   */
  function stl (data, material) {
      var geometry = stlLoader.parseASCII(data.data);

      geometry.computeBoundingSphere();
      geometry.mergeVertices();
      geometry.computeFaceNormals();
      computeCuspNormals(geometry, NORMALS_SMOOTH_LIMIT);

      return new THREE.Mesh( geometry, material );
  }

  /**
   * Creates a planar THREE.Mesh from parasolid data and a material
   *
   * @function plane
   *
   * @return { THREE.Mesh } The planar THREE.Mesh
   *
   * @param { Object }           data     Parasolid data
   * @param { THREE.Material } material The material to give the THREE.Mesh
   */
  function plane ( data, material ) {
      var geometry = new THREE.PlaneBufferGeometry( PLANE_DEFAULTS.WIDTH, PLANE_DEFAULTS.HEIGHT,
          PLANE_DEFAULTS.WIDTH_SEGMENTS, PLANE_DEFAULTS.HEIGHT_SEGMENTS );
      return new THREE.Mesh( geometry, material );
  }


  var solidPrimitives = Object.freeze({
    cone: cone,
    cylinder: cylinder,
    sphere: sphere,
    torus: torus,
    block: block,
    mesh: mesh,
    obj: obj,
    stl: stl,
    plane: plane
  });

  /**
   * Convert a material to hash like string.
   * The string will always be the same for the same property values,
   * and can be used to determine uniqueness of materials.
   * @param {constants.MATERIAL_TYPES} type The type of material
   * @param {THREE.material} m The material
   * @return {string} The result
   */
  function materialToJson(type, m) {
      var knownProperties = DEFAULT_MATERIAL_PROPERTIES;
      var propertyNames = [];
      var prop;
      switch ( type ) {
          case MATERIAL_TYPES.PHONG: {
              propertyNames = Object.keys(knownProperties.phong);
              // Special case roughness since its not a real property, but determines uniqueness
              propertyNames.push('roughness');
              break;
          }
          case MATERIAL_TYPES.POINT: {
              propertyNames = Object.keys(knownProperties.point);
              break;
          }
          case MATERIAL_TYPES.LINE: {
              propertyNames = Object.keys(knownProperties.line);
              break;
          }
      }
      propertyNames.sort();
      var orderedMaterial =[];
      var i, len;
      for (i=0, len=propertyNames.length; i<len; i++) {
          prop = m[propertyNames[i]];
          if (prop) {
              orderedMaterial.push(prop);
          }
      }
      // Use the type (mesh, phong, line) as a namespace to separate materials
      var result = JSON.stringify(type);
      result += JSON.stringify(orderedMaterial);
      return result;
  }

  /**
   * Convert a color string or array to an object
   * @param {String|Array} color The html color
   * @returns {THREE.Color} The color object
   * @private
   */
  function _convertColor(color) {
      if (color == null) {
          color = DEFAULT_MATERIAL_PROPERTIES.phong.color;
      }
      var newColor = new THREE.Color();
      if (typeof color === 'object' &&
          color.r !== undefined && color.g !== undefined && color.b !== undefined) {
          newColor.copy(color);
      } else if (typeof color === 'object' && color instanceof Array && color.length === 3) {
          newColor.setRGB(color[0], color[1], color[2]);
      } else {
          newColor.set(color);
      }
      return newColor;
  }

  /**
   * Find a parameter on the entity object data
   * @param {Object} data The entity parameters object
   * @param {String} attr The name of the desired attribute
   * @param {*} defaultAttr The default value for the attribute
   * @returns {*} The found property or the default
   * @private
   */
  function _getEntityData(data, attr, defaultAttr) {
      if (!data) return defaultAttr;
      var value = defaultAttr;
      if (data[attr]) {
          value = data[attr];
      } else if (data.materialProperties && data.materialProperties[attr]) {
          value = data.materialProperties[attr];
      } else if (data.attributes && data.attributes.materialProperties && data.attributes.materialProperties[attr]) {
          value = data.attributes.materialProperties[attr];
      }
      return value;
  }

  /**
   * Placeholder used to determine list of valid entity names
   * @function point
   * @throws FluxGeometryError Always
   */
  function point () {
      // Points are already handled in createPrimitive.js
      // since they are aggregated into one entity
      throw new FluxGeometryError('Something went wrong with our code.');
  }

  /**
   * Placeholder used to determine list of valid entity names
   * @function polycurve
   * @throws FluxGeometryError Always
   */
  function polycurve () {
      // Polycurve entities are de-constructed into their constituent
      // entities during by _flattenData in createObject
      throw new FluxGeometryError('Something went wrong with our code.');
  }

  /**
   * Placeholder used to determine list of valid entity names
   * @function polysurface
   * @throws FluxGeometryError Always
   */
  function polysurface ( ) {
      // Polysurface entities are de-constructed into their constituent
      // entities during by _flattenData in createObject
      throw new FluxGeometryError('Something went wrong with our code.');
  }

  /**
   * Placeholder used to determine list of valid entity names
   * @function brep
   * @throws FluxGeometryError Always
   */
  function brep ( ) {
      // Breps are added to the async primitives and thus never rendered here
      throw new FluxGeometryError('Something went wrong with our code.');
  }

  /**
   * Creates a linear THREE.Mesh from parasolid data and a material
   *
   * @function text
   *
   * @return { THREE.Mesh } The linear THREE.Mesh
   *
   * @param { Object } data     Parasolid data
   */
  function text ( data ) {
      var textHelper = new THREE.TextHelper( data.text, {
          size:       _getEntityData(data, 'size', undefined),
          resolution: _getEntityData(data, 'resolution', undefined),
          align:      _getEntityData(data, 'align', undefined)
      });
      textHelper.material.color = _convertColor(_getEntityData(data, 'color', 'black'));
      return textHelper;
  }


  var primitiveHelpers = Object.freeze({
      point: point,
      polycurve: polycurve,
      polysurface: polysurface,
      brep: brep,
      text: text
  });

  var dimensions = {"length":{"units":[["angstroms","angstrom","A"],["nanometers","nanometer","nm"],["microns","um","micron"],["millimeters","mm","millimeter"],["centimeters","cm","centimeter"],["decimeters","decimeter","dm"],["meters","m","meter"],["dekameters","dekameter","dam"],["hectometers","hectometer","hm"],["kilometers","km","kilometer"],["megameters","megameter","Mm"],["gigameters","gigameter","Gm"],["mils","mil"],["inches","inch","in"],["yards","yard","yd"],["feet","ft","foot"],["decifeet","decifoot","shrekles","shrekle"],["miles","mile"],["nautical miles","nautical mile"],["printer picas","printer pica"],["printer points","printer point"],["astronomical units","astronomical unit","au"],["light years","light year","ly"],["parsecs","parsec","pc"]]},"area":{"units":[["acres"],["hectares"]]},"volume":{"units":[["liters","liter","l"],["gallons","gallon","gal"]]},"temperature":{"units":[["farenheit","F"],["celsius","C"],["kelvin","K"]]},"time":{"units":[["nanoseconds","nanosecond","ns"],["microseconds","microsecond","us"],["milliseconds","milisecond","ms"],["seconds","second","s"],["minutes","minute"],["hours","hour","h"],["days","day"],["weeks","week"],["years","year"]]},"angle":{"units":[["radians","radian","rad"],["degrees","degree","deg"]]},"mass":{"units":[["grams","gram","g"],["kilograms","kilogram","kg"],["pounds","pound","lb"]]},"force":{"units":[["newtons","newton"],["pound-force","lbf"]]},"energy":{"units":[["joules","joule"],["kwh","kilowatt hour"]]},"luminous-intensity":{"units":[["candelas","candela"]]},"illumination":{"units":[["lux","lx"],["foot-candles","foot-candle","fc"]]},"luminous-flux":{"units":[["lumen","lm"]]}};
  var conversions = [{"from":"angstroms","to":"meters","factor":1e-10},{"from":"nanometers","to":"meters","factor":1e-9},{"from":"microns","to":"meters","factor":0.000001},{"from":"millimeters","to":"meters","factor":0.001},{"from":"centimeters","to":"meters","factor":0.01},{"from":"decimeters","to":"meters","factor":0.1},{"from":"dekameters","to":"meters","factor":10},{"from":"hectometers","to":"meters","factor":100},{"from":"kilometers","to":"meters","factor":1000},{"from":"megameters","to":"meters","factor":1000000},{"from":"gigameters","to":"meters","factor":1000000000},{"from":"mils","to":"meters","factor":0.0000254},{"from":"inches","to":"meters","factor":0.0254},{"from":"yards","to":"meters","factor":0.9144},{"from":"feet","to":"meters","factor":0.3048},{"from":"decifeet","to":"meters","factor":0.03048},{"from":"miles","to":"meters","factor":1609.34},{"from":"nautical miles","to":"meters","factor":1852},{"from":"printer picas","to":"meters","factor":0.00423333},{"from":"printer points","to":"meters","factor":0.000352778},{"from":"astronomical units","to":"meters","factor":149600000000},{"from":"light years","to":"meters","factor":9461000000000000},{"from":"parsecs","to":"meters","factor":30860000000000000}];

  function UnitRegistry() {
      // Dimension (string) -> bool
      this.dimensions = {};

      // Unit -> dimension
      this.units = {};

      // Alias -> Unit
      this.aliases = {};

      // Unit -> {Unit -> Scale}}
      this.conversions = {};

  }

  /**
   * Add a unit as a known type that can be converted
   * @param {String} unit The name of the unit (ex 'feet')
   * @param {String} dim The name of the dimension (ex 'length')
   * @param {Array.<String>} aliases Other names for the same unit (ex ['foot', 'ft'])
   */
  UnitRegistry.prototype.addUnit = function (unit, dim, aliases) {
      this.units[unit] = dim;
      for(var i=0;i<aliases.length;i++) {
          this.aliases[aliases[i]] = unit;
      }
  };

  /**
   * Determine the numeric value to convert between two linear units
   * @param {String} from The old unit name
   * @param {String} to The new unit name
   * @returns {Number} The multiplier
   */
  UnitRegistry.prototype.unitConversionFactor = function (from, to) {
      var standardFrom = from;
      if (this.aliases[from]) {
          standardFrom = this.aliases[from];
      }
      // Don't need to convert same units or
      // units that are known, but don't have a conversion
      if (from === to || standardFrom === to) {
          return 1.0;
      }
      var conversionFrom = this.conversions[from];
      if (!conversionFrom) {
          if (standardFrom) {
              conversionFrom = this.conversions[standardFrom];
          }
      }
      if (conversionFrom) {
          return conversionFrom[to];
      }
      // Known units that are missing conversions are considered a pass through
      if (this.units[standardFrom] && this.units[to]) {
          return 1.0;
      }
      // TODO(Kyle): This should be a warning
      // https://vannevar.atlassian.net/browse/LIB3D-709
      // throw new FluxGeometryError('Could not convert units from "'+from+'" to '+to);
      return null;
  };

  /**
   * Modify all the numeric properties in an object
   * @param {Object} obj The thing to modify
   * @param {Number} factor The multiplier for each property
   * @returns {Object} The modified object
   * @private
   */
  function _scaleProperties(obj, factor) {
      if (obj) {
          if (obj.constructor === Number) {
              return obj * factor;
          }
          if (obj.constructor === Array) {
              return obj.map(function (item) {
                  return _scaleProperties(item, factor);
              });
          }
          // TODO handle objects if needed
      }
      return obj;
  }

  /**
   * Create a function to repeatedly convert a pair of units
   * @param {String} from The old units
   * @param {String} to The new units
   * @returns {Function} The conversion function
   */
  UnitRegistry.prototype.unitConversionFunc = function (from, to) {
      var factor = this.unitConversionFactor(from, to);
      if (factor !== null) {
          return function (obj) {
              if (!obj) {
                  throw new FluxGeometryError('Invalid unit string '+obj);
              } else if (obj.constructor === Number) {
                  return obj * factor;
              }
              return _scaleProperties(obj, factor);
          };
      }
      return null;
  };

  /**
   * Add a new dimension that can be measured
   * @param {String} d The dimension
   */
  UnitRegistry.prototype.addConcreteDimension = function (d) {
      this.dimensions[d] = true;
  };

  /**
   * Register a scale factor for a given unit conversion
   * @param {String} from Old units
   * @param {String} to New units
   * @param {Number} scale The relative scale of the units
   */
  UnitRegistry.prototype.addConversion = function (from, to, scale) {

      if (!this.conversions[from]) {
          this.conversions[from] = {};
      }
      if (this.conversions[from][to] == null) {
          this.conversions[from][to] = scale;
      }
  };

  /**
   * Factory function to create a units registry with common values populated
   *
   * This is hand migrated code from units-of-measurement / flux-measure.
   * We did not use the emscripten based port because it was too large (~2MB)
   * for what is a reasonable amount of JavaScript code. Also the web viewer
   * only needs a subset of the units conversion logic to display geometry.
   * TODO: move all these function calls into a .json file containing
   * the data and have the code loop over it instead of being hard coded.
   * It is this way currently to match the structure of the other repository.
   *
   * @returns {UnitRegistry} The new registry
   */
  UnitRegistry.newStandardRegistry = function () {
      var r = new UnitRegistry();

      // Add dimensions, units and aliases
      var dimensions$$ = dimensions;
      for (var d in dimensions$$) {
          r.addConcreteDimension(dimensions$$[d]);
          var units = dimensions$$[d].units;
          for (var u in units) {
              r.addUnit(units[u][0], dimensions$$[d], units[u].splice(1));
          }
      }

      // Add conversions between units
      var conversions$$ = conversions;
      for (var c in conversions$$) {
          r.addConversion(conversions$$[c].from, conversions$$[c].to, conversions$$[c].factor);
      }

      return r;
  };

  var index$1 = (function (module) {
  var exports = module.exports;
  var hasOwn = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;

  module.exports = function forEach (obj, fn, ctx) {
      if (toString.call(fn) !== '[object Function]') {
          throw new TypeError('iterator must be a function');
      }
      var l = obj.length;
      if (l === +l) {
          for (var i = 0; i < l; i++) {
              fn.call(ctx, obj[i], i, obj);
          }
      } else {
          for (var k in obj) {
              if (hasOwn.call(obj, k)) {
                  fn.call(ctx, obj[k], k, obj);
              }
          }
      }
  };
  return module.exports;
  })({exports:{}});

  var index = (function (module) {
  var exports = module.exports;
  'use strict';

  var each = index$1;
  module.exports = api;


  /**
   * Convenience wrapper around the api.
   * Calls `.get` when called with an `object` and a `pointer`.
   * Calls `.set` when also called with `value`.
   * If only supplied `object`, returns a partially applied function, mapped to the object.
   *
   * @param {Object} obj
   * @param {String|Array} pointer
   * @param value
   * @returns {*}
   */

  function api (obj, pointer, value) {
      // .set()
      if (arguments.length === 3) {
          return api.set(obj, pointer, value);
      }
      // .get()
      if (arguments.length === 2) {
          return api.get(obj, pointer);
      }
      // Return a partially applied function on `obj`.
      var wrapped = api.bind(api, obj);

      // Support for oo style
      for (var name in api) {
          if (api.hasOwnProperty(name)) {
              wrapped[name] = api[name].bind(wrapped, obj);
          }
      }
      return wrapped;
  }


  /**
   * Lookup a json pointer in an object
   *
   * @param {Object} obj
   * @param {String|Array} pointer
   * @returns {*}
   */
  api.get = function get (obj, pointer) {
      var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);

      for (var i = 0; i < refTokens.length; ++i) {
          var tok = refTokens[i];
          if (!(typeof obj == 'object' && tok in obj)) {
              throw new Error('Invalid reference token: ' + tok);
          }
          obj = obj[tok];
      }
      return obj;
  };

  /**
   * Sets a value on an object
   *
   * @param {Object} obj
   * @param {String|Array} pointer
   * @param value
   */
  api.set = function set (obj, pointer, value) {
      var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer),
        nextTok = refTokens[0];

      for (var i = 0; i < refTokens.length - 1; ++i) {
          var tok = refTokens[i];
          if (tok === '-' && Array.isArray(obj)) {
            tok = obj.length;
          }
          nextTok = refTokens[i + 1];

          if (!(tok in obj)) {
              if (nextTok.match(/^(\d+|-)$/)) {
                  obj[tok] = [];
              } else {
                  obj[tok] = {};
              }
          }
          obj = obj[tok];
      }
      if (nextTok === '-' && Array.isArray(obj)) {
        nextTok = obj.length;
      }
      obj[nextTok] = value;
      return this;
  };

  /**
   * Removes an attribute
   *
   * @param {Object} obj
   * @param {String|Array} pointer
   */
  api.remove = function (obj, pointer) {
      var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);
      var finalToken = refTokens[refTokens.length -1];
      if (finalToken === undefined) {
          throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
      }
      delete api.get(obj, refTokens.slice(0, -1))[finalToken];
  };

  /**
   * Returns a (pointer -> value) dictionary for an object
   *
   * @param obj
   * @param {function} descend
   * @returns {}
   */
  api.dict = function dict (obj, descend) {
      var results = {};
      api.walk(obj, function (value, pointer) {
          results[pointer] = value;
      }, descend);
      return results;
  };

  /**
   * Iterates over an object
   * Iterator: function (value, pointer) {}
   *
   * @param obj
   * @param {function} iterator
   * @param {function} descend
   */
  api.walk = function walk (obj, iterator, descend) {
      var refTokens = [];

      descend = descend || function (value) {
          var type = Object.prototype.toString.call(value);
          return type === '[object Object]' || type === '[object Array]';
      };

      (function next (cur) {
          each(cur, function (value, key) {
              refTokens.push(String(key));
              if (descend(value)) {
                  next(value);
              } else {
                  iterator(value, api.compile(refTokens));
              }
              refTokens.pop();
          });
      }(obj));
  };

  /**
   * Tests if an object has a value for a json pointer
   *
   * @param obj
   * @param pointer
   * @returns {boolean}
   */
  api.has = function has (obj, pointer) {
      try {
          api.get(obj, pointer);
      } catch (e) {
          return false;
      }
      return true;
  };

  /**
   * Escapes a reference token
   *
   * @param str
   * @returns {string}
   */
  api.escape = function escape (str) {
      return str.toString().replace(/~/g, '~0').replace(/\//g, '~1');
  };

  /**
   * Unescapes a reference token
   *
   * @param str
   * @returns {string}
   */
  api.unescape = function unescape (str) {
      return str.replace(/~1/g, '/').replace(/~0/g, '~');
  };

  /**
   * Converts a json pointer into a array of reference tokens
   *
   * @param pointer
   * @returns {Array}
   */
  api.parse = function parse (pointer) {
      if (pointer === '') { return []; }
      if (pointer.charAt(0) !== '/') { throw new Error('Invalid JSON pointer: ' + pointer); }
      return pointer.substring(1).split(/\//).map(api.unescape);
  };

  /**
   * Builds a json pointer from a array of reference tokens
   *
   * @param refTokens
   * @returns {string}
   */
  api.compile = function compile (refTokens) {
      if (refTokens.length === 0) { return ''; }
      return '/' + refTokens.map(api.escape).join('/');
  };
  return module.exports;
  })({exports:{}});

  var registry = UnitRegistry.newStandardRegistry();

  /**
   * Convert an entity to standardized units
   * @param {Object} entity Flux entity parameters object
   * @returns {Object} A copy of the entity with standardized units.
   */
  function convertUnits (entity) {
      // Create a clone so that we can modify the properties in place
      var entityClone = JSON.parse(JSON.stringify(entity));
      if (!entityClone.units) {
          return entityClone;
      }
      var units = entityClone.units;
      // Iterate over each unit specification and set it on the object
      for (var unitString in units) {
          // json-pointer requires leading slash, but for us it's optional
          var unitPath = unitString;
          if (unitString[0]!=='/') {
              unitPath = '/'+unitString;
          }
          if (!index.has(entityClone, unitPath)) {
              // TODO(Kyle): This should be a warning
              // https://vannevar.atlassian.net/browse/LIB3D-709
              // throw new FluxGeometryError('Invalid unit path ' + unitString);
          } else {
              var unitValue = index.get(entityClone, unitPath);
              if (unitValue == null) {
                  // TODO(Kyle): This should be a warning
                  // https://vannevar.atlassian.net/browse/LIB3D-709
                  // throw new FluxGeometryError('Invalid unit measure ' + unitString);
                  continue;
              }
              var unitMeasure = units[unitString];
              var func = registry.unitConversionFunc(unitMeasure, DEFAULT_UNITS);
              if (!func) {
                  // TODO(Kyle): This should be a warning
                  // https://vannevar.atlassian.net/browse/LIB3D-709
                  // throw new FluxGeometryError('Unknown units specified');
                  continue;
              }
              // _setPropIgnoreCase(prop, unitPath[j], func(unitValue));
              index.set(entityClone, unitPath, func(unitValue));
              entityClone.units[unitString] = DEFAULT_UNITS;
          }
      }
      return entityClone;
  }

  /**
   * Determine the material type that would be used for a given primitive
   * @param {String} primitive The name of the entity type
   * @returns {{func: *, material: number}} A function to convert a prim to geomtry and a material type
   */
  function resolveType (primitive) {

      var primFunction = primitiveHelpers[ primitive ];
      var materialType = MATERIAL_TYPES.PHONG;
      if (primitive === 'point') {
          materialType = MATERIAL_TYPES.POINT;
      }

      if (!primFunction) {
          primFunction = wirePrimitives[ primitive ];
          materialType = MATERIAL_TYPES.LINE;
      }
      if (!primFunction) {
          primFunction = sheetPrimitives[ primitive ];
          materialType = MATERIAL_TYPES.PHONG;
      }
      if (!primFunction) {
          primFunction = solidPrimitives[ primitive ];
          materialType = MATERIAL_TYPES.PHONG;
      }

      return { func: primFunction, material: materialType};
  }
  /**
   * Cache to prevent repetitive munging of arrays.
   * Stores all the acceptable primitive types for geometry.
   * @type {Array.<String>}
   */
  var validPrimsList = null;

  /**
   * Return a list of all the valid primitive strings
   * @return {Array.<String>} The list of primitives
   */
  function listValidPrims ( ) {
      if (validPrimsList) return validPrimsList;

      validPrimsList = Object.keys(primitiveHelpers).concat(
                          Object.keys(solidPrimitives),
                          Object.keys(sheetPrimitives),
                          Object.keys(wirePrimitives));
      return validPrimsList;
  }

  /**
   * Get the point size from a given entity
   * @param {Array} prims Array of point data
   * @returns {Number} Point size
   * @private
   */
  function _getPointSize(prims) {
      var size = DEFAULT_MATERIAL_PROPERTIES.point.size;
      // Just use the first point for now, can't set size per point.
      var prim = prims[0];
      if (!prim) return;
      var materialProperties = prim.materialProperties || (prim.attributes && prim.attributes.materialProperties);
      if (materialProperties && materialProperties.size) {
          size = materialProperties.size;
      }
      return size;
  }

  /**
   * Get the point size attenuation from a given entity
   * Determines whether the points change size based on distance to camera
   * @param {Array} prims Array of point data
   * @returns {Boolean} True when points change apparent size
   * @private
   */
  function _getPointSizeAttenuation(prims) {
      // default to fixed size for 1 point, and attenuate for multiples
      var sizeAttenuation = prims.length !== 1;
      // Just use the first point for now, can't set attenuation per point.
      var prim = prims[0];

      if (!prim) {
          return sizeAttenuation;
      }
      var materialProperties = prim.materialProperties || (prim.attributes && prim.attributes.materialProperties);
      if (materialProperties && materialProperties.sizeAttenuation) {
          sizeAttenuation = materialProperties.sizeAttenuation;
      }
      return sizeAttenuation;
  }

  /**
   * Create the point cloud mesh for all the input primitives
   * @param {Object} prims List of point primitive objects
   * @returns {THREE.Points} An Object3D containing points
   */
  function createPoints (prims) {
      var positions = new Float32Array(prims.length*3);
      var colors = new Float32Array(prims.length*3);
      for (var i=0;i<prims.length;i++) {
          var prim = convertUnits(prims[i]);
          positions[i*3] = prim.point[0];
          positions[i*3+1] = prim.point[1];
          positions[i*3+2] = prim.point[2]||0;
          // Get color or default color
          var color = _convertColor(_getEntityData(prim, 'color', DEFAULT_POINT_COLOR));
          colors[i*3] = color.r;
          colors[i*3+1] = color.g;
          colors[i*3+2] = color.b;
      }
      var geometry = new THREE.BufferGeometry();

      geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
      geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
      var materialProperties = {
          size: _getPointSize(prims),
          sizeAttenuation: _getPointSizeAttenuation(prims),
          vertexColors: THREE.VertexColors
      };
      var material = new THREE.PointsMaterial(materialProperties);
      var mesh = new THREE.Points( geometry, material );

      _convertToZUp( mesh );

      return mesh;
  }

  /**
   * Creates the ParaSolid Object
   *
   * @function createPrimitive
   * @return { THREE.Mesh } The created mesh
   * @throws FluxGeometryError if unsupported geometry is found
   *
   * @param { Object } data The data to create the object with
   * @param { GeometryResults } geomResult The container for the geometry and caches
   */
  function createPrimitive ( data, geomResult ) {
      var type = resolveType(data.primitive);

      // Check that the entity matches a schema, otherwise return no geometry
      if (!geomResult.checkSchema(data)) {
          return;
      }
      // Get a new clone of the data with different units for rendering
      var dataNormalized = convertUnits(data);

      var materialProperties = _findMaterialProperties( dataNormalized );
      var material = _createMaterial( type.material, materialProperties, geomResult.cubeArray );

      var primFunction = type.func;
      if (!primFunction) return;

      var mesh = primFunction( dataNormalized, material );

      if ( mesh ) {
          if (mesh.geometry) {
              geomResult._geometryMaterialMap[mesh.geometry.id] = material.name;
          }
          return cleanupMesh(mesh, dataNormalized, materialProperties);
      }

      throw new FluxGeometryError( 'Unsupported geometry type: ' + dataNormalized.primitive );

  }

  /**
   * Move the color from a material to a geometry.
   *
   * This allows meshes of different colors to be merged together.
   * Then the meshes can share a single material with per vertex color.
   *
   * @precondition The color object on the material should not be shared with other materials.
   * @param {THREE.Geometry} mesh The mesh containing geometry and material to manipulate
   * @private
   */
  function _moveMaterialColorToGeom(mesh) {
      var geom = mesh.geometry;
      var color = mesh.material.color;
      var color2 = color.clone();
      if (geom) {
          if (geom.type.indexOf('BufferGeometry') !== -1) {
              // Set the color as a buffer attribute
              var attrLen = geom.attributes.position.array.length;
              var colors = [];
              for (var i=0;i<attrLen;i+=3) {
                  colors.push(color.r);
                  colors.push(color.g);
                  colors.push(color.b);
              }
              geom.addAttribute( 'color', new THREE.BufferAttribute( new Float32Array(colors), 3 ) );
          } else if (geom.faces.length > 0) {
              // Set the color per face
              for (var f=0;f<geom.faces.length;f++) {
                  geom.faces[f].color = color2;
              }
          } else {
              // Lines have a colors array since they don't have faces
              for (var c=0;c<geom.vertices.length;c++) {
                  geom.colors[c] = color2;
              }
              geom.colorsNeedUpdate = true;
          }
          // Reset the color since it is now on the points.
          // In three.js color is multiplicative, so:
          // color = material color * vertex color
          // Hence after setting it on the mesh, it must be reset on the material.
          color.r = 1;
          color.g = 1;
          color.b = 1;
      }
  }

  /**
   * Do some post processing to the mesh to prep it for Flux
   * @param {THREE.Object3D} mesh Geometry and material object
   * @param {Object} data The entity object
   * @returns {THREE.Mesh} The processed mesh
   */
  function cleanupMesh(mesh, data) {
      // Text helper is ignored, due to it's own special materials.
      if (mesh.type !== "textHelper") {
          // Convert all geometry in the object tree
          mesh.traverse(function (child) {
              // Only convert the color for objects with material
              if (child.material) {
                  _moveMaterialColorToGeom(child);
              }
          });
      }

      _convertToZUp( mesh );

      if (!data) return;

      if ( data.origin ) _applyOrigin( mesh, data.origin );

      var axis = data.axis || data.direction || data.normal;

      if ( axis )
          mesh.lookAt( mesh.position.clone().add(
              new THREE.Vector3(
                  axis[ 0 ],
                  axis[ 1 ],
                  axis[ 2 ]
              )
          ));

      if ( data.attributes && data.attributes.tag ) mesh.userData.tag = data.attributes.tag;

      return mesh;
  }

  /**
   * Helper method to find the material properties on the data
   *
   * @function _findMaterialProperties
   * @private
   *
   * @return { Object } The material properties
   *
   * @param { Object } data The data used to construct the primitive
   */
  function _findMaterialProperties ( data ) {
      if ( data.attributes && data.attributes.materialProperties ) return data.attributes.materialProperties;
      else if ( data.materialProperties ) return data.materialProperties;
      else return {
          side: THREE.DoubleSide
      };
  }

  /**
   * Function to copy white listed properties from the input to the output
   * @param {Object} knownPropsMap Map from material properties to defualt values
   * @param {Object} propsIn Map from material properties to values
   * @param {Object} propsOut Subset of propsIn (return parameter)
   * @private
   */
  function _addKnownProps(knownPropsMap, propsIn, propsOut) {
      var knownProps = Object.keys(knownPropsMap);
      for (var i=0;i<knownProps.length;i++) {
          var prop = knownProps[i];
          var propValue = propsIn[prop];
          if (propValue != null) {
              propsOut[prop] = propValue;
          }
      }
  }

  /**
   * Modify a material to approximate a shading model with roughness
   * @param {Number} roughness        The roughness (measures shiny to matte)
   * @param {THREE.Material} material The material to edit
   * @param {Array} cubeArray         Array of textures
   * @private
   */
  function _applyRoughness(roughness, material, cubeArray) {
      if (roughness != null && cubeArray != null) {
          // There are some magic numbers here to simulate physically-accurate lighting.
          // This is only an artistic approximation of physically-accurate models.
          // TODO(aki): implement custom shader with better lighting model.
          material.envMap = cubeArray[Math.floor(Math.pow(roughness, 0.2) * 8)];
          // TODO(aki): Colored materials have clear white reflection.
          material.combine = THREE.AddOperation;
          material.reflectivity = 1 - roughness * 1;
          if (material.color.r !== 1 || material.color.g !== 1 || material.color.b !== 1) {
              var hsl = material.color.getHSL();
              material.reflectivity *= Math.pow(hsl.l, 2);
              material.specular = material.color.clone();
              material.color.multiplyScalar(Math.pow(roughness, 0.3));
              material.specular.multiplyScalar(1 - Math.pow(roughness, 2));
          }
      }
  }

  /**
   * Helper method to create the material from the material properties.
   * There are only a few types of materials used, this function takes a type
   * and returns a material with the properties object given
   *
   * @function _createMaterial
   * @private
   *
   * @return { THREE.Material } an instance of a Three.js material
   *
   * @param { Number } type               A member of the enumeration of material types
   *                                      present in the parasolid utility
   *
   * @param { Object } materialProperties A set of properties that functions
   *                                      as options for the material
   * @param {Array} cubeArray             Array of textures
   */
  function _createMaterial ( type, materialProperties, cubeArray ) {
      var material;
      // Just the properties that actually make sense for this material
      var props = {};
      // Add sidedness to local state if it is not present
      if ( materialProperties && !materialProperties.side ) {
          props.side = THREE.DoubleSide;
      }
      // Create a material of the appropriate type
      if ( type === MATERIAL_TYPES.PHONG ) {
          // Add material properties related to shadows. This is an offset
          // to prevent z-fighting with stencil buffer shadows and their host object
          props.polygonOffset = true;
          props.polygonOffsetFactor = 1;
          props.polygonOffsetUnits = 1;
          props.vertexColors = THREE.VertexColors;

          _addKnownProps(DEFAULT_MATERIAL_PROPERTIES.phong, materialProperties, props);
          material = new THREE.MeshPhongMaterial( props );
          material.color = _convertColor(materialProperties.color||DEFAULT_PHONG_COLOR);

          // Apply roughness (modifies color and other material object properties)
          _applyRoughness(materialProperties.roughness, material, cubeArray);
          if (materialProperties.roughness) props.roughness = materialProperties.roughness;

      } else if ( type === MATERIAL_TYPES.POINT ) {

          _addKnownProps(DEFAULT_MATERIAL_PROPERTIES.point, materialProperties, props);
          material = new THREE.PointsMaterial( props );
          material.color = _convertColor(materialProperties.color||DEFAULT_POINT_COLOR);

      } else if ( type === MATERIAL_TYPES.LINE ) {

          props.vertexColors = THREE.VertexColors;
          _addKnownProps(DEFAULT_MATERIAL_PROPERTIES.line, materialProperties, props);
          material = new THREE.LineBasicMaterial( props );
          material.color = _convertColor(materialProperties.color||DEFAULT_LINE_COLOR);
      }
      // Use the material's name to track uniqueness of it's source
      material.name = materialToJson(type, props);

      if (material.opacity < 1) {
          material.transparent = true;
      }

      return material;

  }

  /**
   * A helper to convert geometry to z-up world by setting ups axis and rotation
   * order
   *
   * @function _convertToZUp
   * @private
   *
   * @param { THREE.Object3D } object The object to convert to z-up
   */
  function _convertToZUp ( object ) {
      object.up.set( 0, 0, 1 );
      object.rotation.order = 'YXZ';
  }

  /**
   * A helper to apply an origin to a mesh
   *
   * @function _applyOrigin
   * @private
   *
   * @param { THREE.Mesh } mesh The mesh to receive the origin
   * @param { Array } origin The vector representing the origin
   */
  function _applyOrigin ( mesh, origin ) {
      mesh.position.set(
          origin[ 0 ],
          origin[ 1 ],
          origin[ 2 ] ? origin[ 2 ] : 0
      );
  }

  var $schema = "http://json-schema.org/draft-04/schema#";
  var scene = {"type":"object","properties":{"Entities":{"$ref":"#/scene/entities"},"Operations":{"$ref":"#/scene/operations"}},"required":["Entities","Operations"],"additionalProperties":false,"operations":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"op":{"$ref":"#/scene/operation"}},"additionalProperties":false}},"operation":{"oneOf":[{"type":"boolean"},{"type":"number"},{"type":"string"},{"type":"array","items":[{"type":"string"}],"minItems":1,"additionalItems":{"$ref":"#/scene/operation"}}]},"entities":{"type":"object","minProperties":1,"items":{"$ref":"#/scene/entity"}},"entity":{"oneOf":[{"type":"array","items":{"$ref":"#/scene/entity"}},{"oneOf":[{"$ref":"#/entities/empty"},{"$ref":"#/entities/number"},{"$ref":"#/entities/brep"},{"$ref":"#/entities/vector"},{"$ref":"#/entities/point"},{"$ref":"#/entities/plane"},{"$ref":"#/entities/affineTransform"},{"$ref":"#/entities/massProps"},{"$ref":"#/entities/line"},{"$ref":"#/entities/polyline"},{"$ref":"#/entities/circle"},{"$ref":"#/entities/ellipse"},{"$ref":"#/entities/curve"},{"$ref":"#/entities/arc"},{"$ref":"#/entities/rectangle"},{"$ref":"#/entities/polycurve"},{"$ref":"#/entities/polygonSet"},{"$ref":"#/entities/surface"},{"$ref":"#/entities/polysurface"},{"$ref":"#/entities/block"},{"$ref":"#/entities/torus"},{"$ref":"#/entities/sphere"},{"$ref":"#/entities/cylinder"},{"$ref":"#/entities/cone"},{"$ref":"#/entities/mesh"}]}]}};
  var types = {"brep_format":{"enum":["x_b","x_t","iges","step","sat","sab","stl"]},"index":{"type":"integer","minimum":0},"index-nonzero":{"type":"integer","minimum":0,"exclusiveMinimum":true},"direction":{"type":"array","items":{"type":"number"},"minItems":3,"maxItems":3},"angle":{"type":"number","fluxDimension":"angle"},"coordinate":{"type":"number","fluxDimension":"length"},"distance":{"type":"number","minimum":0,"fluxDimension":"length"},"area":{"type":"number","minimum":0,"fluxDimension":"area"},"volume":{"type":"number","minimum":0,"fluxDimension":"volume"},"distance-nonzero":{"type":"number","minimum":0,"exclusiveMinimum":true,"fluxDimension":"length"},"position":{"type":"array","items":{"$ref":"#/types/coordinate"},"minItems":3,"maxItems":3},"dimensions":{"type":"array","items":{"$ref":"#/types/distance-nonzero"},"minItems":3,"maxItems":3},"units":{"type":"object","additionalProperties":false,"patternProperties":{".*":{"type":"string"}}}};
  var entities = {"empty":{"type":"object","additionalProperties":false},"number":{"type":"number"},"brep":{"type":"object","properties":{"primitive":{"enum":["brep"]},"content":{"type":"string"},"format":{"$ref":"#/types/brep_format"},"isCompressed":{"type":"boolean"},"isBase64":{"type":"boolean"},"vertices":{"type":"array","items":{"$ref":"#/types/position"}},"faces":{"type":"array","items":{"type":"array","items":{"$ref":"#/types/index"},"minItems":3}},"attributes":{}},"required":["primitive","content","format"]},"vector":{"type":"object","properties":{"primitive":{"enum":["vector"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"coords":{"$ref":"#/types/position"}},"required":["primitive","coords"]},"point":{"type":"object","properties":{"primitive":{"enum":["point"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"point":{"$ref":"#/types/position"}},"required":["primitive","point"]},"plane":{"type":"object","properties":{"primitive":{"enum":["plane"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"normal":{"$ref":"#/types/direction"}},"required":["primitive","origin","normal"]},"affineTransform":{"type":"object","properties":{"primitive":{"enum":["affineTransform"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"mat":{"type":"array","items":{"type":"number"},"minItems":16,"maxItems":16,"fluxDimension":"affineMatrix"}},"required":["primitive","mat"],"additionalProperties":false},"massProps":{"type":"object","properties":{"primitive":{"enum":["massProps"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"mass":{"$ref":"#/types/distance"},"centerOfMass":{"$ref":"#/types/position"},"inertiaTensor":{"type":"array","items":{"$ref":"#/types/direction"},"minItems":3,"maxItems":3},"volume":{"$ref":"#/types/volume"},"surfaceArea":{"$ref":"#/types/area"},"length":{"$ref":"#/types/distance"},"circumference":{"$ref":"#/types/distance"}},"required":["primitive","mass","centerOfMass","inertiaTensor"],"additionalProperties":false},"line":{"type":"object","properties":{"primitive":{"enum":["line"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"start":{"$ref":"#/types/position"},"end":{"$ref":"#/types/position"}},"required":["primitive","start","end"]},"polyline":{"type":"object","properties":{"primitive":{"enum":["polyline"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"points":{"type":"array","items":{"$ref":"#/types/position"},"minItems":2}},"required":["primitive","points"]},"circle":{"type":"object","properties":{"primitive":{"enum":["circle"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"radius":{"$ref":"#/types/distance-nonzero"},"axis":{"$ref":"#/types/direction"}},"required":["primitive","origin","radius"]},"ellipse":{"type":"object","properties":{"primitive":{"enum":["ellipse"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"majorRadius":{"$ref":"#/types/distance-nonzero"},"minorRadius":{"$ref":"#/types/distance-nonzero"},"axis":{"$ref":"#/types/direction"},"reference":{"$ref":"#/types/direction"}},"required":["primitive","origin","majorRadius","minorRadius"]},"curve":{"type":"object","properties":{"primitive":{"enum":["curve"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"degree":{"$ref":"#/types/index-nonzero"},"controlPoints":{"type":"array","items":{"$ref":"#/types/position"}},"knots":{"type":"array","items":{"type":"number"}},"weights":{"type":"array","items":{"type":"number"}}},"required":["primitive","degree","controlPoints","knots"]},"arc":{"type":"object","properties":{"primitive":{"enum":["arc"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"start":{"$ref":"#/types/position"},"middle":{"$ref":"#/types/position"},"end":{"$ref":"#/types/position"}},"required":["primitive","start","middle","end"]},"rectangle":{"type":"object","properties":{"primitive":{"enum":["rectangle"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"dimensions":{"type":"array","items":{"$ref":"#/types/distance-nonzero"},"minItems":2,"maxItems":2,"additionalItems":false},"axis":{"$ref":"#/types/direction"},"reference":{"$ref":"#/types/direction"}},"required":["primitive","origin","dimensions"]},"polycurve":{"type":"object","properties":{"primitive":{"enum":["polycurve"]},"__repr__":{"type":"string"},"attributes":{},"curves":{"type":"array","minItems":1,"items":{"oneOf":[{"$ref":"#/entities/line"},{"$ref":"#/entities/polyline"},{"$ref":"#/entities/curve"},{"$ref":"#/entities/arc"}]}}},"required":["primitive","curves"]},"polygonSet":{"type":"object","properties":{"primitive":{"enum":["polygonSet"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"polygons":{"type":"array","items":{"type":"object","properties":{"boundary":{"$ref":"#/entities/polygonSet/polygon"},"holes":{"type":"array","items":{"$ref":"#/entities/polygonSet/polygon"}}},"required":["boundary","holes"],"additionalProperties":false},"minItems":1}},"required":["primitive","polygons"],"polygon":{"type":"array","items":{"$ref":"#/types/position"},"minItems":3}},"surface":{"type":"object","properties":{"primitive":{"enum":["surface"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"uDegree":{"$ref":"#/types/index-nonzero"},"vDegree":{"$ref":"#/types/index-nonzero"},"uKnots":{"type":"array","items":{"type":"number"}},"vKnots":{"type":"array","items":{"type":"number"}},"controlPoints":{"type":"array","items":{"type":"array","items":{"$ref":"#/types/position"}}},"weights":{"type":"array","items":{"type":"number"}}},"required":["primitive","uDegree","vDegree","uKnots","vKnots","controlPoints"]},"polysurface":{"type":"object","properties":{"primitive":{"enum":["polysurface"]},"__repr__":{"type":"string"},"attributes":{},"surfaces":{"type":"array","items":{"oneOf":[{"$ref":"#/entities/polygonSet"},{"$ref":"#/entities/surface"}]},"minItems":1}},"required":["primitive","surfaces"]},"block":{"type":"object","properties":{"primitive":{"enum":["block"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"dimensions":{"$ref":"#/types/dimensions"},"axis":{"$ref":"#/types/direction"},"reference":{"$ref":"#/types/direction"}},"required":["primitive","origin","dimensions"]},"torus":{"type":"object","properties":{"primitive":{"enum":["torus"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"majorRadius":{"$ref":"#/types/coordinate"},"minorRadius":{"$ref":"#/types/distance-nonzero"},"axis":{"$ref":"#/types/direction"}},"required":["primitive","origin","majorRadius","minorRadius"]},"sphere":{"type":"object","properties":{"primitive":{"enum":["sphere"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"radius":{"$ref":"#/types/distance-nonzero"}},"required":["primitive","origin","radius"]},"cylinder":{"type":"object","properties":{"primitive":{"enum":["cylinder"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"radius":{"$ref":"#/types/distance-nonzero"},"height":{"$ref":"#/types/distance-nonzero"},"axis":{"$ref":"#/types/direction"}},"required":["primitive","origin","radius","height"]},"cone":{"type":"object","properties":{"primitive":{"enum":["cone"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"origin":{"$ref":"#/types/position"},"radius":{"$ref":"#/types/distance-nonzero"},"height":{"$ref":"#/types/distance-nonzero"},"semiAngle":{"$ref":"#/types/angle"},"axis":{"$ref":"#/types/direction"}},"required":["primitive","origin","radius","height","semiAngle"]},"mesh":{"type":"object","properties":{"primitive":{"enum":["mesh"]},"__repr__":{"type":"string"},"attributes":{},"units":{"$ref":"#/types/units"},"vertices":{"type":"array","items":{"$ref":"#/types/position"}},"faces":{"type":"array","items":{"type":"array","items":{"$ref":"#/types/index"},"minItems":3}}},"required":["primitive","vertices","faces"]}};
  var psworker = {
  	$schema: $schema,
  	scene: scene,
  	types: types,
  	entities: entities,
  	"block-request": {"type":"object","properties":{"Label":{"type":"string"},"Inputs":{"type":"array","items":{"$ref":"#/block-request/input"}}},"required":["Inputs"],"input":{"anyOf":[{"type":"object","properties":{"Name":{"enum":["Query"]},"Value":{"$ref":"#/scene"}},"required":["Name","Value"]},{"type":"object","properties":{"Name":{"type":"string"},"Value":{}},"required":["Name","Value"]}]}},
  	"block-response": {"type":"object","properties":{"Done":{"type":"boolean"},"Stats":{"type":"object","properties":{"DecodingTime":{"type":"number"},"CpuTime":{"type":"number"},"EncodingTime":{"type":"number"},"Latency":{"type":"number"}},"additionalProperties":false},"Log":{"type":"string"},"Outputs":{"type":"object","properties":{"Results":{"$ref":"#/scene/entities"}},"additionalProperties":false},"Error":{"type":"string"}},"required":["Done","Stats"],"additionalProperties":false}
  };

  var schemaJson = Object.freeze({
  	$schema: $schema,
  	scene: scene,
  	types: types,
  	entities: entities,
  	default: psworker
  });

  var ajv_min = (function (module, global) {
  var exports = module.exports;
  /* ajv 3.8.10: Another JSON Schema Validator */
  !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.Ajv=e()}}(function(){var define,module,exports;return function e(r,t,a){function s(i,n){if(!t[i]){if(!r[i]){var l="function"==typeof require&&require;if(!n&&l)return l(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var h=t[i]={exports:{}};r[i][0].call(h.exports,function(e){var t=r[i][1][e];return s(t?t:e)},h,h.exports,e,r,t,a)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;a.length>i;i++)s(a[i]);return s}({1:[function(require,module,exports){"use strict";function setupAsync(e,r){r!==!1&&(r=!0);var t,a=e.async,s=e.transpile;switch(typeof s){case"string":var o=TRANSPILE[s];if(!o)throw new Error("bad transpiler: "+s);return e._transpileFunc=o(e,r);case"undefined":case"boolean":if("string"==typeof a){if(t=ASYNC[a],!t)throw new Error("bad async mode: "+a);return e.transpile=t(e,r)}for(var i=0;MODES.length>i;i++){var n=MODES[i];if(setupAsync(n,!1))return util.copy(n,e),e.transpile}throw new Error("generators, nodent and regenerator are not available");case"function":return e._transpileFunc=e.transpile;default:throw new Error("bad transpiler: "+s)}}function checkGenerators(opts,required){try{return eval("(function*(){})()"),!0}catch(e){if(required)throw new Error("generators not supported")}}function checkAsyncFunction(opts,required){try{return eval("(async function(){})()"),!0}catch(e){if(required)throw new Error("es7 async functions not supported")}}function getRegenerator(e,r){try{return regenerator||(regenerator=require("regenerator"),regenerator.runtime()),e.async&&e.async!==!0||(e.async="es7"),regeneratorTranspile}catch(t){if(r)throw new Error("regenerator not available")}}function regeneratorTranspile(e){return regenerator.compile(e).code}function getNodent(e,r){try{return nodent||(nodent=require("nodent")({log:!1,dontInstallRequireHook:!0})),"es7"!=e.async&&(e.async&&e.async!==!0&&console.warn("nodent transpiles only es7 async functions"),e.async="es7"),nodentTranspile}catch(t){if(r)throw new Error("nodent not available")}}function nodentTranspile(e){return nodent.compile(e,"",{promises:!0,sourcemap:!1}).code}function compileAsync(e,r){function t(e,r,a){function o(a){function o(a,o){if(a)return r(a);if(!s._refs[i]&&!s._schemas[i])try{s.addSchema(o,i)}catch(n){return void r(n)}t(e,r)}var i=a.missingSchema;if(s._refs[i]||s._schemas[i])return r(new Error("Schema "+i+" is loaded but"+a.missingRef+"cannot be resolved"));var n=s._loadingSchemas[i];n?"function"==typeof n?s._loadingSchemas[i]=[n,o]:n[n.length]=o:(s._loadingSchemas[i]=o,s._opts.loadSchema(i,function(e,r){var t=s._loadingSchemas[i];if(delete s._loadingSchemas[i],"function"==typeof t)t(e,r);else for(var a=0;t.length>a;a++)t[a](e,r)}))}function i(e,t){return a?void setTimeout(function(){r(e,t)}):r(e,t)}var n;try{n=s.compile(e)}catch(l){return void(l.missingSchema?o(l):i(l))}i(null,n)}var a,s=this;try{a=this._addSchema(e)}catch(o){return void setTimeout(function(){r(o)})}if(a.validate)setTimeout(function(){r(null,a.validate)});else{if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");t(e,r,!0)}}module.exports={setup:setupAsync,compile:compileAsync};var util=require("./compile/util"),ASYNC={"*":checkGenerators,"co*":checkGenerators,es7:checkAsyncFunction},TRANSPILE={nodent:getNodent,regenerator:getRegenerator},MODES=[{async:"co*"},{async:"es7",transpile:"nodent"},{async:"co*",transpile:"regenerator"}],regenerator,nodent},{"./compile/util":10}],2:[function(e,r,t){"use strict";var a=r.exports=function(){this._cache={}};a.prototype.put=function(e,r){this._cache[e]=r},a.prototype.get=function(e){return this._cache[e]},a.prototype.del=function(e){delete this._cache[e]},a.prototype.clear=function(){this._cache={}}},{}],3:[function(e,r,t){"use strict";r.exports={$ref:e("../dotjs/ref"),allOf:e("../dotjs/allOf"),anyOf:e("../dotjs/anyOf"),dependencies:e("../dotjs/dependencies"),"enum":e("../dotjs/enum"),format:e("../dotjs/format"),items:e("../dotjs/items"),maximum:e("../dotjs/_limit"),minimum:e("../dotjs/_limit"),maxItems:e("../dotjs/_limitItems"),minItems:e("../dotjs/_limitItems"),maxLength:e("../dotjs/_limitLength"),minLength:e("../dotjs/_limitLength"),maxProperties:e("../dotjs/_limitProperties"),minProperties:e("../dotjs/_limitProperties"),multipleOf:e("../dotjs/multipleOf"),not:e("../dotjs/not"),oneOf:e("../dotjs/oneOf"),pattern:e("../dotjs/pattern"),properties:e("../dotjs/properties"),required:e("../dotjs/required"),uniqueItems:e("../dotjs/uniqueItems"),validate:e("../dotjs/validate")}},{"../dotjs/_limit":13,"../dotjs/_limitItems":14,"../dotjs/_limitLength":15,"../dotjs/_limitProperties":16,"../dotjs/allOf":17,"../dotjs/anyOf":18,"../dotjs/dependencies":20,"../dotjs/enum":21,"../dotjs/format":22,"../dotjs/items":23,"../dotjs/multipleOf":24,"../dotjs/not":25,"../dotjs/oneOf":26,"../dotjs/pattern":27,"../dotjs/properties":29,"../dotjs/ref":30,"../dotjs/required":31,"../dotjs/uniqueItems":33,"../dotjs/validate":34}],4:[function(e,r,t){"use strict";r.exports=function a(e,r){if(e===r)return!0;var t,s=Array.isArray(e),o=Array.isArray(r);if(s&&o){if(e.length!=r.length)return!1;for(t=0;e.length>t;t++)if(!a(e[t],r[t]))return!1;return!0}if(s!=o)return!1;if(e&&r&&"object"==typeof e&&"object"==typeof r){var i=Object.keys(e);if(i.length!==Object.keys(r).length)return!1;for(t=0;i.length>t;t++)if(void 0===r[i[t]])return!1;for(t=0;i.length>t;t++)if(!a(e[i[t]],r[i[t]]))return!1;return!0}return!1}},{}],5:[function(e,r,t){"use strict";function a(e){e="full"==e?"full":"fast";var r=d.copy(a[e]);for(var t in a.compare)r[t]={validate:r[t],compare:a.compare[t]};return r}function s(e){var r=e.match(p);if(!r)return!1;var t=+r[1],a=+r[2];return t>=1&&12>=t&&a>=1&&m[t]>=a}function o(e,r){var t=e.match(v);if(!t)return!1;var a=t[1],s=t[2],o=t[3],i=t[5];return 23>=a&&59>=s&&59>=o&&(!r||i)}function i(e){var r=e.split(w);return s(r[0])&&o(r[1],!0)}function n(e){return 255>=e.length&&y.test(e)}function l(e){return j.test(e)&&g.test(e)}function c(e){try{return new RegExp(e),!0}catch(r){return!1}}function h(e,r){return e&&r?e>r?1:r>e?-1:e===r?0:void 0:void 0}function u(e,r){return e&&r&&(e=e.match(v),r=r.match(v),e&&r)?(e=e[1]+e[2]+e[3]+(e[4]||""),r=r[1]+r[2]+r[3]+(r[4]||""),e>r?1:r>e?-1:e===r?0:void 0):void 0}function f(e,r){if(e&&r){e=e.split(w),r=r.split(w);var t=h(e[0],r[0]);if(void 0!==t)return t||u(e[1],r[1])}}var d=e("./util"),p=/^\d\d\d\d-(\d\d)-(\d\d)$/,m=[0,31,29,31,30,31,30,31,31,30,31,30,31],v=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,y=/^[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?(\.[a-z](?:(?:[-0-9a-z]{0,61})?[0-9a-z])?)*$/i,g=/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?(?:\#(?:[a-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9a-f]{2})*)?$/i,P=/^(?:urn\:uuid\:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,E=/^(?:\/(?:[^~\/]|~0|~1)+)*(?:\/)?$|^\#(?:\/(?:[a-z0-9_\-\.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)+)*(?:\/)?$/i,b=/^(?:0|[1-9][0-9]*)(?:\#|(?:\/(?:[^~\/]|~0|~1)+)*(?:\/)?)$/;r.exports=a,a.fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,uri:/^(?:[a-z][a-z0-9+-.]*)?(?:\:|\/)\/?[^\s]*$/i,email:/^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:y,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:c,uuid:P,"json-pointer":E,"relative-json-pointer":b},a.full={date:s,time:o,"date-time":i,uri:l,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:n,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:c,uuid:P,"json-pointer":E,"relative-json-pointer":b},a.compare={date:h,time:u,"date-time":f};var w=/t|\s/i,j=/\/|\:/},{"./util":10}],6:[function(require,module,exports){"use strict";function compile(schema,root,localRefs,baseId){function localCompile(_schema,_root,localRefs,baseId){var isRoot=!_root||_root&&_root.schema==_schema;if(_root.schema!=root.schema)return compile.call(self,_schema,_root,localRefs,baseId);var $async=_schema.$async===!0;$async&&!opts.transpile&&async.setup(opts);var sourceCode=validateGenerator({isTop:!0,schema:_schema,isRoot:isRoot,baseId:baseId,root:_root,schemaPath:"",errSchemaPath:"#",errorPath:'""',RULES:RULES,validate:validateGenerator,util:util,resolve:resolve,resolveRef:resolveRef,usePattern:usePattern,useDefault:useDefault,useCustomRule:useCustomRule,opts:opts,formats:formats,self:self});sourceCode=vars(refVal,refValCode)+vars(patterns,patternCode)+vars(defaults,defaultCode)+vars(customRules,customRuleCode)+sourceCode,opts.beautify&&(beautify?sourceCode=beautify(sourceCode,opts.beautify):console.error('"npm install js-beautify" to use beautify option'));var validate,validateCode,transpile=opts._transpileFunc;try{validateCode=$async&&transpile?transpile(sourceCode):sourceCode,eval(validateCode),refVal[0]=validate}catch(e){throw console.error("Error compiling schema, function code:",validateCode),e}return validate.schema=_schema,validate.errors=null,validate.refs=refs,validate.refVal=refVal,validate.root=isRoot?validate:_root,$async&&(validate.async=!0),validate.sourceCode=sourceCode,validate}function resolveRef(e,r,t){r=resolve.url(e,r);var a,s,o=refs[r];if(void 0!==o)return a=refVal[o],s="refVal["+o+"]",resolvedRef(a,s);if(!t){var i=root.refs[r];if(void 0!==i)return a=root.refVal[i],s=addLocalRef(r,a),resolvedRef(a,s)}s=addLocalRef(r);var n=resolve.call(self,localCompile,root,r);if(!n){var l=localRefs&&localRefs[r];l&&(n=resolve.inlineRef(l,opts.inlineRefs)?l:compile.call(self,l,root,localRefs,e))}return n?(replaceLocalRef(r,n),resolvedRef(n,s)):void 0}function addLocalRef(e,r){var t=refVal.length;return refVal[t]=r,refs[e]=t,"refVal"+t}function replaceLocalRef(e,r){var t=refs[e];refVal[t]=r}function resolvedRef(e,r){return"object"==typeof e?{code:r,schema:e,inline:!0}:{code:r,async:e&&e.async}}function usePattern(e){var r=patternsHash[e];return void 0===r&&(r=patternsHash[e]=patterns.length,patterns[r]=e),"pattern"+r}function useDefault(e){switch(typeof e){case"boolean":case"number":return""+e;case"string":return util.toQuotedString(e);case"object":if(null===e)return"null";var r=stableStringify(e),t=defaultsHash[r];return void 0===t&&(t=defaultsHash[r]=defaults.length,defaults[t]=e),"default"+t}}function useCustomRule(e,r,t,a){var s,o=e.definition.compile,i=e.definition.inline,n=e.definition.macro;o?s=o.call(self,r,t):n?(s=n.call(self,r,t),opts.validateSchema!==!1&&self.validateSchema(s,!0)):s=i?i.call(self,a,e.keyword,r,t):e.definition.validate;var l=customRules.length;return customRules[l]=s,{code:"customRule"+l,validate:s}}var self=this,opts=this._opts,refVal=[void 0],refs={},patterns=[],patternsHash={},defaults=[],defaultsHash={},customRules=[];root=root||{schema:schema,refVal:refVal,refs:refs};var formats=this._formats,RULES=this.RULES;return localCompile(schema,root,localRefs,baseId)}function patternCode(e,r){return"var pattern"+e+" = new RegExp("+util.toQuotedString(r[e])+");"}function defaultCode(e){return"var default"+e+" = defaults["+e+"];"}function refValCode(e,r){return r[e]?"var refVal"+e+" = refVal["+e+"];":""}function customRuleCode(e){return"var customRule"+e+" = customRules["+e+"];"}function vars(e,r){if(!e.length)return"";for(var t="",a=0;e.length>a;a++)t+=r(a,e);return t}var resolve=require("./resolve"),util=require("./util"),stableStringify=require("json-stable-stringify"),async=require("../async"),beautify=function(){try{return require("js-beautify").js_beautify}catch(e){}}(),validateGenerator=require("../dotjs/validate");module.exports=compile;var co=require("co"),ucs2length=util.ucs2length,equal=require("./equal"),ValidationError=require("./validation_error")},{"../async":1,"../dotjs/validate":34,"./equal":4,"./resolve":7,"./util":10,"./validation_error":11,co:45,"json-stable-stringify":46}],7:[function(e,r,t){"use strict";function a(e,r,t){var o=this._refs[t];if("string"==typeof o){if(!this._refs[o])return a.call(this,e,r,o);o=this._refs[o]}if(o=o||this._schemas[t],o instanceof g)return n(o.schema,this._opts.inlineRefs)?o.schema:o.validate||this._compile(o);var i,l,c,h=s.call(this,r,t);return h&&(i=h.schema,r=h.root,c=h.baseId),i instanceof g?l=i.validate||e.call(this,i.schema,r,void 0,c):i&&(l=n(i,this._opts.inlineRefs)?i:e.call(this,i,r,void 0,c)),l}function s(e,r){var t=m.parse(r,!1,!0),a=u(t),s=h(e.schema.id);if(a!==s){var n=f(a),l=this._refs[n];if("string"==typeof l)return o.call(this,e,l,t);if(l instanceof g)l.validate||this._compile(l),e=l;else if(l=this._schemas[n],l instanceof g){if(l.validate||this._compile(l),n==f(r))return{schema:l,root:e,baseId:s};e=l}if(!e.schema)return;s=h(e.schema.id)}return i.call(this,t,s,e.schema,e)}function o(e,r,t){var a=s.call(this,e,r);if(a){var o=a.schema,n=a.baseId;return e=a.root,o.id&&(n=d(n,o.id)),i.call(this,t,n,o,e)}}function i(e,r,t,a){if(e.hash=e.hash||"","#/"==e.hash.slice(0,2)){for(var o=e.hash.split("/"),i=1;o.length>i;i++){var n=o[i];if(n){if(n=y.unescapeFragment(n),t=t[n],!t)break;if(t.id&&!P[n]&&(r=d(r,t.id)),t.$ref){var l=d(r,t.$ref),c=s.call(this,a,l);c&&(t=c.schema,a=c.root,r=c.baseId)}}}return t&&t!=a.schema?{schema:t,root:a,baseId:r}:void 0}}function n(e,r){return r===!1?!1:void 0===r||r===!0?l(e):r?c(e)<=r:void 0}function l(e){var r;if(Array.isArray(e)){for(var t=0;e.length>t;t++)if(r=e[t],"object"==typeof r&&!l(r))return!1}else for(var a in e){if("$ref"==a)return!1;if(r=e[a],"object"==typeof r&&!l(r))return!1}return!0}function c(e){var r,t=0;if(Array.isArray(e)){for(var a=0;e.length>a;a++)if(r=e[a],"object"==typeof r&&(t+=c(r)),t==1/0)return 1/0}else for(var s in e){if("$ref"==s)return 1/0;if(E[s])t++;else if(r=e[s],"object"==typeof r&&(t+=c(r)+1),t==1/0)return 1/0}return t}function h(e,r){r!==!1&&(e=f(e));var t=m.parse(e,!1,!0);return u(t)}function u(e){return(e.protocol||"")+(e.protocol?"//":"")+(e.host||"")+(e.path||"")+"#"}function f(e){return e?e.replace(b,""):""}function d(e,r){return r=f(r),m.resolve(e,r)}function p(e){function r(e,t,s){if(Array.isArray(e))for(var o=0;e.length>o;o++)r.call(this,e[o],t+"/"+o,s);else if(e&&"object"==typeof e){if("string"==typeof e.id){var i=s=s?m.resolve(s,e.id):e.id;i=f(i);var n=this._refs[i];if("string"==typeof n&&(n=this._refs[n]),n&&n.schema){if(!v(e,n.schema))throw new Error('id "'+i+'" resolves to more than one schema')}else if(i!=f(t))if("#"==i[0]){if(a[i]&&!v(e,a[i]))throw new Error('id "'+i+'" resolves to more than one schema');a[i]=e}else this._refs[i]=t}for(var l in e)r.call(this,e[l],t+"/"+y.escapeFragment(l),s)}}var t=f(e.id),a={};return r.call(this,e,h(t,!1),t),a}var m=e("url"),v=e("./equal"),y=e("./util"),g=e("./schema_obj");r.exports=a,a.normalizeId=f,a.fullPath=h,a.url=d,a.ids=p,a.inlineRef=n;var P=y.toHash(["properties","patternProperties","enum","dependencies","definitions"]),E=y.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]),b=/#\/?$/},{"./equal":4,"./schema_obj":9,"./util":10,url:43}],8:[function(e,r,t){"use strict";var a=e("./_rules"),s=e("./util");r.exports=function(){var e=[{type:"number",rules:["maximum","minimum","multipleOf"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","uniqueItems","items"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","properties"]},{rules:["$ref","enum","not","anyOf","oneOf","allOf"]}];return e.all=["type","additionalProperties","patternProperties"],e.keywords=["additionalItems","$schema","id","title","description","default"],e.types=["number","integer","string","array","object","boolean","null"],e.forEach(function(r){r.rules=r.rules.map(function(r){return e.all.push(r),{keyword:r,code:a[r]}})}),e.keywords=s.toHash(e.all.concat(e.keywords)),e.all=s.toHash(e.all),e.types=s.toHash(e.types),e}},{"./_rules":3,"./util":10}],9:[function(e,r,t){"use strict";function a(e){s.copy(e,this)}var s=e("./util");r.exports=a},{"./util":10}],10:[function(e,r,t){"use strict";function a(e,r){r=r||{};for(var t in e)r[t]=e[t];return r}function s(e,r,t){var a=t?" !== ":" === ",s=t?" || ":" && ",o=t?"!":"",i=t?"":"!";switch(e){case"null":return r+a+"null";case"array":return o+"Array.isArray("+r+")";case"object":return"("+o+r+s+"typeof "+r+a+'"object"'+s+i+"Array.isArray("+r+"))";case"integer":return"(typeof "+r+a+'"number"'+s+i+"("+r+" % 1))";default:return"typeof "+r+a+'"'+e+'"'}}function o(e,r){switch(e.length){case 1:return s(e[0],r,!0);default:var t="",a=n(e);a.array&&a.object&&(t=a["null"]?"(":"(!"+r+" || ",t+="typeof "+r+' !== "object")',delete a["null"],delete a.array,delete a.object),a.number&&delete a.integer;for(var o in a)t+=(t?" && ":"")+s(o,r,!0);return t}}function i(e){if(Array.isArray(e)){for(var r=[],t=0;e.length>t;t++){var a=e[t];$[a]&&(r[r.length]=a)}if(r.length)return r}else if($[e])return[e]}function n(e){for(var r={},t=0;e.length>t;t++)r[e[t]]=!0;return r}function l(e){return"number"==typeof e?"["+e+"]":S.test(e)?"."+e:"['"+e.replace(_,"\\$&")+"']"}function c(e){return e.replace(_,"\\$&")}function h(e){for(var r,t=0,a=e.length,s=0;a>s;)t++,r=e.charCodeAt(s++),r>=55296&&56319>=r&&a>s&&(r=e.charCodeAt(s),56320==(64512&r)&&s++);return t}function u(e,r){r+="[^0-9]";var t=e.match(new RegExp(r,"g"));return t?t.length:0}function f(e,r,t){return r+="([^0-9])",t=t.replace(/\$/g,"$$$$"),e.replace(new RegExp(r,"g"),t+"$1")}function d(e){return e.replace(R,"").replace(O,"").replace(k,"if (!($1))")}function p(e,r){var t=e.match(A);return t&&2===t.length?r?e.replace(q,"").replace(D,V):e.replace(I,"").replace(L,C):e}function m(e,r){for(var t in e)if(r[t])return!0}function v(e){return"'"+c(e)+"'"}function y(e,r,t,a){var s=t?"'/' + "+r+(a?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):a?"'[' + "+r+" + ']'":"'[\\'' + "+r+" + '\\']'";return E(e,s)}function g(e,r,t){var a=v(t?"/"+j(r):l(r));return E(e,a)}function P(e,r,t){var a=e.match(U);if(!a)throw new Error("Invalid relative JSON-pointer: "+e);var s=+a[1],o=a[2];if("#"==o){if(s>=r)throw new Error("Cannot access property/index "+s+" levels up, current level is "+r);return t[r-s]}if(s>r)throw new Error("Cannot access data "+s+" levels up, current level is "+r);var i="data"+(r-s||"");if(!o)return i;for(var n=i,c=o.split("/"),h=0;c.length>h;h++){var u=c[h];u&&(i+=l(x(u)),n+=" && "+i)}return n}function E(e,r){return'""'==e?r:(e+" + "+r).replace(/' \+ '/g,"")}function b(e){return x(decodeURIComponent(e))}function w(e){return encodeURIComponent(j(e))}function j(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function x(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}r.exports={copy:a,checkDataType:s,checkDataTypes:o,coerceToTypes:i,toHash:n,getProperty:l,escapeQuotes:c,ucs2length:h,varOccurences:u,varReplace:f,cleanUpCode:d,cleanUpVarErrors:p,schemaHasRules:m,stableStringify:e("json-stable-stringify"),toQuotedString:v,getPathExpr:y,getPath:g,getData:P,unescapeFragment:b,escapeFragment:w,escapeJsonPointer:j};var $=n(["string","number","integer","boolean","null"]),S=/^[a-z$_][a-z$_0-9]*$/i,_=/'|\\/g,R=/else\s*{\s*}/g,O=/if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,k=/if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g,A=/[^v\.]errors/g,I=/var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,q=/var errors = 0;|var vErrors = null;/g,L="return errors === 0;",C="validate.errors = null; return true;",D=/if \(errors === 0\) return true;\s*else throw new ValidationError\(vErrors\);/,V="return true;",U=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/},{"json-stable-stringify":46}],11:[function(e,r,t){"use strict";function a(e){this.message="validation failed",this.errors=e,this.ajv=this.validation=!0}r.exports=a,a.prototype=Object.create(Error.prototype),a.prototype.constructor=a},{}],12:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s;if(a+="var "+u+" = undefined;",e.opts.format===!1)return a+=" "+u+" = true; ";var f=e.schema.format,d=e.opts.v5&&f.$data,p="";if(d){var m=e.util.getData(f.$data,o,e.dataPathArr),v="format"+s,y="compare"+s;a+=" var "+v+" = formats["+m+"] , "+y+" = "+v+" && "+v+".compare;"}else{var v=e.formats[f];if(!v||!v.compare)return a+="  "+u+" = true; ";var y="formats"+e.util.getProperty(f)+".compare"}var g="formatMaximum"==r,P="exclusiveFormat"+(g?"Maximum":"Minimum"),E=e.schema[P],b=e.opts.v5&&E&&E.$data,w=g?"<":">",j="result"+s,x=e.opts.v5&&i.$data,$=x?e.util.getData(i.$data,o,e.dataPathArr):i;if(x&&(a+=" var schema"+s+" = "+$+"; ",$="schema"+s),b){var S=e.util.getData(E.$data,o,e.dataPathArr),_="exclusive"+s,R="op"+s,O="' + "+R+" + '";a+=" var schemaExcl"+s+" = "+S+"; ",S="schemaExcl"+s,a+=" if (typeof "+S+" != 'boolean' && "+S+" !== undefined) { "+u+" = false; ";var t=P,k=k||[];k.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"_exclusiveFormatLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: '"+P+" should be boolean' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var A=a;a=k.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+A+"]); ":" validate.errors = ["+A+"]; return false; ":" var err = "+A+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }  ",c&&(p+="}",a+=" else { "),x&&(a+=" if ("+$+" === undefined) "+u+" = true; else if (typeof "+$+" != 'string') "+u+" = false; else { ",p+="}"),d&&(a+=" if (!"+y+") "+u+" = true; else { ",p+="}"),a+=" var "+j+" = "+y+"("+h+",  ",a+=x?""+$:""+e.util.toQuotedString(i),a+=" ); if ("+j+" === undefined) "+u+" = false; var exclusive"+s+" = "+S+" === true; if ("+u+" === undefined) { "+u+" = exclusive"+s+" ? "+j+" "+w+" 0 : "+j+" "+w+"= 0; } if (!"+u+") var op"+s+" = exclusive"+s+" ? '"+w+"' : '"+w+"=';"}else{var _=E===!0,O=w;_||(O+="=");var R="'"+O+"'";x&&(a+=" if ("+$+" === undefined) "+u+" = true; else if (typeof "+$+" != 'string') "+u+" = false; else { ",p+="}"),d&&(a+=" if (!"+y+") "+u+" = true; else { ",p+="}"),a+=" var "+j+" = "+y+"("+h+",  ",a+=x?""+$:""+e.util.toQuotedString(i),a+=" ); if ("+j+" === undefined) "+u+" = false; if ("+u+" === undefined) "+u+" = "+j+" "+w,_||(a+="="),a+=" 0;"}a+=""+p+"if (!"+u+") { ";var t=r,k=k||[];k.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"_formatLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { limit:  ',a+=x?""+$:""+e.util.toQuotedString(i),a+="  } ",e.opts.messages!==!1&&(a+=" , message: 'should be "+O+' "',a+=x?"' + "+$+" + '":""+e.util.escapeQuotes(i),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=x?"validate.schema"+n:""+e.util.toQuotedString(i),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var A=a;return a=k.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+A+"]); ":" validate.errors = ["+A+"]; return false; ":" var err = "+A+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="}"}},{}],13:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i.$data,f=u?e.util.getData(i.$data,o,e.dataPathArr):i;u&&(a+=" var schema"+s+" = "+f+"; ",f="schema"+s);var d="maximum"==r,p=d?"exclusiveMaximum":"exclusiveMinimum",m=e.schema[p],v=e.opts.v5&&m&&m.$data,y=d?"<":">",g=d?">":"<";if(v){var P=e.util.getData(m.$data,o,e.dataPathArr),E="exclusive"+s,b="op"+s,w="' + "+b+" + '";a+=" var schemaExcl"+s+" = "+P+"; ",P="schemaExcl"+s,a+=" var exclusive"+s+"; if (typeof "+P+" != 'boolean' && typeof "+P+" != 'undefined') { ";var t=p,j=j||[];j.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: '"+p+" should be boolean' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var x=a;a=j.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+x+"]); ":" validate.errors = ["+x+"]; return false; ":" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else if( ",u&&(a+=" ("+f+" !== undefined && typeof "+f+" != 'number') || "),a+=" ((exclusive"+s+" = "+P+" === true) ? "+h+" "+g+"= "+f+" : "+h+" "+g+" "+f+")) { var op"+s+" = exclusive"+s+" ? '"+y+"' : '"+y+"=';"}else{var E=m===!0,w=y;E||(w+="=");var b="'"+w+"'";a+=" if ( ",u&&(a+=" ("+f+" !== undefined && typeof "+f+" != 'number') || "),a+=" "+h+" "+g,E&&(a+="="),a+=" "+f+") {"}var t=r,j=j||[];j.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { comparison: '+b+", limit: "+f+", exclusive: "+E+" } ",e.opts.messages!==!1&&(a+=" , message: 'should be "+w+" ",a+=u?"' + "+f:""+i+"'"),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var x=a;return a=j.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+x+"]); ":" validate.errors = ["+x+"]; return false; ":" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",c&&(a+=" else { "),a}},{}],14:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i.$data,f=u?e.util.getData(i.$data,o,e.dataPathArr):i;u&&(a+=" var schema"+s+" = "+f+"; ",f="schema"+s);var d="maxItems"==r?">":"<";a+="if ( ",u&&(a+=" ("+f+" !== undefined && typeof "+f+" != 'number') || "),a+=" "+h+".length "+d+" "+f+") { ";var t=r,p=p||[];p.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { limit: '+f+" } ",e.opts.messages!==!1&&(a+=" , message: 'should NOT have ",a+="maxItems"==r?"more":"less",a+=" than ",a+=u?"' + "+f+" + '":""+i,a+=" items' "),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var m=a;return a=p.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",c&&(a+=" else { "),a}},{}],15:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i.$data,f=u?e.util.getData(i.$data,o,e.dataPathArr):i;u&&(a+=" var schema"+s+" = "+f+"; ",f="schema"+s);var d="maxLength"==r?">":"<";a+="if ( ",u&&(a+=" ("+f+" !== undefined && typeof "+f+" != 'number') || "),a+=e.opts.unicode===!1?" "+h+".length ":" ucs2length("+h+") ",a+=" "+d+" "+f+") { ";var t=r,p=p||[];p.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { limit: '+f+" } ",e.opts.messages!==!1&&(a+=" , message: 'should NOT be ",a+="maxLength"==r?"longer":"shorter",a+=" than ",a+=u?"' + "+f+" + '":""+i,a+=" characters' "),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var m=a;return a=p.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",c&&(a+=" else { "),a}},{}],16:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i.$data,f=u?e.util.getData(i.$data,o,e.dataPathArr):i;
  u&&(a+=" var schema"+s+" = "+f+"; ",f="schema"+s);var d="maxProperties"==r?">":"<";a+="if ( ",u&&(a+=" ("+f+" !== undefined && typeof "+f+" != 'number') || "),a+=" Object.keys("+h+").length "+d+" "+f+") { ";var t=r,p=p||[];p.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { limit: '+f+" } ",e.opts.messages!==!1&&(a+=" , message: 'should NOT have ",a+="maxProperties"==r?"more":"less",a+=" than ",a+=u?"' + "+f+" + '":""+i,a+=" properties' "),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var m=a;return a=p.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",c&&(a+=" else { "),a}},{}],17:[function(e,r,t){"use strict";r.exports=function(e,r){var t=" ",a=e.schema[r],s=e.schemaPath+"."+r,o=e.errSchemaPath+"/"+r,i=!e.opts.allErrors,n=e.util.copy(e),l="";n.level++;var c=a;if(c)for(var h,u=-1,f=c.length-1;f>u;)h=c[u+=1],e.util.schemaHasRules(h,e.RULES.all)&&(n.schema=h,n.schemaPath=s+"["+u+"]",n.errSchemaPath=o+"/"+u,t+=" "+e.validate(n)+"  ",i&&(t+=" if (valid"+n.level+") { ",l+="}"));return i&&(t+=" "+l.slice(0,-1)),t=e.util.cleanUpCode(t)}},{}],18:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f="errs__"+s,d=e.util.copy(e),p="";d.level++;var m=i.every(function(r){return e.util.schemaHasRules(r,e.RULES.all)});if(m){a+=" var "+f+" = errors; var "+u+" = false;  ";var v=e.compositeRule;e.compositeRule=d.compositeRule=!0;var y=i;if(y)for(var g,P=-1,E=y.length-1;E>P;)g=y[P+=1],d.schema=g,d.schemaPath=n+"["+P+"]",d.errSchemaPath=l+"/"+P,a+=" "+e.validate(d)+" "+u+" = "+u+" || valid"+d.level+"; if (!"+u+") { ",p+="}";e.compositeRule=d.compositeRule=v,a+=" "+p+" if (!"+u+") {  var err =   ",e.createErrors!==!1?(a+=" { keyword: '"+(t||"anyOf")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: 'should match some schema in anyOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else {  errors = "+f+"; if (vErrors !== null) { if ("+f+") vErrors.length = "+f+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } "),a=e.util.cleanUpCode(a)}else c&&(a+=" if (true) { ");return a}},{}],19:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f=e.opts.v5&&i.$data,d=f?e.util.getData(i.$data,o,e.dataPathArr):i;f&&(a+=" var schema"+s+" = "+d+"; ",d="schema"+s),f||(a+=" var schema"+s+" = validate.schema"+n+";"),a+="var "+u+" = equal("+h+", schema"+s+"); if (!"+u+") {   ";var p=p||[];p.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"constant")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: 'should be equal to constant' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var m=a;return a=p.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }"}},{}],20:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="errs__"+s,f=e.util.copy(e),d="";f.level++;var p={},m={};for(P in i){var v=i[P],y=Array.isArray(v)?m:p;y[P]=v}a+="var "+u+" = errors;";var g=e.errorPath;a+="var missing"+s+";";for(var P in m){y=m[P],a+=" if ("+h+e.util.getProperty(P)+" !== undefined && ( ";var E=y;if(E)for(var b,w=-1,j=E.length-1;j>w;){b=E[w+=1],w&&(a+=" || ");var x=e.util.getProperty(b);a+=" ( "+h+x+" === undefined && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?b:x)+") ) "}a+=")) {  ";var $="missing"+s,S="' + "+$+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(g,$,!0):g+" + "+$);var _=_||[];_.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"dependencies")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { property: '"+e.util.escapeQuotes(P)+"', missingProperty: '"+S+"', depsCount: "+y.length+", deps: '"+e.util.escapeQuotes(1==y.length?y[0]:y.join(", "))+"' } ",e.opts.messages!==!1&&(a+=" , message: 'should have ",a+=1==y.length?"property "+e.util.escapeQuotes(y[0]):"properties "+e.util.escapeQuotes(y.join(", ")),a+=" when property "+e.util.escapeQuotes(P)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var R=a;a=_.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+R+"]); ":" validate.errors = ["+R+"]; return false; ":" var err = "+R+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }   ",c&&(d+="}",a+=" else { ")}e.errorPath=g;for(var P in p){var v=p[P];e.util.schemaHasRules(v,e.RULES.all)&&(a+=" valid"+f.level+" = true; if ("+h+"['"+P+"'] !== undefined) { ",f.schema=v,f.schemaPath=n+e.util.getProperty(P),f.errSchemaPath=l+"/"+e.util.escapeFragment(P),a+=" "+e.validate(f)+" }  ",c&&(a+=" if (valid"+f.level+") { ",d+="}"))}return c&&(a+="   "+d+" if ("+u+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],21:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f=e.opts.v5&&i.$data,d=f?e.util.getData(i.$data,o,e.dataPathArr):i;f&&(a+=" var schema"+s+" = "+d+"; ",d="schema"+s);var p="i"+s;f||(a+=" var schema"+s+" = validate.schema"+n+";"),a+="var "+u+";",f&&(a+=" if (schema"+s+" === undefined) "+u+" = true; else if (!Array.isArray(schema"+s+")) "+u+" = false; else {"),a+=""+u+" = false;for (var "+p+"=0; "+p+"<schema"+s+".length; "+p+"++) if (equal("+h+", schema"+s+"["+p+"])) { "+u+" = true; break; }",f&&(a+="  }  "),a+=" if (!"+u+") {   ";var m=m||[];m.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"enum")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: 'should be equal to one of the allowed values' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var v=a;return a=m.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",c&&(a+=" else { "),a}},{}],22:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||"");if(e.opts.format===!1)return c&&(a+=" if (true) { "),a;var u=e.opts.v5&&i.$data,f=u?e.util.getData(i.$data,o,e.dataPathArr):i;if(u&&(a+=" var schema"+s+" = "+f+"; ",f="schema"+s),u){var d="format"+s;a+=" var "+d+" = formats["+f+"]; var isObject"+s+" = typeof "+d+" == 'object' && !("+d+" instanceof RegExp) && "+d+".validate; if (isObject"+s+") { var async"+s+" = "+d+".async; "+d+" = "+d+".validate; } if (  ",u&&(a+=" ("+f+" !== undefined && typeof "+f+" != 'string') || "),a+=" ("+d+" && !(typeof "+d+" == 'function' ? ",a+=e.async?" (async"+s+" ? "+e.yieldAwait+" "+d+"("+h+") : "+d+"("+h+")) ":" "+d+"("+h+") ",a+=" : "+d+".test("+h+")))) {"}else{var d=e.formats[i];if(!d)return c&&(a+=" if (true) { "),a;var p="object"==typeof d&&!(d instanceof RegExp)&&d.validate;if(p){var m=d.async===!0;d=d.validate}if(m){if(!e.async)throw new Error("async format in sync schema");var v="formats"+e.util.getProperty(i)+".validate";a+=" if (!("+e.yieldAwait+" "+v+"("+h+"))) { "}else{a+=" if (! ";var v="formats"+e.util.getProperty(i);p&&(v+=".validate"),a+="function"==typeof d?" "+v+"("+h+") ":" "+v+".test("+h+") ",a+=") { "}}var y=y||[];y.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"format")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { format:  ',a+=u?""+f:""+e.util.toQuotedString(i),a+="  } ",e.opts.messages!==!1&&(a+=" , message: 'should match format \"",a+=u?"' + "+f+" + '":""+e.util.escapeQuotes(i),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+e.util.toQuotedString(i),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var g=a;return a=y.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+g+"]); ":" validate.errors = ["+g+"]; return false; ":" var err = "+g+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",c&&(a+=" else { "),a}},{}],23:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f="errs__"+s,d=e.util.copy(e),p="";d.level++;var m=d.dataLevel=e.dataLevel+1,v="data"+m;if(a+="var "+f+" = errors;var "+u+";",Array.isArray(i)){var y=e.schema.additionalItems;if(y===!1){a+=" "+u+" = "+h+".length <= "+i.length+"; ";var g=l;l=e.errSchemaPath+"/additionalItems",a+="  if (!"+u+") {   ";var P=P||[];P.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"additionalItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { limit: '+i.length+" } ",e.opts.messages!==!1&&(a+=" , message: 'should NOT have more than "+i.length+" items' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var E=a;a=P.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+E+"]); ":" validate.errors = ["+E+"]; return false; ":" var err = "+E+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",l=g,c&&(p+="}",a+=" else { ")}var b=i;if(b)for(var w,j=-1,x=b.length-1;x>j;)if(w=b[j+=1],e.util.schemaHasRules(w,e.RULES.all)){a+=" valid"+d.level+" = true; if ("+h+".length > "+j+") { ";var $=h+"["+j+"]";d.schema=w,d.schemaPath=n+"["+j+"]",d.errSchemaPath=l+"/"+j,d.errorPath=e.util.getPathExpr(e.errorPath,j,e.opts.jsonPointers,!0),d.dataPathArr[m]=j;var S=e.validate(d);a+=e.util.varOccurences(S,v)<2?" "+e.util.varReplace(S,v,$)+" ":" var "+v+" = "+$+"; "+S+" ",a+=" }  ",c&&(a+=" if (valid"+d.level+") { ",p+="}")}if("object"==typeof y&&e.util.schemaHasRules(y,e.RULES.all)){d.schema=y,d.schemaPath=e.schemaPath+".additionalItems",d.errSchemaPath=e.errSchemaPath+"/additionalItems",a+=" valid"+d.level+" = true; if ("+h+".length > "+i.length+") {  for (var i"+s+" = "+i.length+"; i"+s+" < "+h+".length; i"+s+"++) { ",d.errorPath=e.util.getPathExpr(e.errorPath,"i"+s,e.opts.jsonPointers,!0);var $=h+"[i"+s+"]";d.dataPathArr[m]="i"+s;var S=e.validate(d);a+=e.util.varOccurences(S,v)<2?" "+e.util.varReplace(S,v,$)+" ":" var "+v+" = "+$+"; "+S+" ",c&&(a+=" if (!valid"+d.level+") break; "),a+=" } }  ",c&&(a+=" if (valid"+d.level+") { ",p+="}")}}else if(e.util.schemaHasRules(i,e.RULES.all)){d.schema=i,d.schemaPath=n,d.errSchemaPath=l,a+="  for (var i"+s+" = 0; i"+s+" < "+h+".length; i"+s+"++) { ",d.errorPath=e.util.getPathExpr(e.errorPath,"i"+s,e.opts.jsonPointers,!0);var $=h+"[i"+s+"]";d.dataPathArr[m]="i"+s;var S=e.validate(d);a+=e.util.varOccurences(S,v)<2?" "+e.util.varReplace(S,v,$)+" ":" var "+v+" = "+$+"; "+S+" ",c&&(a+=" if (!valid"+d.level+") break; "),a+=" }  ",c&&(a+=" if (valid"+d.level+") { ",p+="}")}return c&&(a+=" "+p+" if ("+f+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],24:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i.$data,f=u?e.util.getData(i.$data,o,e.dataPathArr):i;u&&(a+=" var schema"+s+" = "+f+"; ",f="schema"+s),a+="var division"+s+";if (",u&&(a+=" "+f+" !== undefined && ( typeof "+f+" != 'number' || "),a+=" (division"+s+" = "+h+" / "+f+", ",a+=e.opts.multipleOfPrecision?" Math.abs(Math.round(division"+s+") - division"+s+") > 1e-"+e.opts.multipleOfPrecision+" ":" division"+s+" !== parseInt(division"+s+") ",a+=" ) ",u&&(a+="  )  "),a+=" ) {   ";var d=d||[];d.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"multipleOf")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { multipleOf: '+f+" } ",e.opts.messages!==!1&&(a+=" , message: 'should be multiple of ",a+=u?"' + "+f:""+i+"'"),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var p=a;return a=d.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",c&&(a+=" else { "),a}},{}],25:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="errs__"+s,f=e.util.copy(e);if(f.level++,e.util.schemaHasRules(i,e.RULES.all)){f.schema=i,f.schemaPath=n,f.errSchemaPath=l,a+=" var "+u+" = errors;  ";var d=e.compositeRule;e.compositeRule=f.compositeRule=!0,f.createErrors=!1;var p;f.opts.allErrors&&(p=f.opts.allErrors,f.opts.allErrors=!1),a+=" "+e.validate(f)+" ",f.createErrors=!0,p&&(f.opts.allErrors=p),e.compositeRule=f.compositeRule=d,a+=" if (valid"+f.level+") {   ";var m=m||[];m.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"not")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var v=a;a=m.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else {  errors = "+u+"; if (vErrors !== null) { if ("+u+") vErrors.length = "+u+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } ")}else a+="  var err =   ",e.createErrors!==!1?(a+=" { keyword: '"+(t||"not")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",c&&(a+=" if (false) { ");return a}},{}],26:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f="errs__"+s,d=e.util.copy(e),p="";d.level++,a+="var "+f+" = errors;var prevValid"+s+" = false;var "+u+" = false; ";var m=e.compositeRule;e.compositeRule=d.compositeRule=!0;var v=i;if(v)for(var y,g=-1,P=v.length-1;P>g;)y=v[g+=1],e.util.schemaHasRules(y,e.RULES.all)?(d.schema=y,d.schemaPath=n+"["+g+"]",d.errSchemaPath=l+"/"+g,a+=" "+e.validate(d)+" "):a+=" var valid"+d.level+" = true; ",g&&(a+=" if (valid"+d.level+" && prevValid"+s+") "+u+" = false; else { ",p+="}"),a+=" if (valid"+d.level+") "+u+" = prevValid"+s+" = true;";e.compositeRule=d.compositeRule=m,a+=""+p+"if (!"+u+") {   ";var E=E||[];E.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"oneOf")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: {} ',e.opts.messages!==!1&&(a+=" , message: 'should match exactly one schema in oneOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var b=a;return a=E.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+b+"]); ":" validate.errors = ["+b+"]; return false; ":" var err = "+b+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} else {  errors = "+f+"; if (vErrors !== null) { if ("+f+") vErrors.length = "+f+"; else vErrors = null; }",e.opts.allErrors&&(a+=" } "),a}},{}],27:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u=e.opts.v5&&i.$data,f=u?e.util.getData(i.$data,o,e.dataPathArr):i;u&&(a+=" var schema"+s+" = "+f+"; ",f="schema"+s);var d=u?"(new RegExp("+f+"))":e.usePattern(i);a+="if ( ",u&&(a+=" ("+f+" !== undefined && typeof "+f+" != 'string') || "),a+=" !"+d+".test("+h+") ) {   ";var p=p||[];p.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"pattern")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { pattern:  ',a+=u?""+f:""+e.util.toQuotedString(i),a+="  } ",e.opts.messages!==!1&&(a+=" , message: 'should match pattern \"",a+=u?"' + "+f+" + '":""+e.util.escapeQuotes(i),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=u?"validate.schema"+n:""+e.util.toQuotedString(i),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var m=a;return a=p.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+="} ",c&&(a+=" else { "),a}},{}],28:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f="key"+s,d="patternMatched"+s,p="";a+="var "+u+" = true;";var m=i;if(m)for(var v,y=-1,g=m.length-1;g>y;){v=m[y+=1],a+=" var "+d+" = false; for (var "+f+" in "+h+") { "+d+" = "+e.usePattern(v)+".test("+f+"); if ("+d+") break; } ";var P=e.util.escapeQuotes(v);a+=" if (!"+d+") { "+u+" = false;  var err =   ",e.createErrors!==!1?(a+=" { keyword: '"+(t||"patternRequired")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { missingPattern: '"+P+"' } ",e.opts.messages!==!1&&(a+=" , message: 'should have property matching pattern \\'"+P+"\\'' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ",c&&(p+="}",a+=" else { ")}return a+=""+p}},{}],29:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f="errs__"+s,d=e.util.copy(e),p="";d.level++;var m=d.dataLevel=e.dataLevel+1,v="data"+m,y=Object.keys(i||{}),g=e.schema.patternProperties||{},P=Object.keys(g),E=e.schema.additionalProperties,b=y.length||P.length,w=E===!1,j="object"==typeof E&&Object.keys(E).length,x=e.opts.removeAdditional,$=w||j||x,S=e.schema.required;if(S&&(!e.opts.v5||!S.$data)&&e.opts.loopRequired>S.length)var _=e.util.toHash(S);if(e.opts.v5)var R=e.schema.patternGroups||{},O=Object.keys(R);if(a+="var "+f+" = errors;var valid"+d.level+" = true;",$){if(a+=" for (var key"+s+" in "+h+") { ",b){if(a+=" var isAdditional"+s+" = !(false ",y.length)if(y.length>5)a+=" || validate.schema"+n+"[key"+s+"] ";else{var k=y;if(k)for(var A,I=-1,q=k.length-1;q>I;)A=k[I+=1],a+=" || key"+s+" == "+e.util.toQuotedString(A)+" "}if(P.length){var L=P;if(L)for(var C,D=-1,V=L.length-1;V>D;)C=L[D+=1],a+=" || "+e.usePattern(C)+".test(key"+s+") "}if(e.opts.v5&&O&&O.length){var U=O;if(U)for(var z,D=-1,T=U.length-1;T>D;)z=U[D+=1],a+=" || "+e.usePattern(z)+".test(key"+s+") "}a+=" ); if (isAdditional"+s+") { "}if("all"==x)a+=" delete "+h+"[key"+s+"]; ";else{var M=e.errorPath,N="' + key"+s+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,"key"+s,e.opts.jsonPointers)),w)if(x)a+=" delete "+h+"[key"+s+"]; ";else{a+=" valid"+d.level+" = false; ";var F=l;l=e.errSchemaPath+"/additionalProperties";var Q=Q||[];Q.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"additionalProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { additionalProperty: '"+N+"' } ",e.opts.messages!==!1&&(a+=" , message: 'should NOT have additional properties' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var H=a;a=Q.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+H+"]); ":" validate.errors = ["+H+"]; return false; ":" var err = "+H+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=F,c&&(a+=" break; ")}else if(j)if("failing"==x){a+=" var "+f+" = errors;  ";var G=e.compositeRule;e.compositeRule=d.compositeRule=!0,d.schema=E,d.schemaPath=e.schemaPath+".additionalProperties",d.errSchemaPath=e.errSchemaPath+"/additionalProperties",d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,"key"+s,e.opts.jsonPointers);var J=h+"[key"+s+"]";d.dataPathArr[m]="key"+s;var K=e.validate(d);a+=e.util.varOccurences(K,v)<2?" "+e.util.varReplace(K,v,J)+" ":" var "+v+" = "+J+"; "+K+" ",a+=" if (!valid"+d.level+") { errors = "+f+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+h+"[key"+s+"]; }  ",e.compositeRule=d.compositeRule=G}else{d.schema=E,d.schemaPath=e.schemaPath+".additionalProperties",d.errSchemaPath=e.errSchemaPath+"/additionalProperties",d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,"key"+s,e.opts.jsonPointers);var J=h+"[key"+s+"]";d.dataPathArr[m]="key"+s;var K=e.validate(d);a+=e.util.varOccurences(K,v)<2?" "+e.util.varReplace(K,v,J)+" ":" var "+v+" = "+J+"; "+K+" ",c&&(a+=" if (!valid"+d.level+") break; ")}e.errorPath=M}b&&(a+=" } "),a+=" }  ",c&&(a+=" if (valid"+d.level+") { ",p+="}")}var B=e.opts.useDefaults&&!e.compositeRule;if(y.length){var Y=y;if(Y)for(var A,Z=-1,W=Y.length-1;W>Z;){A=Y[Z+=1];var X=i[A];if(e.util.schemaHasRules(X,e.RULES.all)){var ee=e.util.getProperty(A),J=h+ee,re=B&&void 0!==X["default"];d.schema=X,d.schemaPath=n+ee,d.errSchemaPath=l+"/"+e.util.escapeFragment(A),d.errorPath=e.util.getPath(e.errorPath,A,e.opts.jsonPointers),d.dataPathArr[m]=e.util.toQuotedString(A);var K=e.validate(d);if(e.util.varOccurences(K,v)<2){K=e.util.varReplace(K,v,J);var te=J}else{var te=v;a+=" var "+v+" = "+J+"; "}if(re)a+=" "+K+" ";else{if(_&&_[A]){a+=" if ("+te+" === undefined) { valid"+d.level+" = false; ";var M=e.errorPath,F=l,ae=e.util.escapeQuotes(A);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(M,A,e.opts.jsonPointers)),l=e.errSchemaPath+"/required";var Q=Q||[];Q.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"required")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { missingProperty: '"+ae+"' } ",e.opts.messages!==!1&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+ae+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var H=a;a=Q.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+H+"]); ":" validate.errors = ["+H+"]; return false; ":" var err = "+H+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=F,e.errorPath=M,a+=" } else { "}else a+=c?" if ("+te+" === undefined) { valid"+d.level+" = true; } else { ":" if ("+te+" !== undefined) { ";a+=" "+K+" } "}}c&&(a+=" if (valid"+d.level+") { ",p+="}")}}var se=P;if(se)for(var C,oe=-1,ie=se.length-1;ie>oe;){C=se[oe+=1];var X=g[C];if(e.util.schemaHasRules(X,e.RULES.all)){d.schema=X,d.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(C),d.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(C),a+=" for (var key"+s+" in "+h+") { if ("+e.usePattern(C)+".test(key"+s+")) { ",d.errorPath=e.util.getPathExpr(e.errorPath,"key"+s,e.opts.jsonPointers);var J=h+"[key"+s+"]";d.dataPathArr[m]="key"+s;var K=e.validate(d);a+=e.util.varOccurences(K,v)<2?" "+e.util.varReplace(K,v,J)+" ":" var "+v+" = "+J+"; "+K+" ",c&&(a+=" if (!valid"+d.level+") break; "),a+=" } ",c&&(a+=" else valid"+d.level+" = true; "),a+=" }  ",c&&(a+=" if (valid"+d.level+") { ",p+="}")}}if(e.opts.v5){var ne=O;if(ne)for(var z,le=-1,ce=ne.length-1;ce>le;){z=ne[le+=1];var he=R[z],X=he.schema;if(e.util.schemaHasRules(X,e.RULES.all)){d.schema=X,d.schemaPath=e.schemaPath+".patternGroups"+e.util.getProperty(z)+".schema",d.errSchemaPath=e.errSchemaPath+"/patternGroups/"+e.util.escapeFragment(z)+"/schema",a+=" var pgPropCount"+s+" = 0; for (var key"+s+" in "+h+") { if ("+e.usePattern(z)+".test(key"+s+")) { pgPropCount"+s+"++; ",d.errorPath=e.util.getPathExpr(e.errorPath,"key"+s,e.opts.jsonPointers);var J=h+"[key"+s+"]";d.dataPathArr[m]="key"+s;var K=e.validate(d);a+=e.util.varOccurences(K,v)<2?" "+e.util.varReplace(K,v,J)+" ":" var "+v+" = "+J+"; "+K+" ",c&&(a+=" if (!valid"+d.level+") break; "),a+=" } ",c&&(a+=" else valid"+d.level+" = true; "),a+=" }  ",c&&(a+=" if (valid"+d.level+") { ",p+="}");var ue=he.minimum,fe=he.maximum;if(void 0!==ue||void 0!==fe){a+=" var "+u+" = true; ";var F=l;if(void 0!==ue){var de=ue,pe="minimum",me="less";a+=" "+u+" = pgPropCount"+s+" >= "+ue+"; ",l=e.errSchemaPath+"/patternGroups/minimum",a+="  if (!"+u+") {   ";var Q=Q||[];Q.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"patternGroups")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { reason: '"+pe+"', limit: "+de+", pattern: '"+e.util.escapeQuotes(z)+"' } ",e.opts.messages!==!1&&(a+=" , message: 'should NOT have "+me+" than "+de+' properties matching pattern "'+e.util.escapeQuotes(z)+"\"' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var H=a;a=Q.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+H+"]); ":" validate.errors = ["+H+"]; return false; ":" var err = "+H+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",void 0!==fe&&(a+=" else ")}if(void 0!==fe){var de=fe,pe="maximum",me="more";a+=" "+u+" = pgPropCount"+s+" <= "+fe+"; ",l=e.errSchemaPath+"/patternGroups/maximum",a+="  if (!"+u+") {   ";var Q=Q||[];Q.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"patternGroups")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { reason: '"+pe+"', limit: "+de+", pattern: '"+e.util.escapeQuotes(z)+"' } ",e.opts.messages!==!1&&(a+=" , message: 'should NOT have "+me+" than "+de+' properties matching pattern "'+e.util.escapeQuotes(z)+"\"' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var H=a;a=Q.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+H+"]); ":" validate.errors = ["+H+"]; return false; ":" var err = "+H+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } "}l=F,c&&(a+=" if ("+u+") { ",p+="}")}}}}return c&&(a+=" "+p+" if ("+f+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],30:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a,s,o=" ",i=e.level,n=e.dataLevel,l=e.schema[r],c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,u="data"+(n||""),f="valid"+i;if("#"==l||"#/"==l)e.isRoot?(a=e.async,s="validate"):(a=e.root.schema.$async===!0,s="root.refVal[0]");else{var d=e.resolveRef(e.baseId,l,e.isRoot);if(void 0===d){var p="can't resolve reference "+l+" from id "+e.baseId;if("fail"==e.opts.missingRefs){console.log(p);var m=m||[];m.push(o),o="",e.createErrors!==!1?(o+=" { keyword: '"+(t||"$ref")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+c+"\" , params: { ref: '"+e.util.escapeQuotes(l)+"' } ",e.opts.messages!==!1&&(o+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(l)+"' "),e.opts.verbose&&(o+=" , schema: "+e.util.toQuotedString(l)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+u+" "),o+=" } "):o+=" {} ";var v=o;o=m.pop(),o+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",h&&(o+=" if (false) { ")}else{if("ignore"!=e.opts.missingRefs){var y=new Error(p);throw y.missingRef=e.resolve.url(e.baseId,l),y.missingSchema=e.resolve.normalizeId(e.resolve.fullPath(y.missingRef)),y}console.log(p),h&&(o+=" if (true) { ")}}else if(d.inline){var g=e.util.copy(e);g.level++,g.schema=d.schema,g.schemaPath="",g.errSchemaPath=l;var P=e.validate(g).replace(/validate\.schema/g,d.code);o+=" "+P+" ",h&&(o+=" if (valid"+g.level+") { ")}else a=d.async===!0,s=d.code}if(s){var m=m||[];m.push(o),o="",o+=e.opts.passContext?" "+s+".call(this, ":" "+s+"( ",o+=" "+u+", (dataPath || '')",'""'!=e.errorPath&&(o+=" + "+e.errorPath),o+=n?" , data"+(n-1||"")+" , "+e.dataPathArr[n]+" ":" , parentData , parentDataProperty ",o+=")  ";var E=o;if(o=m.pop(),a){if(!e.async)throw new Error("async schema referenced by sync schema");o+=" try { ",h&&(o+="var "+f+" ="),o+=" "+e.yieldAwait+" "+E+"; } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; } ",h&&(o+=" if ("+f+") { ")}else o+=" if (!"+E+") { if (vErrors === null) vErrors = "+s+".errors; else vErrors = vErrors.concat("+s+".errors); errors = vErrors.length; } ",h&&(o+=" else { ")}return o}},{}],31:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f=e.opts.v5&&i.$data,d=f?e.util.getData(i.$data,o,e.dataPathArr):i;if(f&&(a+=" var schema"+s+" = "+d+"; ",d="schema"+s),!f)if(e.opts.loopRequired>i.length&&e.schema.properties&&Object.keys(e.schema.properties).length){var p=[],m=i;if(m)for(var v,y=-1,g=m.length-1;g>y;){v=m[y+=1];var P=e.schema.properties[v];P&&e.util.schemaHasRules(P,e.RULES.all)||(p[p.length]=v)}}else var p=i;if(f||p.length){var E=e.errorPath,b=f||p.length>=e.opts.loopRequired;if(c)if(a+=" var missing"+s+"; ",b){f||(a+=" var schema"+s+" = validate.schema"+n+"; ");var w="i"+s,j="schema"+s+"["+w+"]",x="' + "+j+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,j,e.opts.jsonPointers)),a+=" var "+u+" = true; ",f&&(a+=" if (schema"+s+" === undefined) "+u+" = true; else if (!Array.isArray(schema"+s+")) "+u+" = false; else {"),a+=" for (var "+w+" = 0; "+w+" < schema"+s+".length; "+w+"++) { "+u+" = "+h+"[schema"+s+"["+w+"]] !== undefined; if (!"+u+") break; } ",f&&(a+="  }  "),a+="  if (!"+u+") {   ";var $=$||[];$.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"required")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { missingProperty: '"+x+"' } ",
  e.opts.messages!==!1&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+x+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var S=a;a=$.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+S+"]); ":" validate.errors = ["+S+"]; return false; ":" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { "}else{a+=" if ( ";var _=p;if(_)for(var R,w=-1,O=_.length-1;O>w;){R=_[w+=1],w&&(a+=" || ");var k=e.util.getProperty(R);a+=" ( "+h+k+" === undefined && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?R:k)+") ) "}a+=") {  ";var j="missing"+s,x="' + "+j+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(E,j,!0):E+" + "+j);var $=$||[];$.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"required")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { missingProperty: '"+x+"' } ",e.opts.messages!==!1&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+x+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var S=a;a=$.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+S+"]); ":" validate.errors = ["+S+"]; return false; ":" var err = "+S+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { "}else if(b){f||(a+=" var schema"+s+" = validate.schema"+n+"; ");var w="i"+s,j="schema"+s+"["+w+"]",x="' + "+j+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,j,e.opts.jsonPointers)),f&&(a+=" if (schema"+s+" && !Array.isArray(schema"+s+")) {  var err =   ",e.createErrors!==!1?(a+=" { keyword: '"+(t||"required")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { missingProperty: '"+x+"' } ",e.opts.messages!==!1&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+x+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (schema"+s+" !== undefined) { "),a+=" for (var "+w+" = 0; "+w+" < schema"+s+".length; "+w+"++) { if ("+h+"[schema"+s+"["+w+"]] === undefined) {  var err =   ",e.createErrors!==!1?(a+=" { keyword: '"+(t||"required")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { missingProperty: '"+x+"' } ",e.opts.messages!==!1&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+x+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",f&&(a+="  }  ")}else{var A=p;if(A)for(var v,w=-1,I=A.length-1;I>w;){v=A[w+=1];var k=e.util.getProperty(v),x=e.util.escapeQuotes(v);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(E,v,e.opts.jsonPointers)),a+=" if ("+h+k+" === undefined) {  var err =   ",e.createErrors!==!1?(a+=" { keyword: '"+(t||"required")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+"\" , params: { missingProperty: '"+x+"' } ",e.opts.messages!==!1&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+x+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}e.errorPath=E}else c&&(a+=" if (true) {");return a}},{}],32:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f="errs__"+s,d=e.util.copy(e),p="";d.level++;var m,v="ifPassed"+e.level;a+="var "+v+";";var y=i;if(y)for(var g,P=-1,E=y.length-1;E>P;){if(g=y[P+=1],P&&!m&&(a+=" if (!"+v+") { ",p+="}"),g["if"]&&e.util.schemaHasRules(g["if"],e.RULES.all)){a+=" var "+f+" = errors;   ";var b=e.compositeRule;if(e.compositeRule=d.compositeRule=!0,d.createErrors=!1,d.schema=g["if"],d.schemaPath=n+"["+P+"].if",d.errSchemaPath=l+"/"+P+"/if",a+=" "+e.validate(d)+" ",d.createErrors=!0,e.compositeRule=d.compositeRule=b,a+=" "+v+" = valid"+d.level+"; if ("+v+") {  ","boolean"==typeof g.then){if(g.then===!1){var w=w||[];w.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"switch")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { caseIndex: '+P+" } ",e.opts.messages!==!1&&(a+=" , message: 'should pass \"switch\" keyword validation' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var j=a;a=w.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+j+"]); ":" validate.errors = ["+j+"]; return false; ":" var err = "+j+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}a+=" var valid"+d.level+" = "+g.then+"; "}else d.schema=g.then,d.schemaPath=n+"["+P+"].then",d.errSchemaPath=l+"/"+P+"/then",a+=" "+e.validate(d)+" ";a+="  } else {  errors = "+f+"; if (vErrors !== null) { if ("+f+") vErrors.length = "+f+"; else vErrors = null; } } "}else if(a+=" "+v+" = true;  ","boolean"==typeof g.then){if(g.then===!1){var w=w||[];w.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"switch")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { caseIndex: '+P+" } ",e.opts.messages!==!1&&(a+=" , message: 'should pass \"switch\" keyword validation' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var j=a;a=w.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+j+"]); ":" validate.errors = ["+j+"]; return false; ":" var err = "+j+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}a+=" var valid"+d.level+" = "+g.then+"; "}else d.schema=g.then,d.schemaPath=n+"["+P+"].then",d.errSchemaPath=l+"/"+P+"/then",a+=" "+e.validate(d)+" ";m=g["continue"]}return a+=""+p+"var "+u+" = valid"+d.level+"; ",a=e.util.cleanUpCode(a)}},{}],33:[function(e,r,t){"use strict";r.exports=function(e,r){var t,a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+"."+r,l=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(o||""),u="valid"+s,f=e.opts.v5&&i.$data,d=f?e.util.getData(i.$data,o,e.dataPathArr):i;if(f&&(a+=" var schema"+s+" = "+d+"; ",d="schema"+s),(i||f)&&e.opts.uniqueItems!==!1){f&&(a+=" var "+u+"; if ("+d+" === false || "+d+" === undefined) "+u+" = true; else if (typeof "+d+" != 'boolean') "+u+" = false; else { "),a+=" var "+u+" = true; if ("+h+".length > 1) { var i = "+h+".length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal("+h+"[i], "+h+"[j])) { "+u+" = false; break outer; } } } } ",f&&(a+="  }  "),a+=" if (!"+u+") {   ";var p=p||[];p.push(a),a="",e.createErrors!==!1?(a+=" { keyword: '"+(t||"uniqueItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+l+'" , params: { i: i, j: j } ',e.opts.messages!==!1&&(a+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),e.opts.verbose&&(a+=" , schema:  ",a+=f?"validate.schema"+n:""+i,a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),a+=" } "):a+=" {} ";var m=a;a=p.pop(),a+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",c&&(a+=" else { ")}else c&&(a+=" if (true) { ");return a}},{}],34:[function(e,r,t){"use strict";r.exports=function(e,r){function t(e){for(var r=0;e.rules.length>r;r++)if(a(e.rules[r]))return!0}function a(r){return void 0!==e.schema[r.keyword]||"properties"==r.keyword&&(e.schema.additionalProperties===!1||"object"==typeof e.schema.additionalProperties||e.schema.patternProperties&&Object.keys(e.schema.patternProperties).length||e.opts.v5&&e.schema.patternGroups&&Object.keys(e.schema.patternGroups).length)}var s="",o=e.schema.$async===!0;if(e.isTop){var i=e.isTop,n=e.level=0,l=e.dataLevel=0,c="data";if(e.rootId=e.resolve.fullPath(e.root.schema.id),e.baseId=e.baseId||e.rootId,o){e.async=!0;var h="es7"==e.opts.async;e.yieldAwait=h?"await":"yield"}delete e.isTop,e.dataPathArr=[void 0],s+=" validate = ",o?h?s+=" (async function ":("co*"==e.opts.async&&(s+="co.wrap"),s+="(function* "):s+=" (function ",s+=" (data, dataPath, parentData, parentDataProperty) { 'use strict'; var vErrors = null; ",s+=" var errors = 0;     "}else{var n=e.level,l=e.dataLevel,c="data"+(l||"");if(e.schema.id&&(e.baseId=e.resolve.url(e.baseId,e.schema.id)),o&&!e.async)throw new Error("async schema in sync schema");s+=" var errs_"+n+" = errors;"}var u,f="valid"+n,d=!e.opts.allErrors,p="",m="",v=e.schema.type,y=Array.isArray(v);if(v&&e.opts.coerceTypes){var g=e.util.coerceToTypes(v);if(g){var P=e.schemaPath+".type",E=e.errSchemaPath+"/type",b=y?"checkDataTypes":"checkDataType";s+=" if ("+e.util[b](v,c,!0)+") {  ";var w="dataType"+n,j="coerced"+n;s+=" var "+w+" = typeof "+c+"; var "+j+" = undefined; ";var x="",$=g;if($)for(var S,_=-1,R=$.length-1;R>_;)S=$[_+=1],_&&(s+=" if ("+j+" === undefined) { ",x+="}"),"string"==S?s+=" if ("+w+" == 'number' || "+w+" == 'boolean') "+j+" = '' + "+c+"; else if ("+c+" === null) "+j+" = ''; ":"number"==S||"integer"==S?(s+=" if ("+w+" == 'boolean' || "+c+" === null || ("+w+" == 'string' && "+c+" && "+c+" == +"+c+" ","integer"==S&&(s+=" && !("+c+" % 1)"),s+=")) "+j+" = +"+c+"; "):"boolean"==S?s+=" if ("+c+" === 'false' || "+c+" === 0 || "+c+" === null) "+j+" = false; else if ("+c+" === 'true' || "+c+" === 1) "+j+" = true; ":"null"==S&&(s+=" if ("+c+" === '' || "+c+" === 0 || "+c+" === false) "+j+" = null; ");s+=" "+x+" if ("+j+" === undefined) {   ";var O=O||[];O.push(s),s="",e.createErrors!==!1?(s+=" { keyword: '"+(u||"type")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+E+"\" , params: { type: '",s+=y?""+v.join(","):""+v,s+="' } ",e.opts.messages!==!1&&(s+=" , message: 'should be ",s+=y?""+v.join(","):""+v,s+="' "),e.opts.verbose&&(s+=" , schema: validate.schema"+P+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),s+=" } "):s+=" {} ";var k=s;if(s=O.pop(),s+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+k+"]); ":" validate.errors = ["+k+"]; return false; ":" var err = "+k+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } else { ",l){var A="data"+(l-1||""),I=e.dataPathArr[l];s+=" "+c+" = "+A+"["+I+"] = "+j+"; "}else s+=" data = "+j+"; if (parentData !== undefined) parentData[parentDataProperty] = "+j+"; ";s+=" } } "}}var q=e.RULES;if(q)for(var L,C=-1,D=q.length-1;D>C;)if(L=q[C+=1],t(L)){if(L.type&&(s+=" if ("+e.util.checkDataType(L.type,c)+") { "),e.opts.useDefaults&&!e.compositeRule)if("object"==L.type&&e.schema.properties){var V=e.schema.properties,U=Object.keys(V),z=U;if(z)for(var T,M=-1,N=z.length-1;N>M;){T=z[M+=1];var F=V[T];if(void 0!==F["default"]){var Q=c+e.util.getProperty(T);s+="  if ("+Q+" === undefined) "+Q+" = ",s+="clone"==e.opts.useDefaults?" "+JSON.stringify(F["default"])+" ":" "+e.useDefault(F["default"])+" ",s+="; "}}}else if("array"==L.type&&Array.isArray(e.schema.items)){var H=e.schema.items;if(H)for(var F,_=-1,G=H.length-1;G>_;)if(F=H[_+=1],void 0!==F["default"]){var Q=c+"["+_+"]";s+="  if ("+Q+" === undefined) "+Q+" = ",s+="clone"==e.opts.useDefaults?" "+JSON.stringify(F["default"])+" ":" "+e.useDefault(F["default"])+" ",s+="; "}}var J=L.rules;if(J)for(var K,B=-1,Y=J.length-1;Y>B;)if(K=J[B+=1],a(K)){if(K.custom){var V=e.schema[K.keyword],Z=e.useCustomRule(K,V,e.schema,e),W=Z.code+".errors",P=e.schemaPath+"."+K.keyword,E=e.errSchemaPath+"/"+K.keyword,X="errs"+n,_="i"+n,ee="ruleErr"+n,re=K.definition,te=re.async,ae=re.inline,se=re.macro;if(te&&!e.async)throw new Error("async keyword in sync schema");if(ae||se||(s+=""+W+" = null;"),s+="var "+X+" = errors;var valid"+n+";",ae&&re.statements)s+=" "+Z.validate;else if(se){var oe=e.util.copy(e);oe.level++,oe.schema=Z.validate,oe.schemaPath="";var ie=e.compositeRule;e.compositeRule=oe.compositeRule=!0;var ne=e.validate(oe).replace(/validate\.schema/g,Z.code);e.compositeRule=oe.compositeRule=ie,s+=" "+ne}else if(re.compile||re.validate){var O=O||[];O.push(s),s="",s+="  "+Z.code+".call( ",s+=e.opts.passContext?"this":"self";s+=re.compile||re.schema===!1?" , "+c+" ":" , validate.schema"+P+" , "+c+" , validate.schema"+e.schemaPath+" ",s+=" , (dataPath || '')",'""'!=e.errorPath&&(s+=" + "+e.errorPath),s+=l?" , data"+(l-1||"")+" , "+e.dataPathArr[l]+" ":" , parentData , parentDataProperty ",s+=" )  ";var le=s;s=O.pop(),re.errors!==!1&&(te?(W="customErrors"+n,s+=" var "+W+" = null; try { valid"+n+" = "+e.yieldAwait+le+"; } catch (e) { valid"+n+" = false; if (e instanceof ValidationError) "+W+" = e.errors; else throw e; } "):s+=" "+Z.code+".errors = null; ")}s+="if (! ",s+=ae?re.statements?" valid"+n+" ":" ("+Z.validate+") ":se?" valid"+oe.level+" ":te?re.errors===!1?" ("+e.yieldAwait+le+") ":" valid"+n+" ":" "+le+" ",s+=") { ",u=K.keyword;var O=O||[];O.push(s),s="";var O=O||[];O.push(s),s="",e.createErrors!==!1?(s+=" { keyword: '"+(u||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+E+"\" , params: { keyword: '"+K.keyword+"' } ",e.opts.messages!==!1&&(s+=" , message: 'should pass \""+K.keyword+"\" keyword validation' "),e.opts.verbose&&(s+=" , schema: validate.schema"+P+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),s+=" } "):s+=" {} ";var k=s;s=O.pop(),s+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+k+"]); ":" validate.errors = ["+k+"]; return false; ":" var err = "+k+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";var ce=s;s=O.pop(),ae?re.errors?"full"!=re.errors&&(s+="  for (var "+_+"="+X+"; "+_+"<errors; "+_+"++) { var "+ee+" = vErrors["+_+"]; if ("+ee+".dataPath === undefined) { "+ee+".dataPath = (dataPath || '') + "+e.errorPath+"; } if ("+ee+".schemaPath === undefined) { "+ee+'.schemaPath = "'+E+'"; } ',e.opts.verbose&&(s+=" "+ee+".schema = validate.schema"+P+"; "+ee+".data = "+c+"; "),s+=" } "):re.errors===!1?s+=" "+ce+" ":(s+=" if ("+X+" == errors) { "+ce+" } else {  for (var "+_+"="+X+"; "+_+"<errors; "+_+"++) { var "+ee+" = vErrors["+_+"]; if ("+ee+".dataPath === undefined) { "+ee+".dataPath = (dataPath || '') + "+e.errorPath+"; } if ("+ee+".schemaPath === undefined) { "+ee+'.schemaPath = "'+E+'"; } ',e.opts.verbose&&(s+=" "+ee+".schema = validate.schema"+P+"; "+ee+".data = "+c+"; "),s+=" } } "):se?(s+="   var err =   ",e.createErrors!==!1?(s+=" { keyword: '"+(u||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+E+"\" , params: { keyword: '"+K.keyword+"' } ",e.opts.messages!==!1&&(s+=" , message: 'should pass \""+K.keyword+"\" keyword validation' "),e.opts.verbose&&(s+=" , schema: validate.schema"+P+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),s+=" } "):s+=" {} ",s+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&d&&(s+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false ")):re.errors===!1?s+=" "+ce+" ":(s+=" if (Array.isArray("+W+")) { if (vErrors === null) vErrors = "+W+"; else vErrors.concat("+W+"); errors = vErrors.length;  for (var "+_+"="+X+"; "+_+"<errors; "+_+"++) { var "+ee+" = vErrors["+_+"];  "+ee+".dataPath = (dataPath || '') + "+e.errorPath+";   "+ee+'.schemaPath = "'+E+'";  ',e.opts.verbose&&(s+=" "+ee+".schema = validate.schema"+P+"; "+ee+".data = "+c+"; "),s+=" } } else { "+ce+" } "),u=void 0,s+=" } ",d&&(s+=" else { ")}else s+=" "+K.code(e,K.keyword)+" ";d&&(p+="}")}if(d&&(s+=" "+p+" ",p=""),L.type&&(s+=" } ",v&&v===L.type)){var he=!0;s+=" else { ";var P=e.schemaPath+".type",E=e.errSchemaPath+"/type",O=O||[];O.push(s),s="",e.createErrors!==!1?(s+=" { keyword: '"+(u||"type")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+E+"\" , params: { type: '",s+=y?""+v.join(","):""+v,s+="' } ",e.opts.messages!==!1&&(s+=" , message: 'should be ",s+=y?""+v.join(","):""+v,s+="' "),e.opts.verbose&&(s+=" , schema: validate.schema"+P+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),s+=" } "):s+=" {} ";var k=s;s=O.pop(),s+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+k+"]); ":" validate.errors = ["+k+"]; return false; ":" var err = "+k+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } "}d&&(s+=" if (errors === ",s+=i?"0":"errs_"+n,s+=") { ",m+="}")}if(v&&!he&&(!e.opts.coerceTypes||!g)){var P=e.schemaPath+".type",E=e.errSchemaPath+"/type",b=y?"checkDataTypes":"checkDataType";s+=" if ("+e.util[b](v,c,!0)+") {   ";var O=O||[];O.push(s),s="",e.createErrors!==!1?(s+=" { keyword: '"+(u||"type")+"' , dataPath: (dataPath || '') + "+e.errorPath+' , schemaPath: "'+E+"\" , params: { type: '",s+=y?""+v.join(","):""+v,s+="' } ",e.opts.messages!==!1&&(s+=" , message: 'should be ",s+=y?""+v.join(","):""+v,s+="' "),e.opts.verbose&&(s+=" , schema: validate.schema"+P+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),s+=" } "):s+=" {} ";var k=s;s=O.pop(),s+=!e.compositeRule&&d?e.async?" throw new ValidationError(["+k+"]); ":" validate.errors = ["+k+"]; return false; ":" var err = "+k+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" }"}return d&&(s+=" "+m+" "),i?(o?(s+=" if (errors === 0) return true;           ",s+=" else throw new ValidationError(vErrors); "):(s+=" validate.errors = vErrors; ",s+=" return errors === 0;       "),s+=" });"):s+=" var "+f+" = errors === errs_"+n+";",s=e.util.cleanUpCode(s),i&&d&&(s=e.util.cleanUpVarErrors(s,o)),s}},{}],35:[function(e,r,t){"use strict";var a=/^[a-z_$][a-z0-9_$]*$/i;r.exports=function(e,r){function t(e,r,t){for(var a,s=0;o.RULES.length>s;s++){var i=o.RULES[s];if(i.type==r){a=i;break}}a||(a={type:r,rules:[]},o.RULES.push(a));var n={keyword:e,definition:t,custom:!0};a.rules.push(n)}function s(e){if(!o.RULES.types[e])throw new Error("Unknown type "+e)}var o=this;if(this.RULES.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!a.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(r){var i=r.type;if(Array.isArray(i)){var n,l=i.length;for(n=0;l>n;n++)s(i[n]);for(n=0;l>n;n++)t(e,i[n],r)}else i&&s(i),t(e,i,r)}this.RULES.keywords[e]=!0,this.RULES.all[e]=!0}},{}],36:[function(e,r,t){r.exports={id:"http://json-schema.org/draft-04/schema#",$schema:"http://json-schema.org/draft-04/schema#",description:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{"default":0}]},simpleTypes:{"enum":["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0}},type:"object",properties:{id:{type:"string",format:"uri"},$schema:{type:"string",format:"uri"},title:{type:"string"},description:{type:"string"},"default":{},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"boolean","default":!1},minimum:{type:"number"},exclusiveMinimum:{type:"boolean","default":!1},maxLength:{$ref:"#/definitions/positiveInteger"},minLength:{$ref:"#/definitions/positiveIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"}],"default":{}},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],"default":{}},maxItems:{$ref:"#/definitions/positiveInteger"},minItems:{$ref:"#/definitions/positiveIntegerDefault0"},uniqueItems:{type:"boolean","default":!1},maxProperties:{$ref:"#/definitions/positiveInteger"},minProperties:{$ref:"#/definitions/positiveIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"}],"default":{}},definitions:{type:"object",additionalProperties:{$ref:"#"},"default":{}},properties:{type:"object",additionalProperties:{$ref:"#"},"default":{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},"default":{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},"enum":{type:"array",minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"]},"default":{}}},{}],37:[function(e,r,t){r.exports={id:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json#",$schema:"http://json-schema.org/draft-04/schema#",description:"Core schema meta-schema (v5 proposals)",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},positiveInteger:{type:"integer",minimum:0},positiveIntegerDefault0:{allOf:[{$ref:"#/definitions/positiveInteger"},{"default":0}]},simpleTypes:{"enum":["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},minItems:1,uniqueItems:!0},$data:{type:"object",required:["$data"],properties:{$data:{type:"string",format:"relative-json-pointer"}},additionalProperties:!1}},type:"object",properties:{id:{type:"string",format:"uri"},$schema:{type:"string",format:"uri"},title:{type:"string"},description:{type:"string"},"default":{},multipleOf:{anyOf:[{type:"number",minimum:0,exclusiveMinimum:!0},{$ref:"#/definitions/$data"}]},maximum:{anyOf:[{type:"number"},{$ref:"#/definitions/$data"}]},exclusiveMaximum:{anyOf:[{type:"boolean","default":!1},{$ref:"#/definitions/$data"}]},minimum:{anyOf:[{type:"number"},{$ref:"#/definitions/$data"}]},exclusiveMinimum:{anyOf:[{type:"boolean","default":!1},{$ref:"#/definitions/$data"}]},maxLength:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minLength:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},pattern:{anyOf:[{type:"string",format:"regex"},{$ref:"#/definitions/$data"}]},additionalItems:{anyOf:[{type:"boolean"},{$ref:"#"},{$ref:"#/definitions/$data"}],"default":{}},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],"default":{}},maxItems:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minItems:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},uniqueItems:{anyOf:[{type:"boolean","default":!1},{$ref:"#/definitions/$data"}]},maxProperties:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minProperties:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},required:{anyOf:[{$ref:"#/definitions/stringArray"},{$ref:"#/definitions/$data"}]},additionalProperties:{anyOf:[{type:"boolean"},{$ref:"#"},{$ref:"#/definitions/$data"}],"default":{}},definitions:{type:"object",additionalProperties:{$ref:"#"},"default":{}},properties:{type:"object",additionalProperties:{$ref:"#"},"default":{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},"default":{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},"enum":{anyOf:[{type:"array",minItems:1,uniqueItems:!0},{$ref:"#/definitions/$data"}]},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"},format:{anyOf:[{type:"string"},{$ref:"#/definitions/$data"}]},formatMaximum:{anyOf:[{type:"string"},{$ref:"#/definitions/$data"}]},formatMinimum:{anyOf:[{type:"string"},{$ref:"#/definitions/$data"}]},exclusiveFormatMaximum:{anyOf:[{type:"boolean","default":!1},{$ref:"#/definitions/$data"}]},exclusiveFormatMinimum:{anyOf:[{type:"boolean","default":!1},{$ref:"#/definitions/$data"}]},constant:{anyOf:[{},{$ref:"#/definitions/$data"}]},contains:{$ref:"#"},patternGroups:{type:"object",additionalProperties:{type:"object",required:["schema"],properties:{maximum:{anyOf:[{$ref:"#/definitions/positiveInteger"},{$ref:"#/definitions/$data"}]},minimum:{anyOf:[{$ref:"#/definitions/positiveIntegerDefault0"},{$ref:"#/definitions/$data"}]},schema:{$ref:"#"}},additionalProperties:!1},"default":{}},"switch":{type:"array",items:{required:["then"],properties:{"if":{$ref:"#"},then:{anyOf:[{type:"boolean"},{$ref:"#"}]},"continue":{type:"boolean"}},additionalProperties:!1,dependencies:{"continue":["if"]}}}},dependencies:{exclusiveMaximum:["maximum"],exclusiveMinimum:["minimum"],formatMaximum:["format"],formatMinimum:["format"],exclusiveFormatMaximum:["formatMaximum"],exclusiveFormatMinimum:["formatMinimum"]},"default":{}}},{}],38:[function(e,r,t){"use strict";function a(r){function t(e,t,s){var o={inline:s||a[e],statements:!0,errors:"full"};t&&(o.type=t),r.addKeyword(e,o)}var a={"switch":e("./dotjs/switch"),constant:e("./dotjs/constant"),_formatLimit:e("./dotjs/_formatLimit"),patternRequired:e("./dotjs/patternRequired")};if(r._opts.meta!==!1){var i=e("./refs/json-schema-v5.json");r.addMetaSchema(i,o)}t("constant"),r.addKeyword("contains",{type:"array",macro:s}),t("formatMaximum","string",a._formatLimit),t("formatMinimum","string",a._formatLimit),r.addKeyword("exclusiveFormatMaximum"),r.addKeyword("exclusiveFormatMinimum"),r.addKeyword("patternGroups"),t("patternRequired","object"),t("switch")}function s(e){return{not:{items:{not:e}}}}var o="https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/json-schema-v5.json";r.exports={enable:a,META_SCHEMA_ID:o}},{"./dotjs/_formatLimit":12,"./dotjs/constant":19,"./dotjs/patternRequired":28,"./dotjs/switch":32,"./refs/json-schema-v5.json":37}],39:[function(e,r,t){(function(e){!function(a){function s(e){throw new RangeError(q[e])}function o(e,r){for(var t=e.length,a=[];t--;)a[t]=r(e[t]);return a}function i(e,r){var t=e.split("@"),a="";t.length>1&&(a=t[0]+"@",e=t[1]),e=e.replace(I,".");var s=e.split("."),i=o(s,r).join(".");return a+i}function n(e){for(var r,t,a=[],s=0,o=e.length;o>s;)r=e.charCodeAt(s++),r>=55296&&56319>=r&&o>s?(t=e.charCodeAt(s++),56320==(64512&t)?a.push(((1023&r)<<10)+(1023&t)+65536):(a.push(r),s--)):a.push(r);return a}function l(e){return o(e,function(e){var r="";return e>65535&&(e-=65536,r+=D(e>>>10&1023|55296),e=56320|1023&e),r+=D(e)}).join("")}function c(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:w}function h(e,r){return e+22+75*(26>e)-((0!=r)<<5)}function u(e,r,t){var a=0;for(e=t?C(e/S):e>>1,e+=C(e/r);e>L*x>>1;a+=w)e=C(e/L);return C(a+(L+1)*e/(e+$))}function f(e){var r,t,a,o,i,n,h,f,d,p,m=[],v=e.length,y=0,g=R,P=_;for(t=e.lastIndexOf(O),0>t&&(t=0),a=0;t>a;++a)e.charCodeAt(a)>=128&&s("not-basic"),m.push(e.charCodeAt(a));for(o=t>0?t+1:0;v>o;){for(i=y,n=1,h=w;o>=v&&s("invalid-input"),f=c(e.charCodeAt(o++)),(f>=w||f>C((b-y)/n))&&s("overflow"),y+=f*n,d=P>=h?j:h>=P+x?x:h-P,!(d>f);h+=w)p=w-d,n>C(b/p)&&s("overflow"),n*=p;r=m.length+1,P=u(y-i,r,0==i),C(y/r)>b-g&&s("overflow"),g+=C(y/r),y%=r,m.splice(y++,0,g)}return l(m)}function d(e){var r,t,a,o,i,l,c,f,d,p,m,v,y,g,P,E=[];for(e=n(e),v=e.length,r=R,t=0,i=_,l=0;v>l;++l)m=e[l],128>m&&E.push(D(m));for(a=o=E.length,o&&E.push(O);v>a;){for(c=b,l=0;v>l;++l)m=e[l],m>=r&&c>m&&(c=m);for(y=a+1,c-r>C((b-t)/y)&&s("overflow"),t+=(c-r)*y,r=c,l=0;v>l;++l)if(m=e[l],r>m&&++t>b&&s("overflow"),m==r){for(f=t,d=w;p=i>=d?j:d>=i+x?x:d-i,!(p>f);d+=w)P=f-p,g=w-p,E.push(D(h(p+P%g,0))),f=C(P/g);E.push(D(h(f,0))),i=u(t,y,a==o),t=0,++a}++t,++r}return E.join("")}function p(e){return i(e,function(e){return k.test(e)?f(e.slice(4).toLowerCase()):e})}function m(e){return i(e,function(e){return A.test(e)?"xn--"+d(e):e})}var v="object"==typeof t&&t&&!t.nodeType&&t,y="object"==typeof r&&r&&!r.nodeType&&r,g="object"==typeof e&&e;g.global!==g&&g.window!==g&&g.self!==g||(a=g);var P,E,b=2147483647,w=36,j=1,x=26,$=38,S=700,_=72,R=128,O="-",k=/^xn--/,A=/[^\x20-\x7E]/,I=/[\x2E\u3002\uFF0E\uFF61]/g,q={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=w-j,C=Math.floor,D=String.fromCharCode;if(P={version:"1.4.1",ucs2:{decode:n,encode:l},decode:f,encode:d,toASCII:m,toUnicode:p},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return P});else if(v&&y)if(r.exports==v)y.exports=P;else for(E in P)P.hasOwnProperty(E)&&(v[E]=P[E]);else a.punycode=P}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],40:[function(e,r,t){"use strict";function a(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.exports=function(e,r,t,o){r=r||"&",t=t||"=";var i={};if("string"!=typeof e||0===e.length)return i;var n=/\+/g;e=e.split(r);var l=1e3;o&&"number"==typeof o.maxKeys&&(l=o.maxKeys);var c=e.length;l>0&&c>l&&(c=l);for(var h=0;c>h;++h){var u,f,d,p,m=e[h].replace(n,"%20"),v=m.indexOf(t);v>=0?(u=m.substr(0,v),f=m.substr(v+1)):(u=m,f=""),d=decodeURIComponent(u),p=decodeURIComponent(f),a(i,d)?s(i[d])?i[d].push(p):i[d]=[i[d],p]:i[d]=p}return i};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],41:[function(e,r,t){"use strict";function a(e,r){if(e.map)return e.map(r);for(var t=[],a=0;e.length>a;a++)t.push(r(e[a],a));return t}var s=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};r.exports=function(e,r,t,n){return r=r||"&",t=t||"=",null===e&&(e=void 0),"object"==typeof e?a(i(e),function(i){var n=encodeURIComponent(s(i))+t;return o(e[i])?a(e[i],function(e){return n+encodeURIComponent(s(e))}).join(r):n+encodeURIComponent(s(e[i]))}).join(r):n?encodeURIComponent(s(n))+t+encodeURIComponent(s(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}},{}],42:[function(e,r,t){"use strict";t.decode=t.parse=e("./decode"),t.encode=t.stringify=e("./encode")},{"./decode":40,"./encode":41}],43:[function(e,r,t){"use strict";function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function s(e,r,t){if(e&&c.isObject(e)&&e instanceof a)return e;var s=new a;return s.parse(e,r,t),s}function o(e){return c.isString(e)&&(e=s(e)),e instanceof a?e.format():a.prototype.format.call(e)}function i(e,r){return s(e,!1,!0).resolve(r)}function n(e,r){return e?s(e,!1,!0).resolveObject(r):r}var l=e("punycode"),c=e("./util");t.parse=s,t.resolve=i,t.resolveObject=n,t.format=o,t.Url=a;var h=/^([a-z0-9.+-]+:)/i,u=/:[0-9]*$/,f=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,d=["<",">",'"',"`"," ","\r","\n","	"],p=["{","}","|","\\","^","`"].concat(d),m=["'"].concat(p),v=["%","/","?",";","#"].concat(m),y=["/","?","#"],g=255,P=/^[+a-z0-9A-Z_-]{0,63}$/,E=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,b={javascript:!0,"javascript:":!0},w={javascript:!0,"javascript:":!0},j={http:!0,https:!0,
  ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},x=e("querystring");a.prototype.parse=function(e,r,t){if(!c.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var a=e.indexOf("?"),s=-1!==a&&a<e.indexOf("#")?"?":"#",o=e.split(s),i=/\\/g;o[0]=o[0].replace(i,"/"),e=o.join(s);var n=e;if(n=n.trim(),!t&&1===e.split("#").length){var u=f.exec(n);if(u)return this.path=n,this.href=n,this.pathname=u[1],u[2]?(this.search=u[2],this.query=r?x.parse(this.search.substr(1)):this.search.substr(1)):r&&(this.search="",this.query={}),this}var d=h.exec(n);if(d){d=d[0];var p=d.toLowerCase();this.protocol=p,n=n.substr(d.length)}if(t||d||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var $="//"===n.substr(0,2);!$||d&&w[d]||(n=n.substr(2),this.slashes=!0)}if(!w[d]&&($||d&&!j[d])){for(var S=-1,_=0;y.length>_;_++){var R=n.indexOf(y[_]);-1!==R&&(-1===S||S>R)&&(S=R)}var O,k;k=-1===S?n.lastIndexOf("@"):n.lastIndexOf("@",S),-1!==k&&(O=n.slice(0,k),n=n.slice(k+1),this.auth=decodeURIComponent(O)),S=-1;for(var _=0;v.length>_;_++){var R=n.indexOf(v[_]);-1!==R&&(-1===S||S>R)&&(S=R)}-1===S&&(S=n.length),this.host=n.slice(0,S),n=n.slice(S),this.parseHost(),this.hostname=this.hostname||"";var A="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!A)for(var I=this.hostname.split(/\./),_=0,q=I.length;q>_;_++){var L=I[_];if(L&&!L.match(P)){for(var C="",D=0,V=L.length;V>D;D++)C+=L.charCodeAt(D)>127?"x":L[D];if(!C.match(P)){var U=I.slice(0,_),z=I.slice(_+1),T=L.match(E);T&&(U.push(T[1]),z.unshift(T[2])),z.length&&(n="/"+z.join(".")+n),this.hostname=U.join(".");break}}}this.hostname=this.hostname.length>g?"":this.hostname.toLowerCase(),A||(this.hostname=l.toASCII(this.hostname));var M=this.port?":"+this.port:"",N=this.hostname||"";this.host=N+M,this.href+=this.host,A&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!b[p])for(var _=0,q=m.length;q>_;_++){var F=m[_];if(-1!==n.indexOf(F)){var Q=encodeURIComponent(F);Q===F&&(Q=escape(F)),n=n.split(F).join(Q)}}var H=n.indexOf("#");-1!==H&&(this.hash=n.substr(H),n=n.slice(0,H));var G=n.indexOf("?");if(-1!==G?(this.search=n.substr(G),this.query=n.substr(G+1),r&&(this.query=x.parse(this.query)),n=n.slice(0,G)):r&&(this.search="",this.query={}),n&&(this.pathname=n),j[p]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var M=this.pathname||"",J=this.search||"";this.path=M+J}return this.href=this.format(),this},a.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var r=this.protocol||"",t=this.pathname||"",a=this.hash||"",s=!1,o="";this.host?s=e+this.host:this.hostname&&(s=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&c.isObject(this.query)&&Object.keys(this.query).length&&(o=x.stringify(this.query));var i=this.search||o&&"?"+o||"";return r&&":"!==r.substr(-1)&&(r+=":"),this.slashes||(!r||j[r])&&s!==!1?(s="//"+(s||""),t&&"/"!==t.charAt(0)&&(t="/"+t)):s||(s=""),a&&"#"!==a.charAt(0)&&(a="#"+a),i&&"?"!==i.charAt(0)&&(i="?"+i),t=t.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),i=i.replace("#","%23"),r+s+t+i+a},a.prototype.resolve=function(e){return this.resolveObject(s(e,!1,!0)).format()},a.prototype.resolveObject=function(e){if(c.isString(e)){var r=new a;r.parse(e,!1,!0),e=r}for(var t=new a,s=Object.keys(this),o=0;s.length>o;o++){var i=s[o];t[i]=this[i]}if(t.hash=e.hash,""===e.href)return t.href=t.format(),t;if(e.slashes&&!e.protocol){for(var n=Object.keys(e),l=0;n.length>l;l++){var h=n[l];"protocol"!==h&&(t[h]=e[h])}return j[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(e.protocol&&e.protocol!==t.protocol){if(!j[e.protocol]){for(var u=Object.keys(e),f=0;u.length>f;f++){var d=u[f];t[d]=e[d]}return t.href=t.format(),t}if(t.protocol=e.protocol,e.host||w[e.protocol])t.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),2>p.length&&p.unshift(""),t.pathname=p.join("/")}if(t.search=e.search,t.query=e.query,t.host=e.host||"",t.auth=e.auth,t.hostname=e.hostname||e.host,t.port=e.port,t.pathname||t.search){var m=t.pathname||"",v=t.search||"";t.path=m+v}return t.slashes=t.slashes||e.slashes,t.href=t.format(),t}var y=t.pathname&&"/"===t.pathname.charAt(0),g=e.host||e.pathname&&"/"===e.pathname.charAt(0),P=g||y||t.host&&e.pathname,E=P,b=t.pathname&&t.pathname.split("/")||[],p=e.pathname&&e.pathname.split("/")||[],x=t.protocol&&!j[t.protocol];if(x&&(t.hostname="",t.port=null,t.host&&(""===b[0]?b[0]=t.host:b.unshift(t.host)),t.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),P=P&&(""===p[0]||""===b[0])),g)t.host=e.host||""===e.host?e.host:t.host,t.hostname=e.hostname||""===e.hostname?e.hostname:t.hostname,t.search=e.search,t.query=e.query,b=p;else if(p.length)b||(b=[]),b.pop(),b=b.concat(p),t.search=e.search,t.query=e.query;else if(!c.isNullOrUndefined(e.search)){if(x){t.hostname=t.host=b.shift();var $=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;$&&(t.auth=$.shift(),t.host=t.hostname=$.shift())}return t.search=e.search,t.query=e.query,c.isNull(t.pathname)&&c.isNull(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!b.length)return t.pathname=null,t.path=t.search?"/"+t.search:null,t.href=t.format(),t;for(var S=b.slice(-1)[0],_=(t.host||e.host||b.length>1)&&("."===S||".."===S)||""===S,R=0,O=b.length;O>=0;O--)S=b[O],"."===S?b.splice(O,1):".."===S?(b.splice(O,1),R++):R&&(b.splice(O,1),R--);if(!P&&!E)for(;R--;R)b.unshift("..");!P||""===b[0]||b[0]&&"/"===b[0].charAt(0)||b.unshift(""),_&&"/"!==b.join("/").substr(-1)&&b.push("");var k=""===b[0]||b[0]&&"/"===b[0].charAt(0);if(x){t.hostname=t.host=k?"":b.length?b.shift():"";var $=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;$&&(t.auth=$.shift(),t.host=t.hostname=$.shift())}return P=P||t.host&&b.length,P&&!k&&b.unshift(""),b.length?t.pathname=b.join("/"):(t.pathname=null,t.path=null),c.isNull(t.pathname)&&c.isNull(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=e.auth||t.auth,t.slashes=t.slashes||e.slashes,t.href=t.format(),t},a.prototype.parseHost=function(){var e=this.host,r=u.exec(e);r&&(r=r[0],":"!==r&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)}},{"./util":44,punycode:39,querystring:42}],44:[function(e,r,t){"use strict";r.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},{}],45:[function(e,r,t){function a(e){var r=this,t=f.call(arguments,1);return new Promise(function(a,o){function i(r){var t;try{t=e.next(r)}catch(a){return o(a)}c(t)}function n(r){var t;try{t=e["throw"](r)}catch(a){return o(a)}c(t)}function c(e){if(e.done)return a(e.value);var t=s.call(r,e.value);return t&&l(t)?t.then(i,n):n(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "'+String(e.value)+'"'))}return"function"==typeof e&&(e=e.apply(r,t)),e&&"function"==typeof e.next?void i():a(e)})}function s(e){return e?l(e)?e:h(e)||c(e)?a.call(this,e):"function"==typeof e?o.call(this,e):Array.isArray(e)?i.call(this,e):u(e)?n.call(this,e):e:e}function o(e){var r=this;return new Promise(function(t,a){e.call(r,function(e,r){return e?a(e):(arguments.length>2&&(r=f.call(arguments,1)),void t(r))})})}function i(e){return Promise.all(e.map(s,this))}function n(e){function r(e,r){t[r]=void 0,o.push(e.then(function(e){t[r]=e}))}for(var t=new e.constructor,a=Object.keys(e),o=[],i=0;a.length>i;i++){var n=a[i],c=s.call(this,e[n]);c&&l(c)?r(c,n):t[n]=e[n]}return Promise.all(o).then(function(){return t})}function l(e){return"function"==typeof e.then}function c(e){return"function"==typeof e.next&&"function"==typeof e["throw"]}function h(e){var r=e.constructor;return r?"GeneratorFunction"===r.name||"GeneratorFunction"===r.displayName?!0:c(r.prototype):!1}function u(e){return Object==e.constructor}var f=Array.prototype.slice;r.exports=a["default"]=a.co=a,a.wrap=function(e){function r(){return a.call(this,e.apply(this,arguments))}return r.__generatorFunction__=e,r}},{}],46:[function(e,r,t){var a="undefined"!=typeof JSON?JSON:e("jsonify");r.exports=function(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var t=r.space||"";"number"==typeof t&&(t=Array(t+1).join(" "));var i="boolean"==typeof r.cycles?r.cycles:!1,n=r.replacer||function(e,r){return r},l=r.cmp&&function(e){return function(r){return function(t,a){var s={key:t,value:r[t]},o={key:a,value:r[a]};return e(s,o)}}}(r.cmp),c=[];return function h(e,r,u,f){var d=t?"\n"+new Array(f+1).join(t):"",p=t?": ":":";if(u&&u.toJSON&&"function"==typeof u.toJSON&&(u=u.toJSON()),u=n.call(e,r,u),void 0!==u){if("object"!=typeof u||null===u)return a.stringify(u);if(s(u)){for(var m=[],v=0;u.length>v;v++){var y=h(u,v,u[v],f+1)||a.stringify(null);m.push(d+t+y)}return"["+m.join(",")+d+"]"}if(-1!==c.indexOf(u)){if(i)return a.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}c.push(u);for(var g=o(u).sort(l&&l(u)),m=[],v=0;g.length>v;v++){var r=g[v],P=h(u,r,u[r],f+1);if(P){var E=a.stringify(r)+p+P;m.push(d+t+E)}}return c.splice(c.indexOf(u),1),"{"+m.join(",")+d+"}"}}({"":e},"",e,0)};var s=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},o=Object.keys||function(e){var r=Object.prototype.hasOwnProperty||function(){return!0},t=[];for(var a in e)r.call(e,a)&&t.push(a);return t}},{jsonify:47}],47:[function(e,r,t){t.parse=e("./lib/parse"),t.stringify=e("./lib/stringify")},{"./lib/parse":48,"./lib/stringify":49}],48:[function(e,r,t){var a,s,o,i,n={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},l=function(e){throw{name:"SyntaxError",message:e,at:a,text:o}},c=function(e){return e&&e!==s&&l("Expected '"+e+"' instead of '"+s+"'"),s=o.charAt(a),a+=1,s},h=function(){var e,r="";for("-"===s&&(r="-",c("-"));s>="0"&&"9">=s;)r+=s,c();if("."===s)for(r+=".";c()&&s>="0"&&"9">=s;)r+=s;if("e"===s||"E"===s)for(r+=s,c(),"-"!==s&&"+"!==s||(r+=s,c());s>="0"&&"9">=s;)r+=s,c();return e=+r,isFinite(e)?e:void l("Bad number")},u=function(){var e,r,t,a="";if('"'===s)for(;c();){if('"'===s)return c(),a;if("\\"===s)if(c(),"u"===s){for(t=0,r=0;4>r&&(e=parseInt(c(),16),isFinite(e));r+=1)t=16*t+e;a+=String.fromCharCode(t)}else{if("string"!=typeof n[s])break;a+=n[s]}else a+=s}l("Bad string")},f=function(){for(;s&&" ">=s;)c()},d=function(){switch(s){case"t":return c("t"),c("r"),c("u"),c("e"),!0;case"f":return c("f"),c("a"),c("l"),c("s"),c("e"),!1;case"n":return c("n"),c("u"),c("l"),c("l"),null}l("Unexpected '"+s+"'")},p=function(){var e=[];if("["===s){if(c("["),f(),"]"===s)return c("]"),e;for(;s;){if(e.push(i()),f(),"]"===s)return c("]"),e;c(","),f()}}l("Bad array")},m=function(){var e,r={};if("{"===s){if(c("{"),f(),"}"===s)return c("}"),r;for(;s;){if(e=u(),f(),c(":"),Object.hasOwnProperty.call(r,e)&&l('Duplicate key "'+e+'"'),r[e]=i(),f(),"}"===s)return c("}"),r;c(","),f()}}l("Bad object")};i=function(){switch(f(),s){case"{":return m();case"[":return p();case'"':return u();case"-":return h();default:return s>="0"&&"9">=s?h():d()}},r.exports=function(e,r){var t;return o=e,a=0,s=" ",t=i(),f(),s&&l("Syntax error"),"function"==typeof r?function n(e,t){var a,s,o=e[t];if(o&&"object"==typeof o)for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(s=n(o,a),void 0!==s?o[a]=s:delete o[a]);return r.call(e,t,o)}({"":t},""):t}},{}],49:[function(e,r,t){function a(e){return l.lastIndex=0,l.test(e)?'"'+e.replace(l,function(e){var r=c[e];return"string"==typeof r?r:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function s(e,r){var t,l,c,h,u,f=o,d=r[e];switch(d&&"object"==typeof d&&"function"==typeof d.toJSON&&(d=d.toJSON(e)),"function"==typeof n&&(d=n.call(r,e,d)),typeof d){case"string":return a(d);case"number":return isFinite(d)?String(d):"null";case"boolean":case"null":return String(d);case"object":if(!d)return"null";if(o+=i,u=[],"[object Array]"===Object.prototype.toString.apply(d)){for(h=d.length,t=0;h>t;t+=1)u[t]=s(t,d)||"null";return c=0===u.length?"[]":o?"[\n"+o+u.join(",\n"+o)+"\n"+f+"]":"["+u.join(",")+"]",o=f,c}if(n&&"object"==typeof n)for(h=n.length,t=0;h>t;t+=1)l=n[t],"string"==typeof l&&(c=s(l,d),c&&u.push(a(l)+(o?": ":":")+c));else for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(c=s(l,d),c&&u.push(a(l)+(o?": ":":")+c));return c=0===u.length?"{}":o?"{\n"+o+u.join(",\n"+o)+"\n"+f+"}":"{"+u.join(",")+"}",o=f,c}}var o,i,n,l=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};r.exports=function(e,r,t){var a;if(o="",i="","number"==typeof t)for(a=0;t>a;a+=1)i+=" ";else"string"==typeof t&&(i=t);if(n=r,r&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw new Error("JSON.stringify");return s("",{"":e})}},{}],ajv:[function(e,r,t){"use strict";function a(e){return v.test(e)}function Ajv(r){function t(e,r){var t;if("string"==typeof e){if(t=j(e),!t)throw new Error('no schema with key or ref "'+e+'"')}else{var a=_(e);t=a.validate||R(a)}var s=t(r);return t.async===!0?"*"==C._opts.async?p(s):s:(C.errors=t.errors,s)}function g(e){var r=_(e);return r.validate||R(r)}function P(e,r,t,a){if(Array.isArray(e))for(var s=0;e.length>s;s++)P(e[s],void 0,t,a);else{r=o.normalizeId(r||e.id),q(r);var i=C._schemas[r]=_(e,t,!0);i.meta=a}}function E(e,r,t){P(e,r,t,!0)}function b(e,r){var s=e.$schema||C._opts.defaultMeta||w(),o=C._formats.uri;C._formats.uri="function"==typeof o?a:v;var i=t(s,e);if(C._formats.uri=o,!i&&r){var n="schema is invalid:"+O();if("log"!=C._opts.validateSchema)throw new Error(n);console.error(n)}return i}function w(){var e=C._opts.meta;return C._opts.defaultMeta="object"==typeof e?e.id||e:C._opts.v5?u.META_SCHEMA_ID:m}function j(e){var r=x(e);switch(typeof r){case"object":return r.validate||R(r);case"string":return j(r)}}function x(e){return e=o.normalizeId(e),C._schemas[e]||C._refs[e]}function $(e){switch(typeof e){case"undefined":return S(C._schemas),S(C._refs),void C._cache.clear();case"string":var r=x(e);return r&&C._cache.del(r.jsonStr),delete C._schemas[e],void delete C._refs[e];case"object":if(e instanceof RegExp)return S(C._schemas,e),void S(C._refs,e);var t=l(e);C._cache.del(t);var a=e.id;a&&(a=o.normalizeId(a),delete C._schemas[a],delete C._refs[a])}}function S(e,r){for(var t in e){var a=e[t];a.meta||r&&!r.test(t)||(C._cache.del(a.jsonStr),delete e[t])}}function _(e,r,t){if("object"!=typeof e)throw new Error("schema should be object");var a=l(e),s=C._cache.get(a);if(s)return s;t=t||C._opts.addUsedSchema!==!1;var i=o.normalizeId(e.id);i&&t&&q(i),C._opts.validateSchema===!1||r||b(e,!0);var c=o.ids.call(C,e),h=new n({id:i,schema:e,localRefs:c,jsonStr:a});return"#"!=i[0]&&t&&(C._refs[i]=h),C._cache.put(a,h),h}function R(e,r){function t(){var r=e.validate,a=r.apply(null,arguments);return t.errors=r.errors,a}if(e.compiling)return e.validate=t,t.schema=e.schema,t.errors=null,t.root=r?r:t,e.schema.$async===!0&&(t.async=!0),t;e.compiling=!0;var a;e.meta&&(a=C._opts,C._opts=C._metaOpts);var o;try{o=s.call(C,e.schema,r,e.localRefs)}finally{e.compiling=!1,e.meta&&(C._opts=a)}return e.validate=o,e.refs=o.refs,e.refVal=o.refVal,e.root=o.root,o}function O(e,r){if(e=e||C.errors,!e)return"No errors";r=r||{};for(var t=void 0===r.separator?", ":r.separator,a=void 0===r.dataVar?"data":r.dataVar,s="",o=0;e.length>o;o++){var i=e[o];i&&(s+=a+i.dataPath+" "+i.message+t)}return s.slice(0,-t.length)}function k(e,r){"string"==typeof r&&(r=new RegExp(r)),C._formats[e]=r}function A(){if(C._opts.meta!==!1){var r=e("./refs/json-schema-draft-04.json");E(r,m,!0),C._refs["http://json-schema.org/schema"]=m}var t=C._opts.schemas;if(t)if(Array.isArray(t))P(t);else for(var a in t)P(t[a],a)}function I(){for(var e in C._opts.formats){var r=C._opts.formats[e];k(e,r)}}function q(e){if(C._schemas[e]||C._refs[e])throw new Error('schema with key or id "'+e+'" already exists')}function L(){for(var e=f.copy(C._opts),r=0;y.length>r;r++)delete e[y[r]];return e}if(!(this instanceof Ajv))return new Ajv(r);var C=this;r=this._opts=f.copy(r)||{},this._schemas={},this._refs={},this._formats=c(r.format),this._cache=r.cache||new i,this._loadingSchemas={},this.RULES=h(),this.validate=t,this.compile=g,this.addSchema=P,this.addMetaSchema=E,this.validateSchema=b,this.getSchema=j,this.removeSchema=$,this.addFormat=k,this.errorsText=O,this._addSchema=_,this._compile=R,r.loopRequired=r.loopRequired||1/0,(r.async||r.transpile)&&d.setup(r),r.beautify===!0&&(r.beautify={indent_size:2}),"property"==r.errorDataPath&&(r._errorDataPathProperty=!0),this._metaOpts=L(),A(),r.formats&&I(),r.v5&&u.enable(this),"object"==typeof r.meta&&E(r.meta)}var s=e("./compile"),o=e("./compile/resolve"),i=e("./cache"),n=e("./compile/schema_obj"),l=e("json-stable-stringify"),c=e("./compile/formats"),h=e("./compile/rules"),u=e("./v5"),f=e("./compile/util"),d=e("./async"),p=e("co");r.exports=Ajv,Ajv.prototype.compileAsync=d.compile,Ajv.prototype.addKeyword=e("./keyword"),Ajv.ValidationError=e("./compile/validation_error");var m="http://json-schema.org/draft-04/schema",v=/^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,y=["removeAdditional","useDefaults","coerceTypes"]},{"./async":1,"./cache":2,"./compile":6,"./compile/formats":5,"./compile/resolve":7,"./compile/rules":8,"./compile/schema_obj":9,"./compile/util":10,"./compile/validation_error":11,"./keyword":35,"./refs/json-schema-draft-04.json":36,"./v5":38,co:45,"json-stable-stringify":46}]},{},[])("ajv")});
  return module.exports;
  })({exports:{}}, __commonjs_global);

  function StatusMap() {
      // Container for all errors
      // Map from string to list of strings
      this.errors = {};
  }

  // Static variable to initialize key with no error
  StatusMap.NO_ERROR = '';

  /**
   * Clear / initialize all temporary arrays
   */
  StatusMap.prototype.clear = function () {
      this.errors = {};
  };

  /**
   * Add a new error to the map.
   * If the error is StatusMap.NO_ERROR the entry will be added, but the list will
   * be empty, which allows the user to get a list of valid keys if needed.
   * @param {String} key The name of the error
   * @param {String} newError The error message
   */
  StatusMap.prototype.appendError = function (key, newError) {
      // Make sure the entry exists
      this.appendValid(key);
      // Add the error if it exists and is not a duplicate
      if (newError && this.errors[key].indexOf(newError) === -1) {
          this.errors[key].push(newError);
      }
  };

  /**
   * Add a key to indicate that an item was processed with no errors
   * @param  {String} key The item to store
   */
  StatusMap.prototype.appendValid = function (key) {
      // Make sure the entry exists so we can track what keys are valid
      if (!this.errors[key]) {
          this.errors[key] = [];
      }
  };

  /**
   * Determine if key is valid
   * @param {String} key Where to look in the map
   * @returns {boolean} True if the key is valid, meaning no errors
   */
  StatusMap.prototype.validKey = function (key) {
      return !this.errors[key] || this.errors[key].length === 0;
  };

  /**
   * Determine if the key is invalid
   * @param {String} key The entry to look for
   * @returns {boolean} True if the key is NOT valid, meaning has an error
   */
  StatusMap.prototype.invalidKey = function (key) {
      return !this.validKey(key);
  };

  /**
   * Create a human readable summary of all the errors.
   * @returns {string} The summary
   */
  StatusMap.prototype.invalidKeySummary = function () {
      var _this = this;
      var errors = Object.keys(this.errors).reduce(function (prev, key) {
          if (_this.invalidKey(key)) {
              prev.push(key+' ('+_this.errors[key].join(', ')+')');
          }
          return prev;
      },[]);
      return errors.join(', ');
  };

  //---- Singletons

  // Mapping from primitive names to schema validator functions
  var ajvValidators = null;

  // Cache schema compiler object
  var ajvSchema = null;

  /**
   * Create schema compiler object
   * @private
   */
  function _initSchema() {
      if (!ajvSchema) {
          ajvSchema = ajv_min({ allErrors: true });
          ajvSchema.addSchema(schemaJson, "_");
          ajvValidators = {};
      }
  }

  /**
   * Compile the schema for the given primitive
   * @param {String} primitive The name of the primitive
   * @returns {Function} Ajv validator function
   * @private
   */
  function _findValidator(primitive) {
      _initSchema();

      // Compile the schema for this primitive if needed
      if (!ajvValidators[primitive]) {
          var schemaPrim = entities[primitive];
          if (!schemaPrim) {
              return null;
          }
          var schemaId = "#/entities/"+primitive;
          ajvValidators[primitive] = ajvSchema.compile({ $ref: "_" + schemaId });
      }
      return ajvValidators[primitive];
  }

  //---- Class Definition

  function GeometryResults() {
      // Container for all geometry results
      this.mesh = new THREE.Object3D();

      // Map from primitive name to error string or empty string when no error
      this.primStatus = new StatusMap();

      // Array of THREE.Texture objects used for image based lighting
      this.cubeArray = null;

      this.clear();
  }

  /**
   * Clear / initialize all temporary arrays
   */
  GeometryResults.prototype.clear = function () {
      // Buffer for prims that require a server call
      this.asyncPrims = [];

      // Buffer for combining all point objects
      this.pointPrims = [];

      // Buffer for combining all line objects
      this.linePrims = [];

      // Buffer for combining all surface objects
      this.phongPrims = [];

      // Map from geometry id to material
      // Used to detect shared materials when merging
      this._geometryMaterialMap = {};
  };

  /**
   * Determine if there is any geometry in the mesh object
   * @return {Boolean} True when empty
   */
  GeometryResults.prototype.meshIsEmpty = function () {
      return this.mesh == null || this.mesh.children.length === 0;
  };

  /**
   * Get the mesh or null if it's empty.
   * @return {Object3D} The mesh container or null
   */
  GeometryResults.prototype.getMesh = function () {
      if (this.meshIsEmpty()) {
          return null;
      } else {
          return this.mesh;
      }
  };

  /**
   * Check if the entities match the parasolid entity schema
   * @param {Array} entity Array of arrays or entities
   * @param {GeometryResults} geomResult Object container for errors
   * @returns {boolean} True if the schema checked out
   * @private
   */
  GeometryResults.prototype.checkSchema = function (entity) {
      if (entity.primitive) {
          if (NON_STANDARD_ENTITIES.indexOf(entity.primitive) !== -1) {
              return true;
          }
          var validate = _findValidator(entity.primitive);
          // Warning this assumes validate is synchronous so that we can
          // call validate on a singleton, and read the results safely from it's properties
          if (!validate) {
              this.primStatus.appendError(entity.primitive,"Unknown primitive type.");
              return false;
          }
          if (!validate(entity)) {
              this.primStatus.appendError(entity.primitive, _serializeErrors(validate.errors));
              return false;
          }
          return true;
      } else {
          return false;
      }
  };

  /**
   * Turn ajv errors into strings of their messages
   * @param {Array} errors Ajv error objects
   * @returns {string} Error message
   * @private
   */
  function _serializeErrors(errors) {
      var messages = [];
      for (var i=0; i<errors.length; i++) {
          var error = errors[i];
          var message = '';
          if (error.dataPath) {
              message += error.dataPath+': ';
          }
          message += error.message;
          if ( Object.keys(error.params).length > 0) {
              var param = error.params[Object.keys(error.params)[0]];
              if (message.toLowerCase().indexOf(param) === -1) {
                  message += ' ['+error.params[Object.keys(error.params)[0]]+']';
              }
          }
          messages.push(message);
      }
      return messages.join(', ');
  }

  /**
   * Helper function to run a callback on each entity in the nested array
   * @param {Array} arr Array of arrays or entities
   * @param {Function} cb Callbck function returning boolean
   * @returns {boolean} Reduced return value of the callback
   * @private
   */
  function _recursiveReduce (arr, cb) {
      if (!arr) return false;
      var isValid = false;
      if (arr.primitive) {
          isValid = cb(arr);
      } else if (arr.constructor === Array) {
          isValid = arr.reduce(function(prev, curr) {
              return prev || _recursiveReduce(curr, cb);
          }, false);
      }
      return isValid;
  }
  /**
   * Determine if the given data contains geometry.
   *
   * It must only contain geometry, and arrays of geometry, no mixed types.
   *
   * @param  {Object}  data Flux JSON formatted object.
   * @return {Boolean}      Whether the data is geometry.
   */
  function isKnownGeom (data) {
      var prims = listValidPrims();
      return _recursiveReduce(data, function (item) {
          return prims.indexOf(item.primitive) !== -1;
      });
  }

  /**
   * Determine if the given data contains materials with roughness.
   *
   * Then it is necessary to load the related textures
   *
   * @param  {Object}  entities Flux JSON formatted object.
   * @return {Boolean}      Whether the materials have roughness.
   */
  function hasRoughness(entities) {
      return _recursiveReduce(entities, function (item) {
          return _getEntityData(item, 'roughness', undefined) != null;
      });
  }
  /**
   * Creates THREE scene and geometries from parasolid output.
   * The method is called recursively for each array and entities
   * map
   *
   * @function createObject
   *
   * @param { Object }  data        Parasolid Data from the flux json representation
   * @param { Object } geomResult Object containing properties for categorizing primitives
   */
  function createObject ( data, geomResult ) {

      if (!geomResult || geomResult.constructor !== GeometryResults) {
          throw new Error('Second argument must have class GeometryResults');
      }

      if (data && Object.keys(data).length > 0) {
          geomResult.clear();
          _flattenData(data, geomResult);
          _createObject(geomResult);
      }
  }

  /**
   * Resolve the nested arrays of primitives into categorized flat arrays of primitives.
   * @param {Object} data The entities objects / arrays
   * @param {GeometryResult} geomResult The results container
   * @private
   */
  function _flattenData(data, geomResult) {
      if (!data) return;

      // Breps are skipped when they need to be handled async
      if (data.primitive === 'brep' && (data.faces == null || data.vertices == null)) {
          geomResult.asyncPrims.push(data);
      } else if (data.primitive) {
          if (data.primitive === 'polycurve') {
              Array.prototype.push.apply(geomResult.linePrims,data.curves);
          } else if (data.primitive === 'polysurface') {
              Array.prototype.push.apply(geomResult.phongPrims,data.surfaces);
          } else {
              var type = resolveType(data.primitive).material;
              switch (type) {
                  case MATERIAL_TYPES.POINT: {
                      geomResult.pointPrims.push(data);
                      break;
                  }
                  case MATERIAL_TYPES.LINE: {
                      geomResult.linePrims.push(data);
                      break;
                  }
                  case MATERIAL_TYPES.PHONG: {
                      geomResult.phongPrims.push(data);
                      break;
                  }
              }
          }
      }
      if (data.constructor === Array) {
          for (var i=0;i<data.length;i++) {
              _flattenData(data[i], geomResult);
          }
      }
  }
  /**
   * Create the objects for each geometry type.
   * @param {GeometryResult} geomResult The results container
   * @private
   */
  function _createObject ( geomResult ) {
      _handlePoints(geomResult);
      _handleLines(geomResult);
      _handlePhongs(geomResult);
  }

  /**
   * Create all point objects into point clouds.
   * @param {GeometryResult} geomResult The results container
   * @private
   */
  function _handlePoints(geomResult) {
      var prims = geomResult.pointPrims;
      if (prims.length === 0) return;

      var validPoints = true;
      for (var i=0;i<prims.length; i++) {
          if (!geomResult.checkSchema(prims[i])) {
              validPoints = false;
          }
      }
      if (validPoints) {
          var mesh = createPoints(prims);
          geomResult.primStatus.appendValid('point');
          geomResult.mesh.add(mesh);
      }

  }

  /**
   * Create all the lines primitives.
   * @param {GeometryResult} geomResult The results container
   * @private
   */
  function _handleLines(geomResult) {
      var prims = geomResult.linePrims;
      if (prims.length === 0) return;
      _handlePrimitives(prims, geomResult);
  }

  /**
   * Create all geometry that will be phong shaded.
   * @param {GeometryResult} geomResult The results container
   * @private
   */
  function _handlePhongs(geomResult) {
      var prims = geomResult.phongPrims;
      if (prims.length === 0) return;
      _handlePrimitives(prims, geomResult);
  }

  /**
   * Create all the primitives from a list
   *
   * @param { Object } prims Entity parameter data
   * @param {GeometryResult} geomResult The results container
   */
  function _handlePrimitives( prims, geomResult ) {
      var primMeshes = [];
      var i;

      // create
      for (i=0;i<prims.length;i++) {
          var mesh = _tryCreatePrimitive( prims[i], geomResult);
          if (mesh) {
              primMeshes.push(mesh);
          }
      }

      //sort
      primMeshes.sort(function (a, b) {
          // Leave non meshes at the front of the list.
          if (!a.material) {
              return -1;
          }
          if (!b.material) {
              return 1;
          }
          return a.material.name > b.material.name;
      });

      //merge
      for (i=0;i<primMeshes.length;i++) {
          _maybeMergeModels(primMeshes[i], geomResult);
      }

      if (geomResult.mesh) _upgradeChildrenToBuffer(geomResult.mesh);
  }

  /**
   * Call create primitive and handle errors due to bad inputs
   * @param {Object} data Primitive properties
   * @param {GeometryResults} geomResult The results object for shared data
   * @returns {THREE.Object3D} The created primitive or falsey
   * @private
   */
  function _tryCreatePrimitive(data, geomResult) {
      var mesh;
      var errorMessage = StatusMap.NO_ERROR;
      try {
          mesh = createPrimitive( data, geomResult );
      }
      catch(err) {
          if (err.name !== "FluxGeometryError") {
              throw err;
          } else {
              errorMessage = err.message;
          }
      }
      // Get the error message that exists, and add to it if it exists, or set it
      geomResult.primStatus.appendError(data.primitive, errorMessage);
      return mesh;
  }

  /**
   * Helper function to merge the children of a particular
   * object in the scene graph into the fewest number of children
   * possible.
   *
   * @function _mergeModels
   * @private
   *
   * @param { ThreeJS.Mesh } mesh A three js mesh
   * @param { Object }       geomResult The object being built
   */
  function _maybeMergeModels ( mesh, geomResult ) {
      if ( !geomResult.mesh ) geomResult.mesh = new THREE.Object3D();

      if (!mesh) return;
      mesh.updateMatrixWorld(true);
      var merged = false;
      if (_objectCanMerge(mesh)) {

          var children = geomResult.mesh.children;
          var index = children.length-1;
          var baseMesh = children[index];

          if ( _objectCanMerge( baseMesh)) {
              // Let's move the geometry from mesh to base mesh
              baseMesh.updateMatrixWorld();
              // Remember matrix multiplication applies in reverse
              var matXform = new THREE.Matrix4();
              // Apply the inverse of baseMesh transform to put the vertices from world space into it's local space
              matXform.getInverse(baseMesh.matrixWorld);
              // Apply the mesh transform to get verts from mesh in world space
              matXform.multiply(mesh.matrixWorld);
              merged = _conditionalMerge(baseMesh.geometry, mesh.geometry, matXform, geomResult._geometryMaterialMap);
          }
      }
      if (merged) {
          mesh.geometry.dispose();
      } else {
          geomResult.mesh.add(mesh);
      }
  }
  /**
   * Determine if two geometries have the same configuration of face vertex uvs
   * Used to determine if the geometry can merge.
   * Three.js throws warnings when converting to buffer geometry if they are mismatched.
   * @param {THREE.Geometry} geomA The first geometry
   * @param {THREE.Geometry} geomB The second geometry
   * @returns {boolean} True if they match
   * @private
   */
  function _sameFaceVertexUvs(geomA, geomB) {
      var hasFaceVertexUvA = geomA.faceVertexUvs[ 0 ] && geomA.faceVertexUvs[ 0 ].length > 0;
      var hasFaceVertexUv2A = geomA.faceVertexUvs[ 1 ] && geomA.faceVertexUvs[ 1 ].length > 0;
      var hasFaceVertexUvB = geomB.faceVertexUvs[ 0 ] && geomB.faceVertexUvs[ 0 ].length > 0;
      var hasFaceVertexUv2B = geomB.faceVertexUvs[ 1 ] && geomB.faceVertexUvs[ 1 ].length > 0;
      return hasFaceVertexUvA === hasFaceVertexUvB && hasFaceVertexUv2A === hasFaceVertexUv2B;
  }

  function _conditionalMerge(geom1, geom2, mat, geomMap) {

      var merged = false;
      //Compare string identifiers for materials to see if they are equivalent
      if (geomMap[geom1.id] === geomMap[geom2.id] && _sameFaceVertexUvs(geom1, geom2)) {
          geom1.merge( geom2, mat );
          merged = true;
      }
      return merged;
  }

  /**
   * Determines if an object can merge.
   *
   * Currently only meshes can be merged.
   *
   * @function _objectCanMerge
   * @private
   *
   * @returns { Boolean } Whether the object is a mesh that can be combined with others
   *
   * @param { ThreeJS.Object3D } object The object to check
   */
  function _objectCanMerge ( object ) {
      return object && object.geometry && object.type === 'Mesh' &&
             !( object.geometry instanceof THREE.BufferGeometry ) ;
  }

  /**
   * Takes a mesh and determines whether it can be be converted to buffer geometry.
   *
   *  Currently only meshes can be converted to buffers.
   *
   * @function _objectCanBuffer
   * @private
   *
   * @returns { Boolean } Whether the object can become BufferGeometry
   *
   * @param { ThreeJS.Object3D } object The object to check
   */
  function _objectCanBuffer ( object ) {
      return object.geometry && !( object.geometry instanceof THREE.BufferGeometry ) && object.type === 'Mesh';
  }



  /**
   * Takes a Three js object and upgrades its children
   * to buffer geometries if possible
   *
   * @function _upgradeChildrenToBuffer
   * @private
   *
   * @param { ThreeJS.Object3D } object Object to upgrade the children of
   */
  function _upgradeChildrenToBuffer ( object ) {

      var child;

      for ( var i = 0, len = object.children.length ; i < len ; i++ ) {
          child = object.children[ i ];
          if ( _objectCanBuffer( child ) ) _upgradeGeometryToBuffer( child );
      }

  }



  /**
   * Upgrades an object to a buffer geometry
   *
   * @function _upgradeGeometryToBuffer
   * @private
   *
   * @param { ThreeJS.Object3D } object Object to upgrade
   */
  function _upgradeGeometryToBuffer ( object ) {
      var oldGeom = object.geometry;
      object.geometry = new THREE.BufferGeometry().fromGeometry( oldGeom );
      oldGeom.dispose();
  }

  var modelingCore = (function (module) {
  var exports = module.exports;
  /** @file Helper functions and classes to generate valid JSON queries to Geometry Worker server.
   *  Use {@link scene} as a starting point
   *  @author Igor Baidiuk <ibaidiuk@amcbridge.com>
   */

  /* jslint node:true */

  "use strict";

  /* Initialize this module with schema and registry objects.
   * These arguments are optional, but are required for full units-of-measure
   * support. If not provided, units will not be correctly interpreted
  */
  var _schema = {};
  var _measure = {};
  function init(schema, registry) {
      _schema.schema = schema;
      _measure.registry = registry;
  }

  var eps = 1e-8;

  // Object that containts 'genId' method, to be used for GUID generation
  // Needed for test purposes
  var gen_id_object = {};

  /* Generate uuid, that will be used as geometry id
      By default, this generates undefined. Users who want to generate id's should
      explicitly override the exported property on this module.
   */
  function guid() {
      if (isNone(gen_id_object) || isNone(gen_id_object.genId)) {
          return undefined;
      }
      return gen_id_object.genId();
  }
  // Get id from entity
  function getId(e) {
      if (e.id) {
          return e.id;
      } else if (e.__data__) {
          return e.__data__.id;
      }
      return null;
  }
  /* Converts any array-like object to actual array
     Used mostly with Arguments objects
   */

  var DEFAULT_LINEAR_TOLERANCE = 0.1;
  var DEFAULT_ANGULAR_SIZE     = 30.0;

  function toArray(obj) {
      return Array.prototype.slice.call(obj);
  }

  function notImplemented() {
      throw Error('not implemented');
  }

  function normalize(arr) {
      var m = Math.sqrt(arr[0]*arr[0] + arr[1]*arr[1]  + arr[2]*arr[2]);
      return [arr[0]/m, arr[1]/m, arr[2]/m];
  }

  function xor(l, r) { return l ? !r : r; }
  // Common dump function, returns text representation
  // check for both null and undefined
  function isNone(value) { return value === null || value === undefined; }

  function isInst(value, type) {
      if (!(type instanceof Function))
          throw Error('type: constructor expected');
      if (isNone(value))
          return false;
      return (value instanceof type) || value.constructor == type;
  }
  // Inherit one type from another, adding methods via prototype object
  function inherit(clazz, base, proto) {
      clazz.prototype = Object.create(base.prototype);
      clazz.prototype.constructor = clazz;
      if (proto)
          Object.keys(proto).forEach(
              function (key) {
                  clazz.prototype[key] = proto[key];
              }
          );
  }

  //******************************************************************************
  // Type declarations
  //******************************************************************************
  /** Use factory function {@link scene}
   *  @class
   *  @classdesc Represents block query as scene, with geometrical entities and operations over there
   */
  function Scene() {
      this.__entities__   = {};
      this.__operations__ = [];
      this.__counter__    = 1;
  }
  /** Creates new scene object
   *
   *  @return {Scene} new empty scene object
   */
  var scene = function () { return new Scene(); };
  /** Converts Scene object to JSON representation
   *  Adds custom-conversion support for {@link JSON.stringify}
   *
   *  @return {*} JSON-ready object
   */
  Scene.prototype.toJSON  = function () {
      var ops = dumpOperations(this);
      return {
          Entities:   dumpEntities(this),
          Operations: ops
      };
  };
  /* Resolves Entity or Operation object into its name in query
     Entities without a name are assigned with autogenerated name
     Operations without a name return no name and thus expanded in-place

     @param  {Entity|Operation} object - to be resolved
     @param  {number}           index  - index of current operation block, used to block forward lookups
     @return {string}                    item name, if any
   */
  function resolveItem(self, e, opIndex) {
      var key;
      if (e instanceof Entity) {
          Object.keys(self.__entities__).forEach(function (k) {
              if (!key && self.__entities__[k] === e) {
                  key = k;
              }
          });
          if (!key) {
              key = e.primitive + '@' + self.__counter__;
              self.__entities__[key] = e;
              self.__counter__ += 1;
          }
          return key;
      }
      else if (e instanceof Operation) {
          var ops = self.__operations__;
          var i;

          // find latest binding
          for (i = opIndex - 1; i >= 0; i -= 1) {
              var item = ops[i];
              if (item.operation === e) {
                  key = item.name;
                  break;
              }
          }
          // check if binding wasn't overridden later
          if (key)
              for (var j = opIndex - 1; j > i; j -= 1)
                  if (ops[j].name === key)
                      return undefined;

          return key;
      }
  }

  function dumpOperations(self) {
      var r = [];
      function makeResolver (i) {
          return function(e) { return resolveItem(self, e, i); };
      }

      for (var i = 0, e = self.__operations__.length; i < e; ++i)
          try {
              var item = self.__operations__[i];
              item._resolver = makeResolver(i);
              r.push(item.toJSON());
          }
          finally {
              if (i._resolver) i._resolver = undefined;
          }
      return r;
  }

  /*  @class
      @classdesc Named operation slot
   */
  function OpSlot(name, op) {
      this.name = name;
      this.operation = op;
  }
  OpSlot.prototype.toJSON = function () {
      var op = null;
      try {
          this.operation._resolver = this._resolver;
          op = this.operation.toJSON();
      }
      finally {
          if (this.operation._resolver) this.operation._resolver = undefined;
      }
      return {
          name: this.name,
          op:   op
      };
  };

  /** Adds entity/operation to scene
   *
   *  @param  {string}             name - name of item being added
   *  @param  {Entity|Operation}   obj  - either entity or operation being added
   *  @return {this}                      this, for chaining
   */
  Scene.prototype.add = function(name, obj) {
      if (!isInst(name, String))
          throw Error('name: string expected');
      if (isInst(obj, Entity)) {
          if (this.__entities__[name] !== undefined)
              throw Error('entity "' + name + '" already defined');
          this.__entities__[name] = obj;
      }
      else if (obj.primitive !== undefined) {
          this.__entities__[name] = entities.raw(obj);
      }
      else if (isInst(obj, Operation)) {
          this.__operations__.push(new OpSlot(name, obj));
      }
      else
          throw Error('obj: either Entity or Operation is expected');
      return this;
  };

  //******************************************************************************
  /** Use factory function {@link dcmScene}
   *  @class
   *  @classdesc Represents block query as scene, with geometrical entities, constraints, variables, equations and operations over there
   */
  function DCMScene() {
      this.__entities__   = {};
      this.__constraints__ = {};
      this.__variables__ = {};
      this.__equations__ = {};
      this.__operations__ = [];
  }

  // Adds array of elements to scene
  DCMScene.prototype.addMultiple = function (elements) {
      var self = this;
      Object.keys(elements).forEach(function(key){
          self.add(elements[key], key);
      });
  };

  /** Creates new scene object
   *  @param  {Object} value - optional, object with entities, constraints, etc.., to initialize scene
   *
   *  @return {DCMScene} new scene object
   */
  var dcmScene = function (value) {
      var scene = new DCMScene();
      if (value) {
          Object.keys(value).forEach(function(key) {
              if (value[key])
                  scene.addMultiple(value[key]);
          });
      }

      return scene;
  };
  /** Converts DCMScene object to JSON representation
   *  Adds custom-conversion support for {@link JSON.stringify}
   *
   *  @return {*} JSON-ready object
   */
  DCMScene.prototype.toJSON  = function () {
      var ops = dumpDCMOperations(this);
      var equats = dumpEquations(this);
      var vars = dumpVariables(this);
      var cons = dumpConstraints(this);
      return {
          Entities:       dumpEntities(this),
          Constraints:    cons,
          Variables:      vars,
          Equations:      equats,
          Operations:     ops
      };
  };

  /* Resolves Entity, Constraint, Variable, Equation or Operation object into its name in query
     Entities, Constraints, Variables and Equations without a name are assigned with guid
     Operations without a name return no name and thus expanded in-place

     @param  {Entity|Constraint|Variable|Equation|Operation}  object to be resolved
     @param  {number}                                         index of current operation block, used to block forward lookups
     @return {string}                                         item name, if any
   */
  function resolveDCMItem(self, e, opIndex) {
      var key;
      if (e instanceof Entity) {
          Object.keys(self.__entities__).forEach(function (k) {
              if (!key && self.__entities__[k] === e) {
                  key = k;
              }
          });
          if (!key) {
              key = getId(e) || guid();
              self.__entities__[key] = e;
          }
      }
      else if (e instanceof Operation) {
          var ops = self.__operations__;
          var i;

          // find latest binding
          for (i = opIndex - 1; i >= 0; i -= 1) {
              var item = ops[i];
              if (item.operation === e) {
                  key = item.name;
                  break;
              }
          }
          // check if binding wasn't overridden later
          if (key)
              for (var j = opIndex - 1; j > i; j -= 1)
                  if (ops[j].name === key)
                      return undefined;
      }
      return key;
  }

  /*  Internal function, converts given objects to JSON
   */
  function dumpElements(self, elements) {
      var r = {};
      var es = elements;
      Object.keys(elements).forEach(
          function (k) {
              r[k] = es[k].toJSON();
          }
      );

      return r;
  }

  /*  Internal function, converts entity objects to JSON
   */
  function dumpEntities(self) {
      return dumpElements(self, self.__entities__);
  }

  /*  Internal function, converts constraint objects to JSON
   */
  function dumpConstraints(self) {
      return dumpElements(self, self.__constraints__);
  }

  /*  Internal function, converts variable objects to JSON
   */
  function dumpVariables(self) {
      return dumpElements(self, self.__variables__);
  }

  /*  Internal function, converts variable objects to JSON
   */
  function dumpEquations(self) {
      return dumpElements(self, self.__equations__);
  }

  function dumpDCMOperations(self) {
      var r = [];
      function makeResolver (i) {
          return function(e) { return resolveDCMItem(self, e, i); };
      }

      for (var i = 0, e = self.__operations__.length; i < e; ++i)
          try {
              var item = self.__operations__[i];
              item._resolver = makeResolver(i);
              r.push(item.toJSON());
          }
          finally {
              if (i._resolver) i._resolver = undefined;
          }
      return r;
  }

  DCMScene.prototype.hasEntity = function (name) {
      return this.__entities__[name] !== undefined;
  };

  DCMScene.prototype.hasConstraint = function (name) {
      return this.__constraints__[name] !== undefined;
  };

  DCMScene.prototype.hasVariable = function (name) {
      return this.__variables__[name] !== undefined;
  };

  DCMScene.prototype.hasEquation = function (name) {
      return this.__equations__[name] !== undefined;
  };

  // Helper function. Switches all ids in entity fields to new guids
  function updateEntityIds (elem) {
      if (elem && elem.__data__) {
          var data = elem.__data__;
          var idFields = ['startId', 'endId', 'originId'];
          idFields.forEach(function(field){
              if (data.hasOwnProperty(field)) {
                  data[field] = guid();
              }
          });

          // 'id' field is obligatory
          data.id = guid();
      }

      return elem;
  }

  DCMScene.prototype.updateEntity = function (old) {
      var name = getId(old);
      var self = this;
      if (!self.hasEntity(name))
          throw Error("Entity " + name + " is not present in scene");
      var e = self.__entities__[name];
      updateEntityIds(e);
      return e;
  };

  // Generates entities related to given one (e.g. end points
  // of the line), adds them and entity itself to scene
  DCMScene.prototype.addEntity = function(entity, name) {
      var self = this;
      var data = entity.__data__;
      switch (data.primitive)
      {
          case 'point':
          case 'curve':
          {
              // Entity is self-sufficient, so need to add only entity itself
              break;
          }
          case 'line':
          {
              if (!self.hasEntity(data.startId)) {
                  self.addEntity(entities.point(data.start, data.startId), data.startId);
              }
              if (!self.hasEntity(data.endId)) {
                  self.addEntity(entities.point(data.end, data.endId), data.endId);
              }
              break;
          }
          case 'circle':
          case 'ellipse':
          {
              if (!self.hasEntity(data.originId)) {
                  self.addEntity(entities.point(data.origin, data.originId), data.originId);
              }
              break;
          }
          case 'arc':
          {
              if (!self.hasEntity(data.originId)) {
                  var origin = getCircleCenterByThreePoints(data.start, data.middle, data.end);
                  self.addEntity(entities.point(origin, data.originId), data.originId);
              }
              if (!self.hasEntity(data.startId)) {
                  self.addEntity(entities.point(data.start, data.startId), data.startId);
              }
              if (!self.hasEntity(data.endId)) {
                  self.addEntity(entities.point(data.end, data.endId), data.endId);
              }
              break;
          }
          case 'polyline':
          {
              notImplemented(); // TODO Need to know which blocks will be given as inputs
              break;
          }
          case 'polycurve':
          {
              notImplemented(); // TODO Implement after polyline
              break;
          }
          default:
          {
              throw Error("Entity with primitive " + entity.primitive + " can not be added to scene");
          }
      }

      self.__entities__[name] = entity;
  };
  /** Adds entity/constraint/variable/equation/operation to scene
   *
   *  @param          obj  - either entity, constraint, variable, equation or operation being added
   *  @param {string} name - name of item being added
   *  @return              - this object, for chain of calls
   */
  DCMScene.prototype.add = function(obj, name) {
      name = name || getId(obj);
      if (!isInst(name, String))
          throw Error('name: string expected ' + name + '   ' + JSON.stringify(obj));
      if (isInst(obj, Entity)) {
          if (!this.hasEntity(name))
              this.addEntity(obj, name);
      }
      else if (isInst(obj, Constraint)) {
          if (this.hasConstraint(name))
              throw Error('constraint "' + name + '" already defined');
          this.__constraints__[name] = obj;
      }
      else if (isInst(obj, Variable)) {
          if (this.hasVariable(name))
              throw Error('variable "' + name + '" already defined');
          this.__variables__[name] = obj;
      }
      else if (isInst(obj, Equation)) {
          if (this.hasEquation(name))
              throw Error('equation "' + name + '" already defined');
          this.__equations__[name] = obj;
      }
      else if (obj.primitive !== undefined) {
          if (!this.hasEntity(name))
              this.addEntity(entities.raw(obj), name);
      }
      else if (obj.type !== undefined) {
          if (this.hasConstraint(name))
              throw Error('constraint "' + name + '" already defined');
          this.__constraints__[name] = constraints.raw(obj);
      }
      else if (obj.name !== undefined && obj.value !== undefined) {
          throw Error('Adding raw variable is not supported');
      }
      else if (obj.equation !== undefined) {
          throw Error('Adding raw equation is not supported');
      }
      else if (isInst(obj, Operation)) {
          this.__operations__.push(new OpSlot(name, obj));
      }
      else
          throw Error('obj: either Entity, Constraint, Variable, Equation or Operation is expected');
      return this;
  };

  //******************************************************************************
  /** Use functions from {@link entities} to construct
   *  @class
   *  @classdesc Represents entity in Flux protocol. These objects are added to the 'Entities' part of scene
   */
  function Entity(id) { this.primitive = id; }
  /** JSON representation of entity
   *  Adds support for {@link JSON.stringify}
   *
   *  @return {*} JSON object
   */
  Entity.prototype.toJSON    = function() { return this.__data__; };

  /** Add attribute to entity
   *  If first argument is a string, it's treated as attribute type,
   *  and second argument is treated as attribute value.
   *  Otherwise, first argument is treated as full attribute object.
   *  Its type key is retrieved via type() method,
   *  and the whole object is used as attribute value.
   *  See {@link attributes} for known attribute types
   *
   *  @param  {*|string} objkey  - either attribute key (string) or full attribute object (*)
   *  @param  {*}        [value] - raw attribute value
   *  @return {this}               this, for chaining
   */
  Entity.prototype.attribute = function(keyobj, value) {
      var d = this.__data__;
      var key;
      if (typeof(keyobj) === "string")
          key = keyobj;
      else
      {
          key = keyobj.type();
          value = keyobj;
      }

      if (!d.attributes)
          d.attributes = {};
      if (d.attributes[key])
          throw Error("attribute of type '" + key + "' already defined");
      d.attributes[key] = value;
      return this;
  };
  //******************************************************************************/
  // Pseudo-classes representing entity categories

  /**
   *  @class
   *  @extends Entity
   *  @classdesc Represents any limited embodied geometry
   */
  function Body() { Entity.apply(this, arguments); }
  // Inherit Body from Entity
  inherit(Body, Entity,
  /** @lends Body.prototype */
  {
      /** Adds axis vector to the body
      *   @param {number[]|Vector} a - axis vector
      *   @return {this}               this, for chaining
      */
      axis: function (a) {
          this.__data__.axis = vecCoords(a);
          return this;
      },
      /** Adds reference vector to the body
      *   @param {number[]|Vector} ref - reference vector
      *   @return {this}                 this, for chaining
      */
      reference: function (ref) {
          this.__data__.reference = vecCoords(ref);
          return this;
      }
  });
  /**
   *  @class
   *  @extends Body
   *  @classdesc Represents 3D point
   */
  function Point() { Body.apply(this, arguments); }
  inherit(Point, Body);
  /**
   *  @class
   *  @extends Body
   *  @classdesc Wire entities, i.e. polylines, curves, ellipses
   */
  function Wire() { Body.apply(this, arguments); }
  inherit(Wire, Body);
  /**
   *  @class
   *  @extends Body
   *  @classdesc Sheet entities, i.e. polygon sets, surfaces
   */
  function Sheet() { Body.apply(this, arguments); }
  inherit(Sheet, Body);
  /**
   *  @class
   *  @extends Body
   *  @classdesc Solid entities, i.e. meshes, spheres, boxes
   */
  function Solid() { Body.apply(this, arguments); }
  inherit(Solid, Body);
  /**
   *  @class
   *  @extends Body
   *  @classdesc General bodies; can be received only as a result of some operation
   */
  function General() { Body.apply(this, arguments); }
  inherit(General, Body);

  /**
   *  @class
   *  @extends Entity
   *  @classdesc Analytical geometry entities
   */
  function Geometry() { Entity.apply(this, arguments); }
  inherit(Geometry, Entity);
  /**
   *  @class
   *  @extends Geometry
   *  @classdesc Infinite plane
   */
  function Plane() { Geometry.apply(this, arguments); }
  inherit(Plane, Geometry);
  /**
   *  @class
   *  @extends Geometry
   *  @classdesc 3D direction vector
   */
  function Vector() { Geometry.apply(this, arguments); }
  inherit(Vector, Geometry);


  function parsePath(s) {
      if(s[0] !== "#") {
          throw "Expected paths similar to #/foo/bar/baz";
      }
      s = s.substr(2);
      return s.split("/");
  }

  function getSubSchema(refPath) {
      var components = parsePath(refPath);
      var s = _schema.schema;
      for (var i = 0; i < components.length; i++) {
          var sub = s[components[i]];
          s = sub;
      }
      return s;
  }

  function recurseToDimension(subSchema) {
      if (subSchema === undefined) {
          return undefined;
      }
      if (subSchema.$ref !== undefined) {
          return recurseToDimension(getSubSchema(subSchema.$ref));
      }
      if (subSchema.oneOf !== undefined) {
          return recurseToDimension(subSchema.oneOf[0]);
      }
      switch(subSchema.type) {
          // As our units-of-measurement schema does not index into arrays,
          // assume that all items in each array have the same dimension.
          case "array":
              return recurseToDimension(subSchema.items);
          case "number":
              return subSchema.fluxDimension;
          // We swallow any sub-objects that might ahve further
          // case "object":
      }
      return undefined;
  }

  /** Looks up field to dimension mapping for entity types.
   * This is a very limited implementation that only supports units scoped a
   * single-field deep, and does not support indexing into composite entities
   * (eg, polycurve and polysurface). It does work for the existing set of
   * entities as described in psworker.json, but extensions to that may require
   * revisiting this implementation.
   *
   *  @param  {string}    typeid  - name of entity type, value for 'primitive' property
   *  @return {object}            - map from field to dimension
   */
  function lookupFieldDimensions(typeid) {
      if (!_schema.schema)
          return {};
      var subSchema = _schema.schema.entities[typeid];

      var results = {};
      for (var key in subSchema.properties) {
          var d = recurseToDimension(subSchema.properties[key]);
          if (d !== undefined) {
              results[key] = d;
          }
      }
      return results;
  }


  // TODO(andrew): consdier setting these at a per-project level, rather than
  // hardcoding them.
  var _defaultDimToUnits = {
      "length":"meters",
      "area":"meters*meters",
      "volume":"meters*meters*meters",
      "angle":"degrees"
  };


  /** Looks up default field units
   *
   *  @param  {string}    typeid  - name of entity type, value for 'primitive' property
   *  @return {object}            - map from field to unit, appropriate for setting
   *                                as the "units" field of an entity.
   */
  function defaultUnits(typeid) {
      var dimensions = lookupFieldDimensions(typeid);
      var results;
      for (var key in dimensions) {
          if (results === undefined) {
              results = {};
          }
          results[key] = _defaultDimToUnits[dimensions[key]];
      }
      return results;
  }

  /** Determines whether or not an entity has units information attached
   *
   *  @param  {object}    entity  - name of entity type, value for 'primitive' property
   *  @return {object}            - map from field to unit, appropriate for setting
   *                                as the "units" field of an entity.
   */
  function detectUnits(entity) {
      // TODO(andrew): get rid of __data
      if (entity instanceof Entity) {
          entity = entity.toJSON();
      }

      // If units are defined, return true
      if (entity.units) {
          return true;
      }

      // Brep entities have implicit units.
      if (entity.primitive == "brep") {
          return true;
      }

      // For polycurve and polysurface entities, loop through subentities;
      if (entity.primitive == "polycurve") {
          for (var i = 0; i < entity.curves.length; i++) {
              if (detectUnits(entity.curves[i])) {
                  return true;
              }
          }
      }
      if (entity.primitive == "polysurface") {
          for (var j = 0; j < entity.surfaces.length; j++) {
              if (detectUnits(entity.surfaces[j])) {
                  return true;
              }
          }
      }

      return false;
  }


  /** Helper function

      @private
      @param  {string}   typeid  - name of entity type, value for 'primitive' property
      @param  {any}      params  - additional parameters of entity
      @param  {function} OptCtor - optional, constructor function; {@link Entity} if undefined
      @return {Entity}             Entity or any other type specified by OptCtor
  */
  function primitive(typeid, params, OptCtor) {
      OptCtor = OptCtor || Entity;
      var e = new OptCtor(typeid);
      e.__data__ = params;
      e.__data__.primitive = typeid;
      e.__data__.units = defaultUnits(typeid);
      return e;
  }
  /** Helper function to extract point coordinates

      @private
      @param  {any}   obj  - entity or array
      @param  {string} dimToUnits - optional, desired units of resulting
          vector. Only used if the input object is an entity, and if this module
          has been init'd with a units of measure registry.
      @return {Array}             Coordinate array
  */
  function coords(obj, dimToUnits) {
      if (Array.isArray(obj))
          return obj;

      // TODO(andrew): get rid of the __data subobject.
      if (obj instanceof Point) {
          obj = obj.toJSON();
      }

      if (obj.primitive == "point") {
          if (dimToUnits === undefined) {
              dimToUnits = _defaultDimToUnits;
          }

          // Only perform the conversion if we have a registry, and if the units
          // do not already match the desired units.
          if (_measure.registry !== undefined &&
              obj.units && obj.units.point != dimToUnits.length) {
              obj = _measure.registry.ConvertUnits(obj,dimToUnits);
          }
          return obj.point;
      }
      throw Error("expected array of numbers or Point entity");
  }

  function mapCoords(vec) {
      var out = [];
      for (var i = 0, e = vec.length; i < e; ++i)
          out.push(coords(vec[i]));
      return out;
  }

  /** Helper function to extract vector components

      @private
      @param  {any}   obj  - entity or array
      @param  {string} dimToUnits - optional, desired units of resulting
          vector. Only used if the input object is an entity, and if this module
          has been init'd with a units of measure registry.
      @return {Array}             Component array
  */
  function vecCoords(obj, dimToUnits) {
      if (Array.isArray(obj))
          return obj;

      if (obj instanceof Vector) {
          obj = obj.toJSON();
      }

      if (obj.primitive == "vector") {
          if (dimToUnits === undefined) {
              dimToUnits = _defaultDimToUnits;
          }

          // Only perform the conversion if we have a registry, and if the units
          // do not already match the desired units.
          if (_measure.registry !== undefined &&
              obj.units && obj.units.coords != dimToUnits.length) {
              obj = _measure.registry.ConvertUnits(obj,dimToUnits);
          }
          return obj.coords;
      }
      throw Error("expected array of numbers or Vector entity");
  }

  function mapVecCoords(vec) {
      var out = [];
      for (var i = 0, e = vec.length; i < e; ++i)
          out.push(vecCoords(vec[i]));
      return out;
  }

  // Multiply 2 matrices
  function multMatrix(a, b) {
      var len = a.length;

      var c = new Array(len);
      var i;

      var dim = Math.sqrt(len);

      for (i = 0; i < dim; ++i)
          for (var j = 0; j < dim; ++j) {
              var s = 0;
              for (var k = 0 ; k < dim; ++k)
                  s += a[i * dim + k] * b[k * dim + j];
              c[i * dim + j] = s;
          }
      return c;
  }
  // Applies additional affine transform by pre-multiplying
  function applyMatrix(self, m) {
      self.__data__.mat = multMatrix(m, self.__data__.mat);
      return self;
  }

  /** Use {@link entities.affine} to construct
   *  @class
   *  @extends Entity
   *  @classdesc Entity which represents affine transformation matrix
   */
  function Affine() { Entity.apply(this, arguments); }
  // Inherit Affine from Entity
  inherit(Affine, Entity,
  /** @lends Affine.prototype */
  {
      /** Adds 3D translation
       *  @param  {number[]|Vector} delta - translation vector
       *  @return {this}                    this, for chaining
       */
      translate: function (d) {
          d = vecCoords(d);
          return applyMatrix(this, [
               1,  0,  0, d[0],
               0,  1,  0, d[1],
               0,  0,  1, d[2],
               0,  0,  0,  1
          ]);
      },
      /** Adds 3D rotation around X axis
       *  @param  {number} phi - rotation angle, in degrees
       *  @return {this}         this, for chaining
       */
      rotateX: function (phi) {
          phi = phi * Math.PI / 180;
          var sin = Math.sin(phi), cos = Math.cos(phi);
          return applyMatrix(this, [
               1,    0,    0, 0,
               0,  cos,  sin, 0,
               0, -sin,  cos, 0,
               0,    0,    0, 1
          ]);
      },
      /** Adds 3D rotation around Y axis
       *  @param  {number} phi - rotation angle, in degrees
       *  @return {this}         this, for chaining
       */
      rotateY: function (phi) {
          phi = phi * Math.PI / 180;
          var sin = Math.sin(phi), cos = Math.cos(phi);
          return applyMatrix(this, [
                cos, 0, -sin, 0,
                  0, 1,    0, 0,
                sin, 0,  cos, 0,
                  0, 0,    0, 1
          ]);
      },
      /** Adds 3D rotation around Z axis
       *  @param  {number} phi - rotation angle, in degrees
       *  @return {this}         this, for chaining
       */
      rotateZ: function (phi) {
          phi = phi * Math.PI / 180;
          var sin = Math.sin(phi), cos = Math.cos(phi);
          return applyMatrix(this, [
                cos,  sin, 0, 0,
               -sin,  cos, 0, 0,
                  0,    0, 1, 0,
                  0,    0, 0, 1
          ]);
      },
      /** Adds 3D scaling
       *  @param  {number[]|Vector} scale - scaling vector
       *  @return {this}                    this, for chaining
       */
      scale: function(s) {
          s = vecCoords(s);
          return applyMatrix(this, [
               s[0],  0,   0,  0,
                 0, s[1],  0,  0,
                 0,   0, s[2], 0,
                 0,   0,   0,  1
          ]);
      },
      /** Rotate around arbitrary vector
       *  @param  {number[]|Vector} axis - rotation axis
       *  @param  {number}          phi  - rotation angle, in degrees
       *  @return {this}                   this, for chaining
       */
      rotateAboutAxis: function (a, phi) {
          phi = phi * Math.PI / 180;
          var sin = Math.sin(phi), cos = Math.cos(phi);
          a = vecCoords(a);
          a = normalize(a);
          var x = a[0], y = a[1], z = a[2];
          return applyMatrix(this, [
              cos+x*x*(1-cos),    x*y*(1-cos)-z*sin, y*sin+x*z*(1-cos),  0,
              z*sin+x*y*(1-cos),  cos+y*y*(1-cos),   -x*sin+y*z*(1-cos), 0,
              -y*sin+x*z*(1-cos), x*sin+y*z*(1-cos), cos+z*z*(1-cos),    0,
              0,                  0,                 0,                  1
          ]);
      },
      /** Reflect against specified plane
       *  @param  {number[]|Point} normal - plane's normal vector
       *  @param  {number[]|Point} origin - in-plane point
       *  @return {this}        this, for chaining
       */
      reflection: function (n, p) {
          n = vecCoords(n);
          p = coords(p);
          var nx = n[0], ny = n[1], nz = n[2],
              px = p[0], py = p[1], pz = p[2];

          var len = Math.sqrt(nx*nx + ny*ny + nz*nz);
          nx /= len; ny /= len; nz /= len;

          var d = -nx * px - ny * py - nz * pz;

          return applyMatrix(this, [
              1.0 - 2 * nx * nx,  -2 * nx * ny,       -2 * nx * nz,       -2 * nx * d,
              -2 * nx * ny,       1.0 - 2 * ny * ny,  -2 * ny * nz,       -2 * ny * d,
              -2 * nx * nz,       -2 * ny * nz,       1.0 - 2 * nz * nz,  -2 * nz * d,
              0,                  0,                  0,                  1
          ]);
      },

      /** Compose with another transformation
       *  @param {affine} t - transformation to compose with.
       */
       compose: function (t) {
          return applyMatrix(this, t.mat || t.__data__.mat);
       }
  });

  /** Use {@link entities.polygonSet} to construct
   *  @class
   *  @extends Sheet
   *  @classdesc Entity which represents set of polygons
   */
  function PolygonSet() { Sheet.apply(this, arguments); }
  // inherit PolygonSet from Entity
  inherit(PolygonSet, Sheet,
  /** @lends PolygonSet.prototype */
  {
      /** Adds new outer boundary loop polygon to set
       *
       *  @function
       *  @param  {...(number[]|Point)} points - a set of points representing polygon
       *  @return {this}                 this, for chaining
       */
      boundary: function () { // add polygon to set
          var polys = this.__data__.polygons;

          polys.push({
              boundary: mapCoords(arguments),
              holes: []
          });
          return this;
      },
      /** Adds inner hole loop to the last polygon in a set
       *
       *  @function
       *  @param  {...(number[]|Point)} points - a set of points representing hole
       *  @return {this}                 this, for chaining
       */
      hole: function() { // add hole to last polygon
          var polys = this.__data__.polygons;
          var last = polys[polys.length - 1];
          last.holes.push(mapCoords(arguments));
          return this;
      }
  });
  /** Use {@link entities.mesh} to construct
   *  @class
   *  @extends Solid
   *  @classdesc Entity which represents 3D polygonal mesh
   */
  function Mesh() { Solid.apply(this, arguments); }
  // inherit Mesh from Entity
  inherit(Mesh, Solid,
  /** @lends Mesh.prototype */
  {
      /** Adds vertex to mesh
       *
       *  @function
       *  @param  {number[]|Point} coords
       *  @return {this}           this, for chaining
       */
      vertex: function (c) {
          this.__data__.vertices.push(coords(c));
          return this;
      },
      /** Builds new face in mesh from vertex indices
       *
       *  @function
       *  @param  {...number} index - indices of vertices constituting face
       *  @return {this}              this, for chaining
       */
      face: function() {
          this.__data__.faces.push(toArray(arguments));
          return this;
      }
  });

  function appendToField(field) {
      return function() {
          var self = this;
          toArray(arguments).forEach(function (i) {
              self.__data__[field].push(i);
          });
          return this;
      };
  }
  // Transforms incoming data item to 'canonical' weighted vertex form
  // Canonical form is a 2-element array, with first element being 3-element array with point coordinates
  // and second being either weight noumber or 'undefined'
  //
  // Supported forms are:
  // 1. 3-number array  - unweighted
  // 2. 4-number array  - weighted
  // 3. Point           - unweighted
  // 4. [Point]         - unweighted
  // 5. [Point, number] - weighted
  // 6. Point.toJSON()  - unweighted
  function canonicVertex(item) {
      if (Array.isArray(item)) {       // one of array cases
          if (item.length == 1)
              // repr #4 - unpack single array element and try to treat it as item
              return canonicVertex(item[0]);
          if (item.length == 2)
              // repr #5
              return [coords(item[0]), item[1]];
          if (item.length == 3)
              // repr #1
              return [item, undefined];
          if (item.length == 4)
              // repr #2
              return [item.slice(0, 3), item[3]];
      }
      else if (item instanceof Point || item.primitive == "point") // Point case
          // repr #3, #6
          return [coords(item), undefined];
      // Didn't match anything, so just throw
      throw Error("Unsupported vertex representation");
  }

  function appendVertex(ctxt, item) {
      item = canonicVertex(item);
      var pt = item[0], w = item[1];

      if (ctxt.weights === undefined) {
          if (w !== undefined) {
              if (ctxt.points.length === 0)
                  ctxt.weights = [ w ];
              else
                  throw Error('Cannot add weighted vertex because previous vertices were weightless');
          }
          ctxt.points.push(pt);
      }
      else {
          if (w === undefined)
              throw Error('Vertex must have weight specified');
          ctxt.weights.push(w);
          ctxt.points.push(pt);
      }
      // NB: case where points are empty, and weights are not, isn't an error - because weights are in a linear array, and points aren't always
  }

  /** Use {@link entities.curve} to construct
   *  @class
   *  @extends Wire
   *  @classdesc Entity which represents NURBS curve
   */
  function Curve() { Wire.apply(this, arguments); }
  // inherit Curve from Wire
  inherit(Curve, Wire,
  /** @lends Curve.prototype */
  {
      /** Appends numbers to array of knots
       *
       *  @function
       *  @param  {...number} knot - knot values
       *  @return {this}             this, for chaining
       */
      knots:  appendToField('knots'),
      /** Adds curve vertex, either weighted or weightless
       *
       *  Weightless vertices are specified in one of the following formats:
       *  - 3 numbers
       *  - 1 Point
       *  - array of 3 numbers
       *  Weighted vertices are specified in one of the following formats:
       *  - 4 numbers
       *  - 1 Point, 1 number
       *  - array of 3 numbers, 1 number
       *  Also, any of these sets of arguments can be passed as a single argument, packed into array
       *  @function
       *  @return {this}                      this, for chaining
       */
      vertex: function () {
          var c    = this.__data__;
          var ctxt = { points: c.controlPoints, weights: c.weights };
          appendVertex(ctxt, toArray(arguments));
          c.controlPoints = ctxt.points;
          c.weights       = ctxt.weights;
          return this;
      }
  });

  /** Use {@link entities.surface} to construct
   *  @class
   *  @extends Sheet
   *  @classdesc Entity which represents NURBS surface
   */
  function Surface() { Sheet.apply(this, arguments); }
  // inherit Surface from Sheet
  inherit(Surface, Sheet,
  /** @lends Surface.prototype */
  {
      /** Appends numbers to array of U-axis knots
       *
       *  @function
       *  @param  {...number} knot - knot values
       *  @return {this}             this, for chaining
       */
      uKnots: appendToField('uKnots'),
      /** Appends numbers to array of V-axis knots
       *
       *  @function
       *  @param  {...number} knot - knot values
       *  @return {this}             this, for chaining
       */
      vKnots: appendToField('vKnots'),
      /** Appends separate row (along surface's U axis) of control points to surface
       *
       *  @function
       *  @param  {...any} point - control points; for supported point representations, see {@link Curve#vertex}, except each vertex is passed as a single argument
       *  @return {this}           this, for chaining
       */
      row: function() {
          var c    = this.__data__;
          var ctxt = { points: [], weights: c.weights };

          for (var i = 0, e = arguments.length; i < e; ++i)
              appendVertex(ctxt, toArray(arguments[i]));

          c.controlPoints.push(ctxt.points);
          c.weights = ctxt.weights;
          return this;
      },
      /** Appends multiple rows of control points to surface
       *
       *  @function
       *  @param  {...any[]} row - rows of control points; see {@link Surface#row} for exact row structure
       *  @return {this}           this, for chaining
       */
      points: function() {
          for (var i = 0, e = arguments.length; i < e; ++i)
              this.row.apply(this, arguments[i]);
          return this;
      }
  });

  //******************************************************************************
  /** Use functions from {@link constraints} to construct
   *  @class
   *  @classdesc Represents constraint in Flux protocol. These objects are added to the 'Constraints' part of scene
   */
  function Constraint(id) { this.type = id; }

  /** JSON representation of constraint
   *  Adds support for {@link JSON.stringify}
   *
   *  @return {*} JSON object
   */
  Constraint.prototype.toJSON = function () {
      return this.__data__;
  };

  /** Helper function

      @private
      @param  {string}   typeid  - name of constraint type, value for 'type' property
      @param  {any}      params  - additional parameters of constraint
      @return {Constraint}         Constraint
  */
  function type(typeid, params) {
      var e = new Constraint(typeid);
      e.__data__ = params;
      e.__data__.type = typeid;
      e.__data__.id = guid();
      return e;
  }

  //******************************************************************************
  /** Use functions from {@link variables} to construct
   *  @class
   *  @classdesc Represents variable in Flux protocol. These objects are added to the 'Variables' part of scene
   */
  function Variable() {}

  /** Helper function

      @private
      @param  {any}      params - parameters of variable
      @return {Variable}          Variable
  */
  function variable(params) {
      var v = new Variable();
      v.__data__ = params;
      v.__data__.id = guid();
      return v;
  }

  /** JSON representation of variable
   *  Adds support for {@link JSON.stringify}
   *
   *  @return {*} JSON object
   */
  Variable.prototype.toJSON = function () {
      return this.__data__;
  };

  //******************************************************************************
  /** Use functions from {@link equations} to construct
   *  @class
   *  @classdesc Represents equation in Flux protocol. These objects are added to the 'Equations' part of scene
   */
  function Equation() {}

  /** Helper function

      @private
      @param  {any}      params - parameters of equation
      @return {Equation}          Equation
  */
  function equation(params) {
      var e = new Equation();
      e.__data__ = params;
      e.__data__.id = guid();
      return e;
  }

  /** JSON representation of equation
   *  Adds support for {@link JSON.stringify}
   *
   *  @return {*} JSON object
   */
  Equation.prototype.toJSON = function () {
      return this.__data__;
  };

  //******************************************************************************
  /** Use functions from {@link operations} to construct
   *  @class
   *  @classdesc Encapsulates info about operation in DCM/Parasolid Worker protocol
   */
  function Operation(id) {
      this.opcode = id;
  }
  /** Converts operation body to JSON
      Adds support for {@link JSON.stringify}

      @return {*} JSON-ready object
   */
  Operation.prototype.toJSON = function () {
      var r = [this.opcode];
      var self = this;
      if (this.args) {
          this.args.forEach(function (v) {
              if (v instanceof Operation) {
                  try {
                      var name = self._resolver(v); // check if that operation was already bound
                      if (name) {
                          r.push(name);
                      }
                      else {
                          v._resolver = self._resolver;
                          r.push(v.toJSON());
                      }
                  }
                  finally {
                      if (v._resolver) v._resolver = undefined;
                  }
              }
              else if (v instanceof Entity) { // locate bound entity by name
                  if (!self._resolver)
                      throw Error("No entity resolver provided");
                  r.push(self._resolver(v));
              }
              else if (v.primitive !== undefined) {
                  var eraw = entities.raw(v);
                  if (!self._resolver)
                      throw Error("No entity resolver provided");
                  r.push(self._resolver(eraw));
              }
              else {
                  r.push(v);
              }
          });
      }
      return r;
  };
  // Helper, generates operation factory
  function op(id, nargs) {
      return function() {
          var r = new Operation(id);
          r.args = toArray(arguments).slice(0, nargs);
          return r;
      };
  }
  //******************************************************************************
  // Attributes
  //******************************************************************************

  /** Use {@link attributes.material} to construct
   *  @class
   *  @classdesc Material attribute
   */
  function Material() { this.__data__ = { }; }
  /** @lends Material.prototype */
  Material.prototype = {
      constructor: Material,
      /** Returns "material" for attribute type name
       *  @return {string} "material"
       */
      type: function() { return "material"; },
      /** Converts material to JSON object. Adds support for {@link JSON.stringify}
       *  @return {*} JSON-ready object
       */
      toJSON: function() { return this.__data__; },
      /** Sets ambient, diffuse and specular color values
       *
       *  @function
       *  @param  {number} - red
       *  @param  {number} - green
       *  @param  {number} - blue
       *  @return {this}     this, for chaining
       */
      color: function (r, g, b) {
          return this.ambient(r, g, b).diffuse(r, g, b).specular(r, g, b).power(1);
      },
      /** Sets ambient color
       *
       *  @function
       *  @param  {number} - red
       *  @param  {number} - green
       *  @param  {number} - blue
       *  @return {this}     this, for chaining
       */
      ambient: function (r, g, b) {
          this.__data__.ambient = [r, g, b];
          return this;
      },
      /** Sets specular color
       *
       *  @function
       *  @param  {number} - red
       *  @param  {number} - green
       *  @param  {number} - blue
       *  @return {this}     this, for chaining
       */
      specular: function (r, g, b) {
          this.__data__.specular = [r, g, b];
          return this;
      },
      /** Sets diffuse color
       *
       *  @function
       *  @param  {number} - red
       *  @param  {number} - green
       *  @param  {number} - blue
       *  @return {this}     this, for chaining
       */
      diffuse: function (r, g, b) {
          this.__data__.diffuse = [r, g, b];
          return this;
      },
      /** Sets specular power
       *
       *  @function
       *  @param  {number} power
       *  @return {this}   this, for chaining
       */
      power: function (s) {
          this.__data__.power = s;
          return this;
      }
  };

  var attributes =
  /** Attribute constructors.
   *  Attributes are added to entities via {@link Entity#attribute Entity.attribute}
   *  @namespace attributes
   */
  {
      /** Constructs material attribute
       *  @function
       *  @return {Material}
       */
      material: function () { return new Material(); }
  };

  /** Sets entity attribute on either a list of entities, raw object or instance of entity.
   *
   *  @function
   *  @param  {entity} entity - entity to modify
   *  @param  {string} property   - property
    *  @param  {*} value   - value
   *  @return {*}                 - entity with attribute set
   */
  var setEntityAttribute = function(entity, property, value) {
      if (Array.isArray(entity)) {
          return entity.map(function(elt) {
              setEntityAttribute(elt, property, value);
          });
      }
      if (!(entity instanceof Entity)) {
          // Rehydrate entity. This moves fields to the __data__ field, and attaches
          // entity methods.
          var ent = entities.raw(entity);
          ent.attribute(property, value);
          return ent.toJSON();
      } else {
          return entity.attribute(property, value);
      }
  };

  /** Gets entity attribute on either raw object or instance of entity.
   *
   *  @function
   *  @param  {Entity} entity - entity to query
   *  @param  {string} property   - property
   *  @return {*}                 - attribute value
   */
  var getEntityAttribute = function(entity, property) {
      if (Array.isArray(entity)) {
          return entity.map(function(elt) {
              getEntityAttribute(elt, property);
          });
      }
      if (!(entity instanceof Entity)) {
          // Rehydrate entity. This moves fields to the __data__ field, and attaches
          // entity methods.
          return entity.attributes[property];
      } else {
          return entity.__data__.attributes[property];
      }
  };


  //******************************************************************************
  // Utilities
  //******************************************************************************
  var utilities = {
      coords:coords,
      vecCoords:vecCoords,
      setEntityAttribute: setEntityAttribute,
      getEntityAttribute: getEntityAttribute,
      defaultUnits: defaultUnits,
      detectUnits: detectUnits,
      lookupFieldDimensions: lookupFieldDimensions
  };

  //******************************************************************************
  // Entities
  //******************************************************************************
  // var entities is used for self-call
  var entities =
  /** Entity constructors
   *  @namespace entities
   */
  {
      //******************************************************************************
      // Raw entity, specified directly as JSON
      //******************************************************************************
      /** Constructs entity object from raw data. No checks for primitive value, body being object etc.
       *
       *  @param  {*}      body - any JavaScript value
       *  @return {Entity}
       */
      raw: function(body) {
          var e = new Entity(body.primitive);
          e.__data__ = body;
          return e;
      },

      //******************************************************************************
      // Vector entity
      //******************************************************************************

      /** Constructs Vector entity
       *
       *  @function
       *  @param  {number[]|Vector} coords - vector coordinates
       *  @return {Vector}
       */
      vector: function (vec) {
          return primitive('vector', { coords: vecCoords(vec) }, Vector);
      },

      //******************************************************************************
      // Point entity
      //******************************************************************************

      /** Constructs point entity
       *
       *  @function
       *  @param  {number[]|Point} coords - array with point coordinates
       *  @param  {string}         name   - optional, entity id
       *  @return {Point}
       */
      point: function (pt, name) {
          return primitive('point', {
              point: coords(pt),
              id: name || guid()
          }, Point);
      },

      //******************************************************************************
      // Wire entities
      //******************************************************************************

      /** Constructs line entity
       *
       *  @function
       *  @param  {number[]|Point} start - starting point
       *  @param  {number[]|Point} end   - end point
       *  @param  {string}         name  - optional, entity id
       *  @return {Wire}          line entity
       */
      line: function (start, end, name) {
          return primitive('line', {
              start: coords(start),
              end: coords(end),
              startId: getId(start) || guid(),
              endId: getId(end) || guid(),
              id: name || guid()
          }, Wire);
      },
      /** Constructs polyline entity
       *
       *  @function
       *  @param  {...number[]|Point} point - a set of points forming polyline
       *  @return {Wire}                      polyline entity
       */
      polyline: function() {
          return primitive('polyline', {
              points: mapCoords(arguments)
          }, Wire);
      },
      /** Constructs arc entity
       *
       *  @function
       *  @param  {number[]|Point}    start  - start point
       *  @param  {number[]|Point}    middle - middle point
       *  @param  {number[]|Point}    end    - end point
       *  @param  {string}            name   - optional, entity id
       *  @return {Wire}              arc entity
       */
      arc: function (start, middle, end, name) {
          return primitive('arc', {
              start: coords(start),
              middle: coords(middle),
              end: coords(end),
              startId: getId(start) || guid(),
              endId: getId(end) || guid(),
              originId: guid(),
              id: name || guid()
          }, Wire);
      },
      /** Constructs NURBS curve entity
       *
       *  @function
       *  @param  {number} degree - curve's NURBS degree
       *  @param  {string} name   - optional, entity id
       *  @return {Curve}           curve entity
       */
      curve: function(degree, name) {
          return primitive('curve', {
              degree: degree,
              knots: [],
              controlPoints: [],
              id: name || guid()
          },
          Curve);
      },
      /** Constructs circle entity
       *
       *  @function
       *  @param  {number[]|Point}    center - circle center
       *  @param  {number}            r      - radius
       *  @param  {string}            name   - optional, entity id
       *  @return {Wire}            circle entity
       */
      circle: function (center, r, name) {
          return primitive('circle', {
              origin: coords(center),
              originId: getId(center) || guid(),
              radius: r,
              id: name || guid()
          },
          Wire);
      },
      /** Constructs ellipse entity
       *
       *  @function
       *  @param  {number[]|Point}  center
       *  @param  {number}          rMajor - major radius
       *  @param  {number}          rMinor - minor radius
       *  @param  {number[]|Vector} dir    - major direction
       *  @param  {string}          name   - optional, entity id
       *  @return {Wire}
       */
      ellipse: function (center, rMajor, rMinor, dir, name) {
          return primitive('ellipse', {
              origin: coords(center),
              originId: getId(center) || guid(),
              majorRadius: rMajor,
              minorRadius: rMinor,
              direction: (dir ? vecCoords(dir) : undefined),
              id: name || guid()
          },
          Wire);
      },
      /** Constructs rectangle entity
       *
       *  @function
       *  @param  {number[]|Point}  center
       *  @param  {number[]|Vector} span - length of the rectangle along its local x and y axes
       *  @return {Wire}
       */
      rectangle: function (center, span) {
          var c = vecCoords(span);
          if (c.length != 2) {
              throw Error("Expected rectangle dimensions to be 2-dimensional.");
          }
          return primitive('rectangle', { origin: coords(center), dimensions: c }, Wire);
      },
      /** Constructs polycurve entity
       *
       *  Polycurve may represent any wire body, including non-manifold and disjoint
       *
       *  @function
       *  @param  {Wire[]}  curves
       *  @return {Wire}
       */
      polycurve: function (curves) {
          return primitive('polycurve', { curves: curves }, Wire);
      },

      //******************************************************************************
      // Sheet entities
      //******************************************************************************

      /** Constructs polygon set
       *
       *  @function
       *  @return {PolygonSet} polygon set entity
       */
      polygonSet: function () {
          return primitive('polygonSet', { polygons: [] }, PolygonSet);
      },
      /** Constructs NURBS surface
       *
       *  @function
       *  @param  {number}  uDegree - NURBS degree along U parameter
       *  @param  {number}  vDegree - NURBS degree along V parameter
       *  @return {Surface}           NURBS surface entity
       */
      surface: function(uDegree, vDegree) {
          return primitive('surface', {
              uDegree: uDegree,
              vDegree: vDegree,
              uKnots: [],
              vKnots: [],
              controlPoints: []
          }, Surface);
      },
      /** Constructs polysurface entity
       *
       *  Polysurface may represent any sheet or solid body, including non-manifold and disjoint
       *
       *  @function
       *  @param  {Sheet[]}  surfaces
       *  @return {Sheet}
       */
      polysurface: function (surfaces) {
          return primitive('polysurface', { surfaces: surfaces }, Sheet);
      },

      //******************************************************************************
      // Solid entities
      //******************************************************************************

      /** Constructs 3D mesh
       *
       *  @function
       *  @return {Mesh} mesh entity
       */
      mesh: function () {
          return primitive('mesh', { vertices: [], faces: [] }, Mesh);
      },
      /** Constructs 3D solid block
       *
       *  @function
       *  @param  {number[]|Point}  center
       *  @param  {number[]|Vector} dimensions - block dimensions along axes
       *  @return {Solid}
       */
      block: function (center, span) {
          return primitive('block', { origin: coords(center), dimensions: vecCoords(span) }, Solid);
      },
      /** Constructs torus, lying in XY plane
       *
       *  @function
       *  @param  {number[]|Point} center
       *  @param  {number}         rMinor - minor radius
       *  @param  {number}         rMajor - major radius
       *  @return {Solid}
       */
      torus: function (center, minr, majr) {
          return primitive('torus', {
              origin:      coords(center),
              minorRadius: minr,
              majorRadius: majr
          }, Solid);
      },
      /** Constructs sphere
       *
       *  @function
       *  @param  {number[]|Point} center
       *  @param  {number}         radius
       *  @return {Solid}
       */
      sphere: function (c, r) {
          return primitive('sphere', { origin: coords(c), radius: r }, Solid);
      },
      /** Constructs cylinder
       *
       *  @function
       *  @param  {number[]|Point}  center    - center of cylinder's basement
       *  @param  {number}          radius
       *  @param  {number}          height
       *  @return {Solid}
       */
      cylinder: function (c, r, h) {
          return primitive('cylinder', {
              origin:    coords(c),
              radius:    r,
              height:    h
          }, Solid);
      },
      /** Constructs cone
       *
       *  @function
       *  @param  {number[]|Point}  center     - center of cone's basement
       *  @param  {number}          radius
       *  @param  {number}          height
       *  @param  {number}          phi        - semi-angle, in degrees
       *  @return {Solid}
       */
      cone: function (c, r, h, phi) {
          return primitive('cone', {
              origin:       coords(c),
              radius:       r,
              height:       h,
              semiAngle:    phi
          }, Solid);
      },

      //******************************************************************************
      // Other entities
      //******************************************************************************
      /** Constructs affine transformation matrix
       *
       *  @function
       *  @param  {number[]} [matrix] - initial matrix, default is identity matrix
       *  @return {Affine}              affine transformation matrix entity
       */
      affine: function (optMatrix) {
          optMatrix = optMatrix || [
               1, 0, 0, 0 ,
               0, 1, 0, 0 ,
               0, 0, 1, 0 ,
               0, 0, 0, 1
          ];
          return primitive('affineTransform', { mat: optMatrix }, Affine);
      },
      /** Constructs infinite plane
       *
       *  @function
       *  @param  {number[]|Point}  origin - in-plane point
       *  @param  {number[]|Vector} normal - plane's normal vector
       *  @return {Plane}
       */
      plane: function (o, n) {
          return primitive('plane', {
              origin: coords(o),
              normal: vecCoords(n)
          });
      }
  };

  //******************************************************************************
  // Constraints
  //******************************************************************************
  // Helper functions to create json constraints
  function constr1(e) {
      return { entity1: getId(e) };
  }
  function valueConstr1(val, e) {
      return { value: val, entity1: getId(e) };
  }
  function constr2(e1, e2) {
      return { entity1: getId(e1), entity2: getId(e2) };
  }
  function valueConstr2(val, e1, e2) {
      return { value: val, entity1: getId(e1), entity2: getId(e2) };
  }
  function helpConstr2(e1, e2, h1, h2) {
      return { entity1: getId(e1), entity2: getId(e2), help1: h1, help2: h2 };
  }
  function helpParamsConstr2(e1, e2, p1, p2) {
      return { entity1: getId(e1), entity2: getId(e2), helpParam1: p1, helpParam2: p2 };
  }
  function valueHelpConstr2(val, e1, e2, h1, h2) {
      return { value: val, entity1: getId(e1), entity2: getId(e2), help1: h1, help2: h2 };
  }
  function constr3(e1, e2, e3) {
      return { entity1: getId(e1), entity2: getId(e2), entity3: getId(e3) };
  }
  function help(param) {
      if (arguments.length !== 1)
          throw Error("Invalid help parameter " + JSON.stringify(arguments));
      if (Array.isArray(param)) {
          if(param.length !== 0 && param.length !== 3) {
              throw Error("Invalid help point " + JSON.stringify(param));
          }
          return param;
      }
      if (typeof param !== 'number')
          throw Error("Invalid help parameter " + JSON.stringify(param));
      return [param];
  }
  // var constraints is used for self-call
  var constraints =
      /** Constraint constructors
      *  @namespace constraints
      */
  {
      //******************************************************************************
      // Raw constraint, specified directly as JSON
      //******************************************************************************
      /** Constructs constraint object from raw data. No checks for type value, body being object etc.
       *
       *  @param  {*}      body - any JavaScript value
       *  @return {Constraint}
       */
      raw: function(body) {
          var c = new Constraint(body.type);
          c.__data__ = body;
          return c;
      },
      /** Constructs parallel constraint
       *  Defined only for geometries with a direction
       *  It implies that the directions of the geometries are parallel
       *
       *  @function
       *  @param  {Entity} e1     - first entity
       *  @param  {Entity} e2     - second entity
       *  @return {Constraint}      parallel constraint
       */
      parallel: function(e1, e2) {
          return type('parallel', constr2(e1, e2));
      },
      /** Constructs radius constraint
       *  Defined only for circles
       *
       *  @function
       *  @param  {Entity} val    - circle radius value
       *  @param  {Entity} e      - circle entity
       *  @return {Constraint}      radius constraint
       */
      radius: function(val, e) {
          return type('radius', valueConstr1(val, e));
      }
  };
  // Operations
  //******************************************************************************
  var ops =
  /** Operation constructors
   *  This documentation isn't precise on argument and result types,
   *  because functions listed here effectively create operation objects.
   *  So functions here are documented in terms of types
   *  these operations require as arguments and produce as results.
   *  Due to operation nesting and use of direct string identifiers,
   *  each of these functions can receive {@link string}, {@link Operation}
   *  along with types listed in parameter description.
   *  And each of these functions produces {@link Operation} object.
   *  @namespace operations
   */
  {
      /** identity pseudo-operation
       *  Returns its single argument
       *  Used in cases where some entity should be directly mapped to output
       *
       *  @function
       *  @param  {Entity} entry - any entity
       *  @return {Entity}       - entry, unchanged
       */
      identity: function(entry) {
          var r = new Operation('identity');
          r.args = [entry];
          r.toJSON = function () {
              return Operation.prototype.toJSON.call(this)[1];
          };
          return r;
      },
      /** 'list' operation
       *  Accepts arbitrary list of entity/operation arguments
       *  @function
       *  @param  {...Entity} arg - any entity or operation
       *  @return {Entity[]}        list of entities
       */
      list: function() {
          var r = new Operation('list');
          r.args = toArray(arguments);
          return r;
      },
      /** 'repr' operation
       *  Produces Brep object in desired format.
       *  "content" field, which contains actual data, may be zip-packed and base64 encoded
       *  You cannot enable compression and disable base64-coding
       *  Format identifiers supported:
       *  - "x_b":  Parasolid binary format
       *  - "x_t":  Parasolid textual format
       *  - "iges": IGES format
       *  - "step": STEP
       *  - "sat":  SAT
       *  @function
       *  @param  {string}                    format identifier
       *  @param  {Entity}                    entity which should be converted to BREP
       *  @param  {boolean} [is_compressed] - compress content data stream or not, default false
       *  @param  {boolean} [is_base64]     - encode content data stream as base-64 or not, default true
       *  @return {Entity}  BREP
       */
      repr: op('repr', 4),
      /** 'raw' operation
       *  Accepts operation name and variadic list of its arguments directly
       *  Use with caution, only when you know what you do
       *  @function
       *  @param  {string}    name - operation identifier
       *  @param  {...Entity} arg  - any entity or operation
       *  @return {Entity[]}         list of entities
       */
      raw: function() {
          var r = new Operation(arguments[0]);
          r.args = toArray(arguments).slice(1);
          return r;
      },
      /** 'union' operation
       *  Computes union of two geometries
       *  @function
       *  @param  {Sheet|Solid} left
       *  @param  {Sheet|Solid} right
       *  @return {Mesh}        union result
       */
      unite: op('union', 2),
      /** 'intersection' operation
       *  Computes intersection of two geometries
       *  @function
       *  @param  {Sheet|Solid} left
       *  @param  {Sheet|Solid} right
       *  @return {Mesh}        intersection result
       */
      intersect: op('intersection', 2),
      /** 'difference' operation
       *  Subtracts right geometry from the left one
       *  @function
       *  @param  {Sheet|Solid} left  - entity to subtract from
       *  @param  {Sheet|Solid} right - entity being subtracted from left
       *  @return {Mesh}                subtraction result
       */
      subtract: op('difference', 2),
      /** 'evalDist' operation
       *  Computes distance between two geometries
       *  @function
       *  @param  {Point|Wire|Sheet|Solid} left
       *  @param  {Point|Wire|Sheet|Solid} right
       *  @return {number}                 distance between entities
       */
      evalDist: op('evalDist', 2),
      /** 'transform' operation
       *  Transforms 3D entity using affine matrix
       *  @function
       *  @param  {Point|Wire|Sheet|Solid} entity          - entity to transform
       *  @param  {Affine}                 transformation  - 3D affine matrix
       *  @return {Point|Wire|Sheet|Solid}                   first argument, transformed
       */
      transform: op('transform', 2),
      /** 'evalMassProps' operation
       *  Computes mass properties of entity
       *
       *  @function
       *  @param  {Wire|Sheet|Solid} entity
       *  @return {MassProps}        mass properties; not defined in this module because cannot be used as query input
       */
      evalMassProps: op('evalMassProps', 1),
      /** 'trim' operation
       *  Trims surface with a curve
       *  @function
       *  @param  {Sheet} sheet - sheet to be trimmed
       *  @param  {Wire}  curve - closed curve which will trim surface (will be projected onto surface if not resides on it)
       *  @return {Sheet}         trimmed sheet
       */
      trim: op('trim', 2),
      /** 'crossSection' operation
       *  Sections solid or sheet body with surface
       *  The result is a piece of surface which forms section
       *  @function
       *  @param  {Solid|Sheet} body    - solid or sheet body to section
       *  @param  {Plane}       surface - plane or cylinder surface to section with
       *  @return {Sheet}                 resulting cross-section
       */
      crossSection: op('crossSection', 2),
      /** 'intersectBodyWithLine' operation
       *  Computes a list of points where line intersects faces of specified body
       *  Points are ordered by their position on the line, along line's main direction
       *  @function
       *  @param  {Sheet|Solid} body - solid or sheet body to intersect
       *  @param  {Wire}        line - intersection line
       *  @return {Point[]}            list of intersection points
       */
      intersectBodyWithLine: op('intersectBodyWithLine', 2),
      /** 'extrude' operation
       *  Extrudes body along direction, until second body is reached
       *  @function
       *  @param  {Point|Wire|Sheet} profile   - extruded profile
       *  @param  {Sheet|Solid}      bound     - bounding body
       *  @param  {Vector}           direction - extrusion direction
       *  @return {Mesh}
       */
      extrude: op('extrude', 3),
      /** 'extrudeWithDistance' operation
       *  Extrudes body along direction for a specified distance
       *  @function
       *  @param  {Point|Wire|Sheet} body      - extruded profile
       *  @param  {number}           distance  - 'height' of extrusion
       *  @param  {Vector}           direction - extrusion direction
       *  @return {Mesh}
       */
      extrudeWithDistance: op('extrudeWithDistance', 3),
      /** 'sweep' operation
       *  Sweeps wire or sheet profile along guide wire
       *  @function
       *  @param  {Wire[]|Sheet[]} profiles - profiles being swept
       *  @param  {Wire[]}         guides   - guide wires to sweep along
       *  @return {Mesh}
       */
      sweep: op('sweep', 2),
      /** 'loft' operation
       *  Lofts a set of profiles along a set of guide wires
       *  @function
       *  @param  {Wire[]|Sheet[]} profiles      - lofted profiles
       *  @param  {Wire[]}         guides        - lofting guides
       *  @param  {Point[]}        startVertices - starting vertices for lofted profiles
       *  @return {Mesh}
       */
      loft: op('loft', 3),
      /** 'revolve' operation
       *  Spins specified profile around axis based at origin for a specified angle
       *  @function
       *  @param  {Point|Wire|Sheet} profile - spinned profile
       *  @param  {Point}            origin  - rotation center
       *  @param  {Vector}           axis    - rotation axis, which is normal vector to rotation plane
       *  @param  {number}           angle   - spinning angle
       *  @return {Mesh}
       */
      revolve: op('revolve', 4),
      /** 'evalCurveLength' operation
       *  Computes curve length
       *  @function
       *  @param  {Curve}  curve
       *  @return {number}
       */
      evalCurveLength: op('evalCurveLength', 1),
      /** 'tessellate' operation
       *  Converts BREP body to a polygonal mesh
       *  @function
       *  @param  {Solid}    body              - body being tessellated
       *  @param  {number}  [linearTolearance] - the minimum linear size of any detail to be visible
       *  @param  {number}  [angularSize]      - the angle, in degrees, which provided body occupies in field of view
       *  @return {Mesh}
       */
      tesselate: function() {
          var r = new Operation('tessellate');
          r.args = [ arguments[0], arguments[1] || DEFAULT_LINEAR_TOLERANCE, arguments[2] || DEFAULT_ANGULAR_SIZE ];
          return r;
      },
      /** 'tesselateStl' operation
       *  Constructs STL representation of specified BREP
       *  @function
       *  @param  {Body}    body      - body being tessellated
       *  @param  {number}  quality   - tesselation quality, ranges 0-4; the bigger, the better
       *  @return {Entity}  BREP
       */
      tesselateStl: op('tessellateStl', 2),
      /** 'createPolylineApprox' operation
       *  Converts NURBS curve to polyline
       *  @function
       *  @param  {Curve}     curve
       *  @return {Point[]}
       */
      createPolylineApprox: op('createPolylineApprox', 1),
      /** 'mirror' operation
       *  Produces entity that reflected about given origin and direction
       *  @function
       *  @param  {Point|Wire|Sheet|Solid} body
       *  @param  {Point}                  origin
       *  @param  {Vector}                 direction
       *  @return {Point|Wire|Sheet|Solid}
       */
      mirror: op('mirror', 3),
      /** 'createLinearPattern' operation
       *  Produces linear pattern of entity in the given direction
       *  that is separated by spacing parameter
       *  @function
       *  @param  {Point|Wire|Sheet|Solid}  pattern
       *  @param  {Vector}                  direction
       *  @param  {number}                  spacing   - distance between pattern copies
       *  @param  {number}                  nEntities - repetitions count
       *  @return {Point|Wire|Sheet|Solid}
       */
      createLinearPattern: op('createLinearPattern', 4),
      /** 'createCircularPattern' operation
       *  Produces circular pattern of entity in the given direction
       *  that is separated by angle between each instance
       *  @function
       *  @param  {Point|Wire|Sheet|Solid}  pattern
       *  @param  {Point}                   origin
       *  @param  {Vector}                  direction - direction vector in which to create patterns
       *  @param  {number}                  angle     - angle between instances
       *  @param  {number}                  nEntities - repetitions count
       *  @return {Point|Wire|Sheet|Solid}
       */
      createCircularPattern: op('createCircularPattern', 5),
      /** 'createPlanarSheet' operation
       *  Creates a sheet body from a closed curve
       *  @function
       *  @param  {Wire}  curve - closed curve
       *  @return {Sheet}
       */
      createPlanarSheet: op('createPlanarSheet', 1),
       /** 'sectionBody' operation
       *  Sections a body with a plane or a sheet
       *  @function
       *  @param  {Sheet|Solid} target
       *  @param  {Sheet|Plane} tool
       *  @return {Sheet|Solid} the piece of original body from 'back' tool side (opposite to where tool's normal points)
       */
      sectionBody: op('sectionBody', 2),
      /** 'joinCurves' operation
       *  Joins a closed set of wires to form a solitary wire
       *  @function
       *  @param  {...Wire} wire
       *  @return {Wire}
       */
      joinCurves: op('joinCurves', 1),
      /** 'evalCurve' operation
       *  Evaluates a point and derivatives at a given curve parameter
       *  For b-curves, the parameter space is bound by the lowest and highest value in the knot vector.
       *  For other wires parameter spaces are preset as follows:
       *   - Line      - [0, 1]
       *   - Polyline  - [0, 1]
       *   - Rectangle - [0, 1]
       *   - Arc       - [0, 1]
       *   - Circle    - [0, 2Pi]
       *   - Ellipse   - [0, 2Pi]
       *  Circles and ellipses are always periodic, so it is possible to pass values beyond this interval.
       *  @function
       *  @param  {Curve}   curve
       *  @param  {number}  t       - parameter on curve
       *  @param  {number}  nDerivs - number of derivatives
       *  @return {Point[]}           a point and N derivatives
       */
      evalCurve: op('evalCurve', 3),
      /** 'evalSurface' operation
       *  Evaluates a point and derivatives at a given surface parameter pair
       *  @function
       *  @param  {Sheet}   surface
       *  @param  {number}  u        - surface parameter
       *  @param  {number}  v        - surface parameter
       *  @param  {number}  nUDerivs - derivatives count along U parameter
       *  @param  {number}  nVDerivs - derivatives count along V parameter
       *  @return {Point[]}            result point and its nU*nV-1 derivatives
       */
      evalSurface: op('evalSurface', 5),
      /** 'makeSubCurve' operation
       *  Creates a curve based on an existing curve's parameter interval
       *  For b-curves, the parameter space is bound by the lowest and highest value in the knot vector.
       *  For other wires parameter spaces are preset as follows:
       *   - Line      - [0, 1]
       *   - Polyline  - [0, 1]
       *   - Rectangle - [0, 1]
       *   - Arc       - [0, 1]
       *   - Circle    - [0, 2Pi]
       *   - Ellipse   - [0, 2Pi]
       *  Circles and ellipses are always periodic, so it is possible to pass values beyond this interval.
       *  @function
       *  @param  {Curve}  curve
       *  @param  {number} t0    - subrange start
       *  @param  {number} t1    - subrange end
       *  @return {Curve}          sub-curve from t0 to t1
       */
      makeSubCurve: op('makeSubCurve', 3),
      /** 'makeSubSurface' operation
       *  Creates a sub-surface based on an existing surface's parameter box
       *  @function
       *  @param  {Sheet}  surface
       *  @param  {number} u0 - U subrange start
       *  @param  {number} u1 - U subrange end
       *  @param  {number} v0 - V subrange start
       *  @param  {number} v1 - V subrange end
       *  @return {Sheet}       sub-sheet in ([u0, u1], [v0, v1]) box
       */
      makeSubSurface: op('makeSubSurface', 5),
      /** 'intersectCurves' operation
       *  Finds all intersections between two curves
       *  @function
       *  @param  {Curve}   curve1
       *  @param  {Curve}   curve2
       *  @return {Point[]} intersections list
       */
      intersectCurves: op('intersectCurves', 2),
      /** 'offsetBody' operation
       *  'Bloats' sheet or solid body by offsetting all its faces by specified distance, using faces' normals as directions
       *  @function
       *  @param  {Sheet|Solid} body
       *  @param  {number}      distance
       *  @return {Sheet|Solid}
       */
      offsetBody: op('offsetBody', 2),
      /** 'offsetWire' operation
       *  'Bloats' planar wire body by offsetting its pieces by specified distance
       *  @function
       *  @param  {Wire}   wire     - wire, must lie in one plane
       *  @param  {number} distance - distance to offset
       *  @param  {Vector} normal   - normal to wire's plane
       *  @return {Wire}
       */
      offsetWire: op('offsetWire', 3),
      /** 'createProfiles' operation
       *  Creates a wire or sheet body from a set of wires
       *  @function
       *  @param  {Wire[]}     profiles
       *  @param  {number}     sheetFlag - 0 for wire result, otherwise sheet
       *  @return {Wire|Sheet}             cannot be exported, only usable as input for other operations
       */
      createProfiles: op('createProfiles', 2),
      /** 'compareCurves' operation
       *  Checks if two NURBS curves are equal
       *  Following wires are considered NURBS geometry: lines, polylines, arcs, curves, rectangles.
       *  Returns "1" if wires have equal knots, points and degrees, "0" otherwise.
       *  @function
       *  @param  {Curve}   curve1
       *  @param  {Curve}   curve2
       *  @return {Number}  "1" if equal, "0" otherwise
       */
      compareCurves: op('compareCurves', 2),
      /** 'createResilientProfiles' operation
       *  Creates profiles which inner loops are removed
       *  @function
       *  @param  {Wire[]}  profiles
       *  @return {Sheet}   profile
       */
      createResilientProfiles: op('createResilientProfiles', 1),
      /** 'eval' operation
       *  Evaluates entire scene inside DCM-Worker
       *  @function
       *  @return {DCM/Scene} scene
       */
      eval: function() {
          return new Operation('eval');
      }
  };

  // Helper function
  function getCircleCenterByThreePoints(start, middle, end)
  {
      // All z-coords are taken to be 0
      // Not valid for real 3d arc

      var offset = Math.pow(middle[0], 2) + Math.pow(middle[1], 2);
      var bc = (Math.pow(start[0], 2) + Math.pow(start[1], 2) - offset) / 2.0;
      var cd = (offset - Math.pow(end[0], 2) - Math.pow(end[1], 2)) / 2.0;
      var det = (start[0] - middle[0]) * (middle[1] - end[1]) - (middle[0] - end[0]) * (start[1] - middle[1]);
      if (Math.abs(det) < eps) {
          throw Error("Cannot get circle center by three points [" +
              start[0] + ", " + start[1] + "], [" + middle[0] + ", " +
              middle[1] + "], [" + end[0] + ", " + end[1] + "]");
      }
      var idet = 1.0/det;

      var centerX =  (bc * (middle[1] - end[1]) - cd * (start[1] - middle[1])) * idet;
      var centerY =  (cd * (start[0] - middle[0]) - bc * (middle[0] - end[0])) * idet;

      return [centerX, centerY, 0.0];
  }

  module.exports = {
      init: init,
      gen_id_object: gen_id_object,
      scene: scene,
      dcmScene: dcmScene,
      attributes: attributes,
      utilities: utilities,
      entities: entities,
      constraints: constraints,
      operations: ops
  };
  return module.exports;
  })({exports:{}});

  /**
   * Sets the content type and the request token header on a XMLHttpRequest
   * object.
   *
   * @function setHeaders
   *
   * @param {XMLHttpRequest} request The request object
   * @param {String} contentType The content type that should be set
   */
  function setHeaders(request, contentType) {
      request.setRequestHeader('Content-Type', contentType);
      request.setRequestHeader('Flux-Request-Marker', '1');
      var token = _parseCookies(document.cookie).flux_token;
      request.setRequestHeader('Flux-Request-Token', token);
  }

  /**
   * Parses the form of document.cookies into an object.
   *
   * For CSRF protection, client needs to set Flux-Request-Marker and
   * Flux-Request-Token headers on all authenticated requests.
   *
   * Flux-Request-Marker: 1
   * Flux-Request-Token: <token>
   *
   * where <token> echoes the value of the flux_token cookie
   * (set by the head proxy at auth).
   *
   * This pulls out that token value and stores it on Flux.fluxToken (for
   * use by other request senders) and sets headers on jquery ajax requests.
   *
   * Cookie parsing taken from https://github.com/jshttp/cookie

   *
   * @function _parseCookies
   * @private
   *
   * @return {Object} A set of key value pairs from the cookies
   *
   * @param {string} str A string having the form of document.cookies.
   * @param {Function} options Provider of a decode function that behaves
   *                           like decodeURIComponent. If options.decode is
   *                           not provided, decodeURIComponent is used.
   */
  function _parseCookies(str, options) {
    var obj = {};
    var opt = options || {};
    var pairs = str.split(/; */);
    var dec = opt.decode || decodeURIComponent;
    var pair, eq_idx, key, val;

    for ( var i = 0, len = pairs.length ; i < len ; i++ ) {

      pair = pairs[i];

      eq_idx = pair.indexOf('=');

      // skip things that don't look like key=value
      if (eq_idx < 0) {
        break;
      }

      key = pair.substr(0, eq_idx).trim();
      val = pair.substr(++eq_idx, pair.length).trim();

      // quoted values
      if ('"' == val[0]) {
        val = val.slice(1, -1);
      }

      // only assign once
      if (obj[key] == null) {
        obj[key] = _tryDecode(val, dec);
      }

    }

    return obj;
  }

  /**
   * Attempts to decode a string with the provided function.
   * Catches errors and returns input string on failure.
   *
   * @function _tryDecode
   * @private
   *
   * @return {String} The decoded or undecoded string
   *
   * @param {String} str The string to try to decode
   * @param {Function} decode The function to decode with
   */
  function _tryDecode(str, decode) {
    try {
      return decode(str);
    } catch (e) {
      return str;
    }
  }

  /**
  * Stand in for the finished status on an xhr
  */
  var READY_STATE_FINISHED = 4;

  // Array of enviroment textures for image-based lighting.
  // Singleton
  // Cubemap textures are pre-filtered to simulate different levels of light diffusion.
  // More about the technique:
  // http://developer.amd.com/tools-and-sdks/archive/legacy-cpu-gpu-tools/cubemapgen/
  var iblCubeArray = [
      new THREE.Texture(), // 512x512
      new THREE.Texture(), // 256x256
      new THREE.Texture(), // 128x128
      new THREE.Texture(), // 61x64
      new THREE.Texture(), // 32x32
      new THREE.Texture(), // 16x16
      new THREE.Texture(), // 8x8
      new THREE.Texture(), // 4x4
      new THREE.Texture()  // 2x2
  ];

  // Loads pre-filtered textures
  function loadImages(path) {
      return new Promise(function (resolve) {
          THREE.ImageUtils.crossOrigin = true;
          var loadedImageCount = 0;
          for (var i = 0; i <= 8; i++) {
              var iblCubeUrls = [
                  path + '_m0' + i + '_c00.png',
                  path + '_m0' + i + '_c01.png',
                  path + '_m0' + i + '_c02.png',
                  path + '_m0' + i + '_c03.png',
                  path + '_m0' + i + '_c04.png',
                  path + '_m0' + i + '_c05.png'
              ];
              iblCubeArray[i] = THREE.ImageUtils.loadTextureCube(iblCubeUrls, undefined, function() {
                  loadedImageCount++;
                  if (loadedImageCount === 9) {
                      resolve();
                  }
              });
              iblCubeArray[i].format = THREE.RGBFormat;
          }
      });
  }

  // Singleton promise for async loading
  var imagesLoadingPromise = null;

  /**
  * Flux geometry class converts parameter objects to geometry
  * @param {String} tessUrl The url for the brep tessellation service
  * @param {String} iblUrl The url for image based lighting textures
  * @constructor
  */
  function GeometryBuilder(tessUrl, iblUrl) {

      // String path to tessellation API endpoint
      this._parasolidUrl = tessUrl;
      this._imagesUrl = iblUrl;

      // Flag to track whether a request is in the works
      // This causes subsequent requests to this object to be ignored
      // TODO(Kyle): This will no longer be necessary once we get rid of polymer and/or each request isn't set twice
      this.running = false;

      // quality   - tesselation quality, ranges 0-4; the bigger, the better
      this.tessellateQuality = 2.0;
  }

  /**
  * Create a new model for the given entities.
  *
  * @precondition: !this.running
  * Note: The results of this function are stored as member variables,
  * so you must check running before calling convert repeatedly
  * on the same instance or race conditions can occur.
  *
  * @param {Object} entities The parameters objects
  * @return {Promise} A promise object that sets the model when it completes
  */
  GeometryBuilder.prototype.convert = function(entities) {
      var _this = this;
      this.running = true;
      var hasRoughness$$ = hasRoughness(entities);
      if (hasRoughness$$ && !imagesLoadingPromise && this._imagesUrl) {
          imagesLoadingPromise = loadImages(this._imagesUrl);
      }
      return Promise.resolve(imagesLoadingPromise).then(function () {
          return _this.convertHelper(entities);
      });
  };

  /**
   * Function that actually does conversion once assets have loaded
   * @param {Array} entities Array of entities or arrays
   * @return {Promise} Promise to resolve when geometry is ready
   */
  GeometryBuilder.prototype.convertHelper = function(entities) {
      var geometryResults = new GeometryResults();
      geometryResults.cubeArray = iblCubeArray;

      if (entities == null || typeof entities != 'object') {
          this.running = false;
          return Promise.resolve(geometryResults);
      }

      // sync - process geometric primitives
      this._parasolidCreateObject(entities, geometryResults);

      // async - tessellate breps on the server
      var _this = this;
      return Promise.resolve(this._handleAsyncGeom(geometryResults).then(function (results) { // resolve
          return results;
      }).catch(function (results) { // reject
          if (results instanceof Error) {
              console.warn(results.stack); // eslint-disable-line no-console
          }
          return geometryResults;
      })).then(function (results) { // resolve
          _this.running = false;
          return results;
      });
  };

  /**
   * Create THREE.js objects from data in the Flux JSON format.
   * The data defines Parasolid Entities.
   * More info on Parasolid Entities can be found here:
   * https://bitbucket.org/vannevartech/parasolid-worker/src/010e74872145b3ac97b221acdca37d9746e88276/doc/ENTITIES.md
   * @param    {Object}    data    The geometry data as objects
   * @param    {GeometryResults}    geometryResults    Geometry and errors object
   */
  GeometryBuilder.prototype._parasolidCreateObject = function(data, geometryResults) {
      try {
          createObject(data, geometryResults);
      }
      catch(err) {
          this._handleInvalidPrims(data, err, geometryResults);
      }
  };

  /**
   * Provide error handling to determine invalid prims user message
   * @param    {Object} data    The geometry that was attempted to parse
   * @param    {Error}    err     Exception object from try catch
   * @param    {GeometryResults} geometryResults    Contains and geometry and errors
   */
  GeometryBuilder.prototype._handleInvalidPrims = function(data, err, geometryResults) {
      var errorMessage = 'Unknown error';
      if (err.name !== 'FluxGeometryError') {
          this.running = false;
          // An unknown error occurred
          throw err;
      } else {
          errorMessage = err.message;
      }

      if (data && data.primitive) {
          geometryResults.primStatus.appendError(data.primitive, errorMessage);
      } else {
          geometryResults.primStatus.appendError('unknown', errorMessage);
      }
  };

  /**
   * Send a request to tessellate breps, and add them to the scene.
   *
   * This server currently aborts when there is an error in the tessellation operation, but in the
   * future it could respond with status 200, but contain a mix of successful and failed
   * tesselations. In those mixed cases resolve is called, but the error status is still
   * available on the returned geometryResults object.
   *
   * @param {Object} geometryResults The container for meshes, errors, and entities
   * @return {Promise}     A promise that resolves when the geometry is loaded
   */
  GeometryBuilder.prototype._handleAsyncGeom = function(geometryResults) {
      var _this = this;
      // Create a promise for the operation to tessellate all entities
      return new Promise(function(resolve, reject) {
          if (geometryResults.asyncPrims.length > 0) {
              _this._tessellateValues(geometryResults).then(function (tessResponse) { // resolve
                  var resultObj = JSON.parse(tessResponse.result);
                  var errors = resultObj.Errors;
                  _this._handleBrepErrors(errors, geometryResults, tessResponse);
                  _this._handleBrepResults(resultObj, geometryResults, tessResponse);
                  resolve(geometryResults);
              }).catch(function (response) { // reject
                  if (response instanceof Error) {
                      console.warn(response.stack); // eslint-disable-line no-console
                      geometryResults.primStatus.appendError('brep', response.message);
                      reject(geometryResults);
                  } else {
                      if (response.readyState >= READY_STATE_FINISHED) {
                          geometryResults.primStatus.appendError('brep', _this._interpretServerErrorCode(response.status, response.responseText));
                      } else {
                          geometryResults.primStatus.appendError('brep', 'Duplicate request was aborted.');
                      }
                  }
                  reject(geometryResults);
              });
          } else {
              resolve(geometryResults);
          }
      });
  };

  /**
   * Parse errors and update status map
   * @param  {Object} errors          Parasolid errors map
   * @param  {GeometryResults} geometryResults   Results container
   * @param  {Object} tessResponse    Server response
   */
  GeometryBuilder.prototype._handleBrepErrors = function (errors, geometryResults, tessResponse) {
      // There were invalid breps or other server errors
      if (errors && Object.keys(errors).length > 0) {
          var fullErrorMessage = errors[Object.keys(errors)[0]].Message;
          // Set the server error as the invalid prim message
          geometryResults.primStatus.appendError(
              tessResponse.primitives[this._findErroredPrim(fullErrorMessage)],
              this._interpretServerError(fullErrorMessage));
      }
  };

  /**
   * Take meshes as data objects from Parasolid and convert them to renderable geometry
   * @param  {Object} resultObj       Container for meshes data
   * @param  {GeometryResults} geometryResults   Results container
   * @param  {Object} tessResponse    Server response
   */
  GeometryBuilder.prototype._handleBrepResults = function (resultObj, geometryResults, tessResponse) {
      // There were valid breps that tessellated
      if (resultObj.Output.Results) {
          var data = resultObj.Output.Results.value;
          for (var key in data) {
              var primitive = tessResponse.primitives[key];
              geometryResults.primStatus.appendValid(primitive);
              var primObj = data[key];
              var stlAscii = window.atob(primObj.content);
              var stlData = {
                  primitive:primObj.format,
                  data:stlAscii
              };
              // This function adds the results as children of geometryResults.mesh
              createObject(stlData, geometryResults);
          }
      }
  };

  /**
   * Asynchronously request a tessellated model from the back end service.
   * @precondition Each value is a brep entity with a primitive property
   * @param    {GeometryResults} geometryResults Results container with async primitives unhandled from previous call
   * @return {Promise}     A promise that resolves when the geometry is loaded
   */
  GeometryBuilder.prototype._tessellateValues = function (geometryResults) {
      // Flat array of Flux entity objects
      var values = geometryResults.asyncPrims;
      if (!values || values.constructor !== Array) {
          return Promise.resolve(geometryResults);
      }
      // Keep track of the primitive names in the values array
      var primitives = {};
      var sceneStr = this._constructScene(geometryResults, values, primitives);

      var xhr = new XMLHttpRequest();
      var xhrPromise = new Promise(function (resolve, reject) {
          var resultObj = {'result': '', 'primitives': primitives};
          xhr.onreadystatechange = function() {//Call a function when the state changes.
              if(xhr.readyState !== READY_STATE_FINISHED) return;
              if (xhr.status == 200) {
                  resultObj.result = this.responseText;
                  resolve(resultObj);
              } else {
                  reject(new Error('Server error '+xhr.status+' '+xhr.responseText ));
              }
          };
      });
      xhr.open('POST', this._parasolidUrl);
      setHeaders(xhr, 'application/json');
      xhr.send(sceneStr);

      // Check if this module already has a pending request and cancel it
      if (this._lastTessRequest &&
              this._lastTessRequest.readyState < READY_STATE_FINISHED) {
          this._lastTessRequest.abort();
      }
      this._lastTessRequest = xhr;

      return xhrPromise;
  };

  /**
   * Construct a scene object to format the request for brep tessellation
   * @param  {GeometryResults} geometryResults Results container
   * @param  {Array} values List of primitives to tessellate
   * @param  {Object} primitives Keep track of the primitive names in the values array.
   *                             This is a map so that in the case of a server error the primitives
   *                             can be looked up based on server message which contains their
   *                             resultId string, which is a unique identifier
   * @return {String} Text describing the operations formatted for the query to be sent to parasolid
   */
  GeometryBuilder.prototype._constructScene = function (geometryResults, values, primitives) {
      var scene = modelingCore.scene();
      for (var i=0; i<values.length; i++) {
          var value = values[i];
          if (!value || !value.primitive) continue;
          var resultId = 'result'+i;
          scene.add(resultId, value);
          var tessOp = modelingCore.operations.tesselateStl(resultId, this.tessellateQuality);
          // The first argument must be a unique id. It is an integer
          // so it can be used to look up the primitive later.
          scene.add(resultId, tessOp);
          primitives[resultId] = value.primitive;
      }
      if (Object.keys(primitives).length === 0) {
          return Promise.resolve(geometryResults);
      }
      return JSON.stringify({'Scene':scene});
  };

  /**
   * Parse server error message and interpret to be human readable.
   * Eventually the sever might have better messages:
   * https://vannevar.atlassian.net/browse/GI-1933
   * @param    {String} text The full error text
   * @return {String}            The improved error message
   */
  GeometryBuilder.prototype._interpretServerError = function (text) {
      var errorMessage = text.slice(0, text.indexOf('\n'));
      // Add a more clear explanation for this specific error
      if (errorMessage === 'PK_ERROR_wrong_transf') {
          errorMessage = 'Flux is currently unable to model objects '+
                  'that are outside of a bounding box that is 1000 units '+
                  'wide centered at the origin. Please scale down your '+
                  'models or change units.';
      } else if (errorMessage === 'Translator loader error') {
          errorMessage = 'The brep translator could not be initialized. '+
                  'Perhaps the license has expired. Please contact Flux to get '+
                  'this resolved.';
      }
      return 'Server error: '+errorMessage;
  };

  /**
   * Workaround for finding the prim associated with the error.
   * The backend does not have a good API for this yet.
   * https://vannevar.atlassian.net/browse/PLT-4228
   * @param    {String} text The full error text
   * @return {String}            The primitive name
   */
  GeometryBuilder.prototype._findErroredPrim = function (text) {
      var match = text.match(/\/result.*\n/);
      return match ? match[0].slice(1, match[0].length-1) : '';
  };

  /**
   * Create a user error message based on status codes
   * @param    {String} status The error html status code
   * @param    {String} text The full error text
   * @return {String}            The error message
   */
  GeometryBuilder.prototype._interpretServerErrorCode = function (status, text) {
      if (status === 504) {
          return "Server error: Your request exceeded the maximum time limit for execution.";
      }
      console.warn("Server error in tessellation. Status:",status,":",text); // eslint-disable-line no-console
      return "Server error: The brep tessellation service is unavailable.";
  };

  exports.isKnownGeom = isKnownGeom;
  exports.GeometryBuilder = GeometryBuilder;
  });

  var FluxJsonToThree = (index_common && typeof index_common === 'object' && 'default' in index_common ? index_common['default'] : index_common);

  /**
   * UI widget to render 3D geometry
   * @param {Element}   domParent     The div container for the canvas
   * @param {Object}    optionalParams Object containing all other parameters
   * @param {Number}    optionalParams.width         The width of the canvas
   * @param {Number}    optionalParams.height        The height of the canvas
   * @param {String}    optionalParams.tessUrl       The url for making brep tessellation requests
   * @param {String}    optionalParams.iblUrl        The url to get textures for image based lighting
   */
  function FluxViewport (domParent, optionalParams) {

      var width;
      var height;
      var tessUrl;
      var iblUrl;
      if (optionalParams) {
          width = optionalParams.width;
          height = optionalParams.height;
          tessUrl = optionalParams.tessUrl;
          iblUrl = optionalParams.iblUrl;
      }

      var renderWidth = 100;//px
      if (width == null) {
          renderWidth = domParent.clientWidth;
      } else {
          renderWidth = Math.max(renderWidth, width);
      }

      var renderHeight = 100;//px
      if (height == null) {
          renderHeight = domParent.clientHeight;
      } else {
          renderHeight = Math.max(renderHeight, height);
      }

      if (!domParent) {
          throw new Error('domParent must be specified to FluxViewport');
      }

      this._geometryBuilder = new FluxJsonToThree.GeometryBuilder(tessUrl, iblUrl);

      this._renderer = new FluxRenderer(domParent, renderWidth, renderHeight);
      this._initCallback();

      // Make sure to render on mouse over in case the renderer has swapped contexts
      var _this = this;
      domParent.addEventListener('mouseenter', function(){
          _this.render();
      });

      // Cache of the Flux entity objects for downloading
      this._entities = null;

      // Track the last blob that was downloaded for memory cleanup
      this._downloadUrl = null;

      // Whether the viewport is locked on the current geometry and will automatically focus on new geometry when updating the entities
      this._autoFocus = true;
  }

  FluxViewport.prototype = Object.create( THREE.EventDispatcher.prototype );
  FluxViewport.prototype.constructor = FluxViewport;

  /**
   * Enumeration of edges rendering modes
   * @return {Object} enumeration
   */
  FluxViewport.getEdgesModes = function () {
      return EdgesHelper.EDGES_MODES;
  };

  /**
   * Name of the event fired when the camera changes
   * @return {String} Event name
   */
  FluxViewport.getChangeEvent = function () {
      return FluxRenderer.CHANGE_EVENT;
  };

  /**
   * Determines whether the entity or list of entities contains geometry
   * @param  {Array.<Object>|Object}  entities Geometry data
   * @return {Boolean}          True for objects/lists containing geometry
   */
  FluxViewport.isKnownGeom = function (entities) {
      return FluxJsonToThree.isKnownGeom(entities);
  };

  //---- Class member functions

  /**
   * Set up the callback to render when the camera changes
   */
  FluxViewport.prototype._initCallback = function() {
      var _this = this;
      this._renderer.addEventListener(FluxRenderer.CHANGE_EVENT, function(event) {
          _this.dispatchEvent( event );
          _this.render();
      });
  };

  /**
   * Actually render the geometry!
   */
  FluxViewport.prototype.render = function() {
      this._renderer.doRender();
  };

  /**
   * Focus the camera on the current geometry
   */
  FluxViewport.prototype.focus = function() {
      this._renderer.focus();
  };

  /**
   * Restore the camera to a default location
   */
  FluxViewport.prototype.homeCamera = function() {
      this._renderer.homeCamera();
  };

  /**
   * Set the viewport geomtery from a JSON string
   * @param {String} dataString The geometry to render formatted as JSON containing Flux entities
   * @return {Object} Promise to resolve after geometry is created
   */
  FluxViewport.prototype.setGeometryJson = function(dataString) {
      var dataObj = JSON.parse(dataString);
      return this.setGeometryEntity(dataObj);
  };

  /**
   * Set the viewport geometry from a data object containing Flux entities
   * @param {Object} data The geometry entities to render
   * @return {Object} Promise to resolve after geometry is created
   */
  FluxViewport.prototype.setGeometryEntity = function(data) {
      var _this = this;
      // The flow sends the same value twice, so we assume that requests
      // sent while there is already one pending are redundant
      // TODO(Kyle): This is a hack that we can remove once there are not always duplicate requests
      return new Promise(function (resolve, reject) {
          if (!_this._geometryBuilder.running) {
              return _this._geometryBuilder.convert(data).then(function (results) {
                  _this._entities = results.meshIsEmpty() ? null : data;
                  _this._updateModel(results.getMesh());
                  resolve(results);
              });
          } else {
              reject(new Error('Already running. You can only convert one entity at a time.'));
          }
      });
  };

  /**
   * Change the geometry being rendered
   * @param  {THREE.Object3D} newModel The new model to render
   * @param  {THREE.Object3D} oldModel The old model to remove
   */
  FluxViewport.prototype._updateModel = function(newModel) {
      this._renderer.setModel(newModel);
      if (this._autoFocus) {
          this.focus(); // changing the controls will trigger a render
          this._autoFocus = false;
      } else {
          this.render();
      }
  };

  /**
   * Make serializable by pruning all references and building an object property tree
   * @return {Object} Data to stringify
   */
  FluxViewport.prototype.toJSON = function() {
      var serializableState = {
          entities: this._entities,
          renderer: this._renderer.toJSON(),
          autoFocus: this._autoFocus
      };
      return serializableState;
  };

  /**
   * Take a data object and use it to update the viewport's internal state
   * Warning this is async when it sets entities
   * @param  {Object} state The properties to set
   * @return {Promise} Completion promise
   */
  FluxViewport.prototype.fromJSON = function(state) {
      if (!state) return Promise.resolve();
      var _this = this;
      if (state.entities) {
          return this.setGeometryEntity(state.entities).then(function () {
              _this.fromJSONHelper(state);
          });
      } else {
          this.fromJSONHelper(state);
          return Promise.resolve();
      }
  };

  /**
   * Rehydrate everything but the entities.
   * @param  {Object} state Parameter data
   */
  FluxViewport.prototype.fromJSONHelper = function(state) {
      if (state.renderer != null) {
          this._renderer.fromJSON(state.renderer);
      }
      if (state.autoFocus != null) {
          this._autoFocus = state.autoFocus;
      }
  };

  /**
   * Download all the geometry settings and raster image that are the state of this viewport.
   * Used for quality assurance testing.
   * @param  {String} prefix File name prefix for download path
   */
  FluxViewport.prototype.downloadState = function(prefix) {
      this._downloadJson(this.toJSON(), prefix);
      this._download(this._renderer.getGlCanvas().toDataURL('image/png'), prefix+'.png');
  };

  /**
   * Helper function to download some data from a url
   * @param  {DOMString} dataUrl  The url containing the data to download
   * @param  {String} filename The name of the file when it downloads
   */
  FluxViewport.prototype._download = function(dataUrl, filename) {
      var a = document.createElement('a');
      a.href = dataUrl;
      a.download = filename;
      a.click();
  };

  /**
   * Create a link and a temporary blob url to use to download from.
   * @param  {Object} data   The serializable data to write as JSON
   * @param  {String} prefix The file name prefix
   */
  FluxViewport.prototype._downloadJson = function(data, prefix) {
      if (this._downloadUrl) {
          window.URL.revokeObjectURL(this._downloadUrl);
      }
      var jsonString = JSON.stringify(data, null, 2);
      this._downloadUrl = window.URL.createObjectURL(new Blob([jsonString]), {type: 'text/json'});
      this._download(this._downloadUrl, prefix+'.json');
  };

  /**
   * Create a default 3 light rig on the renderer's scene.
   */
  FluxViewport.prototype.setupDefaultLighting = function() {
      var lighting = new THREE.Object3D();
      lighting.name = 'Lights';

      //TODO(Kyle) non static lighting
      this._keyLight = new THREE.DirectionalLight();
      this._keyLight.position.set(60, 80, 50);
      this._keyLight.intensity = 0.95;
      lighting.add(this._keyLight);

      var backLight = new THREE.DirectionalLight();
      backLight.position.set(-250, 50, -200);
      backLight.intensity = 0.4;
      lighting.add(backLight);

      var fillLight = new THREE.DirectionalLight();
      fillLight.position.set(-500, -500, 0);
      fillLight.intensity = 0.7;
      lighting.add(fillLight);

      this._renderer.setLights(lighting);
  };

  //---- Pass through functions

  /**
   * Set the size of the render canvas
   * @param {Number} width  Pixels
   * @param {Number} height Pixels
   */
  FluxViewport.prototype.setSize = function(width, height) {
      this._renderer.setSize(width, height);
  };

  /**
   * Set the background color of the render canvas
   * @param {THREE.color} color Background color
   */
  FluxViewport.prototype.setClearColor = function(color) {
      this._renderer.setClearColor(color);
  };

  /**
   * Set which camera view to use (ex perspective, top etc.)
   * @param {String} view Name of the camera view to use
   */
  FluxViewport.prototype.setView = function(view) {
      this._renderer.setView(view);
      this.focus();
  };

  /**
   * Return the views enumeration
   * @return {Object} Enumeration of view options for cameras
   */
  FluxViewport.getViews = function() {
      return FluxCameras.VIEWS;
  };

  /**
   * Set the density of the exponential fog. Generally on the order of 0.0001
   * @param {Number} density How much fog
   */
  FluxViewport.prototype.setFogDensity = function(density) {
      this._renderer._fog.density = density;
  };

  /**
   * Set the url of the tessellation service.
   *
   * This is required for rendering of breps.
   *
   * @param {String} newUrl The url of the tessellation server
   */
  FluxViewport.prototype.setTessUrl = function(newUrl) {
      this._geometryBuilder._parasolidUrl = newUrl;
  };

  /**
   * Set whether the geometry should focus the geometry when it is changed
   * @param {Boolean} focus Whether to auto focus
   */
  FluxViewport.prototype.setAutoFocus = function(focus) {
      this._autoFocus = focus;
  };

  /**
   * Get whether the geometry should focus the geometry when it is changed
   * @return {Boolean} Whether to auto focus
   */
  FluxViewport.prototype.getAutoFocus = function() {
      return this._autoFocus;
  };

  /**
   * Set the edges rendering mode for hidden line rendering
   * @param  {FluxViewport.EDGES_MODES} mode Whether to render front, back, both or none
   */
  FluxViewport.prototype.setEdgesMode = function(mode) {
      this._renderer.setEdgesMode(mode);
  };

  /**
   * Get the canvas for use in QA scripts
   * @return {Canvas} WebGL canvas dom element
   */
  FluxViewport.prototype.getGlCanvas = function() {
      return this._renderer.getGlCanvas();
  };

  /**
   * Turn on shadow rendering.
   * Warning: This is an experimental feature that may not work.
   */
  FluxViewport.prototype.activateShadows = function() {
      if (!this._keyLight) return;

      this._renderer.setShadowLight(this._keyLight);
      this._renderer.addShadows();
  };

  return FluxViewport;

}());