import PropTypes from 'prop-types';
import React, { Component, PureComponent } from 'react';
import LayoutManager from './LayoutManager';
import DraggerManager from './DragManager';

export default function createDisplayObject(DisplayObject, displayProps, forceImpure) {
    const Comp = forceImpure ? Component : PureComponent;

    return class extends Comp {
        static propTypes = {
            item: PropTypes.object,
            style: PropTypes.object,
            index: PropTypes.number,
            dragEnabled: PropTypes.bool,
            dragManager: PropTypes.object,
            itemsLength: PropTypes.number,
            revertRow: PropTypes.number,
            revertDistance: PropTypes.number,
        };

        state = {};

        updateDrag(x, y) {
            // Pause Animation lets our item return to a snapped position without being animated
            let pauseAnimation = false;
            if (!this.props.dragManager.dragItem) {
                pauseAnimation = true;
                setTimeout(() => this.setState({ pauseAnimation: false }), 20);
            }
            this.setState({
                dragX: x,
                dragY: y,
                pauseAnimation,
            });
        }

        onDrag = e => {
            if (this.props.dragManager) {
                this.props.dragManager.startDrag(
                    e,
                    this.domNode,
                    this.props.item,
                    this.updateDrag.bind(this)
                );
            }
        };

        getStyle() {
            const options = {
                itemWidth: this.props.itemWidth,
                itemHeight: this.props.itemHeight,
                verticalMargin: this.props.verticalMargin,
                zoom: this.props.zoom,
                columns: this.props.columns,
            };
            const layout = new LayoutManager(options, this.props.layoutWidth);
            const style = layout.getStyle(
                this.props.index,
                this.props.revertRow,
                this.props.revertDistance,
                this.props.animation,
                this.props.item[this.props.filterProp]
            );
            // If this is the object being dragged, return a different style
            if (
                this.props.dragManager.dragItem &&
                this.props.dragManager.dragItem[this.props.keyProp] ===
                    this.props.item[this.props.keyProp]
            ) {
                const dragStyle = DraggerManager.getStyle(this.state.dragX, this.state.dragY);
                return { ...style, ...dragStyle };
            }
            if (this.state && this.state.pauseAnimation) {
                const pauseAnimationStyle = { ...style };
                pauseAnimationStyle.WebkitTransition = 'none';
                pauseAnimationStyle.MozTransition = 'none';
                pauseAnimationStyle.msTransition = 'none';
                pauseAnimationStyle.transition = 'none';
                return pauseAnimationStyle;
            }
            if (this.props.dragEnabled) {
                return { ...style, zIndex: 2 };
            }
            return { ...style, zIndex: -1 };
        }

        componentDidMount() {
            if (this.props.dragEnabled) {
                this.domNode.addEventListener('mousedown', this.onDrag);
                this.domNode.addEventListener('touchstart', this.onDrag);
                this.domNode.setAttribute('data-key', this.props.item[this.props.keyProp]);
            }
        }

        componentWillUnmount() {
            if (this.props.dragEnabled) {
                this.props.dragManager.endDrag();
                this.domNode.removeEventListener('mousedown', this.onDrag);
                this.domNode.removeEventListener('touchstart', this.onDrag);
            }
        }

        render() {
            return (
                <div
                    ref={node => {
                        this.domNode = node;
                    }}
                    style={this.getStyle()}
                >
                    <DisplayObject
                        {...displayProps}
                        item={this.props.item}
                        index={this.props.index}
                        itemsLength={this.props.itemsLength}
                        columns={this.props.columns}
                    />
                </div>
            );
        }
    };
}
