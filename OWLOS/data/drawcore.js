var xmlns = "http://www.w3.org/2000/svg";

var addIcon = "M42 6H6c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h10v4h16v-4h10c2.21 0 3.98-1.79 3.98-4L46 10c0-2.21-1.79-4-4-4zm0 28H6V10h36v24zM32 20v4h-6v6h-4v-6h-6v-4h6v-6h4v6h6z";
var cloudIcon = "M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93zM38 36H12c-4.42 0-8-3.58-8-8s3.58-8 8-8h1.42c1.31-4.61 5.54-8 10.58-8 6.08 0 11 4.92 11 11v1h3c3.31 0 6 2.69 6 6s-2.69 6-6 6z";
var motionIcon = "M24 22c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm12 4c0-6.63-5.37-12-12-12s-12 5.37-12 12c0 4.44 2.41 8.3 5.99 10.38l2.02-3.48C17.62 31.51 16 28.96 16 26c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.62 5.51-4.01 6.89l2.02 3.48C33.59 34.3 36 30.44 36 26zM24 6C12.95 6 4 14.95 4 26c0 7.39 4.02 13.83 9.99 17.29l2-3.46C11.22 37.07 8 31.91 8 26c0-8.84 7.16-16 16-16s16 7.16 16 16c0 5.91-3.22 11.07-7.99 13.84l2 3.46C39.98 39.83 44 33.39 44 26c0-11.05-8.96-20-20-20z";
var temperatureIcon = "M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z";
var leftIcon = "M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z";
var rightIcon = "M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z";
var plusIcon = "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z";
var minusIcon = "M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22H14v-4h20v4z";
var menuIcon = "M44 18v-4h-4v-4c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4v-4h4v-4h-4v-4h4v-4h-4v-4h4zm-8 20H8V10h28v28zM12 26h10v8H12zm12-12h8v6h-8zm-12 0h10v10H12zm12 8h8v12h-8z";
var lampIcon = "M7.1 37.07l2.83 2.83 3.59-3.59-2.83-2.83-3.59 3.59zM22 44.9h4V39h-4v5.9zM8 21H2v4h6v-4zm22-8.38V3H18v9.62c-3.58 2.08-6 5.94-6 10.38 0 6.63 5.37 12 12 12s12-5.37 12-12c0-4.44-2.42-8.31-6-10.38zM40 21v4h6v-4h-6zm-5.51 15.31l3.59 3.59 2.83-2.83-3.59-3.59-2.83 2.83z";
var wifiIcon = "M7.07 21.91l16.92 21.07.01.02.02-.02 16.92-21.07C40.08 21.25 33.62 16 24 16c-9.63 0-16.08 5.25-16.93 5.91z";


    

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
}

/*
// convert 0..255 R,G,B values to binary string
RGBToBin = function (r, g, b) {
    var bin = r << 16 | g << 8 | b;
    return (function (h) {
        return new Array(25 - h.length).join("0") + h
    })(bin.toString(2))
}



// convert a hexidecimal color string to 0..255 R,G,B
hexToRGB = function (hex) {
    var r = hex >> 16;
    var g = hex >> 8 & 0xFF;
    var b = hex & 0xFF;
    return [r, g, b];
}
*/

// convert 0..255 R,G,B values to a hexidecimal color string
RGBToHex = function (r, g, b) {
    var bin = r << 16 | g << 8 | b;
    return (function (h) {
        return new Array(7 - h.length).join("0") + h
    })(bin.toString(16).toUpperCase())
}

// convert a 24 bit binary color to 0..255 R,G,B
binToRGB = function (bin) {
    var pbin = parseInt(bin);
    var r = pbin >> 16;
    var g = pbin >> 8 & 0xFF;
    var b = pbin & 0xFF;
    return [r, g, b];
}

colorToRGB = function (color) {
    if (color == null) {
        return [0, 0, 0];
    }
    color = color.substring(color.indexOf("#") + 1);
    color = "0x" + color;
    return binToRGB(color);
}
//-------------------------------------------------------------------------------------------------------------------
class SVGText {
    constructor(svgElement, id, size) {
        this.id = id;
        this.size = size;
        this.SVGText = document.createElementNS(xmlns, "text");
        this.SVGText.id = this.id;
        this.SVGText.setAttributeNS(null, "height", "auto");
        this.SVGText.setAttributeNS(null, "font-family", theme.fontFamily);
        this.SVGText.setAttributeNS(null, "font-size", this.size + "em");
        svgElement.appendChild(this.SVGText);
    }

