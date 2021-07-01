//<![CDATA[
    window.onload = function () {
        TagCanvas.wheelZoom = false;
        TagCanvas.textFont = "Raleway, sans-serif";
        TagCanvas.textColour = "white";
        TagCanvas.textHeight = 20;
        TagCanvas.outlineMethod = "size";
        TagCanvas.outlineIncrease = 10;
        TagCanvas.maxSpeed = 0.03;
        TagCanvas.minBrightness = 0.2;
        TagCanvas.depth = 0.92;
        TagCanvas.pulsateTo = 0.6;
        TagCanvas.initial = [0.1, -0.1];
        TagCanvas.decel = 0.98;
        TagCanvas.reverse = true;
        TagCanvas.hideTags = false;
        TagCanvas.shadow = false;
        TagCanvas.shadowBlur = 3;
        TagCanvas.weight = false;
        TagCanvas.imageScale = null;
        TagCanvas.fadeIn = 1000;
        TagCanvas.clickToFront = 600;
        // TagCanvas.weight = true;
        // TagCanvas.weightMode = "colour";
        // TagCanvas.weightGradient = "{0:'#f00', 0.33:'#ff0', 0.66:'#0f0', 1:'#00f'}";
        try {
            TagCanvas.Start("tagcanvas", "taglist");
        } catch (e) {
            console.log("Canvas error.");
        }
    };
    function restart() {
        TagCanvas.shape = shape;
        TagCanvas.lock = lock;
        TagCanvas.Start("tagcanvas", ttags);
    }
    function changetags(t) {
        ttags = t;
        restart();
    }
//]]>