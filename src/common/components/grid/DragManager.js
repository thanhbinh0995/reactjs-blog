export default class DragManager {
    dragItem;

    initialMouseX;

    initialMouseY;

    initialEventX;

    initialEventY;

    dragX;

    dragY;

    keyProp;

    constructor(moveFn, dragStartFn, dragEndFn, dragMoveFn, keyProp) {
        this.dragMove = this.dragMove.bind(this);
        this.endDrag = this.endDrag.bind(this);
        this.moveFn = moveFn;
        this.dragStartFn = dragStartFn;
        this.dragEndFn = dragEndFn;
        this.dragMoveFn = dragMoveFn;
        this.keyProp = keyProp;
    }

    dragMove(e) {
        const tolerance = 3;
        const isTouch = e.touches && e.touches.length;
        const pageX = isTouch ? e.touches[0].pageX : e.pageX;
        const pageY = isTouch ? e.touches[0].pageY : e.pageY;

        const xMovement = Math.abs(this.initialEventX - pageX);
        const yMovement = Math.abs(this.initialEventY - pageY);

        if (xMovement > tolerance || yMovement > tolerance) {
            const clientX = isTouch ? e.touches[0].clientX : e.clientX;
            const clientY = isTouch ? e.touches[0].clientY : e.clientY;

            this.dragX = clientX - this.initialMouseX;
            this.dragY = clientY - this.initialMouseY;

            if (this.update && typeof this.update === 'function') {
                this.update(this.dragX, this.dragY);
            }

            let targetKey;
            let targetElement = document.elementFromPoint(clientX, clientY);
            while (targetElement && targetElement.parentNode) {
                if (targetElement.getAttribute('data-key')) {
                    targetKey = targetElement.getAttribute('data-key');
                    break;
                }
                targetElement = targetElement.parentNode;
            }

            if (targetKey && targetKey !== this.dragItem[this.keyProp]) {
                this.moveFn(this.dragItem[this.keyProp], targetKey);
            }

            e.stopPropagation();
            e.preventDefault();
        }

        this.dragMoveFn(e);
    }

    endDrag() {
        document.removeEventListener('mousemove', this.dragMove);
        document.removeEventListener('mouseup', this.endDrag);

        this.dragItem = null;
        if (this.update && typeof this.update === 'function') {
            this.update(null, null);
        }
        this.update = null;

        this.dragEndFn();
    }

    startDrag(e, domNode, item, fnUpdate) {
        const isTouch = e.targetTouches && e.targetTouches.length === 1;
        if (e.button === 0 || isTouch) {
            const rect = domNode.getBoundingClientRect();

            this.update = fnUpdate;
            this.dragItem = item;
            const pageX = isTouch ? e.targetTouches[0].pageX : e.pageX;
            const pageY = isTouch ? e.targetTouches[0].pageY : e.pageY;

            this.initialMouseX = Math.round(pageX - (rect.left + window.pageXOffset));
            this.initialMouseY = Math.round(pageY - (rect.top + window.pageYOffset));
            this.initialEventX = pageX;
            this.initialEventY = pageY;

            document.addEventListener('mousemove', this.dragMove);
            document.addEventListener('touchmove', this.dragMove);
            document.addEventListener('mouseup', this.endDrag);
            document.addEventListener('touchend', this.endDrag);
            document.addEventListener('touchcancel', this.endDrag);

            // This is needed to stop text selection in most browsers
            e.preventDefault();
        }

        this.dragStartFn(e);
    }

    static getStyle(x, y) {
        const transform = `translate3d(${x}px, ${y}px, 0)`;
        return {
            position: 'fixed',
            zIndex: 1000,
            left: 0,
            top: 0,
            WebkitTransform: transform,
            MozTransform: transform,
            msTransform: transform,
            transform,
            WebkitTransition: 'none',
            MozTransition: 'none',
            msTransition: 'none',
            transition: 'none',
            pointerEvents: 'none',
        };
    }
}