    getTextWidth(text) {
        var element = document.body.appendChild(document.createElement("div"));
        element.className = "WidgetText";
        element.innerHTML = text;
        var width = element.getBoundingClientRect().width;
        element.remove();
        return width;
    }

    set fontFamily(fontFamily) {
        this.SVGText.setAttributeNS(null, "font-family", fontFamily);
    }

    set text(text) {
        if (this.SVGText.textContent != text) {
            this.SVGText.textContent = text;
            var textSize = this.size * this.getTextWidth(text);
            this.SVGText.setAttributeNS(null, "textLength", textSize);
        }
    }

    set x(x) {
        this.SVGText.setAttributeNS(null, "x", x);
    }

    get x() {
        return parseFloat(this.SVGText.getAttributeNS(null, "x"));
    }

    set y(y) {
         this.SVGText.setAttributeNS(null, "y", y);
    }

    get y() {
        return parseFloat(this.SVGText.getAttributeNS(null, "y"));
    }

    get width() {
        return parseFloat(this.SVGText.getBoundingClientRect().width);
    }

    get height() {
        return parseFloat(this.SVGText.getBoundingClientRect().height);
    }

    set color(color) {
        this.SVGText.setAttributeNS(null, "fill", color);
    }

    get color() {
        return this.SVGText.getAttributeNS(null, "fill");        
    }

    set colorRGB(rgb) {
        this.SVGText.setAttributeNS(null, 'fill', ' #' + RGBToHex(rgb[0], rgb[1], rgb[2]));
    }

    get colorRGB() {
        return colorToRGB(this.SVGText.getAttributeNS(null, "fill"));
    }


    visible() {
        this.SVGText.style.display = "block";
    }

    hide() {
        this.SVGText.style.display = "none";
    }
}
//-----------------------------------------------------------------------------------------------------
class SVGRect {
    constructor(svgElement, id, x, y, width, height) {
        this.id = id;
        /*
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        */

        this.SVGRect = document.createElementNS(xmlns, "rect");
        this.SVGRect.setAttributeNS(null, 'x', x);
        this.SVGRect.setAttributeNS(null, 'y', y);
        this.SVGRect.setAttributeNS(null, 'width', width);
        this.SVGRect.setAttributeNS(null, 'height', height);
        svgElement.appendChild(this.SVGRect);
    }

    set x(x) {
        this.SVGRect.setAttributeNS(null, "x", x);
    }

    get x() {
        return parseFloat(this.SVGRect.getAttributeNS(null, "x"));
    }

    set y(y) {
        this.SVGRect.setAttributeNS(null, "y", y);
    }

    get y() {
        return parseFloat(this.SVGRect.getAttributeNS(null, "y"));
    }

    set width(width) {
        this.SVGRect.setAttributeNS(null, "width", width);
    }

    get width() {
        return parseFloat(this.SVGRect.getBoundingClientRect().width);
    }

    set height(height) {
        this.SVGRect.setAttributeNS(null, "height", height);
    }

    get height() {
        return parseFloat(this.SVGRect.getBoundingClientRect().height);
    }

    set color(color) {
        this.SVGRect.setAttributeNS(null, 'fill', color);
    }

    get color() {
        return this.SVGRect.getAttributeNS(null, "fill");
    }

    set colorRGB(rgb) {
        this.SVGRect.setAttributeNS(null, 'fill', ' #' + RGBToHex(rgb[0], rgb[1], rgb[2]));
    }

    get colorRGB() {
        return colorToRGB(this.SVGRect.getAttributeNS(null, "fill"));
    }


    set opacity(opacity) {
        this.SVGRect.setAttributeNS(null, 'opacity', parseFloat(opacity));
    }

    get opacity() {
        return parseFloat(this.SVGRect.getAttributeNS(null, 'opacity'));
    }

}
//SVGArc ------------------------------------------------------------------------------------
class SVGArc {
    constructor(svgElement, id, x, y, radius, lineWidth) {
        this.id = id;
        this.x = x;
        this.y = y;
        this._radius = radius;
        this.lineWidth = lineWidth;
        
        this.SVGArc = document.createElementNS(xmlns, "path");        
        this.SVGArc.setAttributeNS(null, 'stroke-width', this.lineWidth);
        this.SVGArc.setAttributeNS(null, 'stroke-linejoin', "round");
        this.SVGArc.setAttributeNS(null, 'fill', 'none');        
        
        svgElement.appendChild(this.SVGArc);
    }

    set color(color) {
        this.SVGArc.setAttributeNS(null, 'stroke', color);
    }

    get color() {
        return this.SVGArc.getAttributeNS(null, "stroke");
    }

    set colorRGB(rgb) {
        this.SVGArc.setAttributeNS(null, 'stroke', ' #' + RGBToHex(rgb[0], rgb[1], rgb[2]));        
    }

