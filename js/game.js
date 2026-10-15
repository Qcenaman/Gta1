var fl="170";var Yd=0,Zd=1,_r=2;var Iu=1,yi=2;var Vn=100,Kd=101,Jd=102;var $d=200,Qd=201,ep=202,tp=203,ml=204,gl=205,ip=206,np=207,sp=208,rp=209,ap=210,op=211,lp=212,cp=213,hp=214,up=0,dp=1,pp=2,fp=3,mp=4,gp=5,vp=6,xp=7;var Lu=300,_s=301,Ms=302,vl=303,xl=304,Ha=306,lr=1e3,cr=1001,yl=1002,Li=1003,yp=1004;var Or=1005;var Ii=1006,zo=1007;var Mn=1008;var Sn=1009,Du=1010,zu=1011,hr=1012,Fc=1013,Xn=1014,Gi=1015,Mr=1016,Hc=1017,Vc=1018,bs=1020,Uu=35902,Nu=1021,Ou=1022,mi=1023,ku=1024,Bu=1025,ur=1026,Ss=1027,Gc=1028,Wc=1029,Fu=1030,Xc=1031;var qc=1033,da=33776,pa=33777,fa=33778,ma=33779,_l=35840,Ml=35841,bl=35842,Sl=35843,wl=36196,Tl=37492,El=37496,Al=37808,Rl=37809,Cl=37810,Pl=37811,Il=37812,Ll=37813,Dl=37814,zl=37815,Ul=37816,Nl=37817,Ol=37818,kl=37819,Bl=37820,Fl=37821,ga=36492,Hl=36494,Vl=36495,Hu=36283,Gl=36284,Wl=36285,Xl=36286;var xa=2300,ql=2301,Uo=2302,Rh=2400,Ch=2401,Ph=2402;var gs="",fi="srgb",Tn="srgb-linear",Va="linear",wt="srgb";var nn=7680;var Vu=7682;var Gu=514;var _p=512,Mp=513,bp=514,Sp=515,wp=516,Tp=517,Ep=518,Ap=519,Ih=35044,cn=35048;var Lh="300 es",ws=2e3,ya=2001,wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var va=Math.PI/180,jl=180/Math.PI;function Ds(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(Zt[255&s]+Zt[s>>8&255]+Zt[s>>16&255]+Zt[s>>24&255]+"-"+Zt[255&e]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[63&t|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[255&i]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function jt(s,e,t){return Math.max(e,Math.min(t,s))}function Rp(s,e){return(s%e+e)%e}function No(s,e,t){return(1-t)*s+t*e}function Zs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var Te=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class s{constructor(e,t,i,n,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],f=i[8],v=n[0],m=n[3],g=n[6],_=n[1],M=n[4],b=n[7],P=n[2],A=n[5],D=n[8];return r[0]=a*v+o*_+l*P,r[3]=a*m+o*M+l*A,r[6]=a*g+o*b+l*D,r[1]=c*v+h*_+d*P,r[4]=c*m+h*M+d*A,r[7]=c*g+h*b+d*D,r[2]=u*v+p*_+f*P,r[5]=u*m+p*M+f*A,r[8]=u*g+p*b+f*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,p=c*r-a*l,f=t*d+i*u+n*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=d*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=u*v,e[4]=(h*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oo.makeScale(e,t)),this}rotate(e){return this.premultiply(Oo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oo=new ot;function Wu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _a(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cp(){let s=_a("canvas");return s.style.display="block",s}var Dh={};function sr(s){s in Dh||(Dh[s]=!0,console.warn(s))}var vt={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===wt&&(s.r=rn(s.r),s.g=rn(s.g),s.b=rn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===wt&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?Va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function rn(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function xs(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var zh=[.64,.33,.3,.6,.15,.06],Uh=[.2126,.7152,.0722],Nh=[.3127,.329],Oh=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kh=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),ns;vt.define({[Tn]:{primaries:zh,whitePoint:Nh,transfer:Va,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:Uh,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:zh,whitePoint:Nh,transfer:wt,toXYZ:Oh,fromXYZ:kh,luminanceCoefficients:Uh,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}});var Yl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=_a("canvas")),ns.width=e.width,ns.height=e.height;let i=ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=_a("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*rn(r[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*rn(t[i]/255)):t[i]=rn(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pp=0,Ma=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Ds(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ko(n[a].image)):r.push(ko(n[a]))}else r=ko(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function ko(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ip=0,si=class s extends wn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=1009,c=s.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Ds(),this.name="",this.source=new Ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lr:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case lr:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null,si.DEFAULT_MAPPING=Lu,si.DEFAULT_ANISOTROPY=1;var Lt=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,b=(p+1)/2,P=(g+1)/2,A=(h+u)/4,D=(d+v)/4,z=(f+m)/4;return M>b&&M>P?M<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(M),n=A/i,r=D/i):b>P?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=A/n,r=z/n):P<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(P),i=D/r,n=z/r),this.set(i,n,r,t),this}let _=Math.sqrt((m-f)*(m-f)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(d-v)/_,this.z=(u-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zl=class extends wn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new si(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ma(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Zl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ba=class extends si{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Li,this.minFilter=Li,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kl=class extends si{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Li,this.minFilter=Li,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],p=r[a+1],f=r[a+2],v=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(d!==v||l!==u||c!==p||h!==f){let m=1-o,g=l*u+c*p+h*f+d*v,_=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){let P=Math.sqrt(M),A=Math.atan2(P,g*_);m=Math.sin(m*A)/P,o=Math.sin(o*A)/P}let b=o*_;if(l=l*m+u*b,c=c*m+p*b,h=h*m+f*b,d=d*m+v*b,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],p=r[a+2],f=r[a+3];return e[t]=o*f+h*d+l*p-c*u,e[t+1]=l*f+h*u+c*d-o*p,e[t+2]=c*f+h*p+o*u-l*d,e[t+3]=h*f-o*d-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),p=l(n/2),f=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-n)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(n+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(n+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bo=new L,Bh=new ri,Ui=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Br.subVectors(this.max,Ks),ss.subVectors(e.a,Ks),rs.subVectors(e.b,Ks),as.subVectors(e.c,Ks),fn.subVectors(rs,ss),mn.subVectors(as,rs),Un.subVectors(ss,as);let t=[0,-fn.z,fn.y,0,-mn.z,mn.y,0,-Un.z,Un.y,fn.z,0,-fn.x,mn.z,0,-mn.x,Un.z,0,-Un.x,-fn.y,fn.x,0,-mn.y,mn.x,0,-Un.y,Un.x,0];return!!Fo(t,ss,rs,as,Br)&&(t=[1,0,0,0,1,0,0,0,1],!!Fo(t,ss,rs,as,Br)&&(Fr.crossVectors(fn,mn),t=[Fr.x,Fr.y,Fr.z],Fo(t,ss,rs,as,Br)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ri).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ji)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ji=[new L,new L,new L,new L,new L,new L,new L,new L],Ri=new L,kr=new Ui,ss=new L,rs=new L,as=new L,fn=new L,mn=new L,Un=new L,Ks=new L,Br=new L,Fr=new L,Nn=new L;function Fo(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Nn.fromArray(s,r);let o=n.x*Math.abs(Nn.x)+n.y*Math.abs(Nn.y)+n.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),h=i.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lp=new Ui,Js=new L,Ho=new L,hi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Lp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);let t=Js.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(Js,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Ho)),this.expandByPoint(Js.copy(e.center).sub(Ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},$i=new L,Vo=new L,Hr=new L,gn=new L,Go=new L,Vr=new L,Wo=new L,Ts=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Vo.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(Vo);let r=.5*e.distanceTo(t),a=-this.direction.dot(Hr),o=gn.dot(this.direction),l=-gn.dot(Hr),c=gn.lengthSq(),h=Math.abs(1-a*a),d,u,p,f;if(h>0)if(d=a*l-o,u=a*o-l,f=r*h,d>=0)if(u>=-f)if(u<=f){let v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Vo).addScaledVector(Hr,u),p}intersectSphere(e,t){$i.subVectors(e.center,this.origin);let i=$i.dot(this.direction),n=$i.dot($i)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,i,n,r){Go.subVectors(t,e),Vr.subVectors(i,e),Wo.crossVectors(Go,Vr);let a,o=this.direction.dot(Wo);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}gn.subVectors(this.origin,e);let l=a*this.direction.dot(Vr.crossVectors(gn,Vr));if(l<0)return null;let c=a*this.direction.dot(Go.cross(gn));if(c<0||l+c>o)return null;let h=-a*gn.dot(Wo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class s{constructor(e,t,i,n,r,a,o,l,c,h,d,u,p,f,v,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,d,u,p,f,v,m)}set(e,t,i,n,r,a,o,l,c,h,d,u,p,f,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=p,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*d,f=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+f*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,p=l*d,f=c*h,v=c*d;t[0]=u+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,p=l*d,f=c*h,v=c*d;t[0]=u-v*o,t[4]=-a*d,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,p=a*d,f=o*h,v=o*d;t[0]=l*h,t[4]=f*c-p,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=f*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+f,t[10]=u-v*d}else if(e.order==="XZY"){let u=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=a*h,t[9]=p*d-f,t[2]=f*d-p,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dp,e,zp)}lookAt(e,t,i){let n=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),vn.crossVectors(i,oi),vn.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),vn.crossVectors(i,oi)),vn.normalize(),Gr.crossVectors(oi,vn),n[0]=vn.x,n[4]=Gr.x,n[8]=oi.x,n[1]=vn.y,n[5]=Gr.y,n[9]=oi.y,n[2]=vn.z,n[6]=Gr.z,n[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],f=i[2],v=i[6],m=i[10],g=i[14],_=i[3],M=i[7],b=i[11],P=i[15],A=n[0],D=n[4],z=n[8],k=n[12],Z=n[1],K=n[5],J=n[9],ee=n[13],$=n[2],oe=n[6],le=n[10],ce=n[14],ue=n[3],Pe=n[7],Ne=n[11],ge=n[15];return r[0]=a*A+o*Z+l*$+c*ue,r[4]=a*D+o*K+l*oe+c*Pe,r[8]=a*z+o*J+l*le+c*Ne,r[12]=a*k+o*ee+l*ce+c*ge,r[1]=h*A+d*Z+u*$+p*ue,r[5]=h*D+d*K+u*oe+p*Pe,r[9]=h*z+d*J+u*le+p*Ne,r[13]=h*k+d*ee+u*ce+p*ge,r[2]=f*A+v*Z+m*$+g*ue,r[6]=f*D+v*K+m*oe+g*Pe,r[10]=f*z+v*J+m*le+g*Ne,r[14]=f*k+v*ee+m*ce+g*ge,r[3]=_*A+M*Z+b*$+P*ue,r[7]=_*D+M*K+b*oe+P*Pe,r[11]=_*z+M*J+b*le+P*Ne,r[15]=_*k+M*ee+b*ce+P*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],p=e[14];return e[3]*(+r*l*d-n*c*d-r*o*u+i*c*u+n*o*p-i*l*p)+e[7]*(+t*l*p-t*c*u+r*a*u-n*a*p+n*c*h-r*l*h)+e[11]*(+t*c*d-t*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+e[15]*(-n*o*h-t*l*d+t*o*u+n*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],_=d*m*c-v*u*c+v*l*p-o*m*p-d*l*g+o*u*g,M=f*u*c-h*m*c-f*l*p+a*m*p+h*l*g-a*u*g,b=h*v*c-f*d*c+f*o*p-a*v*p-h*o*g+a*d*g,P=f*d*l-h*v*l-f*o*u+a*v*u+h*o*m-a*d*m,A=t*_+i*M+n*b+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=_*D,e[1]=(v*u*r-d*m*r-v*n*p+i*m*p+d*n*g-i*u*g)*D,e[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*g+i*l*g)*D,e[3]=(d*l*r-o*u*r-d*n*c+i*u*c+o*n*p-i*l*p)*D,e[4]=M*D,e[5]=(h*m*r-f*u*r+f*n*p-t*m*p-h*n*g+t*u*g)*D,e[6]=(f*l*r-a*m*r-f*n*c+t*m*c+a*n*g-t*l*g)*D,e[7]=(a*u*r-h*l*r+h*n*c-t*u*c-a*n*p+t*l*p)*D,e[8]=b*D,e[9]=(f*d*r-h*v*r-f*i*p+t*v*p+h*i*g-t*d*g)*D,e[10]=(a*v*r-f*o*r+f*i*c-t*v*c-a*i*g+t*o*g)*D,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*p-t*o*p)*D,e[12]=P*D,e[13]=(h*v*n-f*d*n+f*i*u-t*v*u-h*i*m+t*d*m)*D,e[14]=(f*o*n-a*v*n-f*i*l+t*v*l+a*i*m-t*o*m)*D,e[15]=(a*d*n-h*o*n+h*i*l-t*d*l-a*i*u+t*o*u)*D,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,p=r*h,f=r*d,v=a*h,m=a*d,g=o*d,_=l*c,M=l*h,b=l*d,P=i.x,A=i.y,D=i.z;return n[0]=(1-(v+g))*P,n[1]=(p+b)*P,n[2]=(f-M)*P,n[3]=0,n[4]=(p-b)*A,n[5]=(1-(u+g))*A,n[6]=(m+_)*A,n[7]=0,n[8]=(f+M)*D,n[9]=(m-_)*D,n[10]=(1-(u+v))*D,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=os.set(n[0],n[1],n[2]).length(),a=os.set(n[4],n[5],n[6]).length(),o=os.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Ci.copy(this);let l=1/r,c=1/a,h=1/o;return Ci.elements[0]*=l,Ci.elements[1]*=l,Ci.elements[2]*=l,Ci.elements[4]*=c,Ci.elements[5]*=c,Ci.elements[6]*=c,Ci.elements[8]*=h,Ci.elements[9]*=h,Ci.elements[10]*=h,t.setFromRotationMatrix(Ci),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=2e3){let l=this.elements,c=2*r/(t-e),h=2*r/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),p,f;if(o===ws)p=-(a+r)/(a-r),f=-2*a*r/(a-r);else{if(o!==ya)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),f=-a*r/(a-r)}return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(a-r),u=(t+e)*c,p=(i+n)*h,f,v;if(o===ws)f=(a+r)*d,v=-2*d;else{if(o!==ya)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=r*d,v=-1*d}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},os=new L,Ci=new Ke,Dp=new L(0,0,0),zp=new L(1,1,1),vn=new L,Gr=new L,oi=new L,Fh=new Ke,Hh=new ri,on=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var Sa=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Up=0,Vh=new L,ls=new ri,Qi=new Ke,Wr=new L,$s=new L,Np=new L,Op=new ri,Gh=new L(1,0,0),Wh=new L(0,1,0),Xh=new L(0,0,1),qh={type:"added"},kp={type:"removed"},cs={type:"childadded",child:null},Xo={type:"childremoved",child:null},Di=class s extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new on,i=new ri,n=new L(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ke},normalMatrix:{value:new ot}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wr.copy(e):Wr.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qi.lookAt($s,Wr,this.up):Qi.lookAt(Wr,$s,this.up),this.quaternion.setFromRotationMatrix(Qi),n&&(Qi.extractRotation(n.matrixWorld),ls.setFromRotationMatrix(Qi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,Np),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),f.length>0&&(i.nodes=f)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Di.DEFAULT_UP=new L(0,1,0),Di.DEFAULT_MATRIX_AUTO_UPDATE=!0,Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pi=new L,en=new L,qo=new L,tn=new L,hs=new L,us=new L,jh=new L,jo=new L,Yo=new L,Zo=new L,Ko=new Lt,Jo=new Lt,$o=new Lt,_n=class s{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Pi.subVectors(e,t),n.cross(Pi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Pi.subVectors(n,t),en.subVectors(i,t),qo.subVectors(e,t);let a=Pi.dot(Pi),o=Pi.dot(en),l=Pi.dot(qo),c=en.dot(en),h=en.dot(qo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,f=(a*h-o*l)*u;return r.set(1-p-f,f,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,tn)!==null&&tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(a,tn.y),l.addScaledVector(o,tn.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Ko.setScalar(0),Jo.setScalar(0),$o.setScalar(0),Ko.fromBufferAttribute(e,t),Jo.fromBufferAttribute(e,i),$o.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Ko,r.x),a.addScaledVector(Jo,r.y),a.addScaledVector($o,r.z),a}static isFrontFacing(e,t,i,n){return Pi.subVectors(i,t),en.subVectors(e,t),Pi.cross(en).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),en.subVectors(this.a,this.b),.5*Pi.cross(en).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;hs.subVectors(n,i),us.subVectors(r,i),jo.subVectors(e,i);let l=hs.dot(jo),c=us.dot(jo);if(l<=0&&c<=0)return t.copy(i);Yo.subVectors(e,n);let h=hs.dot(Yo),d=us.dot(Yo);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(hs,a);Zo.subVectors(e,r);let p=hs.dot(Zo),f=us.dot(Zo);if(f>=0&&p<=f)return t.copy(r);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(us,o);let m=h*f-p*d;if(m<=0&&d-h>=0&&p-f>=0)return jh.subVectors(r,n),o=(d-h)/(d-h+(p-f)),t.copy(n).addScaledVector(jh,o);let g=1/(m+v+u);return a=v*g,o=u*g,t.copy(i).addScaledVector(hs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function Qo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=vt.workingColorSpace){if(e=Rp(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Qo(a,r,e+1/3),this.g=Qo(a,r,e),this.b=Qo(a,r,e-1/3)}return vt.toWorkingColorSpace(this,n),this}setStyle(e,t=fi){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){let i=Xu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rn(e.r),this.g=rn(e.g),this.b=rn(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return vt.fromWorkingColorSpace(Kt.copy(this),e),65536*Math.round(jt(255*Kt.r,0,255))+256*Math.round(jt(255*Kt.g,0,255))+Math.round(jt(255*Kt.b,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,n=Kt.g,r=Kt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=fi){vt.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,n=Kt.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Xr);let i=No(xn.h,Xr.h,t),n=No(xn.s,Xr.s,t),r=No(xn.l,Xr.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Xe;Xe.NAMES=Xu;var Bp=0,Es=class extends wn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=Ds(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ml,this.blendDst=gl,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nn,this.stencilZFail=nn,this.stencilZPass=nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ml&&(i.blendSrc=this.blendSrc),this.blendDst!==gl&&(i.blendDst=this.blendDst),this.blendEquation!==Vn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Et=class extends Es{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},j0=Fp();function Fp(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):c<-14?(i[l]=1024>>-c-14,i[256|l]=1024>>-c-14|32768,n[l]=-c-1,n[256|l]=-c-1):c<=15?(i[l]=c+15<<10,i[256|l]=c+15<<10|32768,n[l]=13,n[256|l]=13):c<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}var Bt=new L,qr=new Te,Ft=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ni(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=ni(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array),n=ni(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ni(t,this.array),i=ni(i,this.array),n=ni(n,this.array),r=ni(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}};var wa=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ta=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ke=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},Hp=0,pi=new Ke,el=new Di,ds=new L,li=new Ui,Qs=new Ui,Wt=new L,Mt=class s extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Ta:wa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ot().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(i,3))}else{for(let i=0,n=t.count;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];li.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new L,1/0);if(e){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(li.min,Qs.min),li.expandByPoint(Wt),Wt.addVectors(li.max,Qs.max),li.expandByPoint(Wt)):(li.expandByPoint(Qs.min),li.expandByPoint(Qs.max))}li.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),Wt.add(ds)),n=Math.max(n,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let z=0;z<i.count;z++)o[z]=new L,l[z]=new L;let c=new L,h=new L,d=new L,u=new Te,p=new Te,f=new Te,v=new L,m=new L;function g(z,k,Z){c.fromBufferAttribute(i,z),h.fromBufferAttribute(i,k),d.fromBufferAttribute(i,Z),u.fromBufferAttribute(r,z),p.fromBufferAttribute(r,k),f.fromBufferAttribute(r,Z),h.sub(c),d.sub(c),p.sub(u),f.sub(u);let K=1/(p.x*f.y-f.x*p.y);isFinite(K)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(K),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(K),o[z].add(v),o[k].add(v),o[Z].add(v),l[z].add(m),l[k].add(m),l[Z].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let z=0,k=_.length;z<k;++z){let Z=_[z],K=Z.start;for(let J=K,ee=K+Z.count;J<ee;J+=3)g(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let M=new L,b=new L,P=new L,A=new L;function D(z){P.fromBufferAttribute(n,z),A.copy(P);let k=o[z];M.copy(k),M.sub(P.multiplyScalar(P.dot(k))).normalize(),b.crossVectors(A,k);let Z=b.dot(l[z])<0?-1:1;a.setXYZW(z,M.x,M.y,M.z,Z)}for(let z=0,k=_.length;z<k;++z){let Z=_[z],K=Z.start;for(let J=K,ee=K+Z.count;J<ee;J+=3)D(e.getX(J+0)),D(e.getX(J+1)),D(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ft(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let n=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){let f=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(t,f),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,f),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(f,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let g=0;g<h;g++)u[f++]=c[p++]}return new Ft(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=e(c[h],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yh=new Ke,On=new Ts,jr=new hi,Zh=new L,Yr=new L,Zr=new L,Kr=new L,tl=new L,Jr=new L,Kh=new L,$r=new L,st=class extends Di{constructor(e=new Mt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(tl.fromBufferAttribute(d,e),a?Jr.addScaledVector(tl,h):Jr.addScaledVector(tl.sub(t),h))}t.add(Jr)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),On.copy(e.ray).recast(e.near),jr.containsPoint(On.origin)===!1&&(On.intersectSphere(jr,Zh)===null||On.origin.distanceToSquared(Zh)>(e.far-e.near)**2))return;Yh.copy(r).invert(),On.copy(e.ray).applyMatrix4(Yh),i.boundingBox!==null&&On.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,On)}}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=u.length;f<v;f++){let m=u[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));_<M;_+=3)n=Qr(this,g,e,i,c,h,d,o.getX(_),o.getX(_+1),o.getX(_+2)),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)n=Qr(this,a,e,i,c,h,d,o.getX(f),o.getX(f+1),o.getX(f+2)),n&&(n.faceIndex=Math.floor(f/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=u.length;f<v;f++){let m=u[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));_<M;_+=3)n=Qr(this,g,e,i,c,h,d,_,_+1,_+2),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)n=Qr(this,a,e,i,c,h,d,f,f+1,f+2),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}};function Qr(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,Yr),s.getVertexPosition(l,Zr),s.getVertexPosition(c,Kr);let h=function(d,u,p,f,v,m,g,_){let M;if(M=u.side===1?f.intersectTriangle(g,m,v,!0,_):f.intersectTriangle(v,m,g,u.side===0,_),M===null)return null;$r.copy(_),$r.applyMatrix4(d.matrixWorld);let b=p.ray.origin.distanceTo($r);return b<p.near||b>p.far?null:{distance:b,point:$r.clone(),object:d}}(s,e,t,i,Yr,Zr,Kr,Kh);if(h){let d=new L;_n.getBarycoord(Kh,Yr,Zr,Kr,d),n&&(h.uv=_n.getInterpolatedAttribute(n,o,l,c,d,new Te)),r&&(h.uv1=_n.getInterpolatedAttribute(r,o,l,c,d,new Te)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};_n.getNormal(Yr,Zr,Kr,u.normal),h.face=u,h.barycoord=d}return h}var gi=class s extends Mt{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,p=0;function f(v,m,g,_,M,b,P,A,D,z,k){let Z=b/D,K=P/z,J=b/2,ee=P/2,$=A/2,oe=D+1,le=z+1,ce=0,ue=0,Pe=new L;for(let Ne=0;Ne<le;Ne++){let ge=Ne*K-ee;for(let Me=0;Me<oe;Me++){let Ae=Me*Z-J;Pe[v]=Ae*_,Pe[m]=ge*M,Pe[g]=$,c.push(Pe.x,Pe.y,Pe.z),Pe[v]=0,Pe[m]=0,Pe[g]=A>0?1:-1,h.push(Pe.x,Pe.y,Pe.z),d.push(Me/D),d.push(1-Ne/z),ce+=1}}for(let Ne=0;Ne<z;Ne++)for(let ge=0;ge<D;ge++){let Me=u+ge+oe*Ne,Ae=u+ge+oe*(Ne+1),De=u+(ge+1)+oe*(Ne+1),Re=u+(ge+1)+oe*Ne;l.push(Me,Ae,Re),l.push(Ae,De,Re),ue+=6}o.addGroup(p,ue,k),p+=ue,u+=ce}f("z","y","x",-1,-1,i,t,e,a,r,0),f("z","y","x",1,-1,i,t,-e,a,r,1),f("x","z","y",1,1,e,i,t,n,a,2),f("x","z","y",1,-1,e,i,-t,n,a,3),f("x","y","z",1,-1,e,t,i,n,r,4),f("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function As(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function ti(s){let e={};for(let t=0;t<s.length;t++){let i=As(s[t]);for(let n in i)e[n]=i[n]}return e}function qu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var Vp={clone:As,merge:ti},zt=class extends Es{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},dr=class extends Di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ws}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yn=new L,Jh=new Te,$h=new Te,ii=class extends dr{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*jl*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*va*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*jl*Math.atan(Math.tan(.5*va*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yn.x,yn.y).multiplyScalar(-e/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yn.x,yn.y).multiplyScalar(-e/yn.z)}getViewSize(e,t){return this.getViewBounds(e,Jh,$h),t.subVectors($h,Jh)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*va*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ps=-90,Jl=class extends Di{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ii(ps,1,e,t);n.layers=this.layers,this.add(n);let r=new ii(ps,1,e,t);r.layers=this.layers,this.add(r);let a=new ii(ps,1,e,t);a.layers=this.layers,this.add(a);let o=new ii(ps,1,e,t);o.layers=this.layers,this.add(o);let l=new ii(ps,1,e,t);l.layers=this.layers,this.add(l);let c=new ii(ps,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ws)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==ya)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}},Ea=class extends si{constructor(e,t,i,n,r,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:_s,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$l=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ea(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new gi(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let a=new st(n,r),o=t.minFilter;return t.minFilter===Mn&&(t.minFilter=Ii),new Jl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},il=new L,Gp=new L,Wp=new ot,sn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=il.subVectors(i,t).cross(Gp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(il),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Wp.getNormalMatrix(e),n=this.coplanarPoint(il).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},kn=new hi,ea=new L,pr=class{constructor(e=new sn,t=new sn,i=new sn,n=new sn,r=new sn,a=new sn){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],p=n[8],f=n[9],v=n[10],m=n[11],g=n[12],_=n[13],M=n[14],b=n[15];if(i[0].setComponents(l-r,u-c,m-p,b-g).normalize(),i[1].setComponents(l+r,u+c,m+p,b+g).normalize(),i[2].setComponents(l+a,u+h,m+f,b+_).normalize(),i[3].setComponents(l-a,u-h,m-f,b-_).normalize(),i[4].setComponents(l-o,u-d,m-v,b-M).normalize(),t===ws)i[5].setComponents(l+o,u+d,m+v,b+M).normalize();else{if(t!==ya)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,d,v,M).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ea.x=n.normal.x>0?e.max.x:e.min.x,ea.y=n.normal.y>0?e.max.y:e.min.y,ea.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ju(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xp(s){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let i=e.get(t);i&&(s.deleteBuffer(i.buffer),e.delete(t))},update:function(t,i){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let n=e.get(t);if(n===void 0)e.set(t,function(r,a){let o=r.array,l=r.usage,c=o.byteLength,h=s.createBuffer(),d;if(s.bindBuffer(a,h),s.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)d=s.FLOAT;else if(o instanceof Uint16Array)d=r.isFloat16BufferAttribute?s.HALF_FLOAT:s.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=s.SHORT;else if(o instanceof Uint32Array)d=s.UNSIGNED_INT;else if(o instanceof Int32Array)d=s.INT;else if(o instanceof Int8Array)d=s.BYTE;else if(o instanceof Uint8Array)d=s.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);d=s.UNSIGNED_BYTE}return{buffer:h,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}}(t,i));else if(n.version<t.version){if(n.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let l=a.array,c=a.updateRanges;if(s.bindBuffer(o,r),c.length===0)s.bufferSubData(o,0,l);else{c.sort((d,u)=>d.start-u.start);let h=0;for(let d=1;d<c.length;d++){let u=c[h],p=c[d];p.start<=u.start+u.count+1?u.count=Math.max(u.count,p.start+p.count-u.start):(++h,c[h]=p)}c.length=h+1;for(let d=0,u=c.length;d<u;d++){let p=c[d];s.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(n.buffer,t,i),n.version=t.version}}}}var vi=class s extends Mt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,p=[],f=[],v=[],m=[];for(let g=0;g<h;g++){let _=g*u-a;for(let M=0;M<c;M++){let b=M*d-r;f.push(b,-_,0),v.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let M=_+c*g,b=_+c*(g+1),P=_+1+c*(g+1),A=_+1+c*g;p.push(M,b,A),p.push(b,P,A)}this.setIndex(p),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ht={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Vi={basic:{uniforms:ti([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ti([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ti([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ti([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ti([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ti([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ti([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ti([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ti([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ti([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ti([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:ti([Le.common,Le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:ti([Le.lights,Le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Vi.physical={uniforms:ti([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var ta={r:0,b:0,g:0},Bn=new on,qp=new Ke;function jp(s,e,t,i,n,r,a){let o=new Xe(0),l,c,h=r===!0?0:1,d=null,u=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function v(m,g){m.getRGB(ta,qu(s)),i.buffers.color.setClear(ta.r,ta.g,ta.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let g=!1,_=f(m);_===null?v(o,h):_&&_.isColor&&(v(_,1),g=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))},addToRenderList:function(m,g){let _=f(g);_&&(_.isCubeTexture||_.mapping===Ha)?(c===void 0&&(c=new st(new gi(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:As(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Bn.copy(g.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Bn)),c.material.toneMapped=vt.getTransfer(_.colorSpace)!==wt,d===_&&u===_.version&&p===s.toneMapping||(c.material.needsUpdate=!0,d=_,u=_.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new st(new vi(2,2),new zt({name:"BackgroundMaterial",uniforms:As(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=vt.getTransfer(_.colorSpace)!==wt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),d===_&&u===_.version&&p===s.toneMapping||(l.material.needsUpdate=!0,d=_,u=_.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Yp(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=c(null),r=n,a=!1;function o(g){return s.bindVertexArray(g)}function l(g){return s.deleteVertexArray(g)}function c(g){let _=[],M=[],b=[];for(let P=0;P<t;P++)_[P]=0,M[P]=0,b[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:M,attributeDivisors:b,object:g,attributes:{},index:null}}function h(){let g=r.newAttributes;for(let _=0,M=g.length;_<M;_++)g[_]=0}function d(g){u(g,0)}function u(g,_){let M=r.newAttributes,b=r.enabledAttributes,P=r.attributeDivisors;M[g]=1,b[g]===0&&(s.enableVertexAttribArray(g),b[g]=1),P[g]!==_&&(s.vertexAttribDivisor(g,_),P[g]=_)}function p(){let g=r.newAttributes,_=r.enabledAttributes;for(let M=0,b=_.length;M<b;M++)_[M]!==g[M]&&(s.disableVertexAttribArray(M),_[M]=0)}function f(g,_,M,b,P,A,D){D===!0?s.vertexAttribIPointer(g,_,M,P,A):s.vertexAttribPointer(g,_,M,b,P,A)}function v(){m(),a=!0,r!==n&&(r=n,o(r.object))}function m(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:function(g,_,M,b,P){let A=!1,D=function(z,k,Z){let K=Z.wireframe===!0,J=i[z.id];J===void 0&&(J={},i[z.id]=J);let ee=J[k.id];ee===void 0&&(ee={},J[k.id]=ee);let $=ee[K];return $===void 0&&($=c(s.createVertexArray()),ee[K]=$),$}(b,M,_);r!==D&&(r=D,o(r.object)),A=function(z,k,Z,K){let J=r.attributes,ee=k.attributes,$=0,oe=Z.getAttributes();for(let le in oe)if(oe[le].location>=0){let ce=J[le],ue=ee[le];if(ue===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;$++}return r.attributesNum!==$||r.index!==K}(g,b,M,P),A&&function(z,k,Z,K){let J={},ee=k.attributes,$=0,oe=Z.getAttributes();for(let le in oe)if(oe[le].location>=0){let ce=ee[le];ce===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor));let ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),J[le]=ue,$++}r.attributes=J,r.attributesNum=$,r.index=K}(g,b,M,P),P!==null&&e.update(P,s.ELEMENT_ARRAY_BUFFER),(A||a)&&(a=!1,function(z,k,Z,K){h();let J=K.attributes,ee=Z.getAttributes(),$=k.defaultAttributeValues;for(let oe in ee){let le=ee[oe];if(le.location>=0){let ce=J[oe];if(ce===void 0&&(oe==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),oe==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){let ue=ce.normalized,Pe=ce.itemSize,Ne=e.get(ce);if(Ne===void 0)continue;let ge=Ne.buffer,Me=Ne.type,Ae=Ne.bytesPerElement,De=Me===s.INT||Me===s.UNSIGNED_INT||ce.gpuType===Fc;if(ce.isInterleavedBufferAttribute){let Re=ce.data,C=Re.stride,R=ce.offset;if(Re.isInstancedInterleavedBuffer){for(let V=0;V<le.locationSize;V++)u(le.location+V,Re.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let V=0;V<le.locationSize;V++)d(le.location+V);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let V=0;V<le.locationSize;V++)f(le.location+V,Pe/le.locationSize,Me,ue,C*Ae,(R+Pe/le.locationSize*V)*Ae,De)}else{if(ce.isInstancedBufferAttribute){for(let Re=0;Re<le.locationSize;Re++)u(le.location+Re,ce.meshPerAttribute);z.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<le.locationSize;Re++)d(le.location+Re);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Re=0;Re<le.locationSize;Re++)f(le.location+Re,Pe/le.locationSize,Me,ue,Pe*Ae,Pe/le.locationSize*Re*Ae,De)}}else if($!==void 0){let ue=$[oe];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(le.location,ue);break;case 3:s.vertexAttrib3fv(le.location,ue);break;case 4:s.vertexAttrib4fv(le.location,ue);break;default:s.vertexAttrib1fv(le.location,ue)}}}}p()}(g,_,M,b),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let g in i){let _=i[g];for(let M in _){let b=_[M];for(let P in b)l(b[P].object),delete b[P];delete _[M]}delete i[g]}},releaseStatesOfGeometry:function(g){if(i[g.id]===void 0)return;let _=i[g.id];for(let M in _){let b=_[M];for(let P in b)l(b[P].object),delete b[P];delete _[M]}delete i[g.id]},releaseStatesOfProgram:function(g){for(let _ in i){let M=i[_];if(M[g.id]===void 0)continue;let b=M[g.id];for(let P in b)l(b[P].object),delete b[P];delete M[g.id]}},initAttributes:h,enableAttribute:d,disableUnusedAttributes:p}}function Zp(s,e,t){let i;function n(r,a,o){o!==0&&(s.drawArraysInstanced(i,r,a,o),t.update(a,i,o))}this.setMode=function(r){i=r},this.render=function(r,a){s.drawArrays(i,r,a),t.update(a,i,1)},this.renderInstances=n,this.renderMultiDraw=function(r,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,r,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,i,1)},this.renderMultiDrawInstances=function(r,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<r.length;h++)n(r[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(i,r,0,a,0,l,0,o);let h=0;for(let d=0;d<o;d++)h+=a[d]*l[d];t.update(h,i,1)}}}function Kp(s,e,t,i){let n;function r(u){if(u==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let u=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:r,textureFormatReadable:function(u){return u===mi||i.convert(u)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(u){let p=u===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Sn&&i.convert(u)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==Gi&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:s.getParameter(s.MAX_TEXTURE_SIZE),maxCubemapSize:s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:s.getParameter(s.MAX_VERTEX_ATTRIBS),maxVertexUniforms:s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:s.getParameter(s.MAX_VARYING_VECTORS),maxFragmentUniforms:s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:s.getParameter(s.MAX_SAMPLES)}}function Jp(s){let e=this,t=null,i=0,n=!1,r=!1,a=new sn,o=new ot,l={value:null,needsUpdate:!1};function c(h,d,u,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=u+4*f,g=d.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<m)&&(v=new Float32Array(m));for(let _=0,M=u;_!==f;++_,M+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(v,M),v[M+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let u=h.length!==0||d||i!==0||n;return n=d,i=h.length,u},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,u){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=s.get(h);if(!n||p===null||p.length===0||r&&!v)r?c(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let g=r?0:i,_=4*g,M=m.clippingState||null;l.value=M,M=c(p,d,_,u);for(let b=0;b!==_;++b)M[b]=t[b];m.clippingState=M,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function $p(s){let e=new WeakMap;function t(n,r){return r===vl?n.mapping=_s:r===xl&&(n.mapping=Ms),n}function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping;if(r===vl||r===xl){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new $l(a.height);return o.fromEquirectangularTexture(s,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Ql=class extends dr{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qh=[.125,.215,.35,.446,.526,.582],er=20,nl=new Ql,eu=new Xe,sl=null,rl=0,al=0,ol=!1,Hn=(1+Math.sqrt(5))/2,fs=1/Hn,tu=[new L(-Hn,fs,0),new L(Hn,fs,0),new L(-fs,0,Hn),new L(fs,0,Hn),new L(0,Hn,-fs),new L(0,Hn,fs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Aa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,rl,al),this._renderer.xr.enabled=ol,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ii,minFilter:Ii,generateMipmaps:!1,type:Mr,format:mi,colorSpace:Tn,depthBuffer:!1},n=iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],c=[],h=a,d=a-4+1+Qh.length;for(let u=0;u<d;u++){let p=Math.pow(2,h);l.push(p);let f=1/p;u>a-4?f=Qh[u-a+4-1]:u===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,g=1+v,_=[m,m,g,m,g,g,m,m,g,g,m,g],M=6,b=6,P=3,A=2,D=1,z=new Float32Array(P*b*M),k=new Float32Array(A*b*M),Z=new Float32Array(D*b*M);for(let J=0;J<M;J++){let ee=J%3*2/3-1,$=J>2?0:-1,oe=[ee,$,0,ee+2/3,$,0,ee+2/3,$+1,0,ee,$,0,ee+2/3,$+1,0,ee,$+1,0];z.set(oe,P*b*J),k.set(_,A*b*J);let le=[J,J,J,J,J,J];Z.set(le,D*b*J)}let K=new Mt;K.setAttribute("position",new Ft(z,P)),K.setAttribute("uv",new Ft(k,A)),K.setAttribute("faceIndex",new Ft(Z,D)),o.push(K),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}}(r)),this._blurMaterial=function(a,o,l){let c=new Float32Array(er),h=new L(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return n}_compileMaterial(e){let t=new st(this._lodPlanes[0],e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,n){let r=new ii(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(eu),l.toneMapping=0,l.autoClear=!1;let d=new Et({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new st(new gi,d),p=!1,f=e.background;f?f.isColor&&(d.color.copy(f),e.background=null,p=!0):(d.color.copy(eu),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(r.up.set(0,a[v],0),r.lookAt(o[v],0,0)):m===1?(r.up.set(0,0,a[v]),r.lookAt(0,o[v],0)):(r.up.set(0,a[v],0),r.lookAt(0,0,o[v]));let g=this._cubeSize;ia(n,m*g,v>2?g:0,g,g),l.setRenderTarget(n),p&&l.render(u,r),l.render(e,r)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===_s||e.mapping===Ms;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new st(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;ia(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,nl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=tu[(n-r-1)%tu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new st(this._lodPlanes[n],c),d=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,f=r/p,v=isFinite(r)?1+Math.floor(3*f):er;v>er&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],g=0;for(let b=0;b<er;++b){let P=b/f,A=Math.exp(-P*P/2);m.push(A),b===0?g+=A:b<v&&(g+=2*A)}for(let b=0;b<m.length;b++)m[b]=m[b]/g;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-i;let M=this._sizeLods[n];ia(t,3*M*(n>_-4?n-_+4:0),4*(this._cubeSize-M),3*M,2*M),l.setRenderTarget(t),l.render(h,nl)}};function iu(s,e,t){let i=new an(s,e,t);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ia(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function nu(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function su(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qp(s){let e=new WeakMap,t=null;function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping,a=r===vl||r===xl,o=r===_s||r===Ms;if(a||o){let l=e.get(n),c=l!==void 0?l.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new Aa(s)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),l.texture;if(l!==void 0)return l.texture;{let h=n.image;return a&&h&&h.height>0||o&&h&&function(d){let u=0,p=6;for(let f=0;f<p;f++)d[f]!==void 0&&u++;return u===p}(h)?(t===null&&(t=new Aa(s)),l=a?t.fromEquirectangular(n):t.fromCubemap(n),l.texture.pmremVersion=n.pmremVersion,e.set(n,l),n.addEventListener("dispose",i),l.texture):null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function ef(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&sr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function tf(s,e,t,i){let n={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let d in c.attributes)e.remove(c.attributes[d]);for(let d in c.morphAttributes){let u=c.morphAttributes[d];for(let p=0,f=u.length;p<f;p++)e.remove(u[p])}c.removeEventListener("dispose",a),delete n[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),i.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,d=l.attributes.position,u=0;if(h!==null){let v=h.array;u=h.version;for(let m=0,g=v.length;m<g;m+=3){let _=v[m+0],M=v[m+1],b=v[m+2];c.push(_,M,M,b,b,_)}}else{if(d===void 0)return;{let v=d.array;u=d.version;for(let m=0,g=v.length/3-1;m<g;m+=3){let _=m+0,M=m+1,b=m+2;c.push(_,M,M,b,b,_)}}}let p=new(Wu(c)?Ta:wa)(c,1);p.version=u;let f=r.get(l);f&&e.remove(f),r.set(l,p)}return{get:function(l,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let d in c)e.update(c[d],s.ARRAY_BUFFER);let h=l.morphAttributes;for(let d in h){let u=h[d];for(let p=0,f=u.length;p<f;p++)e.update(u[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function nf(s,e,t){let i,n,r;function a(o,l,c){c!==0&&(s.drawElementsInstanced(i,l,n,o*r,c),t.update(l,i,c))}this.setMode=function(o){i=o},this.setIndex=function(o){n=o.type,r=o.bytesPerElement},this.render=function(o,l){s.drawElements(i,l,n,o*r),t.update(l,i,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,o,0,c);let h=0;for(let d=0;d<c;d++)h+=l[d];t.update(h,i,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<o.length;u++)a(o[u]/r,l[u],h[u]);else{d.multiDrawElementsInstancedWEBGL(i,l,0,n,o,0,h,0,c);let u=0;for(let p=0;p<c;p++)u+=l[p]*h[p];t.update(u,i,1)}}}function sf(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=n*(t/3);break;case s.LINES:e.lines+=n*(t/2);break;case s.LINE_STRIP:e.lines+=n*(t-1);break;case s.LINE_LOOP:e.lines+=n*t;break;case s.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function rf(s,e,t){let i=new WeakMap,n=new Lt;return{update:function(r,a,o){let l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,d=i.get(a);if(d===void 0||d.count!==h){let z=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",z)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;u===!0&&(_=1),p===!0&&(_=2),f===!0&&(_=3);let M=a.attributes.position.count*_,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let P=new Float32Array(M*b*4*h),A=new ba(P,M,b,h);A.type=Gi,A.needsUpdate=!0;let D=4*_;for(let k=0;k<h;k++){let Z=v[k],K=m[k],J=g[k],ee=M*b*4*k;for(let $=0;$<Z.count;$++){let oe=$*D;u===!0&&(n.fromBufferAttribute(Z,$),P[ee+oe+0]=n.x,P[ee+oe+1]=n.y,P[ee+oe+2]=n.z,P[ee+oe+3]=0),p===!0&&(n.fromBufferAttribute(K,$),P[ee+oe+4]=n.x,P[ee+oe+5]=n.y,P[ee+oe+6]=n.z,P[ee+oe+7]=0),f===!0&&(n.fromBufferAttribute(J,$),P[ee+oe+8]=n.x,P[ee+oe+9]=n.y,P[ee+oe+10]=n.z,P[ee+oe+11]=J.itemSize===4?n.w:1)}}d={count:h,texture:A,size:new Te(M,b)},i.set(a,d),a.addEventListener("dispose",z)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let u=0;for(let f=0;f<l.length;f++)u+=l[f];let p=a.morphTargetsRelative?1:1-u;o.getUniforms().setValue(s,"morphTargetBaseInfluence",p),o.getUniforms().setValue(s,"morphTargetInfluences",l)}o.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),o.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}}}function af(s,e,t,i){let n=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,c=e.get(a,l);if(n.get(c)!==o&&(e.update(c),n.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),n.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;n.get(h)!==o&&(h.update(),n.set(h,o))}return c},dispose:function(){n=new WeakMap}}}var Ra=class extends si{constructor(e,t,i,n,r,a,o,l,c,h=1026){if(h!==ur&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ur&&(i=Xn),i===void 0&&h===Ss&&(i=bs),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Li,this.minFilter=l!==void 0?l:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yu=new si,ru=new Ra(1,1),Zu=new ba,Ku=new Kl,Ju=new Ea,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function zs(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=au[n];if(r===void 0&&(r=new Float32Array(n),au[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ga(s,e){let t=ou[e];t===void 0&&(t=new Int32Array(e),ou[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function of(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function cf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function hf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function uf(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;hu.set(i),s.uniformMatrix2fv(this.addr,!1,hu),Gt(t,i)}}function df(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;cu.set(i),s.uniformMatrix3fv(this.addr,!1,cu),Gt(t,i)}}function pf(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;lu.set(i),s.uniformMatrix4fv(this.addr,!1,lu),Gt(t,i)}}function ff(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function gf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function vf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function xf(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function yf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function _f(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function Mf(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function bf(s,e,t){let i=this.cache,n=t.allocateTextureUnit(),r;i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),this.type===s.SAMPLER_2D_SHADOW?(ru.compareFunction=515,r=ru):r=Yu,t.setTexture2D(e||r,n)}function Sf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Ku,n)}function wf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ju,n)}function Tf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Zu,n)}function Ef(s,e){s.uniform1fv(this.addr,e)}function Af(s,e){let t=zs(e,this.size,2);s.uniform2fv(this.addr,t)}function Rf(s,e){let t=zs(e,this.size,3);s.uniform3fv(this.addr,t)}function Cf(s,e){let t=zs(e,this.size,4);s.uniform4fv(this.addr,t)}function Pf(s,e){let t=zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function If(s,e){let t=zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Lf(s,e){let t=zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Df(s,e){s.uniform1iv(this.addr,e)}function zf(s,e){s.uniform2iv(this.addr,e)}function Uf(s,e){s.uniform3iv(this.addr,e)}function Nf(s,e){s.uniform4iv(this.addr,e)}function Of(s,e){s.uniform1uiv(this.addr,e)}function kf(s,e){s.uniform2uiv(this.addr,e)}function Bf(s,e){s.uniform3uiv(this.addr,e)}function Ff(s,e){s.uniform4uiv(this.addr,e)}function Hf(s,e,t){let i=this.cache,n=e.length,r=Ga(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Yu,r[a])}function Vf(s,e,t){let i=this.cache,n=e.length,r=Ga(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ku,r[a])}function Gf(s,e,t){let i=this.cache,n=e.length,r=Ga(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Ju,r[a])}function Wf(s,e,t){let i=this.cache,n=e.length,r=Ga(t,n);Vt(i,r)||(s.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Zu,r[a])}var ec=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return of;case 35664:return lf;case 35665:return cf;case 35666:return hf;case 35674:return uf;case 35675:return df;case 35676:return pf;case 5124:case 35670:return ff;case 35667:case 35671:return mf;case 35668:case 35672:return gf;case 35669:case 35673:return vf;case 5125:return xf;case 36294:return yf;case 36295:return _f;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Tf}}(t.type)}},tc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return Ef;case 35664:return Af;case 35665:return Rf;case 35666:return Cf;case 35674:return Pf;case 35675:return If;case 35676:return Lf;case 5124:case 35670:return Df;case 35667:case 35671:return zf;case 35668:case 35672:return Uf;case 35669:case 35673:return Nf;case 5125:return Of;case 36294:return kf;case 36295:return Bf;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Wf}}(t.type)}},ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},ll=/(\w+)(\])?(\[|\.)?/g;function uu(s,e){s.seq.push(e),s.map[e.id]=e}function Xf(s,e,t){let i=s.name,n=i.length;for(ll.lastIndex=0;;){let r=ll.exec(i),a=ll.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===n){uu(t,c===void 0?new ec(o,s,e):new tc(o,s,e));break}{let h=t.map[o];h===void 0&&(h=new ic(o),uu(t,h)),t=h}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n);Xf(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function du(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var qf=0,pu=new ot;function fu(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let c=o.split(`
`),h=[],d=Math.max(l-6,0),u=Math.min(l+6,c.length);for(let p=d;p<u;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)}(s.getShaderSource(e),a)}return n}function jf(s,e){let t=function(i){vt._getMatrix(pu,vt.workingColorSpace,i);let n=`mat3( ${pu.elements.map(r=>r.toFixed(4))} )`;switch(vt.getTransfer(i)){case Va:return[n,"LinearTransferOETF"];case wt:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[n,"LinearTransferOETF"]}}(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yf(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var na=new L;function Zf(){return vt.getLuminanceCoefficients(na),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${na.x.toFixed(4)}, ${na.y.toFixed(4)}, ${na.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tr(s){return s!==""}function mu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kf=/^[ \t]*#include +<([\w\d./]+)>/gm;function nc(s){return s.replace(Kf,$f)}var Jf=new Map;function $f(s,e){let t=ht[e];if(t===void 0){let i=Jf.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return nc(t)}var Qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vu(s){return s.replace(Qf,em)}function em(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function xu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tm(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(K){let J="SHADOWMAP_TYPE_BASIC";return K.shadowMapType===1?J="SHADOWMAP_TYPE_PCF":K.shadowMapType===2?J="SHADOWMAP_TYPE_PCF_SOFT":K.shadowMapType===3&&(J="SHADOWMAP_TYPE_VSM"),J}(t),c=function(K){let J="ENVMAP_TYPE_CUBE";if(K.envMap)switch(K.envMapMode){case _s:case Ms:J="ENVMAP_TYPE_CUBE";break;case Ha:J="ENVMAP_TYPE_CUBE_UV"}return J}(t),h=function(K){let J="ENVMAP_MODE_REFLECTION";return K.envMap&&K.envMapMode===Ms&&(J="ENVMAP_MODE_REFRACTION"),J}(t),d=function(K){let J="ENVMAP_BLENDING_NONE";if(K.envMap)switch(K.combine){case 0:J="ENVMAP_BLENDING_MULTIPLY";break;case 1:J="ENVMAP_BLENDING_MIX";break;case 2:J="ENVMAP_BLENDING_ADD"}return J}(t),u=function(K){let J=K.envMapCubeUVHeight;if(J===null)return null;let ee=Math.log2(J)-2,$=1/J;return{texelWidth:1/(3*Math.max(Math.pow(2,ee),112)),texelHeight:$,maxMip:ee}}(t),p=function(K){return[K.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",K.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}(t),f=function(K){let J=[];for(let ee in K){let $=K[ee];$!==!1&&J.push("#define "+ee+" "+$)}return J.join(`
`)}(r),v=n.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(tr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(tr).join(`
`),g.length>0&&(g+=`
`)):(m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),g=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?ht.tonemapping_pars_fragment:"",t.toneMapping!==0?Yf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,jf("linearToOutputTexel",t.outputColorSpace),Zf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=nc(a),a=mu(a,t),a=gu(a,t),o=nc(o),o=mu(o,t),o=gu(o,t),a=vu(a),o=vu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=_+m+a,b=_+g+o,P=du(n,n.VERTEX_SHADER,M),A=du(n,n.FRAGMENT_SHADER,b);function D(K){if(s.debug.checkShaderErrors){let J=n.getProgramInfoLog(v).trim(),ee=n.getShaderInfoLog(P).trim(),$=n.getShaderInfoLog(A).trim(),oe=!0,le=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,P,A);else{let ce=fu(n,P,"vertex"),ue=fu(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+J+`
`+ce+`
`+ue)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):ee!==""&&$!==""||(le=!1);le&&(K.diagnostics={runnable:oe,programLog:J,vertexShader:{log:ee,prefix:m},fragmentShader:{log:$,prefix:g}})}n.deleteShader(P),n.deleteShader(A),z=new ys(n,v),k=function(J,ee){let $={},oe=J.getProgramParameter(ee,J.ACTIVE_ATTRIBUTES);for(let le=0;le<oe;le++){let ce=J.getActiveAttrib(ee,le),ue=ce.name,Pe=1;ce.type===J.FLOAT_MAT2&&(Pe=2),ce.type===J.FLOAT_MAT3&&(Pe=3),ce.type===J.FLOAT_MAT4&&(Pe=4),$[ue]={type:ce.type,location:J.getAttribLocation(ee,ue),locationSize:Pe}}return $}(n,v)}let z,k;n.attachShader(v,P),n.attachShader(v,A),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),this.getUniforms=function(){return z===void 0&&D(this),z},this.getAttributes=function(){return k===void 0&&D(this),k};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=n.getProgramParameter(v,37297)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=A,this}var im=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new rc(e),t.set(e,i)),i}},rc=class{constructor(e){this.id=im++,this.code=e,this.usedTimes=0}};function nm(s,e,t,i,n,r,a){let o=new Sa,l=new sc,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,_,M,b){let P=M.fog,A=b.geometry,D=m.isMeshStandardMaterial?M.environment:null,z=(m.isMeshStandardMaterial?t:e).get(m.envMap||D),k=z&&z.mapping===Ha?z.image.height:null,Z=f[m.type];m.precision!==null&&(p=n.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let K=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,J=K!==void 0?K.length:0,ee,$,oe,le,ce=0;if(A.morphAttributes.position!==void 0&&(ce=1),A.morphAttributes.normal!==void 0&&(ce=2),A.morphAttributes.color!==void 0&&(ce=3),Z){let Ce=Vi[Z];ee=Ce.vertexShader,$=Ce.fragmentShader}else ee=m.vertexShader,$=m.fragmentShader,l.update(m),oe=l.getVertexShaderID(m),le=l.getFragmentShaderID(m);let ue=s.getRenderTarget(),Pe=s.state.buffers.depth.getReversed(),Ne=b.isInstancedMesh===!0,ge=b.isBatchedMesh===!0,Me=!!m.map,Ae=!!m.matcap,De=!!z,Re=!!m.aoMap,C=!!m.lightMap,R=!!m.bumpMap,V=!!m.normalMap,H=!!m.displacementMap,U=!!m.emissiveMap,B=!!m.metalnessMap,E=!!m.roughnessMap,N=m.anisotropy>0,j=m.clearcoat>0,me=m.dispersion>0,q=m.iridescence>0,pe=m.sheen>0,de=m.transmission>0,xe=N&&!!m.anisotropyMap,Ee=j&&!!m.clearcoatMap,Ie=j&&!!m.clearcoatNormalMap,Fe=j&&!!m.clearcoatRoughnessMap,qe=q&&!!m.iridescenceMap,lt=q&&!!m.iridescenceThicknessMap,tt=pe&&!!m.sheenColorMap,Ge=pe&&!!m.sheenRoughnessMap,ut=!!m.specularMap,xt=!!m.specularColorMap,Tt=!!m.specularIntensityMap,He=de&&!!m.transmissionMap,S=de&&!!m.thicknessMap,O=!!m.gradientMap,ie=!!m.alphaMap,ne=m.alphaTest>0,te=!!m.alphaHash,ve=!!m.extensions,be=0;m.toneMapped&&(ue!==null&&ue.isXRRenderTarget!==!0||(be=s.toneMapping));let I={shaderID:Z,shaderType:m.type,shaderName:m.name,vertexShader:ee,fragmentShader:$,defines:m.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ge,batchingColor:ge&&b._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&b.instanceColor!==null,instancingMorph:Ne&&b.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Tn,alphaToCoverage:!!m.alphaToCoverage,map:Me,matcap:Ae,envMap:De,envMapMode:De&&z.mapping,envMapCubeUVHeight:k,aoMap:Re,lightMap:C,bumpMap:R,normalMap:V,displacementMap:u&&H,emissiveMap:U,normalMapObjectSpace:V&&m.normalMapType===1,normalMapTangentSpace:V&&m.normalMapType===0,metalnessMap:B,roughnessMap:E,anisotropy:N,anisotropyMap:xe,clearcoat:j,clearcoatMap:Ee,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Fe,dispersion:me,iridescence:q,iridescenceMap:qe,iridescenceThicknessMap:lt,sheen:pe,sheenColorMap:tt,sheenRoughnessMap:Ge,specularMap:ut,specularColorMap:xt,specularIntensityMap:Tt,transmission:de,transmissionMap:He,thicknessMap:S,gradientMap:O,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:ie,alphaTest:ne,alphaHash:te,combine:m.combine,mapUv:Me&&v(m.map.channel),aoMapUv:Re&&v(m.aoMap.channel),lightMapUv:C&&v(m.lightMap.channel),bumpMapUv:R&&v(m.bumpMap.channel),normalMapUv:V&&v(m.normalMap.channel),displacementMapUv:H&&v(m.displacementMap.channel),emissiveMapUv:U&&v(m.emissiveMap.channel),metalnessMapUv:B&&v(m.metalnessMap.channel),roughnessMapUv:E&&v(m.roughnessMap.channel),anisotropyMapUv:xe&&v(m.anisotropyMap.channel),clearcoatMapUv:Ee&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(m.sheenRoughnessMap.channel),specularMapUv:ut&&v(m.specularMap.channel),specularColorMapUv:xt&&v(m.specularColorMap.channel),specularIntensityMapUv:Tt&&v(m.specularIntensityMap.channel),transmissionMapUv:He&&v(m.transmissionMap.channel),thicknessMapUv:S&&v(m.thicknessMap.channel),alphaMapUv:ie&&v(m.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(V||N),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!A.attributes.uv&&(Me||ie),fog:!!P,useFog:m.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:b.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ce,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:s.shadowMap.enabled&&_.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:Me&&m.map.isVideoTexture===!0&&vt.getTransfer(m.map.colorSpace)===wt,decodeVideoTextureEmissive:U&&m.emissiveMap.isVideoTexture===!0&&vt.getTransfer(m.emissiveMap.colorSpace)===wt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ve&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&m.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return I.vertexUv1s=c.has(1),I.vertexUv2s=c.has(2),I.vertexUv3s=c.has(3),c.clear(),I},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)g.push(_),g.push(m.defines[_]);return m.isRawShaderMaterial===!1&&(function(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}(g,m),function(_,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),_.push(o.mask)}(g,m),g.push(s.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],_;if(g){let M=Vi[g];_=Vp.clone(M.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,g){let _;for(let M=0,b=h.length;M<b;M++){let P=h[M];if(P.cacheKey===g){_=P,++_.usedTimes;break}}return _===void 0&&(_=new tm(s,g,m,r),h.push(_)),_},releaseProgram:function(m){if(--m.usedTimes==0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function sm(){let s=new WeakMap;return{has:function(e){return s.has(e)},get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,i){s.get(e)[t]=i},dispose:function(){s=new WeakMap}}}function rm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _u(){let s=[],e=0,t=[],i=[],n=[];function r(a,o,l,c,h,d){let u=s[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:d},s[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=c,u.renderOrder=a.renderOrder,u.z=h,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,c,h,d){let u=r(a,o,l,c,h,d);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,l,c,h,d){let u=r(a,o,l,c,h,d);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||rm),i.length>1&&i.sort(o||yu),n.length>1&&n.sort(o||yu)}}}function am(){let s=new WeakMap;return{get:function(e,t){let i=s.get(e),n;return i===void 0?(n=new _u,s.set(e,[n])):t>=i.length?(n=new _u,i.push(n)):n=i[t],n},dispose:function(){s=new WeakMap}}}function om(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Xe};break;case"SpotLight":t={position:new L,direction:new L,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new L,halfWidth:new L,halfHeight:new L}}return s[e.id]=t,t}}}var lm=0;function cm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hm(s){let e=new om,t=function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new L);let n=new L,r=new Ke,a=new Ke;return{setup:function(o){let l=0,c=0,h=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,u=0,p=0,f=0,v=0,m=0,g=0,_=0,M=0,b=0,P=0;o.sort(cm);for(let D=0,z=o.length;D<z;D++){let k=o[D],Z=k.color,K=k.intensity,J=k.distance,ee=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)l+=Z.r*K,c+=Z.g*K,h+=Z.b*K;else if(k.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(k.sh.coefficients[$],K);P++}else if(k.isDirectionalLight){let $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let oe=k.shadow,le=t.get(k);le.shadowIntensity=oe.intensity,le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,i.directionalShadow[d]=le,i.directionalShadowMap[d]=ee,i.directionalShadowMatrix[d]=k.shadow.matrix,m++}i.directional[d]=$,d++}else if(k.isSpotLight){let $=e.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(Z).multiplyScalar(K),$.distance=J,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,i.spot[p]=$;let oe=k.shadow;if(k.map&&(i.spotLightMap[M]=k.map,M++,oe.updateMatrices(k),k.castShadow&&b++),i.spotLightMatrix[p]=oe.matrix,k.castShadow){let le=t.get(k);le.shadowIntensity=oe.intensity,le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,i.spotShadow[p]=le,i.spotShadowMap[p]=ee,_++}p++}else if(k.isRectAreaLight){let $=e.get(k);$.color.copy(Z).multiplyScalar(K),$.halfWidth.set(.5*k.width,0,0),$.halfHeight.set(0,.5*k.height,0),i.rectArea[f]=$,f++}else if(k.isPointLight){let $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){let oe=k.shadow,le=t.get(k);le.shadowIntensity=oe.intensity,le.shadowBias=oe.bias,le.shadowNormalBias=oe.normalBias,le.shadowRadius=oe.radius,le.shadowMapSize=oe.mapSize,le.shadowCameraNear=oe.camera.near,le.shadowCameraFar=oe.camera.far,i.pointShadow[u]=le,i.pointShadowMap[u]=ee,i.pointShadowMatrix[u]=k.shadow.matrix,g++}i.point[u]=$,u++}else if(k.isHemisphereLight){let $=e.get(k);$.skyColor.copy(k.color).multiplyScalar(K),$.groundColor.copy(k.groundColor).multiplyScalar(K),i.hemi[v]=$,v++}}f>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=l,i.ambient[1]=c,i.ambient[2]=h;let A=i.hash;A.directionalLength===d&&A.pointLength===u&&A.spotLength===p&&A.rectAreaLength===f&&A.hemiLength===v&&A.numDirectionalShadows===m&&A.numPointShadows===g&&A.numSpotShadows===_&&A.numSpotMaps===M&&A.numLightProbes===P||(i.directional.length=d,i.spot.length=p,i.rectArea.length=f,i.point.length=u,i.hemi.length=v,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+M-b,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,A.directionalLength=d,A.pointLength=u,A.spotLength=p,A.rectAreaLength=f,A.hemiLength=v,A.numDirectionalShadows=m,A.numPointShadows=g,A.numSpotShadows=_,A.numSpotMaps=M,A.numLightProbes=P,i.version=lm++)},setupView:function(o,l){let c=0,h=0,d=0,u=0,p=0,f=l.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let g=o[v];if(g.isDirectionalLight){let _=i.directional[c];_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(f),c++}else if(g.isSpotLight){let _=i.spot[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(f),d++}else if(g.isRectAreaLight){let _=i.rectArea[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),a.identity(),r.copy(g.matrixWorld),r.premultiply(f),a.extractRotation(r),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),u++}else if(g.isPointLight){let _=i.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let _=i.hemi[p];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(f),p++}}},state:i}}function Mu(s){let e=new hm(s),t=[],i=[],n={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){n.camera=r,t.length=0,i.length=0},state:n,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){i.push(r)}}}function um(s){let e=new WeakMap;return{get:function(t,i=0){let n=e.get(t),r;return n===void 0?(r=new Mu(s),e.set(t,[r])):i>=n.length?(r=new Mu(s),n.push(r)):r=n[i],r},dispose:function(){e=new WeakMap}}}var ac=class extends Es{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oc=class extends Es{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function dm(s,e,t){let i=new pr,n=new Te,r=new Te,a=new Lt,o=new ac({depthPacking:3201}),l=new oc,c={},h=t.maxTextureSize,d={[Yd]:1,[Zd]:0,[_r]:2},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let f=new Mt;f.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new st(f,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;function _(A,D){let z=e.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new an(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(D,null,z,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(D,null,z,p,v,null)}function M(A,D,z,k){let Z=null,K=z.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(K!==void 0)Z=K;else if(Z=z.isPointLight===!0?l:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let J=Z.uuid,ee=D.uuid,$=c[J];$===void 0&&($={},c[J]=$);let oe=$[ee];oe===void 0&&(oe=Z.clone(),$[ee]=oe,D.addEventListener("dispose",P)),Z=oe}return Z.visible=D.visible,Z.wireframe=D.wireframe,Z.side=k===3?D.shadowSide!==null?D.shadowSide:D.side:D.shadowSide!==null?D.shadowSide:d[D.side],Z.alphaMap=D.alphaMap,Z.alphaTest=D.alphaTest,Z.map=D.map,Z.clipShadows=D.clipShadows,Z.clippingPlanes=D.clippingPlanes,Z.clipIntersection=D.clipIntersection,Z.displacementMap=D.displacementMap,Z.displacementScale=D.displacementScale,Z.displacementBias=D.displacementBias,Z.wireframeLinewidth=D.wireframeLinewidth,Z.linewidth=D.linewidth,z.isPointLight===!0&&Z.isMeshDistanceMaterial===!0&&(s.properties.get(Z).light=z),Z}function b(A,D,z,k,Z){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&Z===3)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld);let J=e.update(A),ee=A.material;if(Array.isArray(ee)){let $=J.groups;for(let oe=0,le=$.length;oe<le;oe++){let ce=$[oe],ue=ee[ce.materialIndex];if(ue&&ue.visible){let Pe=M(A,ue,k,Z);A.onBeforeShadow(s,A,D,z,J,Pe,ce),s.renderBufferDirect(z,null,J,Pe,A,ce),A.onAfterShadow(s,A,D,z,J,Pe,ce)}}}else if(ee.visible){let $=M(A,ee,k,Z);A.onBeforeShadow(s,A,D,z,J,$,null),s.renderBufferDirect(z,null,J,$,A,null),A.onAfterShadow(s,A,D,z,J,$,null)}}let K=A.children;for(let J=0,ee=K.length;J<ee;J++)b(K[J],D,z,k,Z)}function P(A){A.target.removeEventListener("dispose",P);for(let D in c){let z=c[D],k=A.target.uuid;k in z&&(z[k].dispose(),delete z[k])}}this.render=function(A,D,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let k=s.getRenderTarget(),Z=s.getActiveCubeFace(),K=s.getActiveMipmapLevel(),J=s.state;J.setBlending(0),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let ee=g!==3&&this.type===3,$=g===3&&this.type!==3;for(let oe=0,le=A.length;oe<le;oe++){let ce=A[oe],ue=ce.shadow;if(ue===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ue.autoUpdate===!1&&ue.needsUpdate===!1)continue;n.copy(ue.mapSize);let Pe=ue.getFrameExtents();if(n.multiply(Pe),r.copy(ue.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Pe.x),n.x=r.x*Pe.x,ue.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Pe.y),n.y=r.y*Pe.y,ue.mapSize.y=r.y)),ue.map===null||ee===!0||$===!0){let ge=this.type!==3?{minFilter:Li,magFilter:Li}:{};ue.map!==null&&ue.map.dispose(),ue.map=new an(n.x,n.y,ge),ue.map.texture.name=ce.name+".shadowMap",ue.camera.updateProjectionMatrix()}s.setRenderTarget(ue.map),s.clear();let Ne=ue.getViewportCount();for(let ge=0;ge<Ne;ge++){let Me=ue.getViewport(ge);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),J.viewport(a),ue.updateMatrices(ce,ge),i=ue.getFrustum(),b(D,z,ue.camera,ce,this.type)}ue.isPointLightShadow!==!0&&this.type===3&&_(ue,z),ue.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(k,Z,K)}}var pm={[up]:1,[pp]:6,[mp]:7,[fp]:5,[dp]:0,[vp]:2,[xp]:4,[gp]:3};function fm(s,e){let t=new function(){let E=!1,N=new Lt,j=null,me=new Lt(0,0,0,0);return{setMask:function(q){j===q||E||(s.colorMask(q,q,q,q),j=q)},setLocked:function(q){E=q},setClear:function(q,pe,de,xe,Ee){Ee===!0&&(q*=xe,pe*=xe,de*=xe),N.set(q,pe,de,xe),me.equals(N)===!1&&(s.clearColor(q,pe,de,xe),me.copy(N))},reset:function(){E=!1,j=null,me.set(-1,0,0,0)}}},i=new function(){let E=!1,N=!1,j=null,me=null,q=null;return{setReversed:function(pe){if(N!==pe){let de=e.get("EXT_clip_control");N?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT);let xe=q;q=null,this.setClear(xe)}N=pe},getReversed:function(){return N},setTest:function(pe){pe?De(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(pe){j===pe||E||(s.depthMask(pe),j=pe)},setFunc:function(pe){if(N&&(pe=pm[pe]),me!==pe){switch(pe){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}me=pe}},setLocked:function(pe){E=pe},setClear:function(pe){q!==pe&&(N&&(pe=1-pe),s.clearDepth(pe),q=pe)},reset:function(){E=!1,j=null,me=null,q=null,N=!1}}},n=new function(){let E=!1,N=null,j=null,me=null,q=null,pe=null,de=null,xe=null,Ee=null;return{setTest:function(Ie){E||(Ie?De(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(Ie){N===Ie||E||(s.stencilMask(Ie),N=Ie)},setFunc:function(Ie,Fe,qe){j===Ie&&me===Fe&&q===qe||(s.stencilFunc(Ie,Fe,qe),j=Ie,me=Fe,q=qe)},setOp:function(Ie,Fe,qe){pe===Ie&&de===Fe&&xe===qe||(s.stencilOp(Ie,Fe,qe),pe=Ie,de=Fe,xe=qe)},setLocked:function(Ie){E=Ie},setClear:function(Ie){Ee!==Ie&&(s.clearStencil(Ie),Ee=Ie)},reset:function(){E=!1,N=null,j=null,me=null,q=null,pe=null,de=null,xe=null,Ee=null}}},r=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,v=null,m=null,g=null,_=null,M=null,b=new Xe(0,0,0),P=0,A=!1,D=null,z=null,k=null,Z=null,K=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ee=!1,$=0,oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ee=$>=1):oe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ee=$>=2);let le=null,ce={},ue=s.getParameter(s.SCISSOR_BOX),Pe=s.getParameter(s.VIEWPORT),Ne=new Lt().fromArray(ue),ge=new Lt().fromArray(Pe);function Me(E,N,j,me){let q=new Uint8Array(4),pe=s.createTexture();s.bindTexture(E,pe),s.texParameteri(E,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(E,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let de=0;de<j;de++)E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY?s.texImage3D(N,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,q):s.texImage2D(N+de,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,q);return pe}let Ae={};function De(E){o[E]!==!0&&(s.enable(E),o[E]=!0)}function Re(E){o[E]!==!1&&(s.disable(E),o[E]=!1)}Ae[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),t.setClear(0,0,0,1),i.setClear(1),n.setClear(0),De(s.DEPTH_TEST),i.setFunc(3),H(!1),U(1),De(s.CULL_FACE),V(0);let C={[Vn]:s.FUNC_ADD,[Kd]:s.FUNC_SUBTRACT,[Jd]:s.FUNC_REVERSE_SUBTRACT};C[103]=s.MIN,C[104]=s.MAX;let R={[$d]:s.ZERO,[Qd]:s.ONE,[ep]:s.SRC_COLOR,[ml]:s.SRC_ALPHA,[ap]:s.SRC_ALPHA_SATURATE,[sp]:s.DST_COLOR,[ip]:s.DST_ALPHA,[tp]:s.ONE_MINUS_SRC_COLOR,[gl]:s.ONE_MINUS_SRC_ALPHA,[rp]:s.ONE_MINUS_DST_COLOR,[np]:s.ONE_MINUS_DST_ALPHA,[op]:s.CONSTANT_COLOR,[lp]:s.ONE_MINUS_CONSTANT_COLOR,[cp]:s.CONSTANT_ALPHA,[hp]:s.ONE_MINUS_CONSTANT_ALPHA};function V(E,N,j,me,q,pe,de,xe,Ee,Ie){if(E!==0){if(u===!1&&(De(s.BLEND),u=!0),E===5)q=q||N,pe=pe||j,de=de||me,N===f&&q===g||(s.blendEquationSeparate(C[N],C[q]),f=N,g=q),j===v&&me===m&&pe===_&&de===M||(s.blendFuncSeparate(R[j],R[me],R[pe],R[de]),v=j,m=me,_=pe,M=de),xe.equals(b)!==!1&&Ee===P||(s.blendColor(xe.r,xe.g,xe.b,Ee),b.copy(xe),P=Ee),p=E,A=!1;else if(E!==p||Ie!==A){if(f===Vn&&g===Vn||(s.blendEquation(s.FUNC_ADD),f=Vn,g=Vn),Ie)switch(E){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}else switch(E){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}v=null,m=null,_=null,M=null,b.set(0,0,0),P=0,p=E,A=Ie}}else u===!0&&(Re(s.BLEND),u=!1)}function H(E){D!==E&&(E?s.frontFace(s.CW):s.frontFace(s.CCW),D=E)}function U(E){E!==0?(De(s.CULL_FACE),E!==z&&(E===1?s.cullFace(s.BACK):E===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),z=E}function B(E,N,j){E?(De(s.POLYGON_OFFSET_FILL),Z===N&&K===j||(s.polygonOffset(N,j),Z=N,K=j)):Re(s.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:i,stencil:n},enable:De,disable:Re,bindFramebuffer:function(E,N){return l[E]!==N&&(s.bindFramebuffer(E,N),l[E]=N,E===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=N),E===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=N),!0)},drawBuffers:function(E,N){let j=h,me=!1;if(E){j=c.get(N),j===void 0&&(j=[],c.set(N,j));let q=E.textures;if(j.length!==q.length||j[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,de=q.length;pe<de;pe++)j[pe]=s.COLOR_ATTACHMENT0+pe;j.length=q.length,me=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,me=!0);me&&s.drawBuffers(j)},useProgram:function(E){return d!==E&&(s.useProgram(E),d=E,!0)},setBlending:V,setMaterial:function(E,N){E.side===2?Re(s.CULL_FACE):De(s.CULL_FACE);let j=E.side===1;N&&(j=!j),H(j),E.blending===1&&E.transparent===!1?V(0):V(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),i.setFunc(E.depthFunc),i.setTest(E.depthTest),i.setMask(E.depthWrite),t.setMask(E.colorWrite);let me=E.stencilWrite;n.setTest(me),me&&(n.setMask(E.stencilWriteMask),n.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),n.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),B(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?De(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:H,setCullFace:U,setLineWidth:function(E){E!==k&&(ee&&s.lineWidth(E),k=E)},setPolygonOffset:B,setScissorTest:function(E){E?De(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=s.TEXTURE0+J-1),le!==E&&(s.activeTexture(E),le=E)},bindTexture:function(E,N,j){j===void 0&&(j=le===null?s.TEXTURE0+J-1:le);let me=ce[j];me===void 0&&(me={type:void 0,texture:void 0},ce[j]=me),me.type===E&&me.texture===N||(le!==j&&(s.activeTexture(j),le=j),s.bindTexture(E,N||Ae[E]),me.type=E,me.texture=N)},unbindTexture:function(){let E=ce[le];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},updateUBOMapping:function(E,N){let j=a.get(N);j===void 0&&(j=new WeakMap,a.set(N,j));let me=j.get(E);me===void 0&&(me=s.getUniformBlockIndex(N,E.name),j.set(E,me))},uniformBlockBinding:function(E,N){let j=a.get(N).get(E);r.get(N)!==j&&(s.uniformBlockBinding(N,j,E.__bindingPointIndex),r.set(N,j))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},scissor:function(E){Ne.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),Ne.copy(E))},viewport:function(E){ge.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),ge.copy(E))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),i.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},le=null,ce={},l={},c=new WeakMap,h=[],d=null,u=!1,p=null,f=null,v=null,m=null,g=null,_=null,M=null,b=new Xe(0,0,0),P=0,A=!1,D=null,z=null,k=null,Z=null,K=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ge.set(0,0,s.canvas.width,s.canvas.height),t.reset(),i.reset(),n.reset()}}}function bu(s,e,t,i){let n=function(r){switch(r){case Sn:case Du:return{byteLength:1,components:1};case hr:case zu:case Mr:return{byteLength:2,components:1};case Hc:case Vc:return{byteLength:2,components:4};case Xn:case Fc:case Gi:return{byteLength:4,components:1};case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}(i);switch(t){case Nu:case ku:return s*e;case Bu:return s*e*2;case Gc:case Wc:return s*e/n.components*n.byteLength;case Fu:case Xc:return s*e*2/n.components*n.byteLength;case Ou:return s*e*3/n.components*n.byteLength;case mi:case qc:return s*e*4/n.components*n.byteLength;case da:case pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fa:case ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ml:case Sl:return Math.max(s,16)*Math.max(e,8)/4;case _l:case bl:return Math.max(s,8)*Math.max(e,8)/2;case wl:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case El:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ga:case Hl:case Vl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hu:case Gl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Wl:case Xl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mm(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(C,R){return p?new OffscreenCanvas(C,R):_a("canvas")}function v(C,R,V){let H=1,U=Re(C);if((U.width>V||U.height>V)&&(H=V/Math.max(U.width,U.height)),H<1){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let B=Math.floor(H*U.width),E=Math.floor(H*U.height);d===void 0&&(d=f(B,E));let N=R?f(B,E):d;return N.width=B,N.height=E,N.getContext("2d").drawImage(C,0,0,B,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+B+"x"+E+")."),N}return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),C}return C}function m(C){return C.generateMipmaps}function g(C){s.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,R,V,H,U=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let B=R;if(R===s.RED&&(V===s.FLOAT&&(B=s.R32F),V===s.HALF_FLOAT&&(B=s.R16F),V===s.UNSIGNED_BYTE&&(B=s.R8)),R===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(B=s.R8UI),V===s.UNSIGNED_SHORT&&(B=s.R16UI),V===s.UNSIGNED_INT&&(B=s.R32UI),V===s.BYTE&&(B=s.R8I),V===s.SHORT&&(B=s.R16I),V===s.INT&&(B=s.R32I)),R===s.RG&&(V===s.FLOAT&&(B=s.RG32F),V===s.HALF_FLOAT&&(B=s.RG16F),V===s.UNSIGNED_BYTE&&(B=s.RG8)),R===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(B=s.RG8UI),V===s.UNSIGNED_SHORT&&(B=s.RG16UI),V===s.UNSIGNED_INT&&(B=s.RG32UI),V===s.BYTE&&(B=s.RG8I),V===s.SHORT&&(B=s.RG16I),V===s.INT&&(B=s.RG32I)),R===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(B=s.RGB8UI),V===s.UNSIGNED_SHORT&&(B=s.RGB16UI),V===s.UNSIGNED_INT&&(B=s.RGB32UI),V===s.BYTE&&(B=s.RGB8I),V===s.SHORT&&(B=s.RGB16I),V===s.INT&&(B=s.RGB32I)),R===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(B=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(B=s.RGBA16UI),V===s.UNSIGNED_INT&&(B=s.RGBA32UI),V===s.BYTE&&(B=s.RGBA8I),V===s.SHORT&&(B=s.RGBA16I),V===s.INT&&(B=s.RGBA32I)),R===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(B=s.RGB9_E5),R===s.RGBA){let E=U?Va:vt.getTransfer(H);V===s.FLOAT&&(B=s.RGBA32F),V===s.HALF_FLOAT&&(B=s.RGBA16F),V===s.UNSIGNED_BYTE&&(B=E===wt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(B=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(B=s.RGB5_A1)}return B!==s.R16F&&B!==s.R32F&&B!==s.RG16F&&B!==s.RG32F&&B!==s.RGBA16F&&B!==s.RGBA32F||e.get("EXT_color_buffer_float"),B}function b(C,R){let V;return C?R===null||R===Xn||R===bs?V=s.DEPTH24_STENCIL8:R===Gi?V=s.DEPTH32F_STENCIL8:R===hr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Xn||R===bs?V=s.DEPTH_COMPONENT24:R===Gi?V=s.DEPTH_COMPONENT32F:R===hr&&(V=s.DEPTH_COMPONENT16),V}function P(C,R){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Li&&C.minFilter!==Ii?Math.log2(Math.max(R.width,R.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?R.mipmaps.length:1}function A(C){let R=C.target;R.removeEventListener("dispose",A),function(V){let H=i.get(V);if(H.__webglInit===void 0)return;let U=V.source,B=u.get(U);if(B){let E=B[H.__cacheKey];E.usedTimes--,E.usedTimes===0&&z(V),Object.keys(B).length===0&&u.delete(U)}i.remove(V)}(R),R.isVideoTexture&&h.delete(R)}function D(C){let R=C.target;R.removeEventListener("dispose",D),function(V){let H=i.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),i.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(H.__webglFramebuffer[B]))for(let E=0;E<H.__webglFramebuffer[B].length;E++)s.deleteFramebuffer(H.__webglFramebuffer[B][E]);else s.deleteFramebuffer(H.__webglFramebuffer[B]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[B])}else{if(Array.isArray(H.__webglFramebuffer))for(let B=0;B<H.__webglFramebuffer.length;B++)s.deleteFramebuffer(H.__webglFramebuffer[B]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let B=0;B<H.__webglColorRenderbuffer.length;B++)H.__webglColorRenderbuffer[B]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[B]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}let U=V.textures;for(let B=0,E=U.length;B<E;B++){let N=i.get(U[B]);N.__webglTexture&&(s.deleteTexture(N.__webglTexture),a.memory.textures--),i.remove(U[B])}i.remove(V)}(R)}function z(C){let R=i.get(C);s.deleteTexture(R.__webglTexture);let V=C.source;delete u.get(V)[R.__cacheKey],a.memory.textures--}let k=0;function Z(C,R){let V=i.get(C);if(C.isVideoTexture&&function(H){let U=a.render.frame;h.get(H)!==U&&(h.set(H,U),H.update())}(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let H=C.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(H.complete!==!1)return void le(V,C,R);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+R)}let K={[lr]:s.REPEAT,[cr]:s.CLAMP_TO_EDGE,[yl]:s.MIRRORED_REPEAT},J={[Li]:s.NEAREST,[yp]:s.NEAREST_MIPMAP_NEAREST,[Or]:s.NEAREST_MIPMAP_LINEAR,[Ii]:s.LINEAR,[zo]:s.LINEAR_MIPMAP_NEAREST,[Mn]:s.LINEAR_MIPMAP_LINEAR},ee={[_p]:s.NEVER,[Ap]:s.ALWAYS,[Mp]:s.LESS,[Sp]:s.LEQUAL,[bp]:s.EQUAL,[Ep]:s.GEQUAL,[wp]:s.GREATER,[Tp]:s.NOTEQUAL};function $(C,R){if(R.type!==Gi||e.has("OES_texture_float_linear")!==!1||R.magFilter!==Ii&&R.magFilter!==zo&&R.magFilter!==Or&&R.magFilter!==Mn&&R.minFilter!==Ii&&R.minFilter!==zo&&R.minFilter!==Or&&R.minFilter!==Mn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,K[R.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,K[R.wrapT]),C!==s.TEXTURE_3D&&C!==s.TEXTURE_2D_ARRAY||s.texParameteri(C,s.TEXTURE_WRAP_R,K[R.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,J[R.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,J[R.minFilter]),R.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ee[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Li||R.minFilter!==Or&&R.minFilter!==Mn||R.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,n.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function oe(C,R){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,R.addEventListener("dispose",A));let H=R.source,U=u.get(H);U===void 0&&(U={},u.set(H,U));let B=function(E){let N=[];return N.push(E.wrapS),N.push(E.wrapT),N.push(E.wrapR||0),N.push(E.magFilter),N.push(E.minFilter),N.push(E.anisotropy),N.push(E.internalFormat),N.push(E.format),N.push(E.type),N.push(E.generateMipmaps),N.push(E.premultiplyAlpha),N.push(E.flipY),N.push(E.unpackAlignment),N.push(E.colorSpace),N.join()}(R);if(B!==C.__cacheKey){U[B]===void 0&&(U[B]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),U[B].usedTimes++;let E=U[C.__cacheKey];E!==void 0&&(U[C.__cacheKey].usedTimes--,E.usedTimes===0&&z(R)),C.__cacheKey=B,C.__webglTexture=U[B].texture}return V}function le(C,R,V){let H=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(H=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(H=s.TEXTURE_3D);let U=oe(C,R),B=R.source;t.bindTexture(H,C.__webglTexture,s.TEXTURE0+V);let E=i.get(B);if(B.version!==E.__version||U===!0){t.activeTexture(s.TEXTURE0+V);let N=vt.getPrimaries(vt.workingColorSpace),j=R.colorSpace===gs?null:vt.getPrimaries(R.colorSpace),me=R.colorSpace===gs||N===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let q=v(R.image,!1,n.maxTextureSize);q=De(R,q);let pe=r.convert(R.format,R.colorSpace),de=r.convert(R.type),xe,Ee=M(R.internalFormat,pe,de,R.colorSpace,R.isVideoTexture);$(H,R);let Ie=R.mipmaps,Fe=R.isVideoTexture!==!0,qe=E.__version===void 0||U===!0,lt=B.dataReady,tt=P(R,q);if(R.isDepthTexture)Ee=b(R.format===Ss,R.type),qe&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Ee,q.width,q.height):t.texImage2D(s.TEXTURE_2D,0,Ee,q.width,q.height,0,pe,de,null));else if(R.isDataTexture)if(Ie.length>0){Fe&&qe&&t.texStorage2D(s.TEXTURE_2D,tt,Ee,Ie[0].width,Ie[0].height);for(let Ge=0,ut=Ie.length;Ge<ut;Ge++)xe=Ie[Ge],Fe?lt&&t.texSubImage2D(s.TEXTURE_2D,Ge,0,0,xe.width,xe.height,pe,de,xe.data):t.texImage2D(s.TEXTURE_2D,Ge,Ee,xe.width,xe.height,0,pe,de,xe.data);R.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(s.TEXTURE_2D,tt,Ee,q.width,q.height),lt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,pe,de,q.data)):t.texImage2D(s.TEXTURE_2D,0,Ee,q.width,q.height,0,pe,de,q.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,tt,Ee,Ie[0].width,Ie[0].height,q.depth);for(let Ge=0,ut=Ie.length;Ge<ut;Ge++)if(xe=Ie[Ge],R.format!==mi)if(pe!==null)if(Fe){if(lt)if(R.layerUpdates.size>0){let xt=bu(xe.width,xe.height,R.format,R.type);for(let Tt of R.layerUpdates){let He=xe.data.subarray(Tt*xt/xe.data.BYTES_PER_ELEMENT,(Tt+1)*xt/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ge,0,0,Tt,xe.width,xe.height,1,pe,He)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ge,0,0,0,xe.width,xe.height,q.depth,pe,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ge,Ee,xe.width,xe.height,q.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?lt&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ge,0,0,0,xe.width,xe.height,q.depth,pe,de,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ge,Ee,xe.width,xe.height,q.depth,0,pe,de,xe.data)}else{Fe&&qe&&t.texStorage2D(s.TEXTURE_2D,tt,Ee,Ie[0].width,Ie[0].height);for(let Ge=0,ut=Ie.length;Ge<ut;Ge++)xe=Ie[Ge],R.format!==mi?pe!==null?Fe?lt&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ge,0,0,xe.width,xe.height,pe,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,Ge,Ee,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?lt&&t.texSubImage2D(s.TEXTURE_2D,Ge,0,0,xe.width,xe.height,pe,de,xe.data):t.texImage2D(s.TEXTURE_2D,Ge,Ee,xe.width,xe.height,0,pe,de,xe.data)}else if(R.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,tt,Ee,q.width,q.height,q.depth),lt)if(R.layerUpdates.size>0){let Ge=bu(q.width,q.height,R.format,R.type);for(let ut of R.layerUpdates){let xt=q.data.subarray(ut*Ge/q.data.BYTES_PER_ELEMENT,(ut+1)*Ge/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,q.width,q.height,1,pe,de,xt)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,pe,de,q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ee,q.width,q.height,q.depth,0,pe,de,q.data);else if(R.isData3DTexture)Fe?(qe&&t.texStorage3D(s.TEXTURE_3D,tt,Ee,q.width,q.height,q.depth),lt&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,pe,de,q.data)):t.texImage3D(s.TEXTURE_3D,0,Ee,q.width,q.height,q.depth,0,pe,de,q.data);else if(R.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(s.TEXTURE_2D,tt,Ee,q.width,q.height);else{let Ge=q.width,ut=q.height;for(let xt=0;xt<tt;xt++)t.texImage2D(s.TEXTURE_2D,xt,Ee,Ge,ut,0,pe,de,null),Ge>>=1,ut>>=1}}else if(Ie.length>0){if(Fe&&qe){let Ge=Re(Ie[0]);t.texStorage2D(s.TEXTURE_2D,tt,Ee,Ge.width,Ge.height)}for(let Ge=0,ut=Ie.length;Ge<ut;Ge++)xe=Ie[Ge],Fe?lt&&t.texSubImage2D(s.TEXTURE_2D,Ge,0,0,pe,de,xe):t.texImage2D(s.TEXTURE_2D,Ge,Ee,pe,de,xe);R.generateMipmaps=!1}else if(Fe){if(qe){let Ge=Re(q);t.texStorage2D(s.TEXTURE_2D,tt,Ee,Ge.width,Ge.height)}lt&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,de,q)}else t.texImage2D(s.TEXTURE_2D,0,Ee,pe,de,q);m(R)&&g(H),E.__version=B.version,R.onUpdate&&R.onUpdate(R)}C.__version=R.version}function ce(C,R,V,H,U,B){let E=r.convert(V.format,V.colorSpace),N=r.convert(V.type),j=M(V.internalFormat,E,N,V.colorSpace),me=i.get(R),q=i.get(V);if(q.__renderTarget=R,!me.__hasExternalTextures){let pe=Math.max(1,R.width>>B),de=Math.max(1,R.height>>B);U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?t.texImage3D(U,B,j,pe,de,R.depth,0,E,N,null):t.texImage2D(U,B,j,pe,de,0,E,N,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ae(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,H,U,q.__webglTexture,0,Me(R)):(U===s.TEXTURE_2D||U>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,H,U,q.__webglTexture,B),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(C,R,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),R.depthBuffer){let H=R.depthTexture,U=H&&H.isDepthTexture?H.type:null,B=b(R.stencilBuffer,U),E=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,N=Me(R);Ae(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N,B,R.width,R.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,N,B,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,B,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,E,s.RENDERBUFFER,C)}else{let H=R.textures;for(let U=0;U<H.length;U++){let B=H[U],E=r.convert(B.format,B.colorSpace),N=r.convert(B.type),j=M(B.internalFormat,E,N,B.colorSpace),me=Me(R);V&&Ae(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,me,j,R.width,R.height):Ae(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,me,j,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,j,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(C){let R=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==C.depthTexture){let H=C.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),H){let U=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,H.removeEventListener("dispose",U)};H.addEventListener("dispose",U),R.__depthDisposeCallback=U}R.__boundDepthTexture=H}if(C.depthTexture&&!R.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");(function(H,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,H),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=i.get(U.depthTexture);B.__renderTarget=U,B.__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),Z(U.depthTexture,0);let E=B.__webglTexture,N=Me(U);if(U.depthTexture.format===ur)Ae(U)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,E,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,E,0);else{if(U.depthTexture.format!==Ss)throw new Error("Unknown depthTexture format");Ae(U)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,E,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,E,0)}})(R.__webglFramebuffer,C)}else if(V){R.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[H]),R.__webglDepthbuffer[H]===void 0)R.__webglDepthbuffer[H]=s.createRenderbuffer(),ue(R.__webglDepthbuffer[H],C,!1);else{let U=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=R.__webglDepthbuffer[H];s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,U,s.RENDERBUFFER,B)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),ue(R.__webglDepthbuffer,C,!1);else{let H=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,U=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,U),s.framebufferRenderbuffer(s.FRAMEBUFFER,H,s.RENDERBUFFER,U)}t.bindFramebuffer(s.FRAMEBUFFER,null)}let Ne=[],ge=[];function Me(C){return Math.min(n.maxSamples,C.samples)}function Ae(C){let R=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function De(C,R){let V=C.colorSpace,H=C.format,U=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Tn&&V!==gs&&(vt.getTransfer(V)===wt?H===mi&&U===Sn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),R}function Re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=function(){let C=k;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),k+=1,C},this.resetTextureUnits=function(){k=0},this.setTexture2D=Z,this.setTexture2DArray=function(C,R){let V=i.get(C);C.version>0&&V.__version!==C.version?le(V,C,R):t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+R)},this.setTexture3D=function(C,R){let V=i.get(C);C.version>0&&V.__version!==C.version?le(V,C,R):t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+R)},this.setTextureCube=function(C,R){let V=i.get(C);C.version>0&&V.__version!==C.version?function(H,U,B){if(U.image.length!==6)return;let E=oe(H,U),N=U.source;t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+B);let j=i.get(N);if(N.version!==j.__version||E===!0){t.activeTexture(s.TEXTURE0+B);let me=vt.getPrimaries(vt.workingColorSpace),q=U.colorSpace===gs?null:vt.getPrimaries(U.colorSpace),pe=U.colorSpace===gs||me===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let de=U.isCompressedTexture||U.image[0].isCompressedTexture,xe=U.image[0]&&U.image[0].isDataTexture,Ee=[];for(let He=0;He<6;He++)Ee[He]=de||xe?xe?U.image[He].image:U.image[He]:v(U.image[He],!0,n.maxCubemapSize),Ee[He]=De(U,Ee[He]);let Ie=Ee[0],Fe=r.convert(U.format,U.colorSpace),qe=r.convert(U.type),lt=M(U.internalFormat,Fe,qe,U.colorSpace),tt=U.isVideoTexture!==!0,Ge=j.__version===void 0||E===!0,ut=N.dataReady,xt,Tt=P(U,Ie);if($(s.TEXTURE_CUBE_MAP,U),de){tt&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,lt,Ie.width,Ie.height);for(let He=0;He<6;He++){xt=Ee[He].mipmaps;for(let S=0;S<xt.length;S++){let O=xt[S];U.format!==mi?Fe!==null?tt?ut&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S,0,0,O.width,O.height,Fe,O.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S,lt,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?ut&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S,0,0,O.width,O.height,Fe,qe,O.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S,lt,O.width,O.height,0,Fe,qe,O.data)}}}else{if(xt=U.mipmaps,tt&&Ge){xt.length>0&&Tt++;let He=Re(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Tt,lt,He.width,He.height)}for(let He=0;He<6;He++)if(xe){tt?ut&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Ee[He].width,Ee[He].height,Fe,qe,Ee[He].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,lt,Ee[He].width,Ee[He].height,0,Fe,qe,Ee[He].data);for(let S=0;S<xt.length;S++){let O=xt[S].image[He].image;tt?ut&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S+1,0,0,O.width,O.height,Fe,qe,O.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S+1,lt,O.width,O.height,0,Fe,qe,O.data)}}else{tt?ut&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,0,0,Fe,qe,Ee[He]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,lt,Fe,qe,Ee[He]);for(let S=0;S<xt.length;S++){let O=xt[S];tt?ut&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S+1,0,0,Fe,qe,O.image[He]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,S+1,lt,Fe,qe,O.image[He])}}}m(U)&&g(s.TEXTURE_CUBE_MAP),j.__version=N.version,U.onUpdate&&U.onUpdate(U)}H.__version=U.version}(V,C,R):t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+R)},this.rebindTextures=function(C,R,V){let H=i.get(C);R!==void 0&&ce(H.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Pe(C)},this.setupRenderTarget=function(C){let R=C.texture,V=i.get(C),H=i.get(R);C.addEventListener("dispose",D);let U=C.textures,B=C.isWebGLCubeRenderTarget===!0,E=U.length>1;if(E||(H.__webglTexture===void 0&&(H.__webglTexture=s.createTexture()),H.__version=R.version,a.memory.textures++),B){V.__webglFramebuffer=[];for(let N=0;N<6;N++)if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer[N]=[];for(let j=0;j<R.mipmaps.length;j++)V.__webglFramebuffer[N][j]=s.createFramebuffer()}else V.__webglFramebuffer[N]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){V.__webglFramebuffer=[];for(let N=0;N<R.mipmaps.length;N++)V.__webglFramebuffer[N]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(E)for(let N=0,j=U.length;N<j;N++){let me=i.get(U[N]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ae(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let N=0;N<U.length;N++){let j=U[N];V.__webglColorRenderbuffer[N]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[N]);let me=r.convert(j.format,j.colorSpace),q=r.convert(j.type),pe=M(j.internalFormat,me,q,j.colorSpace,C.isXRRenderTarget===!0),de=Me(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,pe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+N,s.RENDERBUFFER,V.__webglColorRenderbuffer[N])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(B){t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture),$(s.TEXTURE_CUBE_MAP,R);for(let N=0;N<6;N++)if(R.mipmaps&&R.mipmaps.length>0)for(let j=0;j<R.mipmaps.length;j++)ce(V.__webglFramebuffer[N][j],C,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,j);else ce(V.__webglFramebuffer[N],C,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);m(R)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(E){for(let N=0,j=U.length;N<j;N++){let me=U[N],q=i.get(me);t.bindTexture(s.TEXTURE_2D,q.__webglTexture),$(s.TEXTURE_2D,me),ce(V.__webglFramebuffer,C,me,s.COLOR_ATTACHMENT0+N,s.TEXTURE_2D,0),m(me)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let N=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(N=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(N,H.__webglTexture),$(N,R),R.mipmaps&&R.mipmaps.length>0)for(let j=0;j<R.mipmaps.length;j++)ce(V.__webglFramebuffer[j],C,R,s.COLOR_ATTACHMENT0,N,j);else ce(V.__webglFramebuffer,C,R,s.COLOR_ATTACHMENT0,N,0);m(R)&&g(N),t.unbindTexture()}C.depthBuffer&&Pe(C)},this.updateRenderTargetMipmap=function(C){let R=C.textures;for(let V=0,H=R.length;V<H;V++){let U=R[V];if(m(U)){let B=_(C),E=i.get(U).__webglTexture;t.bindTexture(B,E),g(B),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(C){if(C.samples>0){if(Ae(C)===!1){let R=C.textures,V=C.width,H=C.height,U=s.COLOR_BUFFER_BIT,B=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,E=i.get(C),N=R.length>1;if(N)for(let j=0;j<R.length;j++)t.bindFramebuffer(s.FRAMEBUFFER,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let j=0;j<R.length;j++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(U|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(U|=s.STENCIL_BUFFER_BIT)),N){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,E.__webglColorRenderbuffer[j]);let me=i.get(R[j]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,me,0)}s.blitFramebuffer(0,0,V,H,0,0,V,H,U,s.NEAREST),l===!0&&(Ne.length=0,ge.length=0,Ne.push(s.COLOR_ATTACHMENT0+j),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ne.push(B),ge.push(B),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ne))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),N)for(let j=0;j<R.length;j++){t.bindFramebuffer(s.FRAMEBUFFER,E.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,E.__webglColorRenderbuffer[j]);let me=i.get(R[j]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.TEXTURE_2D,me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let R=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}},this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ae}function gm(s,e){return{convert:function(t,i=""){let n,r=vt.getTransfer(i);if(t===Sn)return s.UNSIGNED_BYTE;if(t===Hc)return s.UNSIGNED_SHORT_4_4_4_4;if(t===Vc)return s.UNSIGNED_SHORT_5_5_5_1;if(t===Uu)return s.UNSIGNED_INT_5_9_9_9_REV;if(t===Du)return s.BYTE;if(t===zu)return s.SHORT;if(t===hr)return s.UNSIGNED_SHORT;if(t===Fc)return s.INT;if(t===Xn)return s.UNSIGNED_INT;if(t===Gi)return s.FLOAT;if(t===Mr)return s.HALF_FLOAT;if(t===Nu)return s.ALPHA;if(t===Ou)return s.RGB;if(t===mi)return s.RGBA;if(t===ku)return s.LUMINANCE;if(t===Bu)return s.LUMINANCE_ALPHA;if(t===ur)return s.DEPTH_COMPONENT;if(t===Ss)return s.DEPTH_STENCIL;if(t===Gc)return s.RED;if(t===Wc)return s.RED_INTEGER;if(t===Fu)return s.RG;if(t===Xc)return s.RG_INTEGER;if(t===qc)return s.RGBA_INTEGER;if(t===da||t===pa||t===fa||t===ma)if(r===wt){if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n===null)return null;if(t===da)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===fa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===ma)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(n=e.get("WEBGL_compressed_texture_s3tc"),n===null)return null;if(t===da)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===pa)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===fa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===ma)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===_l||t===Ml||t===bl||t===Sl){if(n=e.get("WEBGL_compressed_texture_pvrtc"),n===null)return null;if(t===_l)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Ml)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===bl)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Sl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===wl||t===Tl||t===El){if(n=e.get("WEBGL_compressed_texture_etc"),n===null)return null;if(t===wl||t===Tl)return r===wt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(t===El)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}if(t===Al||t===Rl||t===Cl||t===Pl||t===Il||t===Ll||t===Dl||t===zl||t===Ul||t===Nl||t===Ol||t===kl||t===Bl||t===Fl){if(n=e.get("WEBGL_compressed_texture_astc"),n===null)return null;if(t===Al)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Rl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Cl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Pl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Il)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Ll)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Dl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===zl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ul)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Nl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Ol)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===kl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Bl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Fl)return r===wt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===ga||t===Hl||t===Vl){if(n=e.get("EXT_texture_compression_bptc"),n===null)return null;if(t===ga)return r===wt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Hl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Vl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Hu||t===Gl||t===Wl||t===Xl){if(n=e.get("EXT_texture_compression_rgtc"),n===null)return null;if(t===ga)return n.COMPRESSED_RED_RGTC1_EXT;if(t===Gl)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Wl)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Xl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===bs?s.UNSIGNED_INT_24_8:s[t]!==void 0?s[t]:null}}}var lc=class extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ci=class extends Di{constructor(){super(),this.isGroup=!0,this.type="Group"}},vm={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ci;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let n=new si;e.properties.get(n).__webglTexture=t.texture,t.depthNear==i.depthNear&&t.depthFar==i.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new zt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends wn{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null,v=new cc,m=t.getContextAttributes(),g=null,_=null,M=[],b=[],P=new Te,A=null,D=new ii;D.viewport=new Lt;let z=new ii;z.viewport=new Lt;let k=[D,z],Z=new lc,K=null,J=null;function ee(ge){let Me=b.indexOf(ge.inputSource);if(Me===-1)return;let Ae=M[Me];Ae!==void 0&&(Ae.update(ge.inputSource,ge.frame,c||a),Ae.dispatchEvent({type:ge.type,data:ge.inputSource}))}function $(){n.removeEventListener("select",ee),n.removeEventListener("selectstart",ee),n.removeEventListener("selectend",ee),n.removeEventListener("squeeze",ee),n.removeEventListener("squeezestart",ee),n.removeEventListener("squeezeend",ee),n.removeEventListener("end",$),n.removeEventListener("inputsourceschange",oe);for(let ge=0;ge<M.length;ge++){let Me=b[ge];Me!==null&&(b[ge]=null,M[ge].disconnect(Me))}K=null,J=null,v.reset(),e.setRenderTarget(g),p=null,u=null,d=null,n=null,_=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}function oe(ge){for(let Me=0;Me<ge.removed.length;Me++){let Ae=ge.removed[Me],De=b.indexOf(Ae);De>=0&&(b[De]=null,M[De].disconnect(Ae))}for(let Me=0;Me<ge.added.length;Me++){let Ae=ge.added[Me],De=b.indexOf(Ae);if(De===-1){for(let C=0;C<M.length;C++){if(C>=b.length){b.push(Ae),De=C;break}if(b[C]===null){b[C]=Ae,De=C;break}}if(De===-1)break}let Re=M[De];Re&&Re.connect(Ae)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ge){let Me=M[ge];return Me===void 0&&(Me=new rr,M[ge]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(ge){let Me=M[ge];return Me===void 0&&(Me=new rr,M[ge]=Me),Me.getGripSpace()},this.getHand=function(ge){let Me=M[ge];return Me===void 0&&(Me=new rr,M[ge]=Me),Me.getHandSpace()},this.setFramebufferScaleFactor=function(ge){r=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ge){o=ge,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ge){c=ge},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(ge){if(n=ge,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",ee),n.addEventListener("selectstart",ee),n.addEventListener("selectend",ee),n.addEventListener("squeeze",ee),n.addEventListener("squeezestart",ee),n.addEventListener("squeezeend",ee),n.addEventListener("end",$),n.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0){let Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new an(p.framebufferWidth,p.framebufferHeight,{format:mi,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Me=null,Ae=null,De=null;m.depth&&(De=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Ss:ur,Ae=m.stencil?bs:Xn);let Re={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Re),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new an(u.textureWidth,u.textureHeight,{format:mi,type:Sn,depthTexture:new Ra(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Ne.setContext(n),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let le=new L,ce=new L;function ue(ge,Me){Me===null?ge.matrixWorld.copy(ge.matrix):ge.matrixWorld.multiplyMatrices(Me.matrixWorld,ge.matrix),ge.matrixWorldInverse.copy(ge.matrixWorld).invert()}this.updateCamera=function(ge){if(n===null)return;let Me=ge.near,Ae=ge.far;v.texture!==null&&(v.depthNear>0&&(Me=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),Z.near=z.near=D.near=Me,Z.far=z.far=D.far=Ae,K===Z.near&&J===Z.far||(n.updateRenderState({depthNear:Z.near,depthFar:Z.far}),K=Z.near,J=Z.far),D.layers.mask=2|ge.layers.mask,z.layers.mask=4|ge.layers.mask,Z.layers.mask=D.layers.mask|z.layers.mask;let De=ge.parent,Re=Z.cameras;ue(Z,De);for(let C=0;C<Re.length;C++)ue(Re[C],De);Re.length===2?function(C,R,V){le.setFromMatrixPosition(R.matrixWorld),ce.setFromMatrixPosition(V.matrixWorld);let H=le.distanceTo(ce),U=R.projectionMatrix.elements,B=V.projectionMatrix.elements,E=U[14]/(U[10]-1),N=U[14]/(U[10]+1),j=(U[9]+1)/U[5],me=(U[9]-1)/U[5],q=(U[8]-1)/U[0],pe=(B[8]+1)/B[0],de=E*q,xe=E*pe,Ee=H/(-q+pe),Ie=Ee*-q;if(R.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Ie),C.translateZ(Ee),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),U[10]===-1)C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse);else{let Fe=E+Ee,qe=N+Ee,lt=de-Ie,tt=xe+(H-Ie),Ge=j*N/qe*Fe,ut=me*N/qe*Fe;C.projectionMatrix.makePerspective(lt,tt,Ge,ut,Fe,qe),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}(Z,D,z):Z.projectionMatrix.copy(D.projectionMatrix),function(C,R,V){V===null?C.matrix.copy(R.matrixWorld):(C.matrix.copy(V.matrixWorld),C.matrix.invert(),C.matrix.multiply(R.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=2*jl*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}(ge,Z,De)},this.getCamera=function(){return Z},this.getFoveation=function(){if(u!==null||p!==null)return l},this.setFoveation=function(ge){l=ge,u!==null&&(u.fixedFoveation=ge),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ge)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Z)};let Pe=null,Ne=new ju;Ne.setAnimationLoop(function(ge,Me){if(h=Me.getViewerPose(c||a),f=Me,h!==null){let Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let De=!1;Ae.length!==Z.cameras.length&&(Z.cameras.length=0,De=!0);for(let C=0;C<Ae.length;C++){let R=Ae[C],V=null;if(p!==null)V=p.getViewport(R);else{let U=d.getViewSubImage(u,R);V=U.viewport,C===0&&(e.setRenderTargetTextures(_,U.colorTexture,u.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(_))}let H=k[C];H===void 0&&(H=new ii,H.layers.enable(C),H.viewport=new Lt,k[C]=H),H.matrix.fromArray(R.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(R.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(V.x,V.y,V.width,V.height),C===0&&(Z.matrix.copy(H.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),De===!0&&Z.cameras.push(H)}let Re=n.enabledFeatures;if(Re&&Re.includes("depth-sensing")){let C=d.getDepthInformation(Ae[0]);C&&C.isValid&&C.texture&&v.init(e,C,n.renderState)}}for(let Ae=0;Ae<M.length;Ae++){let De=b[Ae],Re=M[Ae];De!==null&&Re!==void 0&&Re.update(De,Me,c||a)}Pe&&Pe(ge,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),f=null}),this.setAnimationLoop=function(ge){Pe=ge},this.dispose=function(){}}},Fn=new on,xm=new Ke;function ym(s,e){function t(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,t(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,t(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,t(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===1&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,t(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===1&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,t(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,t(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(n.envMap.value=o,Fn.copy(l),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),n.envMapRotation.value.setFromMatrix4(xm.makeRotationFromEuler(Fn)),n.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap&&(n.lightMap.value=r.lightMap,n.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,n.lightMapTransform)),r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,qu(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(n,r):r.isMeshToonMaterial?(i(n,r),function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)}(n,r)):r.isMeshPhongMaterial?(i(n,r),function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)}(n,r)):r.isMeshStandardMaterial?(i(n,r),function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)}(n,r),r.isMeshPhysicalMaterial&&function(c,h,d){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=d.texture,c.transmissionSamplerSize.value.set(d.width,d.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))}(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),function(c,h){h.matcap&&(c.matcap.value=h.matcap)}(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),function(c,h){let d=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(d.matrixWorld),c.nearDistance.value=d.shadow.camera.near,c.farDistance.value=d.shadow.camera.far}(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))}(n,r),r.isLineDashedMaterial&&function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale}(n,r)):r.isPointsMaterial?function(c,h,d,u){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*d,c.scale.value=.5*u,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,r,a,o):r.isSpriteMaterial?function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)}(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function _m(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,u,p,f){let v=d.value,m=u+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let g=f[m];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return f[m]=v,!0}else if(g.equals(v)===!1)return g.copy(v),!0}return!1}function c(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=a.indexOf(u.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(n[u.id]),delete n[u.id],delete r[u.id]}return{bind:function(d,u){let p=u.program;i.uniformBlockBinding(d,p)},update:function(d,u){let p=n[d.id];p===void 0&&(function(m){let g=m.uniforms,_=0,M=16;for(let P=0,A=g.length;P<A;P++){let D=Array.isArray(g[P])?g[P]:[g[P]];for(let z=0,k=D.length;z<k;z++){let Z=D[z],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let J=0,ee=K.length;J<ee;J++){let $=c(K[J]),oe=_%M,le=oe%$.boundary,ce=oe+le;_+=le,ce!==0&&M-ce<$.storage&&(_+=M-ce),Z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=_,_+=$.storage}}}let b=_%M;b>0&&(_+=M-b),m.__size=_,m.__cache={}}(d),p=function(m){let g=function(){for(let P=0;P<o;P++)if(a.indexOf(P)===-1)return a.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();m.__bindingPointIndex=g;let _=s.createBuffer(),M=m.__size,b=m.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,_),_}(d),n[d.id]=p,d.addEventListener("dispose",h));let f=u.program;i.updateUBOMapping(d,f);let v=e.render.frame;r[d.id]!==v&&(function(m){let g=n[m.id],_=m.uniforms,M=m.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let b=0,P=_.length;b<P;b++){let A=Array.isArray(_[b])?_[b]:[_[b]];for(let D=0,z=A.length;D<z;D++){let k=A[D];if(l(k,b,D,M)===!0){let Z=k.__offset,K=Array.isArray(k.value)?k.value:[k.value],J=0;for(let ee=0;ee<K.length;ee++){let $=K[ee],oe=c($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,Z+J,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,J),J+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}(d),r[d.id]=v)},dispose:function(){for(let d in n)s.deleteBuffer(n[d]);a=[],n={},r={}}}}var Ca=class{constructor(e={}){let{canvas:t=Cp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e,p;if(this.isWebGLRenderer=!0,i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),v=new Int32Array(4),m=null,g=null,_=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fi,this.toneMapping=0,this.toneMappingExposure=1;let b=this,P=!1,A=0,D=0,z=null,k=-1,Z=null,K=new Lt,J=new Lt,ee=null,$=new Xe(0),oe=0,le=t.width,ce=t.height,ue=1,Pe=null,Ne=null,ge=new Lt(0,0,le,ce),Me=new Lt(0,0,le,ce),Ae=!1,De=new pr,Re=!1,C=!1,R=new Ke,V=new Ke,H=new L,U=new Lt,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},E=!1;function N(){return z===null?ue:1}let j,me,q,pe,de,xe,Ee,Ie,Fe,qe,lt,tt,Ge,ut,xt,Tt,He,S,O,ie,ne,te,ve,be,I=i;function Ce(T,G){return t.getContext(T,G)}try{let T={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",nt,!1),I===null){let G="webgl2";if(I=Ce(G,T),I===null)throw Ce(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}function Oe(){j=new ef(I),j.init(),te=new gm(I,j),me=new Kp(I,j,e,te),q=new fm(I,j),me.reverseDepthBuffer&&u&&q.buffers.depth.setReversed(!0),pe=new sf(I),de=new sm,xe=new mm(I,j,q,de,me,te,pe),Ee=new $p(b),Ie=new Qp(b),Fe=new Xp(I),ve=new Yp(I,Fe),qe=new tf(I,Fe,pe,ve),lt=new af(I,qe,Fe,pe),O=new rf(I,me,xe),Tt=new Jp(de),tt=new nm(b,Ee,Ie,j,me,ve,Tt),Ge=new ym(b,de),ut=new am,xt=new um(j),S=new jp(b,Ee,Ie,q,lt,p,l),He=new dm(b,lt,me),be=new _m(I,pe,me,q),ie=new Zp(I,j,pe),ne=new nf(I,j,pe),pe.programs=tt.programs,b.capabilities=me,b.extensions=j,b.properties=de,b.renderLists=ut,b.shadowMap=He,b.state=q,b.info=pe}Oe();let ze=new hc(b,I);function St(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let T=pe.autoReset,G=He.enabled,ae=He.autoUpdate,ye=He.needsUpdate,se=He.type;Oe(),pe.autoReset=T,He.enabled=G,He.autoUpdate=ae,He.needsUpdate=ye,He.type=se}function nt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function yt(T){let G=T.target;G.removeEventListener("dispose",yt),function(ae){(function(ye){let se=de.get(ye).programs;se!==void 0&&(se.forEach(function(we){tt.releaseProgram(we)}),ye.isShaderMaterial&&tt.releaseShaderCache(ye))})(ae),de.remove(ae)}(G)}function Ut(T,G,ae){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,_e(T,G,ae),T.side=0,T.needsUpdate=!0,_e(T,G,ae),T.side=2):_e(T,G,ae)}this.xr=ze,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=j.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=j.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(T){T!==void 0&&(ue=T,this.setSize(le,ce,!1))},this.getSize=function(T){return T.set(le,ce)},this.setSize=function(T,G,ae=!0){ze.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(le=T,ce=G,t.width=Math.floor(T*ue),t.height=Math.floor(G*ue),ae===!0&&(t.style.width=T+"px",t.style.height=G+"px"),this.setViewport(0,0,T,G))},this.getDrawingBufferSize=function(T){return T.set(le*ue,ce*ue).floor()},this.setDrawingBufferSize=function(T,G,ae){le=T,ce=G,ue=ae,t.width=Math.floor(T*ae),t.height=Math.floor(G*ae),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,G,ae,ye){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,G,ae,ye),q.viewport(K.copy(ge).multiplyScalar(ue).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,G,ae,ye){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,G,ae,ye),q.scissor(J.copy(Me).multiplyScalar(ue).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){q.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){Ne=T},this.getClearColor=function(T){return T.copy(S.getClearColor())},this.setClearColor=function(){S.setClearColor.apply(S,arguments)},this.getClearAlpha=function(){return S.getClearAlpha()},this.setClearAlpha=function(){S.setClearAlpha.apply(S,arguments)},this.clear=function(T=!0,G=!0,ae=!0){let ye=0;if(T){let se=!1;if(z!==null){let we=z.texture.format;se=we===qc||we===Xc||we===Wc}if(se){let we=z.texture.type,Be=we===Sn||we===Xn||we===hr||we===bs||we===Hc||we===Vc,We=S.getClearColor(),Je=S.getClearAlpha(),at=We.r,ct=We.g,$e=We.b;Be?(f[0]=at,f[1]=ct,f[2]=$e,f[3]=Je,I.clearBufferuiv(I.COLOR,0,f)):(v[0]=at,v[1]=ct,v[2]=$e,v[3]=Je,I.clearBufferiv(I.COLOR,0,v))}else ye|=I.COLOR_BUFFER_BIT}G&&(ye|=I.DEPTH_BUFFER_BIT),ae&&(ye|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ye)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),ut.dispose(),xt.dispose(),de.dispose(),Ee.dispose(),Ie.dispose(),lt.dispose(),ve.dispose(),be.dispose(),tt.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",y),ze.removeEventListener("sessionend",w),X.stop()},this.renderBufferDirect=function(T,G,ae,ye,se,we){G===null&&(G=B);let Be=se.isMesh&&se.matrixWorld.determinant()<0,We=function(gt,ei,qt,dt,it){ei.isScene!==!0&&(ei=B),xe.resetTextureUnits();let Ti=ei.fog,Ro=dt.isMeshStandardMaterial?ei.environment:null,js=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Tn,is=(dt.isMeshStandardMaterial?Ie:Ee).get(dt.envMap||Ro),Co=dt.vertexColors===!0&&!!qt.attributes.color&&qt.attributes.color.itemSize===4,Po=!!qt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Io=!!qt.morphAttributes.position,dn=!!qt.morphAttributes.normal,Xd=!!qt.morphAttributes.color,wh=0;dt.toneMapped&&(z!==null&&z.isXRRenderTarget!==!0||(wh=b.toneMapping));let Th=qt.morphAttributes.position||qt.morphAttributes.normal||qt.morphAttributes.color,qd=Th!==void 0?Th.length:0,mt=de.get(dt),jd=g.state.lights;if(Re===!0&&(C===!0||gt!==Z)){let di=gt===Z&&dt.id===k;Tt.setState(dt,gt,di)}let Ei=!1;dt.version===mt.__version?mt.needsLights&&mt.lightsStateVersion!==jd.state.version||mt.outputColorSpace!==js||it.isBatchedMesh&&mt.batching===!1?Ei=!0:it.isBatchedMesh||mt.batching!==!0?it.isBatchedMesh&&mt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&mt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&mt.instancing===!1?Ei=!0:it.isInstancedMesh||mt.instancing!==!0?it.isSkinnedMesh&&mt.skinning===!1?Ei=!0:it.isSkinnedMesh||mt.skinning!==!0?it.isInstancedMesh&&mt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&mt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&mt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&mt.instancingMorph===!1&&it.morphTexture!==null||mt.envMap!==is||dt.fog===!0&&mt.fog!==Ti?Ei=!0:mt.numClippingPlanes===void 0||mt.numClippingPlanes===Tt.numPlanes&&mt.numIntersection===Tt.numIntersection?(mt.vertexAlphas!==Co||mt.vertexTangents!==Po||mt.morphTargets!==Io||mt.morphNormals!==dn||mt.morphColors!==Xd||mt.toneMapping!==wh||mt.morphTargetsCount!==qd)&&(Ei=!0):Ei=!0:Ei=!0:Ei=!0:Ei=!0:(Ei=!0,mt.__version=dt.version);let Dn=mt.currentProgram;Ei===!0&&(Dn=_e(dt,ei,it));let Eh=!1,Ys=!1,Lo=!1,kt=Dn.getUniforms(),pn=mt.uniforms;if(q.useProgram(Dn.program)&&(Eh=!0,Ys=!0,Lo=!0),dt.id!==k&&(k=dt.id,Ys=!0),Eh||Z!==gt){q.buffers.depth.getReversed()?(R.copy(gt.projectionMatrix),function(zn){let Pt=zn.elements;Pt[2]=.5*Pt[2]+.5*Pt[3],Pt[6]=.5*Pt[6]+.5*Pt[7],Pt[10]=.5*Pt[10]+.5*Pt[11],Pt[14]=.5*Pt[14]+.5*Pt[15]}(R),function(zn){let Pt=zn.elements;Pt[11]===-1?(Pt[10]=-Pt[10]-1,Pt[14]=-Pt[14]):(Pt[10]=-Pt[10],Pt[14]=1-Pt[14])}(R),kt.setValue(I,"projectionMatrix",R)):kt.setValue(I,"projectionMatrix",gt.projectionMatrix),kt.setValue(I,"viewMatrix",gt.matrixWorldInverse);let di=kt.map.cameraPosition;di!==void 0&&di.setValue(I,H.setFromMatrixPosition(gt.matrixWorld)),me.logarithmicDepthBuffer&&kt.setValue(I,"logDepthBufFC",2/(Math.log(gt.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&kt.setValue(I,"isOrthographic",gt.isOrthographicCamera===!0),Z!==gt&&(Z=gt,Ys=!0,Lo=!0)}if(it.isSkinnedMesh){kt.setOptional(I,it,"bindMatrix"),kt.setOptional(I,it,"bindMatrixInverse");let di=it.skeleton;di&&(di.boneTexture===null&&di.computeBoneTexture(),kt.setValue(I,"boneTexture",di.boneTexture,xe))}it.isBatchedMesh&&(kt.setOptional(I,it,"batchingTexture"),kt.setValue(I,"batchingTexture",it._matricesTexture,xe),kt.setOptional(I,it,"batchingIdTexture"),kt.setValue(I,"batchingIdTexture",it._indirectTexture,xe),kt.setOptional(I,it,"batchingColorTexture"),it._colorsTexture!==null&&kt.setValue(I,"batchingColorTexture",it._colorsTexture,xe));let Do=qt.morphAttributes;Do.position===void 0&&Do.normal===void 0&&Do.color===void 0||O.update(it,qt,Dn),(Ys||mt.receiveShadow!==it.receiveShadow)&&(mt.receiveShadow=it.receiveShadow,kt.setValue(I,"receiveShadow",it.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(pn.envMap.value=is,pn.flipEnvMap.value=is.isCubeTexture&&is.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&ei.environment!==null&&(pn.envMapIntensity.value=ei.environmentIntensity),Ys&&(kt.setValue(I,"toneMappingExposure",b.toneMappingExposure),mt.needsLights&&(Ai=Lo,(Hi=pn).ambientLightColor.needsUpdate=Ai,Hi.lightProbe.needsUpdate=Ai,Hi.directionalLights.needsUpdate=Ai,Hi.directionalLightShadows.needsUpdate=Ai,Hi.pointLights.needsUpdate=Ai,Hi.pointLightShadows.needsUpdate=Ai,Hi.spotLights.needsUpdate=Ai,Hi.spotLightShadows.needsUpdate=Ai,Hi.rectAreaLights.needsUpdate=Ai,Hi.hemisphereLights.needsUpdate=Ai),Ti&&dt.fog===!0&&Ge.refreshFogUniforms(pn,Ti),Ge.refreshMaterialUniforms(pn,dt,ue,ce,g.state.transmissionRenderTarget[gt.id]),ys.upload(I,je(mt),pn,xe));var Hi,Ai;if(dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(ys.upload(I,je(mt),pn,xe),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&kt.setValue(I,"center",it.center),kt.setValue(I,"modelViewMatrix",it.modelViewMatrix),kt.setValue(I,"normalMatrix",it.normalMatrix),kt.setValue(I,"modelMatrix",it.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){let di=dt.uniformsGroups;for(let zn=0,Pt=di.length;zn<Pt;zn++){let Ah=di[zn];be.update(Ah,Dn),be.bind(Ah,Dn)}}return Dn}(T,G,ae,ye,se);q.setMaterial(ye,Be);let Je=ae.index,at=1;if(ye.wireframe===!0){if(Je=qe.getWireframeAttribute(ae),Je===void 0)return;at=2}let ct=ae.drawRange,$e=ae.attributes.position,ft=ct.start*at,Nt=(ct.start+ct.count)*at;we!==null&&(ft=Math.max(ft,we.start*at),Nt=Math.min(Nt,(we.start+we.count)*at)),Je!==null?(ft=Math.max(ft,0),Nt=Math.min(Nt,Je.count)):$e!=null&&(ft=Math.max(ft,0),Nt=Math.min(Nt,$e.count));let At=Nt-ft;if(At<0||At===1/0)return;let Ht;ve.setup(se,ye,We,ae,Je);let Ct=ie;if(Je!==null&&(Ht=Fe.get(Je),Ct=ne,Ct.setIndex(Ht)),se.isMesh)ye.wireframe===!0?(q.setLineWidth(ye.wireframeLinewidth*N()),Ct.setMode(I.LINES)):Ct.setMode(I.TRIANGLES);else if(se.isLine){let gt=ye.linewidth;gt===void 0&&(gt=1),q.setLineWidth(gt*N()),se.isLineSegments?Ct.setMode(I.LINES):se.isLineLoop?Ct.setMode(I.LINE_LOOP):Ct.setMode(I.LINE_STRIP)}else se.isPoints?Ct.setMode(I.POINTS):se.isSprite&&Ct.setMode(I.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)Ct.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Ct.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let gt=se._multiDrawStarts,ei=se._multiDrawCounts,qt=se._multiDrawCount,dt=Je?Fe.get(Je).bytesPerElement:1,it=de.get(ye).currentProgram.getUniforms();for(let Ti=0;Ti<qt;Ti++)it.setValue(I,"_gl_DrawID",Ti),Ct.render(gt[Ti]/dt,ei[Ti])}else if(se.isInstancedMesh)Ct.renderInstances(ft,At,se.count);else if(ae.isInstancedBufferGeometry){let gt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ei=Math.min(ae.instanceCount,gt);Ct.renderInstances(ft,At,ei)}else Ct.render(ft,At)},this.compile=function(T,G,ae=null){ae===null&&(ae=T),g=xt.get(ae),g.init(G),M.push(g),ae.traverseVisible(function(se){se.isLight&&se.layers.test(G.layers)&&(g.pushLight(se),se.castShadow&&g.pushShadow(se))}),T!==ae&&T.traverseVisible(function(se){se.isLight&&se.layers.test(G.layers)&&(g.pushLight(se),se.castShadow&&g.pushShadow(se))}),g.setupLights();let ye=new Set;return T.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let we=se.material;if(we)if(Array.isArray(we))for(let Be=0;Be<we.length;Be++){let We=we[Be];Ut(We,ae,se),ye.add(We)}else Ut(we,ae,se),ye.add(we)}),M.pop(),g=null,ye},this.compileAsync=function(T,G,ae=null){let ye=this.compile(T,G,ae);return new Promise(se=>{function we(){ye.forEach(function(Be){de.get(Be).currentProgram.isReady()&&ye.delete(Be)}),ye.size!==0?setTimeout(we,10):se(T)}j.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Qt=null;function y(){X.stop()}function w(){X.start()}let X=new ju;function Y(T,G,ae,ye){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)ae=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||De.intersectsSprite(T)){ye&&U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);let we=lt.update(T),Be=T.material;Be.visible&&m.push(T,we,Be,ae,U.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||De.intersectsObject(T))){let we=lt.update(T),Be=T.material;if(ye&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),U.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),U.copy(we.boundingSphere.center)),U.applyMatrix4(T.matrixWorld).applyMatrix4(V)),Array.isArray(Be)){let We=we.groups;for(let Je=0,at=We.length;Je<at;Je++){let ct=We[Je],$e=Be[ct.materialIndex];$e&&$e.visible&&m.push(T,we,$e,ae,U.z,ct)}}else Be.visible&&m.push(T,we,Be,ae,U.z,null)}}let se=T.children;for(let we=0,Be=se.length;we<Be;we++)Y(se[we],G,ae,ye)}function W(T,G,ae,ye){let se=T.opaque,we=T.transmissive,Be=T.transparent;g.setupLightsView(ae),Re===!0&&Tt.setGlobalState(b.clippingPlanes,ae),ye&&q.viewport(K.copy(ye)),se.length>0&&he(se,G,ae),we.length>0&&he(we,G,ae),Be.length>0&&he(Be,G,ae),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Q(T,G,ae,ye){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ye.id]===void 0&&(g.state.transmissionRenderTarget[ye.id]=new an(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Mr:Sn,minFilter:Mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let se=g.state.transmissionRenderTarget[ye.id],we=ye.viewport||K;se.setSize(we.z,we.w);let Be=b.getRenderTarget();b.setRenderTarget(se),b.getClearColor($),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),E&&S.render(ae);let We=b.toneMapping;b.toneMapping=0;let Je=ye.viewport;if(ye.viewport!==void 0&&(ye.viewport=void 0),g.setupLightsView(ye),Re===!0&&Tt.setGlobalState(b.clippingPlanes,ye),he(T,ae,ye),xe.updateMultisampleRenderTarget(se),xe.updateRenderTargetMipmap(se),j.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let ct=0,$e=G.length;ct<$e;ct++){let ft=G[ct],Nt=ft.object,At=ft.geometry,Ht=ft.material,Ct=ft.group;if(Ht.side===2&&Nt.layers.test(ye.layers)){let gt=Ht.side;Ht.side=1,Ht.needsUpdate=!0,fe(Nt,ae,ye,At,Ht,Ct),Ht.side=gt,Ht.needsUpdate=!0,at=!0}}at===!0&&(xe.updateMultisampleRenderTarget(se),xe.updateRenderTargetMipmap(se))}b.setRenderTarget(Be),b.setClearColor($,oe),Je!==void 0&&(ye.viewport=Je),b.toneMapping=We}function he(T,G,ae){let ye=G.isScene===!0?G.overrideMaterial:null;for(let se=0,we=T.length;se<we;se++){let Be=T[se],We=Be.object,Je=Be.geometry,at=ye===null?Be.material:ye,ct=Be.group;We.layers.test(ae.layers)&&fe(We,G,ae,Je,at,ct)}}function fe(T,G,ae,ye,se,we){T.onBeforeRender(b,G,ae,ye,se,we),T.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),se.onBeforeRender(b,G,ae,ye,T,we),se.transparent===!0&&se.side===2&&se.forceSinglePass===!1?(se.side=1,se.needsUpdate=!0,b.renderBufferDirect(ae,G,ye,se,T,we),se.side=0,se.needsUpdate=!0,b.renderBufferDirect(ae,G,ye,se,T,we),se.side=2):b.renderBufferDirect(ae,G,ye,se,T,we),T.onAfterRender(b,G,ae,ye,se,we)}function _e(T,G,ae){G.isScene!==!0&&(G=B);let ye=de.get(T),se=g.state.lights,we=g.state.shadowsArray,Be=se.state.version,We=tt.getParameters(T,se.state,we,G,ae),Je=tt.getProgramCacheKey(We),at=ye.programs;ye.environment=T.isMeshStandardMaterial?G.environment:null,ye.fog=G.fog,ye.envMap=(T.isMeshStandardMaterial?Ie:Ee).get(T.envMap||ye.environment),ye.envMapRotation=ye.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,at===void 0&&(T.addEventListener("dispose",yt),at=new Map,ye.programs=at);let ct=at.get(Je);if(ct!==void 0){if(ye.currentProgram===ct&&ye.lightsStateVersion===Be)return rt(T,We),ct}else We.uniforms=tt.getUniforms(T),T.onBeforeCompile(We,b),ct=tt.acquireProgram(We,Je),at.set(Je,ct),ye.uniforms=We.uniforms;let $e=ye.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||($e.clippingPlanes=Tt.uniform),rt(T,We),ye.needsLights=function(ft){return ft.isMeshLambertMaterial||ft.isMeshToonMaterial||ft.isMeshPhongMaterial||ft.isMeshStandardMaterial||ft.isShadowMaterial||ft.isShaderMaterial&&ft.lights===!0}(T),ye.lightsStateVersion=Be,ye.needsLights&&($e.ambientLightColor.value=se.state.ambient,$e.lightProbe.value=se.state.probe,$e.directionalLights.value=se.state.directional,$e.directionalLightShadows.value=se.state.directionalShadow,$e.spotLights.value=se.state.spot,$e.spotLightShadows.value=se.state.spotShadow,$e.rectAreaLights.value=se.state.rectArea,$e.ltc_1.value=se.state.rectAreaLTC1,$e.ltc_2.value=se.state.rectAreaLTC2,$e.pointLights.value=se.state.point,$e.pointLightShadows.value=se.state.pointShadow,$e.hemisphereLights.value=se.state.hemi,$e.directionalShadowMap.value=se.state.directionalShadowMap,$e.directionalShadowMatrix.value=se.state.directionalShadowMatrix,$e.spotShadowMap.value=se.state.spotShadowMap,$e.spotLightMatrix.value=se.state.spotLightMatrix,$e.spotLightMap.value=se.state.spotLightMap,$e.pointShadowMap.value=se.state.pointShadowMap,$e.pointShadowMatrix.value=se.state.pointShadowMatrix),ye.currentProgram=ct,ye.uniformsList=null,ct}function je(T){if(T.uniformsList===null){let G=T.currentProgram.getUniforms();T.uniformsList=ys.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function rt(T,G){let ae=de.get(T);ae.outputColorSpace=G.outputColorSpace,ae.batching=G.batching,ae.batchingColor=G.batchingColor,ae.instancing=G.instancing,ae.instancingColor=G.instancingColor,ae.instancingMorph=G.instancingMorph,ae.skinning=G.skinning,ae.morphTargets=G.morphTargets,ae.morphNormals=G.morphNormals,ae.morphColors=G.morphColors,ae.morphTargetsCount=G.morphTargetsCount,ae.numClippingPlanes=G.numClippingPlanes,ae.numIntersection=G.numClipIntersection,ae.vertexAlphas=G.vertexAlphas,ae.vertexTangents=G.vertexTangents,ae.toneMapping=G.toneMapping}X.setAnimationLoop(function(T){Qt&&Qt(T)}),typeof self<"u"&&X.setContext(self),this.setAnimationLoop=function(T){Qt=T,ze.setAnimationLoop(T),T===null?X.stop():X.start()},ze.addEventListener("sessionstart",y),ze.addEventListener("sessionend",w),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(G),G=ze.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,G,z),g=xt.get(T,M.length),g.init(G),M.push(g),V.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),De.setFromProjectionMatrix(V),C=this.localClippingEnabled,Re=Tt.init(this.clippingPlanes,C),m=ut.get(T,_.length),m.init(),_.push(m),ze.enabled===!0&&ze.isPresenting===!0){let we=b.xr.getDepthSensingMesh();we!==null&&Y(we,G,-1/0,b.sortObjects)}Y(T,G,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(Pe,Ne),E=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,E&&S.addToRenderList(m,T),this.info.render.frame++,Re===!0&&Tt.beginShadows();let ae=g.state.shadowsArray;He.render(ae,T,G),Re===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ye=m.opaque,se=m.transmissive;if(g.setupLights(),G.isArrayCamera){let we=G.cameras;if(se.length>0)for(let Be=0,We=we.length;Be<We;Be++)Q(ye,se,T,we[Be]);E&&S.render(T);for(let Be=0,We=we.length;Be<We;Be++){let Je=we[Be];W(m,T,Je,Je.viewport)}}else se.length>0&&Q(ye,se,T,G),E&&S.render(T),W(m,T,G);z!==null&&(xe.updateMultisampleRenderTarget(z),xe.updateRenderTargetMipmap(z)),T.isScene===!0&&T.onAfterRender(b,T,G),ve.resetDefaultState(),k=-1,Z=null,M.pop(),M.length>0?(g=M[M.length-1],Re===!0&&Tt.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,_.pop(),m=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,G,ae){de.get(T.texture).__webglTexture=G,de.get(T.depthTexture).__webglTexture=ae;let ye=de.get(T);ye.__hasExternalTextures=!0,ye.__autoAllocateDepthBuffer=ae===void 0,ye.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ye.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,G){let ae=de.get(T);ae.__webglFramebuffer=G,ae.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,ae=0){z=T,A=G,D=ae;let ye=!0,se=null,we=!1,Be=!1;if(T){let We=de.get(T);if(We.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(I.FRAMEBUFFER,null),ye=!1;else if(We.__webglFramebuffer===void 0)xe.setupRenderTarget(T);else if(We.__hasExternalTextures)xe.rebindTextures(T,de.get(T.texture).__webglTexture,de.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ct=T.depthTexture;if(We.__boundDepthTexture!==ct){if(ct!==null&&de.has(ct)&&(T.width!==ct.image.width||T.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(T)}}let Je=T.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Be=!0);let at=de.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(se=Array.isArray(at[G])?at[G][ae]:at[G],we=!0):se=T.samples>0&&xe.useMultisampledRTT(T)===!1?de.get(T).__webglMultisampledFramebuffer:Array.isArray(at)?at[ae]:at,K.copy(T.viewport),J.copy(T.scissor),ee=T.scissorTest}else K.copy(ge).multiplyScalar(ue).floor(),J.copy(Me).multiplyScalar(ue).floor(),ee=Ae;if(q.bindFramebuffer(I.FRAMEBUFFER,se)&&ye&&q.drawBuffers(T,se),q.viewport(K),q.scissor(J),q.setScissorTest(ee),we){let We=de.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,We.__webglTexture,ae)}else if(Be){let We=de.get(T.texture),Je=G||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,ae||0,Je)}k=-1},this.readRenderTargetPixels=function(T,G,ae,ye,se,we,Be){if(!T||!T.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){q.bindFramebuffer(I.FRAMEBUFFER,We);try{let Je=T.texture,at=Je.format,ct=Je.type;if(!me.textureFormatReadable(at))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(ct))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");G>=0&&G<=T.width-ye&&ae>=0&&ae<=T.height-se&&I.readPixels(G,ae,ye,se,te.convert(at),te.convert(ct),we)}finally{let Je=z!==null?de.get(z).__webglFramebuffer:null;q.bindFramebuffer(I.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(T,G,ae,ye,se,we,Be){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=de.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){let Je=T.texture,at=Je.format,ct=Je.type;if(!me.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=T.width-ye&&ae>=0&&ae<=T.height-se){q.bindFramebuffer(I.FRAMEBUFFER,We);let $e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.bufferData(I.PIXEL_PACK_BUFFER,we.byteLength,I.STREAM_READ),I.readPixels(G,ae,ye,se,te.convert(at),te.convert(ct),0);let ft=z!==null?de.get(z).__webglFramebuffer:null;q.bindFramebuffer(I.FRAMEBUFFER,ft);let Nt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await function(At,Ht,Ct){return new Promise(function(gt,ei){setTimeout(function qt(){switch(At.clientWaitSync(Ht,At.SYNC_FLUSH_COMMANDS_BIT,0)){case At.WAIT_FAILED:ei();break;case At.TIMEOUT_EXPIRED:setTimeout(qt,Ct);break;default:gt()}},Ct)})}(I,Nt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,we),I.deleteBuffer($e),I.deleteSync(Nt),we}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,G=null,ae=0){T.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1]);let ye=Math.pow(2,-ae),se=Math.floor(T.image.width*ye),we=Math.floor(T.image.height*ye),Be=G!==null?G.x:0,We=G!==null?G.y:0;xe.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,ae,0,0,Be,We,se,we),q.unbindTexture()},this.copyTextureToTexture=function(T,G,ae=null,ye=null,se=0){let we,Be,We,Je,at,ct,$e,ft,Nt;T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),ye=arguments[0]||null,T=arguments[1],G=arguments[2],se=arguments[3]||0,ae=null);let At=T.isCompressedTexture?T.mipmaps[se]:T.image;ae!==null?(we=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,We=ae.isBox3?ae.max.z-ae.min.z:1,Je=ae.min.x,at=ae.min.y,ct=ae.isBox3?ae.min.z:0):(we=At.width,Be=At.height,We=At.depth||1,Je=0,at=0,ct=0),ye!==null?($e=ye.x,ft=ye.y,Nt=ye.z):($e=0,ft=0,Nt=0);let Ht=te.convert(G.format),Ct=te.convert(G.type),gt;G.isData3DTexture?(xe.setTexture3D(G,0),gt=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(xe.setTexture2DArray(G,0),gt=I.TEXTURE_2D_ARRAY):(xe.setTexture2D(G,0),gt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let ei=I.getParameter(I.UNPACK_ROW_LENGTH),qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),dt=I.getParameter(I.UNPACK_SKIP_PIXELS),it=I.getParameter(I.UNPACK_SKIP_ROWS),Ti=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),I.pixelStorei(I.UNPACK_SKIP_ROWS,at),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ct);let Ro=T.isDataArrayTexture||T.isData3DTexture,js=G.isDataArrayTexture||G.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let is=de.get(T),Co=de.get(G),Po=de.get(is.__renderTarget),Io=de.get(Co.__renderTarget);q.bindFramebuffer(I.READ_FRAMEBUFFER,Po.__webglFramebuffer),q.bindFramebuffer(I.DRAW_FRAMEBUFFER,Io.__webglFramebuffer);for(let dn=0;dn<We;dn++)Ro&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(T).__webglTexture,se,ct+dn),T.isDepthTexture?(js&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(G).__webglTexture,se,Nt+dn),I.blitFramebuffer(Je,at,we,Be,$e,ft,we,Be,I.DEPTH_BUFFER_BIT,I.NEAREST)):js?I.copyTexSubImage3D(gt,se,$e,ft,Nt+dn,Je,at,we,Be):I.copyTexSubImage2D(gt,se,$e,ft,Nt+dn,Je,at,we,Be);q.bindFramebuffer(I.READ_FRAMEBUFFER,null),q.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else js?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(gt,se,$e,ft,Nt,we,Be,We,Ht,Ct,At.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,se,$e,ft,Nt,we,Be,We,Ht,At.data):I.texSubImage3D(gt,se,$e,ft,Nt,we,Be,We,Ht,Ct,At):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,$e,ft,we,Be,Ht,Ct,At.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,$e,ft,At.width,At.height,Ht,At.data):I.texSubImage2D(I.TEXTURE_2D,se,$e,ft,we,Be,Ht,Ct,At);I.pixelStorei(I.UNPACK_ROW_LENGTH,ei),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,it),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ti),se===0&&G.generateMipmaps&&I.generateMipmap(gt),q.unbindTexture()},this.copyTextureToTexture3D=function(T,G,ae=null,ye=null,se=0){return T.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ye=arguments[1]||null,T=arguments[2],G=arguments[3],se=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,ae,ye,se)},this.initRenderTarget=function(T){de.get(T).__webglFramebuffer===void 0&&xe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){A=0,D=0,z=null,q.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ws}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var Pa=class extends Di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Y0=new L;var Z0=new L,K0=new L,J0=new L,$0=new Te,Q0=new Te,eg=new Ke,tg=new L,ig=new L,ng=new L,sg=new Te,rg=new Te,ag=new Te;var og=new L,lg=new L;var cg=new L,hg=new Lt,ug=new Lt,dg=new L,pg=new Ke,fg=new L,mg=new hi,gg=new Ke,vg=new Ts;var fr=class extends si{constructor(e=null,t=1,i=1,n,r,a,o,l,c=1003,h=1003,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xg=new Ke,yg=new Ke;var ln=class extends Ft{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new Ke,Su=new Ke,sa=[],wu=new Ui,Mm=new Ke,ir=new st,nr=new hi,Ia=class extends st{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ln(new Float32Array(16*i),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Mm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),wu.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(wu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ms),nr.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=e*(i.length+1)+1;for(let a=0;a<i.length;a++)i[a]=n[r+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(i),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ms),Su.multiplyMatrices(i,ms),ir.matrixWorld=Su,ir.raycast(e,sa);for(let a=0,o=sa.length;a<o;a++){let l=sa[a];l.instanceId=r,l.object=this,t.push(l)}sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ln(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(n*this.count),n,this.count,Gc,Gi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var uc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}},_g=new Ke,Mg=new Xe(1,1,1),bg=new pr,Sg=new Ui,wg=new hi,Tg=new L,Eg=new L,Ag=new L,Rg=new uc,Cg=new st;var Pg=new L,Ig=new L,Lg=new Ke,Dg=new Ts,zg=new hi,Ug=new L,Ng=new L;var Og=new L,kg=new L;var Bg=new Ke,Fg=new Ts,Hg=new hi,Vg=new L;var Rs=class extends si{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,c=r-1;for(;l<=c;)if(n=Math.floor(l+(c-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){c=n;break}c=n-1}if(n=c,i[n]===a)return n/(r-1);let h=i[n];return(n+(a-h)/(i[n+1]-h))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new Te:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new L,n=[],r=[],a=[],o=new L,l=new Ke;for(let p=0;p<=e;p++){let f=p/e;n[p]=this.getTangentAt(f,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(jt(n[p-1].dot(n[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(n[p],r[p])}if(t===!0){let p=Math.acos(jt(r[0].dot(r[e]),-1,1));p/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(n[f],p*f)),a[f].crossVectors(n[f],r[f])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends xi{constructor(e=0,t=0,i=1,n=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Te){let i=t,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dc=class extends mr{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,p*=h,n(a,o,u,p)},calc:function(r){let a=r*r;return s+e*r+t*a+i*(a*r)}}}var ra=new L,cl=new Yc,hl=new Yc,ul=new Yc,pc=class extends xi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new L){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=n[(c-1)%r]:(ra.subVectors(n[0],n[1]).add(n[0]),o=ra);let d=n[c%r],u=n[(c+1)%r];if(this.closed||c+2<r?l=n[(c+2)%r]:(ra.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=ra),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),cl.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,f,v,m),hl.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,f,v,m),ul.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),hl.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),ul.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return i.set(cl.calc(h),hl.calc(h),ul.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tu(s,e,t,i,n){let r=.5*(i-e),a=.5*(n-t),o=s*s;return(2*t-2*i+r+a)*(s*o)+(-3*t+3*i-2*r-a)*o+r*s+t}function ar(s,e,t,i){return function(n,r){let a=1-n;return a*a*r}(s,e)+function(n,r){return 2*(1-n)*n*r}(s,t)+function(n,r){return n*n*r}(s,i)}function or(s,e,t,i,n){return function(r,a){let o=1-r;return o*o*o*a}(s,e)+function(r,a){let o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,i)+function(r,a){return r*r*r*a}(s,n)}var La=class extends xi{constructor(e=new Te,t=new Te,i=new Te,n=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Te){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(or(e,n.x,r.x,a.x,o.x),or(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fc=class extends xi{constructor(e=new L,t=new L,i=new L,n=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new L){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(or(e,n.x,r.x,a.x,o.x),or(e,n.y,r.y,a.y,o.y),or(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends xi{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},mc=class extends xi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends xi{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(ar(e,n.x,r.x,a.x),ar(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ua=class extends xi{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(ar(e,n.x,r.x,a.x),ar(e,n.y,r.y,a.y),ar(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Na=class extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Tu(o,l.x,c.x,h.x,d.x),Tu(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Te().fromArray(n))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:pc,CubicBezierCurve:La,CubicBezierCurve3:fc,EllipseCurve:mr,LineCurve:Da,LineCurve3:mc,QuadraticBezierCurve:za,QuadraticBezierCurve3:Ua,SplineCurve:Na}),gc=class extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oa[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Oa[n.type]().fromJSON(n))}return this}},gr=class extends gc{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Da(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new za(this.currentPoint.clone(),new Te(e,t),new Te(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new La(this.currentPoint.clone(),new Te(e,t),new Te(i,n),new Te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Na(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let c=new mr(e,t,i,n,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ka=class s extends Mt{constructor(e=[new Te(0,-.5),new Te(.5,0),new Te(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=jt(n,0,2*Math.PI);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new L,u=new Te,p=new L,f=new L,v=new L,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let _=0;_<=t;_++){let M=i+_*h*n,b=Math.sin(M),P=Math.cos(M);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*b,d.y=e[A].y,d.z=e[A].x*P,a.push(d.x,d.y,d.z),u.x=_/t,u.y=A/(e.length-1),o.push(u.x,u.y);let D=l[3*A+0]*b,z=l[3*A+1],k=l[3*A+0]*P;c.push(D,z,k)}}for(let _=0;_<t;_++)for(let M=0;M<e.length-1;M++){let b=M+_*e.length,P=b,A=b+e.length,D=b+e.length+1,z=b+1;r.push(P,A,z),r.push(D,z,A)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},vc=class s extends ka{constructor(e=1,t=1,i=4,n=8){let r=new gr;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},qn=class s extends Mt{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,h=new Te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let p=i+d/t*n;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Cs=class s extends Mt{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],p=[],f=0,v=[],m=i/2,g=0;function _(M){let b=f,P=new Te,A=new L,D=0,z=M===!0?e:t,k=M===!0?1:-1;for(let K=1;K<=n;K++)d.push(0,m*k,0),u.push(0,k,0),p.push(.5,.5),f++;let Z=f;for(let K=0;K<=n;K++){let J=K/n*l+o,ee=Math.cos(J),$=Math.sin(J);A.x=z*$,A.y=m*k,A.z=z*ee,d.push(A.x,A.y,A.z),u.push(0,k,0),P.x=.5*ee+.5,P.y=.5*$*k+.5,p.push(P.x,P.y),f++}for(let K=0;K<n;K++){let J=b+K,ee=Z+K;M===!0?h.push(ee,ee+1,J):h.push(ee+1,ee,J),D+=3}c.addGroup(g,D,M===!0?1:2),g+=D}(function(){let M=new L,b=new L,P=0,A=(t-e)/i;for(let D=0;D<=r;D++){let z=[],k=D/r,Z=k*(t-e)+e;for(let K=0;K<=n;K++){let J=K/n,ee=J*l+o,$=Math.sin(ee),oe=Math.cos(ee);b.x=Z*$,b.y=-k*i+m,b.z=Z*oe,d.push(b.x,b.y,b.z),M.set($,A,oe).normalize(),u.push(M.x,M.y,M.z),p.push(J,1-k),z.push(f++)}v.push(z)}for(let D=0;D<n;D++)for(let z=0;z<r;z++){let k=v[z][D],Z=v[z+1][D],K=v[z+1][D+1],J=v[z][D+1];(e>0||z!==0)&&(h.push(k,Z,J),P+=3),(t>0||z!==r-1)&&(h.push(Z,K,J),P+=3)}c.addGroup(g,P,0),g+=P})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xc=class s extends Cs{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},jn=class s extends Mt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];function o(u,p,f,v){let m=v+1,g=[];for(let _=0;_<=m;_++){g[_]=[];let M=u.clone().lerp(f,_/m),b=p.clone().lerp(f,_/m),P=m-_;for(let A=0;A<=P;A++)g[_][A]=A===0&&_===m?M:M.clone().lerp(b,A/P)}for(let _=0;_<m;_++)for(let M=0;M<2*(m-_)-1;M++){let b=Math.floor(M/2);M%2==0?(l(g[_][b+1]),l(g[_+1][b]),l(g[_][b])):(l(g[_][b+1]),l(g[_+1][b+1]),l(g[_+1][b]))}}function l(u){r.push(u.x,u.y,u.z)}function c(u,p){let f=3*u;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(u,p,f,v){v<0&&u.x===1&&(a[p]=u.x-1),f.x===0&&f.z===0&&(a[p]=v/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let p=new L,f=new L,v=new L;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],v),o(p,f,v,u)})(n),function(u){let p=new L;for(let f=0;f<r.length;f+=3)p.x=r[f+0],p.y=r[f+1],p.z=r[f+2],p.normalize().multiplyScalar(u),r[f+0]=p.x,r[f+1]=p.y,r[f+2]=p.z}(i),function(){let u=new L;for(let f=0;f<r.length;f+=3){u.x=r[f+0],u.y=r[f+1],u.z=r[f+2];let v=d(u)/2/Math.PI+.5,m=(p=u,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(v,1-m)}var p;(function(){let f=new L,v=new L,m=new L,g=new L,_=new Te,M=new Te,b=new Te;for(let P=0,A=0;P<r.length;P+=9,A+=6){f.set(r[P+0],r[P+1],r[P+2]),v.set(r[P+3],r[P+4],r[P+5]),m.set(r[P+6],r[P+7],r[P+8]),_.set(a[A+0],a[A+1]),M.set(a[A+2],a[A+3]),b.set(a[A+4],a[A+5]),g.copy(f).add(v).add(m).divideScalar(3);let D=d(g);h(_,A+0,f,D),h(M,A+2,v,D),h(b,A+4,m,D)}})(),function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],g=a[f+4],_=Math.max(v,m,g),M=Math.min(v,m,g);_>.9&&M<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}}()}(),this.setAttribute("position",new ke(r,3)),this.setAttribute("normal",new ke(r.slice(),3)),this.setAttribute("uv",new ke(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},yc=class s extends jn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},aa=new L,oa=new L,dl=new L,la=new _n,_c=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(va*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:g}=la;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),la.getNormal(dl),d[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,d[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,d[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let _=0;_<3;_++){let M=(_+1)%3,b=d[_],P=d[M],A=la[h[_]],D=la[h[M]],z=`${b}_${P}`,k=`${P}_${b}`;k in u&&u[k]?(dl.dot(u[k].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(D.x,D.y,D.z)),u[k]=null):z in u||(u[z]={index0:c[_],index1:c[M],normal:dl.clone()})}}for(let f in u)if(u[f]){let{index0:v,index1:m}=u[f];aa.fromBufferAttribute(o,v),oa.fromBufferAttribute(o,m),p.push(aa.x,aa.y,aa.z),p.push(oa.x,oa.y,oa.z)}this.setAttribute("position",new ke(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ps=class extends gr{constructor(e){super(e),this.uuid=Ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new gr().fromJSON(n))}return this}},bm=function(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=Eu(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,p;if(i&&(r=function(f,v,m,g){let _=[],M,b,P,A,D;for(M=0,b=v.length;M<b;M++)P=v[M]*g,A=M<b-1?v[M+1]*g:f.length,D=Eu(f,P,A,g,!1),D===D.next&&(D.steiner=!0),_.push(Pm(D));for(_.sort(Am),M=0;M<_.length;M++)m=Rm(_[M],m);return m}(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let f=t;f<n;f+=t)d=s[f],u=s[f+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return vr(r,a,t,o,l,p,0),a};function Eu(s,e,t,i,n){let r,a;if(n===function(o,l,c,h){let d=0;for(let u=l,p=c-h;u<c;u+=h)d+=(o[p]-o[u])*(o[u+1]+o[p+1]),p=u;return d}(s,e,t,i)>0)for(r=e;r<t;r+=i)a=Au(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=Au(r,s[r],s[r+1],a);return a&&Wa(a,a.next)&&(yr(a),a=a.next),a}function Yn(s,e){if(!s)return s;e||(e=s);let t,i=s;do if(t=!1,i.steiner||!Wa(i,i.next)&&Dt(i.prev,i,i.next)!==0)i=i.next;else{if(yr(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function vr(s,e,t,i,n,r,a){if(!s)return;!a&&r&&function(h,d,u,p){let f=h;do f.z===0&&(f.z=Mc(f.x,f.y,d,u,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,function(v){let m,g,_,M,b,P,A,D,z=1;do{for(g=v,v=null,b=null,P=0;g;){for(P++,_=g,A=0,m=0;m<z&&(A++,_=_.nextZ,_);m++);for(D=z;A>0||D>0&&_;)A!==0&&(D===0||!_||g.z<=_.z)?(M=g,g=g.nextZ,A--):(M=_,_=_.nextZ,D--),b?b.nextZ=M:v=M,M.prevZ=b,b=M;g=_}b.nextZ=null,z*=2}while(P>1)}(f)}(s,i,n,r);let o,l,c=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?wm(s,i,n,r):Sm(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),yr(s),s=l.next,c=l.next;else if((s=l)===c){a?a===1?vr(s=Tm(Yn(s),e,t),e,t,i,n,r,2):a===2&&Em(s,e,t,i,n,r):vr(Yn(s),e,t,i,n,r,1);break}}function Sm(s){let e=s.prev,t=s,i=s.next;if(Dt(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=n>r?n>a?n:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,f=i.next;for(;f!==e;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&vs(n,o,r,l,a,c,f.x,f.y)&&Dt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function wm(s,e,t,i){let n=s.prev,r=s,a=s.next;if(Dt(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,d=r.y,u=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,v=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,g=Mc(p,f,e,t,i),_=Mc(v,m,e,t,i),M=s.prevZ,b=s.nextZ;for(;M&&M.z>=g&&b&&b.z<=_;){if(M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==n&&M!==a&&vs(o,h,l,d,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=p&&b.x<=v&&b.y>=f&&b.y<=m&&b!==n&&b!==a&&vs(o,h,l,d,c,u,b.x,b.y)&&Dt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==n&&M!==a&&vs(o,h,l,d,c,u,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=_;){if(b.x>=p&&b.x<=v&&b.y>=f&&b.y<=m&&b!==n&&b!==a&&vs(o,h,l,d,c,u,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Tm(s,e,t){let i=s;do{let n=i.prev,r=i.next.next;!Wa(n,r)&&$u(n,i,i.next,r)&&xr(n,r)&&xr(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),yr(i),yr(i.next),i=s=r),i=i.next}while(i!==s);return Yn(i)}function Em(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Im(a,o)){let l=Qu(a,o);return a=Yn(a,a.next),l=Yn(l,l.next),vr(a,e,t,i,n,r,0),void vr(l,e,t,i,n,r,0)}o=o.next}a=a.next}while(a!==s)}function Am(s,e){return s.x-e.x}function Rm(s,e){let t=function(n,r){let a,o=r,l=-1/0,c=n.x,h=n.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==r);if(!a)return null;let d=a,u=a.x,p=a.y,f,v=1/0;o=a;do c>=o.x&&o.x>=u&&c!==o.x&&vs(h<p?c:l,h,u,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),xr(o,n)&&(f<v||f===v&&(o.x>a.x||o.x===a.x&&Cm(a,o)))&&(a=o,v=f)),o=o.next;while(o!==d);return a}(s,e);if(!t)return e;let i=Qu(t,s);return Yn(i,i.next),Yn(t,t.next)}function Cm(s,e){return Dt(s.prev,s,e.prev)<0&&Dt(e.next,s,s.next)<0}function Mc(s,e,t,i,n){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*n|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Pm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function vs(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function Im(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&$u(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(s,e)&&(xr(s,e)&&xr(e,s)&&function(t,i){let n=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}(s,e)&&(Dt(s.prev,s,e.prev)||Dt(s,e.prev,e))||Wa(s,e)&&Dt(s.prev,s,s.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Wa(s,e){return s.x===e.x&&s.y===e.y}function $u(s,e,t,i){let n=ha(Dt(s,e,t)),r=ha(Dt(s,e,i)),a=ha(Dt(t,i,s)),o=ha(Dt(t,i,e));return n!==r&&a!==o||!(n!==0||!ca(s,t,e))||!(r!==0||!ca(s,i,e))||!(a!==0||!ca(t,s,i))||!(o!==0||!ca(t,e,i))}function ca(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ha(s){return s>0?1:s<0?-1:0}function xr(s,e){return Dt(s.prev,s,s.next)<0?Dt(s,e,s.next)>=0&&Dt(s,s.prev,e)>=0:Dt(s,e,s.prev)<0||Dt(s,s.next,e)<0}function Qu(s,e){let t=new bc(s.i,s.x,s.y),i=new bc(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Au(s,e,t,i){let n=new bc(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function yr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function bc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var bn=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Ru(e),Cu(i,e);let a=e.length;t.forEach(Ru);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Cu(i,t[l]);let o=bm(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ru(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Cu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Sc=class s extends Mt{constructor(e=new Ps([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Lm,M,b,P,A,D,z=!1;g&&(M=g.getSpacedPoints(h),z=!0,u=!1,b=g.computeFrenetFrames(h,!1),P=new L,A=new L,D=new L),u||(m=0,p=0,f=0,v=0);let k=o.extractPoints(c),Z=k.shape,K=k.holes;if(!bn.isClockWise(Z)){Z=Z.reverse();for(let H=0,U=K.length;H<U;H++){let B=K[H];bn.isClockWise(B)&&(K[H]=B.reverse())}}let J=bn.triangulateShape(Z,K),ee=Z;for(let H=0,U=K.length;H<U;H++){let B=K[H];Z=Z.concat(B)}function $(H,U,B){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(U,B)}let oe=Z.length,le=J.length;function ce(H,U,B){let E,N,j,me=H.x-U.x,q=H.y-U.y,pe=B.x-H.x,de=B.y-H.y,xe=me*me+q*q,Ee=me*de-q*pe;if(Math.abs(Ee)>Number.EPSILON){let Ie=Math.sqrt(xe),Fe=Math.sqrt(pe*pe+de*de),qe=U.x-q/Ie,lt=U.y+me/Ie,tt=((B.x-de/Fe-qe)*de-(B.y+pe/Fe-lt)*pe)/(me*de-q*pe);E=qe+me*tt-H.x,N=lt+q*tt-H.y;let Ge=E*E+N*N;if(Ge<=2)return new Te(E,N);j=Math.sqrt(Ge/2)}else{let Ie=!1;me>Number.EPSILON?pe>Number.EPSILON&&(Ie=!0):me<-Number.EPSILON?pe<-Number.EPSILON&&(Ie=!0):Math.sign(q)===Math.sign(de)&&(Ie=!0),Ie?(E=-q,N=me,j=Math.sqrt(xe)):(E=me,N=q,j=Math.sqrt(xe/2))}return new Te(E/j,N/j)}let ue=[];for(let H=0,U=ee.length,B=U-1,E=H+1;H<U;H++,B++,E++)B===U&&(B=0),E===U&&(E=0),ue[H]=ce(ee[H],ee[B],ee[E]);let Pe=[],Ne,ge=ue.concat();for(let H=0,U=K.length;H<U;H++){let B=K[H];Ne=[];for(let E=0,N=B.length,j=N-1,me=E+1;E<N;E++,j++,me++)j===N&&(j=0),me===N&&(me=0),Ne[E]=ce(B[E],B[j],B[me]);Pe.push(Ne),ge=ge.concat(Ne)}for(let H=0;H<m;H++){let U=H/m,B=p*Math.cos(U*Math.PI/2),E=f*Math.sin(U*Math.PI/2)+v;for(let N=0,j=ee.length;N<j;N++){let me=$(ee[N],ue[N],E);De(me.x,me.y,-B)}for(let N=0,j=K.length;N<j;N++){let me=K[N];Ne=Pe[N];for(let q=0,pe=me.length;q<pe;q++){let de=$(me[q],Ne[q],E);De(de.x,de.y,-B)}}}let Me=f+v;for(let H=0;H<oe;H++){let U=u?$(Z[H],ge[H],Me):Z[H];z?(A.copy(b.normals[0]).multiplyScalar(U.x),P.copy(b.binormals[0]).multiplyScalar(U.y),D.copy(M[0]).add(A).add(P),De(D.x,D.y,D.z)):De(U.x,U.y,0)}for(let H=1;H<=h;H++)for(let U=0;U<oe;U++){let B=u?$(Z[U],ge[U],Me):Z[U];z?(A.copy(b.normals[H]).multiplyScalar(B.x),P.copy(b.binormals[H]).multiplyScalar(B.y),D.copy(M[H]).add(A).add(P),De(D.x,D.y,D.z)):De(B.x,B.y,d/h*H)}for(let H=m-1;H>=0;H--){let U=H/m,B=p*Math.cos(U*Math.PI/2),E=f*Math.sin(U*Math.PI/2)+v;for(let N=0,j=ee.length;N<j;N++){let me=$(ee[N],ue[N],E);De(me.x,me.y,d+B)}for(let N=0,j=K.length;N<j;N++){let me=K[N];Ne=Pe[N];for(let q=0,pe=me.length;q<pe;q++){let de=$(me[q],Ne[q],E);z?De(de.x,de.y+M[h-1].y,M[h-1].x+B):De(de.x,de.y,d+B)}}}function Ae(H,U){let B=H.length;for(;--B>=0;){let E=B,N=B-1;N<0&&(N=H.length-1);for(let j=0,me=h+2*m;j<me;j++){let q=oe*j,pe=oe*(j+1);C(U+E+q,U+N+q,U+N+pe,U+E+pe)}}}function De(H,U,B){l.push(H),l.push(U),l.push(B)}function Re(H,U,B){R(H),R(U),R(B);let E=n.length/3,N=_.generateTopUV(i,n,E-3,E-2,E-1);V(N[0]),V(N[1]),V(N[2])}function C(H,U,B,E){R(H),R(U),R(E),R(U),R(B),R(E);let N=n.length/3,j=_.generateSideWallUV(i,n,N-6,N-3,N-2,N-1);V(j[0]),V(j[1]),V(j[3]),V(j[1]),V(j[2]),V(j[3])}function R(H){n.push(l[3*H+0]),n.push(l[3*H+1]),n.push(l[3*H+2])}function V(H){r.push(H.x),r.push(H.y)}(function(){let H=n.length/3;if(u){let U=0,B=oe*U;for(let E=0;E<le;E++){let N=J[E];Re(N[2]+B,N[1]+B,N[0]+B)}U=h+2*m,B=oe*U;for(let E=0;E<le;E++){let N=J[E];Re(N[0]+B,N[1]+B,N[2]+B)}}else{for(let U=0;U<le;U++){let B=J[U];Re(B[2],B[1],B[0])}for(let U=0;U<le;U++){let B=J[U];Re(B[0]+oe*h,B[1]+oe*h,B[2]+oe*h)}}i.addGroup(H,n.length/3-H,0)})(),function(){let H=n.length/3,U=0;Ae(ee,U),U+=ee.length;for(let B=0,E=K.length;B<E;B++){let N=K[B];Ae(N,U),U+=N.length}i.addGroup(H,n.length/3-H,1)}()}this.setAttribute("position",new ke(n,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Oa[n.type]().fromJSON(n)),new s(i,e.options)}},Lm={generateTopUV:function(s,e,t,i,n){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],c=e[3*n],h=e[3*n+1];return[new Te(r,a),new Te(o,l),new Te(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*i],h=e[3*i+1],d=e[3*i+2],u=e[3*n],p=e[3*n+1],f=e[3*n+2],v=e[3*r],m=e[3*r+1],g=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new Te(a,1-l),new Te(c,1-d),new Te(u,1-f),new Te(v,1-g)]:[new Te(o,1-l),new Te(h,1-d),new Te(p,1-f),new Te(m,1-g)]}},Zn=class s extends jn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},wc=class s extends jn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Kn=class s extends Mt{constructor(e=.5,t=1,i=32,n=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/(n=Math.max(1,n)),p=new L,f=new Te;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){let g=r+m/i*a;p.x=d*Math.cos(g),p.y=d*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}d+=u}for(let v=0;v<n;v++){let m=v*(i+1);for(let g=0;g<i;g++){let _=g+m,M=_,b=_+i+1,P=_+i+2,A=_+1;o.push(M,b,A),o.push(b,P,A)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Is=class s extends Mt{constructor(e=new Ps([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let d=n.length/3,u=h.extractPoints(t),p=u.shape,f=u.holes;bn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];bn.isClockWise(_)===!0&&(f[m]=_.reverse())}let v=bn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];n.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,g=v.length;m<g;m++){let _=v[m],M=_[0]+d,b=_[1]+d,P=_[2]+d;i.push(M,b,P),l+=3}}this.setIndex(i),this.setAttribute("position",new ke(n,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let a=t[e.shapes[n]];i.push(a)}return new s(i,e.curveSegments)}},Tc=class s extends Mt{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,p=[],f=[],v=[],m=[];for(let g=0;g<=i;g++){let _=[],M=g/i,b=0;g===0&&a===0?b=.5/t:g===i&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){let A=P/t;d.x=-e*Math.cos(n+A*r)*Math.sin(a+M*o),d.y=e*Math.cos(a+M*o),d.z=e*Math.sin(n+A*r)*Math.sin(a+M*o),f.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+b,1-M),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let M=h[g][_+1],b=h[g][_],P=h[g+1][_],A=h[g+1][_+1];(g!==0||a>0)&&p.push(M,b,A),(g!==i-1||l<Math.PI)&&p.push(b,P,A)}this.setIndex(p),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(v,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ec=class s extends jn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ac=class s extends Mt{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],c=[],h=new L,d=new L,u=new L;for(let p=0;p<=i;p++)for(let f=0;f<=n;f++){let v=f/n*r,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(f/n),c.push(p/i)}for(let p=1;p<=i;p++)for(let f=1;f<=n;f++){let v=(n+1)*p+f-1,m=(n+1)*(p-1)+f-1,g=(n+1)*(p-1)+f,_=(n+1)*p+f;a.push(v,m,_),a.push(m,g,_)}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Rc=class s extends Mt{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],c=[],h=[],d=new L,u=new L,p=new L,f=new L,v=new L,m=new L,g=new L;for(let M=0;M<=i;++M){let b=M/i*r*Math.PI*2;_(b,r,a,e,p),_(b+.01,r,a,e,f),m.subVectors(f,p),g.addVectors(f,p),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let P=0;P<=n;++P){let A=P/n*Math.PI*2,D=-t*Math.cos(A),z=t*Math.sin(A);d.x=p.x+(D*g.x+z*v.x),d.y=p.y+(D*g.y+z*v.y),d.z=p.z+(D*g.z+z*v.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(M/i),h.push(P/n)}}for(let M=1;M<=i;M++)for(let b=1;b<=n;b++){let P=(n+1)*(M-1)+(b-1),A=(n+1)*M+(b-1),D=(n+1)*M+b,z=(n+1)*(M-1)+b;o.push(P,A,z),o.push(A,D,z)}function _(M,b,P,A,D){let z=Math.cos(M),k=Math.sin(M),Z=P/b*M,K=Math.cos(Z);D.x=A*(2+K)*.5*z,D.y=A*(2+K)*k*.5,D.z=A*Math.sin(Z)*.5}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Cc=class s extends Mt{constructor(e=new Ua(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new Te,h=new L,d=[],u=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let g=a.normals[m],_=a.binormals[m];for(let M=0;M<=n;M++){let b=M/n*Math.PI*2,P=Math.sin(b),A=-Math.cos(b);l.x=A*g.x+P*_.x,l.y=A*g.y+P*_.y,l.z=A*g.z+P*_.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(r===!1?t:0),function(){for(let m=0;m<=t;m++)for(let g=0;g<=n;g++)c.x=m/t,c.y=g/n,p.push(c.x,c.y)}(),function(){for(let m=1;m<=t;m++)for(let g=1;g<=n;g++){let _=(n+1)*(m-1)+(g-1),M=(n+1)*m+(g-1),b=(n+1)*m+g,P=(n+1)*(m-1)+g;f.push(_,M,P),f.push(M,b,P)}}()})(),this.setIndex(f),this.setAttribute("position",new ke(d,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Pc=class extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new L,r=new L;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start;for(let p=u,f=u+d.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),g=o.getX(p+(v+1)%3);n.fromBufferAttribute(a,m),r.fromBufferAttribute(a,g),Pu(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;n.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),Pu(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Pu(s,e,t){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Gg=Object.freeze({__proto__:null,BoxGeometry:gi,CapsuleGeometry:vc,CircleGeometry:qn,ConeGeometry:xc,CylinderGeometry:Cs,DodecahedronGeometry:yc,EdgesGeometry:_c,ExtrudeGeometry:Sc,IcosahedronGeometry:Zn,LatheGeometry:ka,OctahedronGeometry:wc,PlaneGeometry:vi,PolyhedronGeometry:jn,RingGeometry:Kn,ShapeGeometry:Is,SphereGeometry:Tc,TetrahedronGeometry:Ec,TorusGeometry:Ac,TorusKnotGeometry:Rc,TubeGeometry:Cc,WireframeGeometry:Pc});function ua(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Dm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ls=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break i}if(e>=r)break e;{let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ic=class extends Ls{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ch:r=e,o=2*t-i;break;case Ph:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ch:a=e,l=2*i-t;break;case Ph:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let c=.5*(i-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,f=(i-t)/(n-t),v=f*f,m=v*f,g=-u*m+2*u*v-u*f,_=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*f+1,M=(-1-p)*m+(1.5+p)*v+.5*f,b=p*m-p*v;for(let P=0;P!==o;++P)r[P]=g*a[h+P]+_*a[c+P]+M*a[l+P]+b*a[d+P];return r}},Lc=class extends Ls{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Dc=class extends Ls{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},zi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ic(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case ql:t=this.InterpolantFactoryMethodLinear;break;case Uo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Dm(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(n)l=!0;else{let h=o*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let f=t[h+p];if(f!==t[d+p]||f!==t[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};zi.prototype.TimeBufferType=Float32Array,zi.prototype.ValueBufferType=Float32Array,zi.prototype.DefaultInterpolation=ql;var Gn=class extends zi{constructor(e,t,i){super(e,t,i)}};Gn.prototype.ValueTypeName="bool",Gn.prototype.ValueBufferType=Array,Gn.prototype.DefaultInterpolation=xa,Gn.prototype.InterpolantFactoryMethodLinear=void 0,Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends zi{};zc.prototype.ValueTypeName="color";var Uc=class extends zi{};Uc.prototype.ValueTypeName="number";var Nc=class extends Ls{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)ri.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ba=class extends zi{InterpolantFactoryMethodLinear(e){return new Nc(this.times,this.values,this.getValueSize(),e)}};Ba.prototype.ValueTypeName="quaternion",Ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends zi{constructor(e,t,i){super(e,t,i)}};Wn.prototype.ValueTypeName="string",Wn.prototype.ValueBufferType=Array,Wn.prototype.DefaultInterpolation=xa,Wn.prototype.InterpolantFactoryMethodLinear=void 0,Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends zi{};Oc.prototype.ValueTypeName="vector";var kc=class{constructor(e,t,i){let n=this,r,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){l++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],f=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},zm=new kc,Bc=class{constructor(e){this.manager=e!==void 0?e:zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wg=new Ke,Xg=new L,qg=new L;var jg=new Ke,Yg=new L,Zg=new L;var Fa=class extends Mt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Kg=new Ke,Jg=new Ke,$g=new Ke;var Qg=new L,ev=new ri,tv=new L,iv=new L;var nv=new L,sv=new ri,rv=new L,av=new L;var Zc="\\[\\]\\.:\\/",Um=new RegExp("["+Zc+"]","g"),pl="[^"+Zc+"]",Nm="[^"+Zc.replace("\\.","")+"]",Om=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",pl)+/(WCOD+)?/.source.replace("WCOD",Nm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl)+"$"),km=["material","materials","bones","map"],It=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Um,"")}static parseTrackName(e){let t=Om.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);km.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=class{constructor(s,e,t){let i=t||It.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,i)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray],It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ov=new Float32Array(1);var lv=new Ke;var cv=new Te;var hv=new L,uv=new L;var dv=new L;var pv=new L,fv=new Ke,mv=new Ke;var gv=new L,vv=new Xe,xv=new Xe;var yv=new L,_v=new L,Mv=new L;var bv=new L,Sv=new dr;var wv=new Ui;var Tv=new L;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);var x={scene:null,camera:null,renderer:null,city:null,q:null,world:null,time:0,realTime:0,state:"title",player:null,vehicles:[],peds:[],projectiles:[],fx:null,audio:null,hud:null,input:null,police:null,missions:null,traffic:null,pickups:null,pedRender:null,cam:null,settings:{steering:"direct",sound:!0,music:!0,quality:"auto",leftHanded:!1,daytime:"cycle"},stats:{kills:0,cops:0,cars:0,missions:0},light:{night:0,tint:null},events:{},nextId:1};function Xa(){return x.nextId++}var F=4;var re={WATER:0,ROAD:1,SIDEWALK:2,BUILDING:3,GRASS:4,PLAZA:5,ALLEY:6,PARKING:7,DOCK:8,BRIDGE:9,SAND:10,WALL:11},ui=new Uint8Array(16);ui[re.WATER]=1;ui[re.BUILDING]=1;ui[re.WALL]=1;var hn=new Uint8Array(16);for(let s of[re.SIDEWALK,re.GRASS,re.PLAZA,re.ALLEY,re.PARKING,re.DOCK,re.SAND])hn[s]=1;var Ni=new Uint8Array(16);Ni[re.ROAD]=2;Ni[re.BRIDGE]=2;Ni[re.ALLEY]=3;Ni[re.PARKING]=3;Ni[re.PLAZA]=3;Ni[re.DOCK]=3;Ni[re.SIDEWALK]=4;Ni[re.GRASS]=6;Ni[re.SAND]=6;var et={DOWNTOWN:0,COMMERCIAL:1,RESIDENTIAL:2,INDUSTRIAL:3,PARK:4,WATERFRONT:5,COAST:6};var _i=.42,Mi=.32;var qa=-1.3;var ed=Math.PI*2,Ye=(s,e,t)=>s<e?e:s>t?t:s,Rn=(s,e,t)=>s+(e-s)*t,Us=(s,e,t)=>{let i=Ye((t-s)/(e-s),0,1);return i*i*(3-2*i)};function br(s){return s=(s+Math.PI)%ed,s<0&&(s+=ed),s-Math.PI}var Jt=(s,e)=>br(s-e);function Ns(s,e,t){return s<e?Math.min(s+t,e):Math.max(s-t,e)}var Qe=(s,e,t,i)=>Math.hypot(s-t,e-i);var Os=(s,e)=>1-Math.exp(-s*e);function Bm(s){let e=s>>>0;return function(){e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var An=class{constructor(e){this.f=Bm(e)}next(){return this.f()}range(e,t){return e+(t-e)*this.f()}int(e,t){return e+Math.floor(this.f()*(t-e+1))}pick(e){return e[Math.floor(this.f()*e.length)]}chance(e){return this.f()<e}shuffle(e){for(let t=e.length-1;t>0;t--){let i=Math.floor(this.f()*(t+1)),n=e[t];e[t]=e[i],e[i]=n}return e}},Ve=Math.random,Se=(s,e)=>s+(e-s)*Math.random();var bt=s=>s[Math.floor(Math.random()*s.length)];function ja(s,e){let t=Math.imul(s|0,374761393)+Math.imul(e|0,668265263);return t=Math.imul(t^t>>>13,1274126177),t^=t>>>16,(t>>>0)/4294967296}function Kc(s){let e=parseInt(s.slice(1),16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function Jc(s){let e=Math.floor(Math.abs(s)).toString().padStart(7,"0");return(s<0?"-":"")+e}function td(s){s=Math.max(0,Math.ceil(s));let e=Math.floor(s/60),t=s%60;return e+":"+String(t).padStart(2,"0")}var Wi=255;var Vm={S:"W",W:"N",N:"E",E:"S"},Gm={S:"E",E:"N",N:"W",W:"S"},Wm={S:"N",N:"S",E:"W",W:"E"};function id(s=1015){let e=new An(s),t=160,i=160,n=t*i,r=new Uint8Array(n).fill(Wi),a=new Uint8Array(n).fill(255),o=new Int16Array(n).fill(-1),l=new Uint8Array(n),c=(y,w)=>w*t+y,h=(y,w)=>y>=0&&w>=0&&y<t&&w<i,d=(y,w)=>h(y,w)?r[c(y,w)]:re.WATER,u=[e.range(0,9),e.range(0,9),e.range(0,9),e.range(0,9)],p=(y,w)=>5+Math.round(2*Math.sin(y*.11+w)+1.4*Math.sin(y*.23+w*2.3)+1*Math.sin(y*.047+w*.7));for(let y=0;y<i;y++)for(let w=0;w<t;w++)(w<p(y,u[0])||w>=t-p(y,u[1])||y<p(w,u[2])||y>=i-p(w,u[3]))&&(r[c(w,y)]=re.WATER);let f=12,v=t-14;function m(y,w,X){let Y=[2];for(let G=1;G<y;G++)Y.push(G===w?4:2);Y.push(2);let W=v-(f+2),Q=0;for(let G=1;G<y;G++)Q+=Y[G];let he=W-Q,fe=[];for(let G=0;G<y;G++)fe.push(X[G]!=null?X[G]:e.int(10,14));let _e=fe.reduce((G,ae)=>G+ae,0),je=0;for(;_e!==he&&je++<2e4;){let G=e.int(0,y-1);X[G]==null&&(_e<he&&fe[G]<17?(fe[G]++,_e++):_e>he&&fe[G]>9&&(fe[G]--,_e--))}let rt=[],T=f;for(let G=0;G<=y;G++)rt.push({p:T,w:Y[G]}),G<y&&(T+=Y[G]+fe[G]);return rt}let g=10,_=5,M=3,b=6,P=m(g,_,{}),A=m(g,M,{[b]:14}),D=P.length,z=A.length,k=A[b].p+A[b].w+4,Z=k+6;for(let y=k;y<Z;y++)for(let w=0;w<t;w++)r[c(w,y)]=re.WATER;let K=Array.from({length:D},()=>new Array(z-1).fill(!0)),J=Array.from({length:D-1},()=>new Array(z).fill(!0)),ee=new Set([0,_,D-1,e.pick([2,3,7,8])]);for(let y=0;y<D;y++)ee.has(y)||(K[y][b]=!1);let $=(y,w)=>(w>0&&K[y][w-1]?1:0)+(w<z-1&&K[y][w]?1:0)+(y>0&&J[y-1][w]?1:0)+(y<D-1&&J[y][w]?1:0);function oe(){let y=new Uint8Array(D*z),w=[0];y[0]=1;let X=1;for(;w.length;){let W=w.pop(),Q=W%D,he=W/D|0,fe=[];he>0&&K[Q][he-1]&&fe.push(W-D),he<z-1&&K[Q][he]&&fe.push(W+D),Q>0&&J[Q-1][he]&&fe.push(W-1),Q<D-1&&J[Q][he]&&fe.push(W+1);for(let _e of fe)y[_e]||(y[_e]=1,X++,w.push(_e))}let Y=0;for(let W=0;W<z;W++)for(let Q=0;Q<D;Q++)$(Q,W)>0&&Y++;return X===Y}let le=[];for(let y=1;y<D-1;y++)if(y!==_)for(let w=0;w<z-1;w++)w!==b&&K[y][w]&&le.push(["v",y,w]);for(let y=0;y<D-1;y++)for(let w=1;w<z-1;w++)w===M||w===b||w===b+1||le.push(["h",y,w]);e.shuffle(le);let ce=Math.round(le.length*.2);for(let[y,w,X]of le){if(ce<=0)break;let Y=[w,X],W=y==="v"?[w,X+1]:[w+1,X];if(!($(Y[0],Y[1])<=2||$(W[0],W[1])<=2)){if(y==="v"?K[w][X]=!1:J[w][X]=!1,!oe()){y==="v"?K[w][X]=!0:J[w][X]=!0;continue}ce--}}function ue(y,w,X,Y){for(let W=w;W<Y;W++)for(let Q=y;Q<X;Q++){if(!h(Q,W))continue;let he=c(Q,W);r[he]=r[he]===re.WATER||r[he]===re.BRIDGE?re.BRIDGE:re.ROAD}}let Pe=[];for(let y=0;y<z;y++)for(let w=0;w<D;w++){let X=P[w],Y=A[y],W={N:y>0&&K[w][y-1],S:y<z-1&&K[w][y],W:w>0&&J[w-1][y],E:w<D-1&&J[w][y]},Q=(W.N?1:0)+(W.S?1:0)+(W.W?1:0)+(W.E?1:0),he={i:w,j:y,x0:X.p,z0:Y.p,x1:X.p+X.w,z1:Y.p+Y.w,arms:W,deg:Q};he.junction=(W.N||W.S)&&(W.E||W.W),Pe.push(he),Q>0&&ue(he.x0,he.z0,he.x1,he.z1)}let Ne=(y,w)=>Pe[w*D+y];for(let y=0;y<D;y++)for(let w=0;w<z-1;w++)K[y][w]&&ue(P[y].p,A[w].p+A[w].w,P[y].p+P[y].w,A[w+1].p);for(let y=0;y<D-1;y++)for(let w=0;w<z;w++)J[y][w]&&ue(P[y].p+P[y].w,A[w].p,P[y+1].p,A[w].p+A[w].w);let ge=y=>y===re.ROAD||y===re.BRIDGE;for(let y=0;y<i;y++)for(let w=0;w<t;w++){let X=c(w,y);if(r[X]!==Wi)continue;let Y=!1;for(let W=-1;W<=1&&!Y;W++)for(let Q=-1;Q<=1;Q++)if(ge(d(w+Q,y+W))){Y=!0;break}Y&&(r[X]=re.SIDEWALK)}for(let y of Pe)if(y.junction){if(y.arms.N)for(let w=y.x0;w<y.x1;w++)l[c(w,y.z0-1)]|=2;if(y.arms.S)for(let w=y.x0;w<y.x1;w++)l[c(w,y.z1)]|=2;if(y.arms.W)for(let w=y.z0;w<y.z1;w++)l[c(y.x0-1,w)]|=2;if(y.arms.E)for(let w=y.z0;w<y.z1;w++)l[c(y.x1,w)]|=2}let Me=(y,w)=>y>=f&&y<v+2&&w>=f&&w<v+2,Ae=new Int32Array(n).fill(-1),De=[];for(let y=0;y<i;y++)for(let w=0;w<t;w++){let X=c(w,y);if(r[X]!==Wi||Ae[X]>=0)continue;let Y={id:De.length,cells:[],x0:w,z0:y,x1:w,z1:y,water:!1,inCity:Me(w,y)},W=[X];for(Ae[X]=Y.id;W.length;){let Q=W.pop(),he=Q%t,fe=Q/t|0;Y.cells.push(Q),he<Y.x0&&(Y.x0=he),he>Y.x1&&(Y.x1=he),fe<Y.z0&&(Y.z0=fe),fe>Y.z1&&(Y.z1=fe);for(let[_e,je]of[[1,0],[-1,0],[0,1],[0,-1]]){let rt=he+_e,T=fe+je;if(!h(rt,T))continue;let G=c(rt,T),ae=r[G];ae===re.WATER&&(Y.water=!0),ae===Wi&&Ae[G]<0&&(Ae[G]=Y.id,W.push(G))}}Y.x1++,Y.z1++,De.push(Y)}let Re=t*.5,C=(f+k)*.5;for(let y of De){let w=(y.x0+y.x1)/2,X=(y.z0+y.z1)/2;if(!y.inCity||y.water){let he=!y.inCity,fe=!he&&w>t*.6;y.district=he?et.COAST:et.WATERFRONT;for(let _e of y.cells){let je=_e%t,rt=_e/t|0,T=!1;for(let G=-1;G<=1;G++)for(let ae=-1;ae<=1;ae++)d(je+ae,rt+G)===re.WATER&&(T=!0);he?r[_e]=T?re.SAND:e.chance(.85)?re.GRASS:re.SAND:r[_e]=fe?re.DOCK:re.PLAZA,a[_e]=y.district,he?l[_e]|=8:l[_e]|=4}y.kind=he?"coast":fe?"dock":"promenade";continue}let Y=X>Z,W=Math.hypot((w-Re)/t,(X-C)/i),Q;Y?Q=w>t*.6&&X<Z+30?et.INDUSTRIAL:et.RESIDENTIAL:W<.15?Q=et.DOWNTOWN:W<.29?Q=et.COMMERCIAL:Q=w>t*.68&&X<i*.3?et.INDUSTRIAL:et.RESIDENTIAL,y.district=Q}let R=De.filter(y=>y.inCity&&!y.water),V=null,H=-1e9;for(let y of R){if(y.district===et.DOWNTOWN)continue;let w=y.cells.length,X=(y.x0+y.x1)/2,Y=(y.z0+y.z1)/2,W=Math.hypot(X-t*.3,Y-k*.62),Q=w*1-W*6;Y<k&&Q>H&&(H=Q,V=y)}V&&(V.district=et.PARK,V.central=!0);let U=e.shuffle(R.filter(y=>y.district===et.RESIDENTIAL&&y.cells.length<140));for(let y=0;y<Math.min(3,U.length);y++)U[y].district=et.PARK;let B=[],E=[],N=[],j=[],me=[],q={[et.DOWNTOWN]:{min:4,max:8,alley:.22},[et.COMMERCIAL]:{min:3,max:6,alley:.3},[et.RESIDENTIAL]:{min:3,max:5,alley:.12},[et.INDUSTRIAL]:{min:4,max:9,alley:.12}};function pe(y,w,X){let Y=y.x1-y.x0,W=y.z1-y.z0,Q=Y>=w.min*2+1,he=W>=w.min*2+1;if(Y<=w.max&&W<=w.max&&e.chance(.55)||!Q&&!he){X.push(y);return}if(Q&&(!he||Y>=W?!0:e.chance(.25))){let _e=y.x0+e.int(w.min,Y-w.min),je=e.chance(w.alley)&&y.x1-_e>w.min?1:0;pe({x0:y.x0,z0:y.z0,x1:_e,z1:y.z1},w,X),pe({x0:_e+je,z0:y.z0,x1:y.x1,z1:y.z1},w,X)}else{let _e=y.z0+e.int(w.min,W-w.min),je=e.chance(w.alley)&&y.z1-_e>w.min?1:0;pe({x0:y.x0,z0:y.z0,x1:y.x1,z1:_e},w,X),pe({x0:y.x0,z0:_e+je,x1:y.x1,z1:y.z1},w,X)}}let de=(y,w)=>{for(let X=y.z0;X<y.z1;X++)for(let Y=y.x0;Y<y.x1;Y++)if(Ae[c(Y,X)]!==w.id||r[c(Y,X)]!==Wi)return!1;return!0},xe=(y,w,X)=>{for(let Y=y.z0;Y<y.z1;Y++)for(let W=y.x0;W<y.x1;W++){let Q=c(W,Y);Ae[Q]===X.id&&r[Q]===Wi&&(r[Q]=w)}},Ee={glass:0,office:1,brick:2,apartment:3,house:4,warehouse:5,container:6,shop:7};function Ie(y,w,X,Y,W={}){let Q={id:B.length,x0:y.x0,z0:y.z0,x1:y.x1,z1:y.z1,h:X,style:Y,district:w.district,colorSeed:e.next(),roofSeed:e.next(),tiers:[],...W};for(let he=y.z0;he<y.z1;he++)for(let fe=y.x0;fe<y.x1;fe++){let _e=c(fe,he);r[_e]=re.BUILDING,o[_e]=Q.id}return B.push(Q),Q}function Fe(y,w,X="round",Y=e.range(1.6,2.6)){let W=X==="palm"?Y*2.4+e.range(2,3.5):Y*1.5+e.range(1.2,2.2);E.push({x:y,z:w,r:Y,h:W,kind:X,seed:e.next()})}for(let y of R){for(let W of y.cells)a[W]=y.district;let w={x0:y.x0,z0:y.z0,x1:y.x1,z1:y.z1};if(y.district===et.PARK){for(let he of y.cells)r[he]=re.GRASS;let W=Math.floor((y.x0+y.x1)/2),Q=Math.floor((y.z0+y.z1)/2);for(let he of y.cells){let fe=he%t,_e=he/t|0;(fe===W||_e===Q)&&(r[he]=re.PLAZA)}if(y.central&&y.x1-y.x0>=12&&y.z1-y.z0>=10){let he=y.x0+2,fe=y.z0+2,_e=W-1,je=Q-1,rt=(he+_e)/2,T=(fe+je)/2,G=(_e-he)/2,ae=(je-fe)/2;for(let ye=fe;ye<=je;ye++)for(let se=he;se<=_e;se++){let we=(se+.5-rt-.5)/Math.max(G,1),Be=(ye+.5-T-.5)/Math.max(ae,1);we*we+Be*Be<.85&&Ae[c(se,ye)]===y.id&&(r[c(se,ye)]=re.WATER)}}N.push({x:(W+.5)*4,z:(Q+.5)*4,r:1.6,kind:"fountain"});for(let he of y.cells){let fe=he%t,_e=he/t|0;r[he]===re.GRASS&&e.chance(.42)&&Fe((fe+e.range(.2,.8))*4,(_e+e.range(.2,.8))*4)}continue}let X=q[y.district],Y=[];pe(w,X,Y);for(let W of Y){if(!de(W,y)){xe(W,y.district===et.INDUSTRIAL?re.PARKING:re.GRASS,y);continue}let Q=W.x1-W.x0,he=W.z1-W.z0,fe=e.next();if(y.district===et.DOWNTOWN){if(fe<.1&&Q*he<=40){xe(W,re.PLAZA,y),me.push(W),N.push({x:(W.x0+Q/2)*4,z:(W.z0+he/2)*4,r:1.4,kind:e.chance(.5)?"fountain":"statue"});continue}if(fe<.17){qe(W,y);continue}let _e=e.range(14,23),je=e.chance(.5)?Ee.glass:Ee.office,rt=Ie(W,y,_e,je);if(Q>=5&&he>=5&&e.chance(.65)){let T=Math.min(27-_e,e.range(3,6));T>2&&rt.tiers.push({x0:W.x0+1,z0:W.z0+1,x1:W.x1-1,z1:W.z1-1,h:_e+T})}}else if(y.district===et.COMMERCIAL){if(fe<.12){qe(W,y);continue}let _e=e.pick([Ee.brick,Ee.brick,Ee.office,Ee.shop,Ee.apartment]);Ie(W,y,e.range(7,14),_e)}else if(y.district===et.RESIDENTIAL){if(Q>=3&&he>=3&&fe<.72){let _e={...W};if(Q>=4&&(e.chance(.5)?_e.x0++:_e.x1--),he>=4&&(e.chance(.5)?_e.z0++:_e.z1--),_e.x1-_e.x0>=2&&_e.z1-_e.z0>=2){xe(W,re.GRASS,y);for(let je=_e.z0;je<_e.z1;je++)for(let rt=_e.x0;rt<_e.x1;rt++)r[c(rt,je)]=Wi;Ie(_e,y,e.range(4.5,7.5),Ee.house,{gable:!0,ridgeX:_e.x1-_e.x0>=_e.z1-_e.z0});for(let je=W.z0;je<W.z1;je++)for(let rt=W.x0;rt<W.x1;rt++)r[c(rt,je)]===re.GRASS&&e.chance(.28)&&Fe((rt+e.range(.25,.75))*4,(je+e.range(.25,.75))*4,"round",e.range(1.4,2.2));continue}}if(fe<.9)Ie(W,y,e.range(8,12.5),Ee.apartment);else{xe(W,re.GRASS,y);for(let _e=0;_e<2;_e++)Fe((W.x0+e.range(.3,Q-.3))*4,(W.z0+e.range(.3,he-.3))*4)}}else if(y.district===et.INDUSTRIAL){if(fe<.3){xe(W,re.PARKING,y);for(let _e=W.z0;_e+1<W.z1;_e+=3)for(let je=W.x0;je<W.x1;je+=2)if(e.chance(.62)&&r[c(je,_e)]===re.PARKING&&r[c(je,_e+1)]===re.PARKING){for(let rt=_e;rt<_e+2;rt++)r[c(je,rt)]=Wi;Ie({x0:je,z0:_e,x1:je+1,z1:_e+2},y,e.chance(.5)?2.7:5.4,Ee.container)}continue}if(fe<.42){qe(W,y);continue}Ie(W,y,e.range(6,10),Ee.warehouse)}}for(let W of y.cells)r[W]===Wi&&(r[W]=re.ALLEY)}function qe(y,w){xe(y,re.PARKING,w);let X=y.x1-y.x0,Y=y.z1-y.z0;if(X>=Y)for(let Q=y.z0;Q<y.z1;Q+=2)for(let he=y.x0;he<y.x1;he++)j.push({x:(he+.5)*4,z:(Q+.75)*4,h:e.chance(.5)?Math.PI/2:-Math.PI/2});else for(let Q=y.x0;Q<y.x1;Q+=2)for(let he=y.z0;he<y.z1;he++)j.push({x:(Q+.75)*4,z:(he+.5)*4,h:e.chance(.5)?0:Math.PI})}for(let y=0;y<n;y++)r[y]===Wi&&(r[y]=re.GRASS);for(let y=0;y<6;y++){let w=a.slice();for(let X=1;X<i-1;X++)for(let Y=1;Y<t-1;Y++){let W=c(Y,X);if(a[W]!==255)continue;let Q=255;for(let he=-1;he<=1;he++)for(let fe=-1;fe<=1;fe++){let _e=a[c(Y+fe,X+he)];_e!==255&&(Q===255||_e<Q)&&(Q=_e)}w[W]=Q}a.set(w)}for(let y of De)if(y.kind==="promenade")for(let w of y.cells){let X=w%t,Y=w/t|0;(X+Y)%4===0&&d(X,Y-1)!==re.SIDEWALK&&d(X,Y+1)!==re.SIDEWALK&&Fe((X+.5)*4,(Y+.5)*4,"round",e.range(1.5,2.1))}else if(y.kind==="coast")for(let w of y.cells){let X=w%t,Y=w/t|0;r[w]===re.SAND&&e.chance(.07)?Fe((X+.5)*4,(Y+.5)*4,"palm",e.range(2.2,3)):r[w]===re.GRASS&&e.chance(.12)&&Fe((X+e.range(.3,.7))*4,(Y+e.range(.3,.7))*4,"round")}else if(y.kind==="dock")for(let w of y.cells){let X=w%t,Y=w/t|0;e.chance(.05)&&N.push({x:(X+.5)*4,z:(Y+.5)*4,r:.5,kind:"bollard"})}for(let y=E.length-1;y>=0;y--){let w=E[y],X=d(Math.floor(w.x/4),Math.floor(w.z/4));(ui[X]||X===re.ROAD||X===re.SIDEWALK)&&E.splice(y,1)}let lt=y=>{for(let w=y.z0-1;w<=y.z1;w++)for(let X=y.x0-1;X<=y.x1;X++)if(d(X,w)===re.SIDEWALK)return!0;return!1};function tt(y,w,X){let Y=null,W=1e9;for(let Q of B){if(Q.special||!y(Q)||!lt(Q))continue;let he=Math.hypot((Q.x0+Q.x1)/2-w,(Q.z0+Q.z1)/2-X);he<W&&(W=he,Y=Q)}return Y}function Ge(y){let w=null;for(let X=y.z0-1;X<=y.z1;X++)for(let Y=y.x0-1;Y<=y.x1;Y++){if(d(Y,X)!==re.SIDEWALK||Y>=y.x0&&Y<y.x1&&X>=y.z0&&X<y.z1)continue;let W=null;for(let[fe,_e]of[[1,0],[-1,0],[0,1],[0,-1]])d(Y+fe,X+_e)===re.ROAD&&(W=[fe,_e]);if(!W||(Y<y.x0||Y>=y.x1)&&(X<y.z0||X>=y.z1))continue;let he={x:Y,z:X,road:W};(!w||Math.abs(Y-(y.x0+y.x1)/2)+Math.abs(X-(y.z0+y.z1)/2)<Math.abs(w.x-(y.x0+y.x1)/2)+Math.abs(w.z-(y.z0+y.z1)/2))&&(w=he)}return w}let ut={},xt=y=>(y.district===et.COMMERCIAL||y.district===et.DOWNTOWN)&&y.style!==Ee.glass&&y.x1-y.x0>=3&&y.z1-y.z0>=3,Tt=[["police",xt,t*.36,i*.42],["hospital",xt,t*.66,i*.3],["paint",y=>(y.district===et.COMMERCIAL||y.district===et.INDUSTRIAL)&&y.x1-y.x0>=2&&y.z1-y.z0>=2,t*.55,i*.5],["paint2",y=>(y.district===et.INDUSTRIAL||y.district===et.RESIDENTIAL)&&y.style!==Ee.container&&y.x1-y.x0>=2&&y.z1-y.z0>=2,t*.4,i*.82]];for(let[y,w,X,Y]of Tt){let W=tt(w,X,Y);if(!W)continue;let Q=Ge(W);if(!Q)continue;W.special=y.startsWith("paint")?"paint":y,W.h>14&&(W.h=12),W.tiers=[],W.gable=!1;let he={name:y,building:W,tx:Q.x,tz:Q.z,x:(Q.x+.5)*4,z:(Q.z+.5)*4,road:Q.road};y.startsWith("paint")&&(l[c(Q.x,Q.z)]|=1),ut[y]=he}let He=[];for(let y=1;y<i-1;y++)for(let w=1;w<t-1;w++){if(r[c(w,y)]!==re.SIDEWALK||(w*7+y*13)%6!==0)continue;let X=[];for(let[Q,he]of[[1,0],[-1,0],[0,1],[0,-1]])d(w+Q,y+he)===re.ROAD&&X.push([Q,he]);if(X.length!==1||l[c(w,y)]&1)continue;let[Y,W]=X[0];He.push({x:(w+.5+Y*.38)*4,z:(y+.5+W*.38)*4,dx:Y,dz:W})}let S=[],O=[];for(let y=1;y<i-1;y++)for(let w=1;w<t-1;w++){let X=c(w,y);if(r[X]!==re.SIDEWALK||l[X]&1)continue;let Y=[];for(let[he,fe]of[[1,0],[-1,0],[0,1],[0,-1]])d(w+he,y+fe)===re.ROAD&&Y.push([he,fe]);if(Y.length!==1)continue;let[W,Q]=Y[0];!ui[d(w-W,y-Q)]&&d(w-W,y-Q)!==re.GRASS&&d(w-W,y-Q)!==re.PLAZA||O.push({x:w,z:y,dx:W,dz:Q})}e.shuffle(O);for(let y of O){if(S.length>=14)break;let w=(y.x+.5-y.dx*.3)*4,X=(y.z+.5-y.dz*.3)*4;S.some(Y=>Math.hypot(Y.x-w,Y.z-X)<70)||a[c(y.x,y.z)]!==255&&S.push({id:S.length,x:w,z:X,face:Math.atan2(y.dz,y.dx),tx:y.x,tz:y.z})}let ie={roadside:[],downtown:[],industrial:[],waterfront:[],park:[],residential:[],alley:[]};for(let y=1;y<i-1;y++)for(let w=1;w<t-1;w++){let X=c(w,y),Y=r[X],W={x:(w+.5)*4,z:(y+.5)*4,tx:w,tz:y};if(Y===re.SIDEWALK){let Q=0;for(let[he,fe]of[[1,0],[-1,0],[0,1],[0,-1]])d(w+he,y+fe)===re.ROAD&&Q++;if(Q===1){ie.roadside.push(W);let he=a[X];he===et.DOWNTOWN&&ie.downtown.push(W),he===et.RESIDENTIAL&&ie.residential.push(W),he===et.INDUSTRIAL&&ie.industrial.push(W)}}else(Y===re.DOCK||Y===re.PLAZA)&&l[X]&4?ie.waterfront.push(W):Y===re.GRASS&&a[X]===et.PARK?ie.park.push(W):Y===re.ALLEY?ie.alley.push(W):Y===re.PARKING&&a[X]===et.INDUSTRIAL&&ie.industrial.push(W)}let ne=[],te=e.shuffle([...ie.alley,...ie.park,...ie.waterfront]);for(let y of te){if(ne.length>=36)break;ne.some(w=>Math.hypot(w.x-y.x,w.z-y.z)<45)||ne.push(y)}let ve=[],be=[],I=new Map,Ce=(y,w)=>y?16:w?15:12;function Oe(y,w,X,Y,W,Q,he,fe,_e){let je=Math.hypot(Y-w,W-X),rt={id:ve.length,ax:w,az:X,bx:Y,bz:W,dx:(Y-w)/je,dz:(W-X)/je,len:je,speed:Q,li:he,nl:fe,outs:[],edge:_e};return ve.push(rt),I.has(y)||I.set(y,[]),I.get(y)[he]=rt,rt}for(let y=0;y<D;y++)for(let w=0;w<z-1;w++){if(!K[y][w])continue;let X=P[y],Y=X.w/2,W=(A[w].p+A[w].w)*4,Q=A[w+1].p*4,he=Ce(y===_,y===0||y===D-1);for(let fe=0;fe<Y;fe++){let _e=(X.p+Y-1-fe+.5)*4;Oe(`v,${y},${w},S`,_e,W,_e,Q,he,fe,Y,{t:"v",i:y,j:w});let je=(X.p+Y+fe+.5)*4;Oe(`v,${y},${w},N`,je,Q,je,W,he,fe,Y,{t:"v",i:y,j:w})}}for(let y=0;y<D-1;y++)for(let w=0;w<z;w++){if(!J[y][w])continue;let X=A[w],Y=X.w/2,W=(P[y].p+P[y].w)*4,Q=P[y+1].p*4,he=Ce(w===M,w===0||w===z-1);for(let fe=0;fe<Y;fe++){let _e=(X.p+Y+fe+.5)*4;Oe(`h,${y},${w},E`,W,_e,Q,_e,he,fe,Y,{t:"h",i:y,j:w});let je=(X.p+Y-1-fe+.5)*4;Oe(`h,${y},${w},W`,Q,je,W,je,he,fe,Y,{t:"h",i:y,j:w})}}let ze=(y,w,X)=>X==="S"?I.get(`v,${y},${w},S`):X==="N"?I.get(`v,${y},${w-1},N`):X==="E"?I.get(`h,${y},${w},E`):I.get(`h,${y-1},${w},W`),St=(y,w,X)=>X==="S"?I.get(`v,${y},${w-1},S`):X==="N"?I.get(`v,${y},${w},N`):X==="E"?I.get(`h,${y-1},${w},E`):I.get(`h,${y},${w},W`);function pt(y,w,X,Y){let W=[y.bx,y.bz];if(X==="S")W.push(w.ax,w.az);else{let fe,_e;Math.abs(y.dx)<.5?(fe=y.bx,_e=w.az):(fe=w.ax,_e=y.bz),X==="U"&&(fe=(y.bx+w.ax)/2+y.dx*6,_e=(y.bz+w.az)/2+y.dz*6);for(let je=1;je<=8;je++){let rt=je/8,T=1-rt;W.push(T*T*y.bx+2*T*rt*fe+rt*rt*w.ax,T*T*y.bz+2*T*rt*_e+rt*rt*w.az)}}let Q=0;for(let fe=2;fe<W.length;fe+=2)Q+=Math.hypot(W[fe]-W[fe-2],W[fe+1]-W[fe-1]);let he={id:be.length,from:y.id,to:w.id,pts:W,len:Q,turn:X,node:Y};be.push(he),y.outs.push(he.id)}for(let y of Pe)if(y.deg!==0)for(let w of["N","S","E","W"]){let X=St(y.i,y.j,w);if(!X)continue;let Y=ze(y.i,y.j,w),W=ze(y.i,y.j,Vm[w]),Q=ze(y.i,y.j,Gm[w]),he=!1;if(Y){for(let fe=0;fe<X.length;fe++)pt(X[fe],Y[Math.min(fe,Y.length-1)],"S",y);he=!0}if(W&&(pt(X[X.length-1],W[W.length-1],"R",y),he=!0),Q&&(pt(X[0],Q[0],"L",y),he=!0),!he){let fe=ze(y.i,y.j,Wm[w]);fe&&pt(X[0],fe[0],"U",y)}}let nt=null,yt=1e9,Ut=t*.47,Qt=k*.58;for(let y of ie.roadside){let w=Math.hypot(y.tx-Ut,y.tz-Qt);w<yt&&(yt=w,nt=y)}return{W:t,H:i,tiles:r,district:a,buildingId:o,meta:l,blockOf:Ae,blocks:De,buildings:B,trees:E,props:N,lamps:He,phones:S,parkingSpots:j,pickupSpots:ne,places:ie,specials:ut,plazas:me,lanes:ve,conns:be,nodes:Pe,vLines:P,hLines:A,vE:K,hE:J,river:{z0:k,z1:Z},ring:{a:f,b:v},start:nt,STYLE:Ee,nv:D,nh:z,vAve:_,hAve:M,rIdx:b}}function nd(s){let{W:e,H:t,tiles:i}=s,n=(l,c)=>{let h=Math.floor(l/4),d=Math.floor(c/4);return h<0||d<0||h>=e||d>=t?re.WATER:i[d*e+h]};return{tileAt:n,tileXZ:(l,c)=>l<0||c<0||l>=e||c>=t?re.WATER:i[c*e+l],solidAt:(l,c)=>ui[n(l,c)]===1,walkableAt:(l,c)=>hn[n(l,c)]===1}}function sd(s=256){let e=new Uint8Array(s*s*4),t=[[6,13],[16,31],[64,128],[24,48]],i=(a,o)=>{let l=new Float32Array(a*a),c=o;for(let h=0;h<l.length;h++)c=c*1664525+1013904223>>>0,l[h]=c/4294967296;return l},n=a=>a*a*(3-2*a);for(let a=0;a<4;a++){let o=t[a].map((l,c)=>({G:l,l:i(l,1234+a*97+c*31)}));for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=0,d=0;o.forEach((u,p)=>{let f=c/s*u.G,v=l/s*u.G,m=Math.floor(f),g=Math.floor(v),_=n(f-m),M=n(v-g),b=u.G,P=u.l[g%b*b+m%b],A=u.l[g%b*b+(m+1)%b],D=u.l[(g+1)%b*b+m%b],z=u.l[(g+1)%b*b+(m+1)%b],k=p===0?.65:.35;h+=k*((P*(1-_)+A*_)*(1-M)+(D*(1-_)+z*_)*M),d+=k}),e[(l*s+c)*4+a]=Math.round(h/d*255)}}let r=new fr(e,s,s,mi);return r.wrapS=r.wrapT=lr,r.magFilter=Ii,r.minFilter=Mn,r.generateMipmaps=!0,r.anisotropy=4,r.needsUpdate=!0,r}var $c=()=>({uNoise:{value:null},uTime:{value:0},uNight:{value:0},uTint:{value:new Xe(1,1,1)}});function rd(s){let e=$c();return e.uNoise.value=s,new zt({uniforms:e,vertexShader:`
      attribute vec3 color;
      attribute float pattern;
      varying vec3 vColor;
      varying float vPat;
      varying vec3 vPos;
      void main() {
        vColor = color;
        vPat = pattern;
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uNoise;
      uniform float uNight;
      uniform vec3 uTint;
      varying vec3 vColor;
      varying float vPat;
      varying vec3 vPos;
      float lineMask(vec2 f, float w) {
        vec2 d = min(f, 1.0 - f);
        float m = min(d.x, d.y);
        return 1.0 - smoothstep(w, w + 0.02, m);
      }
      void main() {
        vec2 xz = vPos.xz;
        vec4 n1 = texture2D(uNoise, xz * 0.031);
        vec4 n2 = texture2D(uNoise, xz * 0.17);
        float fine = texture2D(uNoise, xz * 0.9).b;
        vec3 c = vColor;
        float p = vPat;
        if (p < 0.5) {            // asphalt
          c *= 0.86 + 0.16 * n1.r + 0.12 * (fine - 0.5) + 0.06 * (n2.g - 0.5);
          c *= 1.0 - 0.18 * smoothstep(0.72, 0.9, n1.a); // worn patches
        } else if (p < 1.5) {     // sidewalk paving, 1.33 m slabs
          vec2 g = xz * 0.75;
          float l = lineMask(fract(g), 0.025);
          float slab = texture2D(uNoise, floor(g) * 0.071).g;
          c *= (0.9 + 0.12 * slab + 0.06 * (fine - 0.5)) * (1.0 - 0.16 * l);
        } else if (p < 2.5) {     // grass
          float k = 0.78 + 0.34 * n1.r + 0.16 * (fine - 0.5);
          c *= k;
          c = mix(c, c * vec3(1.18, 1.1, 0.72), smoothstep(0.62, 0.8, n2.a) * 0.6);
          c *= 1.0 - 0.12 * smoothstep(0.65, 0.85, n1.g);
        } else if (p < 3.5) {     // plain with slight grain
          c *= 0.95 + 0.08 * (fine - 0.5) + 0.05 * (n1.r - 0.5);
        } else if (p < 4.5) {     // wooden planks along x
          float row = floor(xz.y * 3.0);
          float plank = texture2D(uNoise, vec2(row * 0.137, floor(xz.x * 0.25 + row * 0.5) * 0.11)).r;
          float seam = 1.0 - smoothstep(0.0, 0.06, min(fract(xz.y * 3.0), 1.0 - fract(xz.y * 3.0)));
          float grain = texture2D(uNoise, vec2(xz.x * 0.35, xz.y * 6.0)).b;
          c *= (0.82 + 0.3 * plank + 0.1 * (grain - 0.5)) * (1.0 - 0.35 * seam);
        } else if (p < 5.5) {     // sand
          c *= 0.92 + 0.1 * n1.r + 0.1 * (fine - 0.5);
        } else if (p < 6.5) {     // plaza stone, 2 m tiles offset rows
          vec2 g = xz * 0.5;
          g.x += step(0.5, fract(g.y * 0.5)) * 0.5;
          float l = lineMask(fract(g), 0.018);
          float st = texture2D(uNoise, floor(g) * 0.113).a;
          c *= (0.9 + 0.14 * st + 0.05 * (fine - 0.5)) * (1.0 - 0.14 * l);
        } else if (p < 7.5) {     // concrete / alley
          c *= 0.86 + 0.18 * n1.g + 0.1 * (fine - 0.5);
          c *= 1.0 - 0.15 * smoothstep(0.7, 0.88, n2.r);
        } else if (p < 8.5) {     // roof gravel
          c *= 0.88 + 0.12 * n1.r + 0.16 * (fine - 0.5);
        } else if (p < 9.5) {     // road paint (slightly worn)
          c *= 0.9 + 0.1 * fine;
          c = mix(c, c * 0.72, smoothstep(0.6, 0.85, n2.g) * 0.5);
        } else if (p < 10.5) {    // shingles: rows along local slope (use y)
          float row = fract(vPos.y * 2.2 + (xz.x + xz.y) * 0.0);
          c *= 0.86 + 0.14 * smoothstep(0.0, 0.25, row) + 0.08 * (fine - 0.5);
        } else if (p < 11.5) {    // corrugated metal roof stripes along x
          float s = 0.5 + 0.5 * sin(xz.x * 9.0);
          c *= 0.84 + 0.16 * s + 0.06 * (fine - 0.5);
        } else {                  // dirt
          c *= 0.8 + 0.3 * n1.r + 0.12 * (fine - 0.5);
        }
        c *= uTint;
        gl_FragColor = vec4(c, 1.0);
      }`})}function ad(s){let e=$c();return e.uNoise.value=s,new zt({uniforms:e,vertexShader:`
      attribute vec3 color;
      attribute vec2 uvw;      // metres along wall, metres up
      attribute vec4 wstyle;   // floorH, bayW, winW, winH (fractions)
      attribute vec3 wcolor;   // window colour
      attribute vec4 wkind;    // kind, seed, wallTop, shade
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec4 vStyle;
      varying vec3 vWin;
      varying vec4 vKind;
      void main() {
        vColor = color; vUv = uvw; vStyle = wstyle; vWin = wcolor; vKind = wkind;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uNoise;
      uniform float uNight;
      uniform vec3 uTint;
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec4 vStyle;
      varying vec3 vWin;
      varying vec4 vKind;
      float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float inside(float d, float halfW) {
        float w = fwidth(d) * 0.8 + 1e-4;
        return 1.0 - smoothstep(halfW - w, halfW + w, d);
      }
      void main() {
        float kind = vKind.x;
        float seed = vKind.y;
        float top = vKind.z;
        vec3 base = vColor;
        vec2 g = vec2(vUv.x / vStyle.y, vUv.y / vStyle.x);
        vec2 f = fract(g);
        vec2 cell = floor(g);
        float grain = texture2D(uNoise, vUv * vec2(0.35, 0.5)).b;
        base *= 0.94 + 0.1 * (grain - 0.5);
        float win = 0.0;
        vec3 wc = vWin;
        if (kind < 0.5) {               // standard punched windows
          win = inside(abs(f.x - 0.5), vStyle.z * 0.5) * inside(abs(f.y - 0.56), vStyle.w * 0.5);
          wc *= 0.85 + 0.3 * h21(cell + seed * 17.0);
        } else if (kind < 1.5) {        // glass curtain wall
          win = inside(abs(f.x - 0.5), 0.46) * inside(abs(f.y - 0.5), 0.43);
          float sky = 0.75 + 0.35 * fract(vUv.y * 0.03 + seed) + 0.15 * h21(cell + seed);
          wc *= sky;
        } else if (kind < 2.5) {        // corrugated / container
          base *= 0.82 + 0.18 * step(0.5, fract(vUv.x * 1.6));
          win = 0.0;
        } else if (kind < 3.5) {        // brick with framed windows
          float course = fract(vUv.y * 4.0);
          base *= 0.93 + 0.07 * smoothstep(0.0, 0.15, course);
          float frame = inside(abs(f.x - 0.5), vStyle.z * 0.5 + 0.06) * inside(abs(f.y - 0.56), vStyle.w * 0.5 + 0.05);
          base = mix(base, vec3(0.86, 0.83, 0.76), frame);
          win = inside(abs(f.x - 0.5), vStyle.z * 0.5) * inside(abs(f.y - 0.56), vStyle.w * 0.5);
        } else {                        // houses: small windows, siding lines
          base *= 0.95 + 0.05 * step(0.5, fract(vUv.y * 3.0));
          win = inside(abs(f.x - 0.5), vStyle.z * 0.5) * inside(abs(f.y - 0.55), vStyle.w * 0.5);
        }
        // shop fronts on the ground floor for commercial kinds
        if (cell.y < 0.5 && (kind < 0.5 || (kind > 2.5 && kind < 3.5))) {
          float shop = step(0.5, h21(vec2(seed, 3.0)));
          if (shop > 0.5) {
            win = inside(abs(f.x - 0.5), 0.44) * inside(abs(f.y - 0.42), 0.3);
            wc = vec3(0.24, 0.3, 0.34) * (0.9 + 0.3 * h21(cell + 7.0));
            float awn = inside(abs(vUv.y - vStyle.x * 0.86), 0.18);
            vec3 awc = mix(vec3(0.62, 0.16, 0.14), vec3(0.15, 0.4, 0.3), step(0.5, h21(vec2(seed, 9.0))));
            base = mix(base, awc, awn);
          }
        }
        // lit windows at night
        float lit = step(0.58, h21(cell * 1.37 + seed * 31.0));
        wc = mix(wc, vec3(1.0, 0.82, 0.48) * (0.85 + 0.3 * h21(cell + 2.0)), lit * uNight);
        vec3 c = mix(base, wc, win);
        // cornice at the top and plinth at the bottom
        c *= 1.0 - 0.22 * inside(abs(vUv.y - (top - 0.25)), 0.25);
        c *= 1.0 - 0.18 * (1.0 - smoothstep(0.0, 0.5, vUv.y));
        // ambient occlusion towards the ground
        c *= mix(0.72, 1.0, smoothstep(0.0, 3.0, vUv.y));
        c *= vKind.w;
        c *= mix(uTint, vec3(1.0), win * lit * uNight);
        gl_FragColor = vec4(c, 1.0);
      }`})}function od(s){let e=$c();return e.uNoise.value=s,new zt({uniforms:e,vertexShader:`
      attribute float shore;
      varying float vShore;
      varying vec2 vXZ;
      void main() {
        vShore = shore;
        vXZ = position.xz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uNoise;
      uniform float uTime;
      uniform vec3 uTint;
      varying float vShore;
      varying vec2 vXZ;
      void main() {
        vec2 p = vXZ;
        float a = texture2D(uNoise, p * 0.045 + vec2(uTime * 0.012, uTime * 0.007)).r;
        float b = texture2D(uNoise, p * 0.11 - vec2(uTime * 0.02, -uTime * 0.013)).g;
        float c2 = texture2D(uNoise, p * 0.36 + vec2(uTime * 0.05, uTime * 0.03)).b;
        float depth = smoothstep(0.0, 4.0, vShore);
        vec3 shallow = vec3(0.2, 0.52, 0.58);
        vec3 deep = vec3(0.07, 0.25, 0.38);
        vec3 col = mix(shallow, deep, depth);
        col *= 0.88 + 0.22 * a;
        float ripple = smoothstep(0.62, 0.7, b * 0.6 + c2 * 0.5);
        col = mix(col, vec3(0.62, 0.8, 0.84), ripple * 0.35);
        float foamBand = 1.0 - smoothstep(0.0, 0.55 + 0.25 * sin(uTime * 1.3 + p.x * 0.3 + p.y * 0.2), vShore);
        float foam = foamBand * smoothstep(0.35, 0.65, c2 + 0.25 * a);
        col = mix(col, vec3(0.9, 0.96, 0.95), foam * 0.85);
        gl_FragColor = vec4(col * uTint, 1.0);
      }`})}var Xm=-.452,qm=.822,jm=-.345;function Oi(s,e,t){return Math.min(1,.55+.5*Math.max(0,s*Xm+e*qm+t*jm))}var Ue=s=>Kc(s),Yt=(s,e)=>[s[0]*e,s[1]*e,s[2]*e],Qc=128,ks=class{constructor(e){this.fields=e,this.chunks=new Map,this.at(0,0)}at(e,t){let i=Math.floor(e/Qc)+","+Math.floor(t/Qc),n=this.chunks.get(i);if(!n){n={n:0,idx:[]};for(let r of this.fields)n[r]=[];this.chunks.set(i,n)}return this.c=n,this}get n(){let e=0;for(let t of this.chunks.values())e+=t.n;return e}meshes(e,t){let i=[];for(let n of this.chunks.values()){if(!n.n)continue;let r=new Mt;t(r,n),r.setIndex(n.idx),r.computeBoundingSphere(),r.computeBoundingBox(),i.push(new st(r,e))}return i}},eh=class extends ks{constructor(){super(["pos","col","pat"])}quad(e,t,i,n,r,a){let o=this.c,l=o.n;o.pos.push(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2],n[0],n[1],n[2]);for(let c=0;c<4;c++)o.col.push(r[0],r[1],r[2]),o.pat.push(a);o.idx.push(l,l+1,l+2,l,l+2,l+3),o.n+=4}rect(e,t,i,n,r,a,o){this.quad([e,r,t],[e,r,n],[i,r,n],[i,r,t],a,o)}rot(e,t,i,n,r,a,o,l){let c=Math.cos(r),h=Math.sin(r),d=-h,u=c,p=i/2,f=n/2;this.quad([e-c*p-d*f,a,t-h*p-u*f],[e-c*p+d*f,a,t-h*p+u*f],[e+c*p+d*f,a,t+h*p+u*f],[e+c*p-d*f,a,t+h*p-u*f],o,l)}fan(e,t,i,n,r,a,o,l=0){for(let c=0;c<r;c++){let h=c/r*Math.PI*2,d=(c+1)/r*Math.PI*2,u=[e+Math.cos(h)*n,i,t+Math.sin(h)*n],p=[e+Math.cos(d)*n,i,t+Math.sin(d)*n],f=[e+Math.cos(h)*l,i,t+Math.sin(h)*l],v=[e+Math.cos(d)*l,i,t+Math.sin(d)*l];this.quad(f,v,p,u,a,o)}}vquad(e,t,i,n,r,a,o,l){this.quad([e,r,t],[e,a,t],[i,a,n],[i,r,n],o,l)}build(e){return this.meshes(e,(t,i)=>{t.setAttribute("position",new ke(i.pos,3)),t.setAttribute("color",new ke(i.col,3)),t.setAttribute("pattern",new ke(i.pat,1))})}},th=class extends ks{constructor(){super(["pos","col","uvw","sty","wc","kind"])}_v(e,t,i,n,r,a){let o=this.c;o.pos.push(e,t,i),o.col.push(a.col[0],a.col[1],a.col[2]),o.uvw.push(n,r),o.sty.push(a.floorH,a.bayW,a.winW,a.winH),o.wc.push(a.win[0],a.win[1],a.win[2]),o.kind.push(a.kind,a.seed,a.top,a.shade)}wall(e,t,i,n,r,a,o,l){let c=Math.hypot(i-e,n-t),h=(n-t)/c,d=-(i-e)/c,u={...l,shade:Oi(h,0,d)},p=this.c.n;return this._v(e,r,t,o,r,u),this._v(e,a,t,o,a,u),this._v(i,a,n,o+c,a,u),this._v(i,r,n,o+c,r,u),this.c.idx.push(p,p+1,p+2,p,p+2,p+3),this.c.n+=4,o+c}gable(e,t,i,n,r,a,o){let l=Math.hypot(i-e,n-t),c=(n-t)/l,h=-(i-e)/l,d={...o,shade:Oi(c,0,h)},u=this.c.n;this._v(e,r,t,0,r,d),this._v((e+i)/2,a,(t+n)/2,l/2,a,d),this._v(i,r,n,l,r,d),this.c.idx.push(u,u+1,u+2),this.c.n+=3}build(e){return this.meshes(e,(t,i)=>{t.setAttribute("position",new ke(i.pos,3)),t.setAttribute("color",new ke(i.col,3)),t.setAttribute("uvw",new ke(i.uvw,2)),t.setAttribute("wstyle",new ke(i.sty,4)),t.setAttribute("wcolor",new ke(i.wc,3)),t.setAttribute("wkind",new ke(i.kind,4))})}},ih=class extends ks{constructor(){super(["pos","col"])}_shade(e,t,i){let n=t[0]-e[0],r=t[1]-e[1],a=t[2]-e[2],o=i[0]-e[0],l=i[1]-e[1],c=i[2]-e[2],h=r*c-a*l,d=a*o-n*c,u=n*l-r*o,p=Math.hypot(h,d,u)||1;return Oi(h/p,d/p,u/p)}tri(e,t,i,n,r=!0){let a=r?this._shade(e,t,i):1,o=this.c,l=o.n;o.pos.push(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2]);for(let c=0;c<3;c++)o.col.push(n[0]*a,n[1]*a,n[2]*a);o.idx.push(l,l+1,l+2),o.n+=3}quad(e,t,i,n,r,a=!0){let o=a?this._shade(e,t,i):1,l=this.c,c=l.n;l.pos.push(e[0],e[1],e[2],t[0],t[1],t[2],i[0],i[1],i[2],n[0],n[1],n[2]);for(let h=0;h<4;h++)l.col.push(r[0]*o,r[1]*o,r[2]*o);l.idx.push(c,c+1,c+2,c,c+2,c+3),l.n+=4}box(e,t,i,n,r,a,o,l=o,c="nesw"){this.quad([e,r,i],[e,r,a],[n,r,a],[n,r,i],o),c.includes("n")&&this.quad([e,t,i],[e,r,i],[n,r,i],[n,t,i],l),c.includes("e")&&this.quad([n,t,i],[n,r,i],[n,r,a],[n,t,a],l),c.includes("s")&&this.quad([n,t,a],[n,r,a],[e,r,a],[e,t,a],l),c.includes("w")&&this.quad([e,t,a],[e,r,a],[e,r,i],[e,t,i],l)}prism(e,t,i,n,r,a,o,l,c=0,h=i){let d=[];for(let u=0;u<a;u++){let p=c+u/a*Math.PI*2;d.push([Math.cos(p),Math.sin(p)])}for(let u=0;u<a;u++){let p=d[u],f=d[(u+1)%a];this.quad([e+p[0]*i,n,t+p[1]*i],[e+p[0]*h,r,t+p[1]*h],[e+f[0]*h,r,t+f[1]*h],[e+f[0]*i,n,t+f[1]*i],o)}if(l)for(let u=0;u<a;u++){let p=d[u],f=d[(u+1)%a];this.tri([e,r,t],[e+f[0]*h,r,t+f[1]*h],[e+p[0]*h,r,t+p[1]*h],l)}}cone(e,t,i,n,r,a,o){for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;this.tri([e+Math.cos(c)*i,n,t+Math.sin(c)*i],[e,r,t],[e+Math.cos(h)*i,n,t+Math.sin(h)*i],o)}}blob(e,t,i,n,r,a,o,l=1){let c=new Zn(n,l),h=c.attributes.position.array;for(let d=0;d<h.length;d+=9){let u=f=>[e+h[d+f*3],t+h[d+f*3+1]*r,i+h[d+f*3+2]],p=.9+o()*.2;h[d+1]+h[d+4]+h[d+7]<-n*1.2||this.tri(u(0),u(1),u(2),Yt(a,p))}c.dispose()}build(e){return this.meshes(e,(t,i)=>{t.setAttribute("position",new ke(i.pos,3)),t.setAttribute("color",new ke(i.col,3))})}},nh=class extends ks{constructor(){super(["pos"])}poly(e,t){let i=this.c,n=i.n;for(let r of e)i.pos.push(r[0],t,r[1]);for(let r=1;r<e.length-1;r++)i.idx.push(n,n+r+1,n+r);i.n+=e.length}boxShadow(e,t,i,n,r,a=.03){let o=_i*r,l=Mi*r;this.poly([[e,t],[i,t],[i+o,t+l],[i+o,n+l],[e+o,n+l],[e,n]],a)}circle(e,t,i,n=.03,r=10){let a=[];for(let o=0;o<r;o++){let l=-(o/r)*Math.PI*2;a.push([e+Math.cos(l)*i,t+Math.sin(l)*i])}this.poly(a,n)}build(e){return this.meshes(e,(t,i)=>{t.setAttribute("position",new ke(i.pos,3))})}};function Ym(s=.3){return new Et({color:658712,transparent:!0,opacity:s,depthWrite:!1,stencilWrite:!0,stencilRef:0,stencilFunc:Gu,stencilZPass:Vu,stencilFail:nn,stencilZFail:nn})}var Zm={[re.ROAD]:["#46494e",0],[re.BRIDGE]:["#4b4d52",0],[re.SIDEWALK]:["#a8a397",1],[re.GRASS]:["#5b8a3a",2],[re.PLAZA]:["#b9ad98",6],[re.ALLEY]:["#74706a",7],[re.PARKING]:["#57595d",0],[re.DOCK]:["#8f6c49",4],[re.SAND]:["#dcc690",5],[re.BUILDING]:["#5e5c59",7],[re.WALL]:["#6d6a64",7]},Km={[et.DOWNTOWN]:"#b3afa6",[et.COMMERCIAL]:"#aaa59a",[et.RESIDENTIAL]:"#a7a296",[et.INDUSTRIAL]:"#97938a"},Jm={0:{name:"glass",walls:["#3d4a57","#485864","#33404d","#526170","#3f4f5f"],win:["#7fa9c9","#8fb8cf","#6d98b8","#9cc0d0","#86a6bd"],floorH:3.6,bayW:2,winW:.9,winH:.8,kind:1,roof:["#5d6064","#6a6c6f","#55585c"],roofPat:8},1:{name:"office",walls:["#bab6ad","#a8acae","#c7c0b2","#9ea5a9","#cbc6bb"],win:["#2c3a46","#33414d","#283642","#3a4652"],floorH:3.4,bayW:4/3,winW:.62,winH:.58,kind:0,roof:["#8d8a84","#7b7a77","#9a958a"],roofPat:8},2:{name:"brick",walls:["#8e4b3b","#9b5b45","#7c4235","#a0644c","#74413a"],win:["#252b31","#2c3239"],floorH:3.2,bayW:2,winW:.44,winH:.52,kind:3,roof:["#6e6c69","#7c7873","#5f5e5c"],roofPat:8},3:{name:"apartment",walls:["#d8c2a4","#cfa98c","#bcc6b2","#e0d5c0","#c9b6a4","#a9b9c4"],win:["#36424c","#2d3842"],floorH:3,bayW:2,winW:.5,winH:.5,kind:0,roof:["#8a8781","#9a968e","#77756f"],roofPat:8},4:{name:"house",walls:["#e7dfcd","#c8d5dd","#e2cd9f","#d6b3a3","#b7c8a7","#ece7da"],win:["#3a4650","#34404a"],floorH:2.8,bayW:2,winW:.38,winH:.44,kind:4,roof:["#9d5139","#56606a","#6b513f","#7a3f34","#5b6e5e","#8a6b4c"],roofPat:10},5:{name:"warehouse",walls:["#8b9095","#6d7a85","#9a8b6e","#7f6a5a","#a3a7a3"],win:["#3a4148"],floorH:4,bayW:1,winW:0,winH:0,kind:2,roof:["#8e9296","#7d8489","#a1a49f","#8b7f72"],roofPat:11},6:{name:"container",walls:["#b8432f","#2f5f9e","#3f7d4a","#d08a2c","#c9b23a","#7d3f6e","#4a8c96"],win:["#222222"],floorH:2.7,bayW:1,winW:0,winH:0,kind:2,roofPat:11},7:{name:"shop",walls:["#d9d3c4","#c4b7a2","#e3d2b0","#b0a99b","#d0c6b8"],win:["#2f3a44","#35414a"],floorH:3.6,bayW:2,winW:.55,winH:.5,kind:0,roof:["#8d8a84","#9a958a","#827f79"],roofPat:8}};function ld(s){let{W:e,H:t,tiles:i,meta:n}=s,r=(S,O)=>S<0||O<0||S>=e||O>=t?re.WATER:i[O*e+S],a=new An(4242),o=()=>a.next(),l=sd(),c={ground:rd(l),wall:ad(l),water:od(l),props:new Et({vertexColors:!0}),shadow:Ym(.3)},h=new eh,d=new th,u=new ih,p=new nh,f=(S,O)=>{let ie=r(S,O);if(ie===re.WATER||ie===re.BUILDING)return-1;let ne=ie*8;return ie===re.SIDEWALK&&(ne+=s.district[O*e+S]<4?s.district[O*e+S]:4),ie===re.GRASS&&s.meta[O*e+S]&8&&(ne+=1),ne},v=new Uint8Array(e*t);for(let S=0;S<t;S++)for(let O=0;O<e;O++){let ie=S*e+O;if(v[ie])continue;let ne=f(O,S);if(ne<0){v[ie]=1;continue}let te=Qc/4,ve=(Math.floor(O/te)+1)*te,be=(Math.floor(S/te)+1)*te,I=1;for(;O+I<e&&O+I<ve&&!v[ie+I]&&f(O+I,S)===ne;)I++;let Ce=1;e:for(;S+Ce<t&&S+Ce<be;){for(let pt=0;pt<I;pt++){let nt=(S+Ce)*e+O+pt;if(v[nt]||f(O+pt,S+Ce)!==ne)break e}Ce++}for(let pt=0;pt<Ce;pt++)for(let nt=0;nt<I;nt++)v[(S+pt)*e+O+nt]=1;let Oe=ne/8|0,[ze,St]=Zm[Oe];Oe===re.SIDEWALK&&(ze=Km[ne%8]||ze),Oe===re.GRASS&&ne%8===1&&(ze="#6a9142"),h.at(O*4+1,S*4+1),h.rect(O*4,S*4,(O+I)*4,(S+Ce)*4,0,Ue(ze),St)}let m=.012,g=Ue("#e0b63e"),_=Ue("#e8e6de"),M=9;function b(S,O,ie,ne,te,ve=2.6,be=2.4){for(let I=O;I<ie;I+=ve+be)h.at(S,I).rect(S-ne/2,I,S+ne/2,Math.min(I+ve,ie),m,te,M)}function P(S,O,ie,ne,te,ve=2.6,be=2.4){for(let I=O;I<ie;I+=ve+be)h.at(I,S).rect(I,S-ne/2,Math.min(I+ve,ie),S+ne/2,m,te,M)}let A=(S,O)=>s.nodes[O*s.nv+S],{vLines:D,hLines:z,vE:k,hE:Z,nv:K,nh:J}=s,ee=4;function $(S,O,ie){let ne=D[S],te=ne.w/2,ve=(ne.p+te)*4;ie-O<1||(h.at(ve,(O+ie)/2),te===1?b(ve,O,ie,.18,g):(h.rect(ve-.32,O,ve-.16,ie,m,g,M),h.rect(ve+.16,O,ve+.32,ie,m,g,M),b((ne.p+1)*4,O,ie,.14,_,2.2,3.4),b((ne.p+3)*4,O,ie,.14,_,2.2,3.4)))}function oe(S,O,ie){let ne=z[S],te=ne.w/2,ve=(ne.p+te)*4;ie-O<1||(h.at((O+ie)/2,ve),te===1?P(ve,O,ie,.18,g):(h.rect(O,ve-.32,ie,ve-.16,m,g,M),h.rect(O,ve+.16,ie,ve+.32,m,g,M),P((ne.p+1)*4,O,ie,.14,_,2.2,3.4),P((ne.p+3)*4,O,ie,.14,_,2.2,3.4)))}function le(S,O,ie,ne){h.at(S,ie);for(let te=S+.45;te<O-.4;te+=1.15)h.rect(te,ie,te+.6,ne,m,_,M)}function ce(S,O,ie,ne){h.at(ie,S);for(let te=S+.45;te<O-.4;te+=1.15)h.rect(ie,te,ne,te+.6,m,_,M)}for(let S=0;S<K;S++)for(let O=0;O<J-1;O++){if(!k[S][O])continue;let ie=D[S],ne=ie.w/2,te=A(S,O),ve=A(S,O+1),be=(z[O].p+z[O].w)*4,I=z[O+1].p*4,Ce=be+(te.junction?ee+.8:0),Oe=I-(ve.junction?ee+.8:0);$(S,Ce,Oe);let ze=ie.p*4,St=(ie.p+ie.w)*4,pt=(ie.p+ne)*4;te.junction&&(le(ze,St,be+.4,be+ee-.5),h.rect(pt,be+ee-.2,St-.2,be+ee+.25,m,_,M)),ve.junction&&(le(ze,St,I-ee+.5,I-.4),h.rect(ze+.2,I-ee-.25,pt,I-ee+.2,m,_,M))}for(let S=0;S<K-1;S++)for(let O=0;O<J;O++){if(!Z[S][O])continue;let ie=z[O],ne=ie.w/2,te=A(S,O),ve=A(S+1,O),be=(D[S].p+D[S].w)*4,I=D[S+1].p*4,Ce=be+(te.junction?ee+.8:0),Oe=I-(ve.junction?ee+.8:0);oe(O,Ce,Oe);let ze=ie.p*4,St=(ie.p+ie.w)*4,pt=(ie.p+ne)*4;te.junction&&(ce(ze,St,be+.4,be+ee-.5),h.rect(be+ee-.2,ze+.2,be+ee+.25,pt,m,_,M)),ve.junction&&(ce(ze,St,I-ee+.5,I-.4),h.rect(I-ee-.25,pt,I-ee+.2,St-.2,m,_,M))}for(let S of s.nodes)S.deg!==2||S.junction||(S.arms.N&&S.arms.S&&$(S.i,S.z0*4,S.z1*4),S.arms.E&&S.arms.W&&oe(S.j,S.x0*4,S.x1*4));let ue=Ue("#cfcabe"),Pe=Ue("#303236"),Ne=Ue("#2c2e31");for(let S=0;S<t;S++)for(let O=0;O<e;O++){let ie=i[S*e+O],ne=O*4,te=S*4;if(h.at(ne+1,te+1),ie===re.SIDEWALK||ie===re.PLAZA||ie===re.ALLEY||ie===re.PARKING){let ve=I=>I===re.ROAD||I===re.BRIDGE,be=ie===re.SIDEWALK?.32:.18;ve(r(O+1,S))&&(h.rect(ne+4-be,te,ne+4,te+4,.008,ue,7),h.rect(ne+4,te,ne+4+.24,te+4,.006,Pe,7)),ve(r(O-1,S))&&(h.rect(ne,te,ne+be,te+4,.008,ue,7),h.rect(ne-.24,te,ne,te+4,.006,Pe,7)),ve(r(O,S+1))&&(h.rect(ne,te+4-be,ne+4,te+4,.008,ue,7),h.rect(ne,te+4,ne+4,te+4+.24,.006,Pe,7)),ve(r(O,S-1))&&(h.rect(ne,te,ne+4,te+be,.008,ue,7),h.rect(ne,te-.24,ne+4,te,.006,Pe,7))}if(ie===re.ROAD&&!(n[S*e+O]&2)&&ja(O,S)<.05&&h.fan(ne+1+ja(S,O)*2,te+1+ja(O+7,S)*2,.01,.42,8,Ne,7),n[S*e+O]&1){h.rect(ne+.15,te+.15,ne+4-.15,te+4-.15,.013,Ue("#1f2022"),3);for(let ve=0;ve<6;ve++){let be=Math.PI/4;h.rot(ne+.55+ve*.6,te+4/2,4.6,.28,be,.015,Ue("#f2c230"),3)}h.rect(ne+.15,te+.15,ne+4-.15,te+.4,.016,Ue("#f2c230"),3),h.rect(ne+.15,te+4-.4,ne+4-.15,te+4-.15,.016,Ue("#f2c230"),3)}}for(let S of s.parkingSpots){h.at(S.x,S.z);let O=Math.cos(S.h),ie=Math.sin(S.h),ne=-ie,te=O;for(let ve of[-1,1])h.rot(S.x+ne*2*ve,S.z+te*2*ve,4.8,.12,S.h,m,_,M);o()<.3&&h.fan(S.x+O*(o()-.5)*2,S.z+ie*(o()-.5)*2,.009,.5+o()*.5,7,Ue("#3d3e40"),3)}let ge=Ue("#6e6a61"),Me=Ue("#bdb7a9"),Ae=Ue("#8e8b84"),De=qa-.3;for(let S=0;S<t;S++)for(let O=0;O<e;O++){let ie=i[S*e+O];if(ie===re.WATER)continue;let ne=O*4,te=S*4;h.at(ne+1,te+1),u.at(ne+1,te+1);let ve=ie===re.BRIDGE,be=ve?-1:De,I=ve?Ae:ge;if(r(O+1,S)===re.WATER&&(h.vquad(ne+4,te,ne+4,te+4,be,0,I,3),ve||h.rect(ne+4-.35,te,ne+4,te+4,.014,Me,7)),r(O-1,S)===re.WATER&&(h.vquad(ne,te+4,ne,te,be,0,I,3),ve||h.rect(ne,te,ne+.35,te+4,.014,Me,7)),r(O,S+1)===re.WATER&&(h.vquad(ne+4,te+4,ne,te+4,be,0,I,3),ve||h.rect(ne,te+4-.35,ne+4,te+4,.014,Me,7)),r(O,S-1)===re.WATER&&(h.vquad(ne,te,ne+4,te,be,0,I,3),ve||h.rect(ne,te,ne+4,te+.35,.014,Me,7)),ve){let Ce=Ue("#a9a69e");r(O+1,S)===re.WATER&&u.box(ne+4-.3,0,te,ne+4,.95,te+4,Ce),r(O-1,S)===re.WATER&&u.box(ne,0,te,ne+.3,.95,te+4,Ce),r(O,S+1)===re.WATER&&u.box(ne,0,te+4-.3,ne+4,.95,te+4,Ce),r(O,S-1)===re.WATER&&u.box(ne,0,te,ne+4,.95,te+.3,Ce)}else if(n[S*e+O]&4&&i[S*e+O]===re.PLAZA){let Ce=Ue("#4a4f55");r(O,S+1)===re.WATER&&u.box(ne,0,te+4-.32,ne+4,.9,te+4-.18,Ce),r(O,S-1)===re.WATER&&u.box(ne,0,te+.18,ne+4,.9,te+.32,Ce)}}let Re=(S,O)=>Ue(S[Math.floor(O*S.length)%S.length]);for(let S of s.buildings){let O=Jm[S.style],ie=Re(O.walls,S.colorSeed),ne=Re(O.win,S.roofSeed),te=O.roof?Re(O.roof,S.roofSeed*7.31%1):Yt(ie,1.08),ve=O.floorH,be=S.h;S.style!==6&&!S.gable&&(be=Math.max(1,Math.round((be-.6)/ve))*ve+.6,S.h=be);let I=S.x0*4,Ce=S.z0*4,Oe=S.x1*4,ze=S.z1*4,St=(I+Oe)/2,pt=(Ce+ze)/2;h.at(St,pt),d.at(St,pt),u.at(St,pt),p.at(St,pt);let nt={col:ie,win:ne,floorH:ve,bayW:O.bayW,winW:O.winW,winH:O.winH,kind:O.kind,seed:S.colorSeed*10,top:be};if(S.special==="police"&&(nt.col=Ue("#c9cdd2"),te=Ue("#7f858c")),S.special==="hospital"&&(nt.col=Ue("#e9e6df"),te=Ue("#a7a8a6")),S.special==="paint"&&(nt.col=Ue("#d8d2c1"),nt.kind=2,te=Ue("#7f8489")),S.gable){let y=Oe-I,w=ze-Ce,X=Math.min(y,w)*.32,Y=Math.max(2.8,be-X);nt.top=Y;let W=0;W=d.wall(I,Ce,Oe,Ce,0,Y,W,nt),W=d.wall(Oe,Ce,Oe,ze,0,Y,W,nt),W=d.wall(Oe,ze,I,ze,0,Y,W,nt),d.wall(I,ze,I,Ce,0,Y,W,nt);let Q=.45,he=te;if(S.ridgeX){let fe=(Ce+ze)/2;d.gable(I,ze,I,Ce,Y,be,{...nt,winW:0}),d.gable(Oe,Ce,Oe,ze,Y,be,{...nt,winW:0});let _e=[0,w/2,-(be-Y)],je=Oi(0,.83,-.55),rt=Oi(0,.83,.55);h.quad([I-Q,Y-.15,Ce-Q],[I-Q,be,fe],[Oe+Q,be,fe],[Oe+Q,Y-.15,Ce-Q],Yt(he,je),10),h.quad([Oe+Q,Y-.15,ze+Q],[Oe+Q,be,fe],[I-Q,be,fe],[I-Q,Y-.15,ze+Q],Yt(he,rt),10),u.box(I-Q,be-.05,fe-.14,Oe+Q,be+.12,fe+.14,Yt(he,.8))}else{let fe=(I+Oe)/2;d.gable(I,Ce,Oe,Ce,Y,be,{...nt,winW:0}),d.gable(Oe,ze,I,ze,Y,be,{...nt,winW:0});let _e=Oi(-.55,.83,0),je=Oi(.55,.83,0);h.quad([I-Q,Y-.15,ze+Q],[fe,be,ze+Q],[fe,be,Ce-Q],[I-Q,Y-.15,Ce-Q],Yt(he,_e),10),h.quad([Oe+Q,Y-.15,Ce-Q],[fe,be,Ce-Q],[fe,be,ze+Q],[Oe+Q,Y-.15,ze+Q],Yt(he,je),10),u.box(fe-.14,be-.05,Ce-Q,fe+.14,be+.12,ze+Q,Yt(he,.8))}if(S.colorSeed>.4){let fe=I+(Oe-I)*(.25+S.roofSeed*.5),_e=Ce+(ze-Ce)*.3;u.box(fe-.4,Y,_e-.4,fe+.4,be+.8,_e+.4,Ue("#7b4a3c"))}p.boxShadow(I,Ce,Oe,ze,be*.85);continue}let yt=0;yt=d.wall(I,Ce,Oe,Ce,0,be,yt,nt),yt=d.wall(Oe,Ce,Oe,ze,0,be,yt,nt),yt=d.wall(Oe,ze,I,ze,0,be,yt,nt),d.wall(I,ze,I,Ce,0,be,yt,nt);let Ut=S.style===6?11:O.roofPat;h.rect(I,Ce,Oe,ze,be,S.style===6?Yt(ie,1.12):te,Ut);let Qt=be;for(let y of S.tiers){let w=y.x0*4,X=y.z0*4,Y=y.x1*4,W=y.z1*4,Q=Math.round((y.h-be)/ve)*ve+be,he={...nt,top:Q},fe=0;fe=d.wall(w,X,Y,X,be,Q,fe,he),fe=d.wall(Y,X,Y,W,be,Q,fe,he),fe=d.wall(Y,W,w,W,be,Q,fe,he),d.wall(w,W,w,X,be,Q,fe,he),h.rect(w,X,Y,W,Q,Yt(te,.95),8),R(S,w,X,Y,W,Q,ie,te,!0),Qt=Math.max(Qt,Q),p.boxShadow(w,X,Y,W,Q)}S.tiers.length?C(I,Ce,Oe,ze,be,ie):R(S,I,Ce,Oe,ze,be,ie,te,!1),p.boxShadow(I,Ce,Oe,ze,be)}function C(S,O,ie,ne,te,ve){let Ce=Yt(ve,1.12),Oe=Yt(ve,1);u.box(S,te,O,ie,te+.75,O+.32,Ce,Oe),u.box(S,te,ne-.32,ie,te+.75,ne,Ce,Oe),u.box(S,te,O+.32,S+.32,te+.75,ne-.32,Ce,Oe),u.box(ie-.32,te,O+.32,ie,te+.75,ne-.32,Ce,Oe)}function R(S,O,ie,ne,te,ve,be,I,Ce){let Oe=ne-O,ze=te-ie,St=Oe*ze,pt=new An(Math.floor(S.roofSeed*1e6)+(Ce?99:0)),nt=S.style;if(nt===6)return;if(nt===5){for(let y=O+2;y<ne-2;y+=4)h.rect(y,ie+1.2,y+1.2,te-1.2,ve+.02,Ue("#a7b7c0"),3);for(let y=0;y<2;y++)u.prism(O+1.5+pt.next()*(Oe-3),ie+1.5+pt.next()*(ze-3),.35,ve,ve+1.1,6,Ue("#7d8287"),Ue("#5d6166"));return}if(S.special){C(O,ie,ne,te,ve,be);return}C(O,ie,ne,te,ve,be);let yt=1.4,Ut=(y,w)=>y+pt.next()*(w-y);if(ve>9&&St>70){let y=Ut(O+yt,ne-yt-3),w=Ut(ie+yt,te-yt-3);u.box(y,ve,w,y+3,ve+2.6,w+2.6,Yt(I,1.1),Yt(be,.95)),u.box(y+.8,ve+2.6,w+.8,y+2.2,ve+3,w+1.8,Ue("#6d7075"))}if(nt===0&&St>=140&&pt.chance(.3)){let y=(O+ne)/2,w=(ie+te)/2;h.rect(y-3.6,w-3.6,y+3.6,w+3.6,ve+.03,Ue("#3b3e42"),3),h.fan(y,w,ve+.05,3,24,Ue("#e1bf3a"),3,2.7),h.rect(y-1.1,w-1.4,y-.65,w+1.4,ve+.06,Ue("#ece9e2"),3),h.rect(y+.65,w-1.4,y+1.1,w+1.4,ve+.06,Ue("#ece9e2"),3),h.rect(y-.65,w-.22,y+.65,w+.22,ve+.06,Ue("#ece9e2"),3);return}let Qt=Math.min(4,Math.floor(St/45));for(let y=0;y<Qt;y++){let w=Ut(O+yt,ne-yt-1.6),X=Ut(ie+yt,te-yt-1.2);u.box(w,ve,X,w+1.6,ve+1,X+1.2,Ue("#c3c6c8"),Ue("#a9adb0")),u.prism(w+.8,X+.6,.38,ve+1,ve+1.06,8,Ue("#4a4d51"),Ue("#3f4246"))}if((nt===2||nt===3)&&St>50&&pt.chance(.45)){let y=Ut(O+2.2,ne-2.2),w=Ut(ie+2.2,te-2.2);for(let[X,Y]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])u.box(y+X-.08,ve,w+Y-.08,y+X+.08,ve+1.1,w+Y+.08,Ue("#4a4643"));u.prism(y,w,1.25,ve+1.1,ve+3.2,10,Ue("#7a5a3c"),null),u.cone(y,w,1.35,ve+3.2,ve+4.1,10,Ue("#5b4330"))}if((nt===1||nt===7)&&pt.chance(.4)){let y=Ut(O+yt,ne-yt-2.6),w=Ut(ie+yt,te-yt-1.4);u.box(y,ve,w,y+2.6,ve+.3,w+1.4,Ue("#7f9db3"),Ue("#9aa3aa"))}for(let y=0;y<2;y++){let w=Ut(O+yt,ne-yt),X=Ut(ie+yt,te-yt);u.box(w-.22,ve,X-.22,w+.22,ve+.7,X+.22,Ue("#7c7f83"))}}let V=["#3f7a35","#4d8a3c","#2f6b33","#5b8f3a","#46803f"].map(Ue);for(let S of s.trees){u.at(S.x,S.z),p.at(S.x,S.z);let O=new An(Math.floor(S.seed*1e6)),ie=()=>O.next();if(S.kind==="palm"){let te=ie()*Math.PI*2,ve=Math.cos(te)*.6,be=Math.sin(te)*.6,I=S.x+ve,Ce=S.z+be,Oe=S.h;u.box(S.x-.18,0,S.z-.18,S.x+.18,Oe*.5,S.z+.18,Ue("#8a7353")),u.box((S.x+I)/2-.16,Oe*.5,(S.z+Ce)/2-.16,(S.x+I)/2+.16,Oe,(S.z+Ce)/2+.16,Ue("#8a7353"));let ze=7;for(let St=0;St<ze;St++){let pt=St/ze*Math.PI*2+ie()*.4,nt=Math.cos(pt),yt=Math.sin(pt),Ut=-yt,Qt=nt,y=S.r*(.9+ie()*.3),w=[I,Oe,Ce],X=[I+nt*y*.55,Oe+.25,Ce+yt*y*.55],Y=[I+nt*y,Oe-.9,Ce+yt*y],W=.55,Q=Yt(Ue("#4f8f3a"),.85+ie()*.3);u.quad(w,[X[0]-Ut*W,X[1],X[2]-Qt*W],X,[X[0]+Ut*W,X[1],X[2]+Qt*W],Q),u.tri([X[0]-Ut*W,X[1],X[2]-Qt*W],Y,[X[0]+Ut*W,X[1],X[2]+Qt*W],Yt(Q,.92))}p.circle(I+_i*Oe,Ce+Mi*Oe,S.r*.7,.03,7);continue}let ne=V[Math.floor(ie()*V.length)];u.box(S.x-.18,0,S.z-.18,S.x+.18,Math.min(1.4,S.h*.3),S.z+.18,Ue("#5d4632")),u.blob(S.x,S.h,S.z,S.r,.72,ne,ie,S.r>2.1?1:0),u.blob(S.x+S.r*.45,S.h+.3,S.z-S.r*.35,S.r*.62,.8,Yt(ne,1.1),ie,0),p.circle(S.x+_i*S.h,S.z+Mi*S.h,S.r*.95,.03,9)}for(let S of s.lamps){u.at(S.x,S.z);let O=Ue("#7a7e85");u.box(S.x-.07,0,S.z-.07,S.x+.07,4.2,S.z+.07,O);let ie=S.x+S.dx*1.1,ne=S.z+S.dz*1.1;u.box(Math.min(S.x,ie)-.05,4.1,Math.min(S.z,ne)-.05,Math.max(S.x,ie)+.05,4.2,Math.max(S.z,ne)+.05,O),u.box(ie-.26,3.98,ne-.26,ie+.26,4.18,ne+.26,Ue("#e6e1cf"),Ue("#a6a397")),p.at(S.x,S.z),p.circle(ie+_i*4,ne+Mi*4,.3,.03,6)}for(let S of s.phones){u.at(S.x,S.z),p.at(S.x,S.z);let O=Math.cos(S.face),ie=Math.sin(S.face);u.box(S.x-.5,0,S.z-.5,S.x+.5,2.25,S.z+.5,Ue("#2c66c4"),Ue("#24539f")),u.box(S.x-.58,2.25,S.z-.58,S.x+.58,2.4,S.z+.58,Ue("#e8eef5")),u.box(S.x+O*.5-.3-Math.abs(ie)*0,.9,S.z+ie*.5-.3,S.x+O*.5+.3,1.8,S.z+ie*.5+.3,Ue("#9fc3e6")),p.circle(S.x+_i*2.3,S.z+Mi*2.3,.55,.03,6)}for(let S of s.props)u.at(S.x,S.z),p.at(S.x,S.z),S.kind==="fountain"?(u.prism(S.x,S.z,1.75,0,.55,12,Ue("#a9a291"),Ue("#c2bba9")),u.prism(S.x,S.z,1.45,.4,.5,12,Ue("#4f97b8"),Ue("#62a9c7")),u.prism(S.x,S.z,.3,.5,1.6,8,Ue("#b4ad9c"),Ue("#c7c0ae")),u.prism(S.x,S.z,.75,1.6,1.75,10,Ue("#b4ad9c"),Ue("#5fa5c4"))):S.kind==="statue"?(u.box(S.x-.9,0,S.z-.9,S.x+.9,1.4,S.z+.9,Ue("#a8a296")),u.box(S.x-.32,1.4,S.z-.22,S.x+.32,3.2,S.z+.22,Ue("#56645a")),u.prism(S.x,S.z,.22,3.2,3.6,8,Ue("#56645a"),Ue("#607066")),p.circle(S.x+_i*2,S.z+Mi*2,1,.03,8)):S.kind==="bollard"&&u.prism(S.x,S.z,.28,0,.8,8,Ue("#2f3236"),Ue("#d3b23a"));let H=[],U=[],B=[],E=(S,O,ie,ne)=>{let te=H.length/3;H.push(S-ne,O,ie-ne,S-ne,O,ie+ne,S+ne,O,ie+ne,S+ne,O,ie-ne),U.push(0,0,0,1,1,1,1,0),B.push(te,te+1,te+2,te,te+2,te+3)};for(let S of s.lamps){let O=S.x+S.dx*1.1,ie=S.z+S.dz*1.1;E(O,.05,ie,6),E(O,4.25,ie,.9)}for(let S of s.phones)E(S.x,2.5,S.z,1.2);let N=new Mt;N.setAttribute("position",new ke(H,3)),N.setAttribute("uv",new ke(U,2)),N.setIndex(B),N.computeBoundingSphere();let j=new zt({transparent:!0,depthWrite:!1,blending:yi,uniforms:{uNight:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uNight; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * 2.0; float a = pow(max(0.0, 1.0 - d), 2.0) * uNight * 0.9;
        gl_FragColor = vec4(vec3(1.0, 0.8, 0.5) * a, a); }`}),me=new st(N,j);me.frustumCulled=!1,me.renderOrder=4,me.visible=!1;let q=e+1,pe=(S,O)=>{let ie=r(S,O);return ie===re.WATER||ie===re.BRIDGE},de=new Float32Array(q*(t+1)).fill(99),xe=[];for(let S=0;S<=t;S++)for(let O=0;O<=e;O++){let ie=!1;for(let[ne,te]of[[-1,-1],[0,-1],[-1,0],[0,0]]){let ve=O+ne,be=S+te;ve<0||be<0||ve>=e||be>=t||pe(ve,be)||(ie=!0)}ie&&(de[S*q+O]=0,xe.push(S*q+O))}for(let S=0;S<xe.length;S++){let O=xe[S],ie=O%q,ne=O/q|0,te=de[O];if(!(te>=6))for(let[ve,be]of[[1,0],[-1,0],[0,1],[0,-1]]){let I=ie+ve,Ce=ne+be;if(I<0||Ce<0||I>e||Ce>t)continue;let Oe=Ce*q+I;de[Oe]>te+1&&(de[Oe]=te+1,xe.push(Oe))}}let Ee=[],Ie=[],Fe=[];for(let S=0;S<=t;S++)for(let O=0;O<=e;O++)Ee.push(O*4,qa,S*4),Ie.push(Math.min(de[S*q+O],8));for(let S=0;S<t;S++)for(let O=0;O<e;O++){if(!pe(O,S))continue;let ie=S*q+O,ne=ie+1,te=ie+q,ve=te+1;Fe.push(ie,te,ve,ie,ve,ne)}let qe=new Mt;qe.setAttribute("position",new ke(Ee,3)),qe.setAttribute("shore",new ke(Ie,1)),qe.setIndex(Fe),qe.computeBoundingSphere();let lt=new st(qe,c.water);lt.frustumCulled=!1;let tt=new vi(4e3,4e3).rotateX(-Math.PI/2);tt.translate(e*4/2,qa-.05,t*4/2),tt.setAttribute("shore",new ke(new Float32Array(tt.attributes.position.count).fill(8),1));let Ge=new st(tt,c.water);Ge.frustumCulled=!1,Ge.renderOrder=-2;let ut=new ci,xt=(S,O=0)=>{for(let ie of S)ie.renderOrder=O,ut.add(ie);return S},Tt=xt(h.build(c.ground));xt(d.build(c.wall)),xt(u.build(c.props)),xt(p.build(c.shadow),1),lt.renderOrder=-1,ut.add(lt,Ge,me);for(let S of Object.values(s.specials)){let O=S.building,ie=$m(O.special),ne=(O.x1-O.x0)*4-1.4,te=(O.z1-O.z0)*4-1.4,ve=ne>=te,be=ve?ne:te,I=Math.min(ve?te:ne,be*.5),Ce=new vi(be,I).rotateX(-Math.PI/2);ve||Ce.rotateY(Math.PI/2);let Oe=new st(Ce,new Et({map:ie,transparent:!0}));Oe.position.set((O.x0+O.x1)/2*4,O.h+.06,(O.z0+O.z1)/2*4),ut.add(Oe)}let He={flat:h.n,walls:d.n,props:u.n,shadows:p.n};return{group:ut,mats:c,noise:l,stats:He,setTime(S){c.water.uniforms.uTime.value=S},setNight(S,O){for(let ie of["ground","wall","water"])c[ie].uniforms.uNight.value=S,c[ie].uniforms.uTint.value.copy(O);c.props.color.copy(O),c.shadow.opacity=.3*(1-S*.65),j.uniforms.uNight.value=S,me.visible=S>.02}}}function $m(s){let e=document.createElement("canvas");e.width=512,e.height=256;let t=e.getContext("2d");t.clearRect(0,0,512,256);let i=(r,a,o,l,c)=>{t.beginPath(),t.roundRect?t.roundRect(r,a,o,l,c):t.rect(r,a,o,l)};if(s==="police")t.fillStyle="#1d3f8f",i(8,8,496,240,26),t.fill(),t.strokeStyle="#f5f5f0",t.lineWidth=10,i(22,22,468,212,18),t.stroke(),t.fillStyle="#f5f5f0",t.font='bold 112px Impact, "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("POLICE",256,134);else if(s==="hospital")t.fillStyle="#f2f2ee",i(8,8,496,240,26),t.fill(),t.fillStyle="#d1312b",t.fillRect(56,98,120,60),t.fillRect(86,68,60,120),t.font='bold 74px Impact, "Arial Black", sans-serif',t.textAlign="left",t.textBaseline="middle",t.fillText("HOSPITAL",196,132);else{let r=t.createLinearGradient(0,0,512,0);r.addColorStop(0,"#ff3d7f"),r.addColorStop(.5,"#ffc93c"),r.addColorStop(1,"#2fd0c4"),t.fillStyle="#1b1c20",i(8,8,496,240,26),t.fill(),t.fillStyle=r,t.font='bold 104px Impact, "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText("PAINT & GO",256,120),t.fillStyle="#f1efe8",t.font="bold 36px sans-serif",t.fillText("RESPRAY  •  $500",256,205)}let n=new Rs(e);return n.anisotropy=4,n}var Ya=null;function cd(s){let{W:e,H:t}=s;Ya=new Array(e*t);let i=(n,r,a)=>{let o=Math.floor((n-a)/4),l=Math.floor((n+a)/4),c=Math.floor((r-a)/4),h=Math.floor((r+a)/4);for(let d=c;d<=h;d++)for(let u=o;u<=l;u++){if(u<0||d<0||u>=e||d>=t)continue;let p=d*e+u;(Ya[p]||(Ya[p]=[])).push({x:n,z:r,r:a})}};for(let n of s.trees)i(n.x,n.z,n.kind==="palm"?.35:.42);for(let n of s.props)i(n.x,n.z,n.r)}function Qm(s,e){let t=x.city;return s<0||e<0||s>=t.W||e>=t.H?!0:ui[t.tiles[e*t.W+s]]===1}function sh(s,e,t){let i=x.city,n=null,r=Math.floor((s-t)/4),a=Math.floor((s+t)/4),o=Math.floor((e-t)/4),l=Math.floor((e+t)/4);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){if(Qm(h,c)){let d=h*4,u=c*4,p=d+4,f=u+4,v=s<d?d:s>p?p:s,m=e<u?u:e>f?f:e,g=s-v,_=e-m,M=g*g+_*_,b,P,A;if(M>1e-9){if(M>=t*t)continue;let D=Math.sqrt(M);b=g/D,P=_/D,A=t-D}else{let D=s-d,z=p-s,k=e-u,Z=f-e,K=Math.min(D,z,k,Z);K===D?(b=-1,P=0):K===z?(b=1,P=0):K===k?(b=0,P=-1):(b=0,P=1),A=K+t}(!n||A>n.depth)&&(n={nx:b,nz:P,depth:A,px:v,pz:m,kind:"wall"})}if(h>=0&&c>=0&&h<i.W&&c<i.H){let d=Ya[c*i.W+h];if(d)for(let u of d){let p=s-u.x,f=e-u.z,v=t+u.r,m=p*p+f*f;if(m>=v*v||m<1e-9)continue;let g=Math.sqrt(m),_=v-g;(!n||_>n.depth)&&(n={nx:p/g,nz:f/g,depth:_,px:u.x+p/g*u.r,pz:u.z+f/g*u.r,kind:"prop"})}}}return n}function rh(s,e,t=2){let i=!1;for(let n=0;n<t;n++){let r=sh(s.x,s.z,e);if(!r)break;s.x+=r.nx*r.depth,s.z+=r.nz*r.depth,i=r}return i}function ah(s,e,t,i,n,r=!1){let a=x.city,o=Math.floor(s/4),l=Math.floor(e/4),c=t>0?1:-1,h=i>0?1:-1,d=t!==0?Math.abs(4/t):1/0,u=i!==0?Math.abs(4/i):1/0,p=t!==0?(t>0?(o+1)*4-s:s-o*4)/Math.abs(t):1/0,f=i!==0?(i>0?(l+1)*4-e:e-l*4)/Math.abs(i):1/0,v=0;for(let m=0;m<200;m++){if((o<0||l<0||o>=a.W||l>=a.H?!0:r?a.tiles[l*a.W+o]===re.BUILDING:ui[a.tiles[l*a.W+o]]===1)&&m>0)return v;if(p<f?(v=p,p+=d,o+=c):(v=f,f+=u,l+=h),v>n)return n}return n}function Xi(s,e,t,i){let n=t-s,r=i-e,a=Math.hypot(n,r);return a<.01?!0:ah(s,e,n/a,r/a,a,!0)>=a-.01}function oh(s,e,t,i,n,r,a){let o=s-n,l=e-r,c=o*t+l*i,h=o*o+l*l-a*a,d=c*c-h;if(d<0)return-1;let u=Math.sqrt(d),p=-c-u;return p<0&&(p=-c+u),p>=0?p:-1}var Cn=8,Za=class{constructor(){this.map=new Map}clear(){this.map.clear()}key(e,t){return e*73856093^t*19349663}insert(e,t,i,n){let r=Math.floor((t-n)/Cn),a=Math.floor((t+n)/Cn),o=Math.floor((i-n)/Cn),l=Math.floor((i+n)/Cn);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let d=this.key(h,c),u=this.map.get(d);u||(u=[],this.map.set(d,u)),u.push(e)}}query(e,t,i,n=[]){n.length=0;let r=Math.floor((e-i)/Cn),a=Math.floor((e+i)/Cn),o=Math.floor((t-i)/Cn),l=Math.floor((t+i)/Cn);for(let c=o;c<=l;c++)for(let h=r;h<=a;h++){let d=this.map.get(this.key(h,c));if(d)for(let u of d)n.includes(u)||n.push(u)}return n}};var e0=`
  attribute vec3 iPos;
  attribute vec3 iSize;   // w, h, rotation
  attribute vec4 iColor;
  attribute float iShape;
  varying vec2 vUv;
  varying vec4 vColor;
  varying float vShape;
  void main() {
    vUv = uv;
    vColor = iColor;
    vShape = iShape;
    float c = cos(iSize.z), s = sin(iSize.z);
    vec2 p = vec2(position.x * iSize.x, position.z * iSize.y);
    p = vec2(p.x * c - p.y * s, p.x * s + p.y * c);
    vec3 wp = iPos + vec3(p.x, 0.0, p.y);
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }`,t0=`
  uniform vec3 uTint;
  varying vec2 vUv;
  varying vec4 vColor;
  varying float vShape;
  void main() {
    vec2 d = vUv - 0.5;
    float a;
    if (vShape < 0.5) {            // soft puff
      float r = length(d) * 2.0;
      a = smoothstep(1.0, 0.25, r);
    } else if (vShape < 1.5) {     // hard rect with soft edges (sparks, tracers, debris)
      vec2 e = smoothstep(vec2(0.5), vec2(0.38), abs(d));
      a = e.x * e.y;
    } else if (vShape < 2.5) {     // ring (shockwave)
      float r = length(d) * 2.0;
      a = smoothstep(0.7, 0.85, r) * smoothstep(1.0, 0.9, r);
    } else {                        // hot core: bright centre
      float r = length(d) * 2.0;
      a = smoothstep(1.0, 0.0, r);
      a = a * a;
    }
    gl_FragColor = vec4(vColor.rgb * uTint, vColor.a * a);
  }`,Ka=class{constructor(e,t){this.max=e;let i=new vi(1,1).rotateX(-Math.PI/2),n=new Fa;n.index=i.index,n.setAttribute("position",i.attributes.position),n.setAttribute("uv",i.attributes.uv),this.aPos=new ln(new Float32Array(e*3),3).setUsage(cn),this.aSize=new ln(new Float32Array(e*3),3).setUsage(cn),this.aColor=new ln(new Float32Array(e*4),4).setUsage(cn),this.aShape=new ln(new Float32Array(e),1).setUsage(cn),n.setAttribute("iPos",this.aPos),n.setAttribute("iSize",this.aSize),n.setAttribute("iColor",this.aColor),n.setAttribute("iShape",this.aShape),n.instanceCount=0,this.geo=n,this.mat=new zt({vertexShader:e0,fragmentShader:t0,transparent:!0,depthWrite:!1,blending:t,depthTest:!0,uniforms:{uTint:{value:new Xe(1,1,1)}}}),this.mesh=new st(n,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t===yi?6:5;let r=(a=1)=>new Float32Array(e*a);this.p={x:r(),y:r(),z:r(),vx:r(),vy:r(),vz:r(),life:r(),max:r(),s0:r(),s1:r(),sx:r(),rot:r(),vr:r(),c0:r(4),c1:r(4),drag:r(),grav:r(),shape:r(),stretch:r()},this.n=0}spawn(e){if(this.n>=this.max)return;let t=this.n++,i=this.p;i.x[t]=e.x,i.y[t]=e.y??.5,i.z[t]=e.z,i.vx[t]=e.vx||0,i.vy[t]=e.vy||0,i.vz[t]=e.vz||0,i.life[t]=0,i.max[t]=e.life||1,i.s0[t]=e.size??1,i.s1[t]=e.size1??i.s0[t],i.sx[t]=e.aspect??1,i.rot[t]=e.rot??Ve()*6.28,i.vr[t]=e.vr??0;let n=e.color||[1,1,1,1],r=e.color1||[n[0],n[1],n[2],0];i.c0.set(n,t*4),i.c1.set(r,t*4),i.drag[t]=e.drag??1,i.grav[t]=e.grav??0,i.shape[t]=e.shape??0,i.stretch[t]=e.stretch?1:0}update(e){let t=this.p,i=0,n=this.aPos.array,r=this.aSize.array,a=this.aColor.array,o=this.aShape.array;for(let l=0;l<this.n;l++){if(t.life[l]+=e,t.life[l]>=t.max[l])continue;let c=Math.exp(-t.drag[l]*e);if(t.vx[l]*=c,t.vz[l]*=c,t.vy[l]=t.vy[l]*c+t.grav[l]*e,t.x[l]+=t.vx[l]*e,t.y[l]+=t.vy[l]*e,t.z[l]+=t.vz[l]*e,t.y[l]<.05&&(t.y[l]=.05,t.vy[l]*=-.3,t.vx[l]*=.7,t.vz[l]*=.7),t.rot[l]+=t.vr[l]*e,i!==l){for(let u of["x","y","z","vx","vy","vz","life","max","s0","s1","sx","rot","vr","drag","grav","shape","stretch"])t[u][i]=t[u][l];for(let u=0;u<4;u++)t.c0[i*4+u]=t.c0[l*4+u],t.c1[i*4+u]=t.c1[l*4+u]}let h=t.life[i]/t.max[i],d=t.s0[i]+(t.s1[i]-t.s0[i])*h;if(n[i*3]=t.x[i],n[i*3+1]=t.y[i],n[i*3+2]=t.z[i],t.stretch[i]){let u=Math.hypot(t.vx[i],t.vz[i]);r[i*3]=d*(1+u*.04)*t.sx[i],r[i*3+1]=d*.35,r[i*3+2]=Math.atan2(t.vz[i],t.vx[i])}else r[i*3]=d*t.sx[i],r[i*3+1]=d,r[i*3+2]=t.rot[i];for(let u=0;u<4;u++)a[i*4+u]=t.c0[i*4+u]+(t.c1[i*4+u]-t.c0[i*4+u])*h;o[i]=t.shape[i],i++}this.n=i,this.geo.instanceCount=i,this.aPos.needsUpdate=!0,this.aSize.needsUpdate=!0,this.aColor.needsUpdate=!0,this.aShape.needsUpdate=!0,this.aPos.addUpdateRange?.(0,i*3)}},lh=class{constructor(e){this.max=e,this.pos=new Float32Array(e*4*3),this.col=new Float32Array(e*4*4),this.uv=new Float32Array(e*4*2);let t=new Uint32Array(e*6);for(let n=0;n<e;n++)t.set([n*4,n*4+1,n*4+2,n*4,n*4+2,n*4+3],n*6),this.uv.set([0,0,0,1,1,1,1,0],n*8);let i=new Mt;this.aPos=new Ft(this.pos,3).setUsage(cn),this.aCol=new Ft(this.col,4).setUsage(cn),i.setAttribute("position",this.aPos),i.setAttribute("color",this.aCol),i.setAttribute("uv",new Ft(this.uv,2)),i.setIndex(new Ft(t,1)),i.boundingSphere=new hi(new L,1e6),this.geo=i,this.mat=new zt({transparent:!0,depthWrite:!1,vertexShader:`
        attribute vec4 color; varying vec4 vC; varying vec2 vUv;
        void main(){ vC = color; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        varying vec4 vC; varying vec2 vUv;
        void main(){
          float a = vC.a;
          if (vUv.x > 1.5) { } // unused
          gl_FragColor = vec4(vC.rgb, a);
        }`,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),this.mesh=new st(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2,this.i=0}quad(e,t,i,n,r,a,o,l,c,h){let d=this.i;this.i=(this.i+1)%this.max,this.pos.set([e,c,t,i,c,n,r,c,a,o,c,l],d*12);for(let u=0;u<4;u++)this.col.set(h,d*16+u*4);this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}segment(e,t,i,n,r,a,o=.016){let l=i-e,c=n-t,h=Math.hypot(l,c);if(h<.01)return;let d=-c/h*r/2,u=l/h*r/2;this.quad(e-d,t-u,e+d,t+u,i+d,n+u,i-d,n-u,o,a)}blot(e,t,i,n,r=8){for(let a=0;a<2;a++){let o=a*Math.PI/4+Ve(),l=Math.cos(o)*i,c=Math.sin(o)*i;this.quad(e-l+c,t-c-l,e-l-c,t-c+l,e+l-c,t+c+l,e+l+c,t+c-l,.017,n)}}},Ja=class{constructor(e){this.alpha=new Ka(1400,Iu),this.add=new Ka(1200,yi),this.decals=new lh(1600),e.add(this.decals.mesh,this.alpha.mesh,this.add.mesh),this.shake=0,this.popups=[]}setTint(e){this.alpha.mat.uniforms.uTint.value.copy(e)}update(e){this.alpha.update(e),this.add.update(e),this.shake=Math.max(0,this.shake-e*2.2)}smoke(e,t,i,n=1.2,r=.35,a=1.6){let o=r;this.alpha.spawn({x:e+Se(-.3,.3),y:t,z:i+Se(-.3,.3),vx:Se(-.6,.6)+1.2,vy:Se(1.5,3),vz:Se(-.6,.6)+.6,life:a*Se(.7,1.2),size:n,size1:n*3,color:[o,o,o*1.05,.55],color1:[o,o,o,0],drag:1.2,vr:Se(-1,1)})}fire(e,t,i,n=1){this.add.spawn({x:e+Se(-.4,.4),y:t,z:i+Se(-.4,.4),vx:Se(-.5,.5),vy:Se(2,4),vz:Se(-.5,.5),life:Se(.35,.7),size:n*Se(.8,1.3),size1:n*.3,color:[1,.75,.3,.9],color1:[.9,.2,.05,0],drag:1.5,shape:3})}spark(e,t,i,n=6,r=9,a=[1,.85,.4,1]){for(let o=0;o<n;o++){let l=Ve()*Math.PI*2,c=r*Se(.3,1);this.add.spawn({x:e,y:t,z:i,vx:Math.cos(l)*c,vy:Se(1,5),vz:Math.sin(l)*c,life:Se(.15,.4),size:.25,color:a,color1:[1,.3,.1,0],drag:3,grav:-18,shape:1,stretch:!0})}}dust(e,t,i=4,n=[.7,.66,.58]){for(let r=0;r<i;r++)this.alpha.spawn({x:e+Se(-.3,.3),y:.4,z:t+Se(-.3,.3),vx:Se(-2,2),vy:Se(.5,2),vz:Se(-2,2),life:Se(.4,.8),size:.5,size1:1.4,color:[...n,.5],color1:[...n,0],drag:3})}tracer(e,t,i,n,r=1.2,a=[1,.9,.55,.9]){let o=i-e,l=n-t,c=Math.hypot(o,l);this.add.spawn({x:(e+i)/2,y:r,z:(t+n)/2,life:.06,size:.12,aspect:c/.12,rot:Math.atan2(l,o),color:a,color1:[a[0],a[1],a[2],0],shape:1,drag:0})}muzzle(e,t,i,n,r=!1){let a=r?1.6:1;this.add.spawn({x:e+Math.cos(n)*.3,y:t,z:i+Math.sin(n)*.3,life:.06,size:.55*a,aspect:1.8,rot:n,color:[1,.85,.45,1],color1:[1,.5,.2,0],shape:3,drag:0})}skid(e,t,i,n,r=.45){this.decals.segment(e,t,i,n,.32,[.06,.06,.07,r])}scorch(e,t,i){this.decals.blot(e,t,i,[.05,.045,.04,.72])}explosion(e,t,i=1){let n=i;this.add.spawn({x:e,y:2,z:t,life:.18,size:12*n,size1:16*n,color:[1,.9,.6,.9],color1:[1,.5,.2,0],shape:3,drag:0}),this.add.spawn({x:e,y:.3,z:t,life:.45,size:2*n,size1:22*n,color:[1,.85,.6,.6],color1:[1,.6,.3,0],shape:2,drag:0});for(let r=0;r<26*n;r++){let a=Ve()*Math.PI*2,o=Se(2,9)*n;this.add.spawn({x:e,y:Se(.5,2),z:t,vx:Math.cos(a)*o,vy:Se(2,9),vz:Math.sin(a)*o,life:Se(.4,.9),size:Se(2,4)*n,size1:.6,color:[1,Se(.55,.85),.25,1],color1:[.8,.15,.05,0],drag:2.2,shape:3})}for(let r=0;r<14*n;r++){let a=Ve()*Math.PI*2,o=Se(1,5)*n;this.alpha.spawn({x:e,y:Se(1,3),z:t,vx:Math.cos(a)*o+1,vy:Se(2,6),vz:Math.sin(a)*o+.6,life:Se(1.6,3),size:Se(2,3)*n,size1:7*n,color:[.18,.17,.17,.75],color1:[.32,.31,.3,0],drag:1.4,vr:Se(-1,1)})}for(let r=0;r<12;r++){let a=Ve()*Math.PI*2,o=Se(6,18)*n;this.alpha.spawn({x:e,y:1,z:t,vx:Math.cos(a)*o,vy:Se(5,13),vz:Math.sin(a)*o,life:Se(.6,1.2),size:Se(.25,.5),color:[.12,.12,.13,1],color1:[.12,.12,.13,1],drag:.6,grav:-24,shape:1,vr:Se(-12,12)})}this.spark(e,1,t,16,16),this.scorch(e,t,3.2*n),this.shake=Math.min(1.2,this.shake+.8*n)}splash(e,t){for(let i=0;i<10;i++){let n=Ve()*Math.PI*2,r=Se(1,4);this.alpha.spawn({x:e,y:-1,z:t,vx:Math.cos(n)*r,vy:Se(3,6),vz:Math.sin(n)*r,life:.7,size:.6,size1:1.2,color:[.85,.95,.98,.8],color1:[.85,.95,.98,0],grav:-14,drag:1})}}spray(e,t,i){for(let n=0;n<3;n++)this.alpha.spawn({x:e+Se(-2.5,2.5),y:Se(.5,2.5),z:t+Se(-2.5,2.5),vx:Se(-1,1),vy:Se(0,1),vz:Se(-1,1),life:.9,size:1.2,size1:2.6,color:[...i,.5],color1:[...i,0],drag:2})}};var ph={sedan:{name:"Sedan",L:4.6,W:1.9,H:1.4,maxSpeed:34,accel:10.5,brake:24,grip:21,mass:1.2,health:110,steer:.62},compact:{name:"Compact",L:4,W:1.8,H:1.45,maxSpeed:31,accel:10,brake:24,grip:21,mass:1,health:95,steer:.66},sports:{name:"Sports Car",L:4.4,W:1.95,H:1.15,maxSpeed:48,accel:16,brake:28,grip:25,mass:1.15,health:95,steer:.6},muscle:{name:"Muscle Car",L:4.9,W:2,H:1.36,maxSpeed:43,accel:15,brake:24,grip:18,mass:1.35,health:120,steer:.58},taxi:{name:"Taxi",L:4.7,W:1.92,H:1.62,maxSpeed:35,accel:11,brake:24,grip:21,mass:1.25,health:115,steer:.62},police:{name:"Police Cruiser",L:4.8,W:2,H:1.56,maxSpeed:42,accel:14.5,brake:27,grip:24,mass:1.45,health:160,steer:.62,siren:!0},van:{name:"Van",L:5,W:2.1,H:2.2,maxSpeed:29,accel:8.5,brake:20,grip:17,mass:1.9,health:150,steer:.58},pickup:{name:"Pickup",L:5.2,W:2.05,H:1.7,maxSpeed:34,accel:10.5,brake:22,grip:18,mass:1.7,health:140,steer:.56},truck:{name:"Box Truck",L:7.6,W:2.5,H:3.25,maxSpeed:25,accel:6,brake:17,grip:14,mass:3.2,health:240,steer:.5},bus:{name:"City Bus",L:11,W:2.6,H:3.35,maxSpeed:23,accel:5,brake:15,grip:13,mass:4.2,health:280,steer:.48},ambulance:{name:"Ambulance",L:5.6,W:2.2,H:2.4,maxSpeed:35,accel:10.5,brake:22,grip:18,mass:2.1,health:170,steer:.58,siren:!0},swat:{name:"Armored Van",L:5.8,W:2.4,H:2.5,maxSpeed:37,accel:11.5,brake:22,grip:20,mass:3,health:340,steer:.56,siren:!0},limo:{name:"Limousine",L:7.2,W:2,H:1.38,maxSpeed:35,accel:9.5,brake:21,grip:17,mass:2.2,health:190,steer:.52},armored:{name:"Armored Truck",L:6.6,W:2.5,H:2.85,maxSpeed:28,accel:7.5,brake:19,grip:17,mass:4,health:520,steer:.52}},hd=[["sedan",30],["compact",24],["taxi",10],["van",9],["pickup",9],["sports",4],["muscle",5],["truck",4],["bus",3]];function gd(){let s=0;for(let[,t]of hd)s+=t;let e=Ve()*s;for(let[t,i]of hd)if(e-=i,e<=0)return t;return"sedan"}var i0=["#dcdcd8","#a9adb1","#2b2d31","#1f3a63","#8e1f23","#c43a2c","#2f5d3a","#c9b48a","#5c7fa3","#d9a42a","#e07b2f","#3f8f8a","#6b4a8f","#7a7f84","#9fb7c9","#4e5a3c"],ud={taxi:"#f0bf2a",police:"#1c2c4c",ambulance:"#efefe9",swat:"#252c36",limo:"#17181b",armored:"#55604f",bus:null};function to(s){return ud[s]?ud[s]:s==="bus"?bt(["#d9762b","#2f8f87","#c9433a"]):s==="sports"?bt(["#c43a2c","#d9a42a","#1f3a63","#dcdcd8","#2b2d31","#e07b2f","#3f8f8a"]):bt(i0)}var Ot=[.12,.16,.21],$a=[.98,.96,.82],dd=[.78,.12,.13],pd=[.09,.09,.1],ai=[.17,.18,.2],Sr=[.93,.93,.9],Qa=[.8,.15,.14],n0=[.87,.87,.84],Hs=class{constructor(){this.pos=[],this.col=[],this.idx=[],this.n=0}quad(e,t,i,n,r){let a=t[0]-e[0],o=t[1]-e[1],l=t[2]-e[2],c=i[0]-e[0],h=i[1]-e[1],d=i[2]-e[2],u=o*d-l*h,p=l*c-a*d,f=a*h-o*c,v=Math.hypot(u,p,f)||1,m=Math.min(1.08,Oi(u/v,p/v,f/v)*1.08),g=this.n;this.pos.push(...e,...t,...i,...n);for(let _=0;_<4;_++)this.col.push(r[0]*m,r[1]*m,r[2]*m);this.idx.push(g,g+1,g+2,g,g+2,g+3),this.n+=4}geometry(){let e=new Mt;return e.setAttribute("position",new ke(this.pos,3)),e.setAttribute("color",new ke(this.col,3)),e.setIndex(this.idx),e.computeBoundingSphere(),e}},uh=class{constructor(){this.p=new Hs,this.d=new Hs,this.red=new Hs,this.blue=new Hs}face(e,t,i,n,r){e&&(e==="P"?this.p.quad(t,i,n,r,[1,1,1]):e==="R"?this.red.quad(t,i,n,r,[1,1,1]):e==="B"?this.blue.quad(t,i,n,r,[1,1,1]):this.d.quad(t,i,n,r,e))}box(e,t,i,n,r,a,o,l=o,c=l,h=l){this.face(o,[e,r,i],[e,r,a],[n,r,a],[n,r,i]),this.face(l,[e,t,i],[e,r,i],[n,r,i],[n,t,i]),this.face(c,[n,t,i],[n,r,i],[n,r,a],[n,t,a]),this.face(l,[n,t,a],[n,r,a],[e,r,a],[e,t,a]),this.face(h,[e,t,a],[e,r,a],[e,r,i],[e,t,i])}frustum(e,t,i,n,r,a,o,l){this.face(r,[t[0],n,t[2]],[t[0],n,t[3]],[t[1],n,t[3]],[t[1],n,t[2]]),this.face(a,[e[0],i,e[2]],[t[0],n,t[2]],[t[1],n,t[2]],[e[1],i,e[2]]),this.face(o,[e[1],i,e[2]],[t[1],n,t[2]],[t[1],n,t[3]],[e[1],i,e[3]]),this.face(a,[e[1],i,e[3]],[t[1],n,t[3]],[t[0],n,t[3]],[e[0],i,e[3]]),this.face(l,[e[0],i,e[3]],[t[0],n,t[3]],[t[0],n,t[2]],[e[0],i,e[2]])}wheels(e,t,i=.62){for(let n of e)this.box(n-.37,0,-t-.05,n+.37,i,-t+.2,pd),this.box(n-.37,0,t-.2,n+.37,i,t+.05,pd)}lights(e,t,i,n=.5){this.box(e-.3,i,-t+.1,e-.04,i+.015,-t+.46,$a),this.box(e-.3,i,t-.46,e-.04,i+.015,t-.1,$a),this.box(-e+.03,i,-t+.1,-e+.22,i+.015,-t+.42,dd),this.box(-e+.03,i,t-.42,-e+.22,i+.015,t-.1,dd),this.box(e,n,-t+.1,e+.02,i-.06,-t+.46,null,null,$a),this.box(e,n,t-.46,e+.02,i-.06,t-.1,null,null,$a),this.box(e,.28,-t+.04,e+.09,n,t-.04,ai),this.box(-e-.09,.28,-t+.04,-e,n,t-.04,ai)}};function s0(s){let e=ph[s],t=new uh,i=e.L/2,n=e.W/2;switch(s){case"sedan":case"taxi":case"police":case"limo":{let r=s==="limo";t.box(-i,.3,-n,i,.82,n,"P");let a=r?[-2.5,1.6]:[-1.3,.85],o=r?[-2.15,1.05]:[-.9,.25];t.frustum([a[0],a[1],-n+.07,n-.07],[o[0],o[1],-n+.22,n-.22],.82,1.36,"P",Ot,Ot,Ot),t.lights(i,n,.82),t.wheels(r?[i-1.1,-i+1.1]:[i-.95,-i+.95],n),t.box(.55,.82,-n-.12,.75,.95,-n,"P"),t.box(.55,.82,n,.75,.95,n+.12,"P"),s==="taxi"&&(t.box(-.6,1.36,-.42,-.15,1.6,.42,[.98,.97,.88],[.98,.97,.88]),t.box(-1,.4,-n-.005,.95,.52,-n,null,ai),t.box(-1,.4,n,.95,.52,n+.005,null,ai)),s==="police"&&(t.box(o[0],1.36,-n+.22,o[1],1.37,n-.22,Sr),t.box(-1.25,.35,-n-.006,.95,.78,-n,null,Sr),t.box(-1.25,.35,n,.95,.78,n+.006,null,Sr),t.box(-.55,1.36,-.78,-.15,1.39,.78,ai),t.box(-.52,1.39,-.74,-.18,1.56,-.04,"R","R","R","R"),t.box(-.52,1.39,.04,-.18,1.56,.74,"B","B","B","B")),s==="limo"&&t.box(o[0]+.2,1.36,-.5,o[0]+1.4,1.37,.5,Ot);break}case"compact":{t.box(-i,.3,-n,i,.82,n,"P"),t.frustum([-i+.25,.65,-n+.07,n-.07],[-i+.45,.05,-n+.2,n-.2],.82,1.42,"P",Ot,Ot,Ot),t.lights(i,n,.82),t.wheels([i-.8,-i+.8],n);break}case"sports":{t.box(-i,.26,-n,i,.72,n,"P"),t.frustum([-.95,.7,-n+.1,n-.1],[-.6,.1,-n+.3,n-.3],.72,1.13,"P",Ot,Ot,Ot),t.lights(i,n,.72,.42),t.box(-i+.05,.92,-n+.04,-i+.32,.99,n-.04,"P"),t.box(-i+.12,.72,-.6,-i+.22,.92,-.5,ai),t.box(-i+.12,.72,.5,-i+.22,.92,.6,ai);for(let r of[-1,1])t.box(.7,.72,r*.08-(r<0?.16:0),i-.05,.735,r*.08+(r>0?.16:0),Sr),t.box(-.6,1.13,r*.08-(r<0?.16:0),.1,1.145,r*.08+(r>0?.16:0),Sr);t.wheels([i-.9,-i+.95],n,.58);break}case"muscle":{t.box(-i,.3,-n,i,.88,n,"P"),t.frustum([-1.5,.35,-n+.08,n-.08],[-1.12,-.15,-n+.24,n-.24],.88,1.36,"P",Ot,Ot,Ot),t.lights(i,n,.88),t.box(.85,.88,-.3,1.65,1,.3,ai);for(let r of[-1,1])t.box(-i+.1,.88,r>0?.12:-.38,i-.05,.895,r>0?.38:-.12,[.95,.95,.92]);t.wheels([i-1,-i+1],n);break}case"van":case"ambulance":case"swat":{t.box(-i,.36,-n,i,1.2,n,"P"),t.frustum([-i,i-.85,-n+.02,n-.02],[-i,i-1.35,-n+.1,n-.1],1.2,e.H,"P","P",Ot,"P"),t.lights(i,n,1.2,.7),t.wheels([i-1,-i+1.1],n,.72),s==="ambulance"&&(t.box(-i,1.3,-n-.006,i-.9,1.52,-n,null,Qa),t.box(-i,1.3,n,i-.9,1.52,n+.006,null,Qa),t.box(-1.6,e.H,-.2,-.4,e.H+.012,.2,Qa),t.box(-1.2,e.H,-.62,-.8,e.H+.012,.62,Qa),t.box(.6,e.H,-.85,.95,e.H+.03,.85,ai),t.box(.62,e.H+.03,-.82,.93,e.H+.2,-.04,"R","R","R","R"),t.box(.62,e.H+.03,.04,.93,e.H+.2,.82,"B","B","B","B")),s==="swat"&&(t.box(-1.6,e.H,-.6,-.4,e.H+.12,.6,ai),t.box(.5,e.H,-.95,.85,e.H+.03,.95,ai),t.box(.52,e.H+.03,-.92,.83,e.H+.2,-.04,"R","R","R","R"),t.box(.52,e.H+.03,.04,.83,e.H+.2,.92,"B","B","B","B"),t.box(-i+.3,1,-n-.006,i-1.2,1.25,-n,null,[.85,.85,.8]),t.box(-i+.3,1,n,i-1.2,1.25,n+.006,null,[.85,.85,.8]));break}case"pickup":{t.box(-i,.36,-n,i,.95,n,"P"),t.frustum([-.45,1.25,-n+.05,n-.05],[-.32,.72,-n+.18,n-.18],.95,1.7,"P",Ot,Ot,Ot),t.box(-i+.08,.95,-n+.1,-.5,.98,n-.1,ai),t.box(-i,.95,-n,-.45,1.3,-n+.1,"P"),t.box(-i,.95,n-.1,-.45,1.3,n,"P"),t.box(-i,.95,-n+.1,-i+.1,1.3,n-.1,"P"),t.lights(i,n,.95),t.wheels([i-1,-i+1.05],n,.7);break}case"truck":{t.box(2.1,.5,-n,i,1.9,n,"P"),t.frustum([2.1,i-.05,-n+.02,n-.02],[2.1,i-.5,-n+.1,n-.1],1.9,2.75,"P","P",Ot,"P"),t.box(-i,.7,-n+.02,1.95,e.H,n-.02,n0),t.box(-i+.2,1.55,-n+.015,1.8,1.95,-n+.02,null,"P"),t.box(-i+.2,1.55,n-.02,1.8,1.95,n-.015,null,"P"),t.box(-i,.45,-n+.2,2.1,.7,n-.2,ai),t.lights(i,n,1.9,1),t.wheels([i-.9,-i+1.1,-i+2.2],n,.95);break}case"bus":{t.box(-i,.4,-n,i,3,n,"P"),t.box(-i+.1,3,-n+.06,i-.1,3.03,n-.06,[.92,.92,.88]),t.box(-i+.4,1.55,-n-.012,i-1.2,2.55,-n,null,Ot),t.box(-i+.4,1.55,n,i-1.2,2.55,n+.012,null,Ot),t.box(i,1.15,-n+.1,i+.02,2.75,n-.1,null,null,Ot),t.box(-3.2,3.03,-.85,-1.2,3.38,.85,[.78,.8,.81]),t.box(1,3.03,-.7,2.4,3.3,.7,[.78,.8,.81]),t.lights(i,n,.95,.6),t.wheels([i-2,-i+2.3],n,.95);break}case"armored":{t.box(-i,.45,-n,i,2.75,n,"P"),t.box(i-.02,1.6,-n+.25,i+.01,2.4,n-.25,null,null,Ot),t.box(-1.2,2.75,-.6,.2,2.9,.6,ai),t.box(i-1.4,2.75,-n+.1,i-.2,2.77,n-.1,[.42,.47,.4]),t.lights(i,n,1.2,.8),t.wheels([i-1.1,-i+1.2],n,.95);break}default:t.box(-i,.3,-n,i,e.H,n,"P")}return{paint:t.p.geometry(),detail:t.d.geometry(),red:t.red.n?t.red.geometry():null,blue:t.blue.n?t.blue.geometry():null}}var fd={};function r0(s){return fd[s]||(fd[s]=s0(s))}var Xt={detail:new Et({vertexColors:!0}),burnt:new Et({vertexColors:!0,color:3815994}),red:new Et({color:16722474}),blue:new Et({color:2780159}),glowRed:new Et({color:16719904,transparent:!0,opacity:.5,blending:yi,depthWrite:!1}),glowBlue:new Et({color:2121983,transparent:!0,opacity:.5,blending:yi,depthWrite:!1}),shadow:null},md=new qn(1,16).rotateX(-Math.PI/2),ch={},vd=new zt({transparent:!0,depthWrite:!1,blending:yi,uniforms:{uNight:{value:0}},vertexShader:`attribute vec3 color; attribute float kind; varying vec3 vC; varying vec2 vUv; varying float vK;
    void main(){ vC = color; vUv = uv; vK = kind; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform float uNight; varying vec3 vC; varying vec2 vUv; varying float vK;
    void main(){
      float a;
      if (vK < 0.5) { float across = abs(vUv.y - 0.5) * 2.0; a = pow(1.0 - vUv.x, 1.5) * (1.0 - across * across) * 0.5; }
      else { a = pow(max(0.0, 1.0 - length(vUv - 0.5) * 2.0), 2.0) * 0.9; }
      a *= uNight;
      gl_FragColor = vec4(vC * a, a);
    }`}),hh={};function a0(s){let e=s.L+":"+s.W;if(hh[e])return hh[e];let t=[],i=[],n=[],r=[],a=[],o=(f,v,m,g)=>{let _=t.length/3;for(let M of f)t.push(M[0],M[1],M[2]);i.push(...v);for(let M=0;M<4;M++)n.push(...m),r.push(g);a.push(_,_+1,_+2,_,_+2,_+3)},l=s.L/2,c=s.W/2,h=.06,d=l-.1,u=l+11;o([[d,h,-c*.85],[d,h,c*.85],[u,h,c*2.8],[u,h,-c*2.8]],[0,0,0,1,1,1,1,0],[1,.93,.75],0);for(let f of[-1,1]){let v=-l-.25,m=f*(c-.35),g=.9;o([[v-g,h+.02,m-g],[v-g,h+.02,m+g],[v+g,h+.02,m+g],[v+g,h+.02,m-g]],[0,0,0,1,1,1,1,0],[1,.12,.08],1)}let p=new Mt;return p.setAttribute("position",new ke(t,3)),p.setAttribute("uv",new ke(i,2)),p.setAttribute("color",new ke(n,3)),p.setAttribute("kind",new ke(r,1)),p.setIndex(a),p.computeBoundingSphere(),hh[e]=p}function xd(s,e){vd.uniforms.uNight.value=s,Xt.detail.color.copy(e),Xt.burnt.color.setHex(3815994).multiply(e)}function yd(s){Xt.shadow=s}function _d(s){let t=s*3.2%1<.5;Xt.red.color.setHex(t?16725301:5902352),Xt.blue.color.setHex(t?1056842:3832831),Xt.glowRed.opacity=t?.38:0,Xt.glowBlue.opacity=t?0:.42}var eo=new Xe,dh=class{constructor(e,t,i,n,r){let a=ph[e];this.id=Xa(),this.isVehicle=!0,this.type=e,this.t=a,this.x=t,this.z=i,this.h=n,this.vx=0,this.vz=0,this.w=0,this.vf=0,this.vl=0,this.speed=0,this.health=a.health,this.dead=!1,this.burnTime=0,this.onFire=!1,this.driver=null,this.passengers=[],this.ai=null,this.input={throttle:0,steer:0,brake:0,handbrake:!1},this.paintHex=r||to(e),this.sirenOn=!1,this.horn=0,this.skid=0,this.persistent=!1,this.mission=null,this.locked=!1,this.lastHitBy=null,this.lastCrash=0,this.jumpY=0,this.jumpV=0,this.smokeAcc=0,this.prevWheel=null,this.sinceSeen=0,this.radius=Math.hypot(a.L,a.W)/2,this.mass=a.mass,this.inertia=a.mass*(a.L*a.L+a.W*a.W)/12;let o=a.W/2,l=Math.max(2,Math.ceil(a.L/(a.W*.95)));this.cr=o,this.circles=[];for(let c=0;c<l;c++)this.circles.push(Rn(-a.L/2+o,a.L/2-o,l===1?.5:c/(l-1)));this.buildMesh()}buildMesh(){let e=r0(this.type),t=new ci;this.paintMat=new Et({vertexColors:!0,color:new Xe(this.paintHex)}),this.bodyMesh=new st(e.paint,this.paintMat),this.detailMesh=new st(e.detail,Xt.detail),t.add(this.bodyMesh,this.detailMesh),e.red&&(this.redMesh=new st(e.red,Xt.red),this.blueMesh=new st(e.blue,Xt.blue),t.add(this.redMesh,this.blueMesh),this.glowR=new st(md,Xt.glowRed),this.glowB=new st(md,Xt.glowBlue),this.glowR.scale.setScalar(2.6),this.glowB.scale.setScalar(2.6),this.glowR.position.set(-.2,.08,-1.3),this.glowB.position.set(-.2,.08,1.3),this.glowR.renderOrder=7,this.glowB.renderOrder=7,this.glowR.visible=this.glowB.visible=!1,t.add(this.glowR,this.glowB)),this.lights=new st(a0(this.t),vd),this.lights.renderOrder=4,this.lights.visible=!1,t.add(this.lights),this.mesh=t;let i=this.type;if(!ch[i]){let n=this.t;ch[i]=new vi(n.L*.98,n.W*.96).rotateX(-Math.PI/2)}this.shadow=new st(ch[i],Xt.shadow),this.shadow.renderOrder=1,x.scene.add(t,this.shadow),this.syncMesh()}setPaint(e){this.paintHex=e,this.paintMat.color.set(e)}get fx(){return Math.cos(this.h)}get fz(){return Math.sin(this.h)}doorPos(e=-1){let t=Math.cos(this.h),i=Math.sin(this.h),n=-i,r=t,a=this.t.W/2+.55,o=this.t.L*.08;return{x:this.x+t*o+n*a*e,z:this.z+i*o+r*a*e}}damage(e,t,i="impact"){this.dead||(this.health-=e,t&&(this.lastHitBy=t),this.health<=0&&(i==="explosion"?(!this.onFire||this.burnTime>.6)&&(this.onFire=!0,this.burnTime=Se(.15,.55)):this.health<-80?this.explode():this.onFire||(this.onFire=!0,this.burnTime=Se(2.5,4))))}explode(){this.dead||(this.dead=!0,this.health=0,this.onFire=!1,this.sirenOn=!1,this.paintMat.color.set("#2b2a29"),this.detailMesh.material=Xt.burnt,this.redMesh&&(this.redMesh.visible=!1,this.blueMesh.visible=!1,this.glowR.visible=this.glowB.visible=!1),this.jumpV=6,this.w+=Se(-2,2),x.events.vehicleExploded?.(this))}get asleep(){return!this.driver&&!this.ai&&!this.onFire&&Math.abs(this.vx)+Math.abs(this.vz)<.03&&Math.abs(this.w)<.01&&this.jumpV===0}step(e){if(this.asleep){this.vx=this.vz=this.w=0;return}let t=this.t,i=this.input,n=Math.hypot(this.vx,this.vz);this.h=br(this.h+this.w*e);let r=Math.cos(this.h),a=Math.sin(this.h),o=-a,l=r,c=this.vx*r+this.vz*a,h=this.vx*o+this.vz*l,d=!this.dead&&(this.driver||this.ai),u=d?Ye(i.throttle,-1,1):0,p=d?i.brake:0,f=t.accel*(this.health<t.health*.25?.6:1);if(u>0)if(c<-.5)c=Ns(c,0,t.brake*u*e);else{let k=Ye(c/t.maxSpeed,0,1);c+=f*u*(1-k*k)*e}else if(u<0)if(c>.5)c=Ns(c,0,t.brake*-u*e);else{let k=t.maxSpeed*.32,Z=Ye(-c/k,0,1);c-=f*.65*-u*(1-Z)*e}p>0&&(c=Ns(c,0,t.brake*p*e)),c-=c*.1*e,c=Ns(c,0,(u===0?this.dead?6:2.2:.3)*e);let v=t.grip*(i.handbrake?.3:1)*(this.dead?1.6:1);!d&&!this.dead&&(v*=1.2);let m=Ye(-h,-v*e,v*e);h+=m,c-=Math.sign(c)*Math.abs(m)*.12,i.handbrake&&(c=Ns(c,0,5*e));let g=Math.abs(c),_=Rn(t.steer,t.steer*.3,Ye(g/42,0,1)),M=t.L*.62,b=d?c*Math.tan(Ye(i.steer,-1,1)*_)/M:0,P=Math.max(1.1,v*1.5/Math.max(g,1))*(i.handbrake?1.7:1);b=Ye(b,-P,P);let A=this.dead?2:9;this.w+=(b-this.w)*Math.min(1,e*A),d||(this.w*=Math.exp(-e*2)),this.vf=c,this.vl=h,this.vx=r*c+o*h,this.vz=a*c+l*h,this.x+=this.vx*e,this.z+=this.vz*e,this.speed=Math.hypot(this.vx,this.vz);let D=Math.abs(h),z=D>3?Ye((D-3)/7,0,1):0;(p>.5||u<-.5)&&c>9&&(z=Math.max(z,.6)),i.handbrake&&g>6&&(z=Math.max(z,.8)),u>.9&&c<6&&c>0&&t.accel>12&&(z=Math.max(z,.4)),this.skid=z}collideWorld(e){if(this.asleep)return;let t=Math.cos(this.h),i=Math.sin(this.h),n=0;for(let r=0;r<2;r++){let a=null,o=0;for(let p of this.circles){let f=this.x+t*p,v=this.z+i*p,m=sh(f,v,this.cr);m&&(!a||m.depth>a.depth)&&(a=m,o=p)}if(!a)break;this.x+=a.nx*a.depth,this.z+=a.nz*a.depth;let l=t*o-a.nx*this.cr,c=i*o-a.nz*this.cr,h=this.vx-this.w*c,d=this.vz+this.w*l,u=h*a.nx+d*a.nz;if(u<0){let p=l*a.nz-c*a.nx,v=-(1+.25)*u/(1/this.mass+p*p/this.inertia);this.vx+=v*a.nx/this.mass,this.vz+=v*a.nz/this.mass,this.w+=p*v/this.inertia*.8;let m=-a.nz,g=a.nx,_=this.vx*m+this.vz*g;if(this.vx-=m*_*.18,this.vz-=g*_*.18,n=Math.max(n,-u),-u>2){let M=a.px,b=a.pz;x.events.crash?.(this,-u,M,b,null)}}}n>6&&this.damage((n-6)*3.2,null),this.speed=Math.hypot(this.vx,this.vz)}update(e){let t=this.t;if(this.onFire&&!this.dead){if(this.burnTime-=e,this.smokeAcc+=e,this.smokeAcc>.05){this.smokeAcc=0;let n=Math.cos(this.h),r=Math.sin(this.h);x.fx.fire(this.x+n*t.L*.32,t.H*.8,this.z+r*t.L*.32,1.3),Ve()<.5&&x.fx.smoke(this.x+n*t.L*.3,t.H,this.z+r*t.L*.3,1.2,.18,1.8)}this.burnTime<=0&&this.explode()}else if(!this.dead&&this.health<t.health*.45){if(this.smokeAcc+=e*(1-this.health/(t.health*.45))*1.5,this.smokeAcc>.12){this.smokeAcc=0;let n=Math.cos(this.h),r=Math.sin(this.h),a=this.health<t.health*.2?.2:.5;x.fx.smoke(this.x+n*t.L*.32,t.H*.7,this.z+r*t.L*.32,.8,a,1.4)}}else this.dead&&Ve()<e*3&&x.fx.smoke(this.x+Se(-1,1),t.H,this.z+Se(-1,1),1,.16,2.4);if((this.jumpV!==0||this.jumpY>0)&&(this.jumpV-=22*e,this.jumpY+=this.jumpV*e,this.jumpY<=0&&(this.jumpY=0,this.jumpV=this.jumpV<-3?-this.jumpV*.25:0)),this.skid>.2&&this.speed>2){let n=Math.cos(this.h),r=Math.sin(this.h),a=-r,o=n,l=-t.L*.32,c=t.W*.4,h=[[this.x+n*l+a*c,this.z+r*l+o*c],[this.x+n*l-a*c,this.z+r*l-o*c]];if(this.prevWheel)for(let d=0;d<2;d++)x.fx.skid(this.prevWheel[d][0],this.prevWheel[d][1],h[d][0],h[d][1],.35*this.skid+.1);this.prevWheel=h,Ve()<this.skid*.4&&x.fx.smoke(h[0][0],.3,h[0][1],.5,.75,.8)}else this.prevWheel=null;let i=x.light.tint;if(this.dead)eo.set("#2b2a29");else{let n=.55+.45*Ye(this.health/t.health,0,1);eo.set(this.paintHex).multiplyScalar(n)}if(i&&eo.multiply(i),this.paintMat.color.copy(eo),this.lights.visible=!this.dead&&x.light.night>.05&&!!(this.driver||this.ai),this.redMesh){let n=this.sirenOn&&!this.dead;this.glowR.visible=this.glowB.visible=n,this.redMesh.material=n?Xt.red:Xt.detail,this.blueMesh.material=n?Xt.blue:Xt.detail}this.horn>0&&(this.horn-=e),this.syncMesh()}syncMesh(){let e=this.mesh;e.position.set(this.x,this.jumpY,this.z),e.rotation.set(0,-this.h,0),this.jumpY>0&&(e.rotation.z=Math.sin(this.jumpY)*.1);let t=this.shadow,i=this.t.H*.85+this.jumpY;t.position.set(this.x+_i*i,.03,this.z+Mi*i),t.rotation.y=-this.h}remove(){x.scene.remove(this.mesh,this.shadow),this.paintMat.dispose(),this.removed=!0}worldCircles(e=[]){e.length=0;let t=Math.cos(this.h),i=Math.sin(this.h);for(let n of this.circles)e.push(this.x+t*n,this.z+i*n);return e}},Bs=[],Fs=[];function Md(s,e){let t=s.x-e.x,i=s.z-e.z,n=s.radius+e.radius;if(t*t+i*i>n*n)return;s.worldCircles(Bs),e.worldCircles(Fs);let r=null;for(let k=0;k<Bs.length;k+=2)for(let Z=0;Z<Fs.length;Z+=2){let K=Bs[k]-Fs[Z],J=Bs[k+1]-Fs[Z+1],ee=s.cr+e.cr,$=K*K+J*J;if($>=ee*ee)continue;let oe=Math.sqrt($)||.001,le=ee-oe;(!r||le>r.depth)&&(r={nx:K/oe,nz:J/oe,depth:le,ax:Bs[k],az:Bs[k+1],bx:Fs[Z],bz:Fs[Z+1]})}if(!r)return;let a=1/s.mass,o=1/e.mass,l=r.depth/(a+o);s.x+=r.nx*l*a,s.z+=r.nz*l*a,e.x-=r.nx*l*o,e.z-=r.nz*l*o;let c=(r.ax+r.bx)/2,h=(r.az+r.bz)/2,d=c-s.x,u=h-s.z,p=c-e.x,f=h-e.z,v=s.vx-s.w*u,m=s.vz+s.w*d,g=e.vx-e.w*f,_=e.vz+e.w*p,M=(v-g)*r.nx+(m-_)*r.nz;if(M>=0)return;let b=d*r.nz-u*r.nx,P=p*r.nz-f*r.nx,D=-(1+.3)*M/(a+o+b*b/s.inertia+P*P/e.inertia);s.vx+=D*r.nx*a,s.vz+=D*r.nz*a,e.vx-=D*r.nx*o,e.vz-=D*r.nz*o,s.w+=b*D/s.inertia*.7,e.w-=P*D/e.inertia*.7;let z=-M;if(z>4){let k=(z-4)*2.6;s.damage(k*(e.mass/(s.mass+e.mass))*2,e.driver==="player"?"player":e),e.damage(k*(s.mass/(s.mass+e.mass))*2,s.driver==="player"?"player":s)}z>1.5&&x.events.crash?.(s,z,c,h,e)}function qi(s,e,t,i,n={}){let r=new dh(s,e,t,i,n.paint);return n.speed&&(r.vx=Math.cos(i)*n.speed,r.vz=Math.sin(i)*n.speed,r.speed=n.speed),x.vehicles.push(r),r}function Pn(s){s.remove();let e=x.vehicles.indexOf(s);e>=0&&x.vehicles.splice(e,1)}var bd=["#c8423a","#3f6fb5","#e6e2d6","#2f8a5c","#d7a630","#7c4a9e","#e07d4a","#4b5563","#9fc2d8","#b63c75","#5f7f3a","#2b2d31","#d8cbb0","#3c9c9a"],o0=["#2c3e66","#1f2124","#6b5a43","#4a4f57","#384a6c","#7a6f60","#26364f"],l0=["#1b1714","#3a2a1e","#5a3d25","#b98d4f","#8a8a86","#7a3b22","#2a2422","#d9c38a"],c0=["#e0b896","#c99772","#a3714d","#7a5136","#f0cdb0","#5a3a26"],h0={civ:{},player:{shirt:"#f2b51e",pants:"#25282d",hair:"#191513",sleeves:"#f2b51e"},cop:{shirt:"#24365f",pants:"#1b2238",hair:"#141c33",sleeves:"#24365f"},swat:{shirt:"#2a2f36",pants:"#1f2328",hair:"#1a1d22",sleeves:"#2a2f36"},thug:{shirt:"#1d1e22",pants:"#2b2f35",hair:"#c4262e",sleeves:"#1d1e22"},vip:{shirt:"#ecebe4",pants:"#ecebe4",hair:"#4a3a2a",sleeves:"#ecebe4"},crew:{shirt:"#3b3f46",pants:"#202226",hair:"#e2c060",sleeves:"#3b3f46"}},mh=class{constructor(e,t,i,n=Ve()*Math.PI*2){this.id=Xa(),this.isPed=!0,this.kind=e,this.x=t,this.z=i,this.h=n,this.y=0,this.vx=0,this.vz=0,this.speed=0,this.health=e==="cop"?90:e==="swat"?160:e==="player"?100:e==="thug"?80:50,this.maxHealth=this.health,this.armor=0,this.alive=!0,this.state="walk",this.brain=null,this.anim=Ve()*6,this.aimT=0,this.weapon=null,this.ammo=0,this.fireCd=0,this.walkSpeed=Se(1.15,1.6),this.runSpeed=Se(4.2,5.2),this.lane=Se(-1,1),this.dir=null,this.dest=null,this.crossing=!1,this.timer=0,this.fleeX=0,this.fleeZ=0,this.vehicle=null,this.hidden=!1,this.slot=-1,this.persistent=!1,this.onFire=0,this.radius=.38,this.lastHitBy=null;let r=h0[e]||{},a=bt(c0),o=r.shirt||bt(bd);this.colors={shirt:o,pants:r.pants||bt(o0),hair:r.hair||(Ve()<.15?bt(bd):bt(l0)),sleeves:r.sleeves||(Ve()<.55?o:a)},x.pedRender?.alloc(this)}get tileX(){return Math.floor(this.x/4)}get tileZ(){return Math.floor(this.z/4)}hit(e,t,i,n,r="bullet"){if(!this.alive)return;if(this.armor>0&&r!=="car"){let l=Math.min(this.armor,e*.7);this.armor-=l,e-=l}this.health-=e,this.lastHitBy=n;let a=Math.hypot(t,i)||1;t/=a,i/=a;let o=r==="car"||r==="explosion"||this.health<=0||e>=45;if(r==="fire"&&(this.onFire=Math.max(this.onFire,2.5)),o){this.state="down",this.timer=0;let l=r==="car"?Ye(e*.12,3,11):r==="explosion"?8:2.5;this.vx=t*l,this.vz=i*l,this.h=Math.atan2(i,t),this.vehicle&&(this.vehicle=null)}this.health<=0?(this.health=0,this.alive=!1,this.state="dead",this.timer=0,this.weapon=null,x.events.pedKilled?.(this,n,r)):(x.events.pedHurt?.(this,n,r),!o&&!this.brain&&this.startFlee(this.x-t*5,this.z-i*5,6))}startFlee(e,t,i=Se(4,8)){!this.alive||this.brain||this.state==="down"||(this.state="flee",this.fleeX=e,this.fleeZ=t,this.timer=i,this.dest=null)}update(e){if(!this.hidden){switch(this.fireCd>0&&(this.fireCd-=e),this.aimT>0&&(this.aimT-=e),this.onFire>0&&(this.onFire-=e,Ve()<e*18&&x.fx.fire(this.x+Se(-.2,.2),1.2,this.z+Se(-.2,.2),.8),this.alive&&(this.health-=e*22,this.health<=0?this.hit(1,0,1,this.lastHitBy,"fire"):!this.brain&&this.state!=="down"&&this.startFlee(this.x+Se(-3,3),this.z+Se(-3,3),2))),this.state){case"down":case"dead":{let t=Math.exp(-e*5);this.vx*=t,this.vz*=t,this.x+=this.vx*e,this.z+=this.vz*e,rh(this,this.radius),this.speed=0,this.timer+=e,this.state==="down"&&this.timer>2.4&&this.alive&&(this.brain?this.state="custom":this.startFlee(this.x+this.vx,this.z+this.vz,6));return}case"custom":this.brain(this,e);break;case"flee":this.fleeStep(e);break;case"idle":this.timer-=e,this.vx=this.vz=0,this.timer<=0&&(this.state="walk");break;case"dive":this.timer-=e,this.timer<=0&&this.startFlee(this.x-this.vx,this.z-this.vz,3);break;default:this.wander(e)}this.integrate(e)}}integrate(e){this.x+=this.vx*e,this.z+=this.vz*e,rh(this,this.radius)&&this.state==="flee"&&(this.dest=null);let i=Math.hypot(this.vx,this.vz);if(this.speed=i,i>.2&&this.aimT<=0){let n=Math.atan2(this.vz,this.vx);this.h=br(this.h+Ye(Jt(n,this.h),-e*10,e*10))}this.anim+=i*e*3.1}moveTo(e,t,i){let n=e-this.x,r=t-this.z,a=Math.hypot(n,r);if(a<.05)return this.vx=this.vz=0,a;let o=Math.min(i,a*6);return this.vx=n/a*o,this.vz=r/a*o,a}wander(e){let t=x.q;if(this.dest||this.pickDest(),!this.dest){this.vx=this.vz=0;return}this.moveTo(this.dest.x,this.dest.z,this.walkSpeed)<.35&&(this.dest=null,!this.crossing&&Ve()<.015&&(this.state="idle",this.timer=Se(1,4))),!this.crossing&&t.tileAt(this.x,this.z)===re.ROAD&&(this.crossing=!0)}pickDest(){let e=x.city,t=x.q,i=this.tileX,n=this.tileZ,r=t.tileXZ(i,n),a=[[1,0],[-1,0],[0,1],[0,-1]],o=(u,p)=>hn[t.tileXZ(u,p)]===1;if(this.crossing)if(hn[r]&&r!==re.ROAD)this.crossing=!1;else{let u=this.dir||bt(a),p=t.tileXZ(i+u[0],n+u[1]);if(p!==re.ROAD&&p!==re.BRIDGE&&!o(i+u[0],n+u[1])){let f=a.filter(v=>o(i+v[0],n+v[1])||t.tileXZ(i+v[0],n+v[1])===re.ROAD);u=f.length?bt(f):u}this.dir=u,this.dest={x:(i+u[0]+.5)*4+-u[1]*this.lane*.5,z:(n+u[1]+.5)*4+u[0]*this.lane*.5};return}let l=a.filter(u=>o(i+u[0],n+u[1]));if(Ve()<.35)for(let u of a){let p=(n+u[1])*e.W+(i+u[0]);if(t.tileXZ(i+u[0],n+u[1])===re.ROAD&&e.meta[p]&2){this.crossing=!0,this.dir=u,this.dest={x:(i+u[0]+.5)*4,z:(n+u[1]+.5)*4};return}}let c=null;if(this.dir&&l.some(u=>u[0]===this.dir[0]&&u[1]===this.dir[1])&&Ve()<.86)c=this.dir;else{let u=l.filter(p=>!this.dir||!(p[0]===-this.dir[0]&&p[1]===-this.dir[1]));c=u.length?bt(u):l.length?bt(l):null}if(!c){this.dest=null,this.dir=null;return}this.dir=c;let h=-c[1],d=c[0];this.dest={x:(i+c[0]+.5)*4+h*this.lane,z:(n+c[1]+.5)*4+d*this.lane}}fleeStep(e){if(this.timer-=e,this.timer<=0){this.state="walk",this.dest=null,this.crossing=!1;return}if(!this.dest||Math.hypot(this.dest.x-this.x,this.dest.z-this.z)<.8){let t=this.x-this.fleeX,i=this.z-this.fleeZ,n=Math.hypot(t,i)||1;t/=n,i/=n;let r=null,a=-1e9;for(let o=0;o<7;o++){let l=Math.atan2(i,t)+Se(-1.2,1.2),c=Math.cos(l),h=Math.sin(l),d=this.x+c*5,u=this.z+h*5;if(x.q.solidAt(d,u))continue;let p=c*t+h*i+(hn[x.q.tileAt(d,u)]?.4:0);p>a&&(a=p,r={x:d,z:u})}this.dest=r||{x:this.x-t*3,z:this.z-i*3}}this.moveTo(this.dest.x,this.dest.z,this.runSpeed)}remove(){x.pedRender?.free(this),this.removed=!0}};function bi(s,e,t,i){let n=new mh(s,e,t,i);return x.peds.push(n),n}function Yi(s){s.remove();let e=x.peds.indexOf(s);e>=0&&x.peds.splice(e,1)}function no(s,e,t,i=null){for(let n of x.peds){if(n===i||!n.alive||n.brain||n.hidden)continue;Math.hypot(n.x-s,n.z-e)<t&&n.state!=="down"&&n.startFlee(s,e,Se(4,8))}}function Sd(s){let e=s.index?s.toNonIndexed():s,t=e.attributes.normal.array,i=new Float32Array(t.length);for(let n=0;n<t.length;n+=3){let r=Math.min(1.1,Oi(t[n],t[n+1],t[n+2])*1.1);i[n]=i[n+1]=i[n+2]=r}return e.setAttribute("color",new Ft(i,3)),e}var In=new Ke,ki=new Ke,wr=new Ke,ji=new Ke().makeScale(0,0,0),Er=1.65,u0=new Ke().makeScale(Er,Er*.9,Er),d0=new Ke().makeTranslation(-.85,.2,0).multiply(new Ke().makeRotationZ(-Math.PI/2)),p0=new Ke().compose(new L(0,1.08,0),new ri,new L(.3,.58,.56)),f0=new Ke().compose(new L(0,1.56,0),new ri,new L(.17,.17,.17)),m0=new Ke().compose(new L(.62,1.28,.34),new ri,new L(.52,.11,.1)),fh=new Ke;function Tr(s,e,t,i,n,r,a,o=0){let l=Math.cos(n),c=Math.sin(n),h=Math.cos(o),d=Math.sin(o),u=h*c,p=-h*l,f=-d,v=-u,m=-p,g=-f,_=l,M=c,b=0,P=M*g-b*m,A=b*v-_*g,D=_*m-M*v,z=Math.hypot(P,A,D)||1;P/=z,A/=z,D/=z,_=m*D-g*A,M=g*P-v*D,b=v*A-m*P;let k=e+u*r*.5,Z=t+p*r*.5,K=i+f*r*.5;return s.set(_*a,v*r,P*a,k,M*a,m*r,A*a,Z,b*a,g*r,D*a,K,0,0,0,1),s}var io=class{constructor(e,t,i=170){this.max=i;let n=Sd(new gi(1,1,1)),r=Sd(new Zn(1,1)),a=new Et({vertexColors:!0});this.mat=a;let o=(c,h,d=a)=>{let u=new Ia(c,d,h);u.instanceMatrix.setUsage(cn),u.frustumCulled=!1;for(let p=0;p<h;p++)u.setMatrixAt(p,ji);return u.setColorAt?.(0,new Xe(1,1,1)),e.add(u),u};this.torso=o(n,i),this.head=o(r,i),this.arms=o(n,i*2),this.legs=o(n,i*2),this.gunMat=new Et({color:1776671}),this.gun=o(n,i,this.gunMat);let l=new qn(.42,10).rotateX(-Math.PI/2);this.shadow=o(l,i,t),this.shadow.renderOrder=1,this.ring=new st(new Kn(.95,1.18,32).rotateX(-Math.PI/2),new Et({color:16765503,transparent:!0,opacity:.75,depthWrite:!1})),this.ring.renderOrder=3,this.ring.visible=!1,e.add(this.ring),this.freeSlots=[];for(let c=i-1;c>=0;c--)this.freeSlots.push(c);this.tmpC=new Xe}alloc(e){if(!this.freeSlots.length){e.slot=-1;return}let t=this.freeSlots.pop();e.slot=t;let i=this.tmpC;this.torso.setColorAt(t,i.set(e.colors.shirt)),this.head.setColorAt(t,i.set(e.colors.hair)),this.arms.setColorAt(t*2,i.set(e.colors.sleeves)),this.arms.setColorAt(t*2+1,i.set(e.colors.sleeves)),this.legs.setColorAt(t*2,i.set(e.colors.pants)),this.legs.setColorAt(t*2+1,i.set(e.colors.pants));for(let n of[this.torso,this.head,this.arms,this.legs])n.instanceColor.needsUpdate=!0}free(e){if(e.slot<0)return;let t=e.slot;this.hide(t),this.freeSlots.push(t),e.slot=-1}hide(e){this.torso.setMatrixAt(e,ji),this.head.setMatrixAt(e,ji),this.arms.setMatrixAt(e*2,ji),this.arms.setMatrixAt(e*2+1,ji),this.legs.setMatrixAt(e*2,ji),this.legs.setMatrixAt(e*2+1,ji),this.gun.setMatrixAt(e,ji),this.shadow.setMatrixAt(e,ji)}setTint(e){this.mat.color.copy(e),this.gunMat.color.setHex(1776671).multiply(e)}update(e,t,i,n){for(let a of e){let o=a.slot;if(o<0)continue;if(a.hidden||Math.abs(a.x-t)>n||Math.abs(a.z-i)>n){this.hide(o);continue}ki.makeRotationY(-a.h),ki.setPosition(a.x,a.y,a.z),ki.multiply(u0);let l=a.state==="down"||a.state==="dead";l&&ki.multiply(d0);let c=a.speed,h=c>3,d=l?0:Math.min(1,c/1.4)*(h?.85:.55),u=Math.sin(a.anim)*d;this.torso.setMatrixAt(o,In.multiplyMatrices(ki,p0)),this.head.setMatrixAt(o,In.multiplyMatrices(ki,f0));let p=a.weapon&&a.aimT>0&&!l,f=p?1.45:l?2.6:-u*.9,v=l?2.4:p&&a.weapon!=="pistol"?1.2:u*.9;this.arms.setMatrixAt(o*2,In.multiplyMatrices(ki,Tr(wr,0,1.33,.36,f,.62,.13,l?-.5:p?.05:-.1))),this.arms.setMatrixAt(o*2+1,In.multiplyMatrices(ki,Tr(wr,0,1.33,-.36,v,.62,.13,l?.5:p&&a.weapon!=="pistol"?-.35:.1))),this.legs.setMatrixAt(o*2,In.multiplyMatrices(ki,Tr(wr,0,.86,.13,u,.86,.17,l?-.25:0))),this.legs.setMatrixAt(o*2+1,In.multiplyMatrices(ki,Tr(wr,0,.86,-.13,-u,.86,.17,l?.25:0))),a.weapon&&a.weapon!=="fists"&&!l?this.gun.setMatrixAt(o,In.multiplyMatrices(ki,p?m0:Tr(wr,0,1,.36,f,.5,.1))):this.gun.setMatrixAt(o,ji),fh.makeTranslation(a.x+_i*(l?.5:1.9),.031,a.z+Mi*(l?.5:1.9)),fh.multiply(In.makeScale(l?2.4:Er,1,l?1.6:Er)),this.shadow.setMatrixAt(o,fh)}for(let a of[this.torso,this.head,this.arms,this.legs,this.gun,this.shadow])a.instanceMatrix.needsUpdate=!0;let r=x.player;if(r&&r.ped&&!r.ped.hidden&&r.ped.alive){this.ring.visible=!0,this.ring.position.set(r.ped.x,.04,r.ped.z);let a=1+Math.sin(x.realTime*5)*.08;this.ring.scale.set(a,1,a)}else this.ring.visible=!1}};var Vs={fists:{name:"Fists",icon:"fists",rate:.42,dmg:22,range:1.5,melee:!0},pistol:{name:"Pistol",icon:"pistol",rate:.3,dmg:34,range:42,spread:.035,pellets:1,pickup:40,max:200},smg:{name:"SMG",icon:"smg",rate:.085,dmg:15,range:36,spread:.075,pellets:1,pickup:150,max:600},shotgun:{name:"Shotgun",icon:"shotgun",rate:.8,dmg:14,range:24,spread:.2,pellets:7,pickup:24,max:120},rocket:{name:"Rockets",icon:"rocket",rate:1.05,dmg:230,radius:7.5,speed:38,pickup:8,max:40,projectile:!0},flamer:{name:"Flamer",icon:"flamer",rate:.05,dmg:4.2,range:9.5,pickup:260,max:900,flame:!0}},Ar=["fists","pistol","smg","shotgun","rocket","flamer"];function g0(s,e,t,i,n,r,a){let o=ah(s,e,t,i,n),l={type:"wall",target:null};for(let c of x.vehicles){if(c===a||c.removed)continue;let h=c.x-s,d=c.z-e,u=h*t+d*i;if(u<-c.radius||u>o+c.radius||Math.abs(h*i-d*t)>c.radius+.2)continue;let f=Math.cos(c.h),v=Math.sin(c.h);for(let m of c.circles){let g=oh(s,e,t,i,c.x+f*m,c.z+v*m,c.cr);g>=0&&g<o&&(o=g,l={type:"vehicle",target:c})}}for(let c of x.peds){if(c===r||c.hidden||!c.alive||c.removed)continue;let h=c.x-s,d=c.z-e,u=h*t+d*i;if(u<0||u>o+1)continue;let p=c.state==="down"?.5:.45,f=oh(s,e,t,i,c.x,c.z,p);f>=0&&f<o&&(o=f,l={type:"ped",target:c})}return{t:o,type:l.type,target:l.target}}function v0(s,e,t,i){let n=null,r=1e9,a=x.police?x.police.level:0;for(let o of x.peds){if(o===s||!o.alive||o.hidden||o.state==="down")continue;let l=o.x-s.x,c=o.z-s.z,h=Math.hypot(l,c);if(h>t||h<.3)continue;let d=Math.abs(Jt(Math.atan2(c,l),e)),u=i?o.kind==="thug"||o.missionTarget||(o.kind==="cop"||o.kind==="swat")&&a>0:o.kind==="player";if(d>(u?.62:.2)||!Xi(s.x,s.z,o.x,o.z))continue;let f=d*12+h*.15-(u?4:0);f<r&&(r=f,n=o)}if(i)for(let o of x.vehicles){if(!o.mission?.target||o.dead)continue;let l=o.x-s.x,c=o.z-s.z,h=Math.hypot(l,c);if(h>t)continue;let d=Math.abs(Jt(Math.atan2(c,l),e));if(d>.5)continue;let u=d*12+h*.15-3;u<r&&(r=u,n=o)}return n?Math.atan2(n.z-s.z,n.x-s.x):e}function Gs(s,e,t){let i=Vs[e];if(!i||s.fireCd>0)return!1;let n=s.kind==="player";if(e!=="fists"&&n){let h=x.player.ammo;if(!(h[e]>0))return!1;h[e]--}s.fireCd=i.rate,s.aimT=Math.max(s.aimT,e==="flamer"?.25:.6),(n||i.melee)&&(t=v0(s,t,i.melee?2.2:Math.min(i.range||30,26),n)),s.h=t;let r=n?"player":s,a=Math.cos(t),o=Math.sin(t),l=s.x+a*.75-o*.2,c=s.z+o*.75+a*.2;if(i.melee){let h=null,d=1e9;for(let u of x.peds){if(u===s||!u.alive||u.hidden)continue;let p=u.x-s.x,f=u.z-s.z,v=Math.hypot(p,f);v>i.range+.3||Math.abs(Jt(Math.atan2(f,p),t))>1||v<d&&(d=v,h=u)}return h?(h.hit(i.dmg,a,o,r,"melee"),x.audio?.punch(h.x,h.z),n&&x.events.shots?.(s,e,!0)):x.audio?.whoosh?.(s.x,s.z),!0}if(i.projectile)return x.projectiles.push({kind:"rocket",x:l,z:c,y:1.25,vx:a*i.speed,vz:o*i.speed,life:2.6,owner:s,src:r,w:i}),x.fx.muzzle(l,1.3,c,t,!0),x.fx.smoke(l-a,1.2,c-o,1.2,.7,.8),x.audio?.shot("rocket",l,c),x.events.shots?.(s,e,!1),!0;if(i.flame){for(let d=0;d<3;d++){let u=t+Se(-.14,.14),p=Se(12,17);x.fx.add.spawn({x:l,y:1.2,z:c,vx:Math.cos(u)*p+s.vx,vy:Se(0,1.2),vz:Math.sin(u)*p+s.vz,life:Se(.45,.65),size:.5,size1:2.6,color:[1,.78,.3,.95],color1:[.85,.18,.05,0],drag:1.6,shape:3})}let h=i.range;for(let d of x.peds){if(d===s||!d.alive||d.hidden)continue;let u=d.x-s.x,p=d.z-s.z,f=Math.hypot(u,p);f>h||f<.2||(u*a+p*o)/f<.9||Xi(s.x,s.z,d.x,d.z)&&d.hit(i.dmg,a,o,r,"fire")}for(let d of x.vehicles){if(d.dead||d===s.vehicle)continue;let u=d.x-s.x,p=d.z-s.z;Math.hypot(u,p)-d.radius*.6>h||(u*a+p*o)/Math.max(.1,Math.hypot(u,p))<.85||(d.damage(i.dmg*.9,r,"fire"),d.health<d.t.health*.3&&!d.onFire&&(d.onFire=!0,d.burnTime=Se(2,3.5)))}return x.audio?.flame(l,c),x.events.shots?.(s,e,!1),!0}x.fx.muzzle(l,1.28,c,t,e==="shotgun"),x.audio?.shot(e,l,c);for(let h=0;h<i.pellets;h++){let d=t+Se(-i.spread,i.spread)*(n?.7:1.4),u=Math.cos(d),p=Math.sin(d),f=g0(l,c,u,p,i.range*(e==="shotgun"?Se(.75,1):1),s,s.vehicle),v=l+u*f.t,m=c+p*f.t;if((h===0||Ve()<.5)&&x.fx.tracer(l,c,v,m,1.25),f.type==="ped"){let g=e==="shotgun"?Ye(1.4-f.t/i.range,.4,1.2):1,_=!n&&f.target.kind==="player"?.42:1;f.target.hit(i.dmg*g*_,u,p,r,"bullet"),x.fx.spark(v,1.1,m,3,4,[1,.95,.85,1])}else f.type==="vehicle"?(f.target.damage(i.dmg*.32,r,"bullet"),x.fx.spark(v,1,m,5,7),n&&f.target.driver&&f.target.driver!=="player"&&Ve()<.2&&x.events.driverShot?.(f.target)):f.t<i.range-.1&&(x.fx.dust(v-u*.2,m-p*.2,2),x.fx.spark(v-u*.2,1.2,m-p*.2,2,5))}return x.events.shots?.(s,e,!1),!0}function wd(s){let e=x.projectiles;for(let t=e.length-1;t>=0;t--){let i=e[t];i.life-=s;let n=i.life<=0,r=3;for(let a=0;a<r&&!n;a++){i.x+=i.vx*s/r,i.z+=i.vz*s/r,x.q.solidAt(i.x,i.z)&&x.q.tileAt(i.x,i.z)!==0&&(n=!0),x.q.tileAt(i.x,i.z);for(let o of x.vehicles){if(n||o===i.owner.vehicle||o.removed)break;if(Math.hypot(o.x-i.x,o.z-i.z)>o.radius+.3)continue;let l=Math.cos(o.h),c=Math.sin(o.h);for(let h of o.circles)if(Math.hypot(o.x+l*h-i.x,o.z+c*h-i.z)<o.cr+.2){n=!0;break}}for(let o of x.peds)n||o===i.owner||!o.alive||o.hidden||Math.hypot(o.x-i.x,o.z-i.z)<.6&&(n=!0)}Ve()<.9&&x.fx.smoke(i.x-i.vx*.02,i.y,i.z-i.vz*.02,.5,.75,.9),x.fx.add.spawn({x:i.x,y:i.y,z:i.z,life:.05,size:.8,color:[1,.8,.4,1],color1:[1,.5,.2,0],shape:3,drag:0}),n&&(so(i.x-i.vx*.01,i.z-i.vz*.01,i.w.radius,i.w.dmg,i.src),e.splice(t,1))}}function so(s,e,t,i,n){x.fx.explosion(s,e,t/7),x.audio?.explosion(s,e);for(let r of x.peds){if(!r.alive||r.hidden)continue;let a=Math.hypot(r.x-s,r.z-e);if(a>t)continue;let o=Math.pow(1-a/t,.7),l=r.kind==="player"&&n==="player"?.35:1;r.hit(i*o*l,r.x-s+.01,r.z-e,n,"explosion"),Ve()<.6&&(r.onFire=Math.max(r.onFire,1.5))}for(let r of x.vehicles){if(r.removed)continue;let a=r.x-s,o=r.z-e,l=Math.max(0,Math.hypot(a,o)-r.radius*.5);if(l>t)continue;let c=1-l/t,h=Math.hypot(a,o)||1;r.vx+=a/h*12*c/r.mass,r.vz+=o/h*12*c/r.mass,r.w+=Se(-3,3)*c/r.mass,r.dead?r.jumpV=Math.max(r.jumpV,3*c):r.damage(i*c,n,"explosion")}no(s,e,45),x.events.explosion?.(s,e,n)}var x0=.5,y0=.4,ro=class{constructor(e){this.city=e,this.carTarget=32,this.pedTarget=62,this.spawnT=0,this.pedT=0,this.parkT=0,this.carCullT=0,this.pedCullT=0,this.pedTiles=[];let{W:t,H:i,tiles:n,district:r}=e;for(let a=0;a<i;a++)for(let o=0;o<t;o++){let l=n[a*t+o];(l===re.SIDEWALK||l===re.PLAZA||l===re.GRASS&&r[a*t+o]===et.PARK)&&this.pedTiles.push(a*t+o)}this.lanesByChunk=e.lanes}setQuality(e){this.carTarget=e==="low"?22:e==="high"?42:32,this.pedTarget=e==="low"?42:e==="high"?80:62}targets(){let e=x.light?x.light.night:0;return{cars:Math.round(this.carTarget*Rn(1,x0,e)),peds:Math.round(this.pedTarget*Rn(1,y0,e))}}focus(){let e=x.player;return e?e.inCar?{x:e.vehicle.x,z:e.vehicle.z}:{x:e.ped.x,z:e.ped.z}:{x:x.cam.cx,z:x.cam.cz}}inView(e,t,i=8){let n=x.cam;return Math.abs(e-n.cx)<n.halfW+i&&Math.abs(t-n.cz)<n.halfH+i}update(e){let t=this.focus(),i=this.targets();this.spawnT-=e,this.carCullT-=e;let n=0,r=null,a=0;for(let h=x.vehicles.length-1;h>=0;h--){let d=x.vehicles[h],u=Qe(d.x,d.z,t.x,t.z),p=this.inView(d.x,d.z,12);p?d.sinceSeen=0:d.sinceSeen+=e;let f=x.player&&(x.player.vehicle===d||x.player.lastCar===d),v=d.persistent||f?260:d.spot?125:165;if(u>v&&!p&&!d.mission){d.spot&&d.spot.vehicle===d&&(d.spot.vehicle=null),x.player&&x.player.lastCar===d&&(x.player.lastCar=null),Pn(d);continue}if(d.dead&&d.sinceSeen>20&&!d.mission){Pn(d);continue}d.ai&&d.ai.mode==="traffic"&&(n++,!p&&d.sinceSeen>2&&u>50&&!d.persistent&&!d.mission&&!f&&Ve()*++a<1&&(r=d))}if(n>i.cars+1&&r&&this.carCullT<=0&&(this.carCullT=.3,Pn(r),n--),this.spawnT<=0&&n<i.cars&&(this.spawnT=.1,this.spawnTrafficCar(t)),this.parkT-=e,this.parkT<=0){this.parkT=.5;for(let h of this.city.parkingSpots){if(h.vehicle){let f=h.vehicle;(f.removed||Qe(f.x,f.z,h.x,h.z)>3||f.driver)&&(h.vehicle=null,h.state="empty",f.spot=null);continue}let d=Qe(h.x,h.z,t.x,t.z);if(d>95||d<20||this.inView(h.x,h.z,6)||(h.state===void 0&&(h.state=Ve()<.62?"car":"empty"),h.state!=="car")||this.blocked(h.x,h.z,3.5))continue;let u=bt(["sedan","sedan","compact","compact","pickup","van","sports","muscle","taxi"]),p=qi(u,h.x,h.z,h.h);p.spot=h,h.vehicle=p}}let o=0,l=null,c=0;for(let h=x.peds.length-1;h>=0;h--){let d=x.peds[h];if(d.kind==="player"||d.persistent)continue;let u=Qe(d.x,d.z,t.x,t.z),p=d.brain?140:95,f=this.inView(d.x,d.z,6);if(u>p&&!f){Yi(d);continue}if(d.state==="dead"&&d.timer>40&&!this.inView(d.x,d.z,4)){Yi(d);continue}d.brain||(o++,!f&&!d.hidden&&u>30&&Ve()*++c<1&&(l=d))}this.pedCullT-=e,o>i.peds+1&&l&&this.pedCullT<=0&&(this.pedCullT=.2,Yi(l),o--),this.pedT-=e,this.pedT<=0&&o<i.peds&&(this.pedT=.06,this.spawnPedNear(t))}blocked(e,t,i){for(let n of x.vehicles)if(Math.abs(n.x-e)<i+n.radius&&Math.abs(n.z-t)<i+n.radius&&Qe(n.x,n.z,e,t)<i+n.radius)return!0;return!1}laneSpot(e,t,i,n=20){let r=this.city.lanes;for(let a=0;a<n;a++){let o=r[Ve()*r.length|0],l=(o.ax+o.bx)/2,c=(o.az+o.bz)/2;if(Qe(l,c,e.x,e.z)>i+o.len/2)continue;let h=Ve()*o.len,d=o.ax+o.dx*h,u=o.az+o.dz*h,p=Qe(d,u,e.x,e.z);if(!(p<t||p>i||this.inView(d,u,10))&&!(o.len-h<6))return{lane:o,t:h,x:d,z:u}}return null}spawnTrafficCar(e,t){let i=this.laneSpot(e,58,140);if(!i||this.blocked(i.x,i.z,7))return null;let n=t||(Ve()<.06?"police":gd());n==="bus"&&i.lane.speed<14&&Ve()<.5&&(n="sedan");let r=Math.atan2(i.lane.dz,i.lane.dx),a=qi(n,i.x,i.z,r,{speed:i.lane.speed*.7});return a.driver=n==="police"?"cop":"npc",a.crew=n==="police"?2:1,Ws(a,i.lane,i.t),a}spawnPedNear(e){let{W:t}=this.city;for(let i=0;i<14;i++){let n=this.pedTiles[Ve()*this.pedTiles.length|0],r=n%t,a=n/t|0,o=(r+Se(.2,.8))*4,l=(a+Se(.2,.8))*4,c=Qe(o,l,e.x,e.z);if(c<35||c>85||this.inView(o,l,4))continue;let h=this.city.district[n],d=h===et.DOWNTOWN?1:h===et.COMMERCIAL?.85:h===et.PARK||h===et.WATERFRONT?.6:.4;if(Ve()>d)continue;let u=bi("civ",o,l);return Ve()<.04&&(u.weapon="pistol",u.armed=!0),u}return null}};function Ws(s,e,t){s.ai={mode:"traffic",lane:e,pts:[e.ax+e.dx*t,e.az+e.dz*t,e.bx,e.bz],pi:1,speedScale:Se(.85,1.08),blockedT:0,waitT:0,panicT:0,hornCd:0,turns:[]}}function ao(s){let e=x.city.lanes,t=null,i=1e9,n=0;for(let r of e){let a=s.x-r.ax,o=s.z-r.az,l=Ye(a*r.dx+o*r.dz,0,r.len),c=r.ax+r.dx*l,h=r.az+r.dz*l,d=Qe(s.x,s.z,c,h);d+=Math.abs(Jt(Math.atan2(r.dz,r.dx),s.h))*4,d<i&&(i=d,t=r,n=l)}t&&Ws(s,t,Math.min(n+4,t.len-.5))}function _0(s){let t=s.lane.outs,i;if(!t.length)return!1;if(t.length===1)i=x.city.conns[t[0]];else{let a=0,o=t.map(h=>{let d=x.city.conns[h],u=d.turn==="S"?.55:d.turn==="U"?.02:.24;return a+=u,u}),l=Ve()*a,c=0;for(;c<o.length-1&&(l-=o[c],!(l<=0));c++);i=x.city.conns[t[c]]}let n=s.pts.length/2;for(let a=2;a<i.pts.length;a+=2)s.pts.push(i.pts[a],i.pts[a+1]);s.turns.push({at:n-1,turn:i.turn,node:i.node});let r=x.city.lanes[i.to];return s.pts.push(r.bx,r.bz),s.lane=r,!0}var Td=[];function Ed(s,e){let t=s.ai,i=t.pts,n=0;for(;i.length/2-t.pi<6&&n++<4&&_0(t););if(t.pi>24){let ce=t.pi-2;i.splice(0,ce*2),t.pi-=ce;for(let ue of t.turns)ue.at-=ce;for(;t.turns.length&&t.turns[0].at<-2;)t.turns.shift()}let r=i.length/2;for(;t.pi<r-1;){let ce=i[(t.pi-1)*2],ue=i[(t.pi-1)*2+1],Pe=i[t.pi*2],Ne=i[t.pi*2+1],ge=Pe-ce,Me=Ne-ue,Ae=Math.hypot(ge,Me)||1;if(((s.x-ce)*ge+(s.z-ue)*Me)/Ae>=Ae-.5)t.pi++;else break}let a=3.5+s.speed*.42+s.t.L*.3,o=t.pi,l=i[(o-1)*2],c=i[(o-1)*2+1],h=i[o*2],d=i[o*2+1],u=h-l,p=d-c,f=Math.hypot(u,p)||1,v=Ye(((s.x-l)*u+(s.z-c)*p)/f,0,f),m=l+u/f*v,g=c+p/f*v,_=Math.hypot(s.x-m,s.z-g),M=a,b=m,P=g;for(;;){let ce=Math.hypot(h-m,d-g);if(M<=ce||o>=r-1){let ue=ce>0?Math.min(1,M/ce):0;b=m+(h-m)*ue,P=g+(d-g)*ue;break}M-=ce,m=h,g=d,o++,h=i[o*2],d=i[o*2+1]}let A=Math.atan2(P-s.z,b-s.x),D=Jt(A,s.h);s.input.steer=Ye(D*2.4,-1,1);let z=t.lane.speed*t.speedScale;t.panicT>0&&(t.panicT-=e,z*=1.45);for(let ce of t.turns){if(ce.turn==="S")continue;let ue=ce.at;if(ue<t.pi-2)continue;let Pe=i[Math.max(0,ue)*2],Ne=i[Math.max(0,ue)*2+1],ge=Math.hypot(Pe-s.x,Ne-s.z);ge<22&&(z=Math.min(z,6.5+ge*.25));break}_>3&&(z=Math.min(z,7));let k=Math.cos(s.h),Z=Math.sin(s.h),K=-Z,J=k,ee=5+s.speed*1.35+s.t.L/2,$=null;x.hash.query(s.x+k*ee*.5,s.z+Z*ee*.5,ee*.6+4,Td);for(let ce of Td){if(ce===s||ce.hidden||ce.removed)continue;let ue=ce.x-s.x,Pe=ce.z-s.z,Ne=ue*k+Pe*Z;if(Ne<0)continue;let ge=Math.abs(ue*K+Pe*J),Me=.35,Ae=.45;if(ce.isVehicle){let C=ce.h-s.h,R=Math.abs(Math.cos(C)),V=Math.abs(Math.sin(C));Me=R*ce.t.L/2+V*ce.t.W/2,Ae=V*ce.t.L/2+R*ce.t.W/2}if(ge>s.t.W/2+Ae+.45)continue;let De=Ne-s.t.L/2-Me;if(De>ee)continue;let Re=Math.max(0,(De-2.2)*.85);Re<z&&(z=Re,$=ce)}let oe=t.turns.find(ce=>ce.at>=t.pi-1);if(oe&&oe.node&&oe.node.junction&&t.waitT<2.5){let ce=i[oe.at*2],ue=i[oe.at*2+1],Pe=Math.hypot(ce-s.x,ue-s.z);if(Pe<6&&Pe>.8){let Ne=oe.node,ge=Ne.x0*4,Me=Ne.x1*4,Ae=Ne.z0*4,De=Ne.z1*4,Re=!1;for(let C of x.vehicles)if(!(C===s||C.speed<1.5)&&!(C.x<ge-1||C.x>Me+1||C.z<Ae-1||C.z>De+1)&&!(Math.abs(Jt(C.h,s.h))<.5)){Re=!0;break}Re&&(z=0,t.waitT+=e)}}z>3&&(t.waitT=0),z<.5&&$?(t.blockedT+=e,t.blockedT>2&&t.hornCd<=0&&($.kind==="player"||$.isVehicle&&$.driver==="player")&&(s.horn=.5,t.hornCd=Se(2,4),x.audio?.horn(s.x,s.z,.5))):t.blockedT=Math.max(0,t.blockedT-e),t.hornCd>0&&(t.hornCd-=e),t.blockedT>7&&$&&!$.isPed&&(z=2.5,s.input.steer=Ye(s.input.steer-.6,-1,1));let le=s.vf;le<z-.4?(s.input.throttle=Ye((z-le)*.35,.25,1),s.input.brake=0):le>z+.6?(s.input.throttle=0,s.input.brake=Ye((le-z)*.25,.25,1)):(s.input.throttle=.12,s.input.brake=0),z===0&&le<1&&(s.input.throttle=0,s.input.brake=1),s.input.handbrake=!1}var oo=1073741823,lo=class{constructor(e){this.city=e,this.heat=0,this.lastSeen=-999,this.spawnCd=0,this.field=new Int32Array(e.W*e.H).fill(oo),this.fieldT=0,this.fieldFrom=-1,this.bust=0,this.seen=!1,this.flash=0,this.prevLevel=0}get level(){return Math.min(5,Math.floor(this.heat))}reset(){this.heat=0,this.bust=0,this.disengageAll()}crime(e,t,i,n=!1){if(!n&&!this.witnessed(t,i))return!1;let r=this.level;return this.heat=Math.min(5.99,this.heat+e),this.lastSeen=x.time,this.level>r&&(this.flash=1.5,x.audio?.wantedUp?.(),x.hud?.flashWanted()),!0}setAtLeast(e){this.heat<e&&(this.heat=e+.05,this.lastSeen=x.time,this.flash=1.5,x.audio?.wantedUp?.())}witnessed(e,t){for(let i of x.peds){if(!i.alive||i.hidden||i.kind!=="cop"&&i.kind!=="swat")continue;let n=Qe(i.x,i.z,e,t);if(n<38&&(n<10||Xi(i.x,i.z,e,t)))return!0}for(let i of x.vehicles){if(i.dead||i.type!=="police"&&i.type!=="swat"||!i.driver||i.driver==="player")continue;let n=Qe(i.x,i.z,e,t);if(n<42&&(n<12||Xi(i.x,i.z,e,t)))return!0}return!1}disengageAll(){for(let e of x.vehicles)e.ai&&(e.ai.mode==="pursuit"||e.ai.mode==="waiting")&&(e.sirenOn=!1,e.driver&&e.driver!=="player"?ao(e):e.ai=null);for(let e of x.peds)e.brain===Zi&&(e.brain=null,e.state="walk",e.aimT=0)}playerPos(){let e=x.player;if(!e)return null;let t=e.inCar?e.vehicle:e.ped;return{x:t.x,z:t.z,vx:t.vx,vz:t.vz,speed:e.inCar?e.vehicle.speed:e.ped.speed,inCar:e.inCar,v:e.vehicle}}update(e){let t=x.player;if(!t||!t.alive)return;let i=this.playerPos();this.flash>0&&(this.flash-=e);let n=this.level;if(this.seen=!1,n>0){for(let u of x.peds){if(!u.alive||u.hidden||u.kind!=="cop"&&u.kind!=="swat")continue;let p=Qe(u.x,u.z,i.x,i.z);if(p<45&&(p<12||Xi(u.x,u.z,i.x,i.z))){this.seen=!0;break}}if(!this.seen)for(let u of x.vehicles){if(u.dead||!u.ai||u.ai.mode!=="pursuit")continue;let p=Qe(u.x,u.z,i.x,i.z);if(p<50&&(p<14||Xi(u.x,u.z,i.x,i.z))){this.seen=!0;break}}this.seen&&(this.lastSeen=x.time);let d=7+n*2.6;x.time-this.lastSeen>d&&(this.heat=Math.max(0,Math.floor(this.heat)-.01),this.heat<1&&(this.heat=0),this.lastSeen=x.time,this.heat===0&&(this.disengageAll(),x.hud?.toast("Lost the cops")))}let r=0,a=0;for(let d of x.vehicles)d.dead||(d.ai&&(d.ai.mode==="pursuit"||d.ai.mode==="waiting")?(r++,d.type==="swat"&&a++):n>0&&d.type==="police"&&d.driver==="cop"&&d.ai&&d.ai.mode==="traffic"&&Qe(d.x,d.z,i.x,i.z)<60&&(gh(d),r++));let o=[0,1,2,3,4,5][n],l=n>=5?2:n>=4?1:0;if(this.spawnCd-=e,n>0&&this.spawnCd<=0&&(r-a<o||a<l)){let d=a<l?"swat":"police";this.spawnUnit(d,i)?this.spawnCd=Ye(5-n*.7,1.4,5):this.spawnCd=.5}this.fieldT-=e;let c=Math.floor(i.z/4)*this.city.W+Math.floor(i.x/4);n>0&&this.fieldT<=0&&c!==this.fieldFrom&&(this.fieldT=.6,this.computeField(i.x,i.z),this.fieldFrom=c);let h=!1;if(n>0){let d=i.inCar?i.v.doorPos(-1):null;for(let u of x.peds)u.brain!==Zi||!u.alive||u.state!=="custom"||(i.inCar?i.speed<1.6&&(Qe(u.x,u.z,d.x,d.z)<1.5||Qe(u.x,u.z,i.x,i.z)<i.v.t.W/2+1.1)&&(h=!0):Qe(u.x,u.z,i.x,i.z)<1.15&&i.speed<4.5&&(h=!0))}h?(this.bust+=e,this.bust>.9&&(this.bust=0,x.events.busted?.())):this.bust=Math.max(0,this.bust-e*.5),this.prevLevel=n}spawnUnit(e,t){let i=null;for(let a=0;a<6;a++){let o=x.traffic.laneSpot(t,75,135,20);if(!o)continue;let l=t.x-o.x,c=t.z-o.z,h=Math.hypot(l,c)||1;if((l*o.lane.dx+c*o.lane.dz)/h>.2){i=o;break}i||(i=o)}if(!i||x.traffic.blocked(i.x,i.z,7))return!1;let n=Math.atan2(i.lane.dz,i.lane.dx),r=qi(e,i.x,i.z,n,{speed:12});return r.driver="cop",r.crew=e==="swat"?3:2,gh(r),!0}computeField(e,t){let{W:i,H:n,tiles:r}=this.city,a=this.field;a.fill(oo);let o=Math.floor(t/4)*i+Math.floor(e/4);if(o<0||o>=i*n)return;let l=[];for(let d=0;d<8;d++)l.push([]);a[o]=0,l[0].push(o);let c=0,h=1;for(;h>0;){let d=l[c&7];for(;d.length;){let u=d.pop();h--;let p=a[u];if(p!==c)continue;let f=u%i,v=u/i|0;for(let m=0;m<4;m++){let g=f+(m===0?1:m===1?-1:0),_=v+(m===2?1:m===3?-1:0);if(g<0||_<0||g>=i||_>=n)continue;let M=_*i+g,b=Ni[r[M]];if(!b)continue;let P=p+b;P<a[M]&&(a[M]=P,l[P&7].push(M),h++)}}if(c++,c>2e5)break}}waypoint(e,t,i=3){let{W:n,H:r,tiles:a}=this.city,o=this.field,l=Math.floor(e/4),c=Math.floor(t/4);if(l<0||c<0||l>=n||c>=r)return null;if(o[c*n+l]>=oo){let h=null,d=oo;for(let u=-2;u<=2;u++)for(let p=-2;p<=2;p++){let f=l+p,v=c+u;if(f<0||v<0||f>=n||v>=r)continue;let m=o[v*n+f];m<d&&(d=m,h=[f,v])}return h?{x:(h[0]+.5)*4,z:(h[1]+.5)*4}:null}for(let h=0;h<i;h++){let d=l,u=c,p=o[c*n+l];for(let f=-1;f<=1;f++)for(let v=-1;v<=1;v++){if(!v&&!f)continue;let m=l+v,g=c+f;if(m<0||g<0||m>=n||g>=r||v&&f&&(ui[a[c*n+m]]||ui[a[g*n+l]]))continue;let _=o[g*n+m]+(v&&f?1:0);_<p&&(p=_,d=m,u=g)}if(d===l&&u===c)break;l=d,c=u}return{x:(l+.5)*4,z:(c+.5)*4}}};function gh(s){s.ai={mode:"pursuit",stuckT:0,reverseT:0,deployed:!1,crewIn:s.crew||2,lostT:0},s.sirenOn=!0}function Rd(s,e){let t=s.ai,i=x.police,n=i.playerPos();if(!n)return;if(i.level===0){s.sirenOn=!1,ao(s);return}let r=n.x-s.x,a=n.z-s.z,o=Math.hypot(r,a),l=Ye(o/35,0,1.1),c=n.x+(n.vx||0)*l,h=n.z+(n.vz||0)*l,d;o<32&&Xi(s.x,s.z,c,h)?d={x:c,z:h}:d=i.waypoint(s.x,s.z,3)||{x:c,z:h};let u=Math.atan2(d.z-s.z,d.x-s.x),p=Jt(u,s.h),f=s.input;if(f.handbrake=!1,t.reverseT>0){t.reverseT-=e,f.throttle=-1,f.brake=0,f.steer=-Math.sign(p||1);return}if(f.steer=Ye(p*2.6,-1,1),f.brake=0,f.throttle=1,Math.abs(p)>1.5&&s.vf>9&&(f.throttle=0,f.brake=.6),Math.abs(p)>2.3&&s.speed<5&&o>8&&(t.reverseT=.8),(!n.inCar||n.speed<3)&&o<45){let m=Ye((o-9)*1.05,0,30);s.vf>m+.5?(f.throttle=0,f.brake=Ye((s.vf-m)*.3,.35,1)):o<11&&(f.throttle=0,f.brake=1),o<14&&s.speed<1.8&&!t.deployed&&M0(s)}f.throttle>.5&&s.speed<1.2?t.stuckT+=e:t.stuckT=Math.max(0,t.stuckT-e),t.stuckT>1.1&&(t.stuckT=0,t.reverseT=.9),o<10&&n.inCar&&i.level>=3&&(f.throttle=1)}function M0(s){let e=s.ai;e.deployed=!0,e.mode="waiting";let t=e.crewIn||1;for(let i=0;i<t;i++){let n=i%2===0?-1:1,r=s.doorPos(n),a=r.x,o=r.z;x.q.solidAt(a,o)&&(a=s.x,o=s.z);let l=bi(s.type==="swat"?"swat":"cop",a,o,s.h);l.brain=Zi,l.state="custom",l.weapon=s.type==="swat"?"smg":"pistol",l.homeCar=s,l.runSpeed=Se(5.2,6),l.fireCd=Se(.6,1.4)}e.crewIn=0,s.driver=null}function Zi(s,e){let t=x.police,i=t.playerPos();if(!i||!x.player.alive){s.vx=s.vz=0;return}if(t.level===0){s.aimT=0;let v=s.homeCar;if(v&&!v.dead&&!v.driver&&Qe(s.x,s.z,v.x,v.z)<30){let m=v.doorPos(-1);s.moveTo(m.x,m.z,2.5)<1&&Ad(s,v)}else s.brain=null,s.state="walk";return}let n=Qe(s.x,s.z,i.x,i.z),r=s.homeCar;if(i.inCar&&i.speed>7&&n>16&&r&&!r.dead&&!r.driver&&Qe(s.x,s.z,r.x,r.z)<28){let v=r.doorPos(-1);s.moveTo(v.x,v.z,s.runSpeed)<1&&Ad(s,r);return}let a=i.x,o=i.z,l=n<40&&Xi(s.x,s.z,i.x,i.z);if(i.inCar){let v=i.v.doorPos(-1);i.speed<2&&(a=v.x,o=v.z)}if(!l&&n>6){let v=t.waypoint(s.x,s.z,2);v&&(a=v.x,o=v.z)}let c=t.level,h=x.player,d=h.weapon!=="fists"||x.realTime-(h.lastShotT||-99)<8,u=s.weapon&&(c>=3||c>=2&&d||s.kind==="swat"),p=s.kind==="swat"?22:17;if(u&&l&&n<p&&n>3.5&&!(i.inCar&&i.speed<2)){if(s.vx*=.6,s.vz*=.6,s.h=Math.atan2(i.z-s.z,i.x-s.x),s.aimT=.5,s.fireCd<=0){let v=(i.speed>4?.12:.06)+Ve()*.06;Gs(s,s.weapon,s.h+Se(-v,v)),s.fireCd+=Se(s.kind==="swat"?.2:.55,s.kind==="swat"?.5:1.2)}}else s.moveTo(a,o,n<2?2.5:s.runSpeed)}function Ad(s,e){if(e.ai=e.ai||{mode:"waiting"},e.ai.crewIn=(e.ai.crewIn||0)+1,s.hidden=!0,s.persistent=!1,s.alive=!1,s.removeMe=!0,e.driver||(e.driver="cop"),!x.peds.some(i=>i!==s&&i.brain===Zi&&i.homeCar===e&&i.alive&&!i.hidden)){let i=e.ai.crewIn;gh(e),e.ai.crewIn=i}}var co=class{constructor(e){this.ped=e,e.kind="player",e.persistent=!0,e.state="custom",e.brain=t=>{t.vx=this.wantVx,t.vz=this.wantVz},this.wantVx=0,this.wantVz=0,this.vehicle=null,this.inCar=!1,this.entering=null,this.cash=0,this.lives=4,this.weapon="fists",this.ammo={fists:1/0,pistol:0,smg:0,shotgun:0,rocket:0,flamer:0},this.lastCar=null,this.spray=0,this.padCd=!1,this.hornCd=0,this.extraLifeAt=5e4}get alive(){return this.ped.alive}pos(){let e=this.inCar?this.vehicle:this.ped;return{x:e.x,z:e.z}}addCash(e){for(this.cash+=e,x.hud?.cashPulse();this.cash>=this.extraLifeAt;)this.extraLifeAt+=5e4,this.lives++,x.hud?.toast("Extra life!"),x.audio?.missionPassed()}nextWeapon(){let e=Ar.indexOf(this.weapon);for(let t=1;t<=Ar.length;t++){let i=Ar[(e+t)%Ar.length];if(i==="fists"||this.ammo[i]>0){this.weapon=i;break}}x.audio?.click()}update(e,t){this.alive&&(this.ped.weapon=this.weapon,this.inCar?this.drive(e,t):this.onFoot(e,t))}onFoot(e,t){let i=this.ped;if(i.state==="down"){this.wantVx=this.wantVz=0,t.take("b");return}this.weapon!=="fists"&&!(this.ammo[this.weapon]>0)&&(this.weapon="fists"),(t.take("weapon")||t.take("c"))&&this.nextWeapon();let n=t.move();if(this.entering){this.updateEntering(e,n);return}let r=n.keyboard?!t.handbrake:n.mag>.8,a=n.mag>0?r?6.4:2.2+2.6*(n.mag/.8):0;if(this.wantVx=n.x/(n.mag||1)*a,this.wantVz=n.y/(n.mag||1)*a,n.mag===0&&(this.wantVx=0,this.wantVz=0),t.a){let o=n.mag>0?Math.atan2(n.y,n.x):i.h;Gs(i,this.weapon,o)}t.take("b")&&this.tryEnter(),t.take("horn")}nearestCar(e=5){let t=null,i=e;for(let n of x.vehicles){if(n.dead||n.removed)continue;let r=Qe(n.x,n.z,this.ped.x,this.ped.z)-n.t.W*.5;r<i&&(i=r,t=n)}return t}tryEnter(){let e=this.nearestCar(4.2);if(!e){x.hud?.toast("No car close enough");return}if(e.locked){x.hud?.toast("It is locked");return}let t=-1,i=e.doorPos(-1),n=e.doorPos(1);(x.q.solidAt(i.x,i.z)||!x.q.solidAt(n.x,n.z)&&Qe(n.x,n.z,this.ped.x,this.ped.z)+1.5<Qe(i.x,i.z,this.ped.x,this.ped.z))&&(t=1),this.entering={v:e,t:0,side:t}}updateEntering(e,t){let i=this.entering,n=i.v;if(i.t+=e,n.dead||n.removed||n.speed>7&&i.t>.3||i.t>2.4||t.mag>.6&&i.t>.35){this.entering=null;return}let r=n.doorPos(i.side),a=this.ped,o=r.x-a.x,l=r.z-a.z,c=Math.hypot(o,l),h=Math.min(6.4,c*8);this.wantVx=c>.01?o/c*h:0,this.wantVz=c>.01?l/c*h:0,(c<.7||i.t>1.1&&c<2.2)&&this.enterVehicle(n)}enterVehicle(e){this.entering=null;let t=this.ped,i=x.police;if(e.driver&&e.driver!=="player"){let n=e.doorPos(-1),r=e.driver==="cop"?e.type==="swat"?"swat":"cop":"civ",a=bi(r,n.x+Se(-.3,.3),n.z+Se(-.3,.3),e.h+Math.PI/2);a.hit(4,Math.cos(e.h+Math.PI/2),Math.sin(e.h+Math.PI/2),"player","melee"),a.state="down",a.timer=1,r!=="civ"?(a.brain=Zi,a.weapon=r==="swat"?"smg":"pistol",i.crime(1.6,e.x,e.z,!0)):(Ve()<.15&&(a.armed=!0),i.crime(.9,e.x,e.z)),x.audio?.punch(e.x,e.z),x.hud?.toast(r==="civ"?"Car jacked":"Cop car jacked!")}else(e.type==="police"||e.type==="swat")&&i.crime(1.2,e.x,e.z,!0);e.ai=null,e.driver="player",e.sirenOn=!1,e.spot&&(e.spot.vehicle=null,e.spot.state="empty",e.spot=null),e.persistent=!0,t.hidden=!0,t.vehicle=e,this.vehicle=e,this.inCar=!0,this.wantVx=this.wantVz=0,this.lastCar&&this.lastCar!==e&&(this.lastCar.persistent=!!this.lastCar.mission),this.lastCar=e,x.hud?.vehicleName(e.t.name),x.audio&&(x.audio.pickStation(),x.audio.radio(!0),x.hud?.radio(x.audio.stationName()))}exitVehicle(e=!1){let t=this.vehicle;if(!t)return;let i=this.ped,n=[t.doorPos(-1),t.doorPos(1)],r=Math.cos(t.h),a=Math.sin(t.h);n.push({x:t.x+r*(t.t.L/2+.8),z:t.z+a*(t.t.L/2+.8)}),n.push({x:t.x-r*(t.t.L/2+.8),z:t.z-a*(t.t.L/2+.8)});let o=n.find(l=>!x.q.solidAt(l.x,l.z));if(!o){if(!e){x.hud?.toast("No room to get out");return}o=n[0]}i.x=o.x,i.z=o.z,i.h=t.h,i.hidden=!1,i.vehicle=null,i.vx=t.vx*.4,i.vz=t.vz*.4,i.state="custom",t.speed>11&&(i.state="down",i.timer=.6,i.health-=Math.min(25,t.speed)),t.driver=null,t.input.throttle=0,t.input.steer=0,t.input.brake=0,t.input.handbrake=!1,this.vehicle=null,this.inCar=!1,this.lastCar=t,x.audio?.radio(!1),x.audio?.engine(!1),x.audio?.skid(0),x.hud?.radio(null)}drive(e,t){let i=this.vehicle;if(t.take("b")){this.exitVehicle();return}t.take("radio")&&(x.hud?.radio(x.audio?.nextStation()),x.audio?.radio(!0)),t.take("weapon");let n=i.input,r=t.move();if(this.spray>0){this.spray-=e,n.throttle=0,n.brake=1,n.steer=0,n.handbrake=!1,x.fx.spray(i.x,i.z,[.85,.85,.85]),this.spray<=0&&this.finishSpray(i);return}let a=x.settings.steering==="classic"||r.keyboard,o=0,l=0,c=0,h=!1,d=i.vf;if(a)o=-r.y,l=r.x,r.keyboard&&(o=Math.sign(o),l=Math.sign(l)),t.a&&(c=d>1?1:0,d<=1&&(o=-1)),h=t.handbrake;else{let m=r.mag>0,g=Math.atan2(r.y,r.x);if(t.a){if(d>2){if(c=1,m){let _=Jt(g,i.h);l=Ye(_*1.7,-1,1),h=Math.abs(_)>.55&&d>9}}else if(o=-1,m){let _=Jt(g+Math.PI,i.h);l=Ye(-_*2,-1,1)}}else if(m){let _=Jt(g,i.h);l=Ye(_*2,-1,1)*(d<-.5?-1:1),o=Math.min(1,r.mag*1.15),Math.abs(_)>1.35&&d>13&&(o=.2),Math.abs(_)>2.2&&d>7&&(o=0,c=.35,h=d>15)}}if(n.throttle=o,n.steer=l,n.brake=c,n.handbrake=h,this.hornCd-=e,(t.c||t.take("horn"))&&this.hornCd<=0){this.hornCd=.45,i.horn=.45,x.audio?.horn(i.x,i.z,.4);let m=Math.cos(i.h),g=Math.sin(i.h);for(let _ of x.peds){if(!_.alive||_.brain||_.hidden)continue;let M=_.x-i.x,b=_.z-i.z,P=M*m+b*g;if(P>0&&P<22&&Math.abs(M*-g+b*m)<4){_.state="dive",_.timer=.45;let A=M*-g+b*m>=0?1:-1;_.vx=-g*A*5.5,_.vz=m*A*5.5}}}t.take("c");let u=x.city,p=Math.floor(i.x/4),f=Math.floor(i.z/4),v=p>=0&&f>=0&&p<u.W&&f<u.H&&u.meta[f*u.W+p]&1;v&&!this.padCd&&i.speed<2.5&&(this.padCd=!0,this.cash>=500||x.police.level>0?this.startSpray(i):x.hud?.toast("Respray costs $500")),v||(this.padCd=!1)}startSpray(e){this.spray=1.6,x.audio?.spray(),x.hud?.toast("Respraying...")}finishSpray(e){let t=to("sedan");for(;t===e.paintHex;)t=to("sedan");e.type!=="police"&&e.type!=="swat"&&e.type!=="taxi"&&e.type!=="ambulance"&&e.setPaint(t),e.health=Math.max(e.health,e.t.health*.9),e.onFire=!1;let i=Math.min(500,this.cash);this.cash-=i;let n=x.police.level>0;x.police.reset(),x.hud?.toast(n?`Fresh paint. Heat gone. -$${i}`:`Fresh paint. -$${i}`),x.audio?.pickup()}resetForRespawn(e,t){let i=this.ped;i.x=e,i.z=t,i.vx=i.vz=0,i.alive=!0,i.health=100,i.armor=0,i.state="custom",i.hidden=!1,i.onFire=0,i.vehicle=null,this.vehicle=null,this.inCar=!1,this.entering=null,this.weapon="fists";for(let n of Object.keys(this.ammo))n!=="fists"&&(this.ammo[n]=0);this.spray=0,this.wantVx=this.wantVz=0,x.pedRender&&i.slot<0&&x.pedRender.alloc(i)}};var b0=new zt({transparent:!0,depthWrite:!1,blending:yi,side:_r,uniforms:{uColor:{value:new Xe(1,.8,.2)},uTime:{value:0}},vertexShader:"varying float vY; void main(){ vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uTime; varying float vY;
    void main(){ float a = (1.0 - smoothstep(0.0, 9.0, vY)) * (0.55 + 0.15 * sin(uTime * 4.0 - vY * 1.4)); gl_FragColor = vec4(uColor * a, a); }`}),S0=new Et({color:16765503,transparent:!0,opacity:.85,depthWrite:!1,blending:yi}),ho=class{constructor(e=16763955){this.group=new ci;let t=b0.clone();t.uniforms.uColor.value=new Xe(e),this.beamMat=t;let i=new st(new Cs(1.2,1.2,9,20,1,!0).translate(0,4.5,0),t),n=S0.clone();n.color=new Xe(e),this.ringMat=n,this.ring=new st(new Kn(1.7,2.1,36).rotateX(-Math.PI/2),n),this.ring.position.y=.06,i.renderOrder=8,this.ring.renderOrder=8,this.group.add(i,this.ring),this.group.visible=!1,x.scene.add(this.group)}set(e,t,i=2){this.group.visible=!0,this.group.position.set(e,0,t),this.r=i}hide(){this.group.visible=!1}update(e){if(!this.group.visible)return;this.beamMat.uniforms.uTime.value=e;let t=this.r/2*(1+.12*Math.sin(e*5));this.ring.scale.set(t,1,t),this.group.children[0].scale.set(this.r/2,1,this.r/2)}dispose(){x.scene.remove(this.group)}},vh=class{constructor(){let e=new Ps;e.moveTo(1.6,0),e.lineTo(.2,.95),e.lineTo(.2,.42),e.lineTo(-1.1,.42),e.lineTo(-1.1,-.42),e.lineTo(.2,-.42),e.lineTo(.2,-.95),e.lineTo(1.6,0);let t=new Is(e).rotateX(Math.PI/2),i=new Is(e).rotateX(Math.PI/2).scale(1.18,1,1.22);this.group=new ci;let n=new st(t,new Et({color:16765503,side:_r,depthTest:!1})),r=new st(i,new Et({color:1709062,side:_r,depthTest:!1,transparent:!0,opacity:.85}));n.renderOrder=21,r.renderOrder=20,n.position.y=.02,this.mat=n.material,this.group.add(r,n),this.group.visible=!1,x.scene.add(this.group)}point(e,t,i,n,r,a,o){let l=Math.atan2(r-t,n-e);this.group.visible=!0,this.group.position.set(e+Math.cos(l)*a,i,t+Math.sin(l)*a),this.group.rotation.set(0,-l,0);let c=1+.1*Math.sin(x.realTime*6);this.group.scale.setScalar(c),o&&this.mat.color.setHex(o)}hide(){this.group.visible=!1}},Ki=[{id:"first-wheels",title:"First Wheels",reward:1e3,brief:"Need a driver. Grab any car and get to the drop. You have 1:30.",start(s){s.d.dest=s.place("roadside",150,260),s.timer(90),s.goal(s.d.dest,4.5)},update(s){let e=x.player;e.inCar||s.hint("Stand next to a car and tap ENTER to take it."),e.inCar&&s.near(e.vehicle,s.d.dest,6)&&e.vehicle.speed<7&&s.complete()}},{id:"hot-property",title:"Hot Property",reward:3e3,brief:"A red sports car is parked across town. Bring it to the garage at Dockside. Keep it pretty.",start(s){let e=s.place("alley",110,240)||s.place("roadside",110,240),t=s.car("sports",e.x,e.z,Ve()*6.28,"#c4281f");t.ai=null,t.driver=null,s.d.car=t,s.d.phase=0,s.goal(t,3)},update(s){let e=s.d.car,t=x.player;if(e.dead)return s.fail("The car got wrecked.");if(s.d.phase===0&&t.vehicle===e&&(s.d.phase=1,s.d.dest=s.place("industrial",160,320)||s.place("roadside",160,320),s.pager("Nice ride. Now the garage, and no scratches."),s.goal(s.d.dest,5)),s.d.phase===1){if(e.health<e.t.health*.35)return s.fail("That car is scrap now. Deal is off.");t.vehicle===e&&s.near(e,s.d.dest,6)&&e.speed<4&&(s.deliver(e),s.complete())}}},{id:"courier",title:"Courier",reward:2500,brief:"Briefcase left in the park. Pick it up and run it to the client. Two minutes.",start(s){s.d.item=s.place("park",80,200)||s.place("alley",80,200),s.d.phase=0,s.timer(120),s.item(s.d.item),s.goal(s.d.item,2.2)},update(s){let e=x.player;s.d.phase===0&&s.near(e.pos(),s.d.item,3)&&(s.d.phase=1,s.clearItem(),x.audio?.pickup(),s.d.dest=s.place("roadside",220,360),s.pager("Got it. Now the client. Clock is running."),s.goal(s.d.dest,4)),s.d.phase===1&&s.near(e.pos(),s.d.dest,5)&&s.complete()}},{id:"accountant",title:"The Accountant",reward:3500,brief:"Our accountant needs a lift. He will not walk far, so bring a car.",start(s){let e=s.place("downtown",120,240)||s.place("roadside",120,240);s.d.vip=s.ped("vip",e.x,e.z),s.d.phase=0,s.goal(s.d.vip,2.5)},update(s){let e=s.d.vip,t=x.player;if(!e.alive)return s.fail("The accountant is dead. So is the deal.");if(s.d.phase===0)t.inCar&&s.near(t.vehicle,e,9)&&t.vehicle.speed<3?s.board([e],t.vehicle,()=>{s.d.phase=1,s.d.car=t.vehicle,s.d.dest=s.place("waterfront",200,360)||s.place("roadside",200,360),s.pager("He is in. Take him to the waterfront. Smooth, please."),s.goal(s.d.dest,5)}):!t.inCar&&s.near(t.pos(),e,6)&&s.hint("Get a car. He is not walking.");else if(s.d.phase===1){if(s.d.car.dead)return s.fail("The accountant went up with the car.");t.vehicle===s.d.car&&s.near(s.d.car,s.d.dest,7)&&s.d.car.speed<3&&(s.unboard(s.d.car),s.complete())}}},{id:"wrong-colors",title:"Wrong Colors",reward:5e3,brief:"Some punk is joyriding in the boss's limo. Wreck it. Nobody steals from us.",start(s){let e=x.traffic.laneSpot(s.from(),140,240,60)||x.traffic.laneSpot(s.from(),60,300,60),t=s.car("limo",e.x,e.z,Math.atan2(e.lane.dz,e.lane.dx),"#17181b");t.driver="npc",Ws(t,e.lane,e.t),t.ai.speedScale=1.1,t.mission={target:!0},s.d.car=t,s.goal(t,3)},update(s){let e=s.d.car;if(e.dead)return s.complete();e.ai&&e.ai.mode==="traffic"&&s.near(x.player.pos(),e,30)&&e.ai.panicT<=0&&(e.ai.panicT=8),x.player.vehicle===e&&!s.d.taunt&&(s.d.taunt=!0,s.pager("Ha. Now torch it."))}},{id:"heat-check",title:"Heat Check",reward:4e3,brief:"The cops have your plate. Lose the heat. A respray at Paint & Go works wonders.",start(s){x.police.setAtLeast(3),s.d.shop=s.nearestPaint(),s.goal(s.d.shop,3,8379647)},update(s){x.police.level===0?s.complete():s.d.shop=s.nearestPaint(),s.d.shop&&s.goal(s.d.shop,3,8379647)}},{id:"gauntlet",title:"The Gauntlet",reward:6e3,brief:"Show me what you can drive. Hit every checkpoint before time runs out.",start(s){s.d.phase=0,x.player.inCar?s.startRace():s.pager("Grab something fast first, then the clock starts.")},update(s){let e=x.player;if(s.d.phase===0){e.inCar?s.startRace():s.hint("Get a car to start the race.");return}let t=s.d.cps[s.d.i];if(s.near(e.pos(),t,7)){if(s.d.i++,x.audio?.checkpoint(),s.d.i>=s.d.cps.length)return s.complete();s.goal(s.d.cps[s.d.i],6,6284287),x.hud.toast(`Checkpoint ${s.d.i}/${s.d.cps.length}`)}}},{id:"special-delivery",title:"Special Delivery",reward:8e3,brief:"Pick up the van at the yard and park it outside the rivals' print shop. Don't look in the back.",start(s){let e=s.place("industrial",100,220)||s.place("roadside",100,220),t=s.car("van",e.x,e.z,Ve()*6.28,"#5d6a74");t.ai=null,t.driver=null,s.d.van=t,s.d.phase=0,s.goal(t,3)},update(s){let e=s.d.van,t=x.player;if(s.d.phase<2&&e.dead)return s.fail("The van blew early.");s.d.phase===0&&t.vehicle===e?(s.d.phase=1,s.d.dest=s.place("downtown",180,320)||s.place("roadside",180,320),s.pager("Park it at the print shop. Then walk away. Fast."),s.goal(s.d.dest,5)):s.d.phase===1&&s.near(e,s.d.dest,6)&&e.speed<2?(s.d.phase=2,s.d.fuse=10,e.locked=!0,s.pager("Get out and get clear! Ten seconds!"),s.timer(10,!0),t.vehicle===e&&x.player.exitVehicle(!0),s.goal(null)):s.d.phase===2?(s.d.fuse-=s.dt,s.d.fuse<=0&&(e.locked=!1,e.damage(9999,"mission","explosion"),e.burnTime=0,s.d.phase=3,s.d.wait=1.2)):s.d.phase===3&&(s.d.wait-=s.dt,s.d.wait<=0&&x.player.alive&&s.complete())},noTimeoutFail:!0},{id:"bank-job",title:"Bank Job",reward:12e3,brief:"The crew is hitting the bank downtown. Be their wheels. Bring something with doors.",start(s){let e=s.place("downtown",150,260)||s.place("roadside",150,260);s.d.crew=[0,1,2].map(t=>s.ped("crew",e.x+(t-1)*1.2,e.z+t%2*.8,"pistol")),s.d.phase=0,s.goal(e,3),s.d.pos=e},update(s){let e=x.player,t=s.d.crew.filter(i=>i.alive);if(s.d.phase===0){if(t.length<3)return s.fail("You got the crew killed.");e.inCar&&s.near(e.vehicle,s.d.pos,10)&&e.vehicle.speed<3&&s.board(s.d.crew,e.vehicle,()=>{s.d.phase=1,s.d.car=e.vehicle,x.police.setAtLeast(4),s.d.dest=s.place("residential",260,420)||s.place("roadside",260,420),s.pager("Alarm is ringing! Get us to the hideout!"),s.goal(s.d.dest,5)})}else if(s.d.phase===1){if(s.d.car.dead)return s.fail("The crew went up in flames.");e.vehicle===s.d.car&&s.near(s.d.car,s.d.dest,7)&&s.d.car.speed<3&&(s.unboard(s.d.car),s.complete())}}},{id:"armored-score",title:"The Big Score",reward:25e3,brief:"Last job. An armored truck is doing its rounds. Take it, any way you can.",start(s){let e=x.traffic.laneSpot(s.from(),140,260,60)||x.traffic.laneSpot(s.from(),60,320,60),t=s.car("armored",e.x,e.z,Math.atan2(e.lane.dz,e.lane.dx),"#55604f");t.driver="npc",Ws(t,e.lane,e.t),s.d.car=t,s.d.phase=0,s.goal(t,3)},update(s){let e=s.d.car,t=x.player;if(e.dead)return s.fail("The truck is toast. So is the payday.");s.d.phase===0&&t.vehicle===e?(s.d.phase=1,x.police.setAtLeast(5),s.d.dest=s.place("waterfront",280,460)||s.place("industrial",280,460)||s.place("roadside",280,460),s.pager("That is the one! Get it to the docks. Every cop in town is coming."),s.goal(s.d.dest,6)):s.d.phase===1&&t.vehicle===e&&s.near(e,s.d.dest,8)&&e.speed<4&&(s.deliver(e),s.complete())}}];function w0(s){let e=["delivery","steal","wreck","race","courier"],t=e[s%e.length],i=4e3+s*1500;if(t==="delivery")return{...Ki[0],id:"job-"+s,title:"Drop Run",reward:i,brief:"Get to the drop point in any car. Clock is ticking."};if(t==="steal"){let n=bt(["muscle","sports","pickup","taxi","limo"]);return{...Ki[1],id:"job-"+s,title:"Shopping List",reward:i,brief:`A client wants a ${n==="limo"?"limo":n+" car"}. Bring it to the garage in good shape.`,start(r){let a=r.place("alley",110,260)||r.place("roadside",110,260),o=r.car(n,a.x,a.z,Ve()*6.28);o.ai=null,o.driver=null,r.d.car=o,r.d.phase=0,r.goal(o,3)}}}return t==="wreck"?{...Ki[4],id:"job-"+s,title:"Scrap Job",reward:i,brief:"A rival is cruising in a limo. Make it scrap metal."}:t==="race"?{...Ki[6],id:"job-"+s,title:"Time Trial",reward:i,brief:"Beat the clock through every checkpoint."}:{...Ki[2],id:"job-"+s,title:"Hot Case",reward:i,brief:"Another briefcase, another client. Two minutes."}}var uo=class{constructor(e){this.city=e,this.index=0,this.state="idle",this.phone=null,this.active=null,this.marker=new ho(16763955),this.phoneMarker=new ho(5628042),this.arrow=new vh,this.itemMesh=null,this.ringT=0,this.hintT=0,this.timeLeft=null,this.goalObj=null,this.goalColor=16763955,this.multiplier=1}get total(){return Ki.length}reset(e=0){this.cleanup(),this.index=e,this.state="idle",this.phone=null,this.multiplier=1}def(){return this.index<Ki.length?Ki[this.index]:w0(this.index-Ki.length)}ringPhone(e){let t=e||x.player.pos(),i=this.city.phones,n=i.filter(r=>{let a=Qe(r.x,r.z,t.x,t.z);return a>45&&a<230});n.length||(n=i.filter(r=>Qe(r.x,r.z,t.x,t.z)>30)),n.length||(n=i),n.sort((r,a)=>Qe(r.x,r.z,t.x,t.z)-Qe(a.x,a.z,t.x,t.z)),this.phone=n[Math.min(n.length-1,Math.floor(Ve()*Math.min(3,n.length)))],this.state="idle",x.hud?.pager(this.index===0?"A payphone is ringing. Follow the arrow and walk up to it.":"Another phone is ringing. Follow the arrow.")}begin(){let e=this.def();this.state="active",this.phoneMarker.hide();let t=this.api(e);this.active={def:e,M:t},x.hud?.pager(e.brief,9),x.hud?.missionTitle(e.title),e.start(t)}cleanup(){if(this.active){let e=this.active.M.d;for(let t of this.active.M.spawned)t.isVehicle&&(t.persistent=!1,t.mission=null,t!==x.player?.vehicle&&t.sinceSeen>0&&t.dead&&Pn(t)),t.isPed&&(t.persistent=!1,t.brain&&t.missionTag&&(t.brain=null,t.state="walk"))}this.clearItem(),this.active=null,this.goalObj=null,this.timeLeft=null,this.marker.hide(),this.arrow.hide(),x.hud?.setTimer(null)}clearItem(){this.itemMesh&&(x.scene.remove(this.itemMesh),this.itemMesh=null)}complete(){let e=this.active.def,t=e.reward*this.multiplier;x.player.addCash(t),x.audio?.missionPassed(),x.hud?.big("JOB DONE",`+$${t.toLocaleString()}`,"good"),x.stats.missions++,this.multiplier=Math.min(8,this.multiplier+1),x.hud?.toast(`Multiplier x${this.multiplier}`);let i=this.index===Ki.length-1;this.cleanup(),this.index++,this.state="between",this.wait=4,x.events.missionComplete?.(e,i),i&&x.hud?.pager("That is the whole city. Keep the phones close, there is always more work.",10)}fail(e){this.active&&(x.audio?.missionFailed(),x.hud?.big("JOB FAILED",e,"bad"),x.hud?.pager(e+" Find another phone when you are ready.",8),this.cleanup(),this.state="between",this.wait=5)}abort(){this.active&&(this.cleanup(),this.state="between",this.wait=3)}goal(e,t=3,i=16763955){this.goalObj=e,this.goalR=t,this.goalColor=i}api(e){let t=this,i={d:{},dt:0,spawned:[],def:e,from:()=>x.player.pos(),pager:(n,r)=>x.hud?.pager(n,r),hint(n){t.hintT>0||(t.hintT=9,x.hud?.toast(n))},timer(n){t.timeLeft=n},goal:(n,r,a)=>t.goal(n,r,a),complete:()=>t.complete(),fail:n=>t.fail(n),near(n,r,a){return n&&r&&Qe(n.x,n.z,r.x,r.z)<a},place(n,r,a){let o=x.player.pos(),l=t.city.places[n]||[],c=l.filter(u=>{let p=Qe(u.x,u.z,o.x,o.z);return p>=r&&p<=a});if(c.length)return bt(c);if(!l.length)return null;let h=null,d=1e9;for(let u of l){let p=Math.abs(Qe(u.x,u.z,o.x,o.z)-(r+a)/2);p<d&&(d=p,h=u)}return h},car(n,r,a,o,l){let c=qi(n,r,a,o,{paint:l});return c.persistent=!0,c.mission={tag:e.id},i.spawned.push(c),c},ped(n,r,a,o){let l=bi(n,r,a);return l.persistent=!0,l.missionTag=e.id,l.brain=Cd,l.state="custom",o&&(l.weapon=o),i.spawned.push(l),l},item(n){t.clearItem();let r=new st(new gi(.9,.5,.6),new Et({color:5978654}));r.position.set(n.x,.6,n.z),t.itemMesh=r,x.scene.add(r)},clearItem:()=>t.clearItem(),deliver(n){x.player.vehicle===n&&x.player.exitVehicle(!0),n.locked=!0,n.persistent=!1,n.mission=null,n.ai=null,n.driver=null},board(n,r,a){if(i.d.boarding)return;i.d.boarding=!0;for(let l of n)l.alive&&(l.brain=(c,h)=>{let d=r.doorPos(n.indexOf(c)%2===0?1:-1);c.moveTo(d.x,d.z,3.5)<.9&&(c.hidden=!0,c.vehicle=r,r.passengers.push(c))});let o=()=>{if(n.every(l=>!l.alive||l.hidden))a();else if(x.player.vehicle!==r){i.d.boarding=!1;for(let l of n)l.hidden||(l.brain=Cd)}else setTimeout(o,200)};setTimeout(o,200)},unboard(n){n.passengers.forEach((r,a)=>{let o=n.doorPos(a%2===0?1:-1);r.hidden=!1,r.vehicle=null,r.x=o.x,r.z=o.z,r.brain=null,r.state="walk",r.persistent=!1}),n.passengers.length=0},nearestPaint(){let n=x.player.pos(),r=null,a=1e9;for(let o of Object.values(t.city.specials)){if(!o.name.startsWith("paint"))continue;let l=Qe(o.x,o.z,n.x,n.z);l<a&&(a=l,r=o)}return r},startRace(){i.d.phase=1;let n=[],r=x.player.pos();for(let l=0;l<6;l++){let c=t.city.places.roadside,h=c.filter(u=>{let p=Qe(u.x,u.z,r.x,r.z);return p>90&&p<150&&!n.some(f=>Qe(f.x,f.z,u.x,u.z)<70)}),d=h.length?bt(h):bt(c);n.push(d),r=d}let a=0,o=x.player.pos();for(let l of n)a+=Qe(o.x,o.z,l.x,l.z),o=l;i.d.cps=n,i.d.i=0,i.timer(Math.round(a/15+12)),i.goal(n[0],6,6284287),i.pager("Go go go! Hit the checkpoints.")}};return i}update(e){let t=x.player;if(!t||!t.alive)return;this.hintT-=e;let i=x.realTime;if(this.marker.update(i),this.phoneMarker.update(i),this.itemMesh&&(this.itemMesh.rotation.y+=e*2,this.itemMesh.position.y=.6+Math.sin(i*4)*.15),this.state==="between"){this.wait-=e,this.marker.hide(),this.arrow.hide(),this.wait<=0&&this.ringPhone();return}if(this.state==="idle"){if(!this.phone){this.ringPhone();return}let a=this.phone;this.phoneMarker.set(a.x,a.z,1.6),this.marker.hide(),this.ringT-=e,this.ringT<=0&&(this.ringT=1.4,x.audio?.phoneRing(a.x,a.z)),this.pointArrow(a,5628042),!t.inCar&&Qe(t.ped.x,t.ped.z,a.x,a.z)<2.3&&this.begin();return}let n=this.active;if(n.M.dt=e,this.timeLeft!=null&&(this.timeLeft-=e,x.hud?.setTimer(this.timeLeft),this.timeLeft<=0&&(this.timeLeft=null,x.hud?.setTimer(null),!n.def.noTimeoutFail))){this.fail("Out of time.");return}if(n.def.update(n.M,e),!this.active)return;let r=this.goalObj;r&&!(r.isPed&&r.hidden)&&!(r.isVehicle&&r===t.vehicle)?(this.marker.set(r.x,r.z,this.goalR||3),this.marker.ringMat.color.setHex(this.goalColor),this.marker.beamMat.uniforms.uColor.value.setHex(this.goalColor),this.pointArrow(r,this.goalColor)):(this.marker.hide(),this.arrow.hide())}pointArrow(e,t){let i=x.player,n=i.inCar?i.vehicle:i.ped;if(Qe(n.x,n.z,e.x,e.z)<6){this.arrow.hide();return}let a=i.inCar?i.vehicle.t.L/2+2.6:2.6,o=i.inCar?i.vehicle.t.H+1.2:2.6;this.arrow.point(n.x,n.z,o,e.x,e.z,a,t)}targetPos(){return this.state==="idle"&&this.phone?{x:this.phone.x,z:this.phone.z,kind:"phone"}:this.state==="active"&&this.goalObj?{x:this.goalObj.x,z:this.goalObj.z,kind:"goal"}:null}};function Cd(s,e){s.vx*=.8,s.vz*=.8;let t=x.player;if(t&&t.alive){let i=t.inCar?t.vehicle:t.ped;Qe(i.x,i.z,s.x,s.z)<25&&(s.h=Math.atan2(i.z-s.z,i.x-s.x))}}var po={pistol:{label:"PISTOL",color:"#4d5a3c",weight:26},smg:{label:"SMG",color:"#4d5a3c",weight:15},shotgun:{label:"SHOTGUN",color:"#4d5a3c",weight:12},rocket:{label:"ROCKETS",color:"#6a3a2a",weight:5},flamer:{label:"FLAMER",color:"#6a3a2a",weight:5},health:{label:"HEALTH",color:"#e8e4da",weight:14},armor:{label:"ARMOR",color:"#2f5fa8",weight:10},cash:{label:"CASH",color:"#2f7d4a",weight:9},badge:{label:"BRIBE",color:"#1d2b4f",weight:6}},Rr=null,T0=new Xe(1,1,1),Xs=Object.keys(po);function xh(s,e,t,i,n){s.save(),s.translate(t,i),s.scale(n/100,n/100),s.lineJoin="round",s.lineCap="round";let r="#14161a",a="#f3efe3",o="#ffc61a";switch(e){case"pistol":s.fillStyle=a,s.fillRect(18,34,60,16),s.fillRect(22,48,18,30),s.fillStyle=r,s.fillRect(42,50,10,8);break;case"smg":s.fillStyle=a,s.fillRect(10,36,74,14),s.fillRect(30,50,14,30),s.fillRect(52,50,10,22),s.fillRect(84,40,8,6);break;case"shotgun":s.fillStyle=a,s.fillRect(6,40,86,10),s.fillRect(6,50,26,16),s.fillStyle=r,s.fillRect(44,49,22,6),s.fillStyle=a,s.fillRect(44,50,22,8);break;case"rocket":s.fillStyle=a,s.fillRect(8,40,70,18),s.beginPath(),s.moveTo(78,34),s.lineTo(96,49),s.lineTo(78,64),s.fill(),s.fillRect(30,58,10,18);break;case"flamer":s.fillStyle=o,s.beginPath(),s.moveTo(50,12),s.bezierCurveTo(82,40,78,86,50,88),s.bezierCurveTo(22,86,18,54,38,36),s.bezierCurveTo(40,52,50,54,50,12),s.fill(),s.fillStyle="#ff6a2a",s.beginPath(),s.moveTo(50,46),s.bezierCurveTo(66,60,62,82,50,82),s.bezierCurveTo(38,82,36,66,50,46),s.fill();break;case"health":s.fillStyle="#d6332b",s.fillRect(38,14,24,72),s.fillRect(14,38,72,24);break;case"armor":s.fillStyle=a,s.beginPath(),s.moveTo(50,10),s.lineTo(84,22),s.lineTo(80,56),s.quadraticCurveTo(70,80,50,90),s.quadraticCurveTo(30,80,20,56),s.lineTo(16,22),s.closePath(),s.fill(),s.fillStyle="#2f5fa8",s.fillRect(44,30,12,40),s.fillRect(32,42,36,12);break;case"cash":s.fillStyle=a,s.font='bold 86px Impact, "Arial Black", sans-serif',s.textAlign="center",s.textBaseline="middle",s.fillText("$",50,54);break;case"badge":s.fillStyle=o,s.beginPath();for(let l=0;l<10;l++){let c=-Math.PI/2+l*Math.PI/5,h=l%2?18:40;s.lineTo(50+Math.cos(c)*h,52+Math.sin(c)*h)}s.closePath(),s.fill(),s.fillStyle="#1d2b4f",s.fillRect(36,47,28,9);break;case"fists":s.fillStyle=a,s.beginPath(),s.roundRect?s.roundRect(22,30,56,44,12):s.rect(22,30,56,44),s.fill(),s.fillStyle=r;for(let l=0;l<3;l++)s.fillRect(36+l*14,30,3,20);break}s.restore()}function E0(){if(Rr)return Rr;let s=document.createElement("canvas");s.width=128*Xs.length,s.height=128;let e=s.getContext("2d");return Xs.forEach((t,i)=>{e.fillStyle=po[t].color,e.fillRect(i*128,0,128,128),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=6,e.strokeRect(i*128+5,5,118,118),xh(e,t,i*128+14,14,100)}),Rr=new Rs(s),Rr.anisotropy=4,Rr}var fo=class{constructor(e){this.items=e.pickupSpots.map((t,i)=>({x:t.x,z:t.z,type:null,respawn:i%5*.5,mesh:null})),this.tex=E0(),this.geos={}}geo(e){if(this.geos[e])return this.geos[e];let t=Xs.indexOf(e),i=new gi(1.1,.75,1.1),n=i.attributes.uv;for(let r=0;r<n.count;r++)n.setX(r,(t+n.getX(r))/Xs.length);return this.geos[e]=i,i}roll(){let e=0;for(let i of Xs)e+=po[i].weight;let t=Ve()*e;for(let i of Xs)if(t-=po[i].weight,t<=0)return i;return"pistol"}update(e){let t=x.player,i=x.realTime;for(let n of this.items){if(!n.type){n.respawn-=e,n.respawn<=0&&(n.type=this.roll(),n.mesh=new st(this.geo(n.type),new Et({map:this.tex})),n.mesh.position.set(n.x,.7,n.z),x.scene.add(n.mesh));continue}if(n.mesh.rotation.y=i*1.6+n.x,x.light.tint&&n.mesh.material.color.copy(x.light.tint).lerp(T0,.35),n.mesh.position.y=.75+Math.sin(i*3+n.z)*.18,!t||!t.alive)continue;let r=t.inCar?t.vehicle:t.ped,a=t.inCar?t.vehicle.t.L/2+.6:1.3;Qe(r.x,r.z,n.x,n.z)<a&&this.collect(n)}}collect(e){let t=x.player,i=e.type,n="";if(Vs[i]){let r=Vs[i];t.ammo[i]=Math.min(r.max,(t.ammo[i]||0)+r.pickup),(t.weapon==="fists"||!(t.ammo[t.weapon]>0))&&(t.weapon=i),n=`${r.name} +${r.pickup}`}else if(i==="health"){if(t.ped.health>=100)return;t.ped.health=Math.min(100,t.ped.health+60),n="Health"}else if(i==="armor"){if(t.ped.armor>=100)return;t.ped.armor=100,n="Armor"}else if(i==="cash"){let r=bt([250,500,500,1e3]);t.addCash(r),n=`+$${r}`}else if(i==="badge"){if(x.police.level===0)return;x.police.heat=Math.max(0,Math.floor(x.police.heat)-.01),x.police.heat<1&&(x.police.heat=0,x.police.disengageAll()),n="Heat down"}x.scene.remove(e.mesh),e.mesh.material.dispose(),e.mesh=null,e.type=null,e.respawn=50+Ve()*20,x.audio?.pickup(),x.hud?.toast(n)}};var Jn=s=>440*Math.pow(2,(s-69)/12),mo=class{constructor(){this.ctx=null,this.sfxOn=!0,this.musicOn=!0,this.station=0,this.lastShot={}}init(){if(this.ctx){this.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-16,this.comp.knee.value=12,this.comp.ratio.value=4,this.master=t.createGain(),this.master.gain.value=.9,this.master.connect(this.comp).connect(t.destination),this.sfx=t.createGain(),this.sfx.gain.value=this.sfxOn?1:0,this.sfx.connect(this.master),this.mus=t.createGain(),this.mus.gain.value=0,this.mus.connect(this.master);let i=t.sampleRate*1.5,n=t.createBuffer(1,i,t.sampleRate),r=n.getChannelData(0);for(let a=0;a<i;a++)r[a]=Ve()*2-1;this.noise=n,this.setupLoops(),this.musicT=0,this.step=0,this.nextStepTime=0,this.radioOn=!1}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}setSfx(e){this.sfxOn=e,this.sfx&&(this.sfx.gain.value=e?1:0)}setMusic(e){this.musicOn=e}att(e,t,i=70){if(e==null||!x.cam)return 1;let n=Math.hypot(e-x.cam.cx,t-x.cam.cz);return Ye(1-n/i,0,1)**1.4}noiseSrc(){let e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=!0,e.loopStart=Ve(),e}burst({dur:e=.2,gain:t=.5,type:i="lowpass",freq:n=1200,q:r=.7,freqEnd:a,attack:o=.002,x:l,z:c,range:h,bus:d}){if(!this.ctx)return;let u=this.att(l,c,h);if(u<=.01)return;let p=this.ctx.currentTime,f=this.noiseSrc(),v=this.ctx.createBiquadFilter();v.type=i,v.frequency.setValueAtTime(n,p),v.Q.value=r,a&&v.frequency.exponentialRampToValueAtTime(a,p+e);let m=this.ctx.createGain();m.gain.setValueAtTime(1e-4,p),m.gain.exponentialRampToValueAtTime(t*u,p+o),m.gain.exponentialRampToValueAtTime(1e-4,p+e),f.connect(v).connect(m).connect(d||this.sfx),f.start(p,Ve()),f.stop(p+e+.05)}tone({type:e="sine",freq:t=440,freqEnd:i,dur:n=.2,gain:r=.3,attack:a=.005,x:o,z:l,range:c,when:h=0,bus:d,detune:u=0}){if(!this.ctx)return;let p=this.att(o,l,c);if(p<=.01)return;let f=this.ctx.currentTime+h,v=this.ctx.createOscillator();v.type=e,v.frequency.setValueAtTime(t,f),v.detune.value=u,i&&v.frequency.exponentialRampToValueAtTime(i,f+n);let m=this.ctx.createGain();m.gain.setValueAtTime(1e-4,f),m.gain.exponentialRampToValueAtTime(r*p,f+a),m.gain.exponentialRampToValueAtTime(1e-4,f+n),v.connect(m).connect(d||this.sfx),v.start(f),v.stop(f+n+.05)}shot(e,t,i){if(!this.ctx)return;let n=this.ctx.currentTime;e==="smg"&&this.lastShot.smg&&n-this.lastShot.smg<.05||(this.lastShot[e]=n,e==="pistol"?(this.burst({dur:.16,gain:.55,freq:2400,freqEnd:300,x:t,z:i}),this.tone({type:"triangle",freq:160,freqEnd:50,dur:.12,gain:.35,x:t,z:i})):e==="smg"?(this.burst({dur:.09,gain:.42,freq:3e3,freqEnd:500,x:t,z:i}),this.tone({type:"square",freq:120,freqEnd:60,dur:.06,gain:.12,x:t,z:i})):e==="shotgun"?(this.burst({dur:.38,gain:.8,freq:1600,freqEnd:120,x:t,z:i}),this.tone({type:"sine",freq:110,freqEnd:35,dur:.3,gain:.5,x:t,z:i})):e==="rocket"&&this.burst({dur:.7,gain:.45,type:"bandpass",freq:900,freqEnd:300,q:1.2,x:t,z:i}))}explosion(e,t){this.burst({dur:1.6,gain:1,freq:900,freqEnd:60,x:e,z:t,range:140}),this.tone({type:"sine",freq:90,freqEnd:25,dur:1.1,gain:.8,x:e,z:t,range:140}),this.burst({dur:.25,gain:.6,type:"highpass",freq:2500,x:e,z:t,range:140})}crash(e,t,i){let n=Ye(e/14,.15,1);this.burst({dur:.25+n*.2,gain:.7*n,freq:1400,freqEnd:200,x:t,z:i}),this.tone({type:"square",freq:90+Ve()*60,freqEnd:40,dur:.15,gain:.25*n,x:t,z:i}),n>.5&&this.burst({dur:.35,gain:.25*n,type:"bandpass",freq:3500,q:3,x:t,z:i})}punch(e,t){this.burst({dur:.12,gain:.5,freq:700,freqEnd:120,x:e,z:t})}whoosh(e,t){this.burst({dur:.15,gain:.15,type:"bandpass",freq:900,freqEnd:2200,q:2,x:e,z:t})}thud(e,t){this.tone({type:"sine",freq:140,freqEnd:50,dur:.18,gain:.55,x:e,z:t}),this.burst({dur:.12,gain:.35,freq:600,x:e,z:t})}flame(e,t){if(!this.ctx)return;let i=this.ctx.currentTime;this.lastShot.flame&&i-this.lastShot.flame<.09||(this.lastShot.flame=i,this.burst({dur:.18,gain:.3,type:"bandpass",freq:500,q:.6,x:e,z:t}))}horn(e,t,i=.4){this.tone({type:"sawtooth",freq:392,dur:i,gain:.16,attack:.02,x:e,z:t}),this.tone({type:"sawtooth",freq:494,dur:i,gain:.14,attack:.02,x:e,z:t})}pickup(){[0,.07,.14].forEach((e,t)=>this.tone({type:"square",freq:Jn(76+t*4),dur:.12,gain:.12,when:e}))}checkpoint(){this.tone({type:"triangle",freq:Jn(84),dur:.15,gain:.25}),this.tone({type:"triangle",freq:Jn(91),dur:.25,gain:.25,when:.09})}pagerBeep(){for(let e=0;e<3;e++)this.tone({type:"square",freq:2093,dur:.07,gain:.08,when:e*.11})}wantedUp(){this.tone({type:"square",freq:880,dur:.1,gain:.1}),this.tone({type:"square",freq:660,dur:.14,gain:.1,when:.1})}phoneRing(e,t){for(let i=0;i<2;i++)for(let n=0;n<8;n++)this.tone({type:"sine",freq:n%2?480:620,dur:.05,gain:.18,when:i*.45+n*.045,x:e,z:t,range:90})}missionPassed(){[72,76,79,84].forEach((t,i)=>this.tone({type:"square",freq:Jn(t),dur:.22,gain:.13,when:i*.11})),this.tone({type:"triangle",freq:Jn(48),dur:.6,gain:.25,when:.33})}missionFailed(){[64,61,57].forEach((e,t)=>this.tone({type:"square",freq:Jn(e),dur:.25,gain:.12,when:t*.16}))}wasted(){this.tone({type:"sawtooth",freq:220,freqEnd:55,dur:1.4,gain:.25})}busted(){for(let e=0;e<4;e++)this.tone({type:"square",freq:e%2?784:988,dur:.18,gain:.12,when:e*.2})}spray(){this.burst({dur:1.2,gain:.3,type:"highpass",freq:3e3,attack:.1})}click(){this.tone({type:"square",freq:1200,dur:.03,gain:.06})}setupLoops(){let e=this.ctx;this.eng={o1:e.createOscillator(),o2:e.createOscillator(),f:e.createBiquadFilter(),g:e.createGain()};let t=this.eng;t.o1.type="sawtooth",t.o2.type="square",t.f.type="lowpass",t.f.frequency.value=400,t.f.Q.value=2,t.g.gain.value=0,t.o1.connect(t.f),t.o2.connect(t.f),t.f.connect(t.g).connect(this.sfx),t.o1.start(),t.o2.start(),this.sk={s:this.noiseSrc(),f:e.createBiquadFilter(),g:e.createGain()},this.sk.f.type="bandpass",this.sk.f.frequency.value=1700,this.sk.f.Q.value=6,this.sk.g.gain.value=0,this.sk.s.connect(this.sk.f).connect(this.sk.g).connect(this.sfx),this.sk.s.start(),this.sir={o:e.createOscillator(),lfo:e.createOscillator(),lg:e.createGain(),g:e.createGain()};let i=this.sir;i.o.type="triangle",i.o.frequency.value=760,i.lfo.type="sine",i.lfo.frequency.value=.55,i.lg.gain.value=260,i.lfo.connect(i.lg).connect(i.o.frequency),i.g.gain.value=0,i.o.connect(i.g).connect(this.sfx),i.o.start(),i.lfo.start()}engine(e,t,i){if(!this.ctx)return;let n=this.eng,r=this.ctx.currentTime;if(!e){n.g.gain.setTargetAtTime(0,r,.08);return}let a=4,o=Ye(t,0,1)*a,l=Math.min(a-1,Math.floor(o)),h=.22+(o-l)*.78*(l===0?1:.85)+(l===0?0:.12),d=32+h*70+i*6;n.o1.frequency.setTargetAtTime(d,r,.05),n.o2.frequency.setTargetAtTime(d*.5,r,.05),n.f.frequency.setTargetAtTime(250+h*900+i*500,r,.08),n.g.gain.setTargetAtTime(.06+i*.06+h*.03,r,.08)}skid(e){this.ctx&&this.sk.g.gain.setTargetAtTime(Ye(e,0,1)*.22,this.ctx.currentTime,.05)}siren(e){this.ctx&&this.sir.g.gain.setTargetAtTime(Ye(e,0,1)*.09,this.ctx.currentTime,.2)}radio(e){this.radioOn=e&&this.musicOn,this.ctx&&(this.mus.gain.setTargetAtTime(this.radioOn?.5:0,this.ctx.currentTime,.3),this.radioOn&&this.nextStepTime<this.ctx.currentTime&&(this.nextStepTime=this.ctx.currentTime+.05))}nextStation(){return this.station=(this.station+1)%($n.length+1),this.stationName()}stationName(){return this.station===$n.length?"Radio off":$n[this.station].name}pickStation(){return this.station=Math.floor(Ve()*$n.length),this.stationName()}tick(){if(!this.ctx||!this.radioOn||this.station>=$n.length)return;let e=$n[this.station],t=60/e.bpm/4,i=this.ctx.currentTime;for(this.nextStepTime<i-.2&&(this.nextStepTime=i+.02);this.nextStepTime<i+.18;){e.play(this,this.step,this.nextStepTime,t);let n=e.swing&&this.step%2===0?t*e.swing:e.swing?-t*e.swing:0;this.nextStepTime+=t+n,this.step=(this.step+1)%256}}kick(e,t=.9){let i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(140,e),i.frequency.exponentialRampToValueAtTime(42,e+.14),n.gain.setValueAtTime(t,e),n.gain.exponentialRampToValueAtTime(.001,e+.3),i.connect(n).connect(this.mus),i.start(e),i.stop(e+.32)}snare(e,t=.35){let i=this.noiseSrc(),n=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="bandpass",n.frequency.value=1800,n.Q.value=.8,r.gain.setValueAtTime(t,e),r.gain.exponentialRampToValueAtTime(.001,e+.18),i.connect(n).connect(r).connect(this.mus),i.start(e,Ve()),i.stop(e+.2);let a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle",a.frequency.setValueAtTime(220,e),a.frequency.exponentialRampToValueAtTime(140,e+.08),o.gain.setValueAtTime(t*.6,e),o.gain.exponentialRampToValueAtTime(.001,e+.1),a.connect(o).connect(this.mus),a.start(e),a.stop(e+.12)}hat(e,t=.12,i=!1){let n=this.noiseSrc(),r=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.type="highpass",r.frequency.value=7500;let o=i?.22:.05;a.gain.setValueAtTime(t,e),a.gain.exponentialRampToValueAtTime(.001,e+o),n.connect(r).connect(a).connect(this.mus),n.start(e,Ve()),n.stop(e+o+.02)}synth(e,t,i,{type:n="sawtooth",g:r=.12,cutoff:a=1800,q:o=1,detune:l=0,attack:c=.005,release:h=.08}={}){let d=this.ctx.createOscillator(),u=this.ctx.createBiquadFilter(),p=this.ctx.createGain();d.type=n,d.frequency.value=Jn(t),d.detune.value=l,u.type="lowpass",u.frequency.setValueAtTime(a,e),u.frequency.exponentialRampToValueAtTime(Math.max(120,a*.35),e+i),u.Q.value=o,p.gain.setValueAtTime(1e-4,e),p.gain.exponentialRampToValueAtTime(r,e+c),p.gain.setValueAtTime(r,e+Math.max(c,i-h)),p.gain.exponentialRampToValueAtTime(1e-4,e+i+h),d.connect(u).connect(p).connect(this.mus),d.start(e),d.stop(e+i+h+.02)}},$n=[{name:"KICKBACK 98.3",bpm:118,prog:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],play(s,e,t,i){let n=Math.floor(e/16)%4,r=e%16,a=this.prog[n];r%4===0&&s.kick(t,.75),r%4===2&&s.hat(t,.1,r===14),(r===4||r===12)&&s.snare(t,.22);let l=[0,null,0,12,null,0,null,7,0,null,0,12,null,7,5,null][r];if(l!=null&&s.synth(t,a[0]-24+l,i*.9,{type:"sawtooth",g:.13,cutoff:700,q:4}),r===2||r===6||r===10)for(let c of a)s.synth(t,c+12,i*1.4,{type:"sawtooth",g:.035,cutoff:2600,detune:8});if(r%2===0&&n%2===1){let c=[a[0],a[1],a[2],a[1]+12];s.synth(t,c[r/2%4]+24,i*.8,{type:"square",g:.03,cutoff:3e3})}}},{name:"LATE SHIFT 88.1",bpm:82,swing:.18,prog:[[62,65,69,72],[55,59,62,65],[60,64,67,71],[57,60,64,67]],play(s,e,t,i){let n=Math.floor(e/16)%4,r=e%16,a=this.prog[n];if((r===0||r===10)&&s.kick(t,.6),(r===4||r===12)&&s.snare(t,.16),r%2===0&&s.hat(t,.06),r===0||r===8)for(let o of a)s.synth(t,o,i*7,{type:"triangle",g:.05,cutoff:1500,attack:.02,release:.4});(r===0||r===6||r===10)&&s.synth(t,a[0]-24,i*3,{type:"sine",g:.22,cutoff:600}),(r===3||r===13)&&Ve()<.7&&s.synth(t,bt(a)+12,i*2,{type:"sine",g:.05,cutoff:3e3,release:.2})}},{name:"OVERDRIVE 101.7",bpm:152,prog:[[52,55,59],[48,52,55],[50,53,57],[47,50,54]],melody:null,play(s,e,t,i){let n=Math.floor(e/16)%4,r=e%16,a=this.prog[n];if(!this.melody||e%128===0&&r===0){let l=[0,3,5,7,10,12,15];this.melody=Array.from({length:32},()=>Ve()<.65?64+bt(l):null)}r%8===0&&s.kick(t,.8),r%8===4&&s.snare(t,.3),r%2===0&&s.hat(t,.07),r%2===0&&s.synth(t,a[0]-12,i*1.6,{type:"square",g:.07,cutoff:900});let o=this.melody[e%32];o!=null&&r%2===0&&s.synth(t,o,i*1.8,{type:"square",g:.04,cutoff:3500})}}],Yx=$n.length;var go=class{constructor(){this.stick={x:0,y:0,active:!1,id:null,ox:0,oy:0},this.keys=new Set,this.held={a:!1,c:!1},this.edges=new Set,this.touchMode=!1,this.R=56,this.bindKeyboard()}take(e){return this.edges.has(e)?(this.edges.delete(e),!0):!1}clearEdges(){this.edges.clear()}press(e){this.edges.add(e)}bindKeyboard(){let e={Space:"a",KeyJ:"a",Enter:"b",KeyE:"b",KeyF:"b",KeyQ:"weapon",Tab:"weapon",KeyH:"horn",KeyR:"radio",KeyP:"pause",Escape:"pause",KeyM:"map"};addEventListener("keydown",t=>{if(t.target&&(t.target.tagName==="INPUT"||t.target.tagName==="SELECT"))return;let i=t.code;if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Tab"].includes(i)&&t.preventDefault(),!this.keys.has(i)){let n=e[i];n&&this.press(n)}this.keys.add(i),this.touchMode=!1}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>{this.keys.clear(),this.resetStick(),this.held.a=this.held.c=!1})}bindTouch(e,t,i,n){this.zone=e,this.base=t,this.knob=i;let r=l=>{if(this.stick.id!==null)return;l.preventDefault(),this.touchMode=!0,this.stick.id=l.pointerId,this.stick.active=!0;let c=e.getBoundingClientRect();this.stick.ox=l.clientX,this.stick.oy=l.clientY,t.style.transform=`translate(${l.clientX-c.left}px, ${l.clientY-c.top}px)`,t.classList.add("on");try{e.setPointerCapture?.(l.pointerId)}catch{}this.moveStick(l)},a=l=>{l.pointerId===this.stick.id&&(l.preventDefault(),this.moveStick(l))},o=l=>{l.pointerId===this.stick.id&&this.resetStick()};e.addEventListener("pointerdown",r),e.addEventListener("pointermove",a),e.addEventListener("pointerup",o),e.addEventListener("pointercancel",o),e.addEventListener("lostpointercapture",o);for(let[l,c,h]of n){let d=p=>{p.preventDefault(),this.touchMode=!0,l.classList.add("down");try{l.setPointerCapture?.(p.pointerId)}catch{}h==="hold"&&(this.held[c]=!0),this.press(c),navigator.vibrate?.(8)},u=p=>{p.preventDefault?.(),l.classList.remove("down"),h==="hold"&&(this.held[c]=!1)};l.addEventListener("pointerdown",d),l.addEventListener("pointerup",u),l.addEventListener("pointercancel",u),l.addEventListener("lostpointercapture",u),l.addEventListener("contextmenu",p=>p.preventDefault())}}moveStick(e){let t=e.clientX-this.stick.ox,i=e.clientY-this.stick.oy,n=Math.hypot(t,i),r=this.R;if(n>r){let a=n-r;this.stick.ox+=t/n*a,this.stick.oy+=i/n*a;let o=this.zone.getBoundingClientRect();this.base.style.transform=`translate(${this.stick.ox-o.left}px, ${this.stick.oy-o.top}px)`,t=t/n*r,i=i/n*r}this.stick.x=t/r,this.stick.y=i/r,this.knob.style.transform=`translate(${t}px, ${i}px)`}resetStick(){this.stick.id=null,this.stick.active=!1,this.stick.x=this.stick.y=0,this.knob&&(this.knob.style.transform="translate(0px, 0px)"),this.base?.classList.remove("on")}move(){let e=0,t=0,i=this.keys;if((i.has("KeyA")||i.has("ArrowLeft"))&&(e-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(e+=1),(i.has("KeyW")||i.has("ArrowUp"))&&(t-=1),(i.has("KeyS")||i.has("ArrowDown"))&&(t+=1),e||t){let o=Math.hypot(e,t);return{x:e/o,y:t/o,mag:1,keyboard:!0}}let n=this.stick,r=Math.hypot(n.x,n.y);if(r<.14)return{x:0,y:0,mag:0,keyboard:!1};let a=Ye((r-.14)/.86,0,1);return{x:n.x/r*a,y:n.y/r*a,mag:a,keyboard:!1}}get a(){return this.held.a||this.keys.has("Space")||this.keys.has("KeyJ")}get c(){return this.held.c||this.keys.has("KeyH")}get handbrake(){return this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}get keyboardDrive(){return this.keys.size>0&&!this.touchMode}};var _t=s=>document.getElementById(s),qs={fire:'<circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/>',brake:'<rect x="5" y="4" width="14" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h8"/>',enter:'<path d="M10 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4"/><path d="M14 8l4 4-4 4M18 12H9"/>',exit:'<path d="M14 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4"/><path d="M10 8l-4 4 4 4M6 12h9"/>',swap:'<path d="M4 9h13l-3-3M20 15H7l3 3"/>',horn:'<path d="M4 10v4h3l6 4V6L7 10H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>'},A0={[re.WATER]:"#1d4d66",[re.ROAD]:"#5a5e65",[re.SIDEWALK]:"#8d8a82",[re.BUILDING]:"#25272b",[re.GRASS]:"#41693a",[re.PLAZA]:"#8f8676",[re.ALLEY]:"#4b4945",[re.PARKING]:"#4d4f53",[re.DOCK]:"#6e5438",[re.BRIDGE]:"#6b6f76",[re.SAND]:"#b4a272",[re.WALL]:"#333"},vo=class{constructor(){this.el={hud:_t("hud"),cash:_t("cash"),mult:_t("mult"),health:_t("healthbar").firstElementChild,armorbar:_t("armorbar"),armor:_t("armorbar").firstElementChild,lives:_t("lives"),pager:_t("pager"),pagerText:_t("pagertext"),timer:_t("timer"),mtitle:_t("mtitle"),wanted:_t("wanted"),lamps:[..._t("wanted").children],minimap:_t("minimap"),wicon:_t("wicon"),ammo:_t("ammo"),big:_t("big"),bigTitle:_t("bigtitle"),bigSub:_t("bigsub"),toasts:_t("toasts"),radio:_t("radio"),vname:_t("vname"),rotate:_t("rotate"),fps:_t("fps"),iconA:_t("iconA"),iconB:_t("iconB"),iconC:_t("iconC"),labelA:_t("labelA"),labelB:_t("labelB"),labelC:_t("labelC"),btnB:_t("btnB")},this.cache={},this.pagerT=0,this.bigT=0,this.mmCtx=this.el.minimap.getContext("2d"),this.wCtx=this.el.wicon.getContext("2d"),this.mapT=0,this.vnameT=0,this.rotateDismissed=!1,this.el.rotate.addEventListener("pointerdown",()=>{this.rotateDismissed=!0,this.el.rotate.hidden=!0}),this.rotateT=6}buildMap(e){let t=document.createElement("canvas");t.width=e.W*2,t.height=e.H*2;let i=t.getContext("2d");for(let n=0;n<e.H;n++)for(let r=0;r<e.W;r++)i.fillStyle=A0[e.tiles[n*e.W+r]]||"#000",i.fillRect(r*2,n*2,2,2);for(let n of Object.values(e.specials))i.fillStyle=n.building.special==="police"?"#3d7bff":n.building.special==="hospital"?"#ff5a4a":"#ffc61a",i.fillRect(n.building.x0*2,n.building.z0*2,(n.building.x1-n.building.x0)*2,(n.building.z1-n.building.z0)*2);this.baseMap=t}show(e){this.el.hud.hidden=!e}set(e,t,i){this.cache[e]!==t&&(this.cache[e]=t,i(t))}pager(e,t=7){let i=this.el;i.pagerText.textContent=e,i.pager.classList.remove("idle","flash"),i.pager.offsetWidth,i.pager.classList.add("flash"),this.pagerT=t,x.audio?.pagerBeep()}missionTitle(e){this.el.mtitle.textContent=e,this.el.mtitle.hidden=!e,this.mtitleT=6}setTimer(e){if(e==null){this.el.timer.hidden=!0,this.cache.timer=null;return}this.el.timer.hidden=!1;let t=td(e);this.set("timer",t,i=>{this.el.timer.textContent=i,this.el.timer.classList.toggle("low",e<10)})}big(e,t="",i=""){let n=this.el;n.bigTitle.textContent=e,n.bigSub.textContent=t,n.big.className=i,n.big.hidden=!1,n.big.offsetWidth,n.big.classList.add("show"),this.bigT=3.2}toast(e){if(!e)return;let t=document.createElement("div");for(t.className="toast",t.textContent=e,this.el.toasts.appendChild(t);this.el.toasts.children.length>3;)this.el.toasts.firstChild.remove();setTimeout(()=>t.classList.add("out"),2200),setTimeout(()=>t.remove(),2800)}cashPulse(){let e=this.el.cash;e.classList.add("pulse"),clearTimeout(this.cpT),this.cpT=setTimeout(()=>e.classList.remove("pulse"),180)}flashWanted(){let e=this.el.wanted;e.classList.add("flash"),clearTimeout(this.fwT),this.fwT=setTimeout(()=>e.classList.remove("flash"),1600)}radio(e){let t=this.el.radio;if(!e){t.hidden=!0;return}t.hidden=!1,t.textContent=e}vehicleName(e){this.el.vname.textContent=e,this.el.vname.hidden=!1,this.el.vname.style.opacity=1,this.vnameT=2.5}buttons(e,t){let i=(e?"car":"foot")+(t?1:0);this.set("btns",i,()=>{let n=this.el;n.iconA.innerHTML=e?qs.brake:qs.fire,n.labelA.textContent=e?"BRAKE":"FIRE",n.iconB.innerHTML=e?qs.exit:qs.enter,n.labelB.textContent=e?"EXIT":"ENTER",n.iconC.innerHTML=e?qs.horn:qs.swap,n.labelC.textContent=e?"HORN":"SWAP",n.btnB.classList.toggle("dim",!e&&!t)})}update(e){let t=x.player,i=this.el;if(!t)return;this.set("cash",t.cash,d=>{i.cash.textContent="$"+Jc(d)}),this.set("mult",x.missions.multiplier,d=>{i.mult.textContent="×"+d}),this.set("lives",t.lives,d=>{i.lives.textContent="Lives "+d});let n=Ye(t.ped.health/100,0,1);this.set("hp",Math.round(n*100),()=>{i.health.style.transform=`scaleX(${n})`,i.health.style.background=n<.3?"var(--bad)":n<.6?"#f2c230":"var(--good)"});let r=Ye(t.ped.armor/100,0,1);this.set("ar",Math.round(r*100),()=>{i.armorbar.hidden=r<=0,i.armor.style.transform=`scaleX(${r})`});let a=x.police.level;this.set("wanted",a,d=>{i.lamps.forEach((u,p)=>{u.className=p<d?p%2?"on b":"on":""})});let o=a>0&&!x.police.seen;this.set("lost",o,d=>i.wanted.classList.toggle("lost",d));let l=t.weapon,c=t.ammo[l];this.set("wpn",l+":"+c,()=>{let d=this.wCtx;d.clearRect(0,0,68,68),xh(d,l,2,2,64),i.ammo.textContent=l==="fists"?"–":String(c)}),this.pagerT>0&&(this.pagerT-=e,this.pagerT<=0&&i.pager.classList.add("idle")),this.mtitleT>0&&(this.mtitleT-=e,this.mtitleT<=0&&(i.mtitle.hidden=!0)),this.bigT>0&&(this.bigT-=e,this.bigT<=0&&(i.big.hidden=!0)),this.vnameT>0&&(this.vnameT-=e,this.vnameT<=.6&&(i.vname.style.opacity=0),this.vnameT<=0&&(i.vname.hidden=!0));let h=innerHeight>innerWidth;h&&this.rotateT>0&&(this.rotateT-=e,this.rotateT<=0&&(this.rotateDismissed=!0)),this.set("rot",h&&!this.rotateDismissed,d=>{i.rotate.hidden=!d}),this.mapT-=e,this.mapT<=0&&(this.mapT=1/15,this.drawMinimap())}drawMinimap(){let e=this.mmCtx,t=208,i=t/2,n=x.player,r=n.pos(),a=2.2,o=r.x/4*2,l=r.z/4*2;e.save(),e.clearRect(0,0,t,t),e.beginPath(),e.arc(i,i,i,0,Math.PI*2),e.clip(),e.fillStyle="#1d4d66",e.fillRect(0,0,t,t),e.imageSmoothingEnabled=!1,e.drawImage(this.baseMap,o-i/a,l-i/a,t/a,t/a,0,0,t,t);let c=(u,p)=>[i+(u/4*2-o)*a,i+(p/4*2-l)*a];for(let u of x.vehicles){if(!u.ai||u.ai.mode!=="pursuit"&&u.ai.mode!=="waiting")continue;let[p,f]=c(u.x,u.z);e.fillStyle=x.realTime*4%2<1?"#ff3b3b":"#3d7bff",e.fillRect(p-4,f-4,8,8)}let h=x.missions.targetPos();if(h){let[u,p]=c(h.x,h.z),f=u-i,v=p-i,m=Math.hypot(f,v),g=h.kind==="phone"?"#55e08a":"#ffc61a";if(e.fillStyle=g,e.strokeStyle="#000",e.lineWidth=2,m>i-12){u=i+f/m*(i-12),p=i+v/m*(i-12);let _=Math.atan2(v,f);e.save(),e.translate(u,p),e.rotate(_),e.beginPath(),e.moveTo(10,0),e.lineTo(-6,-8),e.lineTo(-6,8),e.closePath(),e.fill(),e.stroke(),e.restore()}else e.beginPath(),e.arc(u,p,7,0,Math.PI*2),e.fill(),e.stroke()}let d=n.inCar?n.vehicle:n.ped;e.translate(i,i),e.rotate(d.h),e.fillStyle="#fff",e.strokeStyle="#000",e.lineWidth=2,e.beginPath(),e.moveTo(10,0),e.lineTo(-7,-7),e.lineTo(-3,0),e.lineTo(-7,7),e.closePath(),e.fill(),e.stroke(),e.restore()}drawBigMap(e){let t=e.getContext("2d"),i=e.width;t.imageSmoothingEnabled=!1,t.drawImage(this.baseMap,0,0,i,i);let n=i/(x.city.W*4);for(let l of x.city.phones)t.fillStyle="#55e08a88",t.fillRect(l.x*n-3,l.z*n-3,6,6);let r=x.missions.targetPos();r&&(t.fillStyle=r.kind==="phone"?"#55e08a":"#ffc61a",t.strokeStyle="#000",t.lineWidth=3,t.beginPath(),t.arc(r.x*n,r.z*n,9,0,Math.PI*2),t.fill(),t.stroke());let a=x.player.pos();t.fillStyle="#fff",t.strokeStyle="#000",t.lineWidth=3,t.beginPath(),t.arc(a.x*n,a.z*n,8,0,Math.PI*2),t.fill(),t.stroke(),t.font='600 20px "Barlow Condensed", sans-serif',t.fillStyle="#f3efe3",t.strokeStyle="#000",t.lineWidth=4;let o=(l,c,h)=>{t.strokeText(l,c,h),t.fillText(l,c,h)};for(let l of Object.values(x.city.specials)){let c=l.building.special==="police"?"Police":l.building.special==="hospital"?"Hospital":"Paint & Go";o(c,l.x*n+8,l.z*n-8)}}showFps(e,t){this.el.fps.hidden=!1,this.el.fps.textContent=`${e} fps · ${t}`}};var xo=class{constructor(e){this.camera=e,this.x=0,this.z=0,this.h=60,this.lx=0,this.lz=0,this.vfov=38,this.aspect=2,this.halfW=40,this.halfH=20,this.zoom=1,e.up.set(0,0,-1)}resize(e,t){this.aspect=e/t,this.camera.aspect=this.aspect,this.camera.fov=this.vfov,this.camera.updateProjectionMatrix()}heightForSpan(e){let t=Math.tan(this.vfov*Math.PI/360);return this.aspect>=1?e/2/t:e*.82/2/(t*this.aspect)}snap(e,t,i=34){this.x=e,this.z=t,this.lx=this.lz=0,this.h=this.heightForSpan(i),this.apply(0,0)}update(e,t){let i=t.inCar?t.speed:0,n=(t.inCar?Rn(44,92,Us(2,40,i)):38)*this.zoom,r=Ye(this.heightForSpan(n),30*Math.min(1,this.zoom),190);this.h+=(r-this.h)*Os(t.inCar?1.6:2.4,e);let a=0,o=0;if(t.inCar){a=t.vx*.62,o=t.vz*.62;let h=Math.hypot(a,o),d=n*.3;h>d&&(a*=d/h,o*=d/h)}this.lx+=(a-this.lx)*Os(2.2,e),this.lz+=(o-this.lz)*Os(2.2,e),this.x+=(t.x-this.x)*Os(10,e),this.z+=(t.z-this.z)*Os(10,e);let l=x.fx?x.fx.shake:0;this.apply((Math.random()-.5)*l*1.6,(Math.random()-.5)*l*1.6)}flyover(e){let t=x.city,i=t.W*4,n=t.H*4,r=e*.035;this.x=i*.5+Math.cos(r)*i*.22,this.z=n*.42+Math.sin(r*1.3)*n*.2,this.h=this.heightForSpan(70),this.lx=this.lz=0,this.apply(0,0)}apply(e,t){let i=this.x+this.lx+e,n=this.z+this.lz+t;this.camera.position.set(i,this.h,n),this.camera.lookAt(i,0,n);let r=Math.tan(this.vfov*Math.PI/360);this.halfH=this.h*r,this.halfW=this.halfH*this.aspect,this.cx=i,this.cz=n}};vt.enabled=!1;var R0=1015,Nd="crosstown-heat-v1",Ze=s=>document.getElementById(s);function Od(){try{return JSON.parse(localStorage.getItem(Nd))||{}}catch{return{}}}function Ao(s){try{localStorage.setItem(Nd,JSON.stringify(s))}catch{}}var Rt=Od();Rt.settings&&Object.assign(x.settings,Rt.settings);var C0=Ze("view"),Fi;function kd(s){Ze("loadmsg").textContent=s,Ze("loading").hidden=!1}try{Fi=new Ca({canvas:C0,antialias:!0,stencil:!0,powerPreference:"high-performance"})}catch(s){throw kd("This device could not start WebGL, which the game needs to draw the city."),s}Fi.outputColorSpace=Tn;Fi.setClearColor(1460319);var zr=new Pa,Sh=new ii(38,1,2,800);x.renderer=Fi;x.scene=zr;x.camera=Sh;var Bi=1;function Bd(){let s=window.devicePixelRatio||1,e=x.settings.quality;return e==="high"?Math.min(s,2):e==="low"?Math.min(s,1):Math.min(s,1.6)}function Nr(){let s=innerWidth,e=innerHeight;Fi.setPixelRatio(Bi),Fi.setSize(s,e,!1),x.cam?.resize(s,e)}addEventListener("resize",Nr);var Pd=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0))),ts,$t;async function P0(){Ze("loadmsg").textContent="Pouring the asphalt…",await Pd(),$t=id(R0),x.city=$t,x.q=nd($t),Ze("loadmsg").textContent="Raising the skyline…",await Pd(),ts=ld($t),x.world=ts,zr.add(ts.group),cd($t),yd(ts.mats.shadow),x.fx=new Ja(zr),x.pedRender=new io(zr,ts.mats.shadow),x.hash=new Za,x.traffic=new ro($t),x.police=new lo($t),x.missions=new uo($t),x.pickups=new fo($t),x.audio=new mo,x.input=new go,x.hud=new vo,x.hud.buildMap($t),x.cam=new xo(Sh),Bi=Bd(),Nr(),x.cam.flyover(0),x.traffic.setQuality(x.settings.quality),N0(),X0(),Gd();for(let s=0;s<40;s++)x.traffic.update(.1),To(1/30);Ze("loading").hidden=!0,bo(),requestAnimationFrame(Hd)}function I0(){for(let s of[...x.vehicles])Pn(s);for(let s of[...x.peds])Yi(s);x.projectiles.length=0;for(let s of $t.parkingSpots)s.vehicle=null,s.state=void 0}function L0(s,e){return bi("player",s,e,0)}function Dr(s=!1){x.audio.init(),x.audio.setSfx(x.settings.sound),x.audio.setMusic(x.settings.music),I0(),x.police.reset();let e=$t.start,t=L0(e.x,e.z);x.player=new co(t),x.stats={kills:0,cops:0,cars:0,missions:0};let i=0;s&&Rt.progress&&(i=Rt.progress.index||0,x.player.cash=Rt.progress.cash||0,x.player.lives=Math.max(1,Rt.progress.lives||4)),x.missions.reset(i),s&&Rt.progress&&(x.missions.multiplier=Rt.progress.mult||1);let n=D0(e.x,e.z);if(n){let r=qi(bt(["compact","sedan","muscle"]),n.x,n.z,n.h);r.driver=null}x.cam.snap(e.x,e.z,38),x.state="playing",x.time=0,wi(null),x.hud.show(!0),Ze("controls").hidden=!1,x.missions.ringPhone(),x.hud.pager(i===0?"Welcome to Halcyon Bay. A payphone is ringing nearby. Follow the green arrow.":"Back in town. A phone is ringing.",8),Wd(),q0()}function D0(s,e){let t=null,i=1e9;for(let n of $t.lanes){let r=s-n.ax,a=e-n.az,o=Ye(r*n.dx+a*n.dz,4,n.len-6),l=n.ax+n.dx*o,c=n.az+n.dz*o,h=Qe(s,e,l,c);h<i&&n.li===n.nl-1&&(i=h,t={x:l,z:c,h:Math.atan2(n.dz,n.dx)})}return t}var So=0;function bh(s){if(x.state!=="playing")return;x.state=s,So=3.6;let e=x.player;if(e.inCar){let t=e.vehicle;e.exitVehicle(!0),s==="busted"&&(t.driver=null)}e.entering=null,e.wantVx=e.wantVz=0,x.missions.abort(),s==="dead"?(x.hud.big("FLATLINED","Patched up at the hospital","bad"),x.audio.wasted()):(x.hud.big("ARRESTED","Weapons confiscated","bad"),x.audio.busted(),e.ped.state!=="down"&&(e.ped.state="custom"),e.ped.vx=e.ped.vz=0),x.audio.radio(!1),x.audio.engine(!1),x.audio.skid(0),x.hud.radio(null)}function z0(){let s=x.player,e=x.state;e==="dead"&&s.lives--,x.police.reset(),x.missions.multiplier=1;for(let i of[...x.peds])i.brain===Zi&&Yi(i);if(s.lives<=0){U0();return}let t=$t.specials[e==="dead"?"hospital":"police"]||{x:$t.start.x,z:$t.start.z};if(e==="busted"){let i=Math.floor(s.cash*.1);s.cash-=i,i>0&&x.hud.toast(`Bail paid: $${i}`)}s.resetForRespawn(t.x,t.z),x.cam.snap(t.x,t.z,38),x.state="playing",x.hud.toast(`Lives left: ${s.lives}`),wo()}function U0(){x.state="gameover";let s=x.player,e=Math.max(Rt.best||0,s.cash),t=s.cash>(Rt.best||0);Rt.best=e,Rt.progress=null,Ao(Rt),Ze("overtitle").textContent="Game over",Ze("ostats").innerHTML=Fd(),Ze("overbest").textContent=t?"New best score.":`Best: $${e.toLocaleString()}`,x.hud.show(!1),Ze("controls").hidden=!0,wi("over")}function wo(){let s=x.player;s&&(Rt.best=Math.max(Rt.best||0,s.cash),Rt.progress={index:x.missions.index,cash:s.cash,lives:s.lives,mult:x.missions.multiplier},Ao(Rt))}function Fd(){return[["Cash","$"+x.player.cash.toLocaleString()],["Jobs done",x.stats.missions],["Cars wrecked",x.stats.cars]].map(([t,i])=>`<div><b>${i}</b><span>${t}</span></div>`).join("")}var Id=0;function N0(){let s=x.events;s.crash=(e,t,i,n,r)=>{let a=x.realTime;a-e.lastCrash>.18&&(e.lastCrash=a,x.audio.crash(t,i,n),t>7&&x.fx.spark(i,.8,n,Math.min(14,t|0),t*.8));let o=x.player;if(!o)return;let l=o.vehicle===e||o.vehicle===r;if(l&&t>9&&(x.fx.shake=Math.min(.8,x.fx.shake+t*.025)),l&&r){let c=o.vehicle===e?r:e;c.ai&&c.ai.mode==="traffic"&&(c.ai.panicT=6),t>5&&o.vehicle.speed>c.speed+1.5&&(c.type==="police"||c.type==="swat"?x.police.crime(.7,i,n,c.driver!=null):x.police.crime(.2,i,n))}},s.vehicleExploded=e=>{so(e.x,e.z,6.5,120,e.lastHitBy||"world");let t=x.player;t&&t.vehicle===e&&(t.exitVehicle(!0),t.ped.hit(999,0,1,"world","explosion"));for(let i of e.passengers)i.hidden=!1,i.x=e.x,i.z=e.z,i.hit(999,0,1,"world","explosion");e.passengers.length=0,e.driver&&e.driver!=="player"&&(e.driver=null),e.ai=null,e.lastHitBy==="player"&&t&&(x.stats.cars++,t.addCash(100*x.missions.multiplier),x.police.crime(e.type==="police"||e.type==="swat"?1.3:.6,e.x,e.z,e.type==="police"||e.type==="swat"))},s.pedKilled=(e,t)=>{let i=x.player;if(i&&e===i.ped){bh("dead");return}if(t==="player"&&i){x.stats.kills++;let n=e.kind==="cop"||e.kind==="swat";n&&x.stats.cops++,i.addCash(n?50:10),x.police.crime(n?1.5:.6,e.x,e.z,n)}e.missionTag&&e.persistent},s.pedHurt=(e,t)=>{let i=x.player;if(!i||e===i.ped||t!=="player")return;let n=e.kind==="cop"||e.kind==="swat";x.police.crime(n?.9:.25,e.x,e.z,n),n&&!e.brain&&(e.brain=Zi,e.state="custom",e.weapon=e.weapon||"pistol"),e.armed&&!e.brain&&Ve()<.6&&(e.brain=O0,e.state="custom",e.weapon="pistol",e.hostileT=18)},s.shots=(e,t,i)=>{let n=x.player;!n||e!==n.ped||(i||(n.lastShotT=x.realTime),i||no(e.x,e.z,30,e),x.realTime-Id>1.2&&!i&&(Id=x.realTime,x.police.crime(.3,e.x,e.z)))},s.explosion=(e,t,i)=>{i==="player"&&x.police.crime(.5,e,t)},s.busted=()=>bh("busted"),s.driverShot=e=>{if(!e.driver||e.driver==="player")return;let t=e.doorPos(-1),i=e.driver==="cop"?"cop":"civ",n=bi(i,t.x,t.z);i==="cop"?(n.brain=Zi,n.state="custom",n.weapon="pistol"):n.startFlee(e.x,e.z,8),e.driver=null,e.ai=null},s.missionComplete=()=>wo()}function O0(s,e){let t=x.player;if(s.hostileT-=e,!t||!t.alive||s.hostileT<=0){s.brain=null,s.state="walk",s.aimT=0;return}let i=t.inCar?t.vehicle:t.ped,n=Qe(s.x,s.z,i.x,i.z);if(n>40){s.brain=null,s.state="walk";return}n>11?s.moveTo(i.x,i.z,s.runSpeed):(s.vx*=.5,s.vz*=.5,s.h=Math.atan2(i.z-s.z,i.x-s.x),s.aimT=.5,s.fireCd<=0&&(Gs(s,"pistol",s.h+Se(-.12,.12)),s.fireCd+=Se(.5,1.1)))}var yo=[];function To(s){x.time+=s;let e=x.player;e&&x.state==="playing"&&e.update(s,x.input);for(let i of x.vehicles){let n=i.ai;n&&i.driver!=="player"?n.mode==="traffic"?Ed(i,s):n.mode==="pursuit"?Rd(i,s):n.mode==="waiting"&&(i.input.throttle=0,i.input.brake=1,i.input.steer=0):i.driver!=="player"&&(i.input.throttle=0,i.input.brake=.15,i.input.steer=0,i.input.handbrake=!1),i.step(s)}for(let i of x.vehicles)i.collideWorld(s);let t=x.hash;t.clear();for(let i of x.vehicles)t.insert(i,i.x,i.z,i.radius);for(let i of x.peds)i.hidden||t.insert(i,i.x,i.z,.4);for(let i of x.vehicles){t.query(i.x,i.z,i.radius,yo);for(let n of yo)n.isVehicle&&n.id>i.id&&Md(i,n)}for(let i of x.vehicles){t.query(i.x,i.z,i.radius+.6,yo);for(let n of yo)n.isPed&&k0(i,n)}for(let i of x.peds)i.update(s);for(let i=x.peds.length-1;i>=0;i--)x.peds[i].removeMe&&Yi(x.peds[i]);wd(s)}var _o=[];function k0(s,e){if(e.hidden||e.removed||x.player&&e===x.player.ped&&x.player.entering&&x.player.entering.v===s)return;s.worldCircles(_o);let t=s.cr+.3;for(let i=0;i<_o.length;i+=2){let n=_o[i],r=_o[i+1],a=e.x-n,o=e.z-r,l=a*a+o*o;if(l>=t*t)continue;let c=Math.sqrt(l)||.01,h=a/c,d=o/c,u=n-s.x+h*s.cr,p=r-s.z+d*s.cr,f=s.vx-s.w*p,v=s.vz+s.w*u,m=f*h+v*d-(e.vx*h+e.vz*d),g=e.alive&&e.state!=="down"&&e.state!=="dead";if(m>3.4&&g){let _=m*m*.85+m*4,M=s.driver==="player"?"player":s;e.hit(_,f+h*2,v+d*2,M,"car"),e.vx=f*.8+h*2.5,e.vz=v*.8+d*2.5,s.vx*=.96,s.vz*=.96,x.audio.thud(e.x,e.z),x.fx.dust(e.x,e.z,3,[.6,.58,.55])}else e.x=n+h*t,e.z=r+d*t,g&&s.speed>1.5&&!e.brain&&e.state!=="dive"&&e.startFlee(s.x,s.z,3);return}}var Ld=480,Dd=new Xe(1,1,1),B0=new Xe(.33,.39,.6),F0=new Xe(1,.8,.66),H0=new Xe(1460319),Ln=new Xe,zd=new Xe;x.light.tint=Ln;var Ud=-1;function V0(){let s=x.settings.daytime,e;if(x.state==="title")e=.5;else if(s==="day")e=0;else if(s==="night")e=1;else{let r=(x.time+Ld*.06)/Ld%1;e=Us(.4,.55,r)*(1-Us(.9,1,r))}let t=Math.round(e*200);if(t===Ud)return;Ud=t,x.light.night=e,Ln.copy(Dd).lerp(B0,e);let i=Math.sin(Math.PI*Ye(e*1.6,0,1));Ln.multiply(zd.copy(Dd).lerp(F0,i*.55));let n=Us(.22,.65,e);ts.setNight(n,Ln),xd(n,Ln),x.pedRender.setTint(Ln),x.fx.setTint(Ln),Fi.setClearColor(zd.copy(H0).multiply(Ln))}var Eo=performance.now(),Mo=0,Ur=1/60,yh=0,un=0,_h=0,Cr=0,Pr=0,Si={sim:0,frame:0,render:0},G0=/fps/.test(location.hash);function Hd(s){requestAnimationFrame(Hd);let e=(s-Eo)/1e3;if(Eo=s,e>.1&&(e=.1),e<=0)return;x.realTime+=e;let t=x.state,i=performance.now();if(t==="playing"||t==="dead"||t==="busted"||t==="title"){Mo+=e;let r=0;for(;Mo>=Ur&&r<4;)To(Ur),Mo-=Ur,r++;r===4&&(Mo=0);let a=performance.now();Vd(e),Si.sim+=a-i,Si.frame+=performance.now()-a}(t==="dead"||t==="busted")&&(So-=e,So<=0&&z0()),t!=="playing"&&x.input.clearEdges();let n=performance.now();if(Fi.render(zr,Sh),Si.render+=performance.now()-n,yh+=e,un++,_h+=e,_h>1){let r=Math.round(un/yh);if(G0&&x.hud.showFps(r,`sim ${(Si.sim/un).toFixed(1)} upd ${(Si.frame/un).toFixed(1)} draw ${(Si.render/un).toFixed(1)} ms · ${x.vehicles.length} cars · ${x.peds.length} peds · ${Fi.info.render.calls} calls · pr ${Bi.toFixed(2)}`),window.__perf={fps:r,sim:Si.sim/un,upd:Si.frame/un,draw:Si.render/un,calls:Fi.info.render.calls,tris:Fi.info.render.triangles},Si.sim=Si.frame=Si.render=0,x.settings.quality==="auto"&&t==="playing"){r<42?(Cr++,Pr=0):r>57?(Pr++,Cr=0):Cr=Pr=0;let a=Math.min(window.devicePixelRatio||1,1.6);Cr>=2&&Bi>.75&&(Bi=Math.max(.75,Bi-.2),Nr(),Cr=0),Pr>=6&&Bi<a&&(Bi=Math.min(a,Bi+.1),Nr(),Pr=0)}_h=0,yh=0,un=0}}function Vd(s){let e=x.player,t=x.state==="playing"||x.state==="dead"||x.state==="busted";x.traffic.update(s),e&&t&&(x.police.update(s),x.state==="playing"&&x.missions.update(s),x.pickups.update(s));for(let n of x.vehicles)n.update(s);if(_d(x.realTime),x.fx.update(s),e&&t){let n=e.inCar?e.vehicle:e.ped;x.cam.update(s,{x:n.x,z:n.z,vx:n.vx,vz:n.vz,inCar:e.inCar,speed:e.inCar?e.vehicle.speed:0})}else x.state==="title"&&x.cam.flyover(x.realTime);x.pedRender.update(x.peds,x.cam.cx,x.cam.cz,Math.max(x.cam.halfW,x.cam.halfH)+10),ts.setTime(x.realTime),V0();let i=x.audio;if(i.ctx){if(e&&e.inCar&&x.state==="playing"){let r=e.vehicle;i.engine(!0,r.speed/r.t.maxSpeed,Math.abs(r.input.throttle)),i.skid(r.skid*Ye(r.speed/10,0,1))}else i.engine(!1),i.skid(0);let n=0;if(e){let r=e.pos();for(let a of x.vehicles)a.sirenOn&&(n=Math.max(n,1-Qe(a.x,a.z,r.x,r.z)/110))}i.siren(x.state==="playing"?n:0),i.tick()}if(e&&x.state!=="title"){x.hud.update(s);let n=!e.inCar&&!!e.nearestCar(4.2);x.hud.buttons(e.inCar,n),x.state==="playing"&&W0(n)}}function W0(s){let e=Rt.tips||(Rt.tips={}),t=(n,r)=>{e[n]||(e[n]=1,x.hud.toast(r),Ao(Rt))},i=x.player;x.time>2&&!e.move&&t("move",x.input.touchMode||!x.input.keys.size?"Drag on the left side to walk":"WASD to walk"),s&&x.time>4&&t("enter","Tap ENTER to take this car"),i.inCar&&t("drive",x.settings.steering==="classic"?"Stick up to drive, sideways to steer":"Point the stick where you want to go"),i.inCar&&i.vehicle.speed>12&&t("brake","Hold BRAKE to stop, keep holding to reverse"),x.police.level>0&&t("heat","Cops saw that. Lose them, respray, or grab a bribe badge"),i.weapon!=="fists"&&t("gun","FIRE aims at the nearest threat. SWAP changes weapons")}var es=null,Qn=null;function wi(s){for(let e of["title","pause","how","settings","over"])Ze(e).hidden=e!==s;es=s}function bo(){x.state="title",x.player=null,x.hud.show(!1),Ze("controls").hidden=!0,Ze("mapview").hidden=!0,x.missions.cleanup(),x.missions.phoneMarker.hide(),x.police.reset(),Rt=Od();let s=Rt.progress;Ze("cont").hidden=!(s&&s.index>0),s&&s.index>0&&(Ze("contsub").textContent=`Job ${s.index+1} · $${(s.cash||0).toLocaleString()}`),Ze("best").textContent=Rt.best?`Best: $${Rt.best.toLocaleString()}`:"",wi("title");for(let e of[...x.peds])(e.kind==="player"||e.brain)&&Yi(e)}function Ir(){x.state==="playing"&&(x.state="paused",x.audio.suspend(),Ze("pstats").innerHTML=Fd(),wi("pause"))}function Mh(){x.state==="paused"&&(wi(null),x.state="playing",x.audio.resume(),Eo=performance.now())}function Gd(){let s=x.settings;document.querySelectorAll(".seg").forEach(t=>{let i=t.dataset.set,n=i==="sound"?s.sound?"on":"off":i==="music"?s.music?"on":"off":i==="hand"?s.leftHanded?"left":"right":s[i];t.querySelectorAll("button").forEach(r=>r.classList.toggle("on",r.dataset.v===n))}),document.body.classList.toggle("lefty",!!s.leftHanded),x.audio.setSfx(s.sound),x.audio.setMusic(s.music),s.music?x.player&&x.player.inCar&&x.audio.radio(!0):x.audio.radio(!1),x.traffic.setQuality(s.quality);let e=Bd();e!==Bi&&(Bi=e,Nr()),Rt.settings=s,Ao(Rt)}function X0(){let s=x.input;s.bindTouch(Ze("stickzone"),Ze("stickbase"),Ze("stickknob"),[[Ze("btnA"),"a","hold"],[Ze("btnB"),"b","tap"],[Ze("btnC"),"c","hold"]]),Ze("stickzone").addEventListener("pointerdown",()=>{Ze("stickhint").style.opacity=0},{once:!0}),Ze("play").onclick=()=>{x.audio.init(),x.audio.click(),Dr(!1)},Ze("cont").onclick=()=>{x.audio.init(),x.audio.click(),Dr(!0)},Ze("howbtn").onclick=()=>{Qn="title",wi("how")},Ze("setbtn").onclick=()=>{Qn="title",wi("settings")},Ze("howclose").onclick=()=>wi(Qn),Ze("setclose").onclick=()=>wi(Qn),Ze("pausebtn").onclick=()=>Ir(),Ze("resume").onclick=()=>Mh(),Ze("psettings").onclick=()=>{Qn="pause",wi("settings")},Ze("phow").onclick=()=>{Qn="pause",wi("how")},Ze("quit").onclick=()=>{wo(),x.audio.radio(!1),x.audio.engine(!1),x.audio.siren(0),x.audio.resume(),bo()},Ze("again").onclick=()=>Dr(!1),Ze("totitle").onclick=()=>bo(),Ze("weapon").onclick=()=>s.press("weapon"),Ze("radio").onclick=()=>s.press("radio");let e=()=>{x.state==="playing"&&(x.state="paused",x.hud.drawBigMap(Ze("bigmap")),Ze("mapview").hidden=!1)};Ze("minimap").onclick=e,Ze("mapclose").onclick=()=>{Ze("mapview").hidden=!0,x.state="playing",Eo=performance.now()},document.querySelectorAll(".seg").forEach(t=>{t.addEventListener("click",i=>{let n=i.target.closest("button");if(!n)return;let r=t.dataset.set,a=n.dataset.v;r==="sound"?x.settings.sound=a==="on":r==="music"?x.settings.music=a==="on":r==="hand"?x.settings.leftHanded=a==="left":x.settings[r]=a,Gd(),x.audio.click()})}),addEventListener("keydown",t=>{(t.code==="KeyP"||t.code==="Escape")&&(x.state==="playing"?Ir():x.state==="paused"&&es==="pause"?Mh():Ze("mapview").hidden||Ze("mapclose").onclick()),t.code==="KeyM"&&(Ze("mapview").hidden?e():Ze("mapclose").onclick()),(t.code==="Enter"||t.code==="Space")&&x.state==="title"&&es==="title"&&(t.preventDefault(),Dr(!1))}),document.addEventListener("visibilitychange",()=>{document.hidden?(x.state==="playing"&&Ir(),x.audio.suspend()):Wd()}),addEventListener("contextmenu",t=>t.preventDefault()),window.__onBack=()=>Ze("mapview").hidden?x.state==="playing"?(Ir(),!0):es==="pause"?(Mh(),!0):es==="how"||es==="settings"?(wi(Qn),!0):es==="over"?(bo(),!0):!1:(Ze("mapclose").onclick(),!0),window.__appPause=()=>{x.state==="playing"&&Ir(),x.audio.suspend(),wo()}}var Lr=null;async function Wd(){try{"wakeLock"in navigator&&!Lr&&(Lr=await navigator.wakeLock.request("screen"),Lr.addEventListener("release",()=>{Lr=null}))}catch{Lr=null}}function q0(){if(window.AndroidShell)return;let s=document.documentElement;try{s.requestFullscreen?.({navigationUI:"hide"})?.then?.(()=>screen.orientation?.lock?.("landscape").catch(()=>{})).catch(()=>{})}catch{}}window.__game={G:x,newGame:Dr,simStep:To,spawnVehicle:qi,spawnPed:bi,explode:so,playerDown:bh,debug:()=>({downT:So,state:x.state}),fastForward(s){let e=Math.round(s*60);for(let t=0;t<e;t++)To(Ur),t%4===0&&Vd(Ur*4)}};P0().catch(s=>{console.error(s),kd("Something went wrong while building the city: "+(s&&s.message?s.message:s))});export{F as TILE,ao as rejoinTraffic};
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
