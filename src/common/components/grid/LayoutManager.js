export default class LayoutManager {
    columns;

    horizontalMargin;

    verticalMargin;

    layoutWidth;

    itemHeight;

    itemWidth;

    rowHeight;

    constructor(options, width) {
        this.update(options, width);
    }

    update(options, width) {
        this.layoutWidth = width;
        this.zoom = options.zoom;
        this.columns = options.columns;
        this.itemWidth = Math.round(options.itemWidth * this.zoom);
        this.itemHeight = Math.round(options.itemHeight * this.zoom);
        this.horizontalMargin =
            this.columns === 1
                ? 0
                : Math.round(this.layoutWidth - this.columns * this.itemWidth) / (this.columns - 1);
        this.verticalMargin =
            options.verticalMargin === -1 ? this.horizontalMargin : options.verticalMargin;
        this.rowHeight = this.itemHeight + this.verticalMargin;
    }

    getTotalHeight(filteredTotal) {
        return Math.ceil(filteredTotal / this.columns) * this.rowHeight - this.verticalMargin;
    }

    getRow(index) {
        return Math.floor(index / this.columns);
    }

    getColumn(index) {
        return index - this.getRow(index) * this.columns;
    }

    getPosition(index, revertRow, revertDistance) {
        const column = this.getColumn(index);
        const row = this.getRow(index);
        const margin = this.horizontalMargin;
        const width = this.itemWidth;

        const isReverted = row === revertRow || (row - revertRow) % revertDistance === 0;
        const x = Math.round(column * width + column * margin);
        const y = Math.round((this.itemHeight + this.verticalMargin) * row) - row * 25;
        return {
            x: isReverted ? this.layoutWidth - (width + x) : x,
            y,
        };
    }

    getTransform(index, revertRow, revertDistance) {
        const position = this.getPosition(index, revertRow, revertDistance);
        return `translate3d(${position.x}px, ${position.y}px, 0)`;
    }

    getStyle(index, revertRow, revertDistance, animation, isFiltered) {
        const transform = this.getTransform(index, revertRow, revertDistance);
        const style = {
            width: `${this.itemWidth}px`,
            height: `${this.itemHeight}px`,
            WebkitTransform: transform,
            MozTransform: transform,
            msTransform: transform,
            transform,
            position: 'absolute',
            boxSizing: 'border-box',
            display: isFiltered ? 'none' : 'block',
        };

        if (animation) {
            style.WebkitTransition = `-webkit-${animation}`;
            style.MozTransition = `-moz-${animation}`;
            style.msTransition = `ms-${animation}`;
            style.transition = animation;
        }

        return style;
    }
}
