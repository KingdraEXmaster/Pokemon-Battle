AFRAME.registerComponent("movement-control", {
    init: function() {
        const el = this.el;
        const speed = 1;

        document.addEventListener("keydown", (event)=>{
            var position = el.getAttribute("position");
            let x = position.x;
            let y = position.y;
            let z = position.z;

            if (event.key === "w") {
                z += speed;     // z = z-speed
            };
            if (event.key === "s") {
                z -= speed;     // z = z+speed
            };
            if (event.key === "a") {
                x -= speed;     // x = x-speed
            };
            if (event.key === "d") {
                x += speed;     // x = x+speed
            };

            el.setAttribute ("position", {x: x,y: y, z: z});
        })
    }
})