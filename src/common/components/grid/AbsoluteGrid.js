import { debounce, sortBy } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component, PureComponent } from 'react';
import createDisplayObject from './BaseDisplayObject';
import DragManager from './DragManager';
import LayoutManager from './LayoutManager';

export default function createAbsoluteGrid(
    DisplayObject,
    displayProps = {},
    forceImpure = false,
    layoutStyle = {}
) {
    const Comp = forceImpure ? Component : PureComponent;
    const WrappedDisplayObject = createDisplayObject(DisplayObject, displayProps, forceImpure);

    return class extends Comp {
        static defaultProps = {
            items: [],
            keyProp: 'key',
            filterProp: 'filtered',
            sortProp: 'sort',
            itemWidth: 128,
            itemHeight: 128,
            verticalMargin: -1,
            columns: 11,
            responsive: false,
            animation: 'transform 300ms ease',
            zoom: 1,
            revertRow: -1,
            revertDistance: 0,
            onMove: () => {},
            onDragStart: () => {},
            onDragMove: () => {},
            onDragEnd: () => {},
        };

        static propTypes = {
            items: PropTypes.arrayOf(PropTypes.object).isRequired,
            itemWidth: PropTypes.number,
            itemHeight: PropTypes.number,
            verticalMargin: PropTypes.number,
            zoom: PropTypes.number,
            columns: PropTypes.number,
            revertRow: PropTypes.number,
            revertDistance: PropTypes.number,
            responsive: PropTypes.bool,
            keyProp: PropTypes.string,
            sortProp: PropTypes.string,
            filterProp: PropTypes.string,
            animation: PropTypes.string,
            onMove: PropTypes.func,
            onDragStart: PropTypes.func,
            onDragMove: PropTypes.func,
            onDragEnd: PropTypes.func,
        };

        constructor(props, context) {
            super(props, context);
            this.onResize = debounce(this.onResize, 150);
            this.dragManager = new DragManager(
                this.props.onMove,
                this.props.onDragStart,
                this.props.onDragEnd,
                this.props.onDragMove,
                this.props.keyProp
            );
            this.state = { layoutWidth: 0 };
        }

        render() {
            if (!this.state.layoutWidth || !this.props.items.length) {
                return (
                    <div
                        ref={node => {
                            this.container = node;
                        }}
                    />
                );
            }

            let filteredIndex = 0;
            const sortedIndex = {};
            sortBy(this.props.items, this.props.sortProp).forEach(item => {
                if (!item[this.props.filterProp]) {
                    const key = item[this.props.keyProp];
                    sortedIndex[key] = filteredIndex;
                    filteredIndex += 1;
                }
            });

            const itemsLength = this.props.items.length;
            const gridItems = this.props.items.map(item => {
                const key = item[this.props.keyProp];
                const index = sortedIndex[key];
                return (
                    <WrappedDisplayObject
                        item={item}
                        index={index}
                        key={key}
                        itemsLength={itemsLength}
                        animation={this.props.animation}
                        itemWidth={this.props.itemWidth}
                        itemHeight={this.props.itemHeight}
                        layoutWidth={this.state.layoutWidth}
                        verticalMargin={this.props.verticalMargin}
                        zoom={this.props.zoom}
                        columns={this.props.columns}
                        keyProp={this.props.keyProp}
                        filterProp={this.props.filterProp}
                        dragEnabled={item.dragEnabled}
                        dragManager={this.dragManager}
                        revertRow={this.props.revertRow}
                        revertDistance={this.props.revertDistance}
                    />
                );
            });

            const options = {
                itemWidth: this.props.itemWidth,
                itemHeight: this.props.itemHeight,
                verticalMargin: this.props.verticalMargin,
                columns: this.props.columns,
                zoom: this.props.zoom,
            };
            const layout = new LayoutManager(options, this.state.layoutWidth);
            const gridStyle = {
                position: 'relative',
                display: 'block',
                height:
                    layout.getTotalHeight(filteredIndex) -
                    Math.floor(itemsLength / options.columns) * 25,
                ...layoutStyle,
                padding: 16,
            };

            return (
                <div
                    style={gridStyle}
                    className="absoluteGrid"
                    ref={node => {
                        this.container = node;
                    }}
                >
                    {gridItems}
                </div>
            );
        }

        componentDidMount() {
            if (this.props.responsive) {
                window.addEventListener('resize', this.onResize);
            }
            this.onResize();
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.onResize);
        }

        onResize = () => {
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(this.getDOMWidth);
            } else {
                setTimeout(this.getDOMWidth, 66);
            }
        };

        getDOMWidth = () => {
            const width = this.container && this.container.clientWidth;

            if (this.state.layoutWidth !== width) {
                this.setState({ layoutWidth: width });
            }
        };
    };
}