    get colorRGB() {
        return colorToRGB(this.SVGArc.getAttributeNS(null, "stroke"));
    }

    set fill(color) {
        this.SVGArc.setAttributeNS(null, 'fill', color);
    }

    get fill() {
        return this.SVGArc.getAttributeNS(null, "fill");
    }

    set fillRGB(rgb) {
        this.SVGArc.setAttributeNS(null, 'fill', ' #' + RGBToHex(rgb[0], rgb[1], rgb[2]));        
    }

    get fillRGB() {
        return colorToRGB(this.SVGArc.getAttributeNS(null, "fill"));        
    }


    set opacity(opacity) {
        this.SVGArc.setAttributeNS(null, 'opacity', parseFloat(opacity));
    }

    get opacity() {        
        return parseFloat(this.SVGArc.getAttributeNS(null, 'opacity'));        
    }


    draw(from, to) {
        this.SVGArc.setAttributeNS(null, "d", describeArc(this.x, this.y, this._radius, from, to));
    }

    drawPath(path) {
        this.SVGArc.setAttributeNS(null, "d", path);
    }

    set radius(radius) {
        this._radius = parseFloat(radius);
    }

    get radius() {
        return parseFloat(this._radius);
    }


    hide() {
        this.SVGArc.setAttributeNS(null, "d", "");
    }
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------
class SVGIcon {
    constructor(svgElement, icon, x, y, width, height) {
        this.icon = icon;
        this.SVGIcon = document.createElementNS(xmlns, "svg");
        this.SVGIcon.setAttributeNS(null, "viewBox", "0 0 " + width + " " + height);
        this.SVGIcon.setAttributeNS(null, "x", x);
        this.SVGIcon.setAttributeNS(null, "y", y);
        this.SVGIcon.setAttributeNS(null, "width", width);
        this.SVGIcon.setAttributeNS(null, "height", height);
        
        this.SVGIcon.style.display = "block";

        this.SVGPath = document.createElementNS(xmlns, "path");
        this.SVGPath.setAttributeNS(null, "transform", "scale(" + parseFloat(width / 48) + ")");
        this.SVGIcon.appendChild(this.SVGPath);

        this.SVGFillPath = document.createElementNS(xmlns, "path");
        this.SVGFillPath.setAttributeNS(null, "d", "M0 0h48v48H0z");
        this.SVGFillPath.setAttributeNS(null, "fill", "#0F0F0F");
        this.SVGFillPath.setAttributeNS(null, "opacity", "0.01");
        this.SVGFillPath.setAttributeNS(null, "transform", "scale(" + parseFloat(width / 48) + ")");
        this.SVGIcon.appendChild(this.SVGFillPath);
        svgElement.appendChild(this.SVGIcon);
        this.draw();
    }

    set x(x) {
        this.SVGIcon.setAttributeNS(null, "x", x);
    }

    get x() {
        return parseFloat(this.SVGIcon.getAttributeNS(null, "x"));
    }

    set y(y) {
        this.SVGIcon.setAttributeNS(null, "y", y);
    }

    get y() {
        return parseFloat(this.SVGIcon.getAttributeNS(null, "y"));
    }

    set color(color) {        
        this.SVGPath.setAttributeNS(null, 'stroke', color);
    }

    get color() {
        return this.SVGPath.getAttributeNS(null, "stroke");
    }

    set colorRGB(rgb) {        
        this.SVGPath.setAttributeNS(null, 'stroke', ' #' + RGBToHex(rgb[0], rgb[1], rgb[2]));
    }

    get colorRGB() {
        return colorToRGB(this.SVGPath.getAttributeNS(null, "stroke"));
    }

    set fill(color) {        
        this.SVGPath.setAttributeNS(null, 'fill', color);
    }

    get fill() {
        return this.SVGPath.getAttributeNS(null, "fill");
    }

    set fillRGB(rgb) {
        this.SVGPath.setAttributeNS(null, 'fill', ' #' + RGBToHex(rgb[0], rgb[1], rgb[2]));        
    }

    get fillRGB() {
        return colorToRGB(this.SVGPath.getAttributeNS(null, "fill"));
    }

    set opacity(opacity) {        
        this.SVGPath.setAttributeNS(null, 'opacity', parseFloat(opacity));
    }

    get opacity() {
        return parseFloat(this.SVGPath.getAttributeNS(null, 'opacity'));
    }

    draw() {
        this.SVGPath.setAttributeNS(null, "d", this.icon);
    }

    hide() {
        this.SVGPath.setAttributeNS(null, "d", "");
    }

}

